// Lesson 1 Content Data
const lesson1Data = {
    intro: {
        icon: 'icon-intro',
        emoji: '🐍',
        title: 'Qu\'est-ce que Python ?',
        subtitle: 'Un langage de haut niveau',
        content: `
            <div class="section-text">
                Python est un langage de programmation dit de <strong>"haut niveau"</strong>. 
                Cela signifie que sa syntaxe est conçue pour être claire et lisible, 
                se rapprochant de la logique du langage humain (principalement l'anglais).
            </div>
            <div class="highlight-box">
                <strong>Pourquoi Python pour débuter ?</strong><br>
                Sa simplicité et sa clarté en font un excellent choix pour apprendre les concepts fondamentaux de la programmation.
            </div>
            <div class="section-text">
                <strong>Utilisations de Python :</strong>
                <ul style="margin-top: 15px; padding-left: 20px;">
                    <li>Développement web (Instagram, YouTube)</li>
                    <li>Analyse de données</li>
                    <li>Intelligence artificielle</li>
                    <li>Création de jeux vidéo</li>
                    <li>Et bien plus encore...</li>
                </ul>
            </div>
        `
    },
    variables: {
        icon: 'icon-variables',
        emoji: '📦',
        title: 'Variables',
        subtitle: 'Stocker l\'information',
        content: `
            <div class="section-text">
                En programmation, nous avons constamment besoin de stocker des informations pour les réutiliser ou les manipuler. 
                Une variable peut être vue comme une <strong>"boîte"</strong> étiquetée dans la mémoire de l'ordinateur, 
                dans laquelle on place une valeur.
            </div>
            <div class="concept-animation">
                <h3 style="color: #ffd700; margin-bottom: 20px;">💡 Concept : Variables comme boîtes</h3>
                <div class="variable-demo">
                    <div class="variable-box">
                        <div class="variable-label-demo">age_utilisateur</div>
                        <div style="font-size: 1.5rem; font-weight: bold;">15</div>
                    </div>
                    <div class="arrow-flow">→</div>
                    <div style="color: white; font-weight: 600;">
                        Stocké en<br>mémoire
                    </div>
                </div>
                <p style="color: #ccc; font-size: 0.9rem;">Une variable est comme une boîte étiquetée qui contient votre valeur</p>
            </div>
            <div class="highlight-box">
                <strong>Syntaxe :</strong><br>
                <code style="color: #ffd700; font-family: monospace;">nom_de_la_variable = valeur</code>
            </div>
            <div class="code-block">
                <button class="code-load-button" onclick="loadCodeIntoConsole('# Exemple : creer des variables\\nnom = \\'Lucas\\'\\nage = 16\\ntaille = 1.75\\n# Utiliser les variables\\nprint(\\'Nom:\\', nom)\\nprint(\\'Age:\\', age)\\nprint(\\'Taille:\\', taille, \\'m\\')')">
                    🐍 Charger
                </button>
                <div class="code-content">
<span class="code-comment"># Exemple : créer des variables</span>
<span class="code-keyword">nom</span> = <span class="code-string">'Lucas'</span>
<span class="code-keyword">age</span> = <span class="code-number">16</span>
<span class="code-keyword">taille</span> = <span class="code-number">1.75</span>
<span class="code-comment"># Utiliser les variables</span>
<span class="code-keyword">print</span>(<span class="code-string">'Nom:'</span>, nom)
<span class="code-keyword">print</span>(<span class="code-string">'Âge:'</span>, age)
<span class="code-keyword">print</span>(<span class="code-string">'Taille:'</span>, taille, <span class="code-string">'m'</span>)
                </div>
            </div>
            
            <div class="variable-showcase">
                <div class="variable-item">
                    <div class="variable-label">age_utilisateur</div>
                    <div class="variable-content">
                        <div class="variable-value">15</div>
                        <div class="type-badge">int</div>
                    </div>
                </div>
            </div>
            <div class="quiz-container">
                <div class="quiz-question">🧠 Quiz : Quelle est la bonne syntaxe pour créer une variable ?</div>
                <div class="quiz-options">
                    <div class="quiz-option" data-correct="false">variable age_utilisateur = 15</div>
                    <div class="quiz-option" data-correct="true">age_utilisateur = 15</div>
                    <div class="quiz-option" data-correct="false">15 = age_utilisateur</div>
                    <div class="quiz-option" data-correct="false">set age_utilisateur to 15</div>
                </div>
                <button class="quiz-submit-btn" onclick="checkVariableQuiz()">Vérifier</button>
                <div class="quiz-feedback" id="variableQuizFeedback"></div>
            </div>
            <div class="section-text">
                Ici, nous avons créé une variable nommée <code>age_utilisateur</code> et nous lui avons affecté la valeur 15. 
                On peut maintenant utiliser l'étiquette <code>age_utilisateur</code> n'importe où dans notre programme 
                pour faire référence à cette valeur.
            </div>
        `
    },
    types: {
        icon: 'icon-types',
        emoji: '🏷️',
        title: 'Types de Données',
        subtitle: '4 types fondamentaux',
        content: `
            <div class="section-text">
                Chaque valeur stockée dans une variable possède un <strong>type</strong>, qui définit sa nature 
                et les opérations que l'on peut effectuer avec. Python reconnaît automatiquement le type 
                de la donnée que vous assignez.
            </div>
            <div class="concept-animation">
                <h3 style="color: #ffd700; margin-bottom: 20px;">📚 Les 4 types de base</h3>
                <div class="type-animation">
                    <div class="type-demo">
                        <div style="font-weight: bold; color: #ffd700; font-size: 1.5rem; margin-bottom: 10px;">int</div>
                        <div style="color: #ccc; font-size: 0.9rem;">Entiers</div>
                        <div style="font-family: monospace; color: #4caf50;">42, -17, 0</div>
                    </div>
                    <div class="type-demo">
                        <div style="font-weight: bold; color: #ffd700; font-size: 1.5rem; margin-bottom: 10px;">float</div>
                        <div style="color: #ccc; font-size: 0.9rem;">Décimaux</div>
                        <div style="font-family: monospace; color: #4caf50;">3.14, 1.75</div>
                    </div>
                    <div class="type-demo">
                        <div style="font-weight: bold; color: #ffd700; font-size: 1.5rem; margin-bottom: 10px;">str</div>
                        <div style="color: #ccc; font-size: 0.9rem;">Texte</div>
                        <div style="font-family: monospace; color: #4caf50;">"Bonjour"</div>
                    </div>
                    <div class="type-demo">
                        <div style="font-weight: bold; color: #ffd700; font-size: 1.5rem; margin-bottom: 10px;">bool</div>
                        <div style="color: #ccc; font-size: 0.9rem;">Vrai/Faux</div>
                        <div style="font-family: monospace; color: #4caf50;">True, False</div>
                    </div>
                </div>
            </div>
            <div class="code-block">
                <button class="code-load-button" onclick="loadCodeIntoConsole('# Decouvrir les types avec type()\\nage = 17\\nnote = 15.5\\nnom = \\'Marie\\'\\nreussite = True\\nprint(\\'Type de age:\\', type(age))\\nprint(\\'Type de note:\\', type(note))\\nprint(\\'Type de nom:\\', type(nom))\\nprint(\\'Type de reussite:\\', type(reussite))')">
                    🐍 Charger
                </button>
                <div class="code-content">
<span class="code-comment"># Découvrir les types avec type()</span>
<span class="code-keyword">age</span> = <span class="code-number">17</span>
<span class="code-keyword">note</span> = <span class="code-number">15.5</span>
<span class="code-keyword">nom</span> = <span class="code-string">'Marie'</span>
<span class="code-keyword">reussite</span> = <span class="code-keyword">True</span>
<span class="code-keyword">print</span>(<span class="code-string">'Type de age:'</span>, <span class="code-keyword">type</span>(age))
<span class="code-keyword">print</span>(<span class="code-string">'Type de note:'</span>, <span class="code-keyword">type</span>(note))
<span class="code-keyword">print</span>(<span class="code-string">'Type de nom:'</span>, <span class="code-keyword">type</span>(nom))
<span class="code-keyword">print</span>(<span class="code-string">'Type de reussite:'</span>, <span class="code-keyword">type</span>(reussite))
                </div>
            </div>
            <div class="console-output">
                Type de age: &lt;class 'int'&gt;<br>
                Type de note: &lt;class 'float'&gt;<br>
                Type de nom: &lt;class 'str'&gt;<br>
                Type de reussite: &lt;class 'bool'&gt;
            </div>
            <div class="variable-showcase">
                <div class="variable-item">
                    <div class="variable-label">annee_actuelle</div>
                    <div class="variable-content">
                        <div class="variable-value">2024</div>
                        <div class="type-badge">int</div>
                    </div>
                    <div style="margin-top: 8px; color: #ccc; font-size: 0.9rem;">
                        Entiers (positifs ou négatifs)
                    </div>
                </div>
                <div class="variable-item">
                    <div class="variable-label">taille_en_metres</div>
                    <div class="variable-content">
                        <div class="variable-value">1.76</div>
                        <div class="type-badge">float</div>
                    </div>
                    <div style="margin-top: 8px; color: #ccc; font-size: 0.9rem;">
                        Nombres à virgule (avec un point)
                    </div>
                </div>
                <div class="variable-item">
                    <div class="variable-label">prenom</div>
                    <div class="variable-content">
                        <div class="variable-value">"Lucas"</div>
                        <div class="type-badge">str</div>
                    </div>
                    <div style="margin-top: 8px; color: #ccc; font-size: 0.9rem;">
                        Chaînes de caractères (entre guillemets)
                    </div>
                </div>
                <div class="variable-item">
                    <div class="variable-label">est_majeur</div>
                    <div class="variable-content">
                        <div class="variable-value">False</div>
                        <div class="type-badge">bool</div>
                    </div>
                    <div style="margin-top: 8px; color: #ccc; font-size: 0.9rem;">
                        Booléens (True ou False uniquement)
                    </div>
                </div>
            </div>
            <div class="quiz-container">
                <div class="quiz-question">🧠 Quiz : Quel est le type de la variable <code>score = 18.5</code> ?</div>
                <div class="quiz-options">
                    <div class="quiz-option" data-correct="false">int</div>
                    <div class="quiz-option" data-correct="true">float</div>
                    <div class="quiz-option" data-correct="false">str</div>
                    <div class="quiz-option" data-correct="false">bool</div>
                </div>
                <button class="quiz-submit-btn" onclick="checkTypeQuiz()">Vérifier</button>
                <div class="quiz-feedback" id="typeQuizFeedback"></div>
            </div>
        `
    },
    interaction: {
        icon: 'icon-interaction',
        emoji: '💬',
        title: 'Interactions',
        subtitle: 'print() et input()',
        content: `
            <div class="section-text">
                Un programme devient vraiment intéressant lorsqu'il peut communiquer avec l'utilisateur. 
                Pour cela, nous utilisons deux fonctions essentielles.
            </div>
            <div class="highlight-box">
                <strong>print()</strong> : Affiche des informations<br>
                <strong>input()</strong> : Demande des informations à l'utilisateur
            </div>
            <div class="code-block">
                <button class="code-load-button" onclick="loadCodeIntoConsole('# Afficher un message\\nprint(\\'Bonjour le monde !\\')\\n# Demander et stocker\\nnom = input(\\'Votre nom ? \\')\\nprint(\\'Bonjour\\', nom)')">
                    🐍 Charger
                </button>
                <div class="code-content">
<span class="code-comment"># Afficher un message</span>
<span class="code-keyword">print</span>(<span class="code-string">"Bonjour le monde !"</span>)
<span class="code-comment"># Demander et stocker</span>
nom = <span class="code-keyword">input</span>(<span class="code-string">"Votre nom ? "</span>)
<span class="code-keyword">print</span>(<span class="code-string">"Bonjour"</span>, nom)
                </div>
            </div>
            <div class="console-output">
                Bonjour le monde !<br>
                Votre nom ? Marie<br>
                Bonjour Marie
            </div>
            <div class="warning-banner">
                <strong>Attention :</strong> input() renvoie toujours du texte (str) !
            </div>
        `
    },
    conversion: {
        icon: 'icon-conversion',
        emoji: '🔄',
        title: 'Conversion de Types',
        subtitle: 'Le piège de input()',
        content: `
            <div class="section-text">
                Puisque <code>input()</code> renvoie toujours du texte, si vous demandez un nombre, 
                vous ne pourrez pas faire de calcul avec directement. Il faudra le convertir.
            </div>
            <div class="code-block">
                <button class="code-load-button" onclick="loadCodeIntoConsole('# Demander l\\'age\\nage_str = input(\\'Votre age ? \\')  # \\'15\\' (str)\\n# Convertir en entier\\nage_int = int(age_str)           # 15 (int)\\n# Maintenant on peut calculer\\nage_futur = age_int + 10\\nprint(\\'Dans 10 ans:\\', age_futur, \\'ans\\')')">
                    🐍 Charger
                </button>
                <div class="code-content">
<span class="code-comment"># Demander l'age</span>
age_str = <span class="code-keyword">input</span>(<span class="code-string">"Votre age ? "</span>)  <span class="code-comment"># "15" (str)</span>
<span class="code-comment"># Convertir en entier</span>
age_int = <span class="code-keyword">int</span>(age_str)           <span class="code-comment"># 15 (int)</span>
<span class="code-comment"># Maintenant on peut calculer</span>
age_futur = age_int + <span class="code-number">10</span>
<span class="code-keyword">print</span>(<span class="code-string">"Dans 10 ans:"</span>, age_futur, <span class="code-string">"ans"</span>)
                </div>
            </div>
            <div class="highlight-box">
                <strong>Fonctions de conversion :</strong><br>
                • <code>int()</code> pour convertir en entier<br>
                • <code>float()</code> pour convertir en nombre à virgule
            </div>
        `
    },
    rules: {
        icon: 'icon-rules',
        emoji: '📋',
        title: 'Règles de Nommage',
        subtitle: 'Pour un code lisible',
        content: `
            <div class="section-text">
                Pour qu'un programme soit lisible, il faut respecter des règles pour nommer les variables :
            </div>
            <div class="rules-list">
                <ul>
                    <li>Commencer par une lettre ou un tiret bas (_)</li>
                    <li>Contenir uniquement lettres, chiffres et tirets bas</li>
                    <li>Sensible à la casse : age ≠ Age ≠ AGE</li>
                    <li>Convention : minuscules + tirets bas (snake_case)</li>
                </ul>
            </div>
            <div class="example-grid">
                <div class="example-item example-correct">
                    ✅ vitesse_max
                </div>
                <div class="example-item example-incorrect">
                    ❌ vitesse-max
                </div>
                <div class="example-item example-incorrect">
                    ❌ 1er_joueur
                </div>
            </div>
        `
    },
    exercises: {
        icon: 'icon-exercises',
        emoji: '💻',
        title: 'Exercices d\'Application',
        subtitle: 'Pratiquez et progressez !',
        content: `
            <div class="section-text">
                Voici 4 exercices progressifs pour mettre en pratique tout ce que vous avez appris. À vous de créer les programmes !
            </div>
            <div class="exercises-grid">
                <div class="exercise-card">
                    <div class="exercise-difficulty">Facile</div>
                    <div class="exercise-title">Dialogue</div>
                    <div class="exercise-desc">
                        Écrivez un programme qui demande son prénom à l'utilisateur, puis qui lui dit bonjour en utilisant son prénom.
                    </div>
                    
                    <div class="exercise-steps">
                        <strong>Ce qu'il faut faire :</strong>
                        <ol>
                            <li>Demander le prénom avec <code>input()</code></li>
                            <li>Stocker la réponse dans une variable</li>
                            <li>Afficher un message personnalisé avec <code>print()</code></li>
                        </ol>
                    </div>
                    <div class="highlight-box">
                        <strong>À vous de jouer !</strong><br>
                        Utilisez ce que vous avez appris sur les variables et les fonctions <code>input()</code> et <code>print()</code> pour créer ce programme.
                    </div>
                    <div style="text-align: center; margin-top: 15px;">
                        <button class="hint-button" onclick="toggleHint('hint1')" style="
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
                        <button style="
                            background: rgba(76, 175, 80, 0.1);
                            border: 2px solid rgba(76, 175, 80, 0.3);
                            border-radius: 8px;
                            padding: 8px 16px;
                            color: rgba(76, 175, 80, 0.6);
                            cursor: not-allowed;
                            font-size: 0.9rem;
                            font-weight: 600;
                            opacity: 0.7;
                        " title="Solution verrouillée">
                            🔒 Solution
                        </button>
                    </div>
                    <div id="hint1" class="hint-content" style="
                        display: none;
                        background: rgba(255, 215, 0, 0.1);
                        border: 2px solid rgba(255, 215, 0, 0.3);
                        border-radius: 12px;
                        padding: 15px;
                        margin-top: 15px;
                        color: #ffd700;
                        font-style: italic;
                    ">
                        🔍 <strong>Indice :</strong> Commencez par créer une variable comme <code>prenom = input("Quel est votre prénom ? ")</code>, puis utilisez cette variable dans votre message de salutation.
                    </div>
                    <div class="console-output" style="margin-top: 15px;">
                        <strong>Exemple d'exécution :</strong><br>
                        Quel est votre prénom ? Marie<br>
                        Bonjour Marie, ravi de vous rencontrer !
                    </div>
                </div>
                
                <div class="exercise-card">
                    <div class="exercise-difficulty">Facile</div>
                    <div class="exercise-title">Age</div>
                    <div class="exercise-desc">
                        Écrivez un programme qui demande son année de naissance à l'utilisateur, qui la convertit en entier, calcule son age approximatif et l'affiche.
                    </div>
                    
                    <div class="exercise-steps">
                        <strong>Ce qu'il faut faire :</strong>
                        <ol>
                            <li>Demander l'année de naissance avec <code>input()</code></li>
                            <li>Convertir la réponse en entier avec <code>int()</code></li>
                            <li>Calculer l'age avec <code>2024 - annee_naissance</code></li>
                            <li>Afficher le résultat avec <code>print()</code></li>
                        </ol>
                    </div>
                    <div class="highlight-box">
                        <strong>À vous de jouer !</strong><br>
                        N'oubliez pas de convertir l'année de naissance en entier pour pouvoir faire le calcul !
                    </div>
                    <div style="text-align: center; margin-top: 15px;">
                        <button class="hint-button" onclick="toggleHint('hint2')" style="
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
                        <button style="
                            background: rgba(76, 175, 80, 0.1);
                            border: 2px solid rgba(76, 175, 80, 0.3);
                            border-radius: 8px;
                            padding: 8px 16px;
                            color: rgba(76, 175, 80, 0.6);
                            cursor: not-allowed;
                            font-size: 0.9rem;
                            font-weight: 600;
                            opacity: 0.7;
                        " title="Solution verrouillée">
                            🔒 Solution
                        </button>
                    </div>
                    <div id="hint2" class="hint-content" style="
                        display: none;
                        background: rgba(255, 215, 0, 0.1);
                        border: 2px solid rgba(255, 215, 0, 0.3);
                        border-radius: 12px;
                        padding: 15px;
                        margin-top: 15px;
                        color: #ffd700;
                        font-style: italic;
                    ">
                        🔍 <strong>Indice :</strong> Utilisez <code>annee = int(input("En quelle année etes-vous ne ? "))</code> puis <code>age = 2024 - annee</code>.
                    </div>
                    <div class="console-output" style="margin-top: 15px;">
                        <strong>Exemple d'exécution :</strong><br>
                        En quelle année etes-vous ne ? 2005<br>
                        Vous avez environ 19 ans.
                    </div>
                </div>
                
                <div class="exercise-card">
                    <div class="exercise-difficulty">Avancé</div>
                    <div class="exercise-title">Calculateur de TTC</div>
                    <div class="exercise-desc">
                        Demandez à l'utilisateur un prix hors taxe (HT) pour un article. Convertissez cette valeur en float. Sachant que la TVA est de 20% (0.2), calculez le prix toutes taxes comprises (TTC) avec la formule : prix_ttc = prix_ht * 1.2. Affichez le résultat avec un message clair.
                    </div>
                    
                    <div class="exercise-steps">
                        <strong>Ce qu'il faut faire :</strong>
                        <ol>
                            <li>Demander le prix HT avec <code>input()</code></li>
                            <li>Convertir en nombre décimal avec <code>float()</code></li>
                            <li>Calculer le prix TTC : <code>prix_ttc = prix_ht * 1.2</code></li>
                            <li>Afficher le résultat avec un message clair</li>
                        </ol>
                    </div>
                    <div class="highlight-box">
                        <strong>À vous de jouer !</strong><br>
                        Utilisez <code>float()</code> pour convertir le prix en nombre décimal et n'oubliez pas que TVA 20% = multiplier par 1.2 !
                    </div>
                    <div style="text-align: center; margin-top: 15px;">
                        <button class="hint-button" onclick="toggleHint('hint3')" style="
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
                        <button style="
                            background: rgba(76, 175, 80, 0.1);
                            border: 2px solid rgba(76, 175, 80, 0.3);
                            border-radius: 8px;
                            padding: 8px 16px;
                            color: rgba(76, 175, 80, 0.6);
                            cursor: not-allowed;
                            font-size: 0.9rem;
                            font-weight: 600;
                            opacity: 0.7;
                        " title="Solution verrouillée">
                            🔒 Solution
                        </button>
                    </div>
                    <div id="hint3" class="hint-content" style="
                        display: none;
                        background: rgba(255, 215, 0, 0.1);
                        border: 2px solid rgba(255, 215, 0, 0.3);
                        border-radius: 12px;
                        padding: 15px;
                        margin-top: 15px;
                        color: #ffd700;
                        font-style: italic;
                    ">
                        🔍 <strong>Indice :</strong> Commencez par <code>prix_ht = float(input("Prix HT : "))</code>, puis <code>prix_ttc = prix_ht * 1.2</code>, et enfin affichez le résultat.
                    </div>
                    <div class="console-output" style="margin-top: 15px;">
                        <strong>Exemple d'exécution :</strong><br>
                        Prix HT de l'article : 50<br>
                        Le prix TTC est de : 60.0 euros
                    </div>
                </div>
                
                <div class="exercise-card">
                    <div class="exercise-difficulty">Avancé</div>
                    <div class="exercise-title">Distance d'un éclair</div>
                    <div class="exercise-desc">
                        Le son voyage à environ 343 mètres par seconde. Écrivez un programme qui demande à l'utilisateur combien de secondes se sont écoulées entre l'éclair et le tonnerre. Convertissez cette durée en float. Calculez la distance de l'éclair en mètres (distance = duree * 343). Affichez la distance avec un message clair.
                    </div>
                    
                    <div class="exercise-steps">
                        <strong>Ce qu'il faut faire :</strong>
                        <ol>
                            <li>Demander la durée en secondes avec <code>input()</code></li>
                            <li>Convertir en nombre décimal avec <code>float()</code></li>
                            <li>Calculer la distance : <code>distance = duree * 343</code></li>
                            <li>Afficher le résultat avec un message explicatif</li>
                        </ol>
                    </div>
                    <div class="highlight-box">
                        <strong>À vous de jouer !</strong><br>
                        Rappelez-vous que la vitesse du son est de 343 m/s. Plus l'éclair est loin, plus il y a de délai entre l'éclair et le tonnerre !
                    </div>
                    <div style="text-align: center; margin-top: 15px;">
                        <button class="hint-button" onclick="toggleHint('hint4')" style="
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
                        <button style="
                            background: rgba(76, 175, 80, 0.1);
                            border: 2px solid rgba(76, 175, 80, 0.3);
                            border-radius: 8px;
                            padding: 8px 16px;
                            color: rgba(76, 175, 80, 0.6);
                            cursor: not-allowed;
                            font-size: 0.9rem;
                            font-weight: 600;
                            opacity: 0.7;
                        " title="Solution verrouillée">
                            🔒 Solution
                        </button>
                    </div>
                    <div id="hint4" class="hint-content" style="
                        display: none;
                        background: rgba(255, 215, 0, 0.1);
                        border: 2px solid rgba(255, 215, 0, 0.3);
                        border-radius: 12px;
                        padding: 15px;
                        margin-top: 15px;
                        color: #ffd700;
                        font-style: italic;
                    ">
                        🔍 <strong>Indice :</strong> Utilisez <code>duree = float(input("Duree en secondes : "))</code> puis <code>distance = duree * 343</code>.
                    </div>
                    <div class="console-output" style="margin-top: 15px;">
                        <strong>Exemple d'exécution :</strong><br>
                        Combien de secondes entre l'eclair et le tonnerre ? 3<br>
                        L'eclair se trouve à environ 1029.0 metres.
                    </div>
                </div>
            </div>
        `
    }
};

