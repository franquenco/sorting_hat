// Dati delle casate e studenti raggruppati per classe (4A = dati originali, 4B/4C con nomi casuali temporanei)
const HOUSES_DATA = {
    "4A": {
        "GRIFONDORO": {
            "students": ["Abderahmane", "Greis", "Tayhan", "Tafsir", "Leonardo", /* Maestra Anna rimossa da qui */],
            "colors": ["#8B0000", "#DAA520"],
            "description": "Casa del coraggio, dell'audacia e della cavalleria",
            "traits": "Coraggiosi, audaci, temerari e cavallereschi",
            "animal": "Leone",
            "element": "Fuoco",
            "founder": "Godric Grifondoro"
        },
        "TASSOROSSO": {
            "students": ["Razin", "Tassnime", "Nusaiba", "Puneet", "Harfateh", "Maestra Alissa", "Maestra Federica"],
            "colors": ["#CCCC00", "#2F2F2F"],
            "description": "Casa della lealtà, della pazienza e del duro lavoro", 
            "traits": "Leali, pazienti, gentili e laboriosi",
            "animal": "Tasso",
            "element": "Terra",
            "founder": "Helga Tassorosso"
        },
        "CORVONERO": {
            "students": ["Mohammed", "Brando", "Shafeena", "Hidayatou", "Hamja", "Maestra Francesca"],
            "colors": ["#003366", "#8B7355"],
            "description": "Casa dell'intelligenza, della saggezza e dell'apprendimento",
            "traits": "Intelligenti, saggi, creativi e curiosi",
            "animal": "Aquila",
            "element": "Aria",
            "founder": "Priscilla Corvonero"
        },
        "SERPEVERDE": {
            "students": ["Sayan", "Farhan", "Tabeeb", "Sanvir", "Joya", "Maestra Anna"],
            "colors": ["#006400", "#C0C0C0"],
            "description": "Casa dell'ambizione, della determinazione e dell'astuzia",
            "traits": "Ambiziosi, determinati, astuti e intraprendenti", 
            "animal": "Serpente",
            "element": "Acqua",
            "founder": "Salazar Serpeverde"
        }
    },
    "4B": {
        "GRIFONDORO": {
            "students": ["Marco", "Giulia", "Samir", "Luna", "Ibrahim", "Saif Eddine", "Elia", "Manaf", "Afra", "Laura", "Sneha"],
            "colors": ["#8B0000", "#DAA520"],
            "description": "Casa del coraggio",
            "traits": "Coraggiosi",
            "animal": "Leone",
            "element": "Fuoco",
            "founder": "Godric Grifondoro"
        },
        "TASSOROSSO": {
            "students": ["Elena", "Matteo", "Sara", "Omar", "Rebecca", "Yasmin", "Samanta", "Maha", "Mayor", "Omor", "Armaan"],
            "colors": ["#CCCC00", "#2F2F2F"],
            "description": "Casa della lealtà",
            "traits": "Leali",
            "animal": "Tasso",
            "element": "Terra",
            "founder": "Helga Tassorosso"
        },
        "CORVONERO": {
            "students": ["Davide", "Noemi", "Alice", "Lorenzo", "Zara", "Maestra Valentina", "Seerat", "Irene", "Karmy", "Mehrin", "Ranjodh", "Barun"],
            "colors": ["#003366", "#8B7355"],
            "description": "Casa dell'intelligenza",
            "traits": "Intelligenti",
            "animal": "Aquila",
            "element": "Aria",
            "founder": "Priscilla Corvonero"
        },
        "SERPEVERDE": {
            "students": ["Nicola", "Beatrice", "Federico", "Maya", "Yusuf", "Tyago", "Simarpreet", "Naziha", "Islam", "Uros"],
            "colors": ["#006400", "#C0C0C0"],
            "description": "Casa dell'ambizione",
            "traits": "Ambiziosi",
            "animal": "Serpente",
            "element": "Acqua",
            "founder": "Salazar Serpeverde"
        }
    },
    "4C": {
        "GRIFONDORO": {
            "students": ["Rocco", "Daria", "Ivo", "Camilla", "Enzo"],
            "colors": ["#8B0000", "#DAA520"],
            "description": "Casa del coraggio",
            "traits": "Coraggiosi",
            "animal": "Leone",
            "element": "Fuoco",
            "founder": "Godric Grifondoro"
        },
        "TASSOROSSO": {
            "students": ["Arianna", "Gian", "Patrizia", "Samuele", "Hana"],
            "colors": ["#CCCC00", "#2F2F2F"],
            "description": "Casa della lealtà",
            "traits": "Leali",
            "animal": "Tasso",
            "element": "Terra",
            "founder": "Helga Tassorosso"
        },
        "CORVONERO": {
            "students": ["Silvia", "Edoardo", "Fabrizia", "Nino", "Rita"],
            "colors": ["#003366", "#8B7355"],
            "description": "Casa dell'intelligenza",
            "traits": "Intelligenti",
            "animal": "Aquila",
            "element": "Aria",
            "founder": "Priscilla Corvonero"
        },
        "SERPEVERDE": {
            "students": ["Timo", "Laila", "Oscar", "Vittoria", "Khalid", "Maestra Cristina"],
            "colors": ["#006400", "#C0C0C0"],
            "description": "Casa dell'ambizione",
            "traits": "Ambiziosi",
            "animal": "Serpente",
            "element": "Acqua",
            "founder": "Salazar Serpeverde"
        }
    }
};

