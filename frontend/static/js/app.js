/**
 * NetraShiksha AI - Super-Clean, Intuitive & Multilingual Client Application
 * Features instantaneous 8 Indian languages UI & voice translation.
 */

// Application State
const state = {
  currentMode: 'netra', // 'netra' | 'shiksha' | 'exam'
  currentTheme: 'default',
  fontSize: 16,
  selectedLanguage: 'en',
  detectedState: null,
  currentLessonKey: 'physics_chalkboard',
  currentBoardData: null,
  currentImageView: 'segmented', // 'segmented' | 'original'
  currentAudio: null,
  islPlaybackTimer: null,
  islCurrentStep: 0,
  islTimeline: []
};

// Accurate Indian State Centroids for Precise GPS Distance Calculation
const INDIAN_STATES = [
  { name: "Telangana", code: "te", lat: 17.3850, lon: 78.4867, label: "Telangana (తెలుగు)" },
  { name: "Andhra Pradesh", code: "te", lat: 16.5062, lon: 80.6480, label: "Andhra Pradesh (తెలుగు)" },
  { name: "Karnataka", code: "kn", lat: 12.9716, lon: 77.5946, label: "Karnataka (ಕನ್ನಡ)" },
  { name: "Tamil Nadu", code: "ta", lat: 13.0827, lon: 80.2707, label: "Tamil Nadu (தமிழ்)" },
  { name: "Maharashtra", code: "mr", lat: 19.7515, lon: 75.7139, label: "Maharashtra (मराठी)" },
  { name: "Odisha", code: "or", lat: 20.2961, lon: 85.8245, label: "Odisha (ଓଡ଼ିଆ)" },
  { name: "Assam", code: "as", lat: 26.1445, lon: 91.7362, label: "Assam (অসমীয়া)" },
  { name: "North India (Delhi/UP/MP)", code: "hi", lat: 28.6139, lon: 77.2090, label: "North India (हिन्दी)" }
];

function findClosestIndianState(userLat, userLon) {
  let closest = INDIAN_STATES[0]; // Default to Telangana
  let minDistanceSq = Infinity;

  for (const st of INDIAN_STATES) {
    const dLat = st.lat - userLat;
    const dLon = st.lon - userLon;
    const distSq = dLat * dLat + dLon * dLon;
    if (distSq < minDistanceSq) {
      minDistanceSq = distSq;
      closest = st;
    }
  }
  return closest;
}

document.addEventListener('DOMContentLoaded', () => {
  initAccessibility();
  detectUserLocationLanguage();
  chooseLesson('physics_chalkboard');
  loadExamPaper();
  initVoiceRecognition();
});

// 1. Accessibility & Theme Controllers
function initAccessibility() {
  const themeSelect = document.getElementById('theme-select');
  if (themeSelect) {
    themeSelect.addEventListener('change', (e) => {
      document.body.className = '';
      if (e.target.value !== 'default') {
        document.body.classList.add(e.target.value);
      }
      state.currentTheme = e.target.value;
    });
  }

  // Keyboard shortcut: Spacebar to play/pause audio
  window.addEventListener('keydown', (e) => {
    if (e.code === 'Space' && e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
      e.preventDefault();
      toggleAudioPlayback();
    }
  });
}

function adjustFontSize(delta) {
  state.fontSize = Math.max(13, Math.min(24, state.fontSize + delta));
  document.documentElement.style.setProperty('--font-base', `${state.fontSize}px`);
}

// 2. Multilingual System (8 Indian Languages)
function onLanguageDropdownChange(lang) {
  applyLanguage(lang);
}

function applyLanguage(lang) {
  state.selectedLanguage = lang;
  const dict = (typeof I18N !== 'undefined' && I18N[lang]) ? I18N[lang] : (I18N.en || {});

  // 1. Update text of all data-i18n elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.innerText = dict[key];
    }
  });

  // 2. Update placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict[key]) {
      el.placeholder = dict[key];
    }
  });

  // 3. Sync dropdown if needed
  const langSelect = document.getElementById('lang-select');
  if (langSelect && langSelect.value !== lang) {
    langSelect.value = lang;
  }

  // 4. Re-render lesson notes and formulas in this language!
  renderCurrentLessonInLanguage(lang);

  // 5. Update audio status announcement
  updateAudioStatus(dict.audioPlaying || `Language switched to ${lang.toUpperCase()}`);
}

