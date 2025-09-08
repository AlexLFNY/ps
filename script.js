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
});