// Risposte magiche del cappello parlante (ora con variante "alt" per ogni casa)
const MAGICAL_RESPONSES = {
    "GRIFONDORO": {
        "default": [
            "Hmm... interessante...",
            "Sento scorrere in te il sangue del leone...",
            "Coraggio... sì, molto coraggio...",
            "E un cuore nobile che batte per la giustizia...",
            "Non c'è dubbio... GRIFONDORO!"
        ],
        "alt": [
            "Il ruggito dentro di te è forte...",
            "Vedo imprese audaci all'orizzonte...",
            "Lo spirito valoroso non ti abbandona...",
            "Hai il fuoco della determinazione...",
            "GRIFONDORO: questo è il tuo destino!"
        ]
    },
    "TASSOROSSO": {
        "default": [
            "Mmm... che anima gentile...",
            "Percepisco lealtà e dedizione...",
            "Un cuore paziente e laborioso...",
            "Sì... vedo chiaramente...",
            "TASSOROSSO sarà la tua casa!"
        ],
        "alt": [
            "Il tuo animo è calmo e saldo...",
            "La costanza sarà la tua forza...",
            "Il tuo operato racconta impegno e amore...",
            "La gentilezza guida i tuoi passi...",
            "TASSOROSSO ti accoglie con affetto!"
        ]
    },
    "CORVONERO": {
        "default": [
            "Affascinante... molto affascinante...",
            "Una mente brillante e curiosa...",
            "Intelligenza che risplende nei tuoi occhi...",
            "La conoscenza è il tuo tesoro più grande...",
            "CORVONERO ti accoglierà con onore!"
        ],
        "alt": [
            "I tuoi pensieri volano alto...",
            "Ragionamento acuto e intuito sottile...",
            "Cerchi risposte dove gli altri si fermano...",
            "La tua curiosità è una lampada che illumina...",
            "CORVONERO aspira a te!"
        ]
    },
    "SERPEVERDE": {
        "default": [
            "Ooh... sento ambizione...",
            "Determinazione e astuzia...",
            "Un carattere forte e deciso...",
            "La grandezza scorre nelle tue vene...",
            "SERPEVERDE è la tua destinazione!"
        ],
        "alt": [
            "Vedo piani silenziosi ma efficaci...",
            "La tua visione ti porterà lontano...",
            "Astuzia e pazienza sono tue compagne...",
            "Hai il fuoco dell'ambizione controllata...",
            "SERPEVERDE ti chiamerà a sé!"
        ]
    }
};

const MUGGLE_MESSAGE = "Hmm... molto strano... questo nome non compare nei registri di Hogwarts... Deve essere un Babbano!";

// Stato per classe e helper per la classe corrente
let currentClass = '4A';

// <-- Add missing global state variables (fix: submit non funzionante causa ReferenceError) -->
let isProcessing = false;
let cursorTrailActive = true;
let mouseX = 0;
let mouseY = 0;
// <-- end added -->

// sortedStudentsByClass conserva liste separate per classe
let sortedStudentsByClass = {
    "4A": {
        "GRIFONDORO": [],
        "TASSOROSSO": [],
        "CORVONERO": [],
        "SERPEVERDE": []
    },
    "4B": {
        "GRIFONDORO": [],
        "TASSOROSSO": [],
        "CORVONERO": [],
        "SERPEVERDE": []
    },
    "4C": {
        "GRIFONDORO": [],
        "TASSOROSSO": [],
        "CORVONERO": [],
        "SERPEVERDE": []
    }
};

// Helper per classe attiva con fallback sicuro
function getActiveClass() {
	// se currentClass è falsy o non presente in HOUSES_DATA, torna fallback '4A'
	return (currentClass && HOUSES_DATA[currentClass]) ? currentClass : '4A';
}

// Helper per accesso dati corrente (usa getActiveClass)
function getHouseData(house) {
    return HOUSES_DATA[getActiveClass()][house];
}
function getSortedStudents() {
    return sortedStudentsByClass[getActiveClass()];
}

// Colori per la scia di particelle del cursore
const CURSOR_TRAIL_COLORS = [
    '#B8860B',  // Oro antico
    '#F8F8FF',  // Bianco perla
    '#708090',  // Argento
    '#B87333',  // Rame
    '#FFFF99',  // Giallo candela
    '#DAA520'   // Oro
];

// Funzione principale di inizializzazione
function initializeApp() {
    console.log('🧙‍♂️ Initializing Enhanced Hogwarts Sorting App...');
    
    // Setup core functionality
    setupSortingButton();
    setupInputField();
    setupClassSelector();
    setupHouseButtons();
    setupModal();
    setupClickSparkles();
    
    // Setup enhanced features
    setupCursorTrail();
    setupHatExpressions();
    setupGothicAtmosphere();
    // audio controls: try autoplay (muted) and setup toggle
    setupAudioControls();
    tryAutoplayAudio();
    
    // Initialize parchment with waiting message
    initializeParchment();
    
    console.log('✨ Enhanced app initialized successfully!');
}

// Inizializza pergamena con messaggio di attesa
function initializeParchment() {
    const sortingText = document.getElementById('sortingText');
    if (!sortingText) return;

    // Imposta direttamente il contenuto di attesa (funziona anche se la pergamena è stata sovrascritta)
    sortingText.innerHTML = `
        <div class="waiting-message" style="font-family: 'Cinzel', serif; color: #8B7355; font-style: italic; font-size: 15px; text-align: center; line-height: 1.6;">
            ✨ Benvenuto nella Grande Sala di Hogwarts ✨<br><br>
            Inserisci il tuo nome nel campo qui accanto e clicca<br>
            "<strong>Avvia Smistamento</strong>" per scoprire<br>
            quale casa ti accoglierà!<br><br>
            🎩 Il Cappello Parlante ti sta aspettando... 🎩
        </div>
    `;
}

// Setup del bottone di smistamento
function setupSortingButton() {
    const startBtn = document.getElementById('startSorting');
    if (startBtn) {
        startBtn.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('🔮 Sorting button clicked');
            handleSorting();
        });
        
        // Aggiungi effetto hover potenziato
        startBtn.addEventListener('mouseenter', function() {
            if (!isProcessing) {
                createButtonSparkles(this);
            }
        });
        
        console.log('✅ Sorting button connected with enhanced effects');
    } else {
        console.error('❌ Sorting button not found');
    }
}

