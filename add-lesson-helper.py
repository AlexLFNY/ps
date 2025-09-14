#!/usr/bin/env python3
"""
Helper script to assist with adding new lessons to the Python Seconde platform.
This script generates templates and provides guidance for consistent lesson integration.
"""

import os
import re
import sys

def escape_js_string(text):
    """Escape text for JavaScript string literals."""
    return text.replace("'", "\\'").replace("\n", "\\n").replace("\r", "\\r")

def create_lesson_structure(lesson_num, lesson_title, lesson_subtitle):
    """Generate the basic lesson structure."""
    
    print(f"🚀 Creating structure for Lesson {lesson_num}: {lesson_title}")
    
    # Create solution folder
    folder_name = f"lesson{lesson_num}"
    if not os.path.exists(folder_name):
        os.makedirs(folder_name)
        print(f"✅ Created folder: {folder_name}/")
    
    # Generate lesson data template
    lesson_data = f"""
// Lesson {lesson_num} Content Data
const lesson{lesson_num}Data = {{
    intro: {{
        icon: 'icon-intro',
        emoji: '📚',
        title: '{lesson_title} - Introduction',
        subtitle: 'Vue d\'ensemble du concept',
        content: `
            <div class="section-text">
                [AJOUTER_EXPLICATION_PRINCIPALE]
            </div>
            <div class="highlight-box">
                <strong>Points clés :</strong><br>
                • [POINT_1]<br>
                • [POINT_2]<br>
                • [POINT_3]
            </div>
            <div class="concept-animation">
                <h3 style="color: #ffd700; margin-bottom: 20px;">💡 Exemple concret</h3>
                <div class="practical-example">
                    <div class="example-title">🎯 Analogie pratique</div>
                    <p>[AJOUTER_ANALOGIE_CONCRETE]</p>
                </div>
            </div>
        `
    }},
    
    concept1: {{
        icon: 'icon-code',
        emoji: '🔧',
        title: '[TITRE_CONCEPT_1]',
        subtitle: '[SOUS_TITRE_CONCEPT_1]',
        content: `
            <div class="section-text">
                [EXPLICATION_CONCEPT_1]
            </div>
            <div class="code-block">
                <button class="code-load-button" onclick="loadCodeIntoConsole('[CODE_ECHAPPÉ]')">
                    🐍 Charger
                </button>
                <div class="code-content">
[CODE_AVEC_SYNTAXE_HIGHLIGHTING]
                </div>
            </div>
            <div class="highlight-box">
                <strong>À retenir :</strong><br>
                • [POINT_TECHNIQUE_1]<br>
                • [POINT_TECHNIQUE_2]
            </div>
        `
    }},
    
    exercises: {{
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
                <div class="exercise-title">[TITRE_EXERCICE_1]</div>
                <div class="exercise-desc">
                    [DESCRIPTION_EXERCICE_1]
                </div>
                <div class="exercise-steps">
                    <strong>Ce qu'il faut faire :</strong>
                    <ol>
                        <li>[ÉTAPE_1]</li>
                        <li>[ÉTAPE_2]</li>
                        <li>[ÉTAPE_3]</li>
                    </ol>
                </div>
                <div class="highlight-box">
                    <strong>Conseil !</strong><br>
                    [CONSEIL_PEDAGOGIQUE]
                </div>
                <div style="text-align: center; margin-top: 15px;">
                    <button class="hint-button" onclick="toggleHint('hint_{lesson_num}_1')" style="
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
                <div id="hint_{lesson_num}_1" class="hint-content" style="display: none; background: rgba(255, 215, 0, 0.1); border: 1px solid rgba(255, 215, 0, 0.3); border-radius: 8px; padding: 15px; margin-top: 15px;">
                    <strong>💡 Indice :</strong><br>
                    [INDICE_EXERCICE_1]
                </div>
            </div>
        `
    }}
}};"""

    # Generate script.js updates
    script_updates = f"""
// 📝 À AJOUTER dans script.js

// 1. Dans showLessonSelection(), ajouter ce tile après les autres :
<div class="lesson-tile" onclick="showLesson({lesson_num})">
    <div class="lesson-number">{lesson_num}</div>
    <div class="lesson-content">
        <div class="lesson-title">{lesson_title}</div>
        <div class="lesson-subtitle">{lesson_subtitle}</div>
    </div>
    <div class="tile-arrow">→</div>
</div>

// 2. Dans showLesson(), ajouter cette condition :
}} else if (lessonNumber === {lesson_num}) {{
    currentLessonData = lesson{lesson_num}Data;
    showLessonContent('Leçon {lesson_num} : {lesson_title}', getLessonConcepts(lesson{lesson_num}Data));
}}
"""

    # Save templates
    with open(f"lesson{lesson_num}_template.js", "w", encoding="utf-8") as f:
        f.write(lesson_data)
    
    with open(f"lesson{lesson_num}_script_updates.txt", "w", encoding="utf-8") as f:
        f.write(script_updates)
    
    # Create solution template
    solution_template = f"""# Leçon {lesson_num} - Exercice 1: [TITRE_EXERCICE]
# [DESCRIPTION_EXERCICE]

def exemple_fonction():
    \"\"\"
    [DESCRIPTION_FONCTION]
    
    Paramètres:
        [PARAMETRES]
    
    Retourne:
        [TYPE_RETOUR]: [DESCRIPTION_RETOUR]
    \"\"\"
    # TODO: Implémenter la solution
    pass

# Tests de la fonction
print("=== Tests ===")
# exemple_fonction()

# Version interactive
print("\\n=== Version interactive ===")
# input_utilisateur = input("Entrez votre valeur : ")
# resultat = exemple_fonction(input_utilisateur)
# print(f"Résultat : {{resultat}}")
"""
    
    with open(f"{folder_name}/exo1.py", "w", encoding="utf-8") as f:
        f.write(solution_template)
    
    print(f"✅ Generated templates:")
    print(f"   📄 lesson{lesson_num}_template.js")
    print(f"   📄 lesson{lesson_num}_script_updates.txt") 
    print(f"   📄 {folder_name}/exo1.py")
    
    # Create checklist
    checklist = f"""
# ✅ Checklist d'intégration - Leçon {lesson_num}

## Étape 1: Contenu
- [ ] Remplir lesson{lesson_num}_template.js avec le contenu réel
- [ ] Ajouter les concepts manquants (concept2, concept3, etc.)
- [ ] Créer les exemples de code avec syntaxe highlighting
- [ ] Échapper correctement les chaînes JavaScript

## Étape 2: Intégration  
- [ ] Copier le contenu dans content.js
- [ ] Appliquer les mises à jour de script.js
- [ ] Vérifier la syntaxe : `node -c content.js && node -c script.js`

## Étape 3: Exercices
- [ ] Créer tous les fichiers d'exercices dans {folder_name}/
- [ ] Tester chaque solution Python
- [ ] Vérifier les indices pédagogiques

## Étape 4: Tests
- [ ] Tester la navigation vers la leçon
- [ ] Vérifier l'ouverture des modales
- [ ] Tester les boutons "🐍 Charger"
- [ ] Valider le responsive design
- [ ] Contrôler sur plusieurs navigateurs

## Étape 5: Finalisation
- [ ] Supprimer les fichiers temporaires
- [ ] Commit des changements
- [ ] Déployer sur GitHub Pages
"""
    
    with open(f"lesson{lesson_num}_checklist.md", "w", encoding="utf-8") as f:
        f.write(checklist)
    
    print(f"   📋 lesson{lesson_num}_checklist.md")
    print(f"\n🎯 Prochaines étapes :")
    print(f"   1. Éditer lesson{lesson_num}_template.js avec votre contenu")
    print(f"   2. Suivre lesson{lesson_num}_checklist.md")
    print(f"   3. Appliquer les mises à jour dans les fichiers principaux")

def main():
    """Main function to run the lesson helper."""
    if len(sys.argv) != 4:
        print("Usage: python add-lesson-helper.py <lesson_number> <lesson_title> <lesson_subtitle>")
        print("Exemple: python add-lesson-helper.py 4 'Les Boucles' 'Répéter des actions'")
        sys.exit(1)
    
    lesson_num = sys.argv[1]
    lesson_title = sys.argv[2]
    lesson_subtitle = sys.argv[3]
    
    # Validate lesson number
    try:
        int(lesson_num)
    except ValueError:
        print("❌ Le numéro de leçon doit être un entier")
        sys.exit(1)
    
    create_lesson_structure(lesson_num, lesson_title, lesson_subtitle)

if __name__ == "__main__":
    main()