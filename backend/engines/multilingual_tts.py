"""
NetraShiksha AI - Multilingual Speech Synthesis Engine
Supports 8 Indian Languages (en, hi, te, ta, mr, kn, or, as) with cached MP3 generation,
fast timeout handling, and seamless client-side Web Speech API fallback.
"""

import os
import hashlib
import base64
from pathlib import Path
from gtts import gTTS

BASE_DIR = Path(__file__).resolve().parent.parent.parent
AUDIO_CACHE_DIR = BASE_DIR / "data" / "audio_cache"
AUDIO_CACHE_DIR.mkdir(parents=True, exist_ok=True)

LANG_CONFIG = {
    "en": {"name": "English", "native": "English", "gtts_code": "en", "tld": "co.in"},
    "hi": {"name": "Hindi", "native": "हिन्दी", "gtts_code": "hi", "tld": "co.in"},
    "te": {"name": "Telugu", "native": "తెలుగు", "gtts_code": "te", "tld": "co.in"},
    "ta": {"name": "Tamil", "native": "தமிழ்", "gtts_code": "ta", "tld": "co.in"},
    "mr": {"name": "Marathi", "native": "मराठी", "gtts_code": "mr", "tld": "co.in"},
    "kn": {"name": "Kannada", "native": "ಕನ್ನಡ", "gtts_code": "kn", "tld": "co.in"},
    "or": {"name": "Odia", "native": "ଓଡ଼ିଆ", "gtts_code": "hi", "tld": "co.in"},
    "as": {"name": "Assamese", "native": "অসমীয়া", "gtts_code": "bn", "tld": "co.in"}
}

# 1-second silent WAV base64 fallback in case network is disconnected
TINY_WAV_BASE64 = "UklGRigAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQQAAAAAAA=="

class MultilingualTTSEngine:
    def __init__(self):
        pass

    def synthesize(self, text: str, lang: str = "en", slow: bool = False, max_chars: int = 150) -> dict:
        """Synthesizes text to speech with local file caching and fast fallback."""
        lang_info = LANG_CONFIG.get(lang, LANG_CONFIG["en"])
        gtts_lang = lang_info["gtts_code"]
        tld = lang_info.get("tld", "co.in")

        # Trim text to prevent huge blocking network requests
        trimmed_text = text.strip()
        if len(trimmed_text) > max_chars:
            trimmed_text = trimmed_text[:max_chars].rsplit(" ", 1)[0] + "."

        cache_key = hashlib.md5(f"{gtts_lang}_{slow}_{trimmed_text}".encode("utf-8")).hexdigest()
        cache_file = AUDIO_CACHE_DIR / f"{cache_key}.mp3"

        if cache_file.exists():
            with open(cache_file, "rb") as f:
                audio_bytes = f.read()
            b64_audio = base64.b64encode(audio_bytes).decode("utf-8")
            return {
                "lang": lang,
                "lang_name": lang_info["name"],
                "native_name": lang_info["native"],
                "audio_base64": f"data:audio/mp3;base64,{b64_audio}",
                "text": trimmed_text,
                "status": "cached"
            }

        try:
            tts = gTTS(text=trimmed_text, lang=gtts_lang, tld=tld, slow=slow, timeout=3.0)
            tts.save(str(cache_file))
            with open(cache_file, "rb") as f:
                audio_bytes = f.read()
            b64_audio = base64.b64encode(audio_bytes).decode("utf-8")
            return {
                "lang": lang,
                "lang_name": lang_info["name"],
                "native_name": lang_info["native"],
                "audio_base64": f"data:audio/mp3;base64,{b64_audio}",
                "text": trimmed_text,
                "status": "generated"
            }
        except Exception:
            # Fallback cleanly to client-side speech
            return {
                "lang": lang,
                "lang_name": lang_info["name"],
                "native_name": lang_info["native"],
                "audio_base64": f"data:audio/wav;base64,{TINY_WAV_BASE64}",
                "text": trimmed_text,
                "status": "use_client_tts"
            }
