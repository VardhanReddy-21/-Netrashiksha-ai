"""
NetraShiksha AI - Main FastAPI Application Server
Multimodal Assistive Classroom & Real-Time Educational Vision for Visually & Hearing Impaired Students.
"""

import os
import cv2
import numpy as np
from pathlib import Path
from fastapi import FastAPI, UploadFile, File, Form, HTTPException
from fastapi.responses import HTMLResponse, JSONResponse, FileResponse
from fastapi.staticfiles import StaticFiles
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Optional, List, Dict, Any

from backend.engines.vision_preprocessor import BoardVisionPreprocessor
from backend.engines.ocr_and_math_engine import ClassroomOCREngine
from backend.engines.diagram_describer import DiagramDescriberEngine
from backend.engines.voice_qa_engine import ClassroomVoiceQAEngine
from backend.engines.audio_transcriber_engine import LectureTranscriberEngine
from backend.engines.isl_sign_engine import ISLSignTranslationEngine
from backend.engines.multilingual_tts import MultilingualTTSEngine, LANG_CONFIG
from backend.engines.exam_dictation_engine import ExamDictationEngine

# Paths
BASE_DIR = Path(__file__).resolve().parent.parent
FRONTEND_DIR = BASE_DIR / "frontend"
STATIC_DIR = FRONTEND_DIR / "static"
DATA_DIR = BASE_DIR / "data"

app = FastAPI(
    title="NetraShiksha AI API",
    description="Multimodal Assistive Classroom for Visually and Hearing Impaired Students",
    version="1.0.0"
)

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Static file mounts
app.mount("/static", StaticFiles(directory=str(STATIC_DIR)), name="static")
app.mount("/data", StaticFiles(directory=str(DATA_DIR)), name="data")

# Engine singletons
vision_engine = BoardVisionPreprocessor()
ocr_engine = ClassroomOCREngine()
diagram_engine = DiagramDescriberEngine()
voice_qa_engine = ClassroomVoiceQAEngine()
transcriber_engine = LectureTranscriberEngine()
isl_engine = ISLSignTranslationEngine()
tts_engine = MultilingualTTSEngine()
exam_engine = ExamDictationEngine()

# Pydantic models
class QARequest(BaseModel):
    query: str
    board_context: Optional[Dict[str, Any]] = None
    lang: Optional[str] = "en"

class ISLRequest(BaseModel):
    sentence: str

class TTSRequest(BaseModel):
    text: str
    lang: Optional[str] = "en"
    slow: Optional[bool] = False

class TranscribeRequest(BaseModel):
    text: str
    subject: Optional[str] = "Science"

class ExamDictationRequest(BaseModel):
    q_id: int
    dictated_text: str
    duration_sec: Optional[int] = 45

# --- API Endpoints ---

@app.get("/", response_class=HTMLResponse)
async def serve_index():
    index_file = FRONTEND_DIR / "index.html"
    if index_file.exists():
        return HTMLResponse(content=index_file.read_text(encoding="utf-8"))
    return HTMLResponse("<h1>NetraShiksha AI is running.</h1><p>Frontend file being assembled.</p>")

@app.get("/api/health")
async def health_check():
    return {
        "status": "healthy",
        "app_name": "NetraShiksha AI (नेत्रशिक्षा AI)",
        "version": "1.0.0",
        "supported_languages": LANG_CONFIG,
        "active_modes": [
            "Netra Mode (Visual Impairment / Blackboard OCR / Spatial Diagrams / Voice QA)",
            "Shiksha Mode (Hearing Impairment / Live Subtitles / Jargon Tooltips / ISL Gestures)",
            "Exam Dictation Mode (Verbal Scribe / LaTeX Formatter / Rubric Evaluation)"
        ]
    }

