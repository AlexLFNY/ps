// Content data for each concept
const conceptData = {
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
                        <div class="type-icon">42</div>
                        <div style="font-weight: bold; color: #ffd700;">int</div>
                        <div style="color: #ccc; font-size: 0.9rem;">Entiers</div>
                        <div style="font-family: monospace; color: #4caf50;">42, -17, 0</div>
                    </div>
                    <div class="type-demo">
                        <div class="type-icon">3.14</div>
                        <div style="font-weight: bold; color: #ffd700;">float</div>
                        <div style="color: #ccc; font-size: 0.9rem;">Décimaux</div>
                        <div style="font-family: monospace; color: #4caf50;">3.14, 1.75</div>
                    </div>
                    <div class="type-demo">
                        <div class="type-icon">"ABC"</div>
                        <div style="font-weight: bold; color: #ffd700;">str</div>
                        <div style="color: #ccc; font-size: 0.9rem;">Texte</div>
                        <div style="font-family: monospace; color: #4caf50;">"Bonjour"</div>
                    </div>
                    <div class="type-demo">
                        <div class="type-icon">T/F</div>
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
        title: 'Exercices Interactifs',
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
                </div>

                <div class="exercise-card">
                    <div class="exercise-difficulty">Facile</div>
                    <div class="exercise-title">Calcul d'Âge</div>
                    <div class="exercise-desc">
                        Demandez l'année de naissance et calculez l'âge approximatif en 2024.
                    </div>
                    
                    <div class="exercise-steps">
                        <strong>Ce qu'il faut faire :</strong>
                        <ol>
                            <li>Demander l'année de naissance avec <code>input()</code></li>
                            <li>⚠️ Convertir en <code>int()</code> pour pouvoir calculer</li>
                            <li>Calculer : 2024 - année_naissance</li>
                            <li>Afficher l'âge avec un message</li>
                        </ol>
                    </div>

                    <div class="warning-banner">
                        N'oubliez pas : <code>input()</code> renvoie toujours du texte ! Il faut convertir avec <code>int()</code> pour faire des calculs.
                    </div>
                </div>

                <div class="exercise-card">
                    <div class="exercise-difficulty">Moyen</div>
                    <div class="exercise-title">Calculateur TTC</div>
                    <div class="exercise-desc">
                        Créez un calculateur de prix TTC avec 20% de TVA. Utilisez des nombres décimaux !
                    </div>
                    
                    <div class="exercise-steps">
                        <strong>Ce qu'il faut faire :</strong>
                        <ol>
                            <li>Demander un prix hors taxe avec <code>input()</code></li>
                            <li>⚠️ Convertir en <code>float()</code> pour les décimaux</li>
                            <li>Calculer le TTC : prix_ht × 1.2 (20% de TVA)</li>
                            <li>Afficher le résultat</li>
                        </ol>
                    </div>

                    <div class="highlight-box">
                        <strong>Indice :</strong><br>
                        Pour ajouter 20% à un prix, on multiplie par 1.2 (100% + 20% = 120% = 1.2)
                    </div>
                </div>

                <div class="exercise-card">
                    <div class="exercise-difficulty">Avancé</div>
                    <div class="exercise-title">Distance d'un Éclair</div>
                    <div class="exercise-desc">
                        Calculez la distance d'un éclair avec la physique ! Le son voyage à 343 m/s dans l'air.
                    </div>
                    
                    <div class="exercise-steps">
                        <strong>Ce qu'il faut faire :</strong>
                        <ol>
                            <li>Demander le délai éclair-tonnerre en secondes</li>
                            <li>Convertir en <code>float()</code></li>
                            <li>Calculer : distance = délai × 343 m/s</li>
                            <li>Afficher la distance en mètres</li>
                        </ol>
                    </div>

                    <div class="highlight-box">
                        <strong>Physique :</strong><br>
                        La vitesse du son dans l'air est de 343 m/s. Distance = Vitesse × Temps
                    </div>
                </div>

                <div class="exercise-card">
                    <div class="exercise-difficulty">Expert</div>
                    <div class="exercise-title">Calculatrice IMC</div>
                    <div class="exercise-desc">
                        Nouveau défi ! Calculez l'Indice de Masse Corporelle (IMC = poids / taille²)
                    </div>
                    
                    <div class="exercise-steps">
                        <strong>Ce qu'il faut faire :</strong>
                        <ol>
                            <li>Demander le poids en kg et la taille en mètres</li>
                            <li>Convertir les deux en <code>float()</code></li>
                            <li>Calculer : IMC = poids / (taille × taille)</li>
                            <li>Utiliser <code>round()</code> pour arrondir le résultat</li>
                        </ol>
                    </div>

                    <div class="highlight-box">
                        <strong>Nouveauté :</strong><br>
                        La fonction <code>round(nombre, 1)</code> arrondit à 1 chiffre après la virgule.
                    </div>
                </div>

                <div class="exercise-card">
                    <div class="exercise-difficulty">Expert</div>
                    <div class="exercise-title">Défi Créatif</div>
                    <div class="exercise-desc">
                        À vous de jouer ! Créez un programme original en combinant tout ce que vous avez appris.
                    </div>
                    
                    <div class="exercise-steps">
                        <strong>Idées de programmes :</strong>
                        <ol>
                            <li>Convertisseur Celsius ↔ Fahrenheit</li>
                            <li>Calculateur d'aire de triangle</li>
                            <li>Convertisseur de monnaies</li>
                            <li>Calculateur de moyenne de notes</li>
                            <li>Convertisseur secondes → heures/minutes</li>
                            <li>Calculateur d'âge précis avec mois</li>
                        </ol>
                    </div>

                    <div class="highlight-box">
                        <strong>Laissez libre cours à votre créativité !</strong><br>
                        Combinez variables, input(), print(), conversions et calculs pour créer quelque chose d'unique.
                    </div>
                </div>
            </div>

            <div style="text-align: center; margin-top: 30px; padding: 20px; background: rgba(255, 215, 0, 0.1); border-radius: 12px; border: 2px solid rgba(255, 215, 0, 0.3);">
                <h3 style="color: #ffd700; margin-bottom: 10px;">🏆 Félicitations !</h3>
                <p style="color: white;">Vous maîtrisez maintenant les bases de Python ! Variables, types, interactions utilisateur... vous avez tout en main pour créer vos premiers programmes.</p>
            </div>
        `
    }
};