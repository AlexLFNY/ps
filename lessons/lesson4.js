// Lesson 4: Les Boucles - Répéter des Actions (Partie 1)
// Contenu éducatif pour l'apprentissage des boucles while en Python

export const lesson4Data = {
    intro: {
        icon: 'icon-intro',
        emoji: '🔄',
        title: 'Pourquoi utiliser des Boucles ?',
        subtitle: 'Éviter la répétition',
        content: `
            <div class="section-text">
                Imaginez que vous deviez afficher <strong>"Bonjour !"</strong> 100 fois.
                Écrire <code>print("Bonjour !")</code> 100 fois serait fastidieux et inefficace.
                Les boucles permettent d'exécuter le même bloc de code plusieurs fois de suite, de manière automatique.
            </div>
            <div class="concept-animation">
                <h3 style="color: #ffd700; margin-bottom: 20px;">💡 Concept : Répétition automatique</h3>
                <div class="loop-demo" style="
                    display: grid;
                    grid-template-columns: 1fr auto 1fr;
                    gap: 25px;
                    align-items: center;
                    padding: 25px;
                    background: linear-gradient(135deg, rgba(255, 107, 107, 0.1), rgba(255, 165, 0, 0.1));
                    border-radius: 15px;
                    border: 2px solid rgba(255, 215, 0, 0.3);
                    margin: 20px 0;
                ">
                    <div class="code-repetition" style="
                        background: rgba(255, 107, 107, 0.15);
                        padding: 20px;
                        border-radius: 12px;
                        border: 2px solid rgba(255, 107, 107, 0.3);
                        text-align: center;
                    ">
                        <div style="color: #ff6b6b; font-weight: bold; margin-bottom: 12px; font-size: 0.9rem;">❌ RÉPÉTITIF</div>
                        <div class="repetition-item" style="
                            font-family: 'JetBrains Mono', monospace;
                            color: #ff9999;
                            margin: 8px 0;
                            font-size: 0.85rem;
                            background: rgba(0,0,0,0.3);
                            padding: 6px 10px;
                            border-radius: 6px;
                        ">print("Bonjour !")</div>
                        <div class="repetition-item" style="
                            font-family: 'JetBrains Mono', monospace;
                            color: #ff9999;
                            margin: 8px 0;
                            font-size: 0.85rem;
                            background: rgba(0,0,0,0.3);
                            padding: 6px 10px;
                            border-radius: 6px;
                        ">print("Bonjour !")</div>
                        <div class="repetition-item" style="
                            font-family: 'JetBrains Mono', monospace;
                            color: #ff9999;
                            margin: 8px 0;
                            font-size: 0.85rem;
                            background: rgba(0,0,0,0.3);
                            padding: 6px 10px;
                            border-radius: 6px;
                        ">print("Bonjour !")</div>
                        <div style="color: #ffaaaa; font-style: italic; margin-top: 15px; font-size: 0.8rem;">... 97 fois de plus ...</div>
                    </div>
                    <div class="arrow-flow" style="
                        font-size: 2rem;
                        color: #ffd700;
                        font-weight: bold;
                        text-shadow: 0 0 10px rgba(255, 215, 0, 0.5);
                        animation: pulse 2s infinite;
                    ">→</div>
                    <div class="loop-solution" style="
                        background: rgba(76, 175, 80, 0.15);
                        padding: 20px;
                        border-radius: 12px;
                        border: 2px solid rgba(76, 175, 80, 0.4);
                        text-align: center;
                    ">
                        <div style="color: #4caf50; font-weight: bold; margin-bottom: 12px; font-size: 0.9rem;">✅ EFFICACE</div>
                        <div style="
                            font-family: 'JetBrains Mono', monospace;
                            color: #66bb6a;
                            text-align: left;
                            background: rgba(0,0,0,0.3);
                            padding: 15px;
                            border-radius: 8px;
                            font-size: 0.85rem;
                            line-height: 1.4;
                        ">
                            <span style="color: #81c784;">compteur</span> = <span style="color: #ffcc02;">1</span><br>
                            <span style="color: #66bb6a;">while</span> <span style="color: #81c784;">compteur</span> <= <span style="color: #ffcc02;">100</span>:<br>
                            &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #66bb6a;">print</span>(<span style="color: #a5d6a7;">"Bonjour !"</span>)<br>
                            &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #81c784;">compteur</span> += <span style="color: #ffcc02;">1</span>
                        </div>
                    </div>
                </div>
                <div style="
                    text-align: center;
                    margin-top: 20px;
                    padding: 15px;
                    background: rgba(255, 215, 0, 0.1);
                    border: 2px solid rgba(255, 215, 0, 0.3);
                    border-radius: 10px;
                ">
                    <p style="color: #ffd700; font-size: 1.1rem; font-weight: 600; margin: 0;">
                        🎯 Avec une boucle, 4 lignes remplacent 100 !
                    </p>
                </div>
            </div>
            <div class="code-block">
                <button class="code-load-button" onclick="loadCodeIntoConsole('# Exemple : Afficher \\'Bonjour !\\' 100 fois avec une boucle\\ncompteur = 1\\nwhile compteur <= 100:\\n    print(\\'Bonjour !\\')\\n    compteur += 1\\nprint(\\'Terminé ! J\\'ai affiché 100 fois Bonjour.\\')\\n')">
                    🐍 Charger
                </button>
                <div class="code-content">
<span class="code-comment"># Exemple : Afficher 'Bonjour !' 100 fois avec une boucle</span>
<span class="code-keyword">compteur</span> = <span class="code-number">1</span>
<span class="code-keyword">while</span> compteur <= <span class="code-number">100</span>:
    <span class="code-keyword">print</span>(<span class="code-string">'Bonjour !'</span>)
    compteur += <span class="code-number">1</span>
<span class="code-keyword">print</span>(<span class="code-string">'Terminé ! J\'ai affiché 100 fois Bonjour.'</span>)
                </div>
            </div>
            <div class="console-output">
                Bonjour !<br>
                Bonjour !<br>
                Bonjour !<br>
                ... (97 lignes de plus) ...<br>
                Bonjour !<br>
                Terminé ! J'ai affiché 100 fois Bonjour.
            </div>
            <div class="highlight-box">
                <strong>Avantages des boucles :</strong>
                <ul style="margin-top: 10px; padding-left: 20px;">
                    <li>Éviter la répétition de code</li>
                    <li>Traiter des données de taille variable</li>
                    <li>Créer des programmes interactifs</li>
                    <li>Automatiser des tâches répétitives</li>
                </ul>
            </div>
        `
    },
    while_basics: {
        icon: 'icon-loop',
        emoji: '🔁',
        title: 'La Boucle while',
        subtitle: 'Tant que...',
        content: `
            <div class="section-text">
                La boucle <code>while</code> (qui signifie "tant que" en anglais) est la plus simple à comprendre.
                Elle exécute un bloc de code <strong>tant qu'une condition est vraie</strong> (True).
            </div>
            <div class="concept-animation">
                <h3 style="color: #ffd700; margin-bottom: 20px;">🎮 Analogie : Jeu vidéo</h3>
                <div class="game-analogy">
                    <div class="game-status">
                        <div class="health-bar">
                            <div class="health-fill" style="width: 80%;"></div>
                        </div>
                        <div style="color: #4caf50; font-weight: bold;">Points de vie : 80/100</div>
                    </div>
                    <div class="game-logic">
                        <div style="color: #ffd700; font-weight: bold;">Tant que points_de_vie > 0 :</div>
                        <div style="color: #ccc; margin-left: 20px;">→ Le joueur peut continuer</div>
                        <div style="color: #ff6b6b; font-weight: bold; margin-top: 10px;">Si points_de_vie = 0 :</div>
                        <div style="color: #ccc; margin-left: 20px;">→ Game Over !</div>
                    </div>
                </div>
                <p style="color: #ccc; font-size: 0.9rem;">La boucle continue tant que la condition est respectée</p>
            </div>
            <div class="highlight-box">
                <strong>Syntaxe de base :</strong><br>
                <code style="color: #ffd700; font-family: monospace;">
                    while condition_est_vraie:<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;# Bloc de code à répéter<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;# Il faut prévoir un moyen de rendre la condition fausse !
                </code>
            </div>
            <div class="code-block">
                <button class="code-load-button" onclick="loadCodeIntoConsole('# Exemple simple de boucle while\\ncompteur = 1\\nwhile compteur <= 3:\\n    print(f\\'Tour numéro {compteur}\\')\\n    compteur += 1\\nprint(\\'Boucle terminée !\\')\\n')">
                    🐍 Charger
                </button>
                <div class="code-content">
<span class="code-comment"># Exemple simple de boucle while</span>
<span class="code-keyword">compteur</span> = <span class="code-number">1</span>
<span class="code-keyword">while</span> compteur <= <span class="code-number">3</span>:
    <span class="code-keyword">print</span>(<span class="code-string">f'Tour numéro {compteur}'</span>)
    compteur += <span class="code-number">1</span>
<span class="code-keyword">print</span>(<span class="code-string">'Boucle terminée !'</span>)
                </div>
            </div>
            <div class="console-output">
                Tour numéro 1<br>
                Tour numéro 2<br>
                Tour numéro 3<br>
                Boucle terminée !
            </div>
        `
    },
    loop_anatomy: {
        icon: 'icon-structure',
        emoji: '🧩',
        title: 'Anatomie d\'une Boucle',
        subtitle: 'Les 4 étapes essentielles',
        content: `
            <div class="section-text">
                Toute boucle <code>while</code> bien construite suit 4 étapes essentielles.
                Regardons comment afficher les nombres de 1 à 5.
            </div>
            <div class="concept-animation">
                <h3 style="color: #ffd700; margin-bottom: 20px;">🔢 Les 4 étapes d'une boucle</h3>
                <div class="loop-steps">
                    <div class="step-item">
                        <div class="step-number">1</div>
                        <div class="step-content">
                            <div class="step-title">Initialisation</div>
                            <div class="step-desc">Créer la variable de contrôle</div>
                            <code>compteur = 1</code>
                        </div>
                    </div>
                    <div class="step-item">
                        <div class="step-number">2</div>
                        <div class="step-content">
                            <div class="step-title">Condition</div>
                            <div class="step-desc">Tester si on continue</div>
                            <code>while compteur <= 5:</code>
                        </div>
                    </div>
                    <div class="step-item">
                        <div class="step-number">3</div>
                        <div class="step-content">
                            <div class="step-title">Corps</div>
                            <div class="step-desc">Le code à répéter</div>
                            <code>print(f"Compteur : {compteur}")</code>
                        </div>
                    </div>
                    <div class="step-item">
                        <div class="step-number">4</div>
                        <div class="step-content">
                            <div class="step-title">Modification</div>
                            <div class="step-desc">Changer la variable</div>
                            <code>compteur += 1</code>
                        </div>
                    </div>
                </div>
            </div>
            <div class="code-block">
                <button class="code-load-button" onclick="loadCodeIntoConsole('# Exemple détaillé avec les 4 étapes\\n# 1. Initialisation\\ncompteur = 1\\n\\n# 2. Condition\\nwhile compteur <= 5:\\n    # 3. Corps de la boucle\\n    print(f\\'Le compteur est à : {compteur}\\')\\n    \\n    # 4. Modification (TRÈS IMPORTANT !)\\n    compteur = compteur + 1  # ou compteur += 1\\n\\nprint(\\'La boucle est terminée !\\')\\n')">
                    🐍 Charger
                </button>
                <div class="code-content">
<span class="code-comment"># Exemple détaillé avec les 4 étapes</span>
<span class="code-comment"># 1. Initialisation</span>
<span class="code-keyword">compteur</span> = <span class="code-number">1</span>

<span class="code-comment"># 2. Condition</span>
<span class="code-keyword">while</span> compteur <= <span class="code-number">5</span>:
    <span class="code-comment"># 3. Corps de la boucle</span>
    <span class="code-keyword">print</span>(<span class="code-string">f'Le compteur est à : {compteur}'</span>)

    <span class="code-comment"># 4. Modification (TRÈS IMPORTANT !)</span>
    compteur = compteur + <span class="code-number">1</span>  <span class="code-comment"># ou compteur += 1</span>

<span class="code-keyword">print</span>(<span class="code-string">'La boucle est terminée !'</span>)
                </div>
            </div>
            <div class="console-output">
                Le compteur est à : 1<br>
                Le compteur est à : 2<br>
                Le compteur est à : 3<br>
                Le compteur est à : 4<br>
                Le compteur est à : 5<br>
                La boucle est terminée !
            </div>
            <div class="warning-banner">
                <strong>Règle d'or :</strong> Assurez-vous toujours qu'il existe un moyen pour que la condition de la boucle devienne fausse !
            </div>
        `
    },
    infinite_loop: {
        icon: 'icon-warning',
        emoji: '⚠️',
        title: 'Le Piège : La Boucle Infinie',
        subtitle: 'À éviter absolument !',
        content: `
            <div class="section-text">
                Que se passe-t-il si on oublie l'étape de modification ? On obtient une <strong>boucle infinie</strong> !
                Le programme ne s'arrêtera jamais car la condition restera toujours vraie.
            </div>
            <div class="concept-animation">
                <h3 style="color: #ff6b6b; margin-bottom: 20px;">💀 Danger : Code qui ne s'arrête jamais</h3>
                <div class="danger-demo">
                    <div class="infinite-code">
                        <div style="color: #ff6b6b; font-weight: bold;">❌ MAUVAIS EXEMPLE</div>
                        <div style="font-family: monospace; background: rgba(255, 107, 107, 0.1); padding: 10px; border-radius: 8px;">
                            compteur = 1<br>
                            while compteur &lt;= 5:<br>
                            &nbsp;&nbsp;&nbsp;&nbsp;print("Au secours, je suis bloqué !")<br>
                            &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #ff6b6b;"># On a oublié : compteur += 1</span>
                        </div>
                    </div>
                    <div class="infinite-result">
                        <div style="color: #ff6b6b; font-weight: bold;">Résultat :</div>
                        <div style="color: #ccc; font-style: italic;">
                            Au secours, je suis bloqué !<br>
                            Au secours, je suis bloqué !<br>
                            Au secours, je suis bloqué !<br>
                            <span style="color: #ff6b6b;">... à l'infini ...</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="warning-banner">
                <strong>Comment arrêter une boucle infinie :</strong><br>
                Dans la console Python, utilisez le raccourci <kbd>Ctrl + C</kbd> pour forcer l'arrêt du programme.
            </div>
            <div class="code-block">
                <button class="code-load-button" onclick="loadCodeIntoConsole('# Exemple CORRECT - Éviter la boucle infinie\\ncompteur = 1\\nwhile compteur <= 3:\\n    print(f\\'Iteration {compteur} - Tout va bien !\\')\\n    compteur += 1  # N\\'oubliez JAMAIS cette ligne !\\nprint(\\'Boucle terminée correctement\\')\\n')">
                    🐍 Charger
                </button>
                <div class="code-content">
<span class="code-comment"># Exemple CORRECT - Éviter la boucle infinie</span>
<span class="code-keyword">compteur</span> = <span class="code-number">1</span>
<span class="code-keyword">while</span> compteur <= <span class="code-number">3</span>:
    <span class="code-keyword">print</span>(<span class="code-string">f'Itération {compteur} - Tout va bien !'</span>)
    compteur += <span class="code-number">1</span>  <span class="code-comment"># N'oubliez JAMAIS cette ligne !</span>
<span class="code-keyword">print</span>(<span class="code-string">'Boucle terminée correctement'</span>)
                </div>
            </div>
            <div class="quiz-container">
                <div class="quiz-question">🧠 Quiz : Que faut-il toujours faire dans une boucle while ?</div>
                <div class="quiz-options">
                    <div class="quiz-option" data-correct="false">Utiliser print() dans le corps</div>
                    <div class="quiz-option" data-correct="true">Modifier la variable de condition</div>
                    <div class="quiz-option" data-correct="false">Utiliser des f-strings</div>
                    <div class="quiz-option" data-correct="false">Initialiser à 0</div>
                </div>
                <button class="quiz-submit-btn" onclick="checkInfiniteLoopQuiz()">Vérifier</button>
                <div class="quiz-feedback" id="infiniteLoopQuizFeedback"></div>
            </div>
        `
    },
    interactive_menu: {
        icon: 'icon-menu',
        emoji: '📋',
        title: 'Menu Interactif',
        subtitle: 'Programmes qui tournent',
        content: `
            <div class="section-text">
                Une boucle <code>while</code> est parfaite pour des programmes qui doivent tourner
                jusqu'à ce que l'utilisateur décide de les quitter. Voici un exemple de menu interactif.
            </div>
            <div class="code-block">
                <button class="code-load-button" onclick="loadCodeIntoConsole('# Menu interactif avec boucle while\\n# On initialise la variable de choix avant la boucle\\nchoix = \\\"\\\"\\n\\n# La boucle continue tant que l\\'utilisateur ne tape pas \\\"quitter\\\"\\nwhile choix != \\\"quitter\\\":\\n    print(\\\"\\\\n--- MENU ---\\\")\\n    print(\\\"1. Dire bonjour\\\")\\n    print(\\\"2. Dire au revoir\\\")\\n    print(\\\"3. Calculer 2 + 2\\\")\\n    print(\\\"Tapez \\'quitter\\' pour arrêter.\\\")\\n    \\n    choix = input(\\\"Votre choix ? \\\")\\n\\n    if choix == \\\"1\\\":\\n        print(\\\"Bonjour à vous !\\\")\\n    elif choix == \\\"2\\\":\\n        print(\\\"Au revoir !\\\")\\n    elif choix == \\\"3\\\":\\n        print(\\\"2 + 2 = 4\\\")\\n    elif choix == \\\"quitter\\\":\\n        print(\\\"Programme terminé.\\\")\\n    else:\\n        print(\\\"Choix invalide, veuillez réessayer.\\\")\\n')">
                    🐍 Charger
                </button>
                <div class="code-content">
<span class="code-comment"># Menu interactif avec boucle while</span>
<span class="code-comment"># On initialise la variable de choix avant la boucle</span>
<span class="code-keyword">choix</span> = <span class="code-string">""</span>

<span class="code-comment"># La boucle continue tant que l'utilisateur ne tape pas "quitter"</span>
<span class="code-keyword">while</span> choix != <span class="code-string">"quitter"</span>:
    <span class="code-keyword">print</span>(<span class="code-string">"\n--- MENU ---"</span>)
    <span class="code-keyword">print</span>(<span class="code-string">"1. Dire bonjour"</span>)
    <span class="code-keyword">print</span>(<span class="code-string">"2. Dire au revoir"</span>)
    <span class="code-keyword">print</span>(<span class="code-string">"3. Calculer 2 + 2"</span>)
    <span class="code-keyword">print</span>(<span class="code-string">"Tapez 'quitter' pour arrêter."</span>)

    choix = <span class="code-keyword">input</span>(<span class="code-string">"Votre choix ? "</span>)

    <span class="code-keyword">if</span> choix == <span class="code-string">"1"</span>:
        <span class="code-keyword">print</span>(<span class="code-string">"Bonjour à vous !"</span>)
    <span class="code-keyword">elif</span> choix == <span class="code-string">"2"</span>:
        <span class="code-keyword">print</span>(<span class="code-string">"Au revoir !"</span>)
    <span class="code-keyword">elif</span> choix == <span class="code-string">"3"</span>:
        <span class="code-keyword">print</span>(<span class="code-string">"2 + 2 = 4"</span>)
    <span class="code-keyword">elif</span> choix == <span class="code-string">"quitter"</span>:
        <span class="code-keyword">print</span>(<span class="code-string">"Programme terminé."</span>)
    <span class="code-keyword">else</span>:
        <span class="code-keyword">print</span>(<span class="code-string">"Choix invalide, veuillez réessayer."</span>)
                </div>
            </div>
            <div class="highlight-box">
                <strong>Points clés :</strong>
                <ul style="margin-top: 10px; padding-left: 20px;">
                    <li>La variable <code>choix</code> est initialisée avant la boucle</li>
                    <li>La condition vérifie si l'utilisateur veut quitter</li>
                    <li>Le choix est demandé à chaque tour de boucle</li>
                    <li>La boucle s'arrête quand choix = "quitter"</li>
                </ul>
            </div>
            <div class="console-output">
                <strong>Exemple d'exécution :</strong><br>
                --- MENU ---<br>
                1. Dire bonjour<br>
                2. Dire au revoir<br>
                3. Calculer 2 + 2<br>
                Tapez 'quitter' pour arrêter.<br>
                Votre choix ? 1<br>
                Bonjour à vous !<br><br>
                --- MENU ---<br>
                ...<br>
                Votre choix ? quitter<br>
                Programme terminé.
            </div>
        `
    },
    exercises: {
        icon: 'icon-exercises',
        emoji: '💻',
        title: 'Exercices d\'Application',
        subtitle: 'Pratiquez les boucles while !',
        content: `
            <div class="section-text">
                Voici 6 exercices progressifs pour maîtriser les boucles <code>while</code>. Commencez par les faciles !
            </div>
            <div class="exercises-grid">
                <div class="exercise-card">
                    <div class="exercise-difficulty">Facile</div>
                    <div class="exercise-title">Décompte de Fusée</div>
                    <div class="exercise-desc">
                        Écrivez un programme qui utilise une boucle while pour compter de 10 à 1, puis qui affiche "Décollage !".
                    </div>

                    <div class="exercise-steps">
                        <strong>Ce qu'il faut faire :</strong>
                        <ol>
                            <li>Initialiser <code>compteur = 10</code></li>
                            <li>Boucle tant que <code>compteur >= 1</code></li>
                            <li>Afficher le compteur</li>
                            <li>Décrémenter le compteur</li>
                            <li>Afficher "Décollage !" après la boucle</li>
                        </ol>
                    </div>
                    <div style="text-align: center; margin-top: 15px;">
                        <button class="hint-button" onclick="toggleHint('hint4_1')" style="
                            background: rgba(255, 215, 0, 0.2);
                            border: 2px solid rgba(255, 215, 0, 0.4);
                            border-radius: 8px;
                            padding: 8px 16px;
                            color: #ffd700;
                            cursor: pointer;
                            font-size: 0.9rem;
                            font-weight: 600;
                        ">💡 Indice</button>
                    </div>
                    <div id="hint4_1" class="hint-content" style="display: none; background: rgba(255, 215, 0, 0.1); border: 2px solid rgba(255, 215, 0, 0.3); border-radius: 12px; padding: 15px; margin-top: 15px; color: #ffd700;">
                        🔍 <strong>Indice :</strong> N'oubliez pas de décrémenter avec <code>compteur -= 1</code> ou <code>compteur = compteur - 1</code>.
                    </div>
                    <div class="console-output">
                        <strong>Résultat attendu :</strong><br>
                        10<br>9<br>8<br>7<br>6<br>5<br>4<br>3<br>2<br>1<br>Décollage !
                    </div>
                </div>

                <div class="exercise-card">
                    <div class="exercise-difficulty">Facile</div>
                    <div class="exercise-title">Table de Multiplication</div>
                    <div class="exercise-desc">
                        Demandez un nombre à l'utilisateur. Utilisez une boucle while pour afficher sa table de multiplication de 1 à 10.
                    </div>

                    <div class="exercise-steps">
                        <strong>Ce qu'il faut faire :</strong>
                        <ol>
                            <li>Demander le nombre avec <code>input()</code></li>
                            <li>Convertir en entier avec <code>int()</code></li>
                            <li>Compteur de 1 à 10</li>
                            <li>Afficher "nombre x compteur = résultat"</li>
                        </ol>
                    </div>
                    <div style="text-align: center; margin-top: 15px;">
                        <button class="hint-button" onclick="toggleHint('hint4_2')" style="
                            background: rgba(255, 215, 0, 0.2);
                            border: 2px solid rgba(255, 215, 0, 0.4);
                            border-radius: 8px;
                            padding: 8px 16px;
                            color: #ffd700;
                            cursor: pointer;
                            font-size: 0.9rem;
                            font-weight: 600;
                        ">💡 Indice</button>
                    </div>
                    <div id="hint4_2" class="hint-content" style="display: none; background: rgba(255, 215, 0, 0.1); border: 2px solid rgba(255, 215, 0, 0.3); border-radius: 12px; padding: 15px; margin-top: 15px; color: #ffd700;">
                        🔍 <strong>Indice :</strong> Utilisez <code>print(f"{nombre} x {i} = {nombre * i}")</code> dans la boucle.
                    </div>
                    <div class="console-output">
                        <strong>Exemple (pour 7) :</strong><br>
                        7 x 1 = 7<br>
                        7 x 2 = 14<br>
                        7 x 3 = 21<br>
                        ... jusqu'à 10
                    </div>
                </div>

                <div class="exercise-card">
                    <div class="exercise-difficulty">Moyen</div>
                    <div class="exercise-title">Calculateur de Somme</div>
                    <div class="exercise-desc">
                        Demandez des nombres à l'utilisateur les uns après les autres. Chaque nombre est ajouté à une somme totale. La boucle s'arrête quand l'utilisateur entre 0. Affichez la somme finale.
                    </div>

                    <div class="exercise-steps">
                        <strong>Ce qu'il faut faire :</strong>
                        <ol>
                            <li>Initialiser <code>somme = 0</code> et <code>nombre = 1</code></li>
                            <li>Boucle tant que <code>nombre != 0</code></li>
                            <li>Demander un nombre</li>
                            <li>Si différent de 0, l'ajouter à la somme</li>
                            <li>Afficher la somme finale</li>
                        </ol>
                    </div>
                    <div style="text-align: center; margin-top: 15px;">
                        <button class="hint-button" onclick="toggleHint('hint4_3')" style="
                            background: rgba(255, 215, 0, 0.2);
                            border: 2px solid rgba(255, 215, 0, 0.4);
                            border-radius: 8px;
                            padding: 8px 16px;
                            color: #ffd700;
                            cursor: pointer;
                            font-size: 0.9rem;
                            font-weight: 600;
                        ">💡 Indice</button>
                    </div>
                    <div id="hint4_3" class="hint-content" style="display: none; background: rgba(255, 215, 0, 0.1); border: 2px solid rgba(255, 215, 0, 0.3); border-radius: 12px; padding: 15px; margin-top: 15px; color: #ffd700;">
                        🔍 <strong>Indice :</strong> N'ajoutez le nombre à la somme que s'il n'est pas égal à 0.
                    </div>
                    <div class="console-output">
                        <strong>Exemple :</strong><br>
                        Entrez un nombre (0 pour arrêter) : 5<br>
                        Entrez un nombre (0 pour arrêter) : 3<br>
                        Entrez un nombre (0 pour arrêter) : 7<br>
                        Entrez un nombre (0 pour arrêter) : 0<br>
                        Somme totale : 15
                    </div>
                </div>

                <div class="exercise-card">
                    <div class="exercise-difficulty">Avancé</div>
                    <div class="exercise-title">Calcul de Factorielle</div>
                    <div class="exercise-desc">
                        La factorielle de n (notée n!) est le produit de tous les entiers de 1 à n.
                        Par exemple, 5! = 1 × 2 × 3 × 4 × 5 = 120.
                    </div>

                    <div class="exercise-steps">
                        <strong>Ce qu'il faut faire :</strong>
                        <ol>
                            <li>Demander un nombre entier positif</li>
                            <li>Initialiser <code>factorielle = 1</code> et <code>i = 1</code></li>
                            <li>Boucle tant que <code>i <= nombre</code></li>
                            <li>Multiplier factorielle par i</li>
                            <li>Incrémenter i</li>
                        </ol>
                    </div>
                    <div style="text-align: center; margin-top: 15px;">
                        <button class="hint-button" onclick="toggleHint('hint4_4')" style="
                            background: rgba(255, 215, 0, 0.2);
                            border: 2px solid rgba(255, 215, 0, 0.4);
                            border-radius: 8px;
                            padding: 8px 16px;
                            color: #ffd700;
                            cursor: pointer;
                            font-size: 0.9rem;
                            font-weight: 600;
                        ">💡 Indice</button>
                    </div>
                    <div id="hint4_4" class="hint-content" style="display: none; background: rgba(255, 215, 0, 0.1); border: 2px solid rgba(255, 215, 0, 0.3); border-radius: 12px; padding: 15px; margin-top: 15px; color: #ffd700;">
                        🔍 <strong>Indice :</strong> Utilisez <code>factorielle *= i</code> qui équivaut à <code>factorielle = factorielle * i</code>.
                    </div>
                    <div class="console-output">
                        <strong>Exemple :</strong><br>
                        Entrez un nombre : 5<br>
                        5! = 120
                    </div>
                </div>

                <div class="exercise-card">
                    <div class="exercise-difficulty">Avancé</div>
                    <div class="exercise-title">Conjecture de Collatz</div>
                    <div class="exercise-desc">
                        Partant d'un nombre, si il est pair on le divise par 2, si il est impair on le multiplie par 3 et on ajoute 1. On répète jusqu'à atteindre 1.
                    </div>

                    <div class="exercise-steps">
                        <strong>Ce qu'il faut faire :</strong>
                        <ol>
                            <li>Demander le nombre de départ</li>
                            <li>Initialiser <code>etapes = 0</code></li>
                            <li>Tant que <code>nombre != 1</code></li>
                            <li>Si pair : <code>nombre //= 2</code></li>
                            <li>Si impair : <code>nombre = nombre * 3 + 1</code></li>
                            <li>Afficher chaque valeur et compter les étapes</li>
                        </ol>
                    </div>
                    <div style="text-align: center; margin-top: 15px;">
                        <button class="hint-button" onclick="toggleHint('hint4_5')" style="
                            background: rgba(255, 215, 0, 0.2);
                            border: 2px solid rgba(255, 215, 0, 0.4);
                            border-radius: 8px;
                            padding: 8px 16px;
                            color: #ffd700;
                            cursor: pointer;
                            font-size: 0.9rem;
                            font-weight: 600;
                        ">💡 Indice</button>
                    </div>
                    <div id="hint4_5" class="hint-content" style="display: none; background: rgba(255, 215, 0, 0.1); border: 2px solid rgba(255, 215, 0, 0.3); border-radius: 12px; padding: 15px; margin-top: 15px; color: #ffd700;">
                        🔍 <strong>Indice :</strong> Utilisez <code>nombre % 2 == 0</code> pour tester si le nombre est pair.
                    </div>
                    <div class="console-output">
                        <strong>Exemple (départ : 7) :</strong><br>
                        7 → 22 → 11 → 34 → 17 → 52 → 26 → 13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1<br>
                        Nombre d'étapes : 16
                    </div>
                </div>

                <div class="exercise-card">
                    <div class="exercise-difficulty">Expert</div>
                    <div class="exercise-title">Chercheur de Diviseurs</div>
                    <div class="exercise-desc">
                        Demandez un nombre entier à l'utilisateur. Trouvez et affichez tous ses diviseurs (nombres qui le divisent sans reste).
                    </div>

                    <div class="exercise-steps">
                        <strong>Ce qu'il faut faire :</strong>
                        <ol>
                            <li>Demander le nombre</li>
                            <li>Initialiser <code>diviseur = 1</code></li>
                            <li>Tant que <code>diviseur <= nombre</code></li>
                            <li>Si <code>nombre % diviseur == 0</code> : c'est un diviseur</li>
                            <li>Incrémenter le diviseur</li>
                        </ol>
                    </div>
                    <div style="text-align: center; margin-top: 15px;">
                        <button class="hint-button" onclick="toggleHint('hint4_6')" style="
                            background: rgba(255, 215, 0, 0.2);
                            border: 2px solid rgba(255, 215, 0, 0.4);
                            border-radius: 8px;
                            padding: 8px 16px;
                            color: #ffd700;
                            cursor: pointer;
                            font-size: 0.9rem;
                            font-weight: 600;
                        ">💡 Indice</button>
                    </div>
                    <div id="hint4_6" class="hint-content" style="display: none; background: rgba(255, 215, 0, 0.1); border: 2px solid rgba(255, 215, 0, 0.3); border-radius: 12px; padding: 15px; margin-top: 15px; color: #ffd700;">
                        🔍 <strong>Indice :</strong> L'opérateur modulo <code>%</code> donne le reste de la division. Si le reste est 0, c'est un diviseur.
                    </div>
                    <div class="console-output">
                        <strong>Exemple (pour 12) :</strong><br>
                        Les diviseurs de 12 sont :<br>
                        1, 2, 3, 4, 6, 12
                    </div>
                </div>
            </div>

            <div class="highlight-box" style="margin-top: 30px;">
                <strong>Points clés à retenir :</strong>
                <ul style="margin-top: 10px; padding-left: 20px;">
                    <li>La boucle while répète tant qu'une condition est vraie</li>
                    <li>Toujours inclure une modification pour éviter l'infini</li>
                    <li>Parfaites pour les validations et menus interactifs</li>
                    <li>Tester avec de petites valeurs d'abord</li>
                </ul>
            </div>
        `
    }
};