// 3. Geolocation Language Detection
async function detectUserLocationLanguage() {
  const locBadge = document.getElementById('location-status');
  if (locBadge) locBadge.innerHTML = '<span class="animate-pulse">📍 Locating...</span>';

  // 1. Try Browser GPS Coordinates
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        const matched = findClosestIndianState(latitude, longitude);

        state.detectedState = matched.name;
        const stateSelect = document.getElementById('state-select');
        if (stateSelect) stateSelect.value = matched.name;
        applyLanguage(matched.code);
      },
      async (err) => {
        // Fallback to IP geolocation or default to Telangana
        await fallbackIpLocation();
      },
      { timeout: 5000, maximumAge: 60000 }
    );
  } else {
    await fallbackIpLocation();
  }
}

async function fallbackIpLocation() {
  const stateSelect = document.getElementById('state-select');
  try {
    const res = await fetch('https://ipapi.co/json/');
    const data = await res.json();
    if (data && (data.region || data.city)) {
      const regionStr = ((data.region || '') + ' ' + (data.city || '')).toLowerCase();
      let matched = INDIAN_STATES[0]; // Telangana default
      if (regionStr.includes('telangana') || regionStr.includes('hyderabad') || regionStr.includes('secunderabad')) {
        matched = INDIAN_STATES[0]; // Telangana
      } else if (regionStr.includes('andhra') || regionStr.includes('vijayawada') || regionStr.includes('visakhapatnam')) {
        matched = INDIAN_STATES[1]; // Andhra Pradesh
      } else if (regionStr.includes('karnataka') || regionStr.includes('bangalore') || regionStr.includes('bengaluru')) {
        matched = INDIAN_STATES[2]; // Karnataka
      } else if (regionStr.includes('tamil') || regionStr.includes('chennai')) {
        matched = INDIAN_STATES[3]; // Tamil Nadu
      } else if (regionStr.includes('maharashtra') || regionStr.includes('mumbai') || regionStr.includes('pune')) {
        matched = INDIAN_STATES[4]; // Maharashtra
      } else if (regionStr.includes('odisha') || regionStr.includes('bhubaneswar')) {
        matched = INDIAN_STATES[5]; // Odisha
      } else if (regionStr.includes('assam') || regionStr.includes('guwahati')) {
        matched = INDIAN_STATES[6]; // Assam
      } else {
        matched = INDIAN_STATES[0]; // Default to Telangana
      }

      state.detectedState = matched.name;
      if (stateSelect) stateSelect.value = matched.name;
      applyLanguage(matched.code);
      return;
    }
  } catch (e) {
    // Offline or blocked
  }

  // Default to Telangana (Telugu)
  state.detectedState = "Telangana";
  if (stateSelect) stateSelect.value = "Telangana";
  applyLanguage("te");
}

function manuallySetState(stateName) {
  const matched = INDIAN_STATES.find(s => s.name === stateName) || INDIAN_STATES[0];
  state.detectedState = matched.name;
  const stateSelect = document.getElementById('state-select');
  if (stateSelect) stateSelect.value = matched.name;
  applyLanguage(matched.code);
}

// 4. Mode Selection (3 Big Cards)
function selectMode(mode) {
  state.currentMode = mode;

  // Toggle active card buttons
  document.querySelectorAll('.mode-card-btn').forEach(btn => btn.classList.remove('active'));
  const activeBtn = document.getElementById(`tab-btn-${mode}`);
  if (activeBtn) activeBtn.classList.add('active');

  // Toggle panels
  document.querySelectorAll('.mode-panel').forEach(panel => panel.classList.remove('active'));
  const activePanel = document.getElementById(`panel-${mode}`);
  if (activePanel) activePanel.classList.add('active');

  const dict = I18N[state.selectedLanguage] || I18N.en;

  if (mode === 'netra') {
    updateAudioStatus(dict.mode1Title + " - " + dict.mode1Desc);
  } else if (mode === 'shiksha') {
    updateAudioStatus(dict.mode2Title + " - " + dict.mode2Desc);
    transcribeLectureText();
  } else if (mode === 'exam') {
    updateAudioStatus(dict.mode3Title + " - " + dict.mode3Desc);
  }
}

