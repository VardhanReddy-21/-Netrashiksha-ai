"""
NetraShiksha AI - Indian Sign Language (ISL) Translation Engine
Translates English and educational sentences into synchronized sequences of ISL gesture cards
and finger-spelling representations for hearing-impaired students.
"""

from typing import List, Dict, Any
import re
from pathlib import Path

KNOWN_ISL_TERMS = {
    "hello": "hello",
    "hi": "hello",
    "greetings": "hello",
    "teacher": "teacher",
    "instructor": "teacher",
    "professor": "teacher",
    "student": "student",
    "pupil": "student",
    "classroom": "classroom",
    "class": "classroom",
    "room": "classroom",
    "read": "read",
    "reading": "read",
    "write": "write",
    "writing": "write",
    "question": "question",
    "query": "question",
    "doubt": "question",
    "answer": "answer",
    "solution": "answer",
    "exam": "exam",
    "test": "exam",
    "quiz": "exam",
    "important": "important",
    "crucial": "important",
    "understand": "understand",
    "comprehend": "understand",
    "thank": "thank_you",
    "thanks": "thank_you",
    "thank you": "thank_you",
    "yes": "yes",
    "correct": "yes",
    "true": "yes",
    "no": "no",
    "incorrect": "no",
    "false": "no",
    "science": "science",
    "scientific": "science",
    "mathematics": "mathematics",
    "math": "mathematics",
    "maths": "mathematics",
    "physics": "physics",
    "chemistry": "chemistry",
    "chemical": "chemistry",
    "biology": "biology",
    "biological": "biology",
    "computer": "computer",
    "computing": "computer",
    "photosynthesis": "photosynthesis",
    "mitochondria": "mitochondria",
    "energy": "energy",
    "work": "energy",
    "formula": "formula",
    "equation": "formula",
    "gravity": "gravity",
    "gravitational": "gravity",
    "diagram": "diagram",
    "graph": "diagram",
    "chart": "diagram"
}

class ISLSignTranslationEngine:
    def __init__(self, static_url_prefix: str = "/static/isl_gestures"):
        self.static_url_prefix = static_url_prefix

    def translate_sentence(self, sentence: str) -> Dict[str, Any]:
        """Translates a sentence into a sequenced timeline of ISL visual sign cards."""
        clean_text = re.sub(r"[^\w\s]", "", sentence).strip()
        words = clean_text.split()

        sequence = []
        step_id = 1

        for word in words:
            w_lower = word.lower()
            if w_lower in KNOWN_ISL_TERMS:
                gesture_slug = KNOWN_ISL_TERMS[w_lower]
                sequence.append({
                    "step": step_id,
                    "type": "word_gesture",
                    "term": word,
                    "label": f"ISL Word Sign: {gesture_slug.upper()}",
                    "svg_url": f"{self.static_url_prefix}/{gesture_slug}.svg",
                    "duration_ms": 1200
                })
                step_id += 1
            else:
                # Finger spelling for each alphabet in the unknown word
                finger_spelling = []
                for char in w_lower:
                    if char.isalpha():
                        finger_spelling.append({
                            "char": char.upper(),
                            "svg_url": f"{self.static_url_prefix}/letter_{char}.svg"
                        })
                    elif char.isdigit():
                        finger_spelling.append({
                            "char": char,
                            "svg_url": f"{self.static_url_prefix}/number_{char}.svg"
                        })

                sequence.append({
                    "step": step_id,
                    "type": "finger_spelling",
                    "term": word,
                    "label": f"ISL Finger-Spelling: {word.upper()}",
                    "letters": finger_spelling,
                    "svg_url": finger_spelling[0]["svg_url"] if finger_spelling else f"{self.static_url_prefix}/diagram.svg",
                    "duration_ms": 800 * max(1, len(finger_spelling))
                })
                step_id += 1

        return {
            "original_sentence": sentence,
            "total_signs": len(sequence),
            "estimated_duration_sec": sum(item.get("duration_ms", 1000) for item in sequence) / 1000.0,
            "timeline": sequence
        }