// Lesson 2 Content Data
const lesson2Data = {
    operations: {
        icon: 'icon-operations',
        emoji: '🧮',
        title: 'Opérations Arithmétiques',
        subtitle: 'Manipuler les nombres',
        content: `
            <div class="section-text">
                Maintenant que vous savez stocker des informations, nous allons voir comment les manipuler avec des opérations mathématiques.
            </div>
            <div class="concept-animation">
                <h3 style="color: #ffd700; margin-bottom: 20px;">🧮 Les Opérateurs de Base</h3>
                <div class="type-animation">
                    <div class="type-demo">
                        <div style="font-weight: bold; color: #ffd700; font-size: 1.5rem;">+</div>
                        <div style="color: white; font-size: 0.9rem; font-weight: 600;">Addition</div>
                        <div style="font-family: monospace; color: #4caf50; font-size: 0.8rem;">5 + 3 = 8</div>
                    </div>
                    <div class="type-demo">
                        <div style="font-weight: bold; color: #ffd700; font-size: 1.5rem;">-</div>
                        <div style="color: white; font-size: 0.9rem; font-weight: 600;">Soustraction</div>
                        <div style="font-family: monospace; color: #4caf50; font-size: 0.8rem;">5 - 3 = 2</div>
                    </div>
                    <div class="type-demo">
                        <div style="font-weight: bold; color: #ffd700; font-size: 1.5rem;">*</div>
                        <div style="color: white; font-size: 0.9rem; font-weight: 600;">Multiplication</div>
                        <div style="font-family: monospace; color: #4caf50; font-size: 0.8rem;">5 * 3 = 15</div>
                    </div>
                    <div class="type-demo">
                        <div style="font-weight: bold; color: #ffd700; font-size: 1.5rem;">/</div>
                        <div style="color: white; font-size: 0.9rem; font-weight: 600;">Division</div>
                        <div style="font-family: monospace; color: #4caf50; font-size: 0.8rem;">10 / 3 = 3.33</div>
                    </div>
                    <div class="type-demo">
                        <div style="font-weight: bold; color: #ffd700; font-size: 1.5rem;">//</div>
                        <div style="color: white; font-size: 0.9rem; font-weight: 600;">Division entière</div>
                        <div style="font-family: monospace; color: #4caf50; font-size: 0.8rem;">10 // 3 = 3</div>
                    </div>
                    <div class="type-demo">
                        <div style="font-weight: bold; color: #ffd700; font-size: 1.5rem;">%</div>
                        <div style="color: white; font-size: 0.9rem; font-weight: 600;">Modulo</div>
                        <div style="font-family: monospace; color: #4caf50; font-size: 0.8rem;">10 % 3 = 1</div>
                    </div>
                    <div class="type-demo">
                        <div style="font-weight: bold; color: #ffd700; font-size: 1.5rem;">**</div>
                        <div style="color: white; font-size: 0.9rem; font-weight: 600;">Puissance</div>
                        <div style="font-family: monospace; color: #4caf50; font-size: 0.8rem;">2 ** 3 = 8</div>
                    </div>
                </div>
            </div>
            <div class="code-block">
                <button class="code-load-button" onclick="loadCodeIntoConsole('# Exemples d\\'operations\\na = 10\\nb = 3\\n\\nprint(\\'Addition :\\', a + b)          # Affiche 13\\nprint(\\'Soustraction :\\', a - b)      # Affiche 7\\nprint(\\'Multiplication :\\', a * b)    # Affiche 30\\nprint(\\'Division :\\', a / b)          # Affiche 3.333...\\nprint(\\'Division entière :\\', a // b) # Affiche 3\\nprint(\\'Modulo :\\', a % b)            # Affiche 1\\nprint(\\'Puissance :\\', a ** b)        # Affiche 1000')">
                    🐍 Charger
                </button>
                <div class="code-content">
<span class="code-comment"># Exemples d'opérations</span>
a = <span class="code-number">10</span>
b = <span class="code-number">3</span>

<span class="code-keyword">print</span>(<span class="code-string">"Addition :"</span>, a + b)          <span class="code-comment"># Affiche 13</span>
<span class="code-keyword">print</span>(<span class="code-string">"Soustraction :"</span>, a - b)      <span class="code-comment"># Affiche 7</span>
<span class="code-keyword">print</span>(<span class="code-string">"Multiplication :"</span>, a * b)    <span class="code-comment"># Affiche 30</span>
<span class="code-keyword">print</span>(<span class="code-string">"Division :"</span>, a / b)          <span class="code-comment"># Affiche 3.333...</span>
<span class="code-keyword">print</span>(<span class="code-string">"Division entière :"</span>, a // b) <span class="code-comment"># Affiche 3</span>
<span class="code-keyword">print</span>(<span class="code-string">"Modulo :"</span>, a % b)            <span class="code-comment"># Affiche 1</span>
<span class="code-keyword">print</span>(<span class="code-string">"Puissance :"</span>, a ** b)        <span class="code-comment"># Affiche 1000</span>
                </div>
            </div>
            <div class="warning-banner">
                <strong>Ordre des opérations :</strong> Python respecte la priorité mathématique : Parenthèses → Exposants → Multiplication/Division → Addition/Soustraction
            </div>
            <div class="code-block">
                <button class="code-load-button" onclick="loadCodeIntoConsole('# Ordre des operations\\nresultat_1 = 2 + 3 * 4  # Calcule 3 * 4 d\\'abord, donc 2 + 12 = 14\\nresultat_2 = (2 + 3) * 4 # Calcule (2 + 3) d\\'abord, donc 5 * 4 = 20\\nprint(\\'Resultat 1:\\', resultat_1)\\nprint(\\'Resultat 2:\\', resultat_2)')">
                    🐍 Charger
                </button>
                <div class="code-content">
resultat_1 = <span class="code-number">2</span> + <span class="code-number">3</span> * <span class="code-number">4</span>  <span class="code-comment"># Calcule 3 * 4 d'abord, donc 2 + 12 = 14</span>
resultat_2 = (<span class="code-number">2</span> + <span class="code-number">3</span>) * <span class="code-number">4</span> <span class="code-comment"># Calcule (2 + 3) d'abord, donc 5 * 4 = 20</span>
                </div>
            </div>
        `
    },
    strings: {
        icon: 'icon-strings',
        emoji: '🔤',
        title: 'Opérations sur les Chaînes',
        subtitle: 'Concaténation et f-strings',
        content: `
            <div class="section-text">
                Les chaînes (str) peuvent aussi être manipulées avec certains opérateurs.
            </div>
            <div class="highlight-box">
                <strong>Concaténation (+)</strong> : Assemble deux chaînes<br>
                <strong>Répétition (*)</strong> : Répète une chaîne plusieurs fois
            </div>
            <div class="code-block">
                <button class="code-load-button" onclick="loadCodeIntoConsole('# Operations sur les chaines\\nprenom = \\'John\\'\\nnom = \\'Doe\\'\\nnom_complet = prenom + \\' \\' + nom\\nprint(nom_complet)  # Affiche: John Doe\\n\\ncri = \\'Hourra ! \\'\\nencouragement = cri * 3\\nprint(encouragement)  # Affiche: Hourra ! Hourra ! Hourra !')">
                    🐍 Charger
                </button>
                <div class="code-content">
prenom = <span class="code-string">"John"</span>
nom = <span class="code-string">"Doe"</span>
nom_complet = prenom + <span class="code-string">" "</span> + nom
<span class="code-keyword">print</span>(nom_complet)  <span class="code-comment"># Affiche: John Doe</span>

cri = <span class="code-string">"Hourra ! "</span>
encouragement = cri * <span class="code-number">3</span>
<span class="code-keyword">print</span>(encouragement)  <span class="code-comment"># Affiche: Hourra ! Hourra ! Hourra !</span>
                </div>
            </div>
            <div class="concept-animation">
                <h3 style="color: #ffd700; margin-bottom: 20px;">✨ Les f-strings : La méthode moderne</h3>
                <p style="color: #ccc; margin-bottom: 15px;">Pour intégrer facilement des variables dans une chaîne, utilisez les f-strings avec la lettre <code>f</code> avant les guillemets.</p>
            </div>
            <div class="code-block">
                <button class="code-load-button" onclick="loadCodeIntoConsole('# f-strings : la methode moderne\\nnom = \\'Alex\\'\\nage = 16\\n# On place les variables entre accolades {} directement dans la chaine\\nmessage = f\\'Je m\\\\\\'appelle {nom} et j\\\\\\'ai {age} ans.\\'\\nprint(message)\\n# Affiche: Je m\\'appelle Alex et j\\'ai 16 ans.\\n\\n# On peut meme y faire des calculs !\\nprix_ht = 50\\ntva = 0.20\\nprint(f\\'Le prix TTC est de {prix_ht * (1 + tva)} euros.\\')\\n# Affiche: Le prix TTC est de 60.0 euros.')">
                    🐍 Charger
                </button>
                <div class="code-content">
nom = <span class="code-string">"Alex"</span>
age = <span class="code-number">16</span>
<span class="code-comment"># On place les variables entre accolades {} directement dans la chaîne</span>
message = <span class="code-string">f"Je m'appelle {nom} et j'ai {age} ans."</span>
<span class="code-keyword">print</span>(message)
<span class="code-comment"># Affiche: Je m'appelle Alex et j'ai 16 ans.</span>

<span class="code-comment"># On peut meme y faire des calculs !</span>
prix_ht = <span class="code-number">50</span>
tva = <span class="code-number">0.20</span>
<span class="code-keyword">print</span>(<span class="code-string">f"Le prix TTC est de {prix_ht * (1 + tva)} euros."</span>)
<span class="code-comment"># Affiche: Le prix TTC est de 60.0 euros.</span>
                </div>
            </div>
        `
    },
    conditions: {
        icon: 'icon-conditions',
        emoji: '🤔',
        title: 'Les Conditions',
        subtitle: 'Faire prendre des décisions',
        content: `
            <div class="section-text">
                Un programme devient "intelligent" quand il peut prendre des décisions. C'est le rôle des structures conditionnelles.
            </div>
            <div class="concept-animation">
                <h3 style="color: #ffd700; margin-bottom: 20px;">🔍 Les Opérateurs de Comparaison</h3>
                <div class="type-animation">
                    <div class="type-demo">
                        <div style="font-weight: bold; color: #ffd700; font-size: 1.5rem;">==</div>
                        <div style="color: white; font-size: 0.9rem; font-weight: 600;">Égal à</div>
                        <div style="font-family: monospace; color: #4caf50; font-size: 0.8rem;">5 == 5 → True</div>
                    </div>
                    <div class="type-demo">
                        <div style="font-weight: bold; color: #ffd700; font-size: 1.5rem;">!=</div>
                        <div style="color: white; font-size: 0.9rem; font-weight: 600;">Différent de</div>
                        <div style="font-family: monospace; color: #4caf50; font-size: 0.8rem;">5 != 3 → True</div>
                    </div>
                    <div class="type-demo">
                        <div style="font-weight: bold; color: #ffd700; font-size: 1.5rem;">&lt;</div>
                        <div style="color: white; font-size: 0.9rem; font-weight: 600;">Inférieur à</div>
                        <div style="font-family: monospace; color: #4caf50; font-size: 0.8rem;">3 &lt; 5 → True</div>
                    </div>
                    <div class="type-demo">
                        <div style="font-weight: bold; color: #ffd700; font-size: 1.5rem;">&gt;</div>
                        <div style="color: white; font-size: 0.9rem; font-weight: 600;">Supérieur à</div>
                        <div style="font-family: monospace; color: #4caf50; font-size: 0.8rem;">5 &gt; 3 → True</div>
                    </div>
                    <div class="type-demo">
                        <div style="font-weight: bold; color: #ffd700; font-size: 1.5rem;">&lt;=</div>
                        <div style="color: white; font-size: 0.9rem; font-weight: 600;">Inférieur ou égal</div>
                        <div style="font-family: monospace; color: #4caf50; font-size: 0.8rem;">3 &lt;= 5 → True</div>
                    </div>
                    <div class="type-demo">
                        <div style="font-weight: bold; color: #ffd700; font-size: 1.5rem;">&gt;=</div>
                        <div style="color: white; font-size: 0.9rem; font-weight: 600;">Supérieur ou égal</div>
                        <div style="font-family: monospace; color: #4caf50; font-size: 0.8rem;">5 &gt;= 5 → True</div>
                    </div>
                </div>
            </div>
            <div class="warning-banner">
                <strong>Attention :</strong> Ne confondez jamais <code>=</code> (affectation) et <code>==</code> (comparaison) !
            </div>
            <div class="code-block">
                <button class="code-load-button" onclick="loadCodeIntoConsole('# Simple condition if\\nage = int(input(\\'Quel est votre age ? \\'))\\n\\nif age >= 18:\\n    print(\\'Vous etes majeur !\\')\\n    print(\\'Vous pouvez voter.\\')')">
                    🐍 Charger
                </button>
                <div class="code-content">
age = <span class="code-keyword">int</span>(<span class="code-keyword">input</span>(<span class="code-string">"Quel est votre age ? "</span>))

<span class="code-keyword">if</span> age >= <span class="code-number">18</span>:
    <span class="code-keyword">print</span>(<span class="code-string">"Vous etes majeur !"</span>)
    <span class="code-keyword">print</span>(<span class="code-string">"Vous pouvez voter."</span>)
                </div>
            </div>
            <div class="highlight-box">
                <strong>Important :</strong> Notez l'indentation (le décalage de 4 espaces) des lignes après les deux-points <code>:</code>. En Python, l'indentation est obligatoire et définit les blocs de code !
            </div>
        `
    },
    ifelseif: {
        icon: 'icon-ifelseif',
        emoji: '🌟',
        title: 'if...elif...else',
        subtitle: 'Enchaîner les conditions',
        content: `
            <div class="section-text">
                Pour gérer plusieurs cas de figure, Python propose les structures <code>if...else</code> et <code>if...elif...else</code>.
            </div>
            <div class="code-block">
                <button class="code-load-button" onclick="loadCodeIntoConsole('# Structure if...else\\nage = int(input(\\'Quel est votre age ? \\'))\\n\\nif age >= 18:\\n    print(\\'Vous etes majeur !\\')\\nelse:\\n    print(\\'Vous etes mineur.\\')')">
                    🐍 Charger
                </button>
                <div class="code-content">
<span class="code-comment"># Structure if...else</span>
age = <span class="code-keyword">int</span>(<span class="code-keyword">input</span>(<span class="code-string">"Quel est votre age ? "</span>))

<span class="code-keyword">if</span> age >= <span class="code-number">18</span>:
    <span class="code-keyword">print</span>(<span class="code-string">"Vous etes majeur !"</span>)
<span class="code-keyword">else</span>:
    <span class="code-keyword">print</span>(<span class="code-string">"Vous etes mineur."</span>)
                </div>
            </div>
            <div class="code-block">
                <button class="code-load-button" onclick="loadCodeIntoConsole('# Structure if...elif...else pour plusieurs conditions\\nnote = float(input(\\'Entrez votre note sur 20 : \\'))\\n\\nif note >= 16:\\n    print(\\'Mention Très Bien\\')\\nelif note >= 14:\\n    print(\\'Mention Bien\\')\\nelif note >= 12:\\n    print(\\'Mention Assez Bien\\')\\nelif note >= 10:\\n    print(\\'Passable\\')\\nelse:\\n    print(\\'Insuffisant\\')')">
                    🐍 Charger
                </button>
                <div class="code-content">
<span class="code-comment"># Structure if...elif...else pour plusieurs conditions</span>
note = <span class="code-keyword">float</span>(<span class="code-keyword">input</span>(<span class="code-string">"Entrez votre note sur 20 : "</span>))

<span class="code-keyword">if</span> note &gt;= <span class="code-number">16</span>:
    <span class="code-keyword">print</span>(<span class="code-string">"Mention Très Bien"</span>)
<span class="code-keyword">elif</span> note &gt;= <span class="code-number">14</span>:
    <span class="code-keyword">print</span>(<span class="code-string">"Mention Bien"</span>)
<span class="code-keyword">elif</span> note &gt;= <span class="code-number">12</span>:
    <span class="code-keyword">print</span>(<span class="code-string">"Mention Assez Bien"</span>)
<span class="code-keyword">elif</span> note &gt;= <span class="code-number">10</span>:
    <span class="code-keyword">print</span>(<span class="code-string">"Passable"</span>)
<span class="code-keyword">else</span>:
    <span class="code-keyword">print</span>(<span class="code-string">"Insuffisant"</span>)
                </div>
            </div>
            <div class="highlight-box">
                <strong>elif</strong> est la contraction de "else if". Il permet d'enchaîner plusieurs conditions de manière élégante.
            </div>
        `
    },
    logical: {
        icon: 'icon-logical',
        emoji: '🧠',
        title: 'Opérateurs Logiques',
        subtitle: 'Combiner les conditions',
        content: `
            <div class="section-text">
                Les opérateurs logiques permettent de combiner plusieurs conditions.
            </div>
            <div class="concept-animation">
                <h3 style="color: #ffd700; margin-bottom: 20px;">🔗 Les 3 opérateurs logiques</h3>
                <div class="type-animation">
                    <div class="type-demo">
                        <div style="font-weight: bold; color: #ffd700;">and</div>
                        <div style="color: #ccc; font-size: 0.9rem;">ET logique</div>
                        <div style="font-size: 0.8rem; color: #999;">Toutes vraies</div>
                    </div>
                    <div class="type-demo">
                        <div style="font-weight: bold; color: #ffd700;">or</div>
                        <div style="color: #ccc; font-size: 0.9rem;">OU logique</div>
                        <div style="font-size: 0.8rem; color: #999;">Au moins une vraie</div>
                    </div>
                    <div class="type-demo">
                        <div style="font-weight: bold; color: #ffd700;">not</div>
                        <div style="color: #ccc; font-size: 0.9rem;">NON logique</div>
                        <div style="font-size: 0.8rem; color: #999;">Inverse le résultat</div>
                    </div>
                </div>
            </div>
            <div class="code-block">
                <button class="code-load-button" onclick="loadCodeIntoConsole('# Operateurs logiques\\nage = int(input(\\'Votre age ? \\'))\\npermis = input(\\'Avez-vous le permis ? (oui/non) \\')\\n\\nif age >= 18 and permis == \\'oui\\':\\n    print(\\'Vous pouvez conduire seul !\\')\\nelif age >= 16 and permis == \\'oui\\':\\n    print(\\'Vous pouvez faire la conduite accompagnée.\\')\\nelse:\\n    print(\\'Vous ne pouvez pas encore conduire.\\')')">
                    🐍 Charger
                </button>
                <div class="code-content">
age = <span class="code-keyword">int</span>(<span class="code-keyword">input</span>(<span class="code-string">"Votre âge ? "</span>))
permis = <span class="code-keyword">input</span>(<span class="code-string">"Avez-vous le permis ? (oui/non) "</span>)

<span class="code-keyword">if</span> age &gt;= <span class="code-number">18</span> <span class="code-keyword">and</span> permis == <span class="code-string">"oui"</span>:
    <span class="code-keyword">print</span>(<span class="code-string">"Vous pouvez conduire seul !"</span>)
<span class="code-keyword">elif</span> age &gt;= <span class="code-number">16</span> <span class="code-keyword">and</span> permis == <span class="code-string">"oui"</span>:
    <span class="code-keyword">print</span>(<span class="code-string">"Vous pouvez faire la conduite accompagnée."</span>)
<span class="code-keyword">else</span>:
    <span class="code-keyword">print</span>(<span class="code-string">"Vous ne pouvez pas encore conduire."</span>)
                </div>
            </div>
        `
    },
    exercises2: {
        icon: 'icon-exercises',
        emoji: '💻',
        title: 'Exercices',
        subtitle: 'Opérations et conditions',
        content: `
            <div class="section-text">
                Mettez en pratique les opérations arithmétiques, les f-strings et les conditions avec ces exercices progressifs.
            </div>
            <div class="exercises-grid">
                <div class="exercise-card">
                    <div class="exercise-difficulty">Facile</div>
                    <div class="exercise-title">Périmètre d'un rectangle</div>
                    <div class="exercise-desc">
                        Demandez à l'utilisateur la longueur et la largeur d'un rectangle en mètres. Calculez et affichez le périmètre en utilisant la formule : périmètre = 2 × (longueur + largeur).
                    </div>
                    
                    <div class="exercise-steps">
                        <strong>Ce qu'il faut faire :</strong>
                        <ol>
                            <li>Demander la longueur avec <code>input()</code> et convertir en <code>float()</code></li>
                            <li>Demander la largeur avec <code>input()</code> et convertir en <code>float()</code></li>
                            <li>Calculer le périmètre : <code>perimetre = 2 * (longueur + largeur)</code></li>
                            <li>Afficher le résultat avec une f-string</li>
                        </ol>
                    </div>
                    
                    <div style="text-align: center; margin-top: 15px;">
                        <button class="hint-button" onclick="toggleHint('hint2_1')" style="
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
                        <button style="
                            background: rgba(76, 175, 80, 0.1);
                            border: 2px solid rgba(76, 175, 80, 0.3);
                            border-radius: 8px;
                            padding: 8px 16px;
                            color: rgba(76, 175, 80, 0.6);
                            cursor: not-allowed;
                            font-size: 0.9rem;
                            font-weight: 600;
                            opacity: 0.7;
                        " title="Solution verrouillée">
                            🔒 Solution
                        </button>
                    </div>
                    <div id="hint2_1" class="hint-content" style="
                        display: none;
                        background: rgba(255, 215, 0, 0.1);
                        border: 2px solid rgba(255, 215, 0, 0.3);
                        border-radius: 12px;
                        padding: 15px;
                        margin-top: 15px;
                        color: #ffd700;
                        font-style: italic;
                    ">
                        🔍 <strong>Indice :</strong> N'oubliez pas les parenthèses dans le calcul ! Utilisez une f-string pour un affichage clair : <code>f"Le périmètre est de {perimetre} mètres."</code>
                    </div>
                    <div class="console-output" style="margin-top: 15px;">
                        <strong>Exemple d'exécution :</strong><br>
                        Entrez la longueur du rectangle (en mètres) : 5.5<br>
                        Entrez la largeur du rectangle (en mètres) : 3.2<br>
                        Le périmètre du rectangle est de 17.4 mètres.
                    </div>
                </div>
                
                <div class="exercise-card">
                    <div class="exercise-difficulty">Facile</div>
                    <div class="exercise-title">Surface d'un rectangle</div>
                    <div class="exercise-desc">
                        Demandez à l'utilisateur la longueur et la largeur d'un rectangle en mètres. Calculez et affichez la surface en utilisant la formule : surface = longueur × largeur.
                    </div>
                    
                    <div class="exercise-steps">
                        <strong>Ce qu'il faut faire :</strong>
                        <ol>
                            <li>Demander la longueur et la largeur</li>
                            <li>Convertir en nombres décimaux avec <code>float()</code></li>
                            <li>Calculer la surface : <code>surface = longueur * largeur</code></li>
                            <li>Afficher le résultat avec une f-string</li>
                        </ol>
                    </div>
                    
                    <div style="text-align: center; margin-top: 15px;">
                        <button class="hint-button" onclick="toggleHint('hint2_2')" style="
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
                        <button style="
                            background: rgba(76, 175, 80, 0.1);
                            border: 2px solid rgba(76, 175, 80, 0.3);
                            border-radius: 8px;
                            padding: 8px 16px;
                            color: rgba(76, 175, 80, 0.6);
                            cursor: not-allowed;
                            font-size: 0.9rem;
                            font-weight: 600;
                            opacity: 0.7;
                        " title="Solution verrouillée">
                            🔒 Solution
                        </button>
                    </div>
                    <div id="hint2_2" class="hint-content" style="
                        display: none;
                        background: rgba(255, 215, 0, 0.1);
                        border: 2px solid rgba(255, 215, 0, 0.3);
                        border-radius: 12px;
                        padding: 15px;
                        margin-top: 15px;
                        color: #ffd700;
                        font-style: italic;
                    ">
                        🔍 <strong>Indice :</strong> La surface se mesure en mètres carrés (m²). Utilisez <code>f"La surface est de {surface} m²."</code>
                    </div>
                    <div class="console-output" style="margin-top: 15px;">
                        <strong>Exemple d'exécution :</strong><br>
                        Entrez la longueur du rectangle (en mètres) : 4.5<br>
                        Entrez la largeur du rectangle (en mètres) : 2.8<br>
                        La surface du rectangle est de 12.6 m².
                    </div>
                </div>
                
                <div class="exercise-card">
                    <div class="exercise-difficulty">Facile</div>
                    <div class="exercise-title">Présentation avec f-string</div>
                    <div class="exercise-desc">
                        Créez des variables pour un prénom, un nom, et un âge. Utilisez une f-string pour afficher une phrase de présentation complète comme "Je m'appelle [prénom] [nom] et j'ai [âge] ans.".
                    </div>
                    <div style="text-align: center; margin-top: 15px;">
                        <button class="hint-button" onclick="toggleHint('hint3')" style="
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
                        <button style="
                            background: rgba(76, 175, 80, 0.1);
                            border: 2px solid rgba(76, 175, 80, 0.3);
                            border-radius: 8px;
                            padding: 8px 16px;
                            color: rgba(76, 175, 80, 0.6);
                            cursor: not-allowed;
                            font-size: 0.9rem;
                            font-weight: 600;
                            opacity: 0.7;
                        " title="Solution verrouillée">
                            🔒 Solution
                        </button>
                    </div>
                    <div id="hint3" class="hint-content" style="
                        display: none;
                        background: rgba(255, 215, 0, 0.1);
                        border: 2px solid rgba(255, 215, 0, 0.3);
                        border-radius: 12px;
                        padding: 15px;
                        margin-top: 15px;
                        color: #ffd700;
                        font-style: italic;
                    ">
                        🔍 <strong>Indice :</strong> N'oubliez pas le 'f' avant les guillemets et mettez vos variables entre accolades {} dans la chaîne.
                    </div>
                    <div class="console-output" style="margin-top: 15px;">
                        <strong>Exemple d'exécution :</strong><br>
                        Je m'appelle Lucas Martin et j'ai 16 ans.
                    </div>
                </div>
                
                <div class="exercise-card">
                    <div class="exercise-difficulty">Moyen</div>
                    <div class="exercise-title">Calculateur de Notes</div>
                    <div class="exercise-desc">
                        Créez un programme qui demande une note sur 20, calcule le pourcentage correspondant, et affiche la mention obtenue selon le système français (Très Bien ≥ 16, Bien ≥ 14, Assez Bien ≥ 12, Passable ≥ 10, Insuffisant &lt; 10).
                    </div>
                    
                    <div class="exercise-steps">
                        <strong>Ce qu'il faut faire :</strong>
                        <ol>
                            <li>Demander la note sur 20 et convertir en <code>float()</code></li>
                            <li>Calculer le pourcentage : <code>pourcentage = (note / 20) * 100</code></li>
                            <li>Utiliser if/elif/else pour déterminer la mention</li>
                            <li>Afficher le pourcentage ET la mention</li>
                        </ol>
                    </div>
                    
                    <div style="text-align: center; margin-top: 15px;">
                        <button class="hint-button" onclick="toggleHint('hint2_4')" style="
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
                        <button style="
                            background: rgba(76, 175, 80, 0.1);
                            border: 2px solid rgba(76, 175, 80, 0.3);
                            border-radius: 8px;
                            padding: 8px 16px;
                            color: rgba(76, 175, 80, 0.6);
                            cursor: not-allowed;
                            font-size: 0.9rem;
                            font-weight: 600;
                            opacity: 0.7;
                        " title="Solution verrouillée">
                            🔒 Solution
                        </button>
                    </div>
                    <div id="hint2_4" class="hint-content" style="
                        display: none;
                        background: rgba(255, 215, 0, 0.1);
                        border: 2px solid rgba(255, 215, 0, 0.3);
                        border-radius: 12px;
                        padding: 15px;
                        margin-top: 15px;
                        color: #ffd700;
                        font-style: italic;
                    ">
                        🔍 <strong>Indice :</strong> Commencez par la mention la plus haute (≥ 16) et descendez. Le pourcentage se calcule en divisant par 20 puis multipliant par 100.
                    </div>
                    <div class="console-output" style="margin-top: 15px;">
                        <strong>Exemple d'exécution :</strong><br>
                        Entrez votre note sur 20 : 15.5<br>
                        Votre note : 15.5/20 (77.5%)<br>
                        Mention : Bien
                    </div>
                </div>
                
                <div class="exercise-card">
                    <div class="exercise-difficulty">Moyen</div>
                    <div class="exercise-title">Contrôle d'accès parc d'attraction</div>
                    <div class="exercise-desc">
                        Demandez l'âge d'un visiteur et affichez :<br>
                        • "Accès interdit" si moins de 5 ans<br>
                        • "Accès avec accompagnant obligatoire" entre 5 et 12 ans (inclus)<br>
                        • "Accès libre" pour les plus de 12 ans
                    </div>
                    <div style="text-align: center; margin-top: 15px;">
                        <button class="hint-button" onclick="toggleHint('hint4')" style="
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
                        <button style="
                            background: rgba(76, 175, 80, 0.1);
                            border: 2px solid rgba(76, 175, 80, 0.3);
                            border-radius: 8px;
                            padding: 8px 16px;
                            color: rgba(76, 175, 80, 0.6);
                            cursor: not-allowed;
                            font-size: 0.9rem;
                            font-weight: 600;
                            opacity: 0.7;
                        " title="Solution verrouillée">
                            🔒 Solution
                        </button>
                    </div>
                    <div id="hint4" class="hint-content" style="
                        display: none;
                        background: rgba(255, 215, 0, 0.1);
                        border: 2px solid rgba(255, 215, 0, 0.3);
                        border-radius: 12px;
                        padding: 15px;
                        margin-top: 15px;
                        color: #ffd700;
                        font-style: italic;
                    ">
                        🔍 <strong>Indice :</strong> Pour "entre 5 et 12 ans inclus", utilisez l'opérateur 'and' pour vérifier que l'âge est >= 5 ET <= 12.
                    </div>
                    <div class="console-output" style="margin-top: 15px;">
                        <strong>Exemple d'exécution :</strong><br>
                        Quel est l'âge du visiteur ? 8<br>
                        Accès avec accompagnant obligatoire
                    </div>
                </div>
                
                <div class="exercise-card">
                    <div class="exercise-difficulty">Avancé</div>
                    <div class="exercise-title">Calculateur d'aire de cercle</div>
                    <div class="exercise-desc">
                        Créez un programme qui demande le rayon d'un cercle en centimètres, calcule son aire en utilisant la formule aire = π × rayon², et détermine si c'est un "petit cercle" (&lt; 100 cm²), "moyen" (100-500 cm²) ou "grand cercle" (&gt; 500 cm²).
                    </div>
                    
                    <div class="exercise-steps">
                        <strong>Ce qu'il faut faire :</strong>
                        <ol>
                            <li>Demander le rayon et convertir en <code>float()</code></li>
                            <li>Utiliser pi = 3.14159 (ou importer math.pi)</li>
                            <li>Calculer l'aire : <code>aire = pi * rayon ** 2</code></li>
                            <li>Utiliser des conditions pour classer le cercle</li>
                        </ol>
                    </div>
                    
                    <div style="text-align: center; margin-top: 15px;">
                        <button class="hint-button" onclick="toggleHint('hint2_6')" style="
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
                        <button style="
                            background: rgba(76, 175, 80, 0.1);
                            border: 2px solid rgba(76, 175, 80, 0.3);
                            border-radius: 8px;
                            padding: 8px 16px;
                            color: rgba(76, 175, 80, 0.6);
                            cursor: not-allowed;
                            font-size: 0.9rem;
                            font-weight: 600;
                            opacity: 0.7;
                        " title="Solution verrouillée">
                            🔒 Solution
                        </button>
                    </div>
                    <div id="hint2_6" class="hint-content" style="
                        display: none;
                        background: rgba(255, 215, 0, 0.1);
                        border: 2px solid rgba(255, 215, 0, 0.3);
                        border-radius: 12px;
                        padding: 15px;
                        margin-top: 15px;
                        color: #ffd700;
                        font-style: italic;
                    ">
                        🔍 <strong>Indice :</strong> Définissez <code>pi = 3.14159</code> au début. Utilisez l'opérateur ** 2 pour élever au carré le rayon.
                    </div>
                    <div class="console-output" style="margin-top: 15px;">
                        <strong>Exemple d'exécution :</strong><br>
                        Entrez le rayon du cercle (en cm) : 8<br>
                        L'aire du cercle est de 201.06 cm²<br>
                        C'est un cercle de taille moyenne.
                    </div>
                </div>
                
                <div class="exercise-card">
                    <div class="exercise-difficulty">Avancé</div>
                    <div class="exercise-title">Calculateur de Moyenne Pondérée</div>
                    <div class="exercise-desc">
                        Créez un programme qui calcule la moyenne pondérée de 3 matières (coefficients différents). Demandez les 3 notes et leurs coefficients, calculez la moyenne pondérée, et indiquez si l'élève "passe au niveau suivant" (≥10) ou "doit redoubler" (&lt;10).
                    </div>
                    
                    <div class="exercise-steps">
                        <strong>Ce qu'il faut faire :</strong>
                        <ol>
                            <li>Demander 3 notes et 3 coefficients</li>
                            <li>Calculer la somme pondérée : <code>somme = (note1*coef1) + (note2*coef2) + (note3*coef3)</code></li>
                            <li>Calculer la somme des coefficients</li>
                            <li>Moyenne pondérée = somme pondérée / somme des coefficients</li>
                        </ol>
                    </div>
                    
                    <div style="text-align: center; margin-top: 15px;">
                        <button class="hint-button" onclick="toggleHint('hint2_7')" style="
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
                        <button style="
                            background: rgba(76, 175, 80, 0.1);
                            border: 2px solid rgba(76, 175, 80, 0.3);
                            border-radius: 8px;
                            padding: 8px 16px;
                            color: rgba(76, 175, 80, 0.6);
                            cursor: not-allowed;
                            font-size: 0.9rem;
                            font-weight: 600;
                            opacity: 0.7;
                        " title="Solution verrouillée">
                            🔒 Solution
                        </button>
                    </div>
                    <div id="hint2_7" class="hint-content" style="
                        display: none;
                        background: rgba(255, 215, 0, 0.1);
                        border: 2px solid rgba(255, 215, 0, 0.3);
                        border-radius: 12px;
                        padding: 15px;
                        margin-top: 15px;
                        color: #ffd700;
                        font-style: italic;
                    ">
                        🔍 <strong>Indice :</strong> La moyenne pondérée = (note1×coef1 + note2×coef2 + note3×coef3) / (coef1 + coef2 + coef3)
                    </div>
                    <div class="console-output" style="margin-top: 15px;">
                        <strong>Exemple d'exécution :</strong><br>
                        Note Maths (coef 4) : 15<br>
                        Note Français (coef 3) : 12<br>
                        Note Anglais (coef 2) : 14<br>
                        Moyenne pondérée : 13.67/20<br>
                        Résultat : Passe au niveau suivant !
                    </div>
                </div>
                
                <div class="exercise-card">
                    <div class="exercise-difficulty">Expert</div>
                    <div class="exercise-title">Calculateur de Volume et Surface de Cylindre</div>
                    <div class="exercise-desc">
                        Créez un programme complet qui calcule le volume ET la surface totale d'un cylindre. Demandez le rayon et la hauteur, calculez les deux valeurs en utilisant les bonnes formules, et déterminez si c'est un "petit", "moyen" ou "grand" cylindre selon le volume.
                    </div>
                    
                    <div class="exercise-steps">
                        <strong>Ce qu'il faut faire :</strong>
                        <ol>
                            <li>Demander rayon et hauteur en centimètres</li>
                            <li>Calculer le volume : <code>V = π × rayon² × hauteur</code></li>
                            <li>Calculer la surface totale : <code>S = 2π × rayon × (rayon + hauteur)</code></li>
                            <li>Classer selon le volume : petit (&lt; 1000 cm³), moyen (1000-5000 cm³), grand (&gt; 5000 cm³)</li>
                        </ol>
                    </div>
                    
                    <div style="text-align: center; margin-top: 15px;">
                        <button class="hint-button" onclick="toggleHint('hint2_8')" style="
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
                        <button style="
                            background: rgba(76, 175, 80, 0.1);
                            border: 2px solid rgba(76, 175, 80, 0.3);
                            border-radius: 8px;
                            padding: 8px 16px;
                            color: rgba(76, 175, 80, 0.6);
                            cursor: not-allowed;
                            font-size: 0.9rem;
                            font-weight: 600;
                            opacity: 0.7;
                        " title="Solution verrouillée">
                            🔒 Solution
                        </button>
                    </div>
                    <div id="hint2_8" class="hint-content" style="
                        display: none;
                        background: rgba(255, 215, 0, 0.1);
                        border: 2px solid rgba(255, 215, 0, 0.3);
                        border-radius: 12px;
                        padding: 15px;
                        margin-top: 15px;
                        color: #ffd700;
                        font-style: italic;
                    ">
                        🔍 <strong>Indice :</strong> Utilisez pi = 3.14159. Pour la surface totale, pensez aux deux bases circulaires + surface latérale. Organisez vos calculs étape par étape !
                    </div>
                    <div class="console-output" style="margin-top: 15px;">
                        <strong>Exemple d'exécution :</strong><br>
                        Rayon du cylindre (cm) : 5<br>
                        Hauteur du cylindre (cm) : 12<br>
                        Volume : 942.48 cm³<br>
                        Surface totale : 534.07 cm²<br>
                        Catégorie : Petit cylindre
                    </div>
                </div>
                
                <div class="exercise-card">
                    <div class="exercise-difficulty">Expert</div>
                    <div class="exercise-title">Calculateur de Trajets Scolaires</div>
                    <div class="exercise-desc">
                        Créez un calculateur de coûts pour les trajets domicile-lycée. Demandez la distance aller (km), le nombre de jours de cours par semaine, le prix de l'essence (/L), et la consommation de la voiture (L/100km). Calculez le coût quotidien, hebdomadaire et mensuel, puis proposez des recommandations selon le coût.
                    </div>
                    
                    <div class="exercise-steps">
                        <strong>Ce qu'il faut faire :</strong>
                        <ol>
                            <li>Demander : distance aller, jours/semaine, prix essence, consommation</li>
                            <li>Calculer distance quotidienne : <code>distance_jour = distance_aller * 2</code></li>
                            <li>Calculer litres/jour : <code>litres = (distance_jour * consommation) / 100</code></li>
                            <li>Calculer coûts quotidien, hebdomadaire (×jours), mensuel (×4 semaines)</li>
                            <li>Donner des conseils selon le coût mensuel</li>
                        </ol>
                    </div>
                    
                    <div style="text-align: center; margin-top: 15px;">
                        <button class="hint-button" onclick="toggleHint('hint2_9')" style="
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
                        <button style="
                            background: rgba(76, 175, 80, 0.1);
                            border: 2px solid rgba(76, 175, 80, 0.3);
                            border-radius: 8px;
                            padding: 8px 16px;
                            color: rgba(76, 175, 80, 0.6);
                            cursor: not-allowed;
                            font-size: 0.9rem;
                            font-weight: 600;
                            opacity: 0.7;
                        " title="Solution verrouillée">
                            🔒 Solution
                        </button>
                    </div>
                    <div id="hint2_9" class="hint-content" style="
                        display: none;
                        background: rgba(255, 215, 0, 0.1);
                        border: 2px solid rgba(255, 215, 0, 0.3);
                        border-radius: 12px;
                        padding: 15px;
                        margin-top: 15px;
                        color: #ffd700;
                        font-style: italic;
                    ">
                        🔍 <strong>Indice :</strong> Pensez aller-retour ! Si la consommation est 7L/100km et qu'on fait 20km/jour, alors litres = (20 * 7) / 100 = 1.4L
                    </div>
                    <div class="console-output" style="margin-top: 15px;">
                        <strong>Exemple d'exécution :</strong><br>
                        Distance domicile-lycée (km) : 15<br>
                        Jours de cours/semaine : 5<br>
                        Prix essence (€/L) : 1.65<br>
                        Consommation (L/100km) : 7<br>
                        Coût quotidien : 3.47€<br>
                        Coût hebdomadaire : 17.33€<br>
                        Coût mensuel : 69.30€<br>
                        Conseil : Coût élevé - Envisagez les transports en commun !
                    </div>
                </div>
            </div>
        `
    }
};

