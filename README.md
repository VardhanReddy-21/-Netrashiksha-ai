# NetraShiksha AI (नेत्रशिक्षा AI)
### Multimodal Assistive Classroom & Real-Time Educational Vision for Visually and Hearing Impaired Students

[![FastAPI](https://img.shields.io/badge/Backend-FastAPI-009688.svg?style=flat&logo=fastapi)](https://fastapi.tiangolo.com)
[![OpenCV](https://img.shields.io/badge/Vision-OpenCV%20CLAHE-5C3EE8.svg?style=flat&logo=opencv)](https://opencv.org)
[![Indian Sign Language](https://img.shields.io/badge/Accessibility-ISL%20Sign%20Cards-3B82F6.svg?style=flat)](https://github.com)
[![WCAG 2.1 AAA](https://img.shields.io/badge/Standard-WCAG%202.1%20AAA-10B981.svg?style=flat)](https://www.w3.org/WAI/WCAG21/quickref/)
[![Languages](https://img.shields.io/badge/Languages-8%20Indian%20Languages-F59E0B.svg?style=flat)](https://github.com)

---

## 🌟 Overview
**NetraShiksha AI** is an assistive classroom platform designed to break educational barriers for **visually impaired (blind / low-vision)** and **hearing-impaired (deaf / hard of hearing)** students in STEM subjects.

### Key Capabilities:
- 👁️ **Netra Mode (Visual Impairments):**
  - Classroom blackboard and whiteboard computer vision OCR.
  - CLAHE contrast enhancement & glare suppression.
  - Multi-region of interest (ROI) bounding box segmentation.
  - **Phonetic Mathematical Formula Voice Reader:** Pronounces complex LaTeX and math formulas naturally (e.g. $\int_{x_1}^{x_2} F(x)dx \to$ *"Work equals definite integral from x1 to x2 of force F of x with respect to x"*).
  - **Spatial Audio Guided Diagram Describer:** Explains complex 2D scientific schematics (plant cell, molecular polarity) with structured spatial tours.
  - **Interactive Voice Q&A:** Answers natural language student queries (*"What homework was given?"*).
- 🤟 **Shiksha Mode (Hearing Impairments):**
  - Real-time lecture speech subtitles with automatic **STEM Technical Jargon Highlighting**.
  - Interactive ELI5 (Explain Like I'm 5) definitions and real-world analogies.
  - **Indian Sign Language (ISL) Visual Interpreter:** 62 vector SVG sign gesture cards with finger-spelling timeline fallback.
  - Automated classroom summary notes and interactive active recall flashcards.
- 🎙️ **Exam Scribe Mode:**
  - Speaks CBSE/University question papers aloud.
  - Accepts verbal answer dictation with speech recognition.
  - Automatically formats spoken equations into clean mathematical notation.
  - Auto-grades answers against rubric keywords with official stamped transcripts.
- 🇮🇳 **8 Indian Languages & GPS Auto-Detection:**
  - English (`en`), Hindi (`hi`), Telugu (`te`), Tamil (`ta`), Marathi (`mr`), Kannada (`kn`), Odia (`or`), Assamese (`as`).
  - Automatically identifies user state via geolocation and switches language.
- ♿ **WCAG 2.1 AAA Accessibility:**
  - High-Contrast Low Vision Yellow-on-Black theme (19:1+ contrast ratio).
  - High-Contrast Cyan Matrix and Inverted Whiteboard themes.
  - Spacebar audio playback shortcut and complete keyboard navigation.

---

## 🚀 1-Click Quickstart

### Prerequisites
- Python 3.10+ (Tested on Python 3.14.6)
- Standard web browser (Chrome, Edge, Firefox, Safari)

### Installation & Launch
```bash
# 1. Clone or extract the project
cd netrashiksha-ai

# 2. Install dependencies
pip install -r requirements.txt

# 3. Launch with 1-click universal runner
python run.py
```

The application automatically opens at:
👉 **`http://127.0.0.1:8001`**

---

## 📸 Architecture & Workflow Diagrams

| System Architecture | End-to-End Workflow Flowchart |
|---|---|
| ![Architecture](docs/system_architecture.jpg) | ![Flowchart](docs/workflow_flowchart.jpg) |

---

## 📂 Project Structure
```
netrashiksha-ai/
├── backend/
│   ├── main.py                     # FastAPI REST application
│   └── engines/
│       ├── vision_preprocessor.py  # OpenCV CLAHE & ROI segmentation
│       ├── ocr_and_math_engine.py  # LaTeX & phonetic math voice reader
│       ├── diagram_describer.py    # Spatial audio guided diagram tours
│       ├── voice_qa_engine.py      # Conversational Q&A on blackboard
│       ├── audio_transcriber_engine.py # Subtitles & STEM jargon pills
│       ├── isl_sign_engine.py      # Indian Sign Language interpreter
│       ├── multilingual_tts.py     # 8 Indian languages speech synthesis
│       └── exam_dictation_engine.py # Voice scribe & rubric evaluator
├── data/                           # Sample boards, diagrams & exams
├── docs/                           # Master report, architecture, viva Q&A
├── frontend/                       # Accessible UI, CSS & 62 ISL SVG cards
├── tests/                          # Automated backend & live HTTP test suites
├── requirements.txt                # Package dependencies
└── run.py                          # 1-Click launcher
```

---

## 🧪 Testing & Verification
Run the automated test suites:
```bash
# Run unit & engine integration tests (8 engines)
python tests/test_backend.py

# Run live HTTP endpoint verification (9 endpoints)
python tests/test_live_server.py
```

---

## 📜 Complete Documentation
- 📘 [Master Project Report](docs/MASTER_PROJECT_REPORT.md)
- 📐 [Technical Architecture](docs/ARCHITECTURE.md)
- 🎤 [Presentation & Defense Guide](docs/EXPLAIN_TO_FRIENDS.md)
- 🎓 [25 Viva Voce & Interview Q&A](docs/VIVA_AND_INTERVIEW_QA.md)

---

## 🏆 Impact & Compliance
- **Rights of Persons with Disabilities (RPwD) Act 2016 (India)**
- **National Education Policy (NEP) 2020 (Chapter 6 - Inclusive Education)**
- **W3C Web Content Accessibility Guidelines (WCAG) 2.1 Level AAA**
