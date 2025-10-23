// Lesson 6: Les Chaînes de Caractères (Strings)
// Deuxième Période - Manipulation de texte en Python

export const lesson6Data = {
    intro: {
        icon: 'icon-string',
        emoji: '📝',
        title: 'Qu\'est-ce qu\'une Chaîne de Caractères ?',
        subtitle: 'Définition et syntaxe',
        content: `
            <div class="section-text">
                Une <strong>chaîne de caractères</strong> est simplement du <strong>texte</strong> en Python.
                Le type s'appelle <code>str</code> (abréviation de string).
            </div>

            <div class="code-example">
                <h3 style="color: #ffd700;">📌 Différentes façons de créer un string</h3>
                <pre><code class="python"># Guillemets doubles
message1 = "Bonjour le monde !"

# Apostrophes simples
message2 = 'Python'

# Les deux fonctionnent
message3 = "C'est génial!"   # Guillemets doubles si apostrophe
message4 = 'Il dit "Wow!"'   # Guillemets simples si quotes

# Vérifier le type
chaine = "Bonjour le monde !"
nombre = 42

print(type(chaine))   # &lt;class 'str'&gt;
print(type(nombre))   # &lt;class 'int'&gt;</code></pre>
                <button class="code-load-button" onclick="loadCodeIntoConsole(\`chaine = &quot;Bonjour le monde !&quot;
nombre = 42

print(type(chaine))
print(type(nombre))\`)">🐍 Charger</button>
            </div>

            <div class="code-example">
                <h3 style="color: #ffd700;">➕ Combiner des chaînes (Concaténation)</h3>
                <div class="section-text">
                    La concaténation met les chaînes bout à bout avec l'opérateur <code>+</code>.
                </div>
                <pre><code class="python">mot1 = "Bon"
mot2 = "jour"

print(mot1 + mot2)        # Affiche 'Bonjour'
print(mot1 + " " + mot2)  # Affiche 'Bon jour'</code></pre>
                <button class="code-load-button" onclick="loadCodeIntoConsole(\`mot1 = &quot;Bon&quot;
mot2 = &quot;jour&quot;

print(mot1 + mot2)
print(mot1 + &quot; &quot; + mot2)\`)">🐍 Charger</button>
            </div>

            <div style="
                background: rgba(255, 107, 107, 0.1);
                border-left: 4px solid #ff6b6b;
                padding: 20px;
                margin: 25px 0;
                border-radius: 8px;
            ">
                <div style="color: #ff6b6b; font-weight: bold; margin-bottom: 10px;">⚠️ Attention !</div>
                <div class="section-text">
                    On ne peut pas additionner un texte et un nombre directement.
                </div>
                <pre style="margin-top: 15px;"><code class="python">age = 15

# Ceci ne fonctionne PAS :
# message = "J'ai " + age + " ans"  # ERREUR !

# Solution : convertir le nombre en texte avec str()
message = "J'ai " + str(age) + " ans"
print(message)  # Affiche "J'ai 15 ans"</code></pre>
                <button class="code-load-button" onclick="loadCodeIntoConsole(\`age = 15

message = &quot;J'ai &quot; + str(age) + &quot; ans&quot;
print(message)\`)">🐍 Charger</button>
            </div>
        `
    },

    len_indexing: {
        icon: 'icon-index',
        emoji: '🔢',
        title: 'Longueur et Indexation',
        subtitle: 'len() et [ ]',
        content: `
            <div class="code-example">
                <h3 style="color: #ffd700;">📏 len() - Connaître la longueur</h3>
                <div class="section-text">
                    Renvoie le nombre total de caractères (espaces inclus).
                </div>
                <pre><code class="python">chaine = "Python"
print(len(chaine))  # Affiche 6

# Astuce : Les espaces comptent aussi !
phrase = "Bonjour tout le monde!"
print(len(phrase))  # Affiche 22</code></pre>
                <button class="code-load-button" onclick="loadCodeIntoConsole(\`chaine = &quot;Python&quot;
print(len(chaine))

phrase = &quot;Bonjour tout le monde!&quot;
print(len(phrase))\`)">🐍 Charger</button>
            </div>

            <div class="code-example">
                <h3 style="color: #ffd700;">🎯 [ ] - Accéder à un caractère</h3>
                <div class="section-text">
                    Permet d'accéder à un caractère précis grâce à son <strong>indice</strong>.
                </div>
                <div style="background: rgba(255,215,0,0.1); padding: 20px; border-radius: 10px; margin: 15px 0;">
                    <p style="color: #ffd700; font-weight: bold;">⚠️ Règles importantes :</p>
                    <ul style="color: #fff; line-height: 1.8;">
                        <li>Le premier caractère est à l'indice <code>0</code></li>
                        <li>Les indices négatifs partent de la fin (<code>-1</code> = dernier caractère)</li>
                    </ul>
                    <pre style="color: #fff; font-family: monospace; margin-top: 15px;">
P  y  t  h  o  n
0  1  2  3  4  5   ← index positif
-6 -5 -4 -3 -2 -1  ← index négatif</pre>
                </div>
                <pre><code class="python">chaine = "Python"

print(chaine[0])   # Affiche 'P' (premier)
print(chaine[5])   # Affiche 'n' (sixième)
print(chaine[-1])  # Affiche 'n' (dernier)
print(chaine[-2])  # Affiche 'o' (avant-dernier)</code></pre>
                <button class="code-load-button" onclick="loadCodeIntoConsole(\`chaine = &quot;Python&quot;

print(chaine[0])
print(chaine[5])
print(chaine[-1])
print(chaine[-2])\`)">🐍 Charger</button>
            </div>
        `
    },

    slicing: {
        icon: 'icon-slice',
        emoji: '✂️',
        title: 'Découpage (Slicing)',
        subtitle: '[ : ] - Extraire des portions',
        content: `
            <div class="section-text">
                Permet de "trancher" la chaîne pour récupérer un morceau.
            </div>

            <div class="code-example">
                <h3 style="color: #ffd700;">🔪 Syntaxe : chaine[debut:fin]</h3>
                <div style="background: rgba(255,215,0,0.1); padding: 20px; border-radius: 10px; margin: 15px 0;">
                    <p style="color: #ffd700; font-weight: bold;">📝 Règle :</p>
                    <div style="color: #fff; line-height: 1.8;">
                        <code>chaine[debut:fin]</code> → extrait du caractère <code>debut</code> jusqu'à <code>fin-1</code>
                    </div>
                </div>
                <pre><code class="python">chaine = "Je code en Python"

print(chaine[3:7])   # Affiche 'code'
print(chaine[0:2])   # Affiche 'Je'
print(chaine[11:])   # Affiche 'Python' (jusqu'à la fin)
print(chaine[:7])    # Affiche 'Je code' (depuis le début)</code></pre>
                <button class="code-load-button" onclick="loadCodeIntoConsole(\`chaine = &quot;Je code en Python&quot;

print(chaine[3:7])
print(chaine[0:2])
print(chaine[11:])
print(chaine[:7])\`)">🐍 Charger</button>
            </div>

            <div class="code-example">
                <h3 style="color: #ffd700;">🔄 Inverser un string</h3>
                <pre><code class="python">mot = "Python"

# Syntaxe [début:fin:pas]
# pas = -1 signifie "à l'envers"
inverse = mot[::-1]
print(inverse)  # nohtyP

# Vérifier si un mot est un palindrome
mot = "kayak"
if mot == mot[::-1]:
    print(f"{mot} est un palindrome!")
else:
    print(f"{mot} n'est pas un palindrome")</code></pre>
                <button class="code-load-button" onclick="loadCodeIntoConsole(\`mot = &quot;Python&quot;

inverse = mot[::-1]
print(inverse)

mot = &quot;kayak&quot;
if mot == mot[::-1]:
    print(f&quot;{mot} est un palindrome!&quot;)
else:
    print(f&quot;{mot} n'est pas un palindrome&quot;)\`)">🐍 Charger</button>
            </div>

            <div class="code-example">
                <h3 style="color: #ffd700;">⚡ Autres exemples utiles</h3>
                <pre><code class="python">alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

# Prendre 1 caractère sur 2
print(alphabet[::2])  # ACEGIKMOQSUWY

# Les 10 premières lettres
print(alphabet[:10])  # ABCDEFGHIJ

# Les 10 dernières lettres
print(alphabet[-10:]) # QRSTUVWXYZ

# De l'index 5 à 15 par pas de 2
print(alphabet[5:15:2])  # FHJLN</code></pre>
                <button class="code-load-button" onclick="loadCodeIntoConsole(\`alphabet = &quot;ABCDEFGHIJKLMNOPQRSTUVWXYZ&quot;

print(alphabet[::2])
print(alphabet[:10])
print(alphabet[-10:])
print(alphabet[5:15:2])\`)">🐍 Charger</button>
            </div>
        `
    },

    in_operator: {
        icon: 'icon-search',
        emoji: '🔍',
        title: 'Vérifier la présence',
        subtitle: 'L\'opérateur in',
        content: `
            <div class="section-text">
                Vérifie si un texte est contenu dans une chaîne. Renvoie <code>True</code> (vrai) ou <code>False</code> (faux).
            </div>

            <div class="code-example">
                <h3 style="color: #ffd700;">🔍 Vérifier la présence d'un mot</h3>
                <pre><code class="python">phrase = "Le chat est sur le toit"

print("chat" in phrase)   # Affiche: True
print("chien" in phrase)  # Affiche: False
print("toit" in phrase)   # Affiche: True</code></pre>
                <button class="code-load-button" onclick="loadCodeIntoConsole(\`phrase = &quot;Le chat est sur le toit&quot;

print(&quot;chat&quot; in phrase)
print(&quot;chien&quot; in phrase)
print(&quot;toit&quot; in phrase)\`)">🐍 Charger</button>
            </div>

            <div class="code-example">
                <h3 style="color: #ffd700;">✅ Utilisation pratique avec if</h3>
                <div class="section-text">
                    Très utile dans les conditions <code>if</code>.
                </div>
                <pre><code class="python">email = "contact@exemple.fr"

if "@" in email:
    print("L'email semble valide")
else:
    print("L'email n'est pas valide")</code></pre>
                <button class="code-load-button" onclick="loadCodeIntoConsole(\`email = &quot;contact@exemple.fr&quot;

if &quot;@&quot; in email:
    print(&quot;L'email semble valide&quot;)
else:
    print(&quot;L'email n'est pas valide&quot;)\`)">🐍 Charger</button>
            </div>
        `
    },

    for_loop: {
        icon: 'icon-loop',
        emoji: '🔄',
        title: 'Parcourir le texte',
        subtitle: 'La boucle for',
        content: `
            <div class="section-text">
                La boucle <code>for</code> permet d'exécuter une action sur chaque caractère, l'un après l'autre.
            </div>

            <div class="code-example">
                <h3 style="color: #ffd700;">🔄 Syntaxe générale</h3>
                <pre><code class="python">for lettre in "mon_texte":
    # Action à répéter pour chaque caractère
    print(lettre)</code></pre>
            </div>

            <div class="code-example">
                <h3 style="color: #ffd700;">📝 Exemple simple</h3>
                <pre><code class="python">mot = "HELLO"

for lettre in mot:
    print(lettre)

# Affiche :
# H
# E
# L
# L
# O</code></pre>
                <button class="code-load-button" onclick="loadCodeIntoConsole(\`mot = &quot;HELLO&quot;

for lettre in mot:
    print(lettre)\`)">🐍 Charger</button>
            </div>

            <div class="code-example">
                <h3 style="color: #ffd700;">⚡ Exemple Pratique : Afficher avec des tirets</h3>
                <div class="section-text">
                    <strong>Objectif :</strong> Afficher chaque lettre du mot "PYTHON" séparée par un tiret.
                </div>

                <h4 style="color: #81d4fa; margin-top: 20px;">❌ Première tentative (avec un problème)</h4>
                <pre><code class="python">mot = "PYTHON"

for lettre in mot:
    print(lettre, end="-")

# Résultat : P-Y-T-H-O-N-
# Problème : il y a un tiret en trop à la fin</code></pre>
                <button class="code-load-button" onclick="loadCodeIntoConsole(\`mot = &quot;PYTHON&quot;

for lettre in mot:
    print(lettre, end=&quot;-&quot;)\`)">🐍 Charger</button>

                <h4 style="color: #4caf50; margin-top: 20px;">✅ Solution : Construire le résultat progressivement</h4>
                <pre><code class="python">mot = "PYTHON"
resultat = ""

for lettre in mot:
    resultat = resultat + lettre + "-"

# Enlever le dernier tiret avec le slicing
resultat = resultat[:-1]

print(resultat)  # Affiche: P-Y-T-H-O-N</code></pre>
                <button class="code-load-button" onclick="loadCodeIntoConsole(\`mot = &quot;PYTHON&quot;
resultat = &quot;&quot;

for lettre in mot:
    resultat = resultat + lettre + &quot;-&quot;

resultat = resultat[:-1]

print(resultat)\`)">🐍 Charger</button>

                <div style="
                    background: rgba(76, 175, 80, 0.1);
                    border-left: 4px solid #4caf50;
                    padding: 20px;
                    margin: 25px 0;
                    border-radius: 8px;
                ">
                    <div style="color: #4caf50; font-weight: bold; margin-bottom: 10px;">💡 Comment ça marche ?</div>
                    <div style="color: #fff; line-height: 1.8; font-size: 0.95em;">
                        1. On crée une chaîne vide <code>resultat = ""</code>
                        <br>2. À chaque tour, on ajoute la lettre suivie d'un tiret
                        <br>3. À la fin, <code>resultat[:-1]</code> enlève le dernier caractère (le tiret en trop)
                    </div>
                </div>
            </div>
        `
    },

    methods: {
        icon: 'icon-methods',
        emoji: '🛠️',
        title: 'Méthodes de Strings',
        subtitle: 'Fonctions utiles pour manipuler du texte',
        content: `
            <div class="section-text">
                Python offre de nombreuses <strong>méthodes</strong> pour manipuler les strings.
                Une méthode s'utilise avec la syntaxe : <code>texte.methode()</code>
            </div>

            <div class="code-example">
                <h3 style="color: #ffd700;">🔠 Changement de casse</h3>
                <pre><code class="python">texte = "Bonjour Python"

print(texte.upper())       # BONJOUR PYTHON
print(texte.lower())       # bonjour python
print(texte.capitalize())  # Bonjour python
print(texte.title())       # Bonjour Python

# Utile pour comparer sans casse
mot1 = "PYTHON"
mot2 = "python"
print(mot1.lower() == mot2.lower())  # True</code></pre>
                <button class="code-load-button" onclick="loadCodeIntoConsole(\`texte = &quot;Bonjour Python&quot;

print(texte.upper())
print(texte.lower())
print(texte.capitalize())
print(texte.title())

mot1 = &quot;PYTHON&quot;
mot2 = &quot;python&quot;
print(mot1.lower() == mot2.lower())\`)">🐍 Charger</button>
            </div>

            <div class="code-example">
                <h3 style="color: #ffd700;">🔍 Recherche dans un string</h3>
                <pre><code class="python">phrase = "J'adore programmer en Python"

# Vérifier si un mot est dans la phrase
print("Python" in phrase)       # True
print("Java" in phrase)         # False

# Compter les occurrences
print(phrase.count("e"))        # 3
print(phrase.count("Python"))   # 1

# Trouver la position d'un mot
position = phrase.find("Python")
print(f"Python commence à l'index {position}")  # 25

# Vérifier le début/fin
print(phrase.startswith("J'"))   # True
print(phrase.endswith("Python")) # True</code></pre>
                <button class="code-load-button" onclick="loadCodeIntoConsole(\`phrase = &quot;J'adore programmer en Python&quot;

print(&quot;Python&quot; in phrase)
print(&quot;Java&quot; in phrase)

print(phrase.count(&quot;e&quot;))
print(phrase.count(&quot;Python&quot;))

position = phrase.find(&quot;Python&quot;)
print(f&quot;Python commence à l'index {position}&quot;)

print(phrase.startswith(&quot;J'&quot;))
print(phrase.endswith(&quot;Python&quot;))\`)">🐍 Charger</button>
            </div>

            <div class="code-example">
                <h3 style="color: #ffd700;">✏️ Remplacement et nettoyage</h3>
                <pre><code class="python">texte = "  Bonjour Python  "

# Enlever les espaces au début et à la fin
print(texte.strip())       # "Bonjour Python"
print(texte.lstrip())      # "Bonjour Python  "
print(texte.rstrip())      # "  Bonjour Python"

# Remplacer des mots
message = "J'aime Java"
nouveau = message.replace("Java", "Python")
print(nouveau)  # J'aime Python

# Remplacer plusieurs fois
texte = "ha ha ha"
print(texte.replace("ha", "hi"))  # hi hi hi</code></pre>
                <button class="code-load-button" onclick="loadCodeIntoConsole(\`texte = &quot;  Bonjour Python  &quot;

print(texte.strip())
print(texte.lstrip())
print(texte.rstrip())

message = &quot;J'aime Java&quot;
nouveau = message.replace(&quot;Java&quot;, &quot;Python&quot;)
print(nouveau)

texte = &quot;ha ha ha&quot;
print(texte.replace(&quot;ha&quot;, &quot;hi&quot;))\`)">🐍 Charger</button>
            </div>
        `
    },

    exercises: {
        icon: 'icon-exercises',
        emoji: '✏️',
        title: 'Exercices Pratiques',
        subtitle: 'À vous de jouer !',
        content: `
            <div class="section-text">
                Entraînez-vous avec ces exercices sur les chaînes de caractères !
            </div>
            <div class="exercises-grid">
                <div class="exercise-card">
                    <div class="exercise-difficulty">Moyen</div>
                    <div class="exercise-title">Extraire avec le slicing</div>
                    <div class="exercise-desc">
                        Soit la chaîne : <code>phrase = "Bienvenue en Python"</code><br>
                        Écris le code pour extraire et afficher différentes parties de cette chaîne en utilisant le slicing.
                    </div>

                    <div class="exercise-steps">
                        <strong>Ce qu'il faut faire :</strong>
                        <ol>
                            <li>Trouver les indices pour extraire le mot "Bienvenue"</li>
                            <li>Trouver les indices pour extraire le mot "Python"</li>
                            <li>Extraire les 3 premiers caractères</li>
                            <li>Extraire les 3 derniers caractères</li>
                        </ol>
                    </div>

                    <div style="text-align: center; margin-top: 15px;">
                        <button class="hint-button" onclick="toggleHint('hint6p_1')" style="
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
                    <div id="hint6p_1" class="hint-content" style="
                        display: none;
                        background: rgba(255, 215, 0, 0.1);
                        border: 2px solid rgba(255, 215, 0, 0.3);
                        border-radius: 12px;
                        padding: 15px;
                        margin-top: 15px;
                        color: #ffd700;
                        font-style: italic;
                    ">
                        🔍 <strong>Indice :</strong> Le slicing utilise <code>[début:fin]</code>. Pour les premiers caractères, omettez le début : <code>[:3]</code>. Pour les derniers, utilisez des indices négatifs : <code>[-3:]</code>.
                    </div>
                    <div class="console-output" style="margin-top: 15px;">
                        <strong>$ Exemple d'exécution :</strong><br>
                        phrase = "Bienvenue en Python"<br>
                        >>> print(phrase[...])  # Trouver les bons indices<br>
                        Bienvenue<br>
                        >>> print(phrase[...])  # Trouver les bons indices<br>
                        Python<br>
                        >>> print(phrase[...])  # Trouver les bons indices<br>
                        Bie<br>
                        >>> print(phrase[...])  # Trouver les bons indices<br>
                        hon
                    </div>
                </div>

                <div class="exercise-card">
                    <div class="exercise-difficulty">Moyen</div>
                    <div class="exercise-title">Compter le nombre de "a"</div>
                    <div class="exercise-desc">
                        Écris un programme qui compte combien de fois la lettre "a" apparaît dans une phrase donnée. Tu dois coder la logique toi-même avec une boucle.
                    </div>

                    <div class="exercise-steps">
                        <strong>Ce qu'il faut faire :</strong>
                        <ol>
                            <li>Créer une variable <code>phrase = "La banane parfaitement jaune"</code></li>
                            <li>Créer un compteur initialisé à 0</li>
                            <li>Parcourir chaque caractère avec <code>for lettre in phrase:</code></li>
                            <li>Si le caractère est "a", incrémenter le compteur</li>
                            <li>Afficher le résultat</li>
                        </ol>
                    </div>

                    <div style="text-align: center; margin-top: 15px;">
                        <button class="hint-button" onclick="toggleHint('hint6p_2')" style="
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
                    <div id="hint6p_2" class="hint-content" style="
                        display: none;
                        background: rgba(255, 215, 0, 0.1);
                        border: 2px solid rgba(255, 215, 0, 0.3);
                        border-radius: 12px;
                        padding: 15px;
                        margin-top: 15px;
                        color: #ffd700;
                        font-style: italic;
                    ">
                        🔍 <strong>Indice :</strong> Créez un compteur <code>nb_a = 0</code>, puis utilisez <code>for lettre in phrase:</code> et <code>if lettre == "a":</code> pour incrémenter le compteur.
                    </div>
                    <div class="console-output" style="margin-top: 15px;">
                        <strong>$ Exemple d'exécution :</strong><br>
                        phrase = "La banane parfaitement jaune"<br>
                        >>> # Votre code ici<br>
                        Le nombre de 'a' est : 6
                    </div>
                </div>

                <div class="exercise-card">
                    <div class="exercise-difficulty">Moyen</div>
                    <div class="exercise-title">Compter les voyelles</div>
                    <div class="exercise-desc">
                        Écris un programme qui compte le nombre total de voyelles (a, e, i, o, u) dans une phrase.
                    </div>

                    <div class="exercise-steps">
                        <strong>Ce qu'il faut faire :</strong>
                        <ol>
                            <li>Créer une variable <code>phrase = "Bonjour tout le monde"</code></li>
                            <li>Créer un compteur initialisé à 0</li>
                            <li>Parcourir chaque lettre avec <code>for lettre in phrase:</code></li>
                            <li>Si la lettre est une voyelle, incrémenter le compteur</li>
                        </ol>
                    </div>

                    <div style="text-align: center; margin-top: 15px;">
                        <button class="hint-button" onclick="toggleHint('hint6p_3')" style="
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
                    <div id="hint6p_3" class="hint-content" style="
                        display: none;
                        background: rgba(255, 215, 0, 0.1);
                        border: 2px solid rgba(255, 215, 0, 0.3);
                        border-radius: 12px;
                        padding: 15px;
                        margin-top: 15px;
                        color: #ffd700;
                        font-style: italic;
                    ">
                        🔍 <strong>Indice :</strong> Utilisez <code>if lettre in "aeiouAEIOU":</code> pour vérifier si c'est une voyelle.
                    </div>
                    <div class="console-output" style="margin-top: 15px;">
                        <strong>$ Exemple d'exécution :</strong><br>
                        phrase = "Bonjour tout le monde"<br>
                        >>> # Votre code ici<br>
                        Le nombre de voyelles est : 8
                    </div>
                </div>

                <div class="exercise-card">
                    <div class="exercise-difficulty">Moyen</div>
                    <div class="exercise-title">Inverser une chaîne</div>
                    <div class="exercise-desc">
                        Écris un programme qui inverse une chaîne de caractères. Tu dois coder la logique toi-même avec une boucle.
                    </div>

                    <div class="exercise-steps">
                        <strong>Ce qu'il faut faire :</strong>
                        <ol>
                            <li>Créer une variable <code>mot = "PYTHON"</code></li>
                            <li>Créer une variable vide pour stocker le résultat</li>
                            <li>Parcourir le mot à l'envers avec une boucle</li>
                            <li>Construire le mot inversé caractère par caractère</li>
                            <li>Afficher le résultat</li>
                        </ol>
                    </div>

                    <div style="text-align: center; margin-top: 15px;">
                        <button class="hint-button" onclick="toggleHint('hint6p_4')" style="
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
                    <div id="hint6p_4" class="hint-content" style="
                        display: none;
                        background: rgba(255, 215, 0, 0.1);
                        border: 2px solid rgba(255, 215, 0, 0.3);
                        border-radius: 12px;
                        padding: 15px;
                        margin-top: 15px;
                        color: #ffd700;
                        font-style: italic;
                    ">
                        🔍 <strong>Indice :</strong> Créez <code>mot_inverse = ""</code>, puis utilisez <code>for lettre in mot:</code> et ajoutez chaque lettre au début avec <code>mot_inverse = lettre + mot_inverse</code>.
                    </div>
                    <div class="console-output" style="margin-top: 15px;">
                        <strong>$ Exemple d'exécution :</strong><br>
                        mot = "PYTHON"<br>
                        >>> # Votre code ici<br>
                        NOHTYP
                    </div>
                </div>

                <div class="exercise-card">
                    <div class="exercise-difficulty">Facile</div>
                    <div class="exercise-title">Premier et dernier</div>
                    <div class="exercise-desc">
                        Soit la chaîne <code>ville = "Paris"</code>. Affiche la première lettre, la dernière lettre, et leur concaténation.
                    </div>

                    <div class="exercise-steps">
                        <strong>Ce qu'il faut faire :</strong>
                        <ol>
                            <li>Créer la variable <code>ville = "Paris"</code></li>
                            <li>Afficher la première lettre</li>
                            <li>Afficher la dernière lettre</li>
                            <li>Afficher la combinaison des deux lettres</li>
                        </ol>
                    </div>

                    <div style="text-align: center; margin-top: 15px;">
                        <button class="hint-button" onclick="toggleHint('hint6p_5')" style="
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
                    <div id="hint6p_5" class="hint-content" style="
                        display: none;
                        background: rgba(255, 215, 0, 0.1);
                        border: 2px solid rgba(255, 215, 0, 0.3);
                        border-radius: 12px;
                        padding: 15px;
                        margin-top: 15px;
                        color: #ffd700;
                        font-style: italic;
                    ">
                        🔍 <strong>Indice :</strong> L'indice <code>0</code> donne le premier caractère, <code>-1</code> donne le dernier. Utilisez <code>+</code> pour concaténer.
                    </div>
                    <div class="console-output" style="margin-top: 15px;">
                        <strong>$ Exemple d'exécution :</strong><br>
                        ville = "Paris"<br>
                        >>> # Votre code ici<br>
                        Première lettre : P<br>
                        Dernière lettre : s<br>
                        Combinaison : Ps
                    </div>
                </div>

                <div class="exercise-card">
                    <div class="exercise-difficulty">Moyen</div>
                    <div class="exercise-title">Afficher avec des espaces</div>
                    <div class="exercise-desc">
                        Écris un programme qui affiche un prénom avec des espaces entre chaque lettre. Tu dois coder la logique toi-même avec une boucle.
                    </div>

                    <div class="exercise-steps">
                        <strong>Ce qu'il faut faire :</strong>
                        <ol>
                            <li>Créer une variable <code>prenom = "MARIE"</code></li>
                            <li>Créer une variable vide pour le résultat</li>
                            <li>Utiliser une boucle pour parcourir chaque lettre</li>
                            <li>Ajouter chaque lettre suivie d'un espace au résultat</li>
                            <li>Afficher le résultat (en supprimant l'espace final si besoin)</li>
                        </ol>
                    </div>

                    <div style="text-align: center; margin-top: 15px;">
                        <button class="hint-button" onclick="toggleHint('hint6p_6')" style="
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
                    <div id="hint6p_6" class="hint-content" style="
                        display: none;
                        background: rgba(255, 215, 0, 0.1);
                        border: 2px solid rgba(255, 215, 0, 0.3);
                        border-radius: 12px;
                        padding: 15px;
                        margin-top: 15px;
                        color: #ffd700;
                        font-style: italic;
                    ">
                        🔍 <strong>Indice :</strong> Créez <code>resultat = ""</code>, puis dans la boucle : <code>resultat += lettre + " "</code>. Utilisez <code>.strip()</code> pour enlever l'espace final.
                    </div>
                    <div class="console-output" style="margin-top: 15px;">
                        <strong>$ Exemple d'exécution :</strong><br>
                        prenom = "MARIE"<br>
                        >>> # Votre code ici<br>
                        M A R I E
                    </div>
                </div>

                <div class="exercise-card">
                    <div class="exercise-difficulty">Moyen</div>
                    <div class="exercise-title">Extraire le milieu</div>
                    <div class="exercise-desc">
                        Soit la chaîne <code>mot = "ORDINATEUR"</code>. Extrait les 4 caractères du milieu (de l'indice 3 à 6 inclus).
                    </div>

                    <div class="exercise-steps">
                        <strong>Ce qu'il faut faire :</strong>
                        <ol>
                            <li>Créer la variable <code>mot = "ORDINATEUR"</code></li>
                            <li>Trouver les bons indices pour extraire de l'indice 3 à 6 inclus</li>
                            <li>Utiliser le slicing pour extraire cette portion</li>
                            <li>Afficher le résultat</li>
                        </ol>
                    </div>

                    <div style="text-align: center; margin-top: 15px;">
                        <button class="hint-button" onclick="toggleHint('hint6p_7')" style="
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
                    <div id="hint6p_7" class="hint-content" style="
                        display: none;
                        background: rgba(255, 215, 0, 0.1);
                        border: 2px solid rgba(255, 215, 0, 0.3);
                        border-radius: 12px;
                        padding: 15px;
                        margin-top: 15px;
                        color: #ffd700;
                        font-style: italic;
                    ">
                        🔍 <strong>Indice :</strong> L'indice de fin dans le slicing est exclusif. Pour obtenir jusqu'à l'indice 6 inclus, il faut mettre 7 comme fin.
                    </div>
                    <div class="console-output" style="margin-top: 15px;">
                        <strong>$ Exemple d'exécution :</strong><br>
                        mot = "ORDINATEUR"<br>
                        >>> print(mot[...])  # Trouver les bons indices<br>
                        INAT
                    </div>
                </div>

                <div class="exercise-card">
                    <div class="exercise-difficulty">Moyen</div>
                    <div class="exercise-title">Vérifier un mot de passe</div>
                    <div class="exercise-desc">
                        Écris un programme qui vérifie si un mot de passe contient le caractère "@" ET a au moins 8 caractères.
                    </div>

                    <div class="exercise-steps">
                        <strong>Ce qu'il faut faire :</strong>
                        <ol>
                            <li>Créer une variable <code>mot_de_passe = "Secure@123"</code></li>
                            <li>Vérifier si "@" est présent dans le mot de passe</li>
                            <li>Vérifier que le mot de passe a au moins 8 caractères</li>
                            <li>Afficher "Mot de passe valide" si les deux conditions sont vraies</li>
                        </ol>
                    </div>

                    <div style="text-align: center; margin-top: 15px;">
                        <button class="hint-button" onclick="toggleHint('hint6p_8')" style="
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
                    <div id="hint6p_8" class="hint-content" style="
                        display: none;
                        background: rgba(255, 215, 0, 0.1);
                        border: 2px solid rgba(255, 215, 0, 0.3);
                        border-radius: 12px;
                        padding: 15px;
                        margin-top: 15px;
                        color: #ffd700;
                        font-style: italic;
                    ">
                        🔍 <strong>Indice :</strong> Utilisez <code>in</code> pour vérifier la présence du caractère, <code>len()</code> pour la longueur, et <code>and</code> pour combiner les conditions.
                    </div>
                    <div class="console-output" style="margin-top: 15px;">
                        <strong>$ Exemple d'exécution :</strong><br>
                        mot_de_passe = "Secure@123"<br>
                        >>> # Votre code ici<br>
                        Mot de passe valide
                    </div>
                </div>
            </div>

            <!-- Summary table -->
            <div style="
                background: rgba(102, 126, 234, 0.1);
                border: 2px solid #667eea;
                border-radius: 12px;
                padding: 25px;
                margin: 30px 0;
            ">
                <h3 style="color: #667eea; margin-bottom: 20px;">Résumé des Actions</h3>
                <table style="width: 100%; color: #fff; border-collapse: collapse;">
                    <thead>
                        <tr style="border-bottom: 2px solid #667eea;">
                            <th style="padding: 10px; text-align: left; color: #ffd700;">Action</th>
                            <th style="padding: 10px; text-align: left; color: #ffd700;">Syntaxe</th>
                            <th style="padding: 10px; text-align: left; color: #ffd700;">Résultat</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                            <td style="padding: 10px;">Longueur</td>
                            <td style="padding: 10px;"><code>len(chaine)</code></td>
                            <td style="padding: 10px;">Nombre de caractères</td>
                        </tr>
                        <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                            <td style="padding: 10px;">Accès</td>
                            <td style="padding: 10px;"><code>chaine[0]</code></td>
                            <td style="padding: 10px;">Premier caractère</td>
                        </tr>
                        <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                            <td style="padding: 10px;">Slicing</td>
                            <td style="padding: 10px;"><code>chaine[3:7]</code></td>
                            <td style="padding: 10px;">Extrait une portion</td>
                        </tr>
                        <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                            <td style="padding: 10px;">Concaténation</td>
                            <td style="padding: 10px;"><code>chaine1 + chaine2</code></td>
                            <td style="padding: 10px;">Combine deux chaînes</td>
                        </tr>
                        <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                            <td style="padding: 10px;">Présence</td>
                            <td style="padding: 10px;"><code>"mot" in chaine</code></td>
                            <td style="padding: 10px;">True ou False</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px;">Parcours</td>
                            <td style="padding: 10px;"><code>for lettre in chaine:</code></td>
                            <td style="padding: 10px;">Traite chaque caractère</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <!-- Quick tips -->
            <div style="
                background: rgba(255, 215, 0, 0.1);
                border-left: 4px solid #ffd700;
                padding: 20px;
                margin: 25px 0;
                border-radius: 8px;
            ">
                <div style="color: #ffd700; font-weight: bold; margin-bottom: 10px;">Astuces :</div>
                <div style="color: #fff; line-height: 1.8; font-size: 0.95em;">
                    • Utilisez <code>len()</code> pour connaître la longueur
                    <br>• <code>[::-1]</code> inverse une chaîne
                    <br>• <code>in</code> vérifie si un mot est dans une chaîne
                    <br>• <code>for lettre in chaine:</code> parcourt chaque caractère
                    <br>• Les indices négatifs partent de la fin (<code>-1</code> = dernier)
                </div>
            </div>
        `
    },

    exercises_part2: {
        icon: 'icon-exercises',
        emoji: '🚀',
        title: 'Exercices Avancés',
        subtitle: 'Partie 2 - Défis supplémentaires',
        content: `
            <div class="section-text">
                Passez au niveau supérieur avec ces exercices avancés sur les chaînes de caractères !
            </div>
            <div class="exercises-grid">
                <div class="exercise-card">
                    <div class="exercise-difficulty">Avancé</div>
                    <div class="exercise-title">Fonction palindrome</div>
                    <div class="exercise-desc">
                        Écris une fonction <code>est_palindrome(mot)</code> qui vérifie si un mot est un palindrome. Un palindrome est un mot qui se lit de la même façon de gauche à droite et de droite à gauche.
                    </div>

                    <div class="exercise-steps">
                        <strong>Ce qu'il faut faire :</strong>
                        <ol>
                            <li>Créer une fonction qui prend un mot en paramètre</li>
                            <li>Inverser le mot avec <code>mot[::-1]</code></li>
                            <li>Comparer le mot original avec le mot inversé</li>
                            <li>Retourner True si identiques, False sinon</li>
                        </ol>
                    </div>

                    <div style="text-align: center; margin-top: 15px;">
                        <button class="hint-button" onclick="toggleHint('hint6_1')" style="
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
                    <div id="hint6_1" class="hint-content" style="
                        display: none;
                        background: rgba(255, 215, 0, 0.1);
                        border: 2px solid rgba(255, 215, 0, 0.3);
                        border-radius: 12px;
                        padding: 15px;
                        margin-top: 15px;
                        color: #ffd700;
                        font-style: italic;
                    ">
                        🔍 <strong>Indice :</strong> Utilisez <code>mot[::-1]</code> pour inverser. Pour le bonus, utilisez <code>.lower().replace(" ", "")</code> pour normaliser avant la comparaison.
                    </div>
                    <div class="console-output" style="margin-top: 15px;">
                        <strong>$ Exemple d'exécution :</strong><br>
                        >>> est_palindrome("kayak")<br>
                        True<br>
                        >>> est_palindrome("radar")<br>
                        True<br>
                        >>> est_palindrome("python")<br>
                        False<br>
                        >>> est_palindrome("Elu par cette crapule")  # Bonus<br>
                        True
                    </div>
                </div>

                <div class="exercise-card">
                    <div class="exercise-difficulty">Facile</div>
                    <div class="exercise-title">Enlever les espaces d'une chaîne</div>
                    <div class="exercise-desc">
                        Écris une fonction <code>enlever_espaces(texte)</code> qui supprime tous les espaces d'une chaîne de caractères.
                    </div>

                    <div class="exercise-steps">
                        <strong>Ce qu'il faut faire :</strong>
                        <ol>
                            <li>Créer une fonction avec un paramètre <code>texte</code></li>
                            <li>Construire une nouvelle chaîne sans espaces</li>
                            <li>Utiliser une boucle <code>for</code> pour parcourir chaque caractère</li>
                            <li>Ajouter le caractère seulement si ce n'est pas un espace</li>
                        </ol>
                    </div>

                    <div style="text-align: center; margin-top: 15px;">
                        <button class="hint-button" onclick="toggleHint('hint6_2')" style="
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
                    <div id="hint6_2" class="hint-content" style="
                        display: none;
                        background: rgba(255, 215, 0, 0.1);
                        border: 2px solid rgba(255, 215, 0, 0.3);
                        border-radius: 12px;
                        padding: 15px;
                        margin-top: 15px;
                        color: #ffd700;
                        font-style: italic;
                    ">
                        🔍 <strong>Indice :</strong> Créez une variable vide <code>resultat = ""</code> puis parcourez avec <code>for caractere in texte:</code>. Si <code>caractere != " "</code>, ajoutez-le au résultat.
                    </div>
                    <div class="console-output" style="margin-top: 15px;">
                        <strong>$ Exemple d'exécution :</strong><br>
                        >>> enlever_espaces("Bonjour tout le monde")<br>
                        'Bonjourtoutlemonde'<br>
                        >>> enlever_espaces("Python  est  génial")<br>
                        'Pythonestgénial'
                    </div>
                </div>

                <div class="exercise-card">
                    <div class="exercise-difficulty">Facile</div>
                    <div class="exercise-title">Carré en ASCII art (8×8)</div>
                    <div class="exercise-desc">
                        Crée un programme qui affiche un carré 8×8 en utilisant le caractère dièse (#).
                    </div>

                    <div class="exercise-steps">
                        <strong>Ce qu'il faut faire :</strong>
                        <ol>
                            <li>Créer une boucle <code>for</code> qui se répète 8 fois</li>
                            <li>À chaque itération, afficher une ligne de 8 dièses</li>
                            <li>Utiliser <code>print("#" * 8)</code> pour créer une ligne</li>
                        </ol>
                    </div>

                    <div style="text-align: center; margin-top: 15px;">
                        <button class="hint-button" onclick="toggleHint('hint6_3')" style="
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
                    <div id="hint6_3" class="hint-content" style="
                        display: none;
                        background: rgba(255, 215, 0, 0.1);
                        border: 2px solid rgba(255, 215, 0, 0.3);
                        border-radius: 12px;
                        padding: 15px;
                        margin-top: 15px;
                        color: #ffd700;
                        font-style: italic;
                    ">
                        🔍 <strong>Indice :</strong> Utilisez <code>for i in range(8):</code> puis <code>print("#" * 8)</code> à l'intérieur de la boucle.
                    </div>
                    <div class="console-output" style="margin-top: 15px;">
                        <strong>$ Exemple d'exécution :</strong><br>
                        ########<br>
                        ########<br>
                        ########<br>
                        ########<br>
                        ########<br>
                        ########<br>
                        ########<br>
                        ########
                    </div>
                </div>

                <div class="exercise-card">
                    <div class="exercise-difficulty">Moyen</div>
                    <div class="exercise-title">AlTeRnEz MiNuScUlE eT mAjUsCuLe</div>
                    <div class="exercise-desc">
                        <strong style="color: #ff6b6b;">EXERCICE OBLIGATOIRE</strong><br><br>
                        Écris une fonction <code>alterner_casse(texte)</code> qui alterne entre majuscules et minuscules. Les caractères aux positions paires (0, 2, 4...) doivent être en minuscules, et les caractères aux positions impaires (1, 3, 5...) doivent être en majuscules.
                    </div>

                    <div class="exercise-steps">
                        <strong>Ce qu'il faut faire :</strong>
                        <ol>
                            <li>Créer une variable vide pour stocker le résultat</li>
                            <li>Utiliser <code>enumerate(texte)</code> pour obtenir l'indice et le caractère</li>
                            <li>Vérifier si l'indice est pair (<code>indice % 2 == 0</code>) ou impair</li>
                            <li>Appliquer <code>.lower()</code> pour les indices pairs, <code>.upper()</code> pour les impairs</li>
                        </ol>
                    </div>

                    <div style="text-align: center; margin-top: 15px;">
                        <button class="hint-button" onclick="toggleHint('hint6_4')" style="
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
                    <div id="hint6_4" class="hint-content" style="
                        display: none;
                        background: rgba(255, 215, 0, 0.1);
                        border: 2px solid rgba(255, 215, 0, 0.3);
                        border-radius: 12px;
                        padding: 15px;
                        margin-top: 15px;
                        color: #ffd700;
                        font-style: italic;
                    ">
                        🔍 <strong>Indice :</strong> Utilisez <code>for indice, caractere in enumerate(texte):</code> puis testez <code>if indice % 2 == 0:</code> pour appliquer la bonne transformation.
                    </div>
                    <div class="console-output" style="margin-top: 15px;">
                        <strong>$ Exemple d'exécution :</strong><br>
                        >>> alterner_casse("python")<br>
                        'pYtHoN'<br>
                        >>> alterner_casse("bonjour")<br>
                        'bOnJoUr'<br>
                        >>> alterner_casse("programmation")<br>
                        'pRoGrAmMaTiOn'
                    </div>
                </div>

                <div class="exercise-card">
                    <div class="exercise-difficulty">Avancé</div>
                    <div class="exercise-title">Est-ce un pangramme ?</div>
                    <div class="exercise-desc">
                        Un <strong>pangramme</strong> est une phrase qui contient toutes les lettres de l'alphabet. Écris une fonction <code>est_pangramme(phrase)</code> qui vérifie si une phrase est un pangramme.
                    </div>

                    <div class="exercise-steps">
                        <strong>Ce qu'il faut faire :</strong>
                        <ol>
                            <li>Créer une variable <code>alphabet = "abcdefghijklmnopqrstuvwxyz"</code></li>
                            <li>Convertir la phrase en minuscules avec <code>.lower()</code></li>
                            <li>Parcourir chaque lettre de l'alphabet</li>
                            <li>Vérifier si chaque lettre est présente dans la phrase avec <code>in</code></li>
                        </ol>
                    </div>

                    <div style="text-align: center; margin-top: 15px;">
                        <button class="hint-button" onclick="toggleHint('hint6_5')" style="
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
                    <div id="hint6_5" class="hint-content" style="
                        display: none;
                        background: rgba(255, 215, 0, 0.1);
                        border: 2px solid rgba(255, 215, 0, 0.3);
                        border-radius: 12px;
                        padding: 15px;
                        margin-top: 15px;
                        color: #ffd700;
                        font-style: italic;
                    ">
                        🔍 <strong>Indice :</strong> Parcourez l'alphabet avec <code>for lettre in alphabet:</code> et retournez False dès qu'une lettre n'est pas dans la phrase. Si toutes sont présentes, retournez True.
                    </div>
                    <div class="console-output" style="margin-top: 15px;">
                        <strong>$ Exemple d'exécution :</strong><br>
                        >>> est_pangramme("Portez ce vieux whisky au juge blond qui fume")<br>
                        True<br>
                        >>> est_pangramme("Voyez le brick géant que j'examine près du wharf")<br>
                        True<br>
                        >>> est_pangramme("Python est génial")<br>
                        False
                    </div>
                </div>

                <div class="exercise-card">
                    <div class="exercise-difficulty">Expert</div>
                    <div class="exercise-title">Détecteur de langue</div>
                    <div class="exercise-desc">
                        Crée une fonction <code>detecter_langue(texte)</code> qui détecte si un texte est en <strong>français</strong> ou en <strong>anglais</strong> en analysant la fréquence d'apparition de certaines lettres.
                        <br><br>
                        <div style="background: rgba(74, 158, 255, 0.15); padding: 15px; border-radius: 10px; border-left: 4px solid #4a9eff; margin-top: 10px;">
                            <strong style="color: #4a9eff;">Fréquence d'apparition</strong><br>
                            <a href="https://fr.wikipedia.org/wiki/Fr%C3%A9quence_d%27apparition_des_lettres" target="_blank" style="color: #ffd700; text-decoration: underline;">Voir sur Wikipédia</a>
                            <br><br>
                            <table style="font-family: monospace; font-size: 0.85em;">
                                <tr style="color: #ffd700;">
                                    <td style="padding: 3px;"><strong>Lettre</strong></td>
                                    <td style="padding: 3px;"><strong>Anglais</strong></td>
                                    <td style="padding: 3px;"><strong>Français</strong></td>
                                </tr>
                                <tr style="color: #4caf50;">
                                    <td>e</td><td>12.70%</td><td>14.72%</td>
                                </tr>
                                <tr style="color: #ff6b6b;">
                                    <td><strong>w</strong></td><td><strong>2.36%</strong></td><td><strong>0.11%</strong></td>
                                </tr>
                            </table>
                        </div>
                    </div>

                    <div class="exercise-steps">
                        <strong>Ce qu'il faut faire :</strong>
                        <ol>
                            <li>Convertir le texte en minuscules</li>
                            <li><strong>Méthode simple :</strong> Chercher les accents français (é, è, à, ê, ç)</li>
                            <li><strong>Méthode avancée :</strong> Calculer la fréquence du 'w' avec <code>.count()</code></li>
                            <li>Retourner "français" ou "anglais" selon les critères détectés</li>
                        </ol>
                    </div>

                    <div style="text-align: center; margin-top: 15px;">
                        <button class="hint-button" onclick="toggleHint('hint6_6')" style="
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
                    <div id="hint6_6" class="hint-content" style="
                        display: none;
                        background: rgba(255, 215, 0, 0.1);
                        border: 2px solid rgba(255, 215, 0, 0.3);
                        border-radius: 12px;
                        padding: 15px;
                        margin-top: 15px;
                        color: #ffd700;
                        font-style: italic;
                    ">
                        🔍 <strong>Indice :</strong> Pour la méthode simple, utilisez <code>if 'é' in texte or 'è' in texte:</code>. Pour la méthode avancée, calculez <code>freq_w = (texte.count('w') / len(texte)) * 100</code>.
                    </div>
                    <div class="console-output" style="margin-top: 15px;">
                        <strong>$ Exemple d'exécution :</strong><br>
                        >>> detecter_langue("Bonjour, comment allez-vous aujourd'hui ?")<br>
                        'français'<br>
                        >>> detecter_langue("Hello, how are you today?")<br>
                        'anglais'<br>
                        >>> detecter_langue("C'est une très belle journée ensoleillée")<br>
                        'français'
                    </div>
                </div>

                <div class="exercise-card">
                    <div class="exercise-difficulty">Expert</div>
                    <div class="exercise-title">Motif carré complexe</div>
                    <div class="exercise-desc">
                        <strong style="color: #ff6b6b;">EXERCICE TRÈS DIFFICILE - AUCUN INDICE</strong><br><br>
                        Demande à l'utilisateur la taille du côté du carré (un nombre impair), puis génère un motif de cadres imbriqués avec les caractères + et . (point).
                    </div>

                    <div class="exercise-steps">
                        <strong>Ce qu'il faut faire :</strong>
                        <ol>
                            <li>Demander la taille du carré (nombre impair : 5, 7, 9, 11...)</li>
                            <li>Générer le motif avec des cadres imbriqués</li>
                            <li>Utiliser le caractère + pour les bordures des cadres</li>
                            <li>Utiliser le caractère . (point) pour l'intérieur</li>
                        </ol>
                    </div>

                    <div style="text-align: center; margin-top: 15px;">
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
                        " title="Aucun indice pour cet exercice">
                            🔒 Indice
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
                    <div class="console-output" style="margin-top: 15px;">
                        <strong>$ Exemple d'exécution (n = 5) :</strong><br>
                        Entrez la taille du carré (nombre impair) : 5<br>
                        + + + + +<br>
                        + . . . +<br>
                        + . + . +<br>
                        + . . . +<br>
                        + + + + +<br>
                        <br>
                        <strong>$ Exemple d'exécution (n = 7) :</strong><br>
                        Entrez la taille du carré (nombre impair) : 7<br>
                        + + + + + + +<br>
                        + . . . . . +<br>
                        + . + + + . +<br>
                        + . + . + . +<br>
                        + . + + + . +<br>
                        + . . . . . +<br>
                        + + + + + + +
                    </div>
                </div>
            </div>

            <!-- Challenge section -->
            <div style="
                background: rgba(255, 107, 107, 0.1);
                border: 2px solid #ff6b6b;
                border-radius: 12px;
                padding: 25px;
                margin: 30px 0;
            ">
                <h3 style="color: #ff6b6b; margin-bottom: 20px;">Défi Expert</h3>
                <div style="color: #fff; line-height: 1.8;">
                    <strong>Combine plusieurs exercices !</strong>
                    <br><br>Crée une fonction <code>analyser_texte(texte)</code> qui affiche :
                    <br>• Le nombre de caractères (avec et sans espaces)
                    <br>• Le nombre de voyelles et de consonnes
                    <br>• Si le texte est un palindrome (en ignorant espaces et casse)
                    <br>• Si le texte est un pangramme
                    <br>• La langue détectée (français ou anglais)
                    <br>• Le texte avec alternance de casse
                </div>
            </div>

            <!-- Tips for part 2 -->
            <div style="
                background: rgba(138, 43, 226, 0.1);
                border-left: 4px solid #f093fb;
                padding: 20px;
                margin: 25px 0;
                border-radius: 8px;
            ">
                <div style="color: #f093fb; font-weight: bold; margin-bottom: 10px;">Astuces pour la Partie 2 :</div>
                <div style="color: #fff; line-height: 1.8; font-size: 0.95em;">
                    • <code>enumerate(chaine)</code> donne l'indice ET le caractère
                    <br>• <code>indice % 2 == 0</code> vérifie si un nombre est pair
                    <br>• <code>.lower()</code> et <code>.upper()</code> changent la casse
                    <br>• <code>.replace(" ", "")</code> enlève tous les espaces
                    <br>• Construisez le résultat progressivement dans une variable
                </div>
            </div>
        `
    }
};