// Lesson 3 Content Data
const lesson3Data = {
    introduction: {
        icon: 'icon-functions',
        emoji: '🔧',
        title: 'Qu\'est-ce qu\'une Fonction ?',
        subtitle: 'Organiser le code en blocs',
        content: `
            <div class="section-text">
                Une fonction est un bloc de code qui effectue une tâche spécifique. 
                Cela permet de :
            </div>
            <div class="highlight-box">
                <ul style="margin: 10px 0; padding-left: 20px;">
                    <li><strong>Réutiliser le code</strong> : Exécuter le même bloc plusieurs fois sans réécriture</li>
                    <li><strong>Organiser le code</strong> : Diviser un programme en parties logiques</li>
                    <li><strong>Simplifier la maintenance</strong> : Modifier une tâche à un seul endroit</li>
                </ul>
            </div>
            <div class="concept-animation">
                <h3 style="color: #ffd700; margin-bottom: 15px;">💡 Analogie Spotify</h3>
                <div class="practical-example">
                    <div class="example-title">🎵 Analogie Spotify</div>
                    <p>Imaginez une app comme Spotify : vous tapez le nom d'un artiste (paramètre), 
                    l'app fait ses recherches dans sa base de données, et elle vous retourne une playlist (résultat). 
                    Vous n'avez pas besoin de savoir comment l'algorithme fonctionne à l'intérieur !</p>
                </div>
            </div>
        `
    },
    definition: {
        icon: 'icon-code',
        emoji: '📝',
        title: 'Définir une Fonction Simple',
        subtitle: 'Syntaxe de base avec def',
        content: `
            <div class="section-text">
                Pour créer une fonction, on utilise le mot-clé <code>def</code> (pour "définir"), 
                suivi de son nom, de parenthèses <code>()</code> et de deux-points <code>:</code>. 
                Le code à l'intérieur doit être indenté (décalé de 4 espaces).
            </div>
            <div class="code-block">
                <button class="code-load-button" onclick="loadCodeIntoConsole('# Un exemple de fonction simple\ndef saluer():\n    print(\'Bonjour !\')\n    print(\'Bienvenue dans le programme.\')\n\n# Pour utiliser (ou \'appeler\') la fonction\nsaluer()\n# Affiche :\n# Bonjour !\n# Bienvenue dans le programme.')">
                    🐍 Charger
                </button>
                <div class="code-content">
<span class="code-comment"># Un exemple de fonction simple</span>
<span class="code-keyword">def</span> <span class="code-function">saluer</span>():
    <span class="code-keyword">print</span>(<span class="code-string">"Bonjour !"</span>)
    <span class="code-keyword">print</span>(<span class="code-string">"Bienvenue dans le programme."</span>)

<span class="code-comment"># Pour utiliser (ou "appeler") la fonction</span>
<span class="code-function">saluer</span>()
<span class="code-comment"># Affiche :</span>
<span class="code-comment"># Bonjour !</span>
<span class="code-comment"># Bienvenue dans le programme.</span>
                </div>
            </div>
            <div class="highlight-box">
                <strong>Points importants :</strong><br>
                • Le mot-clé <code>def</code> définit une fonction<br>
                • Les parenthèses <code>()</code> contiennent les paramètres (ici aucun)<br>
                • Les deux-points <code>:</code> marquent le début du bloc de code<br>
                • L'indentation (4 espaces) définit ce qui appartient à la fonction
            </div>
        `
    },
    parameters: {
        icon: 'icon-input',
        emoji: '📥',
        title: 'Les Paramètres',
        subtitle: 'Passer des informations',
        content: `
            <div class="section-text">
                Les fonctions peuvent accepter des informations en entrée, appelées <strong>paramètres</strong>. 
                Les paramètres agissent comme des variables temporaires.
            </div>
            <div class="code-block">
                <button class="code-load-button" onclick="loadCodeIntoConsole('# La fonction \'saluer_personne\' prend un paramètre \'nom\'\ndef saluer_personne(nom):\n    print(f\'Bonjour, {nom} !\')\n\n# On appelle la fonction avec une valeur\nsaluer_personne(\'Marie\')\nsaluer_personne(\'Alex\')\n# Affiche :\n# Bonjour, Marie !\n# Bonjour, Alex !')">
                    🐍 Charger
                </button>
                <div class="code-content">
<span class="code-comment"># La fonction 'saluer_personne' prend un paramètre 'nom'</span>
<span class="code-keyword">def</span> <span class="code-function">saluer_personne</span>(nom):
    <span class="code-keyword">print</span>(<span class="code-string">f"Bonjour, {nom} !"</span>)

<span class="code-comment"># On appelle la fonction avec une valeur</span>
<span class="code-function">saluer_personne</span>(<span class="code-string">"Marie"</span>)
<span class="code-function">saluer_personne</span>(<span class="code-string">"Alex"</span>)
<span class="code-comment"># Affiche :</span>
<span class="code-comment"># Bonjour, Marie !</span>
<span class="code-comment"># Bonjour, Alex !</span>
                </div>
            </div>
            <div class="code-block">
                <button class="code-load-button" onclick="loadCodeIntoConsole('def presenter_personne(prenom, age, ville):\n    print(f\'Je m\\\'appelle {prenom}, j\\\'ai {age} ans et j\\\'habite à {ville}.\')\n\n# Appel avec plusieurs arguments\npresenter_personne(\'Emma\', 16, \'Brooklyn\')\npresenter_personne(\'Lucas\', 15, \'Manhattan\')\n# Affiche :\n# Je m\'appelle Emma, j\'ai 16 ans et j\'habite à Brooklyn.\n# Je m\'appelle Lucas, j\'ai 15 ans et j\'habite à Manhattan.')">
                    🐍 Charger
                </button>
                <div class="code-content">
<span class="code-keyword">def</span> <span class="code-function">presenter_personne</span>(prenom, age, ville):
    <span class="code-keyword">print</span>(<span class="code-string">f"Je m'appelle {prenom}, j'ai {age} ans et j'habite à {ville}."</span>)

<span class="code-comment"># Appel avec plusieurs arguments</span>
<span class="code-function">presenter_personne</span>(<span class="code-string">"Emma"</span>, <span class="code-number">16</span>, <span class="code-string">"Brooklyn"</span>)
<span class="code-function">presenter_personne</span>(<span class="code-string">"Lucas"</span>, <span class="code-number">15</span>, <span class="code-string">"Manhattan"</span>)
<span class="code-comment"># Affiche :</span>
<span class="code-comment"># Je m'appelle Emma, j'ai 16 ans et j'habite à Brooklyn.</span>
<span class="code-comment"># Je m'appelle Lucas, j'ai 15 ans et j'habite à Manhattan.</span>
                </div>
            </div>
        `
    },
    return_values: {
        icon: 'icon-output',
        emoji: '📤',
        title: 'La Valeur de Retour',
        subtitle: 'Renvoyer un résultat',
        content: `
            <div class="section-text">
                Une fonction peut renvoyer une valeur en utilisant le mot-clé <code>return</code>. 
                Cette valeur peut ensuite être stockée dans une variable ou utilisée ailleurs.
            </div>
            <div class="code-block">
                <button class="code-load-button" onclick="loadCodeIntoConsole('# Cette fonction calcule le carré d\'un nombre\ndef calculer_carre(nombre):\n    resultat = nombre ** 2\n    return resultat\n\n# On stocke le résultat dans une variable\ncarre_de_5 = calculer_carre(5)\nprint(f\'Le carré de 5 est {carre_de_5}.\')\n# Affiche : Le carré de 5 est 25.')">
                    🐍 Charger
                </button>
                <div class="code-content">
<span class="code-comment"># Cette fonction calcule le carré d'un nombre</span>
<span class="code-keyword">def</span> <span class="code-function">calculer_carre</span>(nombre):
    resultat = nombre ** <span class="code-number">2</span>
    <span class="code-keyword">return</span> resultat

<span class="code-comment"># On stocke le résultat dans une variable</span>
carre_de_5 = <span class="code-function">calculer_carre</span>(<span class="code-number">5</span>)
<span class="code-keyword">print</span>(<span class="code-string">f"Le carré de 5 est {carre_de_5}."</span>)
<span class="code-comment"># Affiche : Le carré de 5 est 25.</span>
                </div>
            </div>
            <div class="code-block">
                <button class="code-load-button" onclick="loadCodeIntoConsole('def calculer_surface_rectangle(longueur, largeur):\n    surface = longueur * largeur\n    return f\'La surface du rectangle est de {surface} m²\'\n\n# Utilisation\nmessage = calculer_surface_rectangle(5, 3)\nprint(message)  # La surface du rectangle est de 15 m²')">
                    🐍 Charger
                </button>
                <div class="code-content">
<span class="code-keyword">def</span> <span class="code-function">calculer_surface_rectangle</span>(longueur, largeur):
    surface = longueur * largeur
    <span class="code-keyword">return</span> <span class="code-string">f"La surface du rectangle est de {surface} m²"</span>

<span class="code-comment"># Utilisation</span>
message = <span class="code-function">calculer_surface_rectangle</span>(<span class="code-number">5</span>, <span class="code-number">3</span>)
<span class="code-keyword">print</span>(message)  <span class="code-comment"># La surface du rectangle est de 15 m²</span>
                </div>
            </div>
        `
    },
    docstrings: {
        icon: 'icon-documentation',
        emoji: '📚',
        title: 'Les Docstrings',
        subtitle: 'Documenter vos fonctions',
        content: `
            <div class="section-text">
                Une <strong>docstring</strong> est une chaîne de caractères qui décrit ce que fait une fonction. 
                Elle se place juste après la définition, entre triple guillemets <code>"""</code>.
            </div>
            <div class="code-block">
                <button class="code-load-button" onclick="loadCodeIntoConsole('def convertir_celsius_fahrenheit(celsius):\n    \'\'\'\n    Convertit une température de Celsius en Fahrenheit.\n    \n    Paramètre:\n        celsius (float): Température en degrés Celsius\n    \n    Retourne:\n        float: Température en degrés Fahrenheit\n    \'\'\'\n    fahrenheit = (celsius * 9/5) + 32\n    return fahrenheit\n\n# Test\ntemp_f = convertir_celsius_fahrenheit(25)\nprint(f\'25°C = {temp_f}°F\')  # 25°C = 77.0°F')">
                    🐍 Charger
                </button>
                <div class="code-content">
<span class="code-keyword">def</span> <span class="code-function">convertir_celsius_fahrenheit</span>(celsius):
    <span class="code-string">"""
    Convertit une température de Celsius en Fahrenheit.
    
    Paramètre:
        celsius (float): Température en degrés Celsius
    
    Retourne:
        float: Température en degrés Fahrenheit
    """</span>
    fahrenheit = (celsius * <span class="code-number">9</span>/<span class="code-number">5</span>) + <span class="code-number">32</span>
    <span class="code-keyword">return</span> fahrenheit

<span class="code-comment"># Test</span>
temp_f = <span class="code-function">convertir_celsius_fahrenheit</span>(<span class="code-number">25</span>)
<span class="code-keyword">print</span>(<span class="code-string">f"25°C = {temp_f}°F"</span>)  <span class="code-comment"># 25°C = 77.0°F</span>
                </div>
            </div>
            <div class="highlight-box">
                <strong>Bonnes pratiques :</strong><br>
                • Décrivez clairement ce que fait la fonction<br>
                • Listez les paramètres et leurs types<br>
                • Indiquez ce que renvoie la fonction<br>
                • Ajoutez des exemples si nécessaire
            </div>
        `
    },
    complete_example: {
        icon: 'icon-calculator',
        emoji: '📊',
        title: 'Exemple Complet',
        subtitle: 'Calculateur de moyenne',
        content: `
            <div class="section-text">
                Voici un exemple complet qui combine tous les concepts : paramètres, calculs, conditions et return.
            </div>
            <div class="code-block">
                <button class="code-load-button" onclick="loadCodeIntoConsole('def calculer_moyenne_notes(note1, note2, note3):\n    \'\'\'\n    Calcule la moyenne de trois notes et donne une appréciation.\n    \n    Paramètres:\n        note1, note2, note3 (float): Les trois notes sur 20\n    \n    Retourne:\n        str: Message avec la moyenne et l\'appréciation\n    \'\'\'\n    moyenne = (note1 + note2 + note3) / 3\n    \n    # Déterminer l\'appréciation\n    if moyenne >= 16:\n        appreciation = \'Excellent !\'\n    elif moyenne >= 14:\n        appreciation = \'Bien\'\n    elif moyenne >= 12:\n        appreciation = \'Assez bien\'\n    elif moyenne >= 10:\n        appreciation = \'Passable\'\n    else:\n        appreciation = \'Insuffisant\'\n    \n    return f\'Moyenne : {moyenne:.1f}/20 - {appreciation}\'\n\n# Tests de la fonction\nprint(calculer_moyenne_notes(15, 17, 14))  # Moyenne : 15.3/20 - Bien\nprint(calculer_moyenne_notes(8, 12, 10))   # Moyenne : 10.0/20 - Passable\nprint(calculer_moyenne_notes(18, 19, 17))  # Moyenne : 18.0/20 - Excellent !')">
                    🐍 Charger
                </button>
                <div class="code-content">
<span class="code-keyword">def</span> <span class="code-function">calculer_moyenne_notes</span>(note1, note2, note3):
    <span class="code-string">"""
    Calcule la moyenne de trois notes et donne une appréciation.
    
    Paramètres:
        note1, note2, note3 (float): Les trois notes sur 20
    
    Retourne:
        str: Message avec la moyenne et l'appréciation
    """</span>
    moyenne = (note1 + note2 + note3) / <span class="code-number">3</span>
    
    <span class="code-comment"># Déterminer l'appréciation</span>
    <span class="code-keyword">if</span> moyenne >= <span class="code-number">16</span>:
        appreciation = <span class="code-string">"Excellent !"</span>
    <span class="code-keyword">elif</span> moyenne >= <span class="code-number">14</span>:
        appreciation = <span class="code-string">"Bien"</span>
    <span class="code-keyword">elif</span> moyenne >= <span class="code-number">12</span>:
        appreciation = <span class="code-string">"Assez bien"</span>
    <span class="code-keyword">elif</span> moyenne >= <span class="code-number">10</span>:
        appreciation = <span class="code-string">"Passable"</span>
    <span class="code-keyword">else</span>:
        appreciation = <span class="code-string">"Insuffisant"</span>
    
    <span class="code-keyword">return</span> <span class="code-string">f"Moyenne : {moyenne:.1f}/20 - {appreciation}"</span>

<span class="code-comment"># Tests de la fonction</span>
<span class="code-keyword">print</span>(<span class="code-function">calculer_moyenne_notes</span>(<span class="code-number">15</span>, <span class="code-number">17</span>, <span class="code-number">14</span>))  <span class="code-comment"># Moyenne : 15.3/20 - Bien</span>
<span class="code-keyword">print</span>(<span class="code-function">calculer_moyenne_notes</span>(<span class="code-number">8</span>, <span class="code-number">12</span>, <span class="code-number">10</span>))   <span class="code-comment"># Moyenne : 10.0/20 - Passable</span>
<span class="code-keyword">print</span>(<span class="code-function">calculer_moyenne_notes</span>(<span class="code-number">18</span>, <span class="code-number">19</span>, <span class="code-number">17</span>))  <span class="code-comment"># Moyenne : 18.0/20 - Excellent !</span>
                </div>
            </div>
        `
    },
    error_handling: {
        icon: 'icon-error',
        emoji: '⚠️',
        title: 'Gestion d\'Erreurs Simple',
        subtitle: 'Prévoir les cas inattendus',
        content: `
            <div class="section-text">
                Il est important de prévoir les cas où une fonction reçoit des valeurs inattendues :
            </div>
            <div class="code-block">
                <button class="code-load-button" onclick="loadCodeIntoConsole('def calculer_age_dans_x_ans(age_actuel, annees):\n    \'\'\'Calcule l\'âge futur en vérifiant les entrées.\'\'\'\n    if age_actuel < 0 or annees < 0:\n        return \'Erreur : les âges et années doivent être positifs\'\n    \n    age_futur = age_actuel + annees\n    return f\'Dans {annees} ans, vous aurez {age_futur} ans.\'\n\n# Tests\nprint(calculer_age_dans_x_ans(16, 5))    # Normal\nprint(calculer_age_dans_x_ans(-5, 3))    # Erreur\nprint(calculer_age_dans_x_ans(16, -2))   # Erreur')">
                    🐍 Charger
                </button>
                <div class="code-content">
<span class="code-keyword">def</span> <span class="code-function">calculer_age_dans_x_ans</span>(age_actuel, annees):
    <span class="code-string">"""Calcule l'âge futur en vérifiant les entrées."""</span>
    <span class="code-keyword">if</span> age_actuel < <span class="code-number">0</span> <span class="code-keyword">or</span> annees < <span class="code-number">0</span>:
        <span class="code-keyword">return</span> <span class="code-string">"Erreur : les âges et années doivent être positifs"</span>
    
    age_futur = age_actuel + annees
    <span class="code-keyword">return</span> <span class="code-string">f"Dans {annees} ans, vous aurez {age_futur} ans."</span>

<span class="code-comment"># Tests</span>
<span class="code-keyword">print</span>(<span class="code-function">calculer_age_dans_x_ans</span>(<span class="code-number">16</span>, <span class="code-number">5</span>))    <span class="code-comment"># Normal</span>
<span class="code-keyword">print</span>(<span class="code-function">calculer_age_dans_x_ans</span>(-<span class="code-number">5</span>, <span class="code-number">3</span>))    <span class="code-comment"># Erreur</span>
<span class="code-keyword">print</span>(<span class="code-function">calculer_age_dans_x_ans</span>(<span class="code-number">16</span>, -<span class="code-number">2</span>))   <span class="code-comment"># Erreur</span>
                </div>
            </div>
            <div class="highlight-box">
                <strong>Conseils :</strong><br>
                • Vérifiez toujours les valeurs d'entrée<br>
                • Retournez des messages d'erreur clairs<br>
                • Testez avec des valeurs limites<br>
                • Documentez les cas d'erreur possibles
            </div>
        `
    },
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
                <div class="exercise-title">Salutation personnalisée</div>
                <div class="exercise-desc">
                    Écrivez une fonction <code>saluer(prenom)</code> qui prend un prénom en paramètre et affiche un message de bienvenue personnalisé avec une f-string.
                </div>
                <div class="exercise-steps">
                    <strong>Ce qu'il faut faire :</strong>
                    <ol>
                        <li>Définir la fonction avec <code>def saluer(prenom):</code></li>
                        <li>Utiliser <code>print()</code> avec une f-string</li>
                        <li>Tester la fonction avec différents prénoms</li>
                    </ol>
                </div>
                <div class="highlight-box">
                    <strong>À vous de jouer !</strong><br>
                    Utilisez ce que vous avez appris sur les fonctions et les f-strings.
                </div>
                <div style="text-align: center; margin-top: 15px;">
                    <button class="hint-button" onclick="toggleHint('hint_func1')" style="
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
                <div id="hint_func1" class="hint-content" style="display: none; background: rgba(255, 215, 0, 0.1); border: 1px solid rgba(255, 215, 0, 0.3); border-radius: 8px; padding: 15px; margin-top: 15px;">
                    <strong>💡 Indice :</strong><br>
                    Utilisez la syntaxe <code>f"Bonjour {prenom} !"</code> pour créer le message personnalisé.
                </div>
            </div>

            <div class="exercise-card">
                <div class="exercise-difficulty">Facile</div>
                <div class="exercise-title">Calculateur simple</div>
                <div class="exercise-desc">
                    Créez une fonction <code>additionner(a, b)</code> qui prend deux nombres et retourne leur somme. Testez-la avec différents nombres.
                </div>
                <div class="exercise-steps">
                    <strong>Ce qu'il faut faire :</strong>
                    <ol>
                        <li>Définir la fonction avec deux paramètres</li>
                        <li>Calculer la somme et la retourner avec <code>return</code></li>
                        <li>Tester avec plusieurs couples de nombres</li>
                    </ol>
                </div>
                <div class="highlight-box">
                    <strong>À retenir !</strong><br>
                    Une fonction qui calcule doit utiliser <code>return</code> pour renvoyer le résultat.
                </div>
                <div style="text-align: center; margin-top: 15px;">
                    <button class="hint-button" onclick="toggleHint('hint_func2')" style="
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
                <div id="hint_func2" class="hint-content" style="display: none; background: rgba(255, 215, 0, 0.1); border: 1px solid rgba(255, 215, 0, 0.3); border-radius: 8px; padding: 15px; margin-top: 15px;">
                    <strong>💡 Indice :</strong><br>
                    N'oubliez pas d'utiliser <code>return a + b</code> pour renvoyer le résultat du calcul.
                </div>
            </div>

            <div class="section-text" style="margin-top: 30px;">
                <strong>Exercices Intermédiaires</strong>
            </div>

            <div class="exercise-card">
                <div class="exercise-difficulty">Moyen</div>
                <div class="exercise-title">Calculateur de TTC</div>
                <div class="exercise-desc">
                    Créez une fonction <code>calculer_ttc(prix_ht, taux_tva=0.20)</code> qui prend le prix hors taxe et renvoie le prix TTC avec un message formaté.
                </div>
                <div class="exercise-steps">
                    <strong>Ce qu'il faut faire :</strong>
                    <ol>
                        <li>Définir la fonction avec un paramètre par défaut pour la TVA</li>
                        <li>Calculer le prix TTC : prix_ht × (1 + taux_tva)</li>
                        <li>Retourner un message formaté avec f-string</li>
                    </ol>
                </div>
                <div class="highlight-box">
                    <strong>Nouveau concept !</strong><br>
                    Le paramètre <code>taux_tva=0.20</code> a une valeur par défaut de 20%.
                </div>
                <div style="text-align: center; margin-top: 15px;">
                    <button class="hint-button" onclick="toggleHint('hint_func3')" style="
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
                <div id="hint_func3" class="hint-content" style="display: none; background: rgba(255, 215, 0, 0.1); border: 1px solid rgba(255, 215, 0, 0.3); border-radius: 8px; padding: 15px; margin-top: 15px;">
                    <strong>💡 Indice :</strong><br>
                    Pour un prix HT de 100€ avec 20% de TVA : 100 × (1 + 0.20) = 120€ TTC
                </div>
            </div>

            <div class="exercise-card">
                <div class="exercise-difficulty">Moyen</div>
                <div class="exercise-title">Analyseur de notes</div>
                <div class="exercise-desc">
                    Créez une fonction <code>analyser_note(note)</code> qui retourne une appréciation selon la note sur 20.
                </div>
                <div class="exercise-steps">
                    <strong>Barème :</strong>
                    <ul>
                        <li>16-20 : "Excellent"</li>
                        <li>14-16 : "Bien"</li>
                        <li>12-14 : "Assez bien"</li>
                        <li>10-12 : "Passable"</li>
                        <li>0-10 : "Insuffisant"</li>
                    </ul>
                </div>
                <div class="highlight-box">
                    <strong>Technique !</strong><br>
                    Utilisez des conditions <code>if/elif/else</code> dans votre fonction.
                </div>
                <div style="text-align: center; margin-top: 15px;">
                    <button class="hint-button" onclick="toggleHint('hint_func4')" style="
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
                <div id="hint_func4" class="hint-content" style="display: none; background: rgba(255, 215, 0, 0.1); border: 1px solid rgba(255, 215, 0, 0.3); border-radius: 8px; padding: 15px; margin-top: 15px;">
                    <strong>💡 Indice :</strong><br>
                    Commencez par le cas le plus élevé : <code>if note >= 16:</code> puis descendez.
                </div>
            </div>

            <div class="section-text" style="margin-top: 30px;">
                <strong>Exercices Avancés</strong>
            </div>

            <div class="exercise-card">
                <div class="exercise-difficulty">Expert</div>
                <div class="exercise-title">Calculateur de pourboire NYC</div>
                <div class="exercise-desc">
                    Créez une fonction <code>calculer_pourboire_nyc(montant_addition, qualite_service)</code> où la qualité peut être "excellent" (25%), "bon" (20%), "moyen" (15%).
                </div>
                <div class="exercise-steps">
                    <strong>Ce qu'il faut faire :</strong>
                    <ol>
                        <li>Définir les taux selon la qualité du service</li>
                        <li>Calculer le montant du pourboire</li>
                        <li>Retourner le pourboire ET le total à payer</li>
                        <li>Gérer les cas d'erreur (service non reconnu)</li>
                    </ol>
                </div>
                <div class="highlight-box">
                    <strong>Challenge !</strong><br>
                    Utilisez un dictionnaire pour stocker les taux de pourboire par qualité.
                </div>
                <div style="text-align: center; margin-top: 15px;">
                    <button class="hint-button" onclick="toggleHint('hint_func5')" style="
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
                <div id="hint_func5" class="hint-content" style="display: none; background: rgba(255, 215, 0, 0.1); border: 1px solid rgba(255, 215, 0, 0.3); border-radius: 8px; padding: 15px; margin-top: 15px;">
                    <strong>💡 Indice :</strong><br>
                    Créez un dictionnaire : <code>taux = {"excellent": 0.25, "bon": 0.20, "moyen": 0.15}</code>
                </div>
            </div>
        `
    }
};

// Current lesson data (will be switched between lesson1Data, lesson2Data, and lesson3Data)
let currentLessonData = lesson1Data;