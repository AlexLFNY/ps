// Lesson 2: Opérations et Conditions
// Contenu éducatif pour l'apprentissage des opérations arithmétiques et structures conditionnelles

export const lesson2Data = {
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
    logical_operators: {
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
    exercises: {
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
            </div>
        `
    }
};