// Crea sparkles sul bottone
function createButtonSparkles(button) {
    const rect = button.getBoundingClientRect();
    const container = document.getElementById('sparkles-container');
    
    if (!container) return;
    
    for (let i = 0; i < 5; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        
        const x = rect.left + Math.random() * rect.width;
        const y = rect.top + Math.random() * rect.height;
        const size = 3 + Math.random() * 3;
        
        sparkle.style.left = x + 'px';
        sparkle.style.top = y + 'px';
        sparkle.style.width = size + 'px';
        sparkle.style.height = size + 'px';
        sparkle.style.backgroundColor = CURSOR_TRAIL_COLORS[Math.floor(Math.random() * CURSOR_TRAIL_COLORS.length)];
        
        container.appendChild(sparkle);
        
        setTimeout(() => {
            if (sparkle.parentNode) {
                sparkle.parentNode.removeChild(sparkle);
            }
        }, 800);
    }
}

// Setup del campo input
function setupInputField() {
    const input = document.getElementById('studentName');
    if (input) {
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                handleSorting();
            }
        });
        
        // Aggiungi effetti visivi al typing
        input.addEventListener('input', function() {
            if (this.value.length > 0 && Math.random() < 0.3) {
                createTypingSparkle(this);
            }
        });
        
        // Focus automatico per migliore UX
        setTimeout(() => input.focus(), 500);
        console.log('✅ Input field connected with auto-focus and enhanced effects');
    } else {
        console.error('❌ Input field not found');
    }
}

// Setup dei bottoni delle casate
function setupHouseButtons() {
    const houseButtons = document.querySelectorAll('.view-students-btn');
    console.log(`🏰 Found ${houseButtons.length} house buttons`);
    
    houseButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const house = this.getAttribute('data-house');
            console.log(`🏠 House button clicked: ${house}`);
            // Apri la modale per la classe selezionata
            showHouseStudents(house);
        });
    });
}

// Nuovo: setup del selettore di classe
function setupClassSelector() {
    const classSelect = document.getElementById('classSelect');
    if (!classSelect) {
        console.warn('⚠️ Class selector not found');
        return;
    }
    classSelect.addEventListener('change', function() {
        currentClass = this.value; // può essere '' per il reset
        console.log(`📚 Classe cambiata: ${currentClass}`);
        if (!currentClass) {
            // Ripristina il messaggio di attesa originale nella pergamena
            initializeParchment();
        } else {
            showParchmentMessage(`✨ Classe selezionata: ${currentClass}. Inserisci il tuo nome per essere smistato. ✨`, false);
        }
        const input = document.getElementById('studentName');
        if (input) input.focus();
    });
    console.log('✅ Class selector setup complete');
}

// Setup della modale
function setupModal() {
    const modal = document.getElementById('studentsModal');
    const closeBtn = document.querySelector('.close-modal');
    
    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }
    
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeModal();
            }
        });
    }
    
    // Chiudi con ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
    
    console.log('✅ Modal setup complete with ESC key support');
}

// Setup scia particelle cursore
function setupCursorTrail() {
    const trailContainer = document.getElementById('cursor-trail-container');
    
    if (!trailContainer) {
        console.error('❌ Cursor trail container not found');
        return;
    }
    
    // Track mouse movement
    let lastTrailTime = 0;
    const TRAIL_INTERVAL = 30; // milliseconds between particles
    
    document.addEventListener('mousemove', function(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        const currentTime = Date.now();
        if (currentTime - lastTrailTime > TRAIL_INTERVAL && cursorTrailActive) {
            createCursorTrailParticle(e.clientX, e.clientY);
            lastTrailTime = currentTime;
        }
    });
    
    console.log('✨ Cursor trail system activated');
}

// Crea particelle per la scia del cursore
function createCursorTrailParticle(x, y) {
    const trailContainer = document.getElementById('cursor-trail-container');
    if (!trailContainer) return;
    
    // Create multiple particles for richer trail
    for (let i = 0; i < 3; i++) {
        const particle = document.createElement('div');
        particle.className = 'cursor-trail-particle';
        
        // Random offset for more natural spread
        const offsetX = (Math.random() - 0.5) * 10;
        const offsetY = (Math.random() - 0.5) * 10;
        
        // Random size and color
        const size = 3 + Math.random() * 4;
        const color = CURSOR_TRAIL_COLORS[Math.floor(Math.random() * CURSOR_TRAIL_COLORS.length)];
        
        particle.style.left = (x + offsetX) + 'px';
        particle.style.top = (y + offsetY) + 'px';
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        particle.style.backgroundColor = color;
        particle.style.boxShadow = `0 0 ${size * 2}px ${color}`;
        
        trailContainer.appendChild(particle);
        
        // Remove after animation
        setTimeout(() => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        }, 1500);
    }
}

// Setup espressioni cappello
function setupHatExpressions() {
    const hat = document.getElementById('sortingHat');
    
    if (!hat) {
        console.error('❌ Sorting hat not found');
        return;
    }
    
    // Animazioni casuali del cappello quando non sta parlando
    setInterval(() => {
        if (!isProcessing && Math.random() < 0.3) {
            triggerHatExpression();
        }
    }, 8000);
    
    // Interazione hover migliorata
    hat.addEventListener('mouseenter', () => {
        if (!isProcessing) {
            hat.style.animation = 'friendlyHover 1s ease-in-out infinite';
        }
    });
    
    hat.addEventListener('mouseleave', () => {
        if (!isProcessing) {
            hat.style.animation = 'friendlyIdle 3s ease-in-out infinite';
        }
    });
    
    console.log('🎩 Hat expressions system activated');
}

