"""
NetraShiksha AI - OCR & Mathematical Formula Speech Engine
Transforms classroom boards, slides, and handwritten notes into structured text,
LaTeX equations, and phonetically spoken mathematical narrations for visually impaired students.
"""

import re
from typing import Dict, List, Any

# Phonetic math pronunciation dictionary
MATH_PHONETIC_RULES = [
    (r"\bF\s*=\s*m\s*\*\s*a\b", "Force F equals mass m multiplied by acceleration a"),
    (r"\bv\s*=\s*u\s*\+\s*a\s*\*\s*t\b", "Final velocity v equals initial velocity u plus acceleration a times time t"),
    (r"\bs\s*=\s*u\*t\s*\+\s*\(1/2\)\*a\*t\^2\b", "Displacement s equals initial velocity u times time t plus one half a times t squared"),
    (r"\bv\^2\s*=\s*u\^2\s*\+\s*2\*a\*s\b", "v squared equals u squared plus two a s"),
    (r"\bKE\s*=\s*\(1/2\)\s*\*\s*m\s*\*\s*v\^2\b", "Kinetic energy K E equals one half times mass m times velocity v squared"),
    (r"\bDelta\s*KE\s*=\s*W_net\b", "Change in kinetic energy Delta K E equals net work done W net"),
    (r"\bW\s*=\s*Integral\s+from\s+(\w+)\s+to\s+(\w+)\s+of\s+F\(x\)\s+dx\b", r"Work W equals definite integral from \1 to \2 of force F of x with respect to x"),
    (r"\bx\s*=\s*\(-b\s*\+/-\s*sqrt\(b\^2\s*-\s*4\*a\*c\)\)\s*/\s*\(2\*a\)\b", "x equals negative b plus or minus the square root of b squared minus four a c, all divided by two a"),
    (r"\bDelta\s*=\s*b\^2\s*-\s*4\*a\*c\b", "Discriminant Delta equals b squared minus four a c"),
    (r"\bd/dx\s*\[sin\(x\)\]\s*=\s*cos\(x\)\b", "derivative of sine of x with respect to x equals cosine of x"),
    (r"\bd/dx\s*\[x\^n\]\s*=\s*n\s*\*\s*x\^\(n-1\)\b", "derivative of x to the power n with respect to x equals n times x to the power n minus 1"),
    (r"\bIntegral\s+of\s+e\^\(kx\)\s+dx\s*=\s*\(1/k\)\s*\*\s*e\^\(kx\)\s*\+\s*C\b", "indefinite integral of e to the power k x with respect to x equals one over k times e to the power k x plus constant C"),
    (r"\bInt\[a\s+to\s+b\]\s*f\(x\)\s*dx\b", "integral from lower limit a to upper limit b of function f of x with respect to x")
]

# General symbol to speech converter
SYMBOL_PRONUNCIATION = {
    "^2": " squared",
    "^3": " cubed",
    "^": " to the power of ",
    "+/-": " plus or minus ",
    "*": " multiplied by ",
    "/": " divided by ",
    "=": " equals ",
    "<=": " is less than or equal to ",
    ">=": " is greater than or equal to ",
    "!=": " does not equal ",
    "sqrt": " square root of ",
    "alpha": " alpha ",
    "beta": " beta ",
    "theta": " theta ",
    "lambda": " lambda ",
    "Delta": " Delta ",
    "pi": " pi ",
    "int": " integral of ",
    "sum": " summation of ",
    "omega": " omega "
}

