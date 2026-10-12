"""
NetraShiksha AI - Sample Classroom Data & Graphic Generator
Generates realistic classroom blackboard images, scientific diagrams, and sample exams for immediate testing.
"""

import os
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

BASE_DIR = Path(__file__).resolve().parent.parent.parent
DATA_DIR = BASE_DIR / "data"
BOARDS_DIR = DATA_DIR / "sample_boards"
DIAGRAMS_DIR = DATA_DIR / "sample_diagrams"
EXAMS_DIR = DATA_DIR / "sample_exams"

for d in [BOARDS_DIR, DIAGRAMS_DIR, EXAMS_DIR]:
    d.mkdir(parents=True, exist_ok=True)

def get_font(size=20, bold=False):
    # Try common Windows fonts
    font_names = ["arialbd.ttf" if bold else "arial.ttf", "calibri.ttf", "segoeui.ttf"]
    for font_name in font_names:
        try:
            return ImageFont.truetype(font_name, size)
        except Exception:
            continue
    return ImageFont.load_default()

def create_physics_blackboard():
    # 1. Physics Classroom Greenboard: Kinematics & Newton's Second Law
    w, h = 900, 560
    img = Image.new("RGB", (w, h), color=(24, 48, 36)) # Classic school green chalkboard
    draw = ImageDraw.Draw(img)

    # Chalk dust texture simulation
    for y in range(0, h, 8):
        draw.line([(0, y), (w, y)], fill=(28, 54, 40), width=1)

    title_font = get_font(28, bold=True)
    header_font = get_font(22, bold=True)
    body_font = get_font(18, bold=False)
    math_font = get_font(24, bold=True)

    # Chalk color: off-white and pale yellow
    chalk_white = (245, 245, 240)
    chalk_yellow = (255, 245, 160)
    chalk_cyan = (180, 240, 245)

    # Title
    draw.text((40, 30), "CLASS XII - APPLIED PHYSICS", fill=chalk_yellow, font=title_font)
    draw.line([(40, 68), (440, 68)], fill=chalk_yellow, width=2)
    draw.text((680, 35), "Date: 27/09/2026", fill=chalk_white, font=body_font)

    # Left Section: Newton's Laws & Kinematics
    draw.text((40, 90), "Topic: Newton's Laws & Work-Energy Theorem", fill=chalk_white, font=header_font)
    draw.text((40, 130), "1. Force Equation:", fill=chalk_white, font=body_font)
    draw.text((70, 160), "F = m * a   [where m = mass, a = acceleration]", fill=chalk_cyan, font=math_font)

    draw.text((40, 205), "2. Kinematic Equations of Motion:", fill=chalk_white, font=body_font)
    draw.text((70, 235), "v = u + a * t", fill=chalk_cyan, font=math_font)
    draw.text((70, 275), "s = u*t + (1/2)*a*t^2", fill=chalk_cyan, font=math_font)
    draw.text((70, 315), "v^2 = u^2 + 2*a*s", fill=chalk_cyan, font=math_font)

    # Center-Right Section: Kinetic Energy & Integration
    draw.text((500, 90), "Work Done by Variable Force:", fill=chalk_white, font=header_font)
    draw.text((500, 130), "W = Integral from x1 to x2 of F(x) dx", fill=chalk_cyan, font=math_font)
    draw.text((500, 180), "Kinetic Energy Theorem:", fill=chalk_white, font=body_font)
    draw.text((530, 215), "KE = (1/2) * m * v^2", fill=chalk_yellow, font=math_font)
    draw.text((500, 265), "Delta KE = W_net", fill=chalk_yellow, font=math_font)

    # Diagram box on bottom right: Free body block on ramp
    draw.rectangle([500, 310, 850, 450], outline=chalk_white, width=1)
    draw.line([(520, 430), (830, 430)], fill=chalk_white, width=2) # ground
    draw.line([(520, 430), (780, 350)], fill=chalk_white, width=2) # ramp
    draw.rectangle([620, 360, 670, 395], outline=chalk_yellow, width=2) # block
    draw.line([(645, 375), (645, 430)], fill=chalk_cyan, width=2) # gravity mg
    draw.text((655, 410), "mg", fill=chalk_cyan, font=body_font)
    draw.text((520, 320), "Diagram: Block sliding down inclined plane (theta=30 deg)", fill=chalk_white, font=get_font(14))

    # Bottom Banner: Homework
    draw.rectangle([30, 480, 870, 535], outline=chalk_yellow, width=1)
    draw.text((50, 495), "HOMEWORK: Solve Numerical Problems 4.1 to 4.5 from NCERT Chapter 4.", fill=chalk_yellow, font=header_font)

    img.save(BOARDS_DIR / "physics_chalkboard.jpg", quality=92)
    print("Saved physics_chalkboard.jpg")