// Trigger espressione casuale del cappello
function triggerHatExpression() {
    const hat = document.getElementById('sortingHat');
    if (!hat || isProcessing) return;
    
    const expressions = [
        'friendlyIdle 2s ease-in-out infinite',
        'friendlyHover 1.5s ease-in-out 3',
        'expressiveTalking 0.8s ease-in-out 2'
    ];
    
    const randomExpression = expressions[Math.floor(Math.random() * expressions.length)];
    hat.style.animation = randomExpression;
    
    setTimeout(() => {
        if (!isProcessing) {
            hat.style.animation = 'friendlyIdle 3s ease-in-out infinite';
        }
    }, 3000);
}

// Setup atmosfera gotica
function setupGothicAtmosphere() {
    // Aggiungi variazioni alle candele
    enhanceCandleEffects();
    
    // Setup bagliori misteriosi casuali
    setInterval(() => {
        if (Math.random() < 0.4) {
            createMysteriousGlow();
        }
    }, 6000);
    
    // Effetto respiro del castello
    document.body.style.animation = 'castleBreathing 20s ease-in-out infinite';
    
    console.log('🏰 Gothic atmosphere enhanced');
}

// Potenzia effetti candele
function enhanceCandleEffects() {
    const candles = document.querySelectorAll('.gothic-candle');
    
    candles.forEach((candle, index) => {
        // Aggiungi variazione nell'animazione
        const delay = Math.random() * 3;
        const duration = 3 + Math.random() * 2;
        
        candle.style.animationDelay = `${delay}s`;
        candle.style.animationDuration = `${duration}s`;
        
        // Aggiungi variazione di colore alla fiamma
        setTimeout(() => {
            if (Math.random() < 0.3) {
                candle.style.filter = `hue-rotate(${Math.random() * 30 - 15}deg)`;
            }
        }, delay * 1000);
    });
}

// Crea bagliore misterioso casuale
function createMysteriousGlow() {
    const glow = document.createElement('div');
    glow.className = 'temporary-glow';
    
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    const size = 50 + Math.random() * 100;
    
    const colors = [
        'rgba(184, 134, 11, 0.3)',
        'rgba(112, 128, 144, 0.25)',
        'rgba(184, 115, 51, 0.3)',
        'rgba(255, 255, 153, 0.2)'
    ];
    
    glow.style.cssText = `
        position: fixed;
        left: ${x}px;
        top: ${y}px;
        width: ${size}px;
        height: ${size}px;
        background: radial-gradient(circle, ${colors[Math.floor(Math.random() * colors.length)]}, transparent);
        border-radius: 50%;
        pointer-events: none;
        z-index: -1;
        animation: temporaryGlow 4s ease-in-out forwards;
    `;
    
    document.body.appendChild(glow);
    
    setTimeout(() => {
        if (glow.parentNode) {
            glow.parentNode.removeChild(glow);
        }
    }, 4000);
}

// Setup sparkles per click
function setupClickSparkles() {
    document.addEventListener('click', createClickSparkles);
    
    // Sparkles ambientali più frequenti
    setInterval(createAmbientSparkle, 2000);
    
    console.log('✨ Enhanced sparkles system activated');
}

// Sparkles potenziati al click
function createClickSparkles(e) {
    const container = document.getElementById('sparkles-container');
    if (!container) return;
    
    // Aumentato numero di sparkles per click più spettacolare
    for (let i = 0; i < 8; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        
        const angle = (360 / 8) * i + Math.random() * 45;
        const distance = 20 + Math.random() * 25;
        const size = 4 + Math.random() * 4;
        
        sparkle.style.left = (e.clientX + Math.cos(angle * Math.PI / 180) * distance) + 'px';
        sparkle.style.top = (e.clientY + Math.sin(angle * Math.PI / 180) * distance) + 'px';
        sparkle.style.width = size + 'px';
        sparkle.style.height = size + 'px';
        
        // Colori variabili per i sparkles
        const sparkleColor = CURSOR_TRAIL_COLORS[Math.floor(Math.random() * CURSOR_TRAIL_COLORS.length)];
        sparkle.style.backgroundColor = sparkleColor;
        sparkle.style.boxShadow = `0 0 ${size * 3}px ${sparkleColor}`;
        
        container.appendChild(sparkle);
        
        setTimeout(() => {
            if (sparkle.parentNode) {
                sparkle.parentNode.removeChild(sparkle);
            }
        }, 800);
    }
}

// Sparkles ambientali più ricchi
function createAmbientSparkle() {
    const container = document.getElementById('sparkles-container');
    if (!container || Math.random() > 0.6) return;
    
    // Crea cluster di sparkles ambientali
    const clusterSize = 2 + Math.random() * 3;
    const centerX = Math.random() * window.innerWidth;
    const centerY = Math.random() * window.innerHeight;
    
    for (let i = 0; i < clusterSize; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        
        const offsetX = (Math.random() - 0.5) * 50;
        const offsetY = (Math.random() - 0.5) * 50;
        const size = 2 + Math.random() * 3;
        
        sparkle.style.left = (centerX + offsetX) + 'px';
        sparkle.style.top = (centerY + offsetY) + 'px';
        sparkle.style.width = size + 'px';
        sparkle.style.height = size + 'px';
        
        const ambientColor = CURSOR_TRAIL_COLORS[Math.floor(Math.random() * CURSOR_TRAIL_COLORS.length)];
        sparkle.style.backgroundColor = ambientColor;
        sparkle.style.opacity = '0.7';
        
        container.appendChild(sparkle);
        
        setTimeout(() => {
            if (sparkle.parentNode) {
                sparkle.parentNode.removeChild(sparkle);
            }
        }, 800);
    }
}