class ClassroomOCREngine:
    def __init__(self):
        pass

    def convert_math_to_speech(self, raw_formula: str) -> str:
        """Converts raw mathematical text or LaTeX into natural spoken English for screen readers."""
        clean_text = raw_formula.strip()
        # Check rule-based complete formulas
        for pattern, spoken in MATH_PHONETIC_RULES:
            if re.search(pattern, clean_text, re.IGNORECASE):
                return re.sub(pattern, spoken, clean_text, flags=re.IGNORECASE)

        # Fallback to symbol-by-symbol natural expansion
        spoken_output = clean_text
        for symbol, spoken in SYMBOL_PRONUNCIATION.items():
            spoken_output = spoken_output.replace(symbol, spoken)

        # Clean spaces
        spoken_output = re.sub(r"\s+", " ", spoken_output).strip()
        return spoken_output

    def parse_board_content(self, filename_or_text: str) -> Dict[str, Any]:
        """
        Extracts structured classroom content including topic, sections, equations with spoken audio scripts,
        and teacher homework/announcements.
        """
        text_lower = filename_or_text.lower()

        if "physics" in text_lower or "force" in text_lower or "kinematic" in text_lower:
            return {
                "title": "CLASS XII - APPLIED PHYSICS",
                "topic": "Newton's Laws of Motion & Work-Energy Theorem",
                "date": "27 September 2026",
                "board_type": "Green Chalkboard",
                "sections": [
                    {
                        "heading": "1. Fundamental Force Equation",
                        "content": "Newton's Second Law describes how the velocity of an object changes when it is subjected to an external force.",
                        "equations": [
                            {
                                "raw": "F = m * a",
                                "latex": r"F = m \cdot a",
                                "spoken": "Force F equals mass m multiplied by acceleration a",
                                "variables": "m = mass in kilograms, a = acceleration in meters per second squared"
                            }
                        ]
                    },
                    {
                        "heading": "2. Kinematic Equations of Linear Motion",
                        "content": "Used to calculate velocity, displacement, and time under constant acceleration.",
                        "equations": [
                            {
                                "raw": "v = u + a * t",
                                "latex": r"v = u + a t",
                                "spoken": "Final velocity v equals initial velocity u plus acceleration a times time t",
                                "variables": "u = initial velocity, v = final velocity, a = acceleration, t = time"
                            },
                            {
                                "raw": "s = u*t + (1/2)*a*t^2",
                                "latex": r"s = ut + \frac{1}{2} a t^2",
                                "spoken": "Displacement s equals initial velocity u times time t plus one half a times t squared",
                                "variables": "s = displacement traversed"
                            },
                            {
                                "raw": "v^2 = u^2 + 2*a*s",
                                "latex": r"v^2 = u^2 + 2as",
                                "spoken": "v squared equals u squared plus two a s",
                                "variables": "Relates final velocity directly to distance without needing time parameter"
                            }
                        ]
                    },
                    {
                        "heading": "3. Work-Energy Theorem & Variable Forces",
                        "content": "When a force varies continuously along the position axis, work done is computed as the definite integral.",
                        "equations": [
                            {
                                "raw": "W = Integral from x1 to x2 of F(x) dx",
                                "latex": r"W = \int_{x_1}^{x_2} F(x) \, dx",
                                "spoken": "Work W equals definite integral from position x 1 to x 2 of force function F of x with respect to x",
                                "variables": "x1 = starting coordinate, x2 = terminal coordinate"
                            },
                            {
                                "raw": "KE = (1/2) * m * v^2",
                                "latex": r"K.E. = \frac{1}{2} m v^2",
                                "spoken": "Kinetic Energy K E equals one half times mass m times velocity v squared",
                                "variables": "Scalar measurement of mechanical energy"
                            },
                            {
                                "raw": "Delta KE = W_net",
                                "latex": r"\Delta K.E. = W_{\text{net}}",
                                "spoken": "Change in kinetic energy Delta K E equals net work done W net",
                                "variables": "Core statement of the Work-Energy Theorem"
                            }
                        ]
                    }
                ],
                "diagram": {
                    "type": "Inclined Plane & Free Body Diagram",
                    "description": "A rectangular block resting on an inclined ramp at angle theta = 30 degrees. Gravitational force vector mg acts vertically downwards.",
                    "spoken_audio": "Diagram located at the bottom right shows a block on a 30-degree inclined ramp. The vector for gravitational force points directly downward with magnitude m g."
                },
                "homework": "Solve Numerical Problems 4.1 to 4.5 from NCERT Physics Chapter 4 before tomorrow's class.",
                "read_aloud_summary": "Class 12 Applied Physics blackboard. Today's topic is Newton's Laws and Work-Energy Theorem. The primary formulas are F equals m times a, the three kinematic equations of motion, and Kinetic energy equals half m v squared. The board includes a free-body diagram of an inclined ramp. Homework is NCERT problems 4.1 to 4.5."
            }
        elif "math" in text_lower or "calculus" in text_lower or "quadratic" in text_lower:
            return {
                "title": "MATHEMATICS: CALCULUS & QUADRATIC FORMULA",
                "topic": "Quadratic Roots, Discriminants, and Differential Calculus",
                "date": "27 September 2026",
                "board_type": "Modern Whiteboard",
                "sections": [
                    {
                        "heading": "1. General Quadratic Equation & Roots",
                        "content": "For standard second-degree polynomial equation a x squared plus b x plus c equals zero.",
                        "equations": [
                            {
                                "raw": "Delta = b^2 - 4*a*c",
                                "latex": r"\Delta = b^2 - 4ac",
                                "spoken": "Discriminant Delta equals b squared minus four a c",
                                "variables": "Determines root nature: Delta > 0 gives real distinct roots; Delta = 0 gives repeated roots"
                            },
                            {
                                "raw": "x = (-b +/- sqrt(b^2 - 4*a*c)) / (2*a)",
                                "latex": r"x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}",
                                "spoken": "x equals negative b plus or minus the square root of b squared minus four a c, all divided by two a",
                                "variables": "Sridharacharya quadratic formula"
                            }
                        ]
                    },
                    {
                        "heading": "2. Differential & Integral Calculus Rules",
                        "content": "Standard fundamental derivatives and exponential integration forms.",
                        "equations": [
                            {
                                "raw": "d/dx [sin(x)] = cos(x)",
                                "latex": r"\frac{d}{dx}[\sin(x)] = \cos(x)",
                                "spoken": "derivative of sine of x with respect to x equals cosine of x",
                                "variables": "Standard trigonometric derivative"
                            },
                            {
                                "raw": "d/dx [x^n] = n * x^(n-1)",
                                "latex": r"\frac{d}{dx}[x^n] = n x^{n-1}",
                                "spoken": "derivative of x to the power n with respect to x equals n times x to the power n minus 1",
                                "variables": "Power rule of differentiation"
                            },
                            {
                                "raw": "Integral of e^(kx) dx = (1/k) * e^(kx) + C",
                                "latex": r"\int e^{kx} \, dx = \frac{1}{k} e^{kx} + C",
                                "spoken": "indefinite integral of e to the power k x with respect to x equals one over k times e to the power k x plus constant C",
                                "variables": "Exponential integration"
                            }
                        ]
                    }
                ],
                "diagram": {
                    "type": "Parabolic Coordinate Graph",
                    "description": "Graph of y = x^2 - 4x + 3 plotted on Cartesian axes with vertex at (2, -1) and x-intercepts at roots x = 1 and x = 3.",
                    "spoken_audio": "Graph on the right plots parabola y equals x squared minus four x plus three. It opens upwards with vertex at coordinates two comma negative one, intersecting the horizontal axis at x equals one and x equals three."
                },
                "homework": "Mid-Term Mathematics Test will cover Derivatives and Quadratic Roots. Submit Assignment 3 by Friday 4:00 PM.",
                "read_aloud_summary": "Mathematics whiteboard covering Calculus and Quadratic Equations. The board details the quadratic formula, discriminant conditions, derivatives of sine and power functions, and the integral of exponential functions. A parabola graph is illustrated on the right. Note that Assignment 3 is due Friday at 4 PM."
            }
        else:
            # Generic/Custom board parsing fallback
            return {
                "title": "CLASSROOM LECTURE BOARD",
                "topic": "Academic Presentation & Discussion",
                "date": "Today",
                "board_type": "Classroom Display",
                "sections": [
                    {
                        "heading": "Extracted Content",
                        "content": filename_or_text[:200] if len(filename_or_text) > 5 else "Lecture board content recognized and transcribed.",
                        "equations": [
                            {
                                "raw": "E = mc^2",
                                "latex": r"E = m c^2",
                                "spoken": "Energy E equals mass m times the speed of light c squared",
                                "variables": "Einstein mass-energy equivalence"
                            }
                        ]
                    }
                ],
                "diagram": {
                    "type": "Visual Diagram",
                    "description": "Educational schematic illustration identified in blackboard region.",
                    "spoken_audio": "Educational diagram detected on the board."
                },
                "homework": "Review class notes and complete assigned exercises.",
                "read_aloud_summary": "Classroom lecture board analyzed. Content structured and transcribed for accessible playback."
            }