def create_math_whiteboard():
    # 2. Mathematics Modern Whiteboard: Calculus & Quadratic Equations
    w, h = 900, 560
    img = Image.new("RGB", (w, h), color=(250, 252, 255)) # Glossy whiteboard
    draw = ImageDraw.Draw(img)

    title_font = get_font(26, bold=True)
    header_font = get_font(20, bold=True)
    body_font = get_font(18, bold=False)
    math_font = get_font(22, bold=True)

    marker_blue = (15, 60, 180)
    marker_black = (30, 35, 45)
    marker_red = (200, 25, 35)
    marker_green = (20, 140, 60)

    # Title
    draw.text((40, 25), "MATHEMATICS: CALCULUS & QUADRATIC FORMULA", fill=marker_blue, font=title_font)
    draw.line([(40, 62), (680, 62)], fill=marker_blue, width=2)

    # Section 1: Quadratic formula
    draw.text((40, 80), "1. General Quadratic Equation: a*x^2 + b*x + c = 0", fill=marker_black, font=header_font)
    draw.text((70, 115), "Discriminant Delta = b^2 - 4*a*c", fill=marker_blue, font=math_font)
    draw.text((70, 150), "Roots: x = (-b +/- sqrt(b^2 - 4*a*c)) / (2*a)", fill=marker_red, font=math_font)
    draw.text((70, 190), "Condition for real & distinct roots: Delta > 0", fill=marker_green, font=body_font)

    # Section 2: Integration & Differentiation
    draw.text((40, 240), "2. Differential & Integral Calculus Fundamentals:", fill=marker_black, font=header_font)
    draw.text((70, 275), "d/dx [sin(x)] = cos(x)", fill=marker_blue, font=math_font)
    draw.text((70, 310), "d/dx [x^n] = n * x^(n-1)", fill=marker_blue, font=math_font)
    draw.text((70, 345), "Integral of e^(kx) dx = (1/k) * e^(kx) + C", fill=marker_red, font=math_font)
    draw.text((70, 380), "Definite Integral: Area = Int[a to b] f(x) dx", fill=marker_blue, font=math_font)

    # Right side: Parabola graph illustration
    draw.rectangle([540, 110, 860, 420], outline=marker_black, width=1)
    draw.text((550, 120), "Graph: y = x^2 - 4x + 3", fill=marker_black, font=header_font)
    # Axes
    draw.line([(560, 360), (840, 360)], fill=(120, 120, 120), width=2) # X axis
    draw.line([(700, 160), (700, 400)], fill=(120, 120, 120), width=2) # Y axis
    draw.text((830, 365), "x", fill=marker_black, font=body_font)
    draw.text((705, 160), "y", fill=marker_black, font=body_font)
    # Parabola curve
    points = []
    for px in range(580, 820, 5):
        vx = (px - 700) / 30.0
        vy = vx**2 - 4*vx + 3
        py = int(360 - vy * 20)
        if 160 <= py <= 400:
            points.append((px, py))
    if len(points) > 1:
        draw.line(points, fill=marker_red, width=3)
    draw.text((560, 385), "Vertex at (2, -1), Roots at x=1 and x=3", fill=marker_green, font=get_font(13))

    # Important notice
    draw.rectangle([40, 450, 860, 520], fill=(235, 245, 255), outline=marker_blue, width=2)
    draw.text((60, 465), "NOTE: Mid-Term Mathematics Test will cover Derivatives & Quadratic Roots.", fill=marker_red, font=header_font)
    draw.text((60, 492), "Submission deadline for Assignment 3: Friday 4:00 PM.", fill=marker_black, font=body_font)

    img.save(BOARDS_DIR / "math_whiteboard.jpg", quality=92)
    print("Saved math_whiteboard.jpg")