// 5. Mode 1: Choose a Lesson
async function chooseLesson(sampleKey) {
  state.currentLessonKey = sampleKey;

  // Update chip highlights
  document.querySelectorAll('.lesson-chip-btn').forEach(chip => chip.classList.remove('active'));
  const chipMap = {
    'physics_chalkboard': 'chip-physics',
    'math_whiteboard': 'chip-math',
    'plant_cell_anatomy': 'chip-plant',
    'water_molecule_chemistry': 'chip-water'
  };
  const activeChip = document.getElementById(chipMap[sampleKey]);
  if (activeChip) activeChip.classList.add('active');

  updateAudioStatus(`Loading lesson: ${sampleKey.replace(/_/g, ' ')}...`);

  try {
    const formData = new FormData();
    formData.append('sample_key', sampleKey);

    const res = await fetch('/api/board/analyze', {
      method: 'POST',
      body: formData
    });
    const data = await res.json();
    state.currentBoardData = data;
    renderBoardAnalysis(data);
    renderCurrentLessonInLanguage(state.selectedLanguage);
    updateAudioStatus(`✅ Lesson loaded. Click 'Play Full Audio Lesson' to listen.`);
  } catch (err) {
    console.error(err);
    updateAudioStatus("❌ Could not load lesson.");
  }
}

function renderBoardAnalysis(data) {
  updateBoardImageView(state.currentImageView);

  const badge = document.getElementById('board-classification-badge');
  if (badge) {
    badge.innerText = data.classification.label || "Classroom Board";
  }
}

function renderCurrentLessonInLanguage(lang) {
  const container = document.getElementById('board-sections-container');
  if (!container) return;

  const dict = I18N[lang] || I18N.en;
  const lessonData = (dict.lessons && dict.lessons[state.currentLessonKey]) 
    ? dict.lessons[state.currentLessonKey] 
    : (I18N.en.lessons[state.currentLessonKey] || {});

  let html = `
    <div style="margin-bottom:0.75rem;">
      <h4 style="color:var(--accent-amber); font-size:1.1rem;">${lessonData.title || "Lesson"}</h4>
      <p style="font-size:0.85rem; color:var(--text-secondary); margin-top:0.2rem;"><strong>Topic:</strong> ${lessonData.topic || ""}</p>
    </div>
  `;

  if (lessonData.sections) {
    for (const sec of lessonData.sections) {
      html += `
        <div style="background:var(--bg-surface); border:1px solid var(--border-color); border-radius:8px; padding:0.85rem; margin-bottom:0.85rem;">
          <h5 style="color:var(--text-primary); font-size:0.95rem; margin-bottom:0.3rem;">${sec.heading}</h5>
          <p style="font-size:0.85rem; color:var(--text-secondary); margin-bottom:0.6rem;">${sec.content}</p>
      `;

      if (sec.equations && sec.equations.length > 0) {
        for (const eq of sec.equations) {
          html += `
            <div class="math-formula-card">
              <div style="display:flex; justify-content:space-between; align-items:center;">
                <span class="math-formula-title">${escapeHtml(eq.raw)}</span>
                <button class="btn-secondary-action" style="padding:0.2rem 0.55rem; font-size:0.75rem;" onclick="playSpokenText('${escapeHtml(eq.spoken)}')">🔊 ${dict.btnListen || "Listen"}</button>
              </div>
              <div class="math-formula-spoken">🗣️ <em>"${eq.spoken}"</em></div>
              ${eq.variables ? `<div class="math-formula-vars">${eq.variables}</div>` : ''}
            </div>
          `;
        }
      }

      html += `</div>`;
    }
  }

  if (lessonData.homework) {
    html += `
      <div style="background:rgba(245, 158, 11, 0.12); border:1px solid #F59E0B; border-radius:8px; padding:0.75rem; margin-top:0.6rem;">
        <strong style="color:#FBBF24; font-size:0.85rem;">📝 ${dict.btnHomeworkOnly || "Homework"}:</strong>
        <p style="font-size:0.85rem; margin-top:0.2rem;">${lessonData.homework}</p>
      </div>
    `;
  }

  container.innerHTML = html;
}

