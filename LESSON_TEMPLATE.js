// LESSON TEMPLATE - Copy this structure for new lessons
// Replace all [LESSON_NUMBER], [LESSON_TITLE], etc. with actual values

const lesson[LESSON_NUMBER]Data = {
    // Concept 1: Introduction/Overview
    intro: {
        icon: 'icon-[CONCEPT_NAME]',     // CSS class for icon
        emoji: '[EMOJI]',                // Single emoji for the concept
        title: '[CONCEPT_TITLE]',        // Main title for the concept
        subtitle: '[CONCEPT_SUBTITLE]',  // Brief description
        content: `
            <div class="section-text">
                [MAIN_EXPLANATION_TEXT]
            </div>
            <div class="highlight-box">
                <strong>[HIGHLIGHT_TITLE]</strong><br>
                [HIGHLIGHT_CONTENT]
            </div>
            <div class="concept-animation">
                <h3 style="color: #ffd700; margin-bottom: 20px;">[ANIMATION_TITLE]</h3>
                <div class="practical-example">
                    <div class="example-title">[EXAMPLE_TITLE]</div>
                    <p>[EXAMPLE_CONTENT]</p>
                </div>
            </div>
        `
    },
    
    // Concept 2: Basic Implementation
    basics: {
        icon: 'icon-[CONCEPT_NAME]',
        emoji: '[EMOJI]',
        title: '[CONCEPT_TITLE]',
        subtitle: '[CONCEPT_SUBTITLE]',
        content: `
            <div class="section-text">
                [EXPLANATION_TEXT]
            </div>
            <div class="code-block">
                <button class="code-load-button" onclick="loadCodeIntoConsole('[ESCAPED_CODE]')">
                    🐍 Charger
                </button>
                <div class="code-content">
[SYNTAX_HIGHLIGHTED_CODE]
                </div>
            </div>
            <div class="highlight-box">
                <strong>[KEY_POINTS_TITLE]</strong><br>
                • [POINT_1]<br>
                • [POINT_2]<br>
                • [POINT_3]
            </div>
        `
    },
    
    // Concept 3: Advanced Features
    advanced: {
        icon: 'icon-[CONCEPT_NAME]',
        emoji: '[EMOJI]',
        title: '[CONCEPT_TITLE]',
        subtitle: '[CONCEPT_SUBTITLE]',
        content: `
            <div class="section-text">
                [EXPLANATION_TEXT]
            </div>
            <div class="code-block">
                <button class="code-load-button" onclick="loadCodeIntoConsole('[ESCAPED_CODE]')">
                    🐍 Charger
                </button>
                <div class="code-content">
[SYNTAX_HIGHLIGHTED_CODE]
                </div>
            </div>
        `
    },
    
    // Exercises Section
    exercises: {
        icon: 'icon-exercises',
        emoji: '💪',
        title: 'Exercices d\'Application',
        subtitle: 'Mettre en pratique',
        content: `
            <div class="section-text">
                <strong>Exercices Faciles</strong>
            </div>
            
            <div class="exercise-card">
                <div class="exercise-difficulty">Facile</div>
                <div class="exercise-title">[EXERCISE_TITLE]</div>
                <div class="exercise-desc">
                    [EXERCISE_DESCRIPTION]
                </div>
                <div class="exercise-steps">
                    <strong>Ce qu'il faut faire :</strong>
                    <ol>
                        <li>[STEP_1]</li>
                        <li>[STEP_2]</li>
                        <li>[STEP_3]</li>
                    </ol>
                </div>
                <div class="highlight-box">
                    <strong>[TIP_TITLE]</strong><br>
                    [TIP_CONTENT]
                </div>
                <div style="text-align: center; margin-top: 15px;">
                    <button class="hint-button" onclick="toggleHint('hint_[LESSON_NUMBER]_[EXERCISE_NUMBER]')" style="
                        background: rgba(255, 215, 0, 0.2);
                        border: 2px solid rgba(255, 215, 0, 0.4);
                        border-radius: 8px;
                        padding: 8px 16px;
                        color: #ffd700;
                        cursor: pointer;
                        font-size: 0.9rem;
                        font-weight: 600;
                        transition: all 0.3s ease;
                    " onmouseover="this.style.background='rgba(255,215,0,0.3)'" onmouseout="this.style.background='rgba(255,215,0,0.2)'">
                        💡 Indice
                    </button>
                </div>
                <div id="hint_[LESSON_NUMBER]_[EXERCISE_NUMBER]" class="hint-content" style="display: none; background: rgba(255, 215, 0, 0.1); border: 1px solid rgba(255, 215, 0, 0.3); border-radius: 8px; padding: 15px; margin-top: 15px;">
                    <strong>💡 Indice :</strong><br>
                    [HINT_CONTENT]
                </div>
            </div>
            
            <!-- Repeat for more exercises -->
        `
    }
};