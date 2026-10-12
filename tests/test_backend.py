"""
NetraShiksha AI - Backend Integration Test Suite
Validates that all engines (Vision, OCR, Diagrams, QA, ISL, TTS, Exam) execute without error.
"""

import sys
import os
from pathlib import Path

# Add project root to sys.path
PROJECT_ROOT = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(PROJECT_ROOT))

def run_tests():
    print("=== Testing NetraShiksha AI Backend Engines ===")

    # 1. Test Vision Preprocessor
    print("[1/7] Testing BoardVisionPreprocessor...")
    from backend.engines.vision_preprocessor import BoardVisionPreprocessor
    import cv2
    vision = BoardVisionPreprocessor()
    img_path = PROJECT_ROOT / "data" / "sample_boards" / "physics_chalkboard.jpg"
    img = cv2.imread(str(img_path))
    assert img is not None, "Failed to load test image"
    board_type = vision.detect_board_type(img)
    print("  -> Board Type:", board_type["label"])
    enhanced = vision.enhance_board(img)
    annotated, rois = vision.segment_rois(enhanced)
    print(f"  -> Segmented {len(rois)} Regions of Interest (ROIs)")

    # 2. Test OCR & Math Engine
    print("[2/7] Testing ClassroomOCREngine...")
    from backend.engines.ocr_and_math_engine import ClassroomOCREngine
    ocr = ClassroomOCREngine()
    formula_speech = ocr.convert_math_to_speech("x = (-b +/- sqrt(b^2 - 4*a*c)) / (2*a)")
    print("  -> Math Spoken:", formula_speech)
    parsed = ocr.parse_board_content("physics_chalkboard")
    print(f"  -> Parsed Topic: {parsed['topic']} with {len(parsed['sections'])} sections")

    # 3. Test Diagram Describer
    print("[3/7] Testing DiagramDescriberEngine...")
    from backend.engines.diagram_describer import DiagramDescriberEngine
    diagram = DiagramDescriberEngine()
    cell_desc = diagram.describe("plant_cell")
    print(f"  -> Diagram: {cell_desc['title']}, Zones: {len(cell_desc['spatial_zones'])}")

    # 4. Test Voice QA Engine
    print("[4/7] Testing ClassroomVoiceQAEngine...")
    from backend.engines.voice_qa_engine import ClassroomVoiceQAEngine
    qa = ClassroomVoiceQAEngine()
    ans = qa.answer_query("What is the homework on the board?")
    print("  -> Voice QA Answer:", ans["answer"])

    # 5. Test Audio Transcriber & Jargon
    print("[5/7] Testing LectureTranscriberEngine...")
    from backend.engines.audio_transcriber_engine import LectureTranscriberEngine
    transcriber = LectureTranscriberEngine()
    test_lecture = "Today we discuss photosynthesis in the chloroplast, and how mitochondria produces energy."
    summary = transcriber.generate_lecture_summary(test_lecture)
    print(f"  -> Detected Jargon: {[j['term'] for j in summary['jargon_detected']]}")
    print(f"  -> Generated {len(summary['flashcards'])} Flashcards")

    # 6. Test ISL Sign Translation
    print("[6/7] Testing ISLSignTranslationEngine...")
    from backend.engines.isl_sign_engine import ISLSignTranslationEngine
    isl = ISLSignTranslationEngine()
    isl_res = isl.translate_sentence("Teacher explained photosynthesis in classroom")
    print(f"  -> ISL Timeline: {len(isl_res['timeline'])} sign gestures generated")

    # 7. Test Exam Dictation Engine
    print("[7/7] Testing ExamDictationEngine...")
    from backend.engines.exam_dictation_engine import ExamDictationEngine
    exam = ExamDictationEngine()
    eval_res = exam.evaluate_dictation(1, "Photosynthesis is the process in chloroplast using chlorophyll to make glucose and oxygen.")
    print(f"  -> Exam Evaluation: Awarded {eval_res['awarded_marks']}/{eval_res['max_marks']} marks ({eval_res['percentage']}%)")

    # 8. Test Main FastAPI App routes
    print("[8/8] Testing FastAPI App...")
    from backend.main import app
    print(f"  -> FastAPI App Initialized with {len(app.routes)} routes!")

    print("\n>>> ALL 8 BACKEND INTEGRATION TESTS PASSED PERFECTLY! <<<")

if __name__ == "__main__":
    run_tests()