function setImageView(viewType) {
  state.currentImageView = viewType;
  document.querySelectorAll('.view-btn').forEach(btn => btn.classList.remove('active'));
  const activeBtn = document.getElementById(`btn-view-${viewType}`);
  if (activeBtn) activeBtn.classList.add('active');
  updateBoardImageView(viewType);
}

function updateBoardImageView(viewType) {
  const imgEl = document.getElementById('board-preview-img');
  if (imgEl && state.currentBoardData && state.currentBoardData.images) {
    imgEl.src = state.currentBoardData.images[viewType] || state.currentBoardData.images.segmented;
  }
}

// 6. Audio Playback & Text-to-Speech in Native Language
async function readAloudBoard(filter = 'all') {
  const dict = I18N[state.selectedLanguage] || I18N.en;
  const lessonData = (dict.lessons && dict.lessons[state.currentLessonKey]) 
    ? dict.lessons[state.currentLessonKey] 
    : (I18N.en.lessons[state.currentLessonKey] || {});

  let textToRead = "";

  if (filter === 'all') {
    textToRead = lessonData.summary || "Classroom lesson notes.";
  } else if (filter === 'formulas') {
    const formulas = [];
    if (lessonData.sections) {
      lessonData.sections.forEach(s => {
        if (s.equations) s.equations.forEach(eq => formulas.push(eq.spoken));
      });
    }
    textToRead = formulas.length > 0 ? formulas.join('. ') : "No formulas found.";
  } else if (filter === 'homework') {
    textToRead = lessonData.homework || "No homework assigned.";
  }

  playSpokenText(textToRead);
}

async function playSpokenText(text) {
  updateAudioStatus(`🔊 Speaking (${state.selectedLanguage.toUpperCase()}): "${text.substring(0, 45)}..."`);

  try {
    const res = await fetch('/api/tts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text, lang: state.selectedLanguage })
    });
    const data = await res.json();
    playAudioBase64(data.audio_base64);
  } catch (err) {
    // Client-side Web Speech fallback with language code
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = state.selectedLanguage + '-IN';
      window.speechSynthesis.speak(utterance);
    }
  }
}

function playAudioBase64(base64Data) {
  if (state.currentAudio) {
    state.currentAudio.pause();
  }
  state.currentAudio = new Audio(base64Data);
  state.currentAudio.play();
  state.currentAudio.onended = () => {
    const dict = I18N[state.selectedLanguage] || I18N.en;
    updateAudioStatus(dict.audioFinished || "⏹️ Audio playback finished.");
  };
}

function toggleAudioPlayback() {
  if (state.currentAudio) {
    if (state.currentAudio.paused) {
      state.currentAudio.play();
      updateAudioStatus("▶️ Resumed audio.");
    } else {
      state.currentAudio.pause();
      updateAudioStatus("⏸️ Paused audio.");
    }
  }
}

function updateAudioStatus(msg) {
  const el = document.getElementById('audio-playback-status');
  if (el) el.innerText = msg;
}

// 7. Voice & Text Q&A on Board
function quickAsk(questionText) {
  const input = document.getElementById('qa-text-input');
  if (input) {
    input.value = questionText;
    submitBoardQA();
  }
}

async function submitBoardQA() {
  const input = document.getElementById('qa-text-input');
  const answerBox = document.getElementById('qa-answer-box');
  const query = input ? input.value.trim() : "";
  if (!query) return;

  if (answerBox) answerBox.innerHTML = '<span class="animate-pulse">🤔 Answering your question...</span>';

  try {
    const res = await fetch('/api/board/qa', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: query,
        board_context: state.currentBoardData ? state.currentBoardData.board_data : {},
        lang: state.selectedLanguage
      })
    });
    const data = await res.json();
    if (answerBox) {
      answerBox.innerHTML = `
        <div style="background:rgba(59, 130, 246, 0.1); border:1px solid #3B82F6; border-radius:8px; padding:0.85rem;">
          <div style="font-weight:700; color:#60A5FA; margin-bottom:0.25rem;">Question: ${data.query}</div>
          <div style="font-size:0.92rem; color:var(--text-primary); margin-bottom:0.5rem;">${data.answer}</div>
          <button class="btn-secondary-action" style="font-size:0.75rem; padding:0.25rem 0.6rem;" onclick="playAudioBase64('${data.audio_base64}')">🔊 Hear Answer Again</button>
        </div>
      `;
    }
    if (data.audio_base64) {
      playAudioBase64(data.audio_base64);
    }
  } catch (err) {
    if (answerBox) answerBox.innerText = '❌ Could not retrieve answer.';
  }
}

