// Create floating particles
function createParticles() {
    const particles = document.getElementById('particles');
    const particleCount = 50;
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 6 + 's';
        particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
        particles.appendChild(particle);
    }
}

// Lesson navigation functions
function showLessonSelection() {
    const container = document.querySelector('.container');
    container.innerHTML = `
        <div class="hero">
            <h1>Python Seconde</h1>
            <p>Choisissez votre leçon</p>
        </div>
        <div class="lesson-selection">
            <div class="lesson-tile" onclick="showLesson(1)">
                <div class="lesson-number">1</div>
                <div class="lesson-content">
                    <div class="lesson-title">Variables et Types</div>
                    <div class="lesson-subtitle">Les bases de Python</div>
                </div>
                <div class="tile-arrow">→</div>
            </div>
            <div class="lesson-tile" onclick="showLesson(2)">
                <div class="lesson-number">2</div>
                <div class="lesson-content">
                    <div class="lesson-title">Opérations et Conditions</div>
                    <div class="lesson-subtitle">Calculs et décisions</div>
                </div>
                <div class="tile-arrow">→</div>
            </div>
        </div>
    `;
}

function showLesson(lessonNumber) {
    // Switch lesson data
    if (lessonNumber === 1) {
        currentLessonData = lesson1Data;
        showLessonContent('Leçon 1 : Variables et Types', getLessonConcepts(lesson1Data));
    } else if (lessonNumber === 2) {
        currentLessonData = lesson2Data;
        showLessonContent('Leçon 2 : Opérations et Conditions', getLessonConcepts(lesson2Data));
    }
}

function getLessonConcepts(lessonData) {
    const concepts = [];
    for (const [key, value] of Object.entries(lessonData)) {
        concepts.push({
            concept: key,
            icon: value.icon,
            emoji: value.emoji,
            title: value.title,
            subtitle: value.subtitle
        });
    }
    return concepts;
}

function showLessonContent(lessonTitle, concepts) {
    const container = document.querySelector('.container');
    const conceptsHtml = concepts.map(concept => `
        <div class="concept-tile" data-concept="${concept.concept}">
            <div class="tile-icon ${concept.icon}">${concept.emoji}</div>
            <div class="tile-content">
                <div class="tile-title">${concept.title}</div>
                <div class="tile-subtitle">${concept.subtitle}</div>
            </div>
            <div class="tile-arrow">→</div>
        </div>
    `).join('');

    container.innerHTML = `
        <div class="hero">
            <button class="back-button" onclick="showLessonSelection()" style="
                position: absolute;
                top: 20px;
                left: 10px;
                background: rgba(255, 255, 255, 0.1);
                border: 2px solid rgba(255, 255, 255, 0.2);
                border-radius: 50%;
                width: 50px;
                height: 50px;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                color: white;
                font-size: 1.2rem;
                transition: all 0.3s ease;
            " onmouseover="this.style.background='rgba(255,255,255,0.2)'" onmouseout="this.style.background='rgba(255,255,255,0.1)'">
                ←
            </button>
            <h1>${lessonTitle}</h1>
            <p>Cliquez sur un concept pour l'explorer</p>
        </div>
        <div class="tiles-container">
            ${conceptsHtml}
        </div>
        <div style="text-align: center; margin-top: 40px;">
            <button class="back-button" onclick="showLessonSelection()" style="
                background: rgba(255, 255, 255, 0.1);
                border: 2px solid rgba(255, 255, 255, 0.2);
                border-radius: 12px;
                padding: 12px 24px;
                color: white;
                cursor: pointer;
                font-size: 1rem;
                transition: all 0.3s ease;
                margin-bottom: 20px;
            " onmouseover="this.style.background='rgba(255,255,255,0.2)'" onmouseout="this.style.background='rgba(255,255,255,0.1)'">
                ← Retour aux leçons
            </button>
        </div>
    `;
    
    // Reinitialize modal after content change
    initModal();
}