// Funzione principale di smistamento - FIX CRITICO
function handleSorting() {
    if (isProcessing) {
        console.log('⏳ Already processing...');
        return;
    }
    
    const input = document.getElementById('studentName');
    const name = input ? input.value.trim() : '';
    
    console.log(`🎯 Starting sort for: "${name}"`);
    
    if (!name) {
        // Mostra messaggio più elegante invece di alert
        showParchmentMessage('🪄 Inserisci il tuo nome per essere smistato nella giusta casata! 🪄', false);
        input?.focus();
        return;
    }
    
    // Lock UI
    isProcessing = true;
    cursorTrailActive = false; // Disabilita scia durante processing
    
    const startBtn = document.getElementById('startSorting');
    if (startBtn) {
        startBtn.disabled = true;
        startBtn.innerHTML = '<span>🔮 Smistamento in corso... ✨</span>';
    }
    if (input) input.disabled = true;
    
    // Clear parchment and show sorting message
    showParchmentMessage('🎩 Il Cappello Parlante ti sta esaminando... 🎩', false);
    
    // Find house
    const house = findStudentHouse(name);
    console.log(`🏠 House determined: ${house || 'MUGGLE'}`);
    
    // Start enhanced hat animation
    startEnhancedHatAnimation();
    
    // Start sorting process with delay for dramatic effect
    setTimeout(() => {
        if (house) {
            performSorting(name, house);
        } else {
            showMuggleMessage();
        }
    }, 2000);
}

// Mostra messaggio nella pergamena
function showParchmentMessage(message, isFinal) {
    const sortingText = document.getElementById('sortingText');
    if (!sortingText) return;
    
    sortingText.innerHTML = `
        <div style="
            font-family: 'Cinzel', serif; 
            color: ${isFinal ? '#8B4513' : '#2C1810'}; 
            font-size: ${isFinal ? '19px' : '16px'};
            font-weight: ${isFinal ? 'bold' : 'normal'};
            text-align: center; 
            line-height: 1.6;
            ${isFinal ? 'text-shadow: 1px 1px 3px rgba(139, 69, 19, 0.3);' : ''}
            ${isFinal ? 'animation: finalTextGlow 2s ease-in-out infinite alternate;' : ''}
        ">
            ${message}
        </div>
    `;
}

/* ---------------------------
   Audio per risposte del Cappello
   - cerca e riproduce: /audio/{house}_{variant}.mp3
     es. /audio/grifondoro_default.mp3
   - mantiene riferimento currentResponseAudio per stop
   - riduce temporaneamente volume bgAudio (duck) durante la riproduzione della voce
   --------------------------- */
let currentResponseAudio = null;
let _responseAudioEndedHandler = null;

// stato bg audio per fade/restore
let bgAudioOriginalVolume = 0.6;
let _bgDuckingInterval = null;

function getBgAudioElement() {
    return document.getElementById('bgAudio');
}

function _fadeAudio(audioEl, from, to, duration = 500, onComplete) {
    if (!audioEl) { if (onComplete) onComplete(); return; }
    if (_bgDuckingInterval) {
        clearInterval(_bgDuckingInterval);
        _bgDuckingInterval = null;
    }
    const steps = Math.max(6, Math.round(duration / 30));
    let step = 0;
    const stepDelta = (to - from) / steps;
    audioEl.volume = Math.max(0, Math.min(1, from));
    _bgDuckingInterval = setInterval(() => {
        step++;
        const v = from + stepDelta * step;
        audioEl.volume = Math.max(0, Math.min(1, v));
        if (step >= steps) {
            clearInterval(_bgDuckingInterval);
            _bgDuckingInterval = null;
            if (onComplete) onComplete();
        }
    }, duration / steps);
}

function duckBackgroundAudio(toVolume = 0.12, duration = 400) {
    const bg = getBgAudioElement();
    if (!bg) return;
    // salva volume originale solo la prima volta
    bgAudioOriginalVolume = (typeof bgAudioOriginalVolume === 'number') ? bgAudioOriginalVolume : bg.volume || 0.6;
    try {
        _fadeAudio(bg, bg.volume ?? bgAudioOriginalVolume, toVolume, duration);
    } catch (err) {
        console.warn('⚠️ duckBackgroundAudio error', err);
    }
}

function restoreBackgroundAudio(duration = 600) {
    const bg = getBgAudioElement();
    if (!bg) return;
    try {
        _fadeAudio(bg, bg.volume, bgAudioOriginalVolume, duration);
    } catch (err) {
        console.warn('⚠️ restoreBackgroundAudio error', err);
    }
}

function playResponseAudio(house, variant = 'default') {
    // house expected uppercase like "GRIFONDORO"
    if (!house) return null;
    const houseKey = house.toLowerCase();
    const src = `audio/${houseKey}_${variant}.mp3`;
    try {
        // crea elemento audio e prova a riprodurre
        const audio = new Audio(src);
        audio.preload = 'auto';
        audio.volume = 1.0;
        audio.loop = false;

        // duck background audio so voice is in primo piano
        duckBackgroundAudio(0.12, 350);

        // when response audio ends, restore bg audio automatically
        _responseAudioEndedHandler = () => {
            try { restoreBackgroundAudio(700); } catch (e) { /* swallow */ }
        };
        audio.addEventListener('ended', _responseAudioEndedHandler);

        audio.play().then(() => {
            // ok, playing
            currentResponseAudio = audio;
            console.log(`🔊 Playing response audio: ${src}`);
        }).catch((err) => {
            console.warn(`⚠️ Could not autoplay response audio ${src}:`, err);
            // in case of fail, ensure we still restore bg audio after a small delay
            setTimeout(() => restoreBackgroundAudio(500), 800);
            currentResponseAudio = null;
        });
        return audio;
    } catch (err) {
        console.warn('⚠️ playResponseAudio error:', err);
        // ensure bg restored on error
        setTimeout(() => restoreBackgroundAudio(500), 400);
        return null;
    }
}

