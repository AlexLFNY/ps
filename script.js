// Import the lesson registry
import { lessonRegistry, getLessonById } from './lessons/lessonRegistry.js';

// Performance optimizations and imports
let particleSystem = null;
let performanceOptimizer = null;
let currentLessonData = null;

// Create floating particles with performance optimizations
function createParticles() {
    // Import particle system dynamically for better initial load
    import('./js/particles.js').then(({ ParticleSystem, getOptimalParticleCount }) => {
        const optimalCount = getOptimalParticleCount();
        particleSystem = new ParticleSystem('particles', { count: optimalCount });
    }).catch(error => {
        console.warn('Failed to load particle system:', error);
        // Fallback to simple particle creation
        createFallbackParticles();
    });
}

function createFallbackParticles() {
    const particles = document.getElementById('particles');
    const particleCount = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 
                         /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? 15 : 30;
    
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 6 + 's';
        particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
        fragment.appendChild(particle);
    }
    particles.appendChild(fragment);
}

// Lesson navigation functions
async function showLessonSelection() {
    const container = document.querySelector('.container');
    
    // Generate lesson tiles dynamically from registry
    const lessonTilesHtml = lessonRegistry.map(lesson => `
        <div class="lesson-tile" onclick="showLesson(${lesson.id})">
            <div class="lesson-number">${lesson.number}</div>
            <div class="lesson-content">
                <div class="lesson-title">${lesson.title}</div>
                <div class="lesson-subtitle">${lesson.subtitle}</div>
            </div>
            <div class="tile-arrow">→</div>
        </div>
    `).join('');
    
    container.innerHTML = `
        <div class="hero">
            <h1>Python Seconde</h1>
            <p>Choisissez votre leçon</p>
        </div>
        <div class="lesson-selection">
            ${lessonTilesHtml}
        </div>
    `;
}