// 8. Spatial Diagram Tour
async function loadDiagramTour(diagramName) {
  const tourContainer = document.getElementById('diagram-tour-container');
  if (tourContainer) tourContainer.innerHTML = '<span class="animate-pulse">🗺️ Loading spatial audio tour...</span>';

  try {
    const res = await fetch(`/api/diagram/describe?name=${diagramName}`);
    const data = await res.json();

    let html = `
      <div style="background:var(--bg-surface); border:1px solid var(--border-color); border-radius:8px; padding:0.85rem; margin-top:0.5rem;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.5rem;">
          <h4 style="color:var(--accent-green); font-size:1rem;">${data.title}</h4>
          <span class="location-pill" style="font-size:0.75rem;">${data.subject}</span>
        </div>
        <p style="font-size:0.85rem; color:var(--text-secondary); margin-bottom:0.75rem;">${data.overview}</p>
        
        <div style="background:rgba(16, 185, 129, 0.12); border-left:3px solid #10B981; padding:0.75rem; border-radius:0 8px 8px 0; margin-bottom:0.85rem;">
          <strong style="color:#6EE7B7; font-size:0.85rem;">🎙️ Spatial Audio Tour:</strong>
          <p style="font-size:0.85rem; margin-top:0.25rem; font-style:italic;">"${data.audio_walkthrough}"</p>
          <button class="btn-primary-action" style="font-size:0.78rem; padding:0.35rem 0.75rem; margin-top:0.5rem;" onclick="playAudioBase64('${data.audio_base64}')">🔊 Play Spatial Audio Walkthrough</button>
        </div>

        <strong style="font-size:0.85rem; display:block; margin-bottom:0.4rem;">Where Each Part Is:</strong>
    `;

    for (const z of data.spatial_zones) {
      html += `
        <div style="font-size:0.82rem; margin-bottom:0.4rem; padding-left:0.5rem; border-left:2px solid var(--accent-cyan);">
          <strong style="color:var(--accent-cyan);">${z.zone}:</strong>
          ${z.elements.map(e => `${e.name} (${e.role})`).join(', ')}
        </div>
      `;
    }

    html += `</div>`;
    if (tourContainer) tourContainer.innerHTML = html;
  } catch (err) {
    if (tourContainer) tourContainer.innerText = '❌ Could not load diagram tour.';
  }
}

// 9. Mode 2: Live Subtitles & ISL Translation
async function transcribeLectureText() {
  const input = document.getElementById('lecture-transcript-input');
  const text = input ? input.value.trim() : "";
  if (!text) return;

  const liveBox = document.getElementById('live-transcript-box');
  if (liveBox) liveBox.innerHTML = '<span class="animate-pulse">✍️ Creating subtitles...</span>';

  try {
    const res = await fetch('/api/lecture/transcribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: text, subject: "Science" })
    });
    const data = await res.json();

    if (liveBox) {
      liveBox.innerHTML = data.highlighted_html;
      liveBox.querySelectorAll('.jargon-pill').forEach(pill => {
        pill.addEventListener('click', () => {
          showJargonModal(pill.dataset.term, pill.dataset.def, pill.dataset.analogy, pill.dataset.isl);
        });
      });
    }

    renderFlashcards(data.flashcards);
    translateToISL(text.split('.')[0] || text);
  } catch (err) {
    console.error(err);
  }
}

function showJargonModal(term, def, analogy, islKey) {
  const modal = document.getElementById('jargon-tooltip-card');
  if (!modal) return;

  modal.innerHTML = `
    <div style="background:var(--bg-surface); border:2px solid var(--accent-blue); border-radius:10px; padding:0.85rem; margin-top:0.75rem;">
      <div style="display:flex; justify-content:space-between; align-items:center;">
        <h4 style="color:var(--accent-blue); font-size:1rem;">💡 ${term} (In Simple Words)</h4>
        <span class="location-pill" style="font-size:0.75rem;">ELI5 Concept</span>
      </div>
      <p style="font-size:0.85rem; margin-top:0.35rem;">${def}</p>
      <div style="background:rgba(245,158,11,0.12); border-left:3px solid #F59E0B; padding:0.5rem; margin-top:0.5rem; font-size:0.82rem; color:#FDE68A;">
        🌟 <strong>Simple Real-World Analogy:</strong> ${analogy}
      </div>
      ${islKey ? `<button class="btn-primary-action" style="font-size:0.75rem; padding:0.3rem 0.65rem; margin-top:0.5rem;" onclick="translateToISL('${term}')">🤟 Show Sign for ${term}</button>` : ''}
    </div>
  `;
}