def create_biology_cell_diagram():
    # 3. Biology Scientific Diagram: Plant Cell Anatomy
    w, h = 800, 550
    img = Image.new("RGB", (w, h), color=(255, 255, 255))
    draw = ImageDraw.Draw(img)

    title_font = get_font(24, bold=True)
    label_font = get_font(16, bold=True)
    sub_font = get_font(14, bold=False)

    # Title
    draw.text((220, 20), "STRUCTURE OF A TYPICAL PLANT CELL", fill=(20, 90, 45), font=title_font)
    draw.line([(220, 50), (600, 50)], fill=(20, 90, 45), width=2)

    # Outer Cell Wall (Polygon)
    outer_points = [(150, 100), (650, 100), (700, 260), (650, 450), (150, 450), (100, 260)]
    draw.polygon(outer_points, fill=(230, 248, 230), outline=(34, 139, 34), width=6)
    # Inner Plasma Membrane
    inner_points = [(160, 110), (640, 110), (688, 260), (640, 440), (160, 440), (112, 260)]
    draw.polygon(inner_points, outline=(70, 180, 70), width=3)

    # Large Central Vacuole
    draw.ellipse([320, 200, 540, 380], fill=(215, 238, 255), outline=(50, 130, 210), width=3)
    draw.text((385, 280), "Central Vacuole", fill=(20, 90, 180), font=label_font)
    draw.text((370, 305), "(Stores cell sap & turgor)", fill=(80, 100, 120), font=sub_font)

    # Nucleus (Top Right inside cell)
    draw.ellipse([490, 120, 590, 200], fill=(255, 220, 220), outline=(210, 50, 50), width=3)
    draw.ellipse([525, 145, 555, 175], fill=(180, 30, 30)) # Nucleolus
    draw.text((505, 125), "Nucleus", fill=(180, 30, 30), font=label_font)

    # Chloroplasts (Green ovals)
    chloroplast_coords = [(180, 150), (220, 340), (580, 370), (250, 220)]
    for cx, cy in chloroplast_coords:
        draw.ellipse([cx, cy, cx+70, cy+40], fill=(100, 200, 100), outline=(30, 120, 30), width=2)
        # Thylakoid lines
        draw.line([(cx+15, cy+20), (cx+55, cy+20)], fill=(20, 90, 20), width=2)

    # Mitochondria (Orange ovals)
    mito_coords = [(190, 270), (570, 260)]
    for mx, my in mito_coords:
        draw.ellipse([mx, my, mx+65, my+35], fill=(255, 190, 140), outline=(210, 100, 30), width=2)
        draw.text((mx+5, my+10), "Mito", fill=(160, 60, 10), font=get_font(12, bold=True))

    # Callout Labels with pointer lines
    # 1. Cell Wall
    draw.line([(80, 120), (150, 105)], fill=(0, 0, 0), width=2)
    draw.text((20, 110), "1. Cell Wall", fill=(0, 0, 0), font=label_font)

    # 2. Chloroplast
    draw.line([(90, 170), (180, 165)], fill=(0, 0, 0), width=2)
    draw.text((20, 160), "2. Chloroplast", fill=(0, 0, 0), font=label_font)

    # 3. Mitochondria
    draw.line([(90, 300), (190, 285)], fill=(0, 0, 0), width=2)
    draw.text((10, 290), "3. Mitochondria", fill=(0, 0, 0), font=label_font)

    # 4. Nucleus pointer
    draw.line([(620, 140), (585, 150)], fill=(0, 0, 0), width=2)
    draw.text((630, 130), "4. Nucleus (DNA)", fill=(0, 0, 0), font=label_font)

    # Legend / Accessibility Description text box
    draw.rectangle([40, 480, 760, 530], fill=(245, 245, 245), outline=(180, 180, 180))
    draw.text((50, 490), "Spatial Layout: Chloroplasts in outer cytoplasm; Central Vacuole in center; Nucleus at upper-right.", fill=(50, 50, 50), font=sub_font)
    draw.text((50, 508), "Primary Function: Photosynthesis occurs inside chloroplasts; Cell wall maintains rigid shape.", fill=(50, 50, 50), font=sub_font)

    img.save(DIAGRAMS_DIR / "plant_cell_anatomy.jpg", quality=92)
    print("Saved plant_cell_anatomy.jpg")