function stopResponseAudio() {
    if (currentResponseAudio) {
        try {
            // remove ended listener
            if (_responseAudioEndedHandler) {
                try { currentResponseAudio.removeEventListener('ended', _responseAudioEndedHandler); } catch(e) {}
                _responseAudioEndedHandler = null;
            }
            currentResponseAudio.pause();
            currentResponseAudio.currentTime = 0;
            console.log('⏹️ Stopped response audio');
        } catch (err) {
            console.warn('⚠️ Error stopping response audio', err);
        }
        currentResponseAudio = null;
    }
    // restore background audio when response stops (if not already in progress)
    try {
        restoreBackgroundAudio(600);
    } catch (err) { /* swallow */ }
}

/* Trova la casata di uno studente (usa dati della classe corrente) */
function findStudentHouse(name) {
    const normalizedName = name.toLowerCase().trim();
    
    const classData = HOUSES_DATA[getActiveClass()];
    for (const [house, data] of Object.entries(classData)) {
        const found = data.students.find(student => 
            student.toLowerCase() === normalizedName
        );
        if (found) {
            return house;
        }
    }
    return null;
}

/* Esegue il processo di smistamento con effetti potenziati */
function performSorting(name, house) {
    console.log(`📝 Performing enhanced sort: ${name} -> ${house}`);
    
    // Add to sorted list for current class
    const sorted = getSortedStudents();
    if (!sorted[house].includes(name)) {
        sorted[house].push(name);
        console.log(`✅ Added ${name} to ${house} (class ${currentClass}):`, sorted[house]);
    }
    
    // Scegli la serie di risposte: 30% di usare la variante "alt" se presente, altrimenti default
    const respCfg = MAGICAL_RESPONSES[house];
    let responses = [];
    // determine variant BEFORE choosing responses so we can play audio
    let useAlt = false;
    if (respCfg && typeof respCfg === 'object') {
        useAlt = Math.random() < 0.3 && Array.isArray(respCfg.alt);
    }
    const variant = useAlt ? 'alt' : 'default';
    
    if (Array.isArray(respCfg)) {
        responses = respCfg; // backward-compatible
    } else if (respCfg && typeof respCfg === 'object') {
        responses = variant === 'alt' ? respCfg.alt || respCfg.default : respCfg.default || respCfg.alt || [];
    } else {
        responses = []; // fallback vuoto
    }

    // Try to play the matching audio file for the chosen house+variant
    try {
        playResponseAudio(house, variant);
    } catch (err) { console.warn('Could not play response audio', err); }
    
    let currentLine = 0;
    
    function showNextResponse() {
        if (currentLine >= responses.length) {
            console.log('🎉 Sorting complete!');
            setTimeout(() => {
                stopEnhancedHatAnimation();
                // stop response audio when done
                stopResponseAudio();
                highlightHouseWithEffects(house);
                unlockUI();
            }, 2000);
            return;
        }
        
        const response = responses[currentLine];
        const isFinal = currentLine === responses.length - 1;
        
        console.log(`💬 Showing enhanced response ${currentLine}: ${response}`);
        
        displayTextWithEnhancedTypewriter(response, isFinal, () => {
            // NEW: when final line finishes typing, change background to house color
            if (isFinal) {
                try {
                    setBackdropHouse(house);
                } catch (err) { console.warn('Could not set backdrop house', err); }
            }
            currentLine++;
            setTimeout(showNextResponse, isFinal ? 1000 : 2500);
        });
    }
    
    showNextResponse();
}

// Mostra messaggio babbano con effetti
function showMuggleMessage() {
    console.log('👤 Showing enhanced muggle message');
    
    displayTextWithEnhancedTypewriter(MUGGLE_MESSAGE, true, () => {
        setTimeout(() => {
            stopEnhancedHatAnimation();
            unlockUI();
        }, 3000);
    });
}

// Display text con typewriter effect potenziato
function displayTextWithEnhancedTypewriter(text, isFinal, callback) {
    const sortingText = document.getElementById('sortingText');
    if (!sortingText) {
        console.error('❌ Sorting text container not found');
        if (callback) callback();
        return;
    }
    
    // Aggiungi il nuovo testo mantenendo quello precedente
    const textDiv = document.createElement('div');
    textDiv.style.cssText = `
        margin-bottom: 16px;
        font-weight: ${isFinal ? 'bold' : 'normal'};
        font-size: ${isFinal ? '20px' : '17px'};
        color: ${isFinal ? '#8B4513' : '#2C1810'} !important;
        text-align: center;
        font-family: 'Cinzel', serif;
        line-height: 1.6;
        ${isFinal ? 'text-shadow: 1px 1px 3px rgba(139, 69, 19, 0.4);' : ''}
        ${isFinal ? 'animation: finalTextGlow 2s ease-in-out infinite alternate;' : ''}
    `;
    
    // Se è il primo messaggio, pulisci la pergamena
    if (sortingText.children.length === 0 || sortingText.innerHTML.includes('Cappello Parlante ti sta esaminando')) {
        sortingText.innerHTML = '';
    }
    
    sortingText.appendChild(textDiv);
    
    let charIndex = 0;
    function typeChar() {
        if (charIndex < text.length) {
            textDiv.textContent += text.charAt(charIndex);
            
            // Suono di typing simulato con particelle
            if (charIndex % 3 === 0) {
                createTypingSparkle(textDiv);
            }
            
            charIndex++;
            setTimeout(typeChar, isFinal ? 80 : 60);
        } else {
            if (callback) {
                setTimeout(callback, 500);
            }
        }
    }
    
    typeChar();
}

// Crea sparkle durante typing
function createTypingSparkle(element) {
    if (!element) return;
    
    const rect = element.getBoundingClientRect();
    const sparkle = document.createElement('div');
    
    sparkle.style.cssText = `
        position: fixed;
        left: ${rect.right - 10 + Math.random() * 20}px;
        top: ${rect.top + rect.height / 2 + (Math.random() - 0.5) * 20}px;
        width: 3px;
        height: 3px;
        background: #B8860B;
        border-radius: 50%;
        pointer-events: none;
        z-index: 100;
        animation: sparkleEffect 0.6s ease-out forwards;
    `;
    
    document.body.appendChild(sparkle);
    
    setTimeout(() => {
        if (sparkle.parentNode) {
            sparkle.parentNode.removeChild(sparkle);
        }
    }, 600);
}

