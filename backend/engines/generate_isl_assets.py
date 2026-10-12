"""
NetraShiksha AI - Indian Sign Language (ISL) Visual Asset Generator
Generates clean, accessible SVG gesture cards for ISL alphabets, numbers, and key educational vocabulary.
"""

import os
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent.parent
GESTURES_DIR = BASE_DIR / "frontend" / "static" / "isl_gestures"
GESTURES_DIR.mkdir(parents=True, exist_ok=True)

# Common styling and templates for ISL gesture cards
def create_gesture_svg(name: str, category: str, sign_desc: str, hand_shape: str, motion_desc: str, color="#3B82F6", accent="#1D4ED8"):
    # SVG with clear hand outline, movement arrows, and accessibility labels
    svg = f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="200" height="200">
  <defs>
    <linearGradient id="bg_{name}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="{color}" stop-opacity="0.15"/>
      <stop offset="100%" stop-color="{accent}" stop-opacity="0.25"/>
    </linearGradient>
    <filter id="shadow_{name}" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="4" stdDeviation="4" flood-color="#000000" flood-opacity="0.3"/>
    </filter>
  </defs>

  <!-- Card Background -->
  <rect x="4" y="4" width="192" height="192" rx="16" fill="url(#bg_{name})" stroke="{color}" stroke-width="2"/>
  
  <!-- Category Badge -->
  <rect x="12" y="12" width="75" height="18" rx="9" fill="{accent}"/>
  <text x="49" y="24" fill="#FFFFFF" font-family="system-ui, sans-serif" font-size="9" font-weight="bold" text-anchor="middle">{category.upper()}</text>

  <!-- ISL Badge -->
  <rect x="145" y="12" width="42" height="18" rx="9" fill="#10B981"/>
  <text x="166" y="24" fill="#FFFFFF" font-family="system-ui, sans-serif" font-size="9" font-weight="bold" text-anchor="middle">ISL</text>

  <!-- Central Hand Gesture Visualization -->
  <g transform="translate(100, 95)" filter="url(#shadow_{name})">
    <!-- Hand Palm & Wrist -->
    <ellipse cx="0" cy="18" rx="28" ry="32" fill="#FBBF24" stroke="#D97706" stroke-width="2.5"/>
    <rect x="-18" y="40" width="36" height="24" rx="6" fill="#F59E0B" stroke="#B45309" stroke-width="2"/>
    
    <!-- Finger Archetype / Representation -->
    <path d="{hand_shape}" fill="#FDE68A" stroke="#D97706" stroke-width="2.5" stroke-linejoin="round"/>
    
    <!-- Motion Arrow indicator -->
    <path d="M -35,5 Q -45,-15 -25,-25" fill="none" stroke="{color}" stroke-width="3" stroke-dasharray="3,3" marker-end="url(#arrow)"/>
    <polygon points="-25,-25 -32,-20 -24,-17" fill="{color}"/>
  </g>

  <!-- Term Label -->
  <rect x="10" y="142" width="180" height="46" rx="8" fill="#1E293B" fill-opacity="0.9"/>
  <text x="100" y="162" fill="#F8FAFC" font-family="system-ui, sans-serif" font-size="15" font-weight="bold" text-anchor="middle">{name.upper()}</text>
  <text x="100" y="178" fill="#94A3B8" font-family="system-ui, sans-serif" font-size="9" text-anchor="middle">{sign_desc[:32]}</text>
