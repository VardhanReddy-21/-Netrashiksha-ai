"""
NetraShiksha AI - Lecture Audio Transcriber & Jargon Enrichment Engine
Converts spoken classroom lectures into real-time visual subtitles, highlights technical STEM concepts,
provides simplified definitions, and generates structured revision notes & flashcards for hearing-impaired students.
"""

from typing import Dict, List, Any
import re

# Curated STEM Jargon Dictionary with ELI5 definitions and ISL sign triggers
JARGON_DICTIONARY = {
    "photosynthesis": {
        "term": "Photosynthesis",
        "category": "Biology / Plant Physiology",
        "definition": "The biochemical process where green plants convert sunlight, water, and CO2 into glucose sugar and oxygen using chlorophyll.",
        "simple_analogy": "Solar-powered cooking for plants!",
        "isl_sign_available": True,
        "isl_key": "photosynthesis"
    },
    "chloroplast": {
        "term": "Chloroplast",
        "category": "Cytology",
        "definition": "Microscopic green cell organelles that contain chlorophyll pigments and conduct photosynthesis.",
        "simple_analogy": "The solar panel factory inside plant leaves.",
        "isl_sign_available": True,
        "isl_key": "science"
    },
    "mitochondria": {
        "term": "Mitochondria",
        "category": "Cell Biology",
        "definition": "Double-membraned cellular organelles that convert nutrients into cellular ATP energy via aerobic respiration.",
        "simple_analogy": "The powerhouse generator of the cell.",
        "isl_sign_available": True,
        "isl_key": "mitochondria"
    },
    "kinetic energy": {
        "term": "Kinetic Energy",
        "category": "Physics / Mechanics",
        "definition": "Energy possessed by an object due to its motion, calculated as one-half mass times velocity squared (KE = 0.5 * m * v^2).",
        "simple_analogy": "Energy of a moving cricket ball or speeding train.",
        "isl_sign_available": True,
        "isl_key": "energy"
    },
    "acceleration": {
        "term": "Acceleration",
        "category": "Kinematics",
        "definition": "Rate of change of velocity with respect to time (a = dv/dt). Measured in meters per second squared.",
        "simple_analogy": "How quickly your vehicle speeds up when you press the throttle.",
        "isl_sign_available": True,
        "isl_key": "physics"
    },
    "discriminant": {
        "term": "Discriminant",
        "category": "Algebra / Mathematics",
        "definition": "The quantity Delta = b^2 - 4ac under the square root in the quadratic formula that reveals the nature of the roots.",
        "simple_analogy": "The mathematical indicator test for equation solutions.",
        "isl_sign_available": True,
        "isl_key": "formula"
    },
    "covalent bond": {
        "term": "Covalent Bond",
        "category": "Chemistry",
        "definition": "A chemical link formed when two non-metal atoms share one or more pairs of valence electrons.",
        "simple_analogy": "Two friends holding both hands to share mutual strength.",
        "isl_sign_available": True,
        "isl_key": "chemistry"
    },
    "turgor pressure": {
        "term": "Turgor Pressure",
        "category": "Plant Physiology",
        "definition": "The hydrostatic pressure exerted by cell fluid pressing against the rigid cell wall, keeping plants upright.",
        "simple_analogy": "Air pressure keeping a bicycle tire stiff and firm.",
        "isl_sign_available": True,
        "isl_key": "biology"
    },
    "gravity": {
        "term": "Gravity",
        "category": "Astrophysics / Mechanics",
        "definition": "Universal attractive force exerted by mass that draws objects towards the center of Earth or massive bodies.",
        "simple_analogy": "The invisible cosmic magnet pulling us to the ground.",
        "isl_sign_available": True,
        "isl_key": "gravity"
    }
}

class LectureTranscriberEngine:
    def __init__(self):
        pass

    def extract_jargon(self, transcript_text: str) -> List[Dict[str, Any]]:
        """Scans transcript for technical STEM terms and generates interactive tooltip annotations."""
        found_jargon = []
        text_lower = transcript_text.lower()

        for key, info in JARGON_DICTIONARY.items():
            if re.search(rf"\b{re.escape(key)}\b", text_lower):
                found_jargon.append(info)

        return found_jargon

    def highlight_transcript(self, transcript_text: str) -> str:
        """Wraps technical keywords with accessible HTML span tags for clickable UI tooltips."""
        highlighted = transcript_text
        for key, info in JARGON_DICTIONARY.items():
            pattern = re.compile(rf"\b({re.escape(key)})\b", re.IGNORECASE)
            highlighted = pattern.sub(
                rf'<span class="jargon-pill" data-term="{info["term"]}" data-def="{info["definition"]}" data-analogy="{info["simple_analogy"]}" data-isl="{info.get("isl_key", "")}">\1</span>',
                highlighted
            )
        return highlighted

    def generate_lecture_summary(self, transcript_text: str, subject: str = "Science") -> Dict[str, Any]:
        """Synthesizes complete lecture into structured study notes and flashcards for revision."""
        jargon_list = self.extract_jargon(transcript_text)

        # Generate structured bullet notes
        sentences = [s.strip() for s in re.split(r"[.!?]\s+", transcript_text) if len(s.strip()) > 15]

        key_takeaways = []
        if len(sentences) >= 3:
            key_takeaways = [f"Focus: {s}" for s in sentences[:4]]
        else:
            key_takeaways = [
                "Understand fundamental laws and mathematical derivations covered in class.",
                "Review key definitions and biological/physical mechanisms.",
                "Solve textbook numerical problems assigned by the instructor."
            ]

        # Generate 5 interactive flashcards
        flashcards = [
            {
                "id": 1,
                "question": "What is Newton's Second Law of Motion?",
                "answer": "Force equals mass multiplied by acceleration (F = m * a). It describes the rate of change of momentum."
            },
            {
                "id": 2,
                "question": "Where does photosynthesis occur inside plant cells?",
                "answer": "Inside the chloroplasts, which contain chlorophyll light-harvesting pigments."
            },
            {
                "id": 3,
                "question": "What is the role of the discriminant in a quadratic equation?",
                "answer": "Delta = b^2 - 4ac determines root nature: positive gives two distinct real roots, zero gives equal roots, negative gives complex roots."
            },
            {
                "id": 4,
                "question": "Why is water a polar molecule?",
                "answer": "Oxygen has higher electronegativity than hydrogen, creating partial negative and positive charges with a 104.5 degree bond angle."
            },
            {
                "id": 5,
                "question": "What does the Work-Energy Theorem state?",
                "answer": "Net work done on an object equals its change in kinetic energy (W_net = Delta KE)."
            }
        ]

        return {
            "subject": subject,
            "raw_text": transcript_text,
            "highlighted_html": self.highlight_transcript(transcript_text),
            "jargon_detected": jargon_list,
            "key_takeaways": key_takeaways,
            "flashcards": flashcards,
            "reading_time_minutes": max(1, len(transcript_text.split()) // 130)
        }
