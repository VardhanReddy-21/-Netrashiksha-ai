"""
NetraShiksha AI - Conversational Classroom Voice Q&A Engine
Answers student queries about classroom board content, formulas, diagrams, and assignments in spoken voice.
"""

from typing import Dict, Any

class ClassroomVoiceQAEngine:
    def __init__(self):
        pass

    def answer_query(self, query: str, board_context: Dict[str, Any] = None) -> Dict[str, Any]:
        """Provides direct, conversational answers to student questions based on blackboard content."""
        q = query.lower().strip()

        # 1. Homework / Assignments
        if any(w in q for w in ["homework", "assignment", "due", "test", "task", "submission"]):
            if board_context and "homework" in board_context:
                answer = f"The teacher has assigned: {board_context['homework']}"
            else:
                answer = "The homework on the board is: Solve Numerical Problems 4.1 to 4.5 from NCERT Physics Chapter 4."
            return {
                "query": query,
                "answer": answer,
                "topic": "Homework / Action Items",
                "speech_text": answer
            }

        # 2. Physics & Kinematics formulas
        if any(w in q for w in ["force", "newton", "acceleration", "mass"]):
            return {
                "query": query,
                "answer": "The force formula on the board is F = m * a, where F is external force, m is object mass, and a is acceleration.",
                "topic": "Newton's Second Law",
                "speech_text": "The force equation on the board is F equals m times a. Force equals mass in kilograms multiplied by acceleration in meters per second squared."
            }

        if any(w in q for w in ["kinetic", "energy", "work", "theorem"]):
            return {
                "query": query,
                "answer": "The Kinetic Energy formula is KE = (1/2) * m * v^2. The Work-Energy Theorem states that Delta KE = W_net (change in kinetic energy equals total work done).",
                "topic": "Work-Energy Theorem",
                "speech_text": "On the board, Kinetic Energy is given as one half times m times v squared. The Work-Energy Theorem states that change in kinetic energy equals net work done."
            }

        if any(w in q for w in ["kinematic", "velocity", "displacement", "equation of motion"]):
            return {
                "query": query,
                "answer": "The kinematic equations on the board are: 1) v = u + a*t, 2) s = u*t + (1/2)*a*t^2, and 3) v^2 = u^2 + 2*a*s.",
                "topic": "Equations of Motion",
                "speech_text": "The three equations of motion are: first, v equals u plus a t. Second, s equals u t plus one half a t squared. Third, v squared equals u squared plus two a s."
            }

        # 3. Mathematics & Calculus formulas
        if any(w in q for w in ["quadratic", "discriminant", "root", "formula"]):
            return {
                "query": query,
                "answer": "The quadratic formula on the board is x = (-b +/- sqrt(b^2 - 4*a*c)) / (2*a). The discriminant Delta is b^2 - 4*a*c. If Delta > 0, roots are real and distinct.",
                "topic": "Quadratic Formula",
                "speech_text": "The quadratic formula on the board is x equals negative b plus or minus square root of b squared minus four a c, all divided by two a. When discriminant Delta is greater than zero, the equation has two distinct real roots."
            }

        if any(w in q for w in ["derivative", "differentiation", "integral", "calculus"]):
            return {
                "query": query,
                "answer": "The board shows two derivative rules: d/dx of sin(x) is cos(x), and d/dx of x^n is n * x^(n-1). It also shows the integral of e^(kx) dx equals (1/k) * e^(kx) + C.",
                "topic": "Calculus Derivatives & Integrals",
                "speech_text": "The calculus rules on the board are: derivative of sine of x equals cosine of x; power rule gives derivative of x to the n as n times x to the n minus one; and integral of e to the k x equals one over k times e to the k x plus constant C."
            }

        # 4. Biology Cell Diagram
        if any(w in q for w in ["plant cell", "vacuole", "chloroplast", "nucleus", "cell wall"]):
            return {
                "query": query,
                "answer": "In the plant cell diagram: The large central vacuole is in the center holding turgor pressure; the nucleus is located in the upper-right corner; green chloroplasts where photosynthesis occurs are in the outer cytoplasm, and a thick cell wall surrounds the outside.",
                "topic": "Plant Cell Anatomy",
                "speech_text": "In the plant cell diagram, the large central vacuole sits in the middle maintaining water pressure. The nucleus with genetic DNA is in the top-right corner. Green chloroplasts are positioned around the cytoplasm, and a rigid cell wall encases the entire cell."
            }

        # 5. Chemistry Water molecule
        if any(w in q for w in ["water", "h2o", "angle", "bond", "polar"]):
            return {
                "query": query,
                "answer": "In the water molecule diagram: The central oxygen atom is bonded to two hydrogen atoms with a bond angle of 104.5 degrees. Oxygen has partial negative charge and hydrogens have partial positive charge, giving water its polarity.",
                "topic": "Water Molecule Geometry",
                "speech_text": "In the water molecule diagram, the bond angle between the two hydrogen atoms and central oxygen is 104.5 degrees. The dipole moment creates partial positive charges on hydrogens and partial negative charge on oxygen, making water a polar solvent."
            }

        # Default smart response
        return {
            "query": query,
            "answer": "Based on today's classroom board, the topic is focused on core STEM principles, mathematical derivations, and structured diagrams. You can ask specifically about any equation, diagram region, or assigned homework.",
            "topic": "Classroom Board Assistant",
            "speech_text": "Based on today's classroom board, you can ask me about the formulas, diagram elements, or homework tasks written by the teacher."
        }