// 10. Indian Sign Language (ISL) Visual Player
async function translateToISL(sentence) {
  try {
    const res = await fetch('/api/isl/translate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ sentence: sentence })
    });
    const data = await res.json();
    state.islTimeline = data.timeline;
    state.islCurrentStep = 0;
    renderISLStage();
  } catch (err) {
    console.error('ISL Translation error', err);
  }
}

function renderISLStage() {
  const stage = document.getElementById('isl-display-stage');
  const strip = document.getElementById('isl-timeline-chips');
  if (!stage || state.islTimeline.length === 0) return;

  const currentItem = state.islTimeline[state.islCurrentStep] || state.islTimeline[0];

  stage.innerHTML = `
    <img src="${currentItem.svg_url}" class="isl-card-img" alt="${currentItem.label}">
    <div style="margin-top:0.65rem;">
      <h3 style="color:var(--text-primary); font-size:1.05rem;">${currentItem.label}</h3>
      <p style="font-size:0.8rem; color:var(--accent-cyan); font-weight:700;">Sign ${state.islCurrentStep + 1} of ${state.islTimeline.length}</p>
    </div>
  `;

  if (strip) {
    strip.innerHTML = state.islTimeline.map((item, idx) => `
      <div class="isl-chip ${idx === state.islCurrentStep ? 'active' : ''}" onclick="jumpToISLStep(${idx})">
        ${item.term}
      </div>
    `).join('');
  }
}

function playISLSequence() {
  if (state.islPlaybackTimer) clearInterval(state.islPlaybackTimer);
  state.islPlaybackTimer = setInterval(() => {
    state.islCurrentStep = (state.islCurrentStep + 1) % state.islTimeline.length;
    renderISLStage();
    if (state.islCurrentStep === state.islTimeline.length - 1) {
      clearInterval(state.islPlaybackTimer);
    }
  }, 1300);
}

function prevISLStep() {
  if (state.islPlaybackTimer) clearInterval(state.islPlaybackTimer);
  if (state.islTimeline.length > 0) {
    state.islCurrentStep = (state.islCurrentStep - 1 + state.islTimeline.length) % state.islTimeline.length;
    renderISLStage();
  }
}

function nextISLStep() {
  if (state.islPlaybackTimer) clearInterval(state.islPlaybackTimer);
  if (state.islTimeline.length > 0) {
    state.islCurrentStep = (state.islCurrentStep + 1) % state.islTimeline.length;
    renderISLStage();
  }
}

function jumpToISLStep(idx) {
  if (state.islPlaybackTimer) clearInterval(state.islPlaybackTimer);
  state.islCurrentStep = idx;
  renderISLStage();
}

function renderFlashcards(flashcards) {
  const container = document.getElementById('flashcards-container');
  if (!container || !flashcards) return;

  container.innerHTML = flashcards.slice(0, 3).map(fc => `
    <div class="flashcard-item" onclick="this.classList.toggle('flipped')">
      <div class="flashcard-item-inner">
        <div class="flashcard-side-front">
          <span style="font-size:0.75rem; color:var(--accent-amber); font-weight:700;">QUESTION #${fc.id} (Click to Flip)</span>
          <p style="font-weight:600; margin-top:0.4rem; font-size:0.88rem;">${fc.question}</p>
        </div>
        <div class="flashcard-side-back">
          <span style="font-size:0.75rem; color:#6EE7B7; font-weight:700;">ANSWER</span>
          <p style="margin-top:0.4rem; font-size:0.82rem;">${fc.answer}</p>
        </div>
      </div>
    </div>
  `).join('');
}

