// Lesson 1: Variables et Types de Données
// Contenu éducatif pour l'apprentissage des concepts de base de Python

export const lesson1Data = {
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
    input_output: {
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