def create_chemistry_water_diagram():
    # 4. Chemistry Diagram: Molecular Structure of Water & Hydrogen Bonding
    w, h = 800, 500
    img = Image.new("RGB", (w, h), color=(255, 255, 255))
    draw = ImageDraw.Draw(img)

    title_font = get_font(24, bold=True)
    label_font = get_font(18, bold=True)
    body_font = get_font(15, bold=False)

    draw.text((180, 25), "MOLECULAR STRUCTURE OF WATER (H2O)", fill=(10, 70, 150), font=title_font)
    draw.line([(180, 55), (630, 55)], fill=(10, 70, 150), width=2)

    # Central Oxygen Atom
    ox, oy = 400, 200
    draw.ellipse([ox-60, oy-60, ox+60, oy+60], fill=(239, 68, 68), outline=(185, 28, 28), width=3)
    draw.text((ox-12, oy-18), "O", fill=(255, 255, 255), font=get_font(32, bold=True))
    draw.text((ox-22, oy+12), "delta 2-", fill=(255, 220, 220), font=get_font(14, bold=True))

    # Hydrogen 1 (Bottom Left)
    h1x, h1y = 260, 310
    draw.line([(ox-35, oy+35), (h1x+25, h1y-20)], fill=(70, 70, 70), width=8) # covalent bond
    draw.ellipse([h1x-35, h1y-35, h1x+35, h1y+35], fill=(59, 130, 246), outline=(29, 78, 216), width=3)
    draw.text((h1x-10, h1y-15), "H", fill=(255, 255, 255), font=get_font(24, bold=True))
    draw.text((h1x-18, h1y+10), "delta +", fill=(220, 235, 255), font=get_font(12, bold=True))

    # Hydrogen 2 (Bottom Right)
    h2x, h2y = 540, 310
    draw.line([(ox+35, oy+35), (h2x-25, h2y-20)], fill=(70, 70, 70), width=8) # covalent bond
    draw.ellipse([h2x-35, h2y-35, h2x+35, h2y+35], fill=(59, 130, 246), outline=(29, 78, 216), width=3)
    draw.text((h2x-10, h2y-15), "H", fill=(255, 255, 255), font=get_font(24, bold=True))
    draw.text((h2x-18, h2y+10), "delta +", fill=(220, 235, 255), font=get_font(12, bold=True))

    # Bond Angle Arc
    draw.arc([ox-40, oy, ox+40, oy+80], start=30, end=150, fill=(20, 20, 20), width=2)
    draw.text((ox-28, oy+60), "104.5 deg", fill=(20, 20, 20), font=get_font(14, bold=True))

    # Annotations
    draw.text((100, 180), "Polar Covalent Bonds", fill=(10, 70, 150), font=label_font)
    draw.text((100, 205), "Electronegativity diff = 1.24", fill=(70, 70, 70), font=body_font)

    draw.text((580, 180), "Bent Molecular Geometry", fill=(10, 70, 150), font=label_font)
    draw.text((580, 205), "2 Lone Pairs on Oxygen", fill=(70, 70, 70), font=body_font)

    # Summary bar
    draw.rectangle([40, 420, 760, 480], fill=(240, 249, 255), outline=(59, 130, 246), width=2)
    draw.text((60, 432), "Key Takeaway: Dipole moment makes water a universal solvent and enables hydrogen bonding.", fill=(15, 23, 42), font=body_font)
    draw.text((60, 452), "Chemical Formula: H2O | Molar Mass: 18.015 g/mol", fill=(30, 64, 175), font=get_font(14, bold=True))

    img.save(DIAGRAMS_DIR / "water_molecule_chemistry.jpg", quality=92)
    print("Saved water_molecule_chemistry.jpg")