// Animazioni cappello potenziate
function startEnhancedHatAnimation() {
    const hat = document.getElementById('sortingHat');
    if (hat) {
        hat.classList.add('talking');
        hat.style.animation = 'expressiveTalking 0.6s ease-in-out infinite';
        
        // Aumenta particelle dal cappello durante il sorting
        enhanceHatParticles(true);
        console.log('🎩 Enhanced hat animation started');
    }
}

function stopEnhancedHatAnimation() {
    const hat = document.getElementById('sortingHat');
    if (hat) {
        hat.classList.remove('talking');
        hat.style.animation = 'friendlyIdle 3s ease-in-out infinite';
        
        // Riduci particelle dal cappello
        enhanceHatParticles(false);
        console.log('🎩 Enhanced hat animation stopped');
    }
}

// Potenzia particelle dal cappello
function enhanceHatParticles(enhance) {
    const hatParticles = document.querySelector('.hat-particles');
    if (hatParticles) {
        if (enhance) {
            hatParticles.style.animation = 'hatParticles 2s linear infinite';
            hatParticles.style.opacity = '1';
        } else {
            hatParticles.style.animation = 'hatParticles 4s linear infinite';
            hatParticles.style.opacity = '0.6';
        }
    }
}

// Evidenzia la casata con effetti potenziati (usa dati della classe corrente)
function highlightHouseWithEffects(house) {
    const card = document.querySelector(`[data-house="${house}"]`);
    if (card) {
        console.log(`⭐ Highlighting ${house} with enhanced effects`);
        
        // Effetti visivi
        card.style.transform = 'scale(1.08) translateY(-8px)';
        card.style.boxShadow = '0 20px 40px rgba(184, 134, 11, 0.8)';
        card.style.borderColor = '#DAA520';
        card.style.borderWidth = '3px';
        const houseColors = getHouseData(house).colors;
        card.style.background = `linear-gradient(135deg, ${houseColors[0]}aa, ${houseColors[1]}aa)`;
        
        // Aggiungi bagliore pulsante
        card.style.animation = 'houseSelection 3s ease-in-out infinite';
        
        // Crea esplosione di particelle colorate per la casata
        createHouseExplosion(card, house);
        
        // Reset dopo 5 secondi
        setTimeout(() => {
            card.style.transform = '';
            card.style.boxShadow = '';
            card.style.borderColor = '';
            card.style.borderWidth = '';
            card.style.background = '';
            card.style.animation = '';
        }, 5000);
    }
}

// Crea esplosione di particelle per la casata selezionata
function createHouseExplosion(card, house) {
    const rect = card.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // use class-specific house colors
    const colors = getHouseData(house).colors;
    const container = document.getElementById('sparkles-container');
    
    if (!container) return;
    
    // Crea esplosione con molte particelle
    for (let i = 0; i < 25; i++) {
        const particle = document.createElement('div');
        particle.className = 'house-explosion-particle';
        
        const angle = (360 / 25) * i + Math.random() * 15;
        const distance = 50 + Math.random() * 120;
        const size = 4 + Math.random() * 6;
        
        particle.style.cssText = `
            position: fixed;
            left: ${centerX + Math.cos(angle * Math.PI / 180) * distance}px;
            top: ${centerY + Math.sin(angle * Math.PI / 180) * distance}px;
            width: ${size}px;
            height: ${size}px;
            background: ${colors[Math.floor(Math.random() * colors.length)]};
            border-radius: 50%;
            pointer-events: none;
            z-index: 1001;
            animation: houseExplosion 2.5s ease-out forwards;
            box-shadow: 0 0 ${size * 3}px ${colors[0]};
        `;
        
        container.appendChild(particle);
        
        setTimeout(() => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        }, 2500);
    }
}

// NEW: set / reset magic-background class to match announced house
function setBackdropHouse(house) {
    const bg = document.querySelector('.magic-background');
    if (!bg || !house) return;
    // remove any previous house-bg-* classes
    bg.classList.remove('house-bg-grifondoro','house-bg-tassorosso','house-bg-corvonero','house-bg-serpeverde');
    const cls = 'house-bg-' + house.toLowerCase();
    bg.classList.add(cls, 'house-active');
    console.log(`🖌️ Applied backdrop class: ${cls}`);
}

function resetBackdropHouse() {
    const bg = document.querySelector('.magic-background');
    if (!bg) return;
    bg.classList.remove('house-bg-grifondoro','house-bg-tassorosso','house-bg-corvonero','house-bg-serpeverde','house-active');
    console.log('🧹 Reset backdrop to default');
}

// Unlock UI con riattivazione effetti
function unlockUI() {
    isProcessing = false;
    cursorTrailActive = true; // Riattiva scia cursore
    
    const startBtn = document.getElementById('startSorting');
    const input = document.getElementById('studentName');
    
    if (startBtn) {
        startBtn.disabled = false;
        startBtn.innerHTML = '<span>🎩 Avvia Smistamento ✨</span>';
    }
    if (input) {
        input.disabled = false;
        input.value = '';
        setTimeout(() => input.focus(), 500);
    }
    
    // NEW: reset backdrop to original
    resetBackdropHouse();
    
    console.log('🔓 UI unlocked with enhanced effects reactivated');
}