// Modal system
function initModal() {
    const tiles = document.querySelectorAll('.concept-tile');
    const modal = document.getElementById('fullscreenModal');
    const closeButton = document.getElementById('closeButton');
    const modalIcon = document.getElementById('modalIcon');
    const modalTitle = document.getElementById('modalTitle');
    const modalSubtitle = document.getElementById('modalSubtitle');
    const modalBody = document.getElementById('modalBody');

    // Open modal when clicking a tile
    tiles.forEach(tile => {
        tile.addEventListener('click', function() {
            const concept = this.dataset.concept;
            const data = currentLessonData[concept];
            
            if (!data) return;

            // Update modal content
            modalIcon.className = `modal-icon ${data.icon}`;
            modalIcon.textContent = data.emoji;
            modalTitle.textContent = data.title;
            modalSubtitle.textContent = data.subtitle;
            modalBody.innerHTML = data.content;
            
            // Show modal
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    // Close modal
    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }

    closeButton.addEventListener('click', closeModal);
    
    // Close on click outside modal content
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Close with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
}

// Touch gestures for mobile swipe feel
function initTouchGestures() {
    const tiles = document.querySelectorAll('.concept-tile');
    
    tiles.forEach(tile => {
        let startY = 0;
        let startTime = 0;
        
        tile.addEventListener('touchstart', function(e) {
            startY = e.touches[0].clientY;
            startTime = Date.now();
            this.style.transform = 'scale(0.95)';
        });
        
        tile.addEventListener('touchend', function(e) {
            const endTime = Date.now();
            const duration = endTime - startTime;
            
            this.style.transform = '';
            
            // If it's a quick tap (not a scroll), trigger click
            if (duration < 300) {
                this.click();
            }
        });
        
        tile.addEventListener('touchcancel', function() {
            this.style.transform = '';
        });
    });
}

// Interactive effects
document.addEventListener('DOMContentLoaded', function() {
    // Variable items hover effect in modal
    document.addEventListener('mouseenter', function(e) {
        if (e.target.closest('.variable-item')) {
            e.target.closest('.variable-item').style.boxShadow = '0 10px 30px rgba(102, 126, 234, 0.4)';
        }
    }, true);
    
    document.addEventListener('mouseleave', function(e) {
        if (e.target.closest('.variable-item')) {
            e.target.closest('.variable-item').style.boxShadow = 'none';
        }
    }, true);

    // Code block hover effects
    document.addEventListener('mouseenter', function(e) {
        if (e.target.closest('.code-content')) {
            e.target.closest('.code-content').style.background = 'linear-gradient(45deg, #1a1a2e, #16213e)';
        }
    }, true);
    
    document.addEventListener('mouseleave', function(e) {
        if (e.target.closest('.code-content')) {
            e.target.closest('.code-content').style.background = '#1a1a2e';
        }
    }, true);

    // Exercise cards click effect
    document.addEventListener('click', function(e) {
        if (e.target.closest('.exercise-card')) {
            const card = e.target.closest('.exercise-card');
            card.style.background = 'linear-gradient(135deg, rgba(102, 126, 234, 0.4), rgba(118, 75, 162, 0.3))';
            setTimeout(() => {
                card.style.background = 'linear-gradient(135deg, rgba(102, 126, 234, 0.3), rgba(118, 75, 162, 0.2))';
            }, 800);
        }
    }, true);
});

// Quiz Functions
let selectedQuizOptions = {};

function setupQuizListeners() {
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('quiz-option')) {
            const container = e.target.closest('.quiz-container');
            const quizId = container.querySelector('.quiz-question').textContent;
            
            // Clear previous selections
            container.querySelectorAll('.quiz-option').forEach(opt => {
                opt.classList.remove('selected');
            });
            
            // Select current option
            e.target.classList.add('selected');
            selectedQuizOptions[quizId] = e.target;
        }
    });
}

function checkVariableQuiz() {
    const feedbackElements = document.querySelectorAll('#variableQuizFeedback');
    feedbackElements.forEach(feedback => {
        feedback.parentElement.querySelectorAll('.quiz-option').forEach(option => {
            const isCorrect = option.dataset.correct === 'true';
            const isSelected = option.classList.contains('selected');
            
            if (isCorrect) {
                option.classList.add('correct');
            } else if (isSelected) {
                option.classList.add('incorrect');
            }
        });
        
        const correctSelected = feedback.parentElement.querySelector('.quiz-option.selected[data-correct="true"]');
        feedback.style.display = 'block';
        
        if (correctSelected) {
            feedback.className = 'quiz-feedback correct';
            feedback.textContent = '🎉 Parfait ! La syntaxe correcte est bien variable = valeur';
        } else {
            feedback.className = 'quiz-feedback incorrect';
            feedback.textContent = '❌ Pas tout à fait... La bonne réponse est : age_utilisateur = 15';
        }
    });
}

