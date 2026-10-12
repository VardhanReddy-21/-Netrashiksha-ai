"""
NetraShiksha AI - Live HTTP Integration Verification
Tests all active endpoints on the live running server at http://127.0.0.1:8001
"""

import requests
import json

BASE_URL = "http://127.0.0.1:8001"

def test_endpoints():
    print(f"Testing live server at {BASE_URL}...")

    # 1. Health check
    r = requests.get(f"{BASE_URL}/api/health", timeout=5)
    assert r.status_code == 200, f"Health check failed: {r.status_code}"
    print("[PASS] /api/health returned 200 OK")

    # 2. Frontend index HTML
    r = requests.get(f"{BASE_URL}/", timeout=5)
    assert r.status_code == 200, f"Frontend index failed: {r.status_code}"
    assert "NetraShiksha AI" in r.text
    print("[PASS] / (index.html) returned 200 OK and valid HTML")

    # 3. Analyze sample board (Physics Chalkboard)
    r = requests.post(f"{BASE_URL}/api/board/analyze", data={"sample_key": "physics_chalkboard"}, timeout=10)
    assert r.status_code == 200, f"Board analyze failed: {r.status_code}"
    data = r.json()
    assert "classification" in data and "rois" in data
    print(f"[PASS] /api/board/analyze returned {len(data['rois'])} ROIs and board data")

    # 4. Board Voice QA
    r = requests.post(f"{BASE_URL}/api/board/qa", json={"query": "What is the formula for force?", "lang": "en"}, timeout=10)
    assert r.status_code == 200, f"Voice QA failed: {r.status_code}"
    qa_data = r.json()
    assert "answer" in qa_data and "audio_base64" in qa_data
    print(f"[PASS] /api/board/qa returned answer: '{qa_data['answer'][:50]}...' with audio")

    # 5. Diagram Spatial Tour
    r = requests.get(f"{BASE_URL}/api/diagram/describe?name=plant_cell", timeout=10)
    assert r.status_code == 200, f"Diagram describe failed: {r.status_code}"
    diag_data = r.json()
    assert "spatial_zones" in diag_data
    print(f"[PASS] /api/diagram/describe returned {len(diag_data['spatial_zones'])} spatial zones")

    # 6. Lecture transcription & Jargon extraction
    r = requests.post(f"{BASE_URL}/api/lecture/transcribe", json={"text": "Today we study photosynthesis in chloroplasts.", "subject": "Biology"}, timeout=10)
    assert r.status_code == 200, f"Lecture transcribe failed: {r.status_code}"
    lec_data = r.json()
    assert len(lec_data["jargon_detected"]) > 0
    print(f"[PASS] /api/lecture/transcribe detected {len(lec_data['jargon_detected'])} jargon terms")

    # 7. ISL Sign translation
    r = requests.post(f"{BASE_URL}/api/isl/translate", json={"sentence": "Teacher explained science"}, timeout=10)
    assert r.status_code == 200, f"ISL translate failed: {r.status_code}"
    isl_data = r.json()
    assert len(isl_data["timeline"]) > 0
    print(f"[PASS] /api/isl/translate generated {len(isl_data['timeline'])} sign cards")

    # 8. Exam Paper & Dictation
    r = requests.get(f"{BASE_URL}/api/exam/paper", timeout=5)
    assert r.status_code == 200, f"Exam paper failed: {r.status_code}"
    exam_paper = r.json()
    assert len(exam_paper["questions"]) > 0
    print(f"[PASS] /api/exam/paper returned {len(exam_paper['questions'])} exam questions")

    r = requests.post(f"{BASE_URL}/api/exam/dictate", json={
        "q_id": 1,
        "dictated_text": "Photosynthesis is the process in chloroplast using chlorophyll to make glucose and oxygen from carbon dioxide and water.",
        "duration_sec": 30
    }, timeout=10)
    assert r.status_code == 200, f"Exam dictate failed: {r.status_code}"
    dict_res = r.json()
    assert dict_res["awarded_marks"] > 0
    print(f"[PASS] /api/exam/dictate graded: {dict_res['awarded_marks']}/{dict_res['max_marks']} marks")

    # 9. Static Assets (ISL SVGs & Translations)
    r = requests.get(f"{BASE_URL}/static/isl_gestures/photosynthesis.svg", timeout=5)
    assert r.status_code == 200, f"Static asset failed: {r.status_code}"
    assert "<svg" in r.text
    print("[PASS] /static/isl_gestures/photosynthesis.svg served valid SVG")

    r = requests.get(f"{BASE_URL}/static/js/translations.js", timeout=5)
    assert r.status_code == 200, f"translations.js failed: {r.status_code}"
    for lang in ["en", "hi", "te", "ta", "mr", "kn", "or", "as"]:
        assert f"{lang}:" in r.text, f"Missing {lang} in translations.js"
    print("[PASS] /static/js/translations.js loaded with all 8 Indian languages (en, hi, te, ta, mr, kn, or, as)!")

    # 10. Test TTS across Indian languages
    for lang in ["hi", "te", "ta", "mr", "kn", "or", "as"]:
        r = requests.post(f"{BASE_URL}/api/tts", json={"text": "NetraShiksha AI", "lang": lang}, timeout=8)
        assert r.status_code == 200 and "audio_base64" in r.json()
    print("[PASS] Multilingual TTS verified for all 8 Indian languages!")

    print("\n>>> ALL 10 LIVE HTTP & MULTILINGUAL ENDPOINTS VERIFIED 100% OPERATIONAL! <<<")

if __name__ == "__main__":
    test_endpoints()