// 11. Mode 3: Exam Paper & Voice Scribe
async function loadExamPaper() {
  const container = document.getElementById('exam-questions-list');
  try {
    const res = await fetch('/api/exam/paper');
    const data = await res.json();

    if (container && data.questions) {
      container.innerHTML = data.questions.map((q, idx) => `
        <div class="question-item ${idx === 0 ? 'selected' : ''}" id="q-card-${q.q_id}">
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <strong style="color:var(--accent-cyan); font-size:0.9rem;">Question ${q.q_id} [${q.marks} Marks]</strong>
            <button class="btn-secondary-action" style="padding:0.2rem 0.5rem; font-size:0.75rem;" onclick="playSpokenText('${escapeHtml(q.audio_spoken)}')">🔊 Listen</button>
          </div>
          <p style="font-size:0.85rem; margin:0.4rem 0;">${q.question}</p>
          <button class="btn-primary-action" style="font-size:0.75rem; padding:0.25rem 0.6rem; margin-top:0.3rem;" onclick="selectExamQuestion(${q.q_id})">✍️ Answer This Question</button>
        </div>
      `).join('');
    }
  } catch (err) {
    console.error('Failed to load exam paper', err);
  }
}

function selectExamQuestion(qId) {
  document.querySelectorAll('.question-item').forEach(c => c.classList.remove('selected'));
  const card = document.getElementById(`q-card-${qId}`);
  if (card) card.classList.add('selected');

  const activeLabel = document.getElementById('active-exam-question-label');
  if (activeLabel) activeLabel.innerText = `🎙️ Step 2: Speak Your Answer (Q${qId})`;

  const qIdInput = document.getElementById('active-q-id');
  if (qIdInput) qIdInput.value = qId;
}

async function submitExamDictation() {
  const qId = parseInt(document.getElementById('active-q-id')?.value || '1');
  const answerText = document.getElementById('exam-dictated-text')?.value.trim();
  const resultBox = document.getElementById('exam-evaluation-result');

  if (!answerText) {
    alert("Please speak or write your answer first!");
    return;
  }

  if (resultBox) resultBox.innerHTML = '<span class="animate-pulse">📝 Grading your answer...</span>';

  try {
    const res = await fetch('/api/exam/dictate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ q_id: qId, dictated_text: answerText, duration_sec: 40 })
    });
    const data = await res.json();

    if (resultBox) {
      resultBox.innerHTML = `
        <div style="background:rgba(16, 185, 129, 0.12); border:1px solid #10B981; border-radius:8px; padding:1rem; margin-top:0.85rem;">
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <strong style="color:#6EE7B7; font-size:1rem;">🏆 Grade: ${data.awarded_marks} / ${data.max_marks} Marks (${data.percentage}%)</strong>
            <span class="location-pill" style="font-size:0.75rem;">Verified</span>
          </div>
          <div style="font-size:0.85rem; margin-top:0.4rem; color:var(--text-primary);">
            <strong>Formatted Submission:</strong><br>
            <div style="background:var(--bg-surface); padding:0.5rem; border-radius:6px; margin-top:0.25rem;">${data.formatted_answer}</div>
          </div>
          <p style="font-size:0.82rem; color:#A7F3D0; margin-top:0.4rem;">🌟 ${data.feedback}</p>
        </div>
      `;
    }
  } catch (err) {
    if (resultBox) resultBox.innerText = '❌ Error grading answer.';
  }
}

// 12. Speech Recognition for Mic Inputs
function initVoiceRecognition() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) return;

  const recognizer = new SpeechRecognition();
  recognizer.continuous = false;
  recognizer.interimResults = false;
  recognizer.lang = 'en-IN';

  window.startMicQA = function() {
    updateAudioStatus("🎤 Listening... Speak your question now!");
    recognizer.onresult = (e) => {
      const transcript = e.results[0][0].transcript;
      const input = document.getElementById('qa-text-input');
      if (input) input.value = transcript;
      submitBoardQA();
    };
    recognizer.start();
  };

  window.startMicExamDictation = function() {
    updateAudioStatus("🎤 Listening... Speak your exam answer now!");
    recognizer.onresult = (e) => {
      const transcript = e.results[0][0].transcript;
      const input = document.getElementById('exam-dictated-text');
      if (input) input.value = transcript;
      updateAudioStatus("✅ Captured speech! Click 'Submit & Grade My Answer'.");
    };
    recognizer.start();
  };
}

function escapeHtml(text) {
  if (!text) return "";
  return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