</svg>"""
    return svg

# Shape primitives for various finger poses
SHAPES = {
    "open_palm": "M -20,10 L -24,-20 Q -24,-32 -18,-32 Q -12,-32 -12,-18 L -12,-26 Q -12,-38 -6,-38 Q 0,-38 0,-24 L 0,-28 Q 0,-40 6,-40 Q 12,-40 12,-25 L 12,-22 Q 12,-34 18,-34 Q 24,-34 24,-20 L 22,10 Z",
    "fist": "M -20,10 C -25,-5 -20,-15 -10,-18 C 0,-18 10,-18 20,-12 C 22,2 20,10 18,15 Z",
    "point_index": "M -15,10 L -18,-5 L -8,-38 Q -2,-42 2,-38 L 4,-5 L 15,-2 L 18,10 Z",
    "two_fingers_v": "M -18,10 L -22,-32 Q -18,-38 -12,-34 L -6,-5 L 6,-34 Q 12,-38 16,-32 L 12,10 Z",
    "thumbs_up": "M -20,10 L -22,2 C -24,-10 -35,-15 -35,-26 C -35,-34 -25,-34 -18,-24 L -12,2 L 15,2 L 18,10 Z",
    "ok_gesture": "M -15,10 C -25,-10 -15,-28 -2,-28 C 10,-28 15,-10 6,2 L 12,-30 L 18,-28 L 15,5 Z",
    "c_hand": "M -15,15 C -35,5 -35,-25 -15,-35 C 0,-40 15,-30 20,-20 L 12,-16 C 5,-22 -5,-25 -10,-15 C -15,-5 -5,5 12,10 Z",
    "wave": "M -20,15 L -25,-25 Q -15,-35 -8,-20 L 0,-30 Q 10,-35 15,-20 L 22,15 Z"
}

VOCABULARY = [
    # General Classroom
    ("hello", "Greeting", "Open hand waved from forehead outward", "wave", "#3B82F6", "#1D4ED8"),
    ("teacher", "Classroom", "Both hands O-shape from temples outward + person", "open_palm", "#10B981", "#047857"),
    ("student", "Classroom", "Flat hand lifting knowledge from book to head", "point_index", "#8B5CF6", "#6D28D9"),
    ("classroom", "Place", "Hands forming box/room boundary", "open_palm", "#F59E0B", "#B45309"),
    ("read", "Action", "Two fingers scanning flat non-dominant palm", "two_fingers_v", "#EC4899", "#BE185D"),
    ("write", "Action", "Pencil grip scribbling on flat palm", "point_index", "#06B6D4", "#0E7490"),
    ("question", "Inquiry", "Index drawing question mark in air", "point_index", "#EF4444", "#B91C1C"),
    ("answer", "Response", "Index fingers from chin forward", "point_index", "#10B981", "#059669"),
    ("exam", "Academic", "Both hands distributing test papers", "open_palm", "#F97316", "#C2410C"),
    ("important", "Emphasis", "F-hands tapping thumbs & index together", "ok_gesture", "#8B5CF6", "#7C3AED"),
    ("understand", "Cognition", "Flick index finger up near forehead", "point_index", "#0EA5E9", "#0284C7"),
    ("thank_you", "Courtesy", "Flat hand touching chin then moving out", "open_palm", "#10B981", "#059669"),
    ("yes", "Affirmation", "S-fist nodding up and down like head", "fist", "#22C55E", "#15803D"),
    ("no", "Negation", "Index and middle snap against thumb", "ok_gesture", "#EF4444", "#DC2626"),

    # STEM Educational Terms
    ("science", "STEM", "Alternating pouring beakers motion", "fist", "#6366F1", "#4338CA"),
    ("mathematics", "STEM", "Two M-hands crossing each other", "two_fingers_v", "#3B82F6", "#1D4ED8"),
    ("physics", "STEM", "Bent V-hands tapping knuckles together", "two_fingers_v", "#EC4899", "#BE185D"),
    ("chemistry", "STEM", "C-hand swirling liquid in flask", "c_hand", "#14B8A6", "#0F766E"),
    ("biology", "STEM", "B-hands circling each other + living organism", "open_palm", "#10B981", "#047857"),
    ("computer", "STEM", "C-hand arcing up dominant forearm", "c_hand", "#0284C7", "#0369A1"),
    ("photosynthesis", "Science", "Sun rays onto flat leaf palm + energy growth", "open_palm", "#84CC16", "#4D7C0F"),
    ("mitochondria", "Biology", "Powerhouse fists pulsing energy", "fist", "#F59E0B", "#D97706"),
    ("energy", "Physics", "E-hand sliding with strength down bicep", "fist", "#F97316", "#EA580C"),
    ("formula", "Math", "F-hand writing equation across chest", "ok_gesture", "#A855F7", "#9333EA"),
    ("gravity", "Physics", "Drop fist straight downward into flat palm", "fist", "#64748B", "#475569"),
    ("diagram", "Visual", "Tracing outline of shape with index finger", "point_index", "#06B6D4", "#0891B2")
]

# Generate alphabets A-Z
ALPHABETS = [chr(i) for i in range(ord('A'), ord('Z') + 1)]
NUMBERS = [str(i) for i in range(0, 10)]

def generate_all():
    count = 0
    # 1. Vocabulary
    for name, cat, desc, shape_key, col, acc in VOCABULARY:
        shape = SHAPES.get(shape_key, SHAPES["open_palm"])
        svg_content = create_gesture_svg(name, cat, desc, shape, "Motion indicated", col, acc)
        file_path = GESTURES_DIR / f"{name}.svg"
        with open(file_path, "w", encoding="utf-8") as f:
            f.write(svg_content)
        count += 1

    # 2. Alphabets A-Z
    for letter in ALPHABETS:
        shape = SHAPES["fist"] if letter in "AESOTMN" else (SHAPES["point_index"] if letter in "DGIJKL" else (SHAPES["two_fingers_v"] if letter in "UVWRX" else SHAPES["open_palm"]))
        svg_content = create_gesture_svg(letter, "Alphabet", f"ISL Finger-Spelling for '{letter}'", shape, "Static pose", "#6366F1", "#4F46E5")
        file_path = GESTURES_DIR / f"letter_{letter.lower()}.svg"
        with open(file_path, "w", encoding="utf-8") as f:
            f.write(svg_content)
        count += 1

    # 3. Numbers 0-9
    for num in NUMBERS:
        shape = SHAPES["fist"] if num == "0" else (SHAPES["point_index"] if num == "1" else (SHAPES["two_fingers_v"] if num == "2" else SHAPES["open_palm"]))
        svg_content = create_gesture_svg(f"Number {num}", "Numeral", f"ISL Digit '{num}' count gesture", shape, "Finger count", "#059669", "#047857")
        file_path = GESTURES_DIR / f"number_{num}.svg"
        with open(file_path, "w", encoding="utf-8") as f:
            f.write(svg_content)
        count += 1

    print(f"Generated {count} ISL SVG gesture cards in {GESTURES_DIR}")

if __name__ == "__main__":
    generate_all()
