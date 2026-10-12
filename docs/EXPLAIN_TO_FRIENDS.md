# How to Present & Explain NetraShiksha AI to Friends, Faculty & Evaluators

This guide is designed for you or your friend to present **NetraShiksha AI** with complete confidence during college project reviews, viva voce, tech expos, or job interviews.

---

## 1. The 30-Second Elevator Pitch

> *"Respected evaluators, today in Indian schools and colleges, students with visual and hearing impairments are effectively locked out of STEM classrooms. Traditional screen readers can't read blackboard chalk handwriting or complex mathematical formulas like integrals, and deaf students don't have access to full-time sign language interpreters.*
>
> *We built **NetraShiksha AI (नेत्रशिक्षा AI)** — a multimodal assistive classroom system. It combines Computer Vision to read blackboards, converts LaTeX equations into natural spoken phonetics in 8 Indian languages, guides blind students through scientific diagrams using spatial audio tours, translates lectures into Indian Sign Language (ISL) gestures in real-time, and provides an automated voice scribe for exams. It runs 100% locally and complies with WCAG 2.1 AAA accessibility standards."*

---

## 2. Live Demo Script (Step-by-Step 3-Minute Walkthrough)

### Step 1: Open the Application
- Run `python run.py` in your terminal.
- The browser opens automatically at `http://127.0.0.1:8001`.
- Point out the **Location-Aware Language Badge** in the top right:
  > *"Notice how the system uses geolocation to detect my region. In Odisha it defaults to Odia, in Tamil Nadu to Tamil, in Maharashtra to Marathi, and in Assam to Assamese."*
- Demonstrate the **Accessibility Toolbar**: Click `Yellow on Black (AAA)` to show how low-vision students can comfortably read the interface.

### Step 2: Demonstrate "Netra Mode" (Assistive Vision)
1. Under *Select Classroom Board*, click **Physics Chalkboard**.
2. Show the image preview toggles:
   - Click `Raw`: *"This is the original chalkboard with chalk dust and glare."*
   - Click `CLAHE`: *"Our OpenCV preprocessor enhances contrast and eliminates glare."*
   - Click `ROIs`: *"Our contour segmentation engine detects 13 distinct bounding boxes: Green for headers, blue for notes, orange for equations, and purple for diagrams."*
3. Click **"Read Full Board"** or **"Read Formulas Only"**:
   - Let the evaluator hear the formula spoken: *"Force F equals mass m multiplied by acceleration a..."*
   - Highlight the innovation:
     > *"Notice that instead of reading raw LaTeX gibberish like `\int`, it pronounces: 'Work W equals definite integral from position x1 to x2 of force F of x with respect to x'."*
4. Scroll to **Spatial Audio Guided Diagram Describer**:
   - Click **Plant Cell**: Let the evaluator hear the spatial audio tour: *"Top-left rigid cell wall, center central vacuole, upper-right nucleus..."*
5. Try the **Voice Q&A**:
   - Type or speak: *"What is the homework on the board?"*
   - Click **Ask**: The system instantly speaks: *"The teacher has assigned: Solve Numerical Problems 4.1 to 4.5 from NCERT Physics Chapter 4."*

### Step 3: Demonstrate "Shiksha Mode" (Hearing Impaired / Deaf Education)
1. Switch to the **Shiksha Mode** tab.
2. Click **"Process Subtitles & Jargon"**:
   - Point to the live subtitles with blue highlighted keywords (*Photosynthesis*, *Mitochondria*, *Kinetic Energy*).
   - Click on the word **Photosynthesis**: A popup appears with an ELI5 simple analogy (*"Solar-powered cooking for plants!"*).
3. Demonstrate **Indian Sign Language (ISL) Visual Interpreter**:
   - Click **"Play Gesture Sequence"**:
   - Show how the animated sign cards update dynamically with clear hand gestures, movement arrows, and finger-spelling for technical terms.
4. Show the **Auto-Generated Flashcards**:
   - Click any flashcard to flip it: *"Question on front, explanation on back for active recall."*

### Step 4: Demonstrate "Exam Scribe Mode"
1. Switch to **Exam Scribe Mode**.
2. Click **"Read Question"** on Question 1: The question is read aloud clearly.
3. Click **"Dictate Answer for Q1"**:
   - Type or speak: *"Photosynthesis is the process in chloroplasts where chlorophyll uses sunlight to make glucose and oxygen."*
   - Click **"Submit Answer for Evaluation"**:
   - Show the auto-grading result:
     > *"The engine scored 3.0/3 marks (100%), formatted the math equation, verified rubric keywords, and generated a timestamped official answer transcript."*

---

## 3. Key Advantages to Emphasize
1. **Zero External API Dependency:** Works completely offline without needing paid cloud API keys.
2. **Inclusive Design (Universal Design for Learning - UDL):** Empowers both visually impaired AND hearing-impaired students in a single unified platform.
3. **8 Indian Languages:** Supports regional education (English, Hindi, Telugu, Tamil, Marathi, Kannada, Odia, Assamese).
4. **Lightweight & Edge-Deployable:** Runs smoothly on standard laptops with minimal RAM footprint (<150 MB).