function checkTypeQuiz() {
    const feedback = document.getElementById('typeQuizFeedback');
    if (!feedback) return;
    
    const options = feedback.parentElement.querySelectorAll('.quiz-option');
    
    options.forEach(option => {
        const isCorrect = option.dataset.correct === 'true';
        const isSelected = option.classList.contains('selected');
        
        if (isCorrect) {
            option.classList.add('correct');
        } else if (isSelected) {
            option.classList.add('incorrect');
        }
    });
    
    const correctSelected = feedback.parentElement.querySelector('.quiz-option.selected[data-correct="true"]');
    feedback.style.display = 'block';
    
    if (correctSelected) {
        feedback.className = 'quiz-feedback correct';
        feedback.textContent = '🎉 Excellent ! 18.5 est bien un nombre décimal (float)';
    } else {
        feedback.className = 'quiz-feedback incorrect';
        feedback.textContent = '❌ Non, 18.5 est un nombre décimal, donc de type float';
    }
}

// Hint toggle function
function toggleHint(hintId) {
    const hint = document.getElementById(hintId);
    if (hint) {
        if (hint.style.display === 'none' || hint.style.display === '') {
            hint.style.display = 'block';
        } else {
            hint.style.display = 'none';
        }
    }
}

// Initialize everything
document.addEventListener('DOMContentLoaded', function() {
    createParticles();
    showLessonSelection();
    setupQuizListeners();
    initConsole();
});

// Skulpt Configuration and Editor functionality
let skulptVariables = {};
let currentTab = 'editor';

function initConsole() {
    // Wait for Skulpt to load, then configure it
    if (typeof Sk === 'undefined') {
        console.log('Skulpt not yet loaded, retrying...');
        setTimeout(initConsole, 100);
        return;
    }
    
    console.log('Skulpt loaded successfully!', Sk);
    
    const codeEditor = document.getElementById('codeEditor');
    
    if (codeEditor) {
        codeEditor.addEventListener('keydown', function(e) {
            if (e.ctrlKey && e.key === 'Enter') {
                e.preventDefault();
                runCode();
            }
        });
        
        codeEditor.addEventListener('input', updateLineNumbers);
        codeEditor.addEventListener('scroll', syncLineNumbers);
        updateLineNumbers();
    }
    
    // Show editor by default
    switchTab('editor');
    
    // Also make sure the editor panel is visible
    const editorPanel = document.getElementById('editorPanel');
    if (editorPanel) {
        editorPanel.style.display = 'flex';
    }
    
    // Initialize dragging functionality
    initDragging();
}

// Dragging functionality
function initDragging() {
    const consoleWindow = document.getElementById('pythonConsole');
    const header = consoleWindow.querySelector('.console-header');
    let isDragging = false;
    let currentX;
    let currentY;
    let initialX;
    let initialY;
    let xOffset = 0;
    let yOffset = 0;

    header.addEventListener('mousedown', dragStart);
    document.addEventListener('mousemove', drag);
    document.addEventListener('mouseup', dragEnd);

    function dragStart(e) {
        // Don't drag if clicking on buttons
        if (e.target.closest('.console-control') || e.target.closest('.toolbar-btn')) {
            return;
        }
        
        isDragging = true;
        consoleWindow.style.transition = 'none';
        
        initialX = e.clientX - xOffset;
        initialY = e.clientY - yOffset;
    }

    function drag(e) {
        if (!isDragging) return;
        
        e.preventDefault();
        currentX = e.clientX - initialX;
        currentY = e.clientY - initialY;
        
        xOffset = currentX;
        yOffset = currentY;
        
        consoleWindow.style.transform = `translate(${currentX}px, ${currentY}px) scale(1)`;
    }

    function dragEnd() {
        if (!isDragging) return;
        
        isDragging = false;
        consoleWindow.style.transition = 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)';
    }
}

// Skulpt read function for imports
function builtinRead(x) {
    if (Sk.builtinFiles === undefined || Sk.builtinFiles["files"][x] === undefined) {
        throw new Error("File not found: '" + x + "'");
    }
    return Sk.builtinFiles["files"][x];
}

function showConsole() {
    const console = document.getElementById('pythonConsole');
    const fab = document.getElementById('consoleFab');
    
    console.classList.add('active');
    fab.classList.add('hidden');
}

function hideConsole() {
    const console = document.getElementById('pythonConsole');
    const fab = document.getElementById('consoleFab');
    
    console.classList.remove('active');
    fab.classList.remove('hidden');
}