// Mostra studenti di una casata con effetti migliorati (usa dati della classe corrente)
function showHouseStudents(house) {
    console.log(`👥 Showing students for ${house} with enhanced modal (class ${currentClass})`);
    
    const modal = document.getElementById('studentsModal');
    const title = document.getElementById('modalTitle');
    const list = document.getElementById('studentsList');
    const noStudents = document.getElementById('noStudents');
    
    if (!modal) {
        console.error('❌ Modal not found');
        return;
    }
    
    const houseNames = {
        'GRIFONDORO': 'Grifondoro',
        'TASSOROSSO': 'Tassorosso', 
        'CORVONERO': 'Corvonero',
        'SERPEVERDE': 'Serpeverde'
    };
    
    if (title) {
        title.textContent = `Studenti Smistati in ${houseNames[house]} (${currentClass})`;
        const c = getHouseData(house).colors[0];
        title.style.color = c;
    }
    
    const students = getSortedStudents()[house] || [];
    console.log(`📊 Students in ${house} (class ${currentClass}):`, students);
    
    if (students.length === 0) {
        if (list) list.innerHTML = '';
        if (noStudents) {
            noStudents.classList.remove('hidden');
            noStudents.innerHTML = `
                <div style="text-align: center; color: rgba(248, 248, 255, 0.7); font-style: italic; padding: 40px 20px; font-size: 16px;">
                    🏰 Nessuno studente è ancora stato smistato in ${houseNames[house]}.<br><br>
                    Sii il primo a unirti a questa nobile casata! ✨
                </div>
            `;
        }
    } else {
        if (noStudents) noStudents.classList.add('hidden');
        if (list) {
            list.innerHTML = students.map((student, index) => 
                `<li style="animation: studentAppear 0.3s ease-out ${index * 0.1}s both; border-left-color: ${getHouseData(house).colors[0]}">
                    🎓 ${student}
                </li>`
            ).join('');
        }
    }
    
    modal.classList.remove('hidden');
    modal.style.animation = 'modalAppear 0.3s ease-out forwards';
    console.log('✅ Enhanced modal opened');
}

// Chiudi modale con animazione
function closeModal() {
    const modal = document.getElementById('studentsModal');
    if (modal && !modal.classList.contains('hidden')) {
        modal.style.animation = 'modalDisappear 0.3s ease-out forwards';
        setTimeout(() => {
            modal.classList.add('hidden');
        }, 300);
        console.log('❌ Enhanced modal closed');
    }
}

// Funzione di reset completa
function resetApp() {
    // reset sortedStudentsByClass for all classes
    for (const cls of Object.keys(sortedStudentsByClass)) {
        for (const house of Object.keys(sortedStudentsByClass[cls])) {
            sortedStudentsByClass[cls][house] = [];
        }
    }
    
    stopEnhancedHatAnimation();
    unlockUI();
    closeModal();
    
    // Reset cursor trail
    cursorTrailActive = true;
    
    // Reinitialize parchment
    initializeParchment();
    
    console.log('🔄 Enhanced app reset complete');
}

// AUDIO: autoplay (muted) + toggle/unmute on user gesture
// Place your MP3 at: ./audio/ambient.mp3 or change the src in index.html
function setupAudioControls() {
    const btn = document.getElementById('audioToggle');
    const audio = document.getElementById('bgAudio');
    if (!btn || !audio) return;

    // update button label + icon based on audio state
    // Now: quando l'audio è in riproduzione e non mutato => mostra "QUIETUS!"
    //       altrimenti (muted/paused) => mostra "SONORUS!"
    function refreshButton() {
        const label = btn.querySelector('.audio-label');
        if (!label) return;
        if (!audio.paused && !audio.muted) {
            // audio attivo => mostra QUIETUS (opzione per silenziare)
            label.textContent = 'QUIETUS! 🔕';
            btn.classList.add('muted'); // mantiene l'icona muto se desiderato per coerenza visiva
            btn.setAttribute('aria-pressed', 'true');
        } else {
            // audio fermo o muto => mostra SONORUS (opzione per attivare)
            label.textContent = 'SONORUS!';
            btn.classList.remove('muted');
            btn.setAttribute('aria-pressed', 'false');
        }
    }

    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        // If paused, start playback and unmute on explicit gesture; otherwise toggle mute
        if (audio.paused) {
            audio.muted = false;
            audio.play().catch(() => { /* swallow */ });
        } else {
            audio.muted = !audio.muted;
            if (!audio.muted && audio.paused) {
                audio.play().catch(() => { /* swallow */ });
            }
        }
        // aggiorna label/icona subito dopo l'azione
        setTimeout(refreshButton, 80);
    });

    // If user interacts anywhere, ensure audio is unmuted (first user gesture)
    const onFirstGesture = () => {
        if (audio) {
            audio.muted = false;
            audio.play().catch(() => { /* some browsers may still block */ });
            refreshButton();
        }
        // remove this listener after first gesture
        document.removeEventListener('click', onFirstGesture, true);
        document.removeEventListener('keydown', onFirstGesture, true);
    };
    document.addEventListener('click', onFirstGesture, true);
    document.addEventListener('keydown', onFirstGesture, true);

    refreshButton();
}

function tryAutoplayAudio() {
    const audio = document.getElementById('bgAudio');
    if (!audio) return;
    // Start muted to satisfy autoplay policies, then play.
    audio.muted = true;
    audio.volume = 0.6;
    audio.play().then(() => {
        console.log('🎶 Background audio started (muted). Click to unmute.');
    }).catch((err) => {
        console.warn('⚠️ Autoplay prevented:', err);
    });
}

// Inizializza quando il DOM è pronto
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
} else {
    initializeApp();
}

// Export per debug e testing
window.enhancedHogwartsApp = {
    resetApp,
    sortedStudentsByClass,
    HOUSES_DATA,
    MAGICAL_RESPONSES,
    showHouseStudents,
    handleSorting,
    triggerHatExpression,
    createMysteriousGlow,
    cursorTrailActive: () => cursorTrailActive,
    toggleCursorTrail: () => { cursorTrailActive = !cursorTrailActive; },
    initializeParchment,
    setCurrentClass: (cls) => { if (HOUSES_DATA[cls]) { currentClass = cls; } }
};