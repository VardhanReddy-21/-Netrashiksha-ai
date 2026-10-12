"""
NetraShiksha AI - Verbal Exam Dictation & Scribe Assistant Engine
Enables visually impaired students to hear question papers aloud, dictate answers verbally,
auto-format mathematical formulas, and generate verified, stamped exam answer transcripts.
"""

from typing import Dict, List, Any
import datetime

class ExamDictationEngine:
    def __init__(self):
        # Sample CBSE Class XII Science Exam Paper
        self.sample_exam_questions = [
            {
                "q_id": 1,
                "marks": 3,
                "question": "Define Photosynthesis. Write the balanced chemical equation and identify the primary organelle involved in this process.",
                "model_keywords": ["photosynthesis", "chlorophyll", "chloroplast", "glucose", "carbon dioxide", "water", "oxygen", "light"],
                "audio_spoken": "Question 1 for 3 marks: Define Photosynthesis. Write the balanced chemical equation and identify the primary organelle involved in this process."
            },
            {
                "q_id": 2,
                "marks": 4,
                "question": "State Newton's Second Law of Motion. Derive the formula F = m*a from first principles of rate of change of momentum.",
                "model_keywords": ["newton", "momentum", "rate of change", "force", "mass", "acceleration", "f = ma", "dp/dt"],
                "audio_spoken": "Question 2 for 4 marks: State Newton's Second Law of Motion. Derive the formula F equals m times a from first principles of rate of change of momentum."
            },
            {
                "q_id": 3,
                "marks": 4,
                "question": "Explain why water is called a universal solvent. Mention the role of polarity and hydrogen bonding.",
                "model_keywords": ["universal solvent", "polar", "electronegativity", "hydrogen bonding", "dipole", "oxygen", "104.5"],
                "audio_spoken": "Question 3 for 4 marks: Explain why water is called a universal solvent. Mention the role of polarity and hydrogen bonding."
            }
        ]

    def get_exam_paper(self) -> Dict[str, Any]:
        """Returns exam metadata and list of questions with audio voice prompts."""
        return {
            "exam_title": "CBSE CLASS XII - SCIENCE & TECHNOLOGY EXAM",
            "time_allowed_minutes": 180,
            "total_marks": 70,
            "dictation_mode": "Active Voice Scribe with Automatic LaTeX formatting",
            "questions": self.sample_exam_questions
        }

    def evaluate_dictation(self, q_id: int, student_answer_text: str, duration_sec: int = 45) -> Dict[str, Any]:
        """Evaluates dictated answer against grading rubric and formats any spoken math expressions."""
        q_obj = next((q for q in self.sample_exam_questions if q["q_id"] == q_id), self.sample_exam_questions[0])
        
        words = student_answer_text.strip().split()
        word_count = len(words)

        # Keyword rubric matching
        ans_lower = student_answer_text.lower()
        matched_keywords = [kw for kw in q_obj["model_keywords"] if kw in ans_lower]
        coverage_ratio = len(matched_keywords) / max(1, len(q_obj["model_keywords"]))

        # Score calculation (out of question marks)
        awarded_marks = round(q_obj["marks"] * min(1.0, (coverage_ratio * 1.25)), 1)
        if word_count < 10:
            awarded_marks = min(awarded_marks, 1.0)

        # Math expression auto-conversion
        formatted_text = student_answer_text
        formatted_text = formatted_text.replace("force equals mass times acceleration", "F = m · a")
        formatted_text = formatted_text.replace("f equals m times a", "F = m · a")
        formatted_text = formatted_text.replace("kinetic energy equals half m v squared", "KE = ½ m v²")
        formatted_text = formatted_text.replace("water molecule", "H₂O")

        return {
            "q_id": q_id,
            "question": q_obj["question"],
            "max_marks": q_obj["marks"],
            "awarded_marks": awarded_marks,
            "percentage": round((awarded_marks / q_obj["marks"]) * 100, 1),
            "word_count": word_count,
            "duration_sec": duration_sec,
            "matched_keywords": matched_keywords,
            "dictated_raw": student_answer_text,
            "formatted_answer": formatted_text,
            "submission_timestamp": datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
            "feedback": f"Strong conceptual coverage. Identified {len(matched_keywords)} essential rubric terms." if coverage_ratio >= 0.5 else "Good attempt. Recommend including more specific scientific terms and formulas."
        }