async function showLesson(lessonId) {
    const lesson = getLessonById(lessonId);
    if (!lesson) {
        console.error('Lesson not found:', lessonId);
        return;
    }
    
    try {
        // Dynamically import the lesson data
        const lessonModule = await lesson.module();
        currentLessonData = lessonModule[lesson.dataKey];
        
        showLessonContent(`Leçon ${lesson.number} : ${lesson.title}`, getLessonConcepts(currentLessonData));
    } catch (error) {
        console.error('Failed to load lesson:', error);
        // Fallback to lesson selection
        showLessonSelection();
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
    
    // Reinitialize modal and charger buttons after content change
    initModal();
    initChargerButtons();
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
        // Remove existing listeners to avoid duplicates
        const newTile = tile.cloneNode(true);
        tile.parentNode.replaceChild(newTile, tile);
        
        newTile.addEventListener('click', function() {
            const concept = this.dataset.concept;
            const data = currentLessonData[concept];
            
            if (!data) {
                console.error('No data found for concept:', concept, 'Available concepts:', Object.keys(currentLessonData));
                return;
            }

            // Update modal content
            modalIcon.className = `modal-icon ${data.icon}`;
            modalIcon.textContent = data.emoji;
            modalTitle.textContent = data.title;
            modalSubtitle.textContent = data.subtitle;
            modalBody.innerHTML = data.content;
            
            // Re-initialize charger buttons after content is loaded
            initChargerButtons();
            
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

function toggleSolution(solutionId) {
    const solution = document.getElementById(solutionId);
    if (solution) {
        if (solution.style.display === 'none' || solution.style.display === '') {
            solution.style.display = 'block';
        } else {
            solution.style.display = 'none';
        }
    }
}

// Initialize everything with performance optimizations
document.addEventListener('DOMContentLoaded', async function() {
    try {
        console.log('Application starting...');
        
        // Initialize performance optimizer first
        import('./js/performance.js').then(({ PerformanceOptimizer }) => {
            performanceOptimizer = new PerformanceOptimizer();
        }).catch(error => {
            console.warn('Failed to load performance optimizer:', error);
        });
        
        // Use requestIdleCallback for non-critical initializations
        if ('requestIdleCallback' in window) {
            requestIdleCallback(() => {
                createParticles();
                setupQuizListeners();
            });
        } else {
            // Fallback for browsers without requestIdleCallback
            setTimeout(() => {
                createParticles();
                setupQuizListeners();
            }, 0);
        }
        
        // Critical initializations - run showLessonSelection after the module loads
        console.log('Loading lesson selection...');
        console.log('Lesson registry available:', lessonRegistry);
        await showLessonSelection();
        console.log('Lesson selection completed');
        
        // Remove loading indicator after lessons are loaded
        const initialContent = document.getElementById('initialContent');
        if (initialContent) {
            initialContent.style.display = 'none';
        }
        
        initConsole();
        initChargerButtons();
        console.log('Application initialized successfully');
    } catch (error) {
        console.error('Failed to initialize application:', error);
        // Fallback: show a basic error message
        document.querySelector('.container').innerHTML = `
            <div class="hero">
                <h1>Python Seconde</h1>
                <p>Une erreur s'est produite lors du chargement. Veuillez actualiser la page.</p>
                <p style="font-size: 0.8em; color: #ccc;">Erreur: ${error.message}</p>
                <details style="margin-top: 10px; color: #999;">
                    <summary>Détails techniques</summary>
                    <pre style="font-size: 0.7em; white-space: pre-wrap;">${error.stack}</pre>
                </details>
                <button onclick="location.reload()" style="margin-top: 15px; padding: 10px 20px; background: rgba(255,215,0,0.2); border: 2px solid #ffd700; border-radius: 8px; color: #ffd700; cursor: pointer;">
                    Actualiser la page
                </button>
            </div>
        `;
    }
});

// Pyodide Configuration and Editor functionality
let pyodideInstance = null;
let currentTab = 'editor';

async function initConsole() {
    // Initialize Pyodide
    if (!pyodideInstance) {
        console.log('Loading Pyodide...');
        try {
            pyodideInstance = await loadPyodide();
            console.log('Pyodide loaded successfully!', pyodideInstance);
        } catch (error) {
            console.error('Failed to load Pyodide:', error);
            return;
        }
    }
    
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

// Pyodide doesn't need a custom read function for imports

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
    
    // Clear Pyodide globals
    if (pyodideInstance) {
        pyodideInstance.runPython(`
            # Clear user-defined variables
            user_vars = [k for k in globals().keys() if not k.startswith('_')]
            for var in user_vars:
                if var not in ['__builtins__', '__name__', '__doc__', '__package__']:
                    del globals()[var]
        `);
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
async function runCode() {
    const codeEditor = document.getElementById('codeEditor');
    const outputContent = document.getElementById('outputContent');
    const editorStatus = document.querySelector('.editor-status');
    
    const code = codeEditor.value.trim();
    if (!code) return;
    
    // Clear previous output
    outputContent.innerHTML = 'Exécution en cours...';
    editorStatus.textContent = 'En cours...';
    
    // Check if Pyodide is loaded
    if (!pyodideInstance) {
        outputContent.textContent = 'ERREUR: Pyodide n\'est pas chargé.';
        editorStatus.textContent = 'Erreur';
        return;
    }
    
    // Setup input/output handling
    let capturedOutput = '';
    
    try {
        console.log('Executing Python code:', code);
        
        // Setup custom input function for Pyodide
        pyodideInstance.runPython(`
import sys
from io import StringIO
import builtins

_stdout_backup = sys.stdout
_input_backup = builtins.input
sys.stdout = StringIO()

# Store input prompts and responses
_input_queue = []
_input_responses = []

def custom_input(prompt=""):
    _input_queue.append(str(prompt))
    # This will be replaced by JavaScript
    raise Exception("INPUT_REQUIRED")

builtins.input = custom_input
        `);
        
        // Execute the user code
        try {
            const result = pyodideInstance.runPython(code);
            
            // Get the captured output
            capturedOutput = pyodideInstance.runPython(`
captured = sys.stdout.getvalue()
sys.stdout = _stdout_backup
builtins.input = _input_backup
captured
            `);
            
            console.log('Python execution completed successfully');
            editorStatus.textContent = 'Terminé';
            
            // Display output
            if (capturedOutput.trim()) {
                outputContent.textContent = capturedOutput;
            } else if (result !== undefined) {
                outputContent.textContent = String(result);
            } else {
                outputContent.textContent = 'Code exécuté avec succès (aucune sortie).';
            }
            
        } catch (err) {
            if (err.toString().includes('INPUT_REQUIRED')) {
                // Handle input request
                await handleInputRequest(code, outputContent, editorStatus);
                return;
            } else {
                throw err; // Re-throw other errors
            }
        }
        
        updateVariables();
        
    } catch (err) {
        console.error('Python execution error:', err);
        
        // Restore stdout and input in case of error
        pyodideInstance.runPython(`
sys.stdout = _stdout_backup
builtins.input = _input_backup
        `);
        
        let errorMsg = err.toString();
        
        // Clean up Pyodide error messages for better readability
        if (errorMsg.includes('PythonError:')) {
            errorMsg = errorMsg.replace('PythonError: ', '');
        }
        
        outputContent.textContent = (capturedOutput ? capturedOutput + '\n\n' : '') + 'ERREUR:\n' + errorMsg;
        editorStatus.textContent = 'Erreur';
    }
}

async function handleInputRequest(code, outputContent, editorStatus) {
    // Get the current prompt
    const prompt = pyodideInstance.runPython(`_input_queue[-1] if _input_queue else ""`);
    
    // Show interactive input
    outputContent.innerHTML = '';
    
    // Add the prompt to the output
    if (prompt) {
        const promptSpan = document.createElement('span');
        promptSpan.textContent = prompt;
        promptSpan.style.color = '#00ff00';
        outputContent.appendChild(promptSpan);
    }
    
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
        padding: 2px 4px;
        width: 200px;
    `;
    
    outputContent.appendChild(inputField);
    inputField.focus();
    
    // Wait for user input
    const userInput = await new Promise(resolve => {
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
                e.preventDefault();
                handleSubmit();
            }
        });
    });
    
    // Continue execution with the input
    try {
        pyodideInstance.runPython(`
# Add the response to the queue
_input_responses.append(${JSON.stringify(userInput)})

# Redefine input to return responses in order
def custom_input(prompt=""):
    if prompt:
        print(prompt, end="")
    if _input_responses:
        response = _input_responses.pop(0)
        print(response)
        return response
    return ""

builtins.input = custom_input
        `);
        
        // Re-execute the code
        const result = pyodideInstance.runPython(code);
        
        // Get the captured output
        const capturedOutput = pyodideInstance.runPython(`
captured = sys.stdout.getvalue()
sys.stdout = _stdout_backup
builtins.input = _input_backup
captured
        `);
        
        console.log('Python execution with input completed successfully');
        editorStatus.textContent = 'Terminé';
        
        // Display full output
        outputContent.textContent = capturedOutput || 'Code exécuté avec succès.';
        
        updateVariables();
        
    } catch (err) {
        console.error('Python execution error with input:', err);
        
        // Restore stdout and input
        pyodideInstance.runPython(`
sys.stdout = _stdout_backup
builtins.input = _input_backup
        `);
        
        let errorMsg = err.toString();
        if (errorMsg.includes('PythonError:')) {
            errorMsg = errorMsg.replace('PythonError: ', '');
        }
        
        outputContent.textContent = 'ERREUR:\n' + errorMsg;
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
    
    if (!pyodideInstance) {
        variablesContent.innerHTML = '<div class="variables-empty">Pyodide en cours de chargement...</div>';
        return;
    }
    
    try {
        // Get global variables from Pyodide - execute in a clean namespace
        const variablesData = pyodideInstance.runPython(`
# Create a clean namespace to avoid polluting globals
def get_user_variables():
    import json
    user_vars = {}
    
    # Get current globals 
    current_globals = dict(globals())
    
    # Define system/internal variables to exclude
    excluded_names = {
        '__name__', '__doc__', '__package__', '__loader__', '__spec__', '__annotations__', '__builtins__',
        'sys', 'builtins', 'json', 'StringIO', 'get_user_variables',
        '_stdout_backup', '_input_backup', '_input_queue', '_input_responses', 'custom_input',
        'user_vars', 'builtin_names', 'system_names', 'captured', 'current_globals', 'excluded_names'
    }
    
    # Get builtin names
    try:
        if hasattr(__builtins__, '__dict__'):
            builtin_names = set(__builtins__.__dict__.keys())
        elif hasattr(__builtins__, '__iter__'):
            builtin_names = set(dir(__builtins__))
        else:
            builtin_names = set()
    except:
        builtin_names = set()
    
    # Filter variables
    for name, value in current_globals.items():
        # Skip if it's internal, builtin, or callable (except user functions)
        if (name.startswith('_') or 
            name in excluded_names or 
            name in builtin_names or
            (callable(value) and not hasattr(value, '__code__'))):
            continue
            
        try:
            # Get the type name
            type_name = type(value).__name__
            
            # Convert value to string representation safely
            if isinstance(value, str):
                str_value = repr(value) if len(value) <= 50 else repr(value[:47]) + '...'
            elif isinstance(value, (int, float, bool)):
                str_value = str(value)
            elif isinstance(value, (list, tuple)):
                str_val = str(value)
                str_value = str_val if len(str_val) <= 50 else str_val[:47] + '...'
            elif isinstance(value, dict):
                str_val = str(value)
                str_value = str_val if len(str_val) <= 50 else str_val[:47] + '...'
            elif hasattr(value, '__code__'):  # User-defined function
                str_value = f'<function {name}>'
            else:
                str_value = f'<{type_name} object>'
                
            user_vars[name] = {
                'type': type_name,
                'value': str_value
            }
        except Exception as e:
            # Skip problematic variables
            continue
    
    return json.dumps(user_vars)

# Call the function and return result
get_user_variables()
        `);
        
        const variables = JSON.parse(variablesData);
        const variableList = Object.entries(variables);
        
        if (variableList.length === 0) {
            variablesContent.innerHTML = '<div class="variables-empty">Aucune variable définie. Exécutez du code pour voir les variables ici.</div>';
        } else {
            variablesContent.innerHTML = variableList.map(([name, data]) => `
                <div class="variable-item">
                    <div>
                        <span class="variable-name">${escapeHtml(name)}</span>
                        <span class="variable-type">${escapeHtml(data.type)}</span>
                    </div>
                    <div class="variable-value">${escapeHtml(data.value)}</div>
                </div>
            `).join('');
        }
    } catch (err) {
        console.error('Error refreshing variables:', err);
        variablesContent.innerHTML = `<div class="variables-empty">Erreur: ${err.message}</div>`;
    }
}

// Helper function to escape HTML
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}


// Initialize charger buttons with proper event listeners
function initChargerButtons() {
    // Find all charger buttons in the current document
    const chargerButtons = document.querySelectorAll('.code-load-button');
    
    chargerButtons.forEach(button => {
        // Remove any existing click listeners
        const newButton = button.cloneNode(true);
        button.parentNode.replaceChild(newButton, button);
        
        // Extract the code from the onclick attribute
        const onclickAttr = newButton.getAttribute('onclick');
        if (onclickAttr) {
            // Parse the code from the onclick attribute
            const match = onclickAttr.match(/loadCodeIntoConsole\(['"`](.*)['"`]\)/);
            if (match) {
                const code = match[1]
                    .replace(/\\n/g, '\n')
                    .replace(/\\'/g, "'")
                    .replace(/\\"/g, '"')
                    .replace(/\\\\/g, '\\');
                
                newButton.addEventListener('click', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    console.log('Charger button clicked, loading code:', code.substring(0, 50) + '...');
                    loadCodeIntoConsole(code);
                });
            }
        }
    });
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
window.showLessonSelection = showLessonSelection;
window.showLesson = showLesson;
window.toggleHint = toggleHint;
window.checkVariableQuiz = checkVariableQuiz;
window.checkTypeQuiz = checkTypeQuiz;
window.showConsole = showConsole;
window.hideConsole = hideConsole;
window.toggleConsole = toggleConsole;
window.clearConsole = clearConsole;

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