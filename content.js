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
                        <div class="type-icon">🔢</div>
                        <div style="font-weight: bold; color: #ffd700;">int</div>
                        <div style="color: #ccc; font-size: 0.9rem;">Entiers</div>
                        <div style="font-family: monospace; color: #4caf50;">42, -17, 0</div>
                    </div>
                    <div class="type-demo">
                        <div class="type-icon">💧</div>
                        <div style="font-weight: bold; color: #ffd700;">float</div>
                        <div style="color: #ccc; font-size: 0.9rem;">Décimaux</div>
                        <div style="font-family: monospace; color: #4caf50;">3.14, 1.75</div>
                    </div>
                    <div class="type-demo">
                        <div class="type-icon">📝</div>
                        <div style="font-weight: bold; color: #ffd700;">str</div>
                        <div style="color: #ccc; font-size: 0.9rem;">Texte</div>
                        <div style="font-family: monospace; color: #4caf50;">"Bonjour"</div>
                    </div>
                    <div class="type-demo">
                        <div class="type-icon">✅</div>
                        <div style="font-weight: bold; color: #ffd700;">bool</div>
                        <div style="color: #ccc; font-size: 0.9rem;">Vrai/Faux</div>
                        <div style="font-family: monospace; color: #4caf50;">True, False</div>
                    </div>
                </div>
            </div>
            <div class="code-block">
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
                <div class="code-content">
<span class="code-comment"># Demander l'âge</span>
age_str = <span class="code-keyword">input</span>(<span class="code-string">"Votre âge ? "</span>)  <span class="code-comment"># "15" (str)</span>
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
        title: 'Exercices Pratiques',
        subtitle: 'Pratiquez et progressez !',
        content: `
            <div class="section-text">
                Voici 6 exercices progressifs pour mettre en pratique tout ce que vous avez appris. À vous de créer les programmes !
            </div>
            <div class="exercises-grid">
                <div class="exercise-card">
                    <div class="exercise-difficulty">Facile</div>
                    <div class="exercise-title">Dialogue Simple</div>
                    <div class="exercise-desc">
                        Créez votre premier programme interactif ! Demandez le prénom de l'utilisateur et saluez-le personnellement.
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
                        🔍 <strong>Indice :</strong> Commencez par créer une variable pour stocker le prénom, puis utilisez cette variable dans votre message de salutation.
                    </div>
                    <div class="console-output" style="margin-top: 15px;">
                        <strong>Exemple d'exécution :</strong><br>
                        Comment vous appelez-vous ? Marie<br>
                        Bonjour Marie, ravi de vous rencontrer !
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
                <div class="code-content">
nom = <span class="code-string">"Alex"</span>
age = <span class="code-number">16</span>
<span class="code-comment"># On place les variables entre accolades {} directement dans la chaîne</span>
message = <span class="code-string">f"Je m'appelle {nom} et j'ai {age} ans."</span>
<span class="code-keyword">print</span>(message)
<span class="code-comment"># Affiche: Je m'appelle Alex et j'ai 16 ans.</span>

<span class="code-comment"># On peut même y faire des calculs !</span>
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
                <div class="code-content">
age = <span class="code-keyword">int</span>(<span class="code-keyword">input</span>(<span class="code-string">"Quel est votre âge ? "</span>))

<span class="code-keyword">if</span> age >= <span class="code-number">18</span>:
    <span class="code-keyword">print</span>(<span class="code-string">"Vous êtes majeur !"</span>)
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
                <div class="code-content">
<span class="code-comment"># Structure if...else</span>
age = <span class="code-keyword">int</span>(<span class="code-keyword">input</span>(<span class="code-string">"Quel est votre âge ? "</span>))

<span class="code-keyword">if</span> age >= <span class="code-number">18</span>:
    <span class="code-keyword">print</span>(<span class="code-string">"Vous êtes majeur !"</span>)
<span class="code-keyword">else</span>:
    <span class="code-keyword">print</span>(<span class="code-string">"Vous êtes mineur."</span>)
                </div>
            </div>
            <div class="code-block">
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
                    <div class="exercise-title">Comparaison de nombres</div>
                    <div class="exercise-desc">
                        Demandez deux nombres à l'utilisateur et utilisez une structure if/elif/else pour afficher lequel est le plus grand, le plus petit, ou s'ils sont égaux.
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
                        🔍 <strong>Indice :</strong> Utilisez les opérateurs > et < pour comparer, et n'oubliez pas le cas où les deux nombres sont égaux avec ==.
                    </div>
                    <div class="console-output" style="margin-top: 15px;">
                        <strong>Exemple d'exécution :</strong><br>
                        Entrez le premier nombre : 15<br>
                        Entrez le deuxième nombre : 8<br>
                        Le premier nombre (15) est plus grand que le second (8)
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
                    <div class="exercise-title">Jeu du nombre mystère</div>
                    <div class="exercise-desc">
                        Définissez un nombre_secret (par exemple, nombre_secret = 42). Demandez à l'utilisateur de deviner ce nombre. Indiquez si son nombre est "trop grand", "trop petit", ou "correct". Affichez un message de félicitations s'il trouve.
                    </div>
                    <div style="text-align: center; margin-top: 15px;">
                        <button class="hint-button" onclick="toggleHint('hint5')" style="
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
                    <div id="hint5" class="hint-content" style="
                        display: none;
                        background: rgba(255, 215, 0, 0.1);
                        border: 2px solid rgba(255, 215, 0, 0.3);
                        border-radius: 12px;
                        padding: 15px;
                        margin-top: 15px;
                        color: #ffd700;
                        font-style: italic;
                    ">
                        🔍 <strong>Indice :</strong> Utilisez if/elif/else pour comparer le nombre saisi avec le nombre secret. Pensez aux trois cas possibles !
                    </div>
                    <div class="console-output" style="margin-top: 15px;">
                        <strong>Exemple d'exécution :</strong><br>
                        Devinez le nombre mystère : 35<br>
                        Trop petit ! Essayez plus grand.
                    </div>
                </div>
                
                <div class="exercise-card">
                    <div class="exercise-difficulty">Expert</div>
                    <div class="exercise-title">Simulateur de distributeur</div>
                    <div class="exercise-desc">
                        Créez un programme qui simule un distributeur de boissons. Affichez un menu avec des prix, demandez le choix et l'argent inséré, vérifiez si l'argent est suffisant, calculez la monnaie et gérez les cas d'erreur.
                    </div>
                    <div style="text-align: center; margin-top: 15px;">
                        <button class="hint-button" onclick="toggleHint('hint6')" style="
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
                    <div id="hint6" class="hint-content" style="
                        display: none;
                        background: rgba(255, 215, 0, 0.1);
                        border: 2px solid rgba(255, 215, 0, 0.3);
                        border-radius: 12px;
                        padding: 15px;
                        margin-top: 15px;
                        color: #ffd700;
                        font-style: italic;
                    ">
                        🔍 <strong>Indice :</strong> Créez des variables pour les prix, vérifiez que le choix est valide, puis comparez l'argent inséré avec le prix choisi.
                    </div>
                    <div class="console-output" style="margin-top: 15px;">
                        <strong>Exemple d'exécution :</strong><br>
                        === DISTRIBUTEUR ===<br>
                        1. Coca (2€)<br>
                        2. Eau (1€)<br>
                        Votre choix : 1<br>
                        Argent inséré : 5<br>
                        Voici votre Coca ! Monnaie : 3€
                    </div>
                </div>
            </div>
        `
    }
};

// Current lesson data (will be switched between lesson1Data and lesson2Data)
let currentLessonData = lesson1Data;