def create_sample_exam():
    # Sample question paper text and image
    w, h = 800, 600
    img = Image.new("RGB", (w, h), color=(255, 255, 255))
    draw = ImageDraw.Draw(img)

    title_font = get_font(22, bold=True)
    sec_font = get_font(17, bold=True)
    q_font = get_font(15, bold=False)

    draw.text((160, 25), "CENTRAL BOARD OF SECONDARY EDUCATION", fill=(0, 0, 0), font=title_font)
    draw.text((220, 55), "CLASS XII - SCIENCE & TECHNOLOGY EXAM", fill=(50, 50, 50), font=sec_font)
    draw.line([(50, 85), (750, 85)], fill=(0, 0, 0), width=2)

    draw.text((50, 95), "Time Allowed: 3 Hours", fill=(50, 50, 50), font=q_font)
    draw.text((620, 95), "Maximum Marks: 70", fill=(50, 50, 50), font=q_font)
    draw.line([(50, 120), (750, 120)], fill=(180, 180, 180), width=1)

    questions = [
        ("Q1 [3 Marks]:", "Define Photosynthesis. Write the balanced chemical equation and identify the primary organelle involved in this process."),
        ("Q2 [4 Marks]:", "State Newton's Second Law of Motion. Derive the formula F = m*a from first principles of rate of change of momentum."),
        ("Q3 [4 Marks]:", "Explain why water is called a universal solvent. Mention the role of polarity and hydrogen bonding."),
        ("Q4 [5 Marks]:", "Describe the role of the central vacuole in maintaining turgor pressure within plant cells. Contrast with animal cells."),
        ("Q5 [4 Marks]:", "State the Work-Energy Theorem and calculate work done when an object of mass 5kg accelerates from 2m/s to 6m/s.")
    ]

    y = 140
    for q_no, q_text in questions:
        draw.text((50, y), q_no, fill=(180, 0, 0), font=sec_font)
        # Wrap text
        words = q_text.split()
        lines = []
        cur_line = []
        for w_word in words:
            cur_line.append(w_word)
            if len(" ".join(cur_line)) > 75:
                lines.append(" ".join(cur_line))
                cur_line = []
        if cur_line:
            lines.append(" ".join(cur_line))

        line_y = y + 25
        for l in lines:
            draw.text((50, line_y), l, fill=(0, 0, 0), font=q_font)
            line_y += 20
        y = line_y + 15

    draw.rectangle([40, 540, 760, 580], fill=(245, 245, 245), outline=(200, 200, 200))
    draw.text((60, 552), "Exam Dictation Mode: Visually impaired students can dictate their answers verbally.", fill=(80, 80, 80), font=get_font(13))

    img.save(EXAMS_DIR / "cbse_science_exam_paper.jpg", quality=92)
    print("Saved cbse_science_exam_paper.jpg")

if __name__ == "__main__":
    create_physics_blackboard()
    create_math_whiteboard()
    create_biology_cell_diagram()
    create_chemistry_water_diagram()
    create_sample_exam()
    print("All sample classroom assets generated successfully!")