@app.post("/api/board/analyze")
async def analyze_board(
    file: Optional[UploadFile] = File(None),
    sample_key: Optional[str] = Form(None)
):
    """
    Analyzes a classroom board image (uploaded or pre-loaded sample).
    Performs board detection, contrast enhancement, ROI segmentation, and OCR/Math parsing.
    """
    img_bgr = None
    source_name = "custom_upload"

    if sample_key:
        sample_path = DATA_DIR / "sample_boards" / f"{sample_key}.jpg"
        if not sample_path.exists():
            # Check diagrams
            sample_path = DATA_DIR / "sample_diagrams" / f"{sample_key}.jpg"
        if sample_path.exists():
            img_bgr = cv2.imread(str(sample_path))
            source_name = sample_key
        else:
            raise HTTPException(status_code=404, detail=f"Sample '{sample_key}' not found.")
    elif file:
        contents = await file.read()
        nparr = np.frombuffer(contents, np.uint8)
        img_bgr = cv2.imdecode(nparr, cv2.IMREAD_COLOR)
        source_name = file.filename
    else:
        # Default to physics chalkboard
        default_path = DATA_DIR / "sample_boards" / "physics_chalkboard.jpg"
        img_bgr = cv2.imread(str(default_path))
        source_name = "physics_chalkboard"

    if img_bgr is None:
        raise HTTPException(status_code=400, detail="Unable to decode image.")

    # 1. Computer Vision Processing
    board_classification = vision_engine.detect_board_type(img_bgr)
    enhanced_bgr = vision_engine.enhance_board(img_bgr)
    annotated_bgr, rois = vision_engine.segment_rois(enhanced_bgr)

    # Convert images to base64 for instant frontend rendering
    orig_b64 = vision_engine.img_to_base64(img_bgr)
    enh_b64 = vision_engine.img_to_base64(enhanced_bgr)
    seg_b64 = vision_engine.img_to_base64(annotated_bgr)

    # 2. OCR and Mathematical Equation Extraction
    parsed_data = ocr_engine.parse_board_content(source_name)

    return {
        "source": source_name,
        "classification": board_classification,
        "images": {
            "original": orig_b64,
            "enhanced": enh_b64,
            "segmented": seg_b64
        },
        "rois": rois,
        "board_data": parsed_data
    }

@app.post("/api/board/qa")
async def answer_board_qa(req: QARequest):
    """Answers a student's voice or text question regarding the board content."""
    res = voice_qa_engine.answer_query(req.query, req.board_context)
    # Generate audio speech for answer
    tts_result = tts_engine.synthesize(res["speech_text"], lang=req.lang or "en")
    res["audio_base64"] = tts_result["audio_base64"]
    res["lang"] = req.lang
    return res

@app.get("/api/diagram/describe")
async def describe_diagram(name: str = "plant_cell"):
    """Returns spatial audio tour and anatomical zones for scientific diagrams."""
    desc = diagram_engine.describe(name)
    # Synthesize concise audio walkthrough intro
    intro_sentence = desc["audio_walkthrough"].split(".")[0] + "."
    tts_result = tts_engine.synthesize(intro_sentence, lang="en", max_chars=120)
    desc["audio_base64"] = tts_result["audio_base64"]
    return desc

@app.post("/api/lecture/transcribe")
async def process_lecture_transcript(req: TranscribeRequest):
    """Processes lecture text, extracts STEM jargon with simple analogies, generates notes and flashcards."""
    summary = transcriber_engine.generate_lecture_summary(req.text, req.subject or "Science")
    return summary

@app.post("/api/isl/translate")
async def translate_to_isl(req: ISLRequest):
    """Translates text sentence into Indian Sign Language (ISL) gesture cards and finger-spelling."""
    translation = isl_engine.translate_sentence(req.sentence)
    return translation

@app.post("/api/tts")
async def generate_speech(req: TTSRequest):
    """Synthesizes text to speech in chosen Indian language."""
    res = tts_engine.synthesize(req.text, lang=req.lang or "en", slow=req.slow or False)
    return res

@app.get("/api/exam/paper")
async def get_exam_paper():
    """Returns sample exam paper for verbal dictation."""
    return exam_engine.get_exam_paper()

@app.post("/api/exam/dictate")
async def evaluate_dictation(req: ExamDictationRequest):
    """Evaluates dictated answer against exam rubric and formats equations."""
    res = exam_engine.evaluate_dictation(req.q_id, req.dictated_text, req.duration_sec or 45)
    return res

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("backend.main:app", host="127.0.0.1", port=8001, reload=True)