function toggleConsole() {
    const console = document.getElementById('pythonConsole');
    const isMinimized = console.classList.contains('minimized');
    
    console.classList.toggle('minimized');
    
    // Update the minimize button icon
    const toggleButton = document.querySelector('button[onclick="toggleConsole()"]');
    if (toggleButton) {
        const svg = toggleButton.querySelector('svg');
        const path = svg.querySelector('path');
        
        if (console.classList.contains('minimized')) {
            // Show maximize icon (square)
            path.setAttribute('d', 'M3 3h18v18H3V3zm2 2v14h14V5H5z');
            toggleButton.title = 'Maximiser';
        } else {
            // Show minimize icon (line)
            path.setAttribute('d', 'M19 12H5');
            toggleButton.title = 'Minimiser';
        }
    }
}

function clearConsole() {
    // Clear editor instead
    clearEditor();
    
    // Clear Skulpt globals
    if (Sk.globals) {
        for (let key in Sk.globals) {
            if (!key.startsWith('__') && typeof Sk.globals[key] !== 'function') {
                delete Sk.globals[key];
            }
        }
    }
}

// Multi-panel interface functions
function switchTab(tabName) {
    currentTab = tabName;
    
    // Update tab buttons
    document.querySelectorAll('.toolbar-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById(tabName + 'Tab').classList.add('active');
    
    // Show/hide panels
    document.getElementById('editorPanel').style.display = tabName === 'editor' ? 'flex' : 'none';
    document.getElementById('variablesPanel').style.display = tabName === 'variables' ? 'flex' : 'none';
}

// Code Editor functions
function runCode() {
    const codeEditor = document.getElementById('codeEditor');
    const outputContent = document.getElementById('outputContent');
    const editorStatus = document.querySelector('.editor-status');
    
    const code = codeEditor.value.trim();
    if (!code) return;
    
    // Clear previous output
    outputContent.textContent = 'Exécution en cours...';
    editorStatus.textContent = 'En cours...';
    
    // Check if Skulpt is loaded
    if (typeof Sk === 'undefined') {
        outputContent.textContent = 'ERREUR: Skulpt n\'est pas chargé.';
        editorStatus.textContent = 'Erreur';
        return;
    }
    
    // Capture output for editor
    let editorOutput = '';
    
    function captureOutput(text) {
        console.log('Python output:', text);
        editorOutput += text;
        outputContent.textContent = editorOutput;
    }
    
    // Configure Skulpt for execution
    try {
        Sk.pre = "output";
        Sk.configure({
            output: captureOutput,
            read: function(x) {
                if (Sk.builtinFiles === undefined || Sk.builtinFiles["files"][x] === undefined) {
                    throw "File not found: '" + x + "'";
                }
                return Sk.builtinFiles["files"][x];
            },
            inputfun: function(prompt) {
                return new Promise(function(resolve) {
                    const outputContent = document.getElementById('outputContent');
                    
                    // Add the prompt to the output
                    const promptSpan = document.createElement('span');
                    promptSpan.textContent = prompt || '';
                    promptSpan.style.color = '#00ff00';
                    outputContent.appendChild(promptSpan);
                    
                    // Create input field
                    const inputField = document.createElement('input');
                    inputField.type = 'text';
                    inputField.style.cssText = `
                        background: transparent;
                        border: none;
                        outline: none;
                        color: #ffffff;
                        font-family: 'JetBrains Mono', monospace;
                        font-size: inherit;
                        margin-left: 5px;
                        border-bottom: 1px solid #00ff00;
                        padding: 2px 0;
                    `;
                    
                    outputContent.appendChild(inputField);
                    inputField.focus();
                    
                    // Handle input submission
                    function handleSubmit() {
                        const value = inputField.value;
                        inputField.remove();
                        
                        // Add the entered value to output
                        const valueSpan = document.createElement('span');
                        valueSpan.textContent = value;
                        valueSpan.style.color = '#ffffff';
                        outputContent.appendChild(valueSpan);
                        
                        // Add line break
                        outputContent.appendChild(document.createElement('br'));
                        
                        resolve(value);
                    }
                    
                    inputField.addEventListener('keydown', function(e) {
                        if (e.key === 'Enter') {
                            handleSubmit();
                        }
                    });
                });
            },
            inputfunTakesPrompt: true,
            __future__: Sk.python3,
            execLimit: 10000
        });
        
        console.log('Executing Python code:', code);
        
        // Use the simpler evaluation method
        const promise = Sk.misceval.asyncToPromise(function() {
            return Sk.importMainWithBody("<stdin>", false, code, true);
        });
        
        promise.then(function(mod) {
            console.log('Python execution completed successfully');
            editorStatus.textContent = 'Terminé';
            if (!editorOutput.trim()) {
                outputContent.textContent = 'Code exécuté avec succès (aucune sortie).';
            }
            updateVariables();
        }, function(err) {
            console.error('Python execution error:', err);
            const errorMsg = err.toString();
            outputContent.textContent = (editorOutput ? editorOutput + '\n\n' : '') + 'ERREUR:\n' + errorMsg;
            editorStatus.textContent = 'Erreur';
        });
        
    } catch (err) {
        console.error('Skulpt configuration error:', err);
        outputContent.textContent = 'ERREUR de configuration: ' + err.toString();
        editorStatus.textContent = 'Erreur';
    }
}

function clearEditor() {
    const codeEditor = document.getElementById('codeEditor');
    const outputContent = document.getElementById('outputContent');
    const editorStatus = document.querySelector('.editor-status');
    
    codeEditor.value = '';
    outputContent.textContent = 'Cliquez sur "Exécuter" pour voir le résultat de votre code.';
    editorStatus.textContent = 'Prêt';
    updateLineNumbers();
}

// Line number functions for editor
function updateLineNumbers() {
    const codeEditor = document.getElementById('codeEditor');
    const lineNumbers = document.getElementById('editorLineNumbers');
    
    if (!codeEditor || !lineNumbers) return;
    
    const lines = codeEditor.value.split('\n');
    const numbers = lines.map((_, i) => i + 1).join('\n');
    lineNumbers.textContent = numbers;
}

function syncLineNumbers() {
    const codeEditor = document.getElementById('codeEditor');
    const lineNumbers = document.getElementById('editorLineNumbers');
    
    if (!codeEditor || !lineNumbers) return;
    
    lineNumbers.scrollTop = codeEditor.scrollTop;
}

// Variables panel functions
function updateVariables() {
    if (currentTab === 'variables') {
        refreshVariables();
    }
}

function refreshVariables() {
    const variablesContent = document.getElementById('variablesContent');
    
    // Get global variables from Skulpt
    const globals = Sk.globals;
    const variables = [];
    
    if (globals) {
        for (let key in globals) {
            if (key.startsWith('__') || typeof globals[key] === 'function') continue;
            
            try {
                const value = globals[key];
                const pythonValue = Sk.ffi.remapToJs(value);
                const pythonType = value.tp$name || typeof pythonValue;
                
                variables.push({
                    name: key,
                    value: JSON.stringify(pythonValue),
                    type: pythonType
                });
            } catch (e) {
                // Skip variables that can't be converted
            }
        }
    }
    
    if (variables.length === 0) {
        variablesContent.innerHTML = '<div class="variables-empty">Aucune variable définie. Exécutez du code pour voir les variables ici.</div>';
    } else {
        variablesContent.innerHTML = variables.map(variable => `
            <div class="variable-item">
                <div>
                    <span class="variable-name">${variable.name}</span>
                    <span class="variable-type">${variable.type}</span>
                </div>
                <div class="variable-value">${variable.value}</div>
            </div>
        `).join('');
    }
}

// Function to load code into editor from content
function loadCodeIntoConsole(code) {
    console.log('Loading code into editor:', code);
    
    // Close modal first if it's open
    const modal = document.getElementById('fullscreenModal');
    if (modal && modal.classList.contains('active')) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
    
    // Show the Python editor console
    showConsole();
    
    // Switch to editor tab
    switchTab('editor');
    
    // Wait a moment for the editor to be visible, then load the code
    setTimeout(() => {
        const codeEditor = document.getElementById('codeEditor');
        if (codeEditor) {
            codeEditor.value = code;
            updateLineNumbers();
            console.log('Code loaded successfully:', codeEditor.value);
        } else {
            console.error('Code editor not found!');
        }
    }, 100);
}

// Alternative name for consistency
function loadCodeIntoEditor(code) {
    loadCodeIntoConsole(code);
}

// Make functions available globally
window.loadCodeIntoConsole = loadCodeIntoConsole;
window.loadCodeIntoEditor = loadCodeIntoEditor;

// Add keyboard shortcut to toggle console (Ctrl+`)
document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && e.key === '`') {
        e.preventDefault();
        const console = document.getElementById('pythonConsole');
        if (console.classList.contains('active')) {
            hideConsole();
        } else {
            showConsole();
        }
    }
});