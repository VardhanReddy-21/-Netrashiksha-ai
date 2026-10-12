/**
 * NetraShiksha AI - Complete 8 Indian Languages Localization Dictionary
 * Supported: English (en), Hindi (hi), Telugu (te), Tamil (ta), Marathi (mr), Kannada (kn), Odia (or), Assamese (as)
 */

const I18N = {
  en: {
    brandSubtitle: "Simple Assistive Classroom for Visually and Hearing Impaired Students",
    audioReady: "Audio ready. Click any Play button or press Spacebar.",
    audioPlaying: "Playing audio in English...",
    audioPaused: "Paused audio.",
    audioResumed: "Resumed audio.",
    audioFinished: "Audio finished.",
    btnPausePlay: "⏯️ Pause / Play",
    
    // Modes
    mode1Title: "1. Blind & Low Vision",
    mode1Desc: "Hear blackboard notes, formulas & diagrams aloud",
    mode2Title: "2. Deaf & Hearing Impaired",
    mode2Desc: "Read live subtitles & watch Sign Language",
    mode3Title: "3. Voice Exam Scribe",
    mode3Desc: "Speak your answers aloud — AI writes & grades",

    // Step 1
    step1Title: "Choose a Lesson to Learn",
    step1Sub: "Click any lesson below to load the blackboard and audio notes instantly",
    lessonPhysics: "Physics",
    lessonPhysicsSub: "Force & Motion",
    lessonMath: "Mathematics",
    lessonMathSub: "Quadratic & Calculus",
    lessonBio: "Biology",
    lessonBioSub: "Plant Cell Diagram",
    lessonChem: "Chemistry",
    lessonChemSub: "Water Molecule",

    // Step 2
    step2Title: "Listen to Notes & See the Board",
    step2Sub: "Our AI reads chalk handwriting and math formulas in natural spoken words",
    boardTitle: "📷 Classroom Board",
    btnViewClear: "✨ Clear View",
    btnViewOrig: "📷 Original",
    btnPlayFull: "▶️ Play Full Audio Lesson",
    btnFormulasOnly: "📐 Read Formulas Only",
    btnHomeworkOnly: "📝 Read Homework",
    notesTitle: "📝 Lesson Notes & Formulas",
    btnListen: "🔊 Listen",

    // Step 3 (QA)
    step3Title: "🎙️ Step 3: Have a Question? Ask the Board!",
    step3Sub: "Ask about any formula, homework, or diagram",
    qaPlaceholder: "Type or click Speak: e.g. 'What is the formula for force?' or 'What is homework?'",
    btnAsk: "Ask Question",
    btnSpeak: "🎤 Speak",
    tryAsking: "Try asking:",
    quickHomework: "📝 What is the homework?",
    quickKinetic: "📐 Explain kinetic energy",
    quickQuadratic: "🔢 What is quadratic formula?",
    quickNucleus: "🌿 Where is the nucleus?",
    btnHearAgain: "🔊 Hear Answer Again",

    // Step 4 (Diagrams)
    step4Title: "🎧 Step 4: Spatial Audio Diagram Explainer",
    step4Sub: "For blind students: Click below to hear a spatial audio walkthrough explaining where each part is located.",
    btnPlantCell: "🌿 Plant Cell",
    btnWaterMolecule: "💧 Water Molecule",
    btnPlaySpatial: "🔊 Play Spatial Audio Walkthrough",
    whereEachPart: "Where Each Part Is Located:",

    // Shiksha Mode
    shikshaStep1Title: "💬 Step 1: Live Lecture Subtitles",
    shikshaStep1Sub: "The teacher's speech is displayed below. Hard science words are highlighted in blue—click any word to see what it means in simple English!",
    btnShowSubtitles: "✍️ Show Subtitles & Words",
    subtitlesPlaceholder: "Subtitles will appear here. Click 'Show Subtitles & Words' to see interactive words.",
    shikshaStep2Title: "🤟 Step 2: Indian Sign Language (ISL)",
    btnPlayAllSigns: "▶️ Play All Signs",
    btnPrev: "◀ Prev",
    btnNext: "Next ▶",
    shikshaStep3Title: "💡 Step 3: Quick Revision Flashcards",
    shikshaStep3Sub: "Click any card to flip and check the answer",

    // Exam Mode
    examStep1Title: "📄 Step 1: Exam Question Paper",
    examStep1Sub: "Click 'Listen' to hear any question read aloud. Then click 'Answer This' to dictate your reply.",
    btnAnswerThis: "✍️ Answer This Question",
    examStep2Title: "🎙️ Step 2: Speak Your Answer",
    examStep2Sub: "Click 'Press Mic to Speak' and speak your answer. Formulas like 'force equals mass times acceleration' will automatically convert into F = m · a.",
    examPlaceholder: "Click 'Press Mic to Speak' or type your answer here...",
    btnSubmitGrade: "✅ Submit & Grade My Answer",
    btnPressMic: "🎙️ Press Mic to Speak",

    // Lessons Content
    lessons: {
      physics_chalkboard: {
        title: "CLASS XII - APPLIED PHYSICS",
        topic: "Newton's Laws of Motion & Work-Energy Theorem",
        sections: [
          {
            heading: "1. Force Equation (Newton's Second Law)",
            content: "Force is equal to mass multiplied by acceleration. It describes how velocity changes when pushed.",
            equations: [{ raw: "F = m * a", spoken: "Force F equals mass m multiplied by acceleration a", variables: "m = mass in kg, a = acceleration in m/s²" }]
          },
          {
            heading: "2. Kinematic Equations of Motion",
            content: "Three core equations relating initial velocity, final velocity, acceleration, and distance.",
            equations: [
              { raw: "v = u + a * t", spoken: "Final velocity v equals initial velocity u plus acceleration a times time t", variables: "u = initial, v = final, t = time" },
              { raw: "KE = (1/2) * m * v^2", spoken: "Kinetic Energy equals one half times mass m times velocity squared", variables: "Mechanical energy of motion" }
            ]
          }
        ],
        homework: "Solve Problems 4.1 to 4.5 from NCERT Chapter 4 before tomorrow's class.",
        summary: "Applied Physics lesson. Newton's laws and work energy theorem. Primary formulas are F equals m times a, and Kinetic energy equals half m v squared. Homework is NCERT problems 4.1 to 4.5."
      },
      math_whiteboard: {
        title: "MATHEMATICS: CALCULUS & QUADRATIC FORMULA",
        topic: "Quadratic Roots, Discriminants, and Derivatives",
        sections: [
          {
            heading: "1. General Quadratic Equation & Roots",
            content: "Standard formula for finding the two solutions of a second-degree polynomial equation.",
            equations: [
              { raw: "Delta = b^2 - 4*a*c", spoken: "Discriminant Delta equals b squared minus four a c", variables: "If Delta > 0, roots are real and distinct" },
              { raw: "x = (-b +/- sqrt(b^2 - 4*a*c)) / (2*a)", spoken: "x equals negative b plus or minus square root of b squared minus 4 a c, all divided by 2 a", variables: "Sridharacharya quadratic formula" }
            ]
          },
          {
            heading: "2. Differential Calculus Rules",
            content: "Rates of change for trigonometric and power functions.",
            equations: [
              { raw: "d/dx [sin(x)] = cos(x)", spoken: "derivative of sine of x equals cosine of x", variables: "Trigonometric differentiation" },
              { raw: "d/dx [x^n] = n * x^(n-1)", spoken: "derivative of x to the power n equals n times x to the power n minus 1", variables: "Power rule" }
            ]
          }
        ],
        homework: "Submit Assignment 3 by Friday 4:00 PM. Covers derivatives and quadratic roots.",
        summary: "Mathematics lesson covering the quadratic formula, discriminant conditions, and derivatives of sine and power functions. Assignment 3 is due Friday at 4 PM."
      },
      plant_cell_anatomy: {
        title: "BIOLOGY: STRUCTURE OF A PLANT CELL",
        topic: "Cell Wall, Chloroplasts, Vacuole, and Nucleus",
        sections: [
          {
            heading: "1. Outer Protective Layers",
            content: "A rigid cellulosic cell wall encloses the inner plasma membrane to give plants structural stiffness.",
            equations: []
          },
          {
            heading: "2. Central Vacuole & Organelles",
            content: "The large central vacuole stores water and maintains turgor pressure preventing wilting.",
            equations: []
          }
        ],
        homework: "Draw and label the plant cell diagram in your practical notebook.",
        summary: "Biology diagram of a typical plant cell. Outer wall provides stiffness, center holds the large vacuole for water storage, and green chloroplasts carry out photosynthesis."
      },
      water_molecule_chemistry: {
        title: "CHEMISTRY: MOLECULAR STRUCTURE OF WATER",
        topic: "Bent Geometry, Polarity, and Hydrogen Bonds",
        sections: [
          {
            heading: "1. Chemical Formula & Bond Angle",
            content: "One oxygen atom covalently bonded to two hydrogen atoms at a fixed bond angle of 104.5 degrees.",
            equations: [{ raw: "H2O (Bond Angle = 104.5 deg)", spoken: "H 2 O with a bond angle of 104.5 degrees", variables: "Bent molecular geometry" }]
          },
          {
            heading: "2. Dipole Moment & Polarity",
            content: "Oxygen attracts shared electrons creating partial negative charge, while hydrogens have partial positive charge.",
            equations: []
          }
        ],
        homework: "Read Chapter 3 on Chemical Bonding and solve practice questions 1 to 8.",
        summary: "Chemistry lesson on water H2O. Bent shape with 104.5 degree bond angle makes water polar and a universal solvent."
      }
    }
  },

  // 2. HINDI (हिन्दी)
  hi: {
    brandSubtitle: "दृष्टिबाधित और श्रवणबाधित छात्रों के लिए सरल सहायक कक्षा",
    audioReady: "ऑडियो तैयार है। किसी भी प्ले बटन पर क्लिक करें या स्पेसबार दबाएं।",
    audioPlaying: "हिन्दी में ऑडियो सुनाया जा रहा है...",
    audioPaused: "ऑडियो रोक दिया गया।",
    audioResumed: "ऑडियो पुनः चालू किया गया।",
    audioFinished: "ऑडियो समाप्त हुआ।",
    btnPausePlay: "⏯️ रोकें / चलाएं",

    mode1Title: "1. दृष्टिबाधित छात्र मोड",
    mode1Desc: "ब्लैकबोर्ड नोट्स, सूत्र और चित्र बोलकर सुनें",
    mode2Title: "2. मूक-बधिर छात्र मोड",
    mode2Desc: "लाइव सबटाइटल पढ़ें और सांकेतिक भाषा देखें",
    mode3Title: "3. वॉयस परीक्षा लेखक",
    mode3Desc: "अपने उत्तर बोलकर दें — एआई लिखेगा और अंक देगा",

    step1Title: "सीखने के लिए एक पाठ चुनें",
    step1Sub: "ब्लैकबोर्ड और ऑडियो नोट्स तुरंत लोड करने के लिए नीचे किसी भी पाठ पर क्लिक करें",
    lessonPhysics: "भौतिक विज्ञान",
    lessonPhysicsSub: "बल और गति के नियम",
    lessonMath: "गणित",
    lessonMathSub: "द्विघात समीकरण और कलन",
    lessonBio: "जीव विज्ञान",
    lessonBioSub: "पादप कोशिका आरेख",
    lessonChem: "रसायन विज्ञान",
    lessonChemSub: "जल का अणु (H2O)",

    step2Title: "नोट्स सुनें और बोर्ड देखें",
    step2Sub: "हमारा एआई चॉक की लिखावट और गणितीय सूत्रों को स्पष्ट बोलकर सुनाता है",
    boardTitle: "📷 कक्षा का ब्लैकबोर्ड",
    btnViewClear: "✨ स्पष्ट दृश्य",
    btnViewOrig: "📷 मूल फोटो",
    btnPlayFull: "▶️ पूरा पाठ बोलकर सुनें",
    btnFormulasOnly: "📐 केवल सूत्र सुनें",
    btnHomeworkOnly: "📝 गृहकार्य सुनें",
    notesTitle: "📝 पाठ नोट्स और सूत्र",
    btnListen: "🔊 सुनें",

    step3Title: "🎙️ चरण 3: कोई सवाल है? बोर्ड से पूछें!",
    step3Sub: "किसी भी सूत्र, गृहकार्य या आरेख के बारे में पूछें",
    qaPlaceholder: "टाइप करें या बोलें: जैसे 'बल का सूत्र क्या है?' या 'गृहकार्य क्या है?'",
    btnAsk: "सवाल पूछें",
    btnSpeak: "🎤 बोलें",
    tryAsking: "पूछ कर देखें:",
    quickHomework: "📝 आज का गृहकार्य क्या है?",
    quickKinetic: "📐 गतिज ऊर्जा का सूत्र क्या है?",
    quickQuadratic: "🔢 द्विघात सूत्र क्या है?",
    quickNucleus: "🌿 कोशिका में केंद्रक कहां है?",
    btnHearAgain: "🔊 उत्तर पुनः सुनें",

    step4Title: "🎧 चरण 4: आरेख की स्थानिक ऑडियो गाइड",
    step4Sub: "दृष्टिबाधित छात्रों के लिए: यह सुनने के लिए क्लिक करें कि चित्र का प्रत्येक भाग कहाँ स्थित है।",
    btnPlantCell: "🌿 पादप कोशिका",
    btnWaterMolecule: "💧 जल का अणु",
    btnPlaySpatial: "🔊 ऑडियो गाइड चलाएं",
    whereEachPart: "प्रत्येक भाग कहाँ स्थित है:",

    shikshaStep1Title: "💬 चरण 1: लाइव व्याख्यान सबटाइटल",
    shikshaStep1Sub: "शिक्षक का भाषण नीचे दिख रहा है। कठिन विज्ञान शब्दों पर नीले रंग से निशान है—सरल अर्थ देखने के लिए क्लिक करें!",
    btnShowSubtitles: "✍️ सबटाइटल और शब्द दिखाएं",
    subtitlesPlaceholder: "सबटाइटल यहाँ दिखाई देंगे। शब्दों को देखने के लिए बटन दबाएं।",
    shikshaStep2Title: "🤟 चरण 2: भारतीय सांकेतिक भाषा (ISL)",
    btnPlayAllSigns: "▶️ सभी संकेत चलाएं",
    btnPrev: "◀ पिछला",
    btnNext: "अगला ▶",
    shikshaStep3Title: "💡 चरण 3: त्वरित पुनरीक्षण फ्लैशकार्ड",
    shikshaStep3Sub: "उत्तर देखने के लिए किसी भी कार्ड पर क्लिक करें",

    examStep1Title: "📄 चरण 1: परीक्षा प्रश्न पत्र",
    examStep1Sub: "प्रश्न सुनने के लिए 'सुनें' दबाएं। फिर अपना उत्तर बोलने के लिए 'उत्तर दें' दबाएं।",
    btnAnswerThis: "✍️ इस प्रश्न का उत्तर दें",
    examStep2Title: "🎙️ चरण 2: अपना उत्तर बोलकर दें",
    examStep2Sub: "'बोलने के लिए माइक दबाएं' पर क्लिक करें। आपके बोले गए सूत्र अपने आप गणितीय रूप में बदल जाएंगे।",
    examPlaceholder: "अपना उत्तर यहाँ बोलें या लिखें...",
    btnSubmitGrade: "✅ उत्तर जमा करें और अंक जांचें",
    btnPressMic: "🎙️ बोलने के लिए माइक दबाएं",

    lessons: {
      physics_chalkboard: {
        title: "कक्षा 12 - व्यावहारिक भौतिक विज्ञान",
        topic: "न्यूटन के गति के नियम और कार्य-ऊर्जा प्रमेय",
        sections: [
          {
            heading: "1. बल का समीकरण (न्यूटन का दूसरा नियम)",
            content: "बल द्रव्यमान और त्वरण के गुणनफल के बराबर होता है। यह बताता है कि किसी वस्तु पर धक्का लगाने से उसका वेग कैसे बदलता है।",
            equations: [{ raw: "F = m * a", spoken: "बल एफ बराबर द्रव्यमान एम गुणा त्वरण ए", variables: "एम = किलोग्राम में द्रव्यमान, ए = मीटर प्रति वर्ग सेकंड त्वरण" }]
          },
          {
            heading: "2. गति के समीकरण और गतिज ऊर्जा",
            content: "प्रारंभिक वेग, अंतिम वेग, त्वरण और दूरी के बीच संबंध।",
            equations: [
              { raw: "v = u + a * t", spoken: "अंतिम वेग वी बराबर प्रारंभिक वेग यू जमा त्वरण ए गुणा समय टी", variables: "यू = प्रारंभिक, वी = अंतिम, टी = समय" },
              { raw: "KE = (1/2) * m * v^2", spoken: "गतिज ऊर्जा बराबर आधा द्रव्यमान एम गुणा वेग वी का वर्ग", variables: "गति की यांत्रिक ऊर्जा" }
            ]
          }
        ],
        homework: "कल की कक्षा से पहले एनसीईआरटी अध्याय 4 के प्रश्न 4.1 से 4.5 हल करें।",
        summary: "भौतिकी का पाठ। न्यूटन के नियम और कार्य ऊर्जा प्रमेय। मुख्य सूत्र हैं एफ बराबर एम गुणा ए, और गतिज ऊर्जा बराबर आधा एम वी स्क्वायर। गृहकार्य एनसीईआरटी प्रश्न 4.1 से 4.5 है।"
      },
      math_whiteboard: {
        title: "गणित: कलन और द्विघात समीकरण",
        topic: "द्विघात मूल, विविक्तकर (डिस्क्रिमिनेंट) और अवकलन",
        sections: [
          {
            heading: "1. सामान्य द्विघात समीकरण और मूल",
            content: "द्विघात समीकरण ए एक्स स्क्वायर जमा बी एक्स जमा सी बराबर शून्य के हल ज्ञात करने का सूत्र।",
            equations: [
              { raw: "Delta = b^2 - 4*a*c", spoken: "डिस्क्रिमिनेंट डेल्टा बराबर बी का वर्ग घटाव चार गुणा ए गुणा सी", variables: "यदि डेल्टा शून्य से बड़ा है, तो मूल वास्तविक और भिन्न होंगे" },
              { raw: "x = (-b +/- sqrt(b^2 - 4*a*c)) / (2*a)", spoken: "एक्स बराबर माइनस बी प्लस माइनस वर्गमूल बी स्क्वायर माइनस 4 ए सी, पूरे का बटा 2 ए", variables: "श्रीधराचार्य द्विघात सूत्र" }
            ]
          }
        ],
        homework: "असाइनमेंट 3 शुक्रवार शाम 4 बजे तक जमा करें। इसमें अवकलन और द्विघात मूल शामिल हैं।",
        summary: "गणित का पाठ। द्विघात सूत्र और अवकलन के नियम। असाइनमेंट 3 शुक्रवार शाम 4 बजे तक जमा करना है।"
      },
      plant_cell_anatomy: {
        title: "जीव विज्ञान: पादप कोशिका की संरचना",
        topic: "कोशिका भित्ति, हरितलवक (क्लोरोप्लास्ट), रसधानी और केंद्रक",
        sections: [
          {
            heading: "1. सुरक्षात्मक बाहरी परतें",
            content: "कठोर कोशिका भित्ति पादप कोशिका को मजबूती और आकार प्रदान करती है।",
            equations: []
          },
          {
            heading: "2. केंद्रीय रसधानी और अंगक",
            content: "बड़ी केंद्रीय रसधानी जल संग्रह करती है और कोशिका को फूलने में मदद करती है।",
            equations: []
          }
        ],
        homework: "अपनी प्रैक्टिकल कॉपी में पादप कोशिका का नामांकित चित्र बनाएं।",
        summary: "पादप कोशिका की संरचना। बाहरी भित्ति दृढ़ता देती है, केंद्र में बड़ी रसधानी है और हरे क्लोरोप्लास्ट में प्रकाश संश्लेषण होता है।"
      },
      water_molecule_chemistry: {
        title: "रसायन विज्ञान: जल के अणु की संरचना",
        topic: "झुकी हुई ज्यामिति, ध्रुवीयता और हाइड्रोजन बंध",
        sections: [
          {
            heading: "1. रासायनिक सूत्र और बंध कोण",
            content: "एक ऑक्सीजन परमाणु दो हाइड्रोजन परमाणुओं से 104.5 डिग्री के कोण पर सहसंयोजक बंध द्वारा जुड़ा होता है।",
            equations: [{ raw: "H2O (बंध कोण = 104.5 डिग्री)", spoken: "एच 2 ओ, जिसमें बंध कोण 104.5 डिग्री है", variables: "झुकी हुई आणविक ज्यामिति" }]
          }
        ],
        homework: "रासायनिक बंधन अध्याय 3 पढ़ें और अभ्यास प्रश्न 1 से 8 हल करें।",
        summary: "जल एच 2 ओ का पाठ। 104.5 डिग्री बंध कोण के कारण जल ध्रुवीय होता है और एक सार्वत्रिक विलायक है।"
      }
    }
  },

  // 3. TELUGU (తెలుగు)
  te: {
    brandSubtitle: "దృష్టి మరియు వినికిడి లోపం ఉన్న విద్యార్థుల కోసం సులభమైన సహాయక తరగతి గది",
    audioReady: "ఆడియో సిద్ధంగా ఉంది. ప్లే బటన్ క్లిక్ చేయండి లేదా స్పేస్‌బార్ నొక్కండి.",
    audioPlaying: "తెలుగులో ఆడియో వినిపిస్తోంది...",
    audioPaused: "ఆడియో ఆపివేయబడింది.",
    audioResumed: "ఆడియో తిరిగి ప్రారంభమైంది.",
    audioFinished: "ఆడియో పూర్తయింది.",
    btnPausePlay: "⏯️ ఆపు / ప్లే చేయి",

    mode1Title: "1. అంధులు & దృష్టి లోపం",
    mode1Desc: "బోర్డు నోట్స్, సూత్రాలు మరియు చిత్రాలను వినండి",
    mode2Title: "2. వినికిడి లోపం ఉన్నవారు",
    mode2Desc: "లైవ్ ఉపశీర్షికలు చదవండి & సంకేత భాష చూడండి",
    mode3Title: "3. వాయిస్ పరీక్ష సహాయకుడు",
    mode3Desc: "మీ సమాధానాలు మాట్లాడండి — AI రాసి మార్కులు ఇస్తుంది",

    step1Title: "నేర్చుకోవడానికి ఒక పాఠాన్ని ఎంచుకోండి",
    step1Sub: "బ్లాక్‌బోర్డ్ మరియు ఆడియో నోట్స్ తక్షణమే చూడటానికి క్రింది పాఠంపై క్లిక్ చేయండి",
    lessonPhysics: "భౌతిక శాస్త్రం",
    lessonPhysicsSub: "బలము & గమన నియమాలు",
    lessonMath: "గణితం",
    lessonMathSub: "వర్గ సమీకరణాలు & కలన గణితం",
    lessonBio: "జీవ శాస్త్రం",
    lessonBioSub: "వృక్ష కణ నిర్మాణం",
    lessonChem: "రసాయన శాస్త్రం",
    lessonChemSub: "నీటి అణువు (H2O)",

    step2Title: "నోట్స్ వినండి & బోర్డును చూడండి",
    step2Sub: "మా AI సుద్ద చేతివ్రాతను మరియు గణిత సూత్రాలను స్పష్టమైన మాటల్లో చదువుతుంది",
    boardTitle: "📷 తరగతి గది బోర్డు",
    btnViewClear: "✨ స్పష్టమైన దృశ్యం",
    btnViewOrig: "📷 అసలు చిత్రం",
    btnPlayFull: "▶️ పూర్తి పాఠం వినండి",
    btnFormulasOnly: "📐 సూత్రాలు మాత్రమే వినండి",
    btnHomeworkOnly: "📝 హోంవర్క్ వినండి",
    notesTitle: "📝 పాఠ్య నోట్స్ & సూత్రాలు",
    btnListen: "🔊 వినండి",

    step3Title: "🎙️ దశ 3: సందేహం ఉందా? బోర్డును అడగండి!",
    step3Sub: "ఏదైనా సూత్రం, హోంవర్క్ లేదా చిత్రం గురించి అడగండి",
    qaPlaceholder: "టైప్ చేయండి లేదా మాట్లాడండి: ఉదా. 'బలం సూత్రం ఏమిటి?' లేదా 'హోంవర్క్ ఏమిటి?'",
    btnAsk: "ప్రశ్న అడగండి",
    btnSpeak: "🎤 మాట్లాడండి",
    tryAsking: "ఇలా అడగండి:",
    quickHomework: "📝 ఈరోజు హోంవర్క్ ఏమిటి?",
    quickKinetic: "📐 గతిజ శక్తి సూత్రం ఏమిటి?",
    quickQuadratic: "🔢 వర్గ సమీకరణ సూత్రం ఏమిటి?",
    quickNucleus: "🌿 కణంలో కేంద్రకం ఎక్కడుంది?",
    btnHearAgain: "🔊 సమాధానం మళ్ళీ వినండి",

    step4Title: "🎧 దశ 4: చిత్రాల ఆడియో గైడ్",
    step4Sub: "దృష్టి లోపం ఉన్న విద్యార్థుల కోసం: చిత్రం యొక్క భాగాలు ఎక్కడ ఉన్నాయో వినండి.",
    btnPlantCell: "🌿 వృక్ష కణం",
    btnWaterMolecule: "💧 నీటి అణువు",
    btnPlaySpatial: "🔊 ఆడియో గైడ్ వినండి",
    whereEachPart: "ప్రతి భాగం ఎక్కడ ఉంది:",

    shikshaStep1Title: "💬 దశ 1: ప్రత్యక్ష ఉపశీర్షికలు",
    shikshaStep1Sub: "ఉపాధ్యాయుల ప్రసంగం క్రింద కనిపిస్తుంది. కష్టమైన పదాలు నీలిరంగులో ఉంటాయి—సరళమైన అర్థం కోసం క్లిక్ చేయండి!",
    btnShowSubtitles: "✍️ ఉపశీర్షికలు చూపించు",
    subtitlesPlaceholder: "ఉపశీర్షికలు ఇక్కడ కనిపిస్తాయి.",
    shikshaStep2Title: "🤟 దశ 2: భారతీయ సంకేత భాష (ISL)",
    btnPlayAllSigns: "▶️ అన్ని సంకేతాలు ప్లే చేయి",
    btnPrev: "◀ మునుపటి",
    btnNext: "తరువాతి ▶",
    shikshaStep3Title: "💡 దశ 3: రివిజన్ ఫ్లాష్‌కార్డులు",
    shikshaStep3Sub: "సమాధానం చూడటానికి కార్డుపై క్లిక్ చేయండి",

    examStep1Title: "📄 దశ 1: పరీక్ష ప్రశ్నపత్రం",
    examStep1Sub: "ప్రశ్న వినడానికి 'వినండి' నొక్కండి. సమాధానం చెప్పడానికి 'సమాధానం చెప్పు' నొక్కండి.",
    btnAnswerThis: "✍️ ఈ ప్రశ్నకు సమాధానం ఇవ్వండి",
    examStep2Title: "🎙️ దశ 2: సమాధానం మాట్లాడండి",
    examStep2Sub: "'మాట్లాడటానికి మైక్ నొక్కండి' క్లిక్ చేసి మాట్లాడండి. సూత్రాలు స్వయంచాలకంగా గణిత రూపంలోకి మారతాయి.",
    examPlaceholder: "మీ సమాధానాన్ని ఇక్కడ మాట్లాడండి లేదా టైప్ చేయండి...",
    btnSubmitGrade: "✅ సమాధానం సమర్పించి మార్కులు పొందండి",
    btnPressMic: "🎙️ మాట్లాడటానికి మైక్ నొక్కండి",

    lessons: {
      physics_chalkboard: {
        title: "తరగతి 12 - అనువర్తిత భౌతిక శాస్త్రం",
        topic: "న్యూటన్ గమన నియమాలు & పని-శక్తి సిద్ధాంతం",
        sections: [
          {
            heading: "1. బల సమీకరణం (న్యూటన్ రెండవ నియమం)",
            content: "బలము ద్రవ్యరాశి మరియు త్వరణం యొక్క లబ్దానికి సమానం. ఇది వస్తువు వేగం ఎలా మారుతుందో వివరిస్తుంది.",
            equations: [{ raw: "F = m * a", spoken: "బలం ఎఫ్ సమానం ద్రవ్యరాశి ఎమ్ గుణకారం త్వరణం ఎ", variables: "ఎమ్ = ద్రవ్యరాశి కేజీలలో, ఎ = త్వరణం" }]
          }
        ],
        homework: "రేపటి తరగతికి ముందు ఎన్‌సిఈఆర్‌టి అధ్యాయం 4 నుండి 4.1 నుండి 4.5 లెక్కలు చేయండి.",
        summary: "భౌతిక శాస్త్ర పాఠం. న్యూటన్ నియమాలు మరియు గతిజ శక్తి సూత్రం. హోంవర్క్ ఎన్‌సిఈఆర్‌టి సమస్యలు 4.1 నుండి 4.5."
      },
      math_whiteboard: {
        title: "గణితం: వర్గ సమీకరణాలు & కలన గణితం",
        topic: "వర్గ సమీకరణ మూలాలు మరియు అవకలనం",
        sections: [
          {
            heading: "1. వర్గ సమీకరణ మూలాలు",
            content: "రెండవ తరగతి బహుపది సమీకరణానికి రెండు సాధనలను కనుగొనే సూత్రం.",
            equations: [{ raw: "x = (-b +/- sqrt(b^2 - 4*a*c)) / (2*a)", spoken: "ఎక్స్ సమానం మైనస్ బి ప్లస్ ఆర్ మైనస్ రూట్ బి స్క్వేర్ మైనస్ నాలుగు ఎ సి, బై రెండు ఎ", variables: "శ్రీధరాచార్య వర్గ సూత్రం" }]
          }
        ],
        homework: "శుక్రవారం సాయంత్రం 4 గంటలలోపు అసైన్‌మెంట్ 3 సమర్పించండి.",
        summary: "గణిత పాఠం. వర్గ సూత్రం మరియు అవకలన నియమాలు. అసైన్‌మెంట్ శుక్రవారం సాయంత్రం లోపు ఇవ్వాలి."
      },
      plant_cell_anatomy: {
        title: "జీవ శాస్త్రం: వృక్ష కణ నిర్మాణం",
        topic: "కణ కవచం, హరితరేణువులు, రిక్తిక మరియు కేంద్రకం",
        sections: [
          {
            heading: "1. కణ కవచం మరియు రిక్తిక",
            content: "దృఢమైన కణ కవచం వృక్ష కణానికి రక్షణ ఇస్తుంది. పెద్ద కేంద్ర రిక్తిక నీటిని నిల్వ చేస్తుంది.",
            equations: []
          }
        ],
        homework: "మీ ప్రాక్టికల్ బుక్‌లో వృక్ష కణ చిత్రం గీయండి.",
        summary: "వృక్ష కణ నిర్మాణం. కణ కవచం ఆకారాన్ని ఇస్తుంది మరియు హరితరేణువుల్లో కిరణజన్య సంయోగక్రియ జరుగుతుంది."
      },
      water_molecule_chemistry: {
        title: "రసాయన శాస్త్రం: నీటి అణు నిర్మాణం",
        topic: "వంగిన నిర్మాణం, ధ్రువణత మరియు హైడ్రోజన్ బంధాలు",
        sections: [
          {
            heading: "1. రసాయన సూత్రం & బంధ కోణం",
            content: "ఆక్సిజన్ పరమాణువు రెండు హైడ్రోజన్ పరమాణువులతో 104.5 డిగ్రీల కోణంతో బంధించబడి ఉంటుంది.",
            equations: [{ raw: "H2O (కోణం = 104.5 డిగ్రీలు)", spoken: "హెచ్ 2 ఓ, బంధ కోణం 104.5 డిగ్రీలు", variables: "నీటి అణువు" }]
          }
        ],
        homework: "రసాయన బంధం అధ్యాయం 3 చదివి ప్రశ్నలు 1 నుండి 8 పూర్తి చేయండి.",
        summary: "నీటి అణు నిర్మాణం. 104.5 డిగ్రీల కోణం వల్ల నీరు ధ్రువ ద్రావణిగా మారుతుంది."
      }
    }
  },

  // 4. TAMIL (தமிழ்)
  ta: {
    brandSubtitle: "பார்வை மற்றும் செவித்திறன் குறைபாடுள்ள மாணவர்களுக்கான எளிய வகுப்பறை",
    audioReady: "ஒலி தயார். இயக்க பொத்தானை அழுத்தவும் அல்லது Spacebar தட்டவும்.",
    audioPlaying: "தமிழில் ஒலி இயக்கப்படுகிறது...",
    audioPaused: "ஒலி நிறுத்தப்பட்டது.",
    audioResumed: "ஒலி மீண்டும் தொடங்கப்பட்டது.",
    audioFinished: "ஒலி முடிந்தது.",
    btnPausePlay: "⏯️ நிறுத்து / இயக்கு",

    mode1Title: "1. பார்வை குறைபாடுள்ளோர்",
    mode1Desc: "கரும்பலகை குறிப்புகள், சூத்திரங்கள் மற்றும் படங்களை கேளுங்கள்",
    mode2Title: "2. செவித்திறன் குறைபாடுள்ளோர்",
    mode2Desc: "நேரலை வசனங்களைப் படியுங்கள் & சைகை மொழியைப் பாருங்கள்",
    mode3Title: "3. குரல் தேர்வு எழுத்தாளர்",
    mode3Desc: "உங்கள் விடைகளைப் பேசுங்கள் — AI எழுதி மதிப்பிடும்",

    step1Title: "பாடத்தை தேர்வு செய்யவும்",
    step1Sub: "கரும்பலகை மற்றும் ஒலி குறிப்புகளைக் காண கீழே உள்ள பாடத்தை கிளிக் செய்யவும்",
    lessonPhysics: "இயற்பியல்",
    lessonPhysicsSub: "விசை & இயக்க விதிகள்",
    lessonMath: "கணிதம்",
    lessonMathSub: "இருபடிச் சமன்பாடுகள்",
    lessonBio: "உயிரியல்",
    lessonBioSub: "தாவர செல் அமைப்பு",
    lessonChem: "வேதியியல்",
    lessonChemSub: "நீர் மூலக்கூறு (H2O)",

    step2Title: "குறிப்புகளைக் கேட்டு பலகையைப் பாருங்கள்",
    step2Sub: "எங்கள் AI சுண்ணக்கட்டி கையெழுத்து மற்றும் சூத்திரங்களை தமிழில் வாசிக்கிறது",
    boardTitle: "📷 வகுப்பறை கரும்பலகை",
    btnViewClear: "✨ தெளிவான காட்சி",
    btnViewOrig: "📷 அசல் படம்",
    btnPlayFull: "▶️ முழு பாடத்தையும் கேளுங்கள்",
    btnFormulasOnly: "📐 சூத்திரங்களை மட்டும் கேளுங்கள்",
    btnHomeworkOnly: "📝 வீட்டுப்பாடம் கேளுங்கள்",
    notesTitle: "📝 பாடக் குறிப்புகள் & சூத்திரங்கள்",
    btnListen: "🔊 கேள்",

    step3Title: "🎙️ படி 3: கேள்வி உள்ளதா? பலகையிடம் கேளுங்கள்!",
    step3Sub: "சூத்திரம், வீட்டுப்பாடம் அல்லது படம் பற்றி கேளுங்கள்",
    qaPlaceholder: "தட்டச்சு செய்யவும் அல்லது பேசவும்: எ.கா. 'விசையின் சூத்திரம் என்ன?'",
    btnAsk: "கேள்வி கேள்",
    btnSpeak: "🎤 பேசு",
    tryAsking: "இதை கேட்டுப் பாருங்கள்:",
    quickHomework: "📝 இன்றைய வீட்டுப்பாடம் என்ன?",
    quickKinetic: "📐 இயக்க ஆற்றல் சூத்திரம் என்ன?",
    quickQuadratic: "🔢 இருபடி சூத்திரம் என்ன?",
    quickNucleus: "🌿 செல்லில் உட்கரு எங்குள்ளது?",
    btnHearAgain: "🔊 பதிலை மீண்டும் கேள்",

    step4Title: "🎧 படி 4: வரைபட ஒலி வழிகாட்டி",
    step4Sub: "பார்வையற்ற மாணவர்களுக்கு: வரைபடத்தின் ஒவ்வொரு பாகமும் எங்குள்ளது என்பதை கேளுங்கள்.",
    btnPlantCell: "🌿 தாவர செல்",
    btnWaterMolecule: "💧 நீர் மூலக்கூறு",
    btnPlaySpatial: "🔊 ஒலி வழிகாட்டியை இயக்கு",
    whereEachPart: "பாகங்கள் அமைந்துள்ள இடம்:",

    shikshaStep1Title: "💬 படி 1: நேரலை வசனங்கள்",
    shikshaStep1Sub: "ஆசிரியரின் பேச்சு கீழே தோன்றும். கடினமான சொற்கள் நீல நிறத்தில் இருக்கும்—விளக்கம் காண கிளிக் செய்க!",
    btnShowSubtitles: "✍️ வசனங்களைக் காட்டு",
    subtitlesPlaceholder: "வசனங்கள் இங்கே தோன்றும்.",
    shikshaStep2Title: "🤟 படி 2: இந்திய சைகை மொழி (ISL)",
    btnPlayAllSigns: "▶️ அனைத்து சைகைகளையும் இயக்கு",
    btnPrev: "◀ முந்தைய",
    btnNext: "அடுத்தது ▶",
    shikshaStep3Title: "💡 படி 3: நினைவு அட்டைகள் (Flashcards)",
    shikshaStep3Sub: "பதிலை அறிய அட்டையை கிளிக் செய்யவும்",

    examStep1Title: "📄 படி 1: தேர்வு வினாத்தாள்",
    examStep1Sub: "வினாவைக் கேட்க 'கேள்' அழுத்தவும். பதில் கூற 'பதில் கூறு' அழுத்தவும்.",
    btnAnswerThis: "✍️ இதற்குப் பதில் கூறு",
    examStep2Title: "🎙️ படி 2: உங்கள் பதிலை பேசுங்கள்",
    examStep2Sub: "'மைக்கை அழுத்திப் பேசு' கிளிக் செய்து பேசவும். சூத்திரங்கள் தானாகவே கணித வடிவில் மாறும்.",
    examPlaceholder: "உங்கள் பதிலை இங்கு பேசவும் அல்லது தட்டச்சு செய்யவும்...",
    btnSubmitGrade: "✅ சமர்ப்பித்து மதிப்பெண் பெறுங்கள்",
    btnPressMic: "🎙️ மைக்கை அழுத்திப் பேசு",

    lessons: {
      physics_chalkboard: {
        title: "வகுப்பு 12 - பயன்பாட்டு இயற்பியல்",
        topic: "நியூட்டனின் இயக்க விதிகள் & வேலை-ஆற்றல் தேற்றம்",
        sections: [
          {
            heading: "1. விசை சமன்பாடு (நியூட்டனின் இரண்டாம் விதி)",
            content: "விசை என்பது நிறை மற்றும் முடுக்கத்தின் பெருக்கற்பலனுக்கு சமம்.",
            equations: [{ raw: "F = m * a", spoken: "விசை எப் சமம் நிறை எம் பெருக்கல் முடுக்கம் ஏ", variables: "எம் = நிறை, ஏ = முடுக்கம்" }]
          }
        ],
        homework: "நாளைய வகுப்பிற்கு முன் என்சிஇஆர்டி அத்தியாயம் 4 கணக்குகள் 4.1 முதல் 4.5 வரை செய்க.",
        summary: "இயற்பியல் பாடம். நியூட்டனின் விதிகள் மற்றும் இயக்க ஆற்றல் சூத்திரம். வீட்டுப்பாடம் என்சிஇஆர்டி கணக்குகள் 4.1 முதல் 4.5."
      },
      math_whiteboard: {
        title: "கணிதம்: இருபடிச் சமன்பாடுகள் & கால்குலஸ்",
        topic: "இருபடி மூலங்கள் மற்றும் வகைப்படுத்தல்",
        sections: [
          {
            heading: "1. இருபடி சமன்பாட்டின் மூலங்கள்",
            content: "இருபடி சமன்பாட்டிற்கான தீர்வுகளைக் கண்டறியும் சூத்திரம்.",
            equations: [{ raw: "x = (-b +/- sqrt(b^2 - 4*a*c)) / (2*a)", spoken: "எக்ஸ் சமம் மைனஸ் பி பிளஸ் ஆர் மைனஸ் ரூட் பி ஸ்கொயர் மைனஸ் நான்கு ஏ சி, கீழ் இரண்டு ஏ", variables: "இருபடி சூத்திரம்" }]
          }
        ],
        homework: "வெள்ளிக்கிழமை மாலை 4 மணிக்குள் பயிற்சி 3-ஐ சமர்ப்பிக்கவும்.",
        summary: "கணித பாடம். இருபடி சூத்திரம் மற்றும் வகை நுண்கணிதம். பயிற்சி 3 வெள்ளிக்கிழமைக்குள் சமர்ப்பிக்கப்பட வேண்டும்."
      },
      plant_cell_anatomy: {
        title: "உயிரியல்: தாவர செல்லின் கட்டமைப்பு",
        topic: "செல் சுவர், பசுங்கணிகம், நுண்குமிழி மற்றும் உட்கரு",
        sections: [
          {
            heading: "1. செல் சுவர் & உட்கரு",
            content: "கடினமான செல் சுவர் தாவர செல்லுக்கு வடிவம் அளிக்கிறது. உட்கரு செல்லின் கட்டுப்பாட்டு மையம்.",
            equations: []
          }
        ],
        homework: "தாவர செல் படத்தை வரைந்து பாகங்களை குறிக்கவும்.",
        summary: "தாவர செல்லின் அமைப்பு. செல் சுவர் உறுதியளிக்கிறது, பசுங்கணிகத்தில் ஒளிச்சேர்க்கை நடைபெறுகிறது."
      },
      water_molecule_chemistry: {
        title: "வேதியியல்: நீர் மூலக்கூறு அமைப்பு",
        topic: "வளைந்த வடிவம் மற்றும் பிணைப்புக் கோணம்",
        sections: [
          {
            heading: "1. நீர் மூலக்கூறு கோணம்",
            content: "ஆக்சிஜன் மற்றும் ஹைட்ரஜன் அணுக்களுக்கு இடையேயான பிணைப்புக் கோணம் 104.5 டிகிரி ஆகும்.",
            equations: [{ raw: "H2O (கோணம் = 104.5 டிகிரி)", spoken: "ஹெச் 2 ஓ, பிணைப்புக் கோணம் 104.5 டிகிரி", variables: "நீர் மூலக்கூறு" }]
          }
        ],
        homework: "அத்தியாயம் 3-ல் உள்ள வினாக்கள் 1 முதல் 8 வரை படிக்கவும்.",
        summary: "நீர் மூலக்கூறு பாடம். 104.5 டிகிரி கோண அமைப்பு நீரை ஒரு சிறந்த கரைப்பானாக மாற்றுகிறது."
      }
    }
  },

  // 5. MARATHI (मराठी)
  mr: {
    brandSubtitle: "दृष्टिहीन आणि कर्णबधिर विद्यार्थ्यांसाठी सुलभ सहाय्यक वर्ग",
    audioReady: "ऑडिओ तयार आहे. प्ले बटण दाबा किंवा स्पेसबार वापरा.",
    audioPlaying: "मराठीत ऑडिओ ऐकवला जात आहे...",
    audioPaused: "ऑडिओ थांबवला.",
    audioResumed: "ऑडिओ पुन्हा सुरू केला.",
    audioFinished: "ऑडिओ पूर्ण झाला.",
    btnPausePlay: "⏯️ थांबवा / चालवा",

    mode1Title: "1. दृष्टिहीन विद्यार्थी",
    mode1Desc: "फळ्यावरील नोट्स, सूत्रे आणि आकृत्या ऐका",
    mode2Title: "2. कर्णबधिर विद्यार्थी",
    mode2Desc: "थेट सबटायटल्स वाचा आणि सांकेतिक भाषा पहा",
    mode3Title: "3. व्हॉइस परीक्षा लेखक",
    mode3Desc: "तुमची उत्तरे बोला — AI लिहील आणि गुण देईल",

    step1Title: "शिकण्यासाठी एक पाठ निवडा",
    step1Sub: "फळा आणि ऑडिओ नोट्स पाहण्यासाठी खालील पाठावर क्लिक करा",
    lessonPhysics: "भौतिकशास्त्र",
    lessonPhysicsSub: "बल आणि गतीचे नियम",
    lessonMath: "गणित",
    lessonMathSub: "वर्गसमीकरणे आणि कलन",
    lessonBio: "जीवशास्त्र",
    lessonBioSub: "वनस्पती पेशी रचना",
    lessonChem: "रसायनशास्त्र",
    lessonChemSub: "पाण्याचा रेणू (H2O)",

    step2Title: "नोट्स ऐका आणि फळा पहा",
    step2Sub: "आमचे AI खडूचे हस्ताक्षर आणि गणिती सूत्रे स्पष्ट मराठीत वाचते",
    boardTitle: "📷 वर्गातील फळा",
    btnViewClear: "✨ स्पष्ट दृश्य",
    btnViewOrig: "📷 मूळ फोटो",
    btnPlayFull: "▶️ संपूर्ण पाठ ऐका",
    btnFormulasOnly: "📐 फक्त सूत्रे ऐका",
    btnHomeworkOnly: "📝 गृहपाठ ऐका",
    notesTitle: "📝 पाठाच्या नोट्स आणि सूत्रे",
    btnListen: "🔊 ऐका",

    step3Title: "🎙️ पायरी ३: काही प्रश्न आहे? फळ्याला विचारा!",
    step3Sub: "कोणत्याही सूत्राबद्दल, गृहपाठाबद्दल किंवा आकृतीबद्दल विचारा",
    qaPlaceholder: "टाइप करा किंवा बोला: उदा. 'बलाचे सूत्र काय आहे?'",
    btnAsk: "प्रश्न विचारा",
    btnSpeak: "🎤 बोला",
    tryAsking: "हे विचारून पहा:",
    quickHomework: "📝 आजचा गृहपाठ काय आहे?",
    quickKinetic: "📐 गतिज ऊर्जेचे सूत्र काय आहे?",
    quickQuadratic: "🔢 वर्गसमीकरणाचे सूत्र काय आहे?",
    quickNucleus: "🌿 पेशीमध्ये केंद्रक कोठे आहे?",
    btnHearAgain: "🔊 उत्तर पुन्हा ऐका",

    step4Title: "🎧 पायरी ४: आकृतीची ऑडिओ मार्गदर्शिका",
    step4Sub: "दृष्टिहीन विद्यार्थ्यांसाठी: आकृतीचा प्रत्येक भाग कोठे आहे हे ऐका.",
    btnPlantCell: "🌿 वनस्पती पेशी",
    btnWaterMolecule: "💧 पाण्याचा रेणू",
    btnPlaySpatial: "🔊 ऑडिओ मार्गदर्शिका ऐका",
    whereEachPart: "प्रत्येक भाग कोठे आहे:",

    shikshaStep1Title: "💬 पायरी १: थेट सबटायटल्स",
    shikshaStep1Sub: "शिक्षकांचे भाषण खाली दिसत आहे. कठीण वैज्ञानिक शब्दांवर निळा रंग आहे—अर्थ पाहण्यासाठी क्लिक करा!",
    btnShowSubtitles: "✍️ सबटायटल्स दाखवा",
    subtitlesPlaceholder: "सबटायटल्स येथे दिसतील.",
    shikshaStep2Title: "🤟 पायरी २: भारतीय सांकेतिक भाषा (ISL)",
    btnPlayAllSigns: "▶️ सर्व संकेत दाखवा",
    btnPrev: "◀ मागील",
    btnNext: "पुढील ▶",
    shikshaStep3Title: "💡 पायरी ३: उजळणी फ्लॅशकार्ड्स",
    shikshaStep3Sub: "उत्तर पाहण्यासाठी कार्डवर क्लिक करा",

    examStep1Title: "📄 पायरी १: परीक्षा प्रश्नपत्रिका",
    examStep1Sub: "प्रश्न ऐकण्यासाठी 'ऐका' दाबा. उत्तर देण्यासाठी 'उत्तर द्या' दाबा.",
    btnAnswerThis: "✍️ या प्रश्नाचे उत्तर द्या",
    examStep2Title: "🎙️ पायरी २: तुमचे उत्तर बोला",
    examStep2Sub: "'माईक दाबून बोला' वर क्लिक करा. तुम्ही बोललेली सूत्रे आपोआप गणितात रूपांतरित होतील.",
    examPlaceholder: "तुमचे उत्तर येथे बोला किंवा लिहा...",
    btnSubmitGrade: "✅ उत्तर सबमिट करा आणि गुण तपासा",
    btnPressMic: "🎙️ बोलण्यासाठी माईक दाबा",

    lessons: {
      physics_chalkboard: {
        title: "इयत्ता १२ वी - भौतिकशास्त्र",
        topic: "न्यूटनचे गतीचे नियम आणि कार्य-ऊर्जा प्रमेय",
        sections: [
          {
            heading: "1. बलाचे समीकरण (न्यूटनचा दुसरा नियम)",
            content: "बल हे वस्तुमान आणि प्रवेगाच्या गुणाकाराएवढे असते.",
            equations: [{ raw: "F = m * a", spoken: "बल एफ बरोबर वस्तुमान एम गुणिले प्रवेग ए", variables: "एम = वस्तुमान, ए = प्रवेग" }]
          }
        ],
        homework: "उद्याच्या वर्गापूर्वी एनसीईआरटी धडा ४ चे प्रश्न ४.१ ते ४.५ सोडवा.",
        summary: "भौतिकशास्त्राचा पाठ. न्यूटनचे नियम आणि गतिज ऊर्जेचे सूत्र. गृहपाठ प्रश्न ४.१ ते ४.५ आहे."
      },
      math_whiteboard: {
        title: "गणित: वर्गसमीकरणे आणि कलन",
        topic: "वर्गसमीकरणाची मुळे आणि विकलन",
        sections: [
          {
            heading: "1. वर्गसमीकरणाची मुळे",
            content: "वर्गसमीकरण सोडवण्याचे सूत्र.",
            equations: [{ raw: "x = (-b +/- sqrt(b^2 - 4*a*c)) / (2*a)", spoken: "एक्स बरोबर वजा बी प्लस मायनस वर्गमूळात बी चा वर्ग वजा चार ए सी, भागिले दोन ए", variables: "श्रीधराचार्य सूत्र" }]
          }
        ],
        homework: "असाइनमेंट ३ शुक्रवार संध्याकाळी ४ वाजेपर्यंत जमा करा.",
        summary: "गणिताचा पाठ. वर्गसमीकरण आणि विकलनाचे नियम. असाइनमेंट ३ शुक्रवारी जमा करायचे आहे."
      },
      plant_cell_anatomy: {
        title: "जीवशास्त्र: वनस्पती पेशीची रचना",
        topic: "पेशीभित्ती, हरितलवक आणि केंद्रक",
        sections: [
          {
            heading: "1. पेशीभित्ती आणि रिक्तिका",
            content: "कठीण पेशीभित्ती वनस्पती पेशीला आकार देते आणि मोठी रिक्तिका पाणी साठवते.",
            equations: []
          }
        ],
        homework: "प्रात्यक्षिक वहीत वनस्पती पेशीची नामनिर्देशित आकृती काढा.",
        summary: "वनस्पती पेशीची रचना. पेशीभित्ती आधार देते आणि हरितलवकात प्रकाशसंश्लेषण होते."
      },
      water_molecule_chemistry: {
        title: "रसायनशास्त्र: पाण्याचा रेणू (H2O)",
        topic: "कोनीय रचना आणि हायड्रोजन बंध",
        sections: [
          {
            heading: "1. बंध कोन",
            content: "ऑक्सिजन आणि हायड्रोजनमधील बंध कोन १०४.५ अंश असतो.",
            equations: [{ raw: "H2O (बंध कोन = १०४.५ अंश)", spoken: "एच २ ओ, बंध कोन १०४.५ अंश", variables: "पाण्याचा रेणू" }]
          }
        ],
        homework: "धडा ३ वाचा आणि प्रश्न १ ते ८ सोडवा.",
        summary: "पाण्याचा रेणू. १०४.५ अंश कोनामुळे पाणी ध्रुवीय बनते आणि एक उत्तम विद्रावक ठरते."
      }
    }
  },

  // 6. KANNADA (ಕನ್ನಡ)
  kn: {
    brandSubtitle: "ದೃಷ್ಟಿ ಮತ್ತು ಶ್ರವಣ ದೋಷವುಳ್ಳ ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಸರಳ ಸಹಾಯಕ ತರಗತಿ",
    audioReady: "ಆಡಿಯೋ ಸಿದ್ಧವಾಗಿದೆ. ಪ್ಲೇ ಬಟನ್ ಒತ್ತಿ ಅಥವಾ ಸ್ಪೇಸ್‌ಬಾರ್ ಬಳಸಿ.",
    audioPlaying: "ಕನ್ನಡದಲ್ಲಿ ಆಡಿಯೋ ಪ್ಲೇ ಆಗುತ್ತಿದೆ...",
    audioPaused: "ಆಡಿಯೋ ವಿರಾಮಗೊಳಿಸಲಾಗಿದೆ.",
    audioResumed: "ಆಡಿಯೋ ಮುಂದುವರಿಸಲಾಗಿದೆ.",
    audioFinished: "ಆಡಿಯೋ ಮುಗಿದಿದೆ.",
    btnPausePlay: "⏯️ ವಿರಾಮ / ಪ್ಲೇ",

    mode1Title: "1. ದೃಷ್ಟಿದೋಷವುಳ್ಳವರು",
    mode1Desc: "ಕಪ್ಪುಹಲಗೆಯ ಟಿಪ್ಪಣಿಗಳು, ಸೂತ್ರಗಳು ಮತ್ತು ಚಿತ್ರಗಳನ್ನು ಆಲಿಸಿ",
    mode2Title: "2. ಶ್ರವಣದೋಷವುಳ್ಳವರು",
    mode2Desc: "ಲೈವ್ ಉಪಶೀರ್ಷಿಕೆಗಳನ್ನು ಓದಿ & ಸಂಕೇತ ಭಾಷೆಯನ್ನು ವೀಕ್ಷಿಸಿ",
    mode3Title: "3. ಧ್ವನಿ ಪರೀಕ್ಷಾ ಬರಹಗಾರ",
    mode3Desc: "ನಿಮ್ಮ ಉತ್ತರಗಳನ್ನು ಮಾತನಾಡಿ — AI ಬರೆದು ಅಂಕಗಳನ್ನು ನೀಡುತ್ತದೆ",

    step1Title: "ಕಲಿಯಲು ಒಂದು ಪಾಠವನ್ನು ಆರಿಸಿ",
    step1Sub: "ಕಪ್ಪುಹಲಗೆ ಮತ್ತು ಆಡಿಯೋ ಟಿಪ್ಪಣಿಗಳನ್ನು ತಕ್ಷಣ ನೋಡಲು ಕೆಳಗಿನ ಪಾಠವನ್ನು ಕ್ಲಿಕ್ ಮಾಡಿ",
    lessonPhysics: "ಭೌತಶಾಸ್ತ್ರ",
    lessonPhysicsSub: "ಬಲ ಮತ್ತು ಚಲನೆಯ ನಿಯಮಗಳು",
    lessonMath: "ಗಣಿತ",
    lessonMathSub: "ವರ್ಗ ಸಮೀಕರಣಗಳು",
    lessonBio: "ಜೀವಶಾಸ್ತ್ರ",
    lessonBioSub: "ಸಸ್ಯ ಕೋಶ ರಚನೆ",
    lessonChem: "ರಸಾಯನಶಾಸ್ತ್ರ",
    lessonChemSub: "ನೀರಿನ ಅಣು (H2O)",

    step2Title: "ಟಿಪ್ಪಣಿಗಳನ್ನು ಕೇಳಿ & ಹಲಗೆಯನ್ನು ನೋಡಿ",
    step2Sub: "ನಮ್ಮ AI ಸೀಮೆಸುಣ್ಣದ ಬರವಣಿಗೆಯನ್ನು ಮತ್ತು ಗಣಿತದ ಸೂತ್ರಗಳನ್ನು ಕನ್ನಡದಲ್ಲಿ ಓದುತ್ತದೆ",
    boardTitle: "📷 ತರಗತಿ ಕಪ್ಪುಹಲಗೆ",
    btnViewClear: "✨ ಸ್ಪಷ್ಟ ನೋಟ",
    btnViewOrig: "📷 ಮೂಲ ಚಿತ್ರ",
    btnPlayFull: "▶️ ಪೂರ್ಣ ಪಾಠವನ್ನು ಆಲಿಸಿ",
    btnFormulasOnly: "📐 ಸೂತ್ರಗಳನ್ನು ಮಾತ್ರ ಆಲಿಸಿ",
    btnHomeworkOnly: "📝 ಮನೆಕೆಲಸ ಆಲಿಸಿ",
    notesTitle: "📝 ಪಾಠದ ಟಿಪ್ಪಣಿಗಳು & ಸೂತ್ರಗಳು",
    btnListen: "🔊 ಕೇಳಿ",

    step3Title: "🎙️ ಹಂತ ೩: ಪ್ರಶ್ನೆ ಇದೆಯೇ? ಹಲಗೆಯನ್ನು ಕೇಳಿ!",
    step3Sub: "ಯಾವುದೇ ಸೂತ್ರ, ಮನೆಕೆಲಸ ಅಥವಾ ರೇಖಾಚಿತ್ರದ ಬಗ್ಗೆ ಕೇಳಿ",
    qaPlaceholder: "ಟೈಪ್ ಮಾಡಿ ಅಥವಾ ಮಾತನಾಡಿ: ಉದಾ. 'ಬಲದ ಸೂತ್ರವೇನು?'",
    btnAsk: "ಪ್ರಶ್ನೆ ಕೇಳಿ",
    btnSpeak: "🎤 ಮಾತನಾಡಿ",
    tryAsking: "ಹೀಗೆ ಕೇಳಿ ನೋಡಿ:",
    quickHomework: "📝 ಇಂದಿನ ಮನೆಕೆಲಸವೇನು?",
    quickKinetic: "📐 ಚಲನ ಶಕ್ತಿಯ ಸೂತ್ರವೇನು?",
    quickQuadratic: "🔢 ವರ್ಗ ಸಮೀಕರಣ ಸೂತ್ರವೇನು?",
    quickNucleus: "🌿 ಕೋಶದಲ್ಲಿ ಕೋಶಕೇಂದ್ರ ಎಲ್ಲಿದೆ?",
    btnHearAgain: "🔊 ಉತ್ತರವನ್ನು ಮತ್ತೆ ಕೇಳಿ",

    step4Title: "🎧 ಹಂತ ೪: ಚಿತ್ರದ ಆಡಿಯೋ ಮಾರ್ಗದರ್ಶಿ",
    step4Sub: "ದೃಷ್ಟಿಹೀನ ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ: ಚಿತ್ರದ ಭಾಗಗಳು ಎಲ್ಲಿವೆ ಎಂಬುದನ್ನು ಆಲಿಸಿ.",
    btnPlantCell: "🌿 ಸಸ್ಯ ಕೋಶ",
    btnWaterMolecule: "💧 ನೀರಿನ ಅಣು",
    btnPlaySpatial: "🔊 ಆಡಿಯೋ ಮಾರ್ಗದರ್ಶಿ ಪ್ಲೇ ಮಾಡಿ",
    whereEachPart: "ಭಾಗಗಳು ಇರುವ ಸ್ಥಳ:",

    shikshaStep1Title: "💬 ಹಂತ ೧: ಲೈವ್ ಉಪಶೀರ್ಷಿಕೆಗಳು",
    shikshaStep1Sub: "ಶಿಕ್ಷಕರ ಭಾಷಣ ಕೆಳಗೆ ಕಾಣಿಸುತ್ತದೆ. ಕಠಿಣ ವಿಜ್ಞಾನ ಪದಗಳು ನೀಲಿ ಬಣ್ಣದಲ್ಲಿರುತ್ತವೆ—ಅರ್ಥ ತಿಳಿಯಲು ಕ್ಲಿಕ್ ಮಾಡಿ!",
    btnShowSubtitles: "✍️ ಉಪಶೀರ್ಷಿಕೆಗಳನ್ನು ತೋರಿಸಿ",
    subtitlesPlaceholder: "ಉಪಶೀರ್ಷಿಕೆಗಳು ಇಲ್ಲಿ ಕಾಣಿಸುತ್ತವೆ.",
    shikshaStep2Title: "🤟 ಹಂತ ೨: ಭಾರತೀಯ ಸಂಕೇತ ಭಾಷೆ (ISL)",
    btnPlayAllSigns: "▶️ ಎಲ್ಲಾ ಸಂಕೇತಗಳನ್ನು ಪ್ಲೇ ಮಾಡಿ",
    btnPrev: "◀ ಹಿಂದಿನ",
    btnNext: "ಮುಂದಿನ ▶",
    shikshaStep3Title: "💡 ಹಂತ ೩: ಪುನರಾವರ್ತನಾ ಫ್ಲ್ಯಾಶ್‌ಕಾರ್ಡ್‌ಗಳು",
    shikshaStep3Sub: "ಉತ್ತರ ನೋಡಲು ಕಾರ್ಡ್ ಮೇಲೆ ಕ್ಲಿಕ್ ಮಾಡಿ",

    examStep1Title: "📄 ಹಂತ ೧: ಪರೀಕ್ಷಾ ಪ್ರಶ್ನೆಪತ್ರಿಕೆ",
    examStep1Sub: "ಪ್ರಶ್ನೆ ಕೇಳಲು 'ಕೇಳಿ' ಒತ್ತಿ. ಉತ್ತರ ಹೇಳಲು 'ಉತ್ತರಿಸಿ' ಒತ್ತಿ.",
    btnAnswerThis: "✍️ ಈ ಪ್ರಶ್ನೆಗೆ ಉತ್ತರಿಸಿ",
    examStep2Title: "🎙️ ಹಂತ ೨: ಉತ್ತರವನ್ನು ಮಾತನಾಡಿ",
    examStep2Sub: "'ಮಾತನಾಡಲು ಮೈಕ್ ಒತ್ತಿ' ಕ್ಲಿಕ್ ಮಾಡಿ. ಸೂತ್ರಗಳು ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಗಣಿತ ರೂಪಕ್ಕೆ ಬದಲಾಗುತ್ತವೆ.",
    examPlaceholder: "ನಿಮ್ಮ ಉತ್ತರವನ್ನು ಇಲ್ಲಿ ಮಾತನಾಡಿ ಅಥವಾ ಟೈಪ್ ಮಾಡಿ...",
    btnSubmitGrade: "✅ ಉತ್ತರ ಸಲ್ಲಿಸಿ ಮತ್ತು ಅಂಕ ಪಡೆಯಿರಿ",
    btnPressMic: "🎙️ ಮಾತನಾಡಲು ಮೈಕ್ ಒತ್ತಿ",

    lessons: {
      physics_chalkboard: {
        title: "ತರಗತಿ 12 - ಅನ್ವಯಿಕ ಭೌತಶಾಸ್ತ್ರ",
        topic: "ನ್ಯೂಟನ್ನನ ಚಲನೆಯ ನಿಯಮಗಳು & ಕೆಲಸ-ಶಕ್ತಿ ಪ್ರಮೇಯ",
        sections: [
          {
            heading: "1. ಬಲದ ಸಮೀಕರಣ (ನ್ಯೂಟನ್ನನ ಎರಡನೇ ನಿಯಮ)",
            content: "ಬಲವು ದ್ರವ್ಯರಾಶಿ ಮತ್ತು ವೇಗೋತ್ಕರ್ಷದ ಗುಣಲಬ್ಧಕ್ಕೆ ಸಮಾನವಾಗಿರುತ್ತದೆ.",
            equations: [{ raw: "F = m * a", spoken: "ಬಲ ಎಫ್ ಸಮ ದ್ರವ್ಯರಾಶಿ ಎಂ ಗುಣಿಸು ವೇಗೋತ್ಕರ್ಷ ಎ", variables: "ಎಂ = ದ್ರವ್ಯರಾಶಿ, ಎ = ವೇಗೋತ್ಕರ್ಷ" }]
          }
        ],
        homework: "ನಾಳೆಯ ತರಗತಿಗೆ ಮುಂಚಿತವಾಗಿ ಎನ್‌ಸಿಇಆರ್‌ಟಿ ಅಧ್ಯಾಯ 4 ರ ಲೆಕ್ಕಗಳು 4.1 ರಿಂದ 4.5 ಮಾಡಿ.",
        summary: "ಭೌತಶಾಸ್ತ್ರದ ಪಾಠ. ನ್ಯೂಟನ್ನನ ನಿಯಮಗಳು ಮತ್ತು ಚಲನ ಶಕ್ತಿಯ ಸೂತ್ರ. ಮನೆಕೆಲಸ ಸಮಸ್ಯೆಗಳು 4.1 ರಿಂದ 4.5."
      },
      math_whiteboard: {
        title: "ಗಣಿತ: ವರ್ಗ ಸಮೀಕರಣಗಳು & ಕಲನಶಾಸ್ತ್ರ",
        topic: "ವರ್ಗ ಸಮೀಕರಣದ ಮೂಲಗಳು",
        sections: [
          {
            heading: "1. ವರ್ಗ ಸಮೀಕರಣ ಸೂತ್ರ",
            content: "ವರ್ಗ ಸಮೀಕರಣದ ಪರಿಹಾರಗಳನ್ನು ಕಂಡುಹಿಡಿಯುವ ಸೂತ್ರ.",
            equations: [{ raw: "x = (-b +/- sqrt(b^2 - 4*a*c)) / (2*a)", spoken: "ಎಕ್ಸ್ ಸಮ ಮೈನಸ್ ಬಿ ಪ್ಲಸ್ ಆರ್ ಮೈನಸ್ ರೂಟ್ ಬಿ ಸ್ಕ್ವೇರ್ ಮೈನಸ್ ನಾಲ್ಕು ಎ ಸಿ, ಬೈ ಎರಡು ಎ", variables: "ವರ್ಗ ಸೂತ್ರ" }]
          }
        ],
        homework: "ಶುಕ್ರವಾರ ಸಂಜೆ 4 ಗಂಟೆಯೊಳಗೆ ನಿಯೋಜನೆ 3 ನ್ನು ಸಲ್ಲಿಸಿ.",
        summary: "ಗಣಿತ ಪಾಠ. ವರ್ಗ ಸೂತ್ರ ಮತ್ತು ಕಲನಶಾಸ್ತ್ರ. ನಿಯೋಜನೆ 3 ಶುಕ್ರವಾರದೊಳಗೆ ನೀಡಬೇಕು."
      },
      plant_cell_anatomy: {
        title: "ಜೀವಶಾಸ್ತ್ರ: ಸಸ್ಯ ಕೋಶ ರಚನೆ",
        topic: "ಕೋಶ ಗೋಡೆ, ಹರಿದ್ರೇಣು ಮತ್ತು ಕೋಶಕೇಂದ್ರ",
        sections: [
          {
            heading: "1. ಕೋಶ ಗೋಡೆ ಮತ್ತು ರಸದಾನಿ",
            content: "ಗಟ್ಟಿಯಾದ ಕೋಶ ಗೋಡೆಯು ಸಸ್ಯ ಕೋಶಕ್ಕೆ ಆಕಾರ ನೀಡುತ್ತದೆ.",
            equations: []
          }
        ],
        homework: "ಸಸ್ಯ ಕೋಶದ ಚಿತ್ರವನ್ನು ಬಿಡಿಸಿ ಭಾಗಗಳನ್ನು ಗುರುತಿಸಿ.",
        summary: "ಸಸ್ಯ ಕೋಶ ರಚನೆ. ಕೋಶ ಗೋಡೆ ಆಧಾರ ನೀಡುತ್ತದೆ ಮತ್ತು ಹರಿದ್ರೇಣುಗಳಲ್ಲಿ ದ್ಯುತಿಸಂಶ್ಲೇಷಣೆ ನಡೆಯುತ್ತದೆ."
      },
      water_molecule_chemistry: {
        title: "ರಸಾಯನಶಾಸ್ತ್ರ: ನೀರಿನ ಅಣು ರಚನೆ",
        topic: "ಬಾಗಿದ ರಚನೆ ಮತ್ತು ಬಂಧ ಕೋನ",
        sections: [
          {
            heading: "1. ಬಂಧ ಕೋನ",
            content: "ಆಮ್ಲಜನಕ ಮತ್ತು ಜಲಜನಕದ ನಡುವಿನ ಬಂಧ ಕೋನ 104.5 ಡಿಗ್ರಿಯಾಗಿದೆ.",
            equations: [{ raw: "H2O (ಕೋನ = 104.5 ಡಿಗ್ರಿ)", spoken: "ಹೆಚ್ 2 ಓ, ಬಂಧ ಕೋನ 104.5 ಡಿಗ್ರಿ", variables: "ನೀರಿನ ಅಣು" }]
          }
        ],
        homework: "ಅಧ್ಯಾಯ 3 ಓದಿ ಮತ್ತು ಪ್ರಶ್ನೆಗಳು 1 ರಿಂದ 8 ರವರೆಗೆ ಉತ್ತರಿಸಿ.",
        summary: "ನೀರಿನ ಅಣು ಪಾಠ. 104.5 ಡಿಗ್ರಿ ಕೋನವು ನೀರನ್ನು ಧ್ರುವೀಯ ದ್ರಾವಕವನ್ನಾಗಿ ಮಾಡುತ್ತದೆ."
      }
    }
  },

  // 7. ODIA (ଓଡ଼ିଆ)
  or: {
    brandSubtitle: "ଦୃଷ୍ଟି ଏବଂ ଶ୍ରବଣ ବାଧିତ ଛାତ୍ରଛାତ୍ରୀଙ୍କ ପାଇଁ ସହଜ ସହାୟକ ଶ୍ରେଣୀଗୃହ",
    audioReady: "ଅଡିଓ ପ୍ରସ୍ତୁତ ଅଛି। ପ୍ଲେ ବଟନ୍ କ୍ଲିକ୍ କରନ୍ତୁ କିମ୍ବା ସ୍ପେସବାର୍ ଦବାନ୍ତୁ।",
    audioPlaying: "ଓଡ଼ିଆରେ ଅଡିଓ ଶୁଣାଯାଉଛି...",
    audioPaused: "ଅଡିଓ ବନ୍ଦ ରହିଲା।",
    audioResumed: "ଅଡିଓ ପୁନର୍ବାର ଆରମ୍ଭ ହେଲା।",
    audioFinished: "ଅଡିଓ ସମାପ୍ତ ହେଲା।",
    btnPausePlay: "⏯️ ବନ୍ଦ / ଚଲାନ୍ତୁ",

    mode1Title: "1. ଦୃଷ୍ଟିବାଧିତ ଛାତ୍ର",
    mode1Desc: "ବ୍ଲାକବୋର୍ଡ ନୋଟ୍ସ, ସୂତ୍ର ଏବଂ ଚିତ୍ର ଶୁଣନ୍ତୁ",
    mode2Title: "2. ଶ୍ରବଣବାଧିତ ଛାତ୍ର",
    mode2Desc: "ଲାଇଭ ସବଟାଇଟଲ ପଢନ୍ତୁ ଏବଂ ସାଙ୍କେତିକ ଭାଷା ଦେଖନ୍ତୁ",
    mode3Title: "3. ଭଏସ୍ ପରୀକ୍ଷା ଲେଖକ",
    mode3Desc: "ଆପଣଙ୍କ ଉତ୍ତର କୁହନ୍ତୁ — AI ଲେଖିବ ଏବଂ ନମ୍ବର ଦେବ",

    step1Title: "ଶିଖିବା ପାଇଁ ଏକ ପାଠ ବାଛନ୍ତୁ",
    step1Sub: "ବ୍ଲାକବୋର୍ଡ ଏବଂ ଅଡିଓ ନୋଟ୍ସ ଦେଖିବା ପାଇଁ ତଳେ ଥିବା ପାଠ ଉପରେ କ୍ଲିକ୍ କରନ୍ତୁ",
    lessonPhysics: "ପଦାର୍ଥ ବିଜ୍ଞାନ",
    lessonPhysicsSub: "ବଳ ଏବଂ ଗତିର ନିୟମ",
    lessonMath: "ଗଣିତ",
    lessonMathSub: "ଦ୍ୱିଘାତ ସମୀକରଣ",
    lessonBio: "ଜୀବ ବିଜ୍ଞାନ",
    lessonBioSub: "ଉଦ୍ଭିଦ କୋଷ ଗଠନ",
    lessonChem: "ରସାୟନ ବିଜ୍ଞାନ",
    lessonChemSub: "ଜଳ ଅଣୁ (H2O)",

    step2Title: "ନୋଟ୍ସ ଶୁଣନ୍ତୁ ଏବଂ ବୋର୍ଡ ଦେଖନ୍ତୁ",
    step2Sub: "ଆମର AI ଚକ ଲେଖା ଏବଂ ଗାଣିତିକ ସୂତ୍ରଗୁଡ଼ିକୁ ସ୍ପଷ୍ଟ ଭାଷାରେ ପଢ଼ି ଶୁଣାଏ",
    boardTitle: "📷 ଶ୍ରେଣୀଗୃହ ବ୍ଲାକବୋର୍ଡ",
    btnViewClear: "✨ ସ୍ପଷ୍ଟ ଦୃଶ୍ୟ",
    btnViewOrig: "📷 ମୂଳ ଫଟୋ",
    btnPlayFull: "▶️ ସମ୍ପୂର୍ଣ୍ଣ ପାଠ ଶୁଣନ୍ତୁ",
    btnFormulasOnly: "📐 କେବଳ ସୂତ୍ର ଶୁଣନ୍ତୁ",
    btnHomeworkOnly: "📝 ଗୃହକାର୍ଯ୍ୟ ଶୁଣନ୍ତୁ",
    notesTitle: "📝 ପାଠ୍ୟ ନୋଟ୍ସ ଏବଂ ସୂତ୍ର",
    btnListen: "🔊 ଶୁଣନ୍ତୁ",

    step3Title: "🎙️ ପର୍ଯ୍ୟାୟ ୩: କିଛି ପ୍ରଶ୍ନ ଅଛି? ବୋର୍ଡକୁ ପଚାରନ୍ତୁ!",
    step3Sub: "ଯେକୌଣସି ସୂତ୍ର, ଗୃହକାର୍ଯ୍ୟ କିମ୍ବା ଚିତ୍ର ବିଷୟରେ ପଚାରନ୍ତୁ",
    qaPlaceholder: "ଟାଇପ୍ କରନ୍ତୁ କିମ୍ବା କୁହନ୍ତୁ: ଯେପରିକି 'ବଳର ସୂତ୍ର କ'ଣ?'",
    btnAsk: "ପ୍ରଶ୍ନ ପଚାରନ୍ତୁ",
    btnSpeak: "🎤 କୁହନ୍ତୁ",
    tryAsking: "ଏହା ପଚାରନ୍ତୁ:",
    quickHomework: "📝 ଆଜିର ଗୃହକାର୍ଯ୍ୟ କ'ଣ?",
    quickKinetic: "📐 ଗତିଜ ଶକ୍ତିର ସୂତ୍ର କ'ଣ?",
    quickQuadratic: "🔢 ଦ୍ୱିଘାତ ସୂତ୍ର କ'ଣ?",
    quickNucleus: "🌿 କୋଷରେ ନ୍ୟୁକ୍ଲିୟସ୍ କେଉଁଠି ଅଛି?",
    btnHearAgain: "🔊 ଉତ୍ତର ପୁଣି ଶୁଣନ୍ତୁ",

    step4Title: "🎧 ପର୍ଯ୍ୟାୟ ୪: ଚିତ୍ରର ଅଡିଓ ଗାଇଡ୍",
    step4Sub: "ଦୃଷ୍ଟିହୀନ ଛାତ୍ରଛାତ୍ରୀଙ୍କ ପାଇଁ: ଚିତ୍ରର ଭାଗଗୁଡ଼ିକ କେଉଁଠି ଅଛି ତାହା ଶୁଣନ୍ତୁ।",
    btnPlantCell: "🌿 ଉଦ୍ଭିଦ କୋଷ",
    btnWaterMolecule: "💧 ଜଳ ଅଣୁ",
    btnPlaySpatial: "🔊 ଅଡିଓ ଗାଇଡ୍ ଚଲାନ୍ତୁ",
    whereEachPart: "ଭାଗଗୁଡ଼ିକର ଅବସ୍ଥିତି:",

    shikshaStep1Title: "💬 ପର୍ଯ୍ୟାୟ ୧: ଲାଇଭ ସବଟାଇଟଲ",
    shikshaStep1Sub: "ଶିକ୍ଷକଙ୍କ ବକ୍ତବ୍ୟ ତଳେ ଦେଖାଯାଉଛି। କଠିନ ଶବ୍ଦଗୁଡ଼ିକ ନୀଳ ରଙ୍ଗରେ ଚିହ୍ନିତ—ଅର୍ଥ ଜାଣିବାକୁ କ୍ଲିକ୍ କରନ୍ତୁ!",
    btnShowSubtitles: "✍️ ସବଟାଇଟଲ ଦେଖାନ୍ତୁ",
    subtitlesPlaceholder: "ସବଟାଇଟଲ ଏଠାରେ ଦେଖାଯିବ।",
    shikshaStep2Title: "🤟 ପର୍ଯ୍ୟାୟ ୨: ଭାରତୀୟ ସାଙ୍କେତିକ ଭାଷା (ISL)",
    btnPlayAllSigns: "▶️ ସମସ୍ତ ସଙ୍କେତ ଚଲାନ୍ତୁ",
    btnPrev: "◀ ପୂର୍ବ",
    btnNext: "ପରବର୍ତ୍ତୀ ▶",
    shikshaStep3Title: "💡 ପର୍ଯ୍ୟାୟ ୩: ରିଭିଜନ୍ ଫ୍ଲାସକାର୍ଡ",
    shikshaStep3Sub: "ଉତ୍ତର ଦେଖିବାକୁ କାର୍ଡ ଉପରେ କ୍ଲିକ୍ କରନ୍ତୁ",

    examStep1Title: "📄 ପର୍ଯ୍ୟାୟ ୧: ପରୀକ୍ଷା ପ୍ରଶ୍ନପତ୍ର",
    examStep1Sub: "ପ୍ରଶ୍ନ ଶୁଣିବା ପାଇଁ 'ଶୁଣନ୍ତୁ' ଦବାନ୍ତୁ। ଉତ୍ତର ଦେବା ପାଇଁ 'ଉତ୍ତର ଦିଅନ୍ତୁ' ଦବାନ୍ତୁ।",
    btnAnswerThis: "✍️ ଏହି ପ୍ରଶ୍ନର ଉତ୍ତର ଦିଅନ୍ତୁ",
    examStep2Title: "🎙️ ପର୍ଯ୍ୟାୟ ୨: ଆପଣଙ୍କ ଉତ୍ତର କୁହନ୍ତୁ",
    examStep2Sub: "'କହିବା ପାଇଁ ମାଇକ୍ ଦବାନ୍ତୁ' ଉପରେ କ୍ଲିକ୍ କରନ୍ତୁ। ଆପଣଙ୍କ କଥିତ ସୂତ୍ର ଆପେ ଆପେ ଗାଣିତିକ ରୂପରେ ପରିଣତ ହେବ।",
    examPlaceholder: "ଆପଣଙ୍କ ଉତ୍ତର ଏଠାରେ କୁହନ୍ତୁ କିମ୍ବା ଲେଖନ୍ତୁ...",
    btnSubmitGrade: "✅ ଉତ୍ତର ଦାଖଲ କରନ୍ତୁ ଏବଂ ନମ୍ବର ପାଆନ୍ତୁ",
    btnPressMic: "🎙️ କହିବା ପାଇଁ ମାଇକ୍ ଦବାନ୍ତୁ",

    lessons: {
      physics_chalkboard: {
        title: "ଦ୍ୱାଦଶ ଶ୍ରେଣୀ - ପଦାର୍ଥ ବିଜ୍ଞାନ",
        topic: "ନ୍ୟୁଟନଙ୍କ ଗତି ନିୟମ ଏବଂ କାର୍ଯ୍ୟ-ଶକ୍ତି ଉପପାଦ୍ୟ",
        sections: [
          {
            heading: "1. ବଳର ସମୀକରଣ (ନ୍ୟୁଟନଙ୍କ ଦ୍ୱିତୀୟ ନିୟମ)",
            content: "ବଳ ହେଉଛି ବସ୍ତୁତ୍ୱ ଏବଂ ତ୍ୱରଣର ଗୁଣନଫଳ।",
            equations: [{ raw: "F = m * a", spoken: "ବଳ ଏଫ ସମାନ ବସ୍ତୁତ୍ୱ ଏମ ଗୁଣନ ତ୍ୱରଣ ଏ", variables: "ଏମ = ବସ୍ତୁତ୍ୱ, ଏ = ତ୍ୱରଣ" }]
          }
        ],
        homework: "ଆସନ୍ତାକାଲି କ୍ଲାସ୍ ପୂର୍ବରୁ NCERT ଅଧ୍ୟାୟ 4 ର ପ୍ରଶ୍ନ 4.1 ରୁ 4.5 ସମାଧାନ କରନ୍ତୁ।",
        summary: "ପଦାର୍ଥ ବିଜ୍ଞାନ ପାଠ। ନ୍ୟୁଟନଙ୍କ ନିୟମ ଏବଂ ଗତିଜ ଶକ୍ତି ସୂତ୍ର। ଗୃହକାର୍ଯ୍ୟ ପ୍ରଶ୍ନ 4.1 ରୁ 4.5।"
      },
      math_whiteboard: {
        title: "ଗଣିତ: ଦ୍ୱିଘାତ ସମୀକରଣ ଏବଂ କଲନ",
        topic: "ଦ୍ୱିଘାତ ମୂଳ ଏବଂ ଅବକଳନ",
        sections: [
          {
            heading: "1. ଦ୍ୱିଘାତ ସୂତ୍ର",
            content: "ଦ୍ୱିଘାତ ସମୀକରଣର ଦୁଇଟି ସମାଧାନ ବାହାର କରିବା ପାଇଁ ସୂତ୍ର।",
            equations: [{ raw: "x = (-b +/- sqrt(b^2 - 4*a*c)) / (2*a)", spoken: "ଏକ୍ସ ସମାନ ମାଇନସ ବି ପ୍ଲସ ମାଇନସ ରୁଟ ବି ସ୍କୋୟାର ମାଇନସ 4 ଏ ସି, ବାଇ 2 ଏ", variables: "ଶ୍ରୀଧରାଚାର୍ଯ୍ୟ ସୂତ୍ର" }]
          }
        ],
        homework: "ଶୁକ୍ରବାର ସନ୍ଧ୍ୟା 4 ଟା ସୁଦ୍ଧା ଆସାଇନମେଣ୍ଟ 3 ଜମା କରନ୍ତୁ।",
        summary: "ଗଣିତ ପାଠ। ଦ୍ୱିଘାତ ସୂତ୍ର ଏବଂ ଅବକଳନ। ଆସାଇନମେଣ୍ଟ ଶୁକ୍ରବାର ସୁଦ୍ଧା ଦେବାକୁ ହେବ।"
      },
      plant_cell_anatomy: {
        title: "ଜୀବ ବିଜ୍ଞାନ: ଉଦ୍ଭିଦ କୋଷ ଗଠନ",
        topic: "କୋଷ ଭିତ୍ତି, ହରିତକଣ ଏବଂ ନ୍ୟୁକ୍ଲିୟସ୍",
        sections: [
          {
            heading: "1. କୋଷ ଭିତ୍ତି ଏବଂ ରସଧାନୀ",
            content: "ଦୃଢ଼ କୋଷ ଭିତ୍ତି ଉଦ୍ଭିଦ କୋଷକୁ ଆକୃତି ଦିଏ ଏବଂ ବଡ଼ ରସଧାନୀ ଜଳ ସଂରକ୍ଷଣ କରେ।",
            equations: []
          }
        ],
        homework: "ପ୍ରାକ୍ଟିକାଲ୍ ଖାତାରେ ଉଦ୍ଭିଦ କୋଷର ଚିତ୍ର ଆଙ୍କି ନାମାଙ୍କିତ କରନ୍ତୁ।",
        summary: "ଉଦ୍ଭିଦ କୋଷ ଗଠନ। କୋଷ ଭିତ୍ତି ଶକ୍ତି ଦିଏ ଏବଂ ହରିତକଣରେ ଆଲୋକଶ୍ଳେଷଣ ହୁଏ।"
      },
      water_molecule_chemistry: {
        title: "ରସାୟନ ବିଜ୍ଞାନ: ଜଳ ଅଣୁର ଗଠନ (H2O)",
        topic: "ବନ୍ଧ କୋଣ ଏବଂ ଧ୍ରୁବୀୟତା",
        sections: [
          {
            heading: "1. ବନ୍ଧ କୋଣ",
            content: "ଅମ୍ଳଜାନ ଏବଂ ଉଦ୍‌ଜାନ ମଧ୍ୟରେ ବନ୍ଧ କୋଣ 104.5 ଡିଗ୍ରୀ ଅଟେ।",
            equations: [{ raw: "H2O (କୋଣ = 104.5 ଡିଗ୍ରୀ)", spoken: "ଏଚ 2 ଓ, ବନ୍ଧ କୋଣ 104.5 ଡିଗ୍ରୀ", variables: "ଜଳ ଅଣୁ" }]
          }
        ],
        homework: "ଅଧ୍ୟାୟ 3 ପଢ଼ନ୍ତୁ ଏବଂ ଅଭ୍ୟାସ ପ୍ରଶ୍ନ 1 ରୁ 8 ସମାଧାନ କରନ୍ତୁ।",
        summary: "ଜଳ ଅଣୁ ପାଠ। 104.5 ଡିଗ୍ରୀ କୋଣ ଯୋଗୁଁ ଜଳ ଏକ ଧ୍ରୁବୀୟ ଦ୍ରାବକ।"
      }
    }
  },

  // 8. ASSAMESE (অসমীয়া)
  as: {
    brandSubtitle: "দৃষ্টিহীন আৰু শ্ৰৱণহীন শিক্ষাৰ্থীসকলৰ বাবে সহজ সহায়ক ক্লাছৰুম",
    audioReady: "অডিঅ' প্ৰস্তুত। প্লে' বুটাম ক্লিক কৰক বা স্পেচবাৰ টিপক।",
    audioPlaying: "অসমীয়াত অডিঅ' শুনা গৈছে...",
    audioPaused: "অডিঅ' স্থগিত কৰা হ'ল।",
    audioResumed: "অডিঅ' পুনৰ আৰম্ভ কৰা হ'ল।",
    audioFinished: "অডিঅ' সমাপ্ত হ'ল।",
    btnPausePlay: "⏯️ স্থগিত / প্লে'",

    mode1Title: "1. দৃষ্টিহীন শিক্ষাৰ্থী",
    mode1Desc: "ব্লেকবৰ্ডৰ নোট, সূত্ৰ আৰু ছবি শুনি লওক",
    mode2Title: "2. শ্ৰৱণহীন শিক্ষাৰ্থী",
    mode2Desc: "লাইভ ছাবটাইটেল পঢ়ক আৰু সাংকেতিক ভাষা চাওক",
    mode3Title: "3. ভয়েচ পৰীক্ষা লেখক",
    mode3Desc: "আপোনাৰ উত্তৰ মুখেৰে কওক — AI য়ে লিখিব আৰু নম্বৰ দিব",

    step1Title: "শিকিবলৈ এটা পাঠ বাছক",
    step1Sub: "ব্লেকবৰ্ড আৰু অডিঅ' নোট চাবলৈ তলৰ পাঠত ক্লিক কৰক",
    lessonPhysics: "পদাৰ্থ বিজ্ঞান",
    lessonPhysicsSub: "বল আৰু গতিৰ নিয়ম",
    lessonMath: "গণিত",
    lessonMathSub: "দ্বিঘাত সমীকৰণ",
    lessonBio: "জীৱবিজ্ঞান",
    lessonBioSub: "উদ্ভিদ কোষৰ গঠন",
    lessonChem: "ৰসায়ন বিজ্ঞান",
    lessonChemSub: "পানীৰ অণু (H2O)",

    step2Title: "নোট শুনক আৰু ব'ৰ্ডখন চাওক",
    step2Sub: "আমাৰ AI য়ে চকেৰে লিখা হাতৰ আখৰ আৰু গণিতৰ সূত্ৰসমূহ স্পষ্টকৈ পঢ়ি শুনাব",
    boardTitle: "📷 শ্ৰেণীকোঠাৰ ব্লেকব'ৰ্ড",
    btnViewClear: "✨ স্পষ্ট ৰূপ",
    btnViewOrig: "📷 মূল ফটো",
    btnPlayFull: "▶️ সম্পূৰ্ণ পাঠ শুনক",
    btnFormulasOnly: "📐 কেৱল সূত্ৰ শুনক",
    btnHomeworkOnly: "📝 গৃহকৰ্ম শুনক",
    notesTitle: "📝 পাঠ্য নোট আৰু সূত্ৰ",
    btnListen: "🔊 শুনক",

    step3Title: "🎙️ স্তৰ ৩: কিবা প্ৰশ্ন আছেনে? ব'ৰ্ডক সোধক!",
    step3Sub: "যিকোনো সূত্ৰ, গৃহকৰ্ম বা চিত্ৰ সম্পৰ্কে সোধক",
    qaPlaceholder: "টাইপ কৰক বা কওক: যেনে 'বলৰ সূত্ৰ কি?'",
    btnAsk: "প্ৰশ্ন সোধক",
    btnSpeak: "🎤 কওক",
    tryAsking: "এইটো সুধি চাওক:",
    quickHomework: "📝 আজিৰ গৃহকৰ্ম কি?",
    quickKinetic: "📐 গতিশক্তিৰ সূত্ৰ কি?",
    quickQuadratic: "🔢 দ্বিঘাত সূত্ৰ কি?",
    quickNucleus: "🌿 কোষত কোষকেন্দ্ৰ ক'ত থাকে?",
    btnHearAgain: "🔊 উত্তৰ পুনৰ শুনক",

    step4Title: "🎧 স্তৰ ৪: চিত্ৰৰ অডিঅ' গাইড",
    step4Sub: "দৃষ্টিহীন শিক্ষাৰ্থীৰ বাবে: চিত্ৰৰ বিভিন্ন অংশ ক'ত আছে সেয়া শুনক।",
    btnPlantCell: "🌿 উদ্ভিদ কোষ",
    btnWaterMolecule: "💧 পানীৰ অণু",
    btnPlaySpatial: "🔊 অডিঅ' গাইড বজাওক",
    whereEachPart: "অংশসমূহৰ স্থান:",

    shikshaStep1Title: "💬 স্তৰ ১: লাইভ ছাবটাইটেল",
    shikshaStep1Sub: "শিক্ষকৰ বক্তব্য তলত দেখা গৈছে। কঠিন বিজ্ঞান শব্দবোৰ নীল ৰঙেৰে চিহ্নিত—অৰ্থ জানিবলৈ ক্লিক কৰক!",
    btnShowSubtitles: "✍️ ছাবটাইটেল দেখুৱাওক",
    subtitlesPlaceholder: "ছাবটাইটেল ইয়াত ওলাব।",
    shikshaStep2Title: "🤟 স্তৰ ২: ভাৰতীয় সাংকেতিক ভাষা (ISL)",
    btnPlayAllSigns: "▶️ সকলো সংকেত বজাওক",
    btnPrev: "◀ পূৰ্ববৰ্তী",
    btnNext: "পৰৱৰ্তী ▶",
    shikshaStep3Title: "💡 স্তৰ ৩: পুনৰীক্ষণ ফ্লেছকাৰ্ড",
    shikshaStep3Sub: "উত্তৰ চাবলৈ কাৰ্ডত ক্লিক কৰক",

    examStep1Title: "📄 স্তৰ ১: পৰীক্ষাৰ প্ৰশ্নকাকত",
    examStep1Sub: "প্ৰশ্ন শুনিবলৈ 'শুনক' টিপক। উত্তৰ দিবলৈ 'উত্তৰ দিয়ক' টিপক।",
    btnAnswerThis: "✍️ এই প্ৰশ্নৰ উত্তৰ দিয়ক",
    examStep2Title: "🎙️ স্তৰ ২: আপোনাৰ উত্তৰ কওক",
    examStep2Sub: "'ক'বলৈ মাইক টিপক' ক্লিক কৰক। আপোনাৰ কথিত সূত্ৰবোৰ নিজে নিজে গণিতৰ ৰূপলৈ সলনি হ'ব।",
    examPlaceholder: "আপোনাৰ উত্তৰ ইয়াত কওক বা লিখক...",
    btnSubmitGrade: "✅ উত্তৰ জমা দিয়ক আৰু নম্বৰ চাওক",
    btnPressMic: "🎙️ ক'বলৈ মাইক টিপক",

    lessons: {
      physics_chalkboard: {
        title: "দ্বাদশ শ্ৰেণী - পদাৰ্থ বিজ্ঞান",
        topic: "নিউটনৰ গতিৰ নিয়ম আৰু কাৰ্য-শক্তি উপপাদ্য",
        sections: [
          {
            heading: "1. বলৰ সমীকৰণ (নিউটনৰ দ্বিতীয় নিয়ম)",
            content: "বল হৈছে ভৰ আৰু ত্বৰণৰ গুণফল।",
            equations: [{ raw: "F = m * a", spoken: "বল এফ সমান ভৰ এম পূৰণ ত্বৰণ এ", variables: "এম = ভৰ, এ = ত্বৰণ" }]
          }
        ],
        homework: "কাইলৈৰ ক্লাছৰ আগতে NCERT পাঠ ৪ ৰ ৪.১ ৰ পৰা ৪.৫ লৈ অংক কৰক।",
        summary: "পদাৰ্থ বিজ্ঞানৰ পাঠ। নিউটনৰ নিয়ম আৰু গতিশক্তিৰ সূত্ৰ। গৃহকৰ্ম সমস্যা ৪.১ ৰ পৰা ৪.৫।"
      },
      math_whiteboard: {
        title: "গণিত: দ্বিঘাত সমীকৰণ আৰু কলন",
        topic: "দ্বিঘাত মূল আৰু অৱকলন",
        sections: [
          {
            heading: "1. দ্বিঘাত সূত্ৰ",
            content: "দ্বিঘাত সমীকৰণৰ সমাধান উলিওৱাৰ সূত্ৰ।",
            equations: [{ raw: "x = (-b +/- sqrt(b^2 - 4*a*c)) / (2*a)", spoken: "এক্স সমান মাইনাস বি প্লাচ মাইনাস ৰুট বি স্কোৱাৰ মাইনাস চাৰি এ চি, হৰণ দুই এ", variables: "দ্বিঘাত সূত্ৰ" }]
          }
        ],
        homework: "শুক্ৰবাৰে আবেলি ৪ বজাৰ ভিতৰত এচাইনমেণ্ট ৩ জমা দিয়ক।",
        summary: "গণিতৰ পাঠ। দ্বিঘাত সূত্ৰ আৰু অৱকলন। এচাইনমেণ্ট ৩ শুক্ৰবাৰৰ ভিতৰত দিব লাগিব।"
      },
      plant_cell_anatomy: {
        title: "জীৱবিজ্ঞান: উদ্ভিদ কোষৰ গঠন",
        topic: "কোষবেৰ, ক্ল'ৰ'প্লাষ্ট আৰু কোষকেন্দ্ৰ",
        sections: [
          {
            heading: "1. কোষবেৰ আৰু ৰসধানী",
            content: "দৃঢ় কোষবেৰে উদ্ভিদ কোষক আকৃতি দিয়ে আৰু ডাঙৰ ৰসধানীয়ে পানী সঞ্চয় কৰে।",
            equations: []
          }
        ],
        homework: "উদ্ভিদ কোষৰ চিত্ৰ আঁকি বিভিন্ন অংশ চিহ্নিত কৰক।",
        summary: "উদ্ভিদ কোষৰ গঠন। কোষবেৰে সুৰক্ষা দিয়ে আৰু ক্ল'ৰ'প্লাষ্টত সালোকসংশ্লেষণ হয়।"
      },
      water_molecule_chemistry: {
        title: "ৰসায়ন বিজ্ঞান: পানীৰ অণুৰ গঠন (H2O)",
        topic: "বান্ধনি কোণ আৰু ধ্ৰুৱীয়তা",
        sections: [
          {
            heading: "1. বান্ধনি কোণ",
            content: "অক্সিজেন আৰু হাইড্ৰ'জেনৰ মাজৰ বান্ধনি কোণ ১০৪.৫ ডিগ্ৰী।",
            equations: [{ raw: "H2O (কোণ = ১০৪.৫ ডিগ্ৰী)", spoken: "এইচ ২ অ', বান্ধনি কোণ ১০৪.৫ ডিগ্ৰী", variables: "পানীৰ অণু" }]
          }
        ],
        homework: "পাঠ ৩ পঢ়ক আৰু অনুশীলনীৰ ১ ৰ পৰা ৮ লৈ প্ৰশ্নসমূহ কৰক।",
        summary: "পানীৰ অণুৰ পাঠ। ১০৪.৫ ডিগ্ৰী কোণৰ বাবে পানী ধ্ৰুৱীয় আৰু এক উত্তম দ্ৰাৱক।"
      }
    }
  }
};
