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

            <div style="
                background: #1e1e1e;
                border: 2px solid #4caf50;
                border-radius: 12px;
                padding: 30px;
                margin: 30px 0;
                font-family: 'JetBrains Mono', monospace;
            ">
                <div style="color: #4caf50; font-size: 1.3em; margin-bottom: 20px; text-align: center;">
                    ═══════════════════════════════════════
                    <br>EXERCICES : LES CHAÎNES DE CARACTÈRES
                    <br>═══════════════════════════════════════
                </div>

                <div style="color: #81d4fa; margin: 20px 0;">
                    <span style="color: #ffd700;">▸ EXO 1 :</span> Extraire avec le slicing
                </div>
                <div style="color: #fff; margin-left: 20px; line-height: 1.8;">
                    Soit la chaîne : <code>phrase = "Bienvenue en Python"</code>
                    <br>Écris le code pour extraire et afficher :
                    <br>• Le mot "Bienvenue"
                    <br>• Le mot "Python"
                    <br>• Les 3 premiers caractères
                    <br>• Les 3 derniers caractères
                </div>

                <div style="color: #81d4fa; margin: 20px 0;">
                    <span style="color: #ffd700;">▸ EXO 2 :</span> Compter le nombre de "a"
                </div>
                <div style="color: #fff; margin-left: 20px; line-height: 1.8;">
                    Écris un programme qui compte combien de fois la lettre "a" apparaît dans une phrase.
                    <br>Exemple : <code>phrase = "La banane parfaitement jaune"</code> → Affiche 6
                </div>

                <div style="color: #81d4fa; margin: 20px 0;">
                    <span style="color: #ffd700;">▸ EXO 3 :</span> Compter les voyelles
                </div>
                <div style="color: #fff; margin-left: 20px; line-height: 1.8;">
                    Écris un programme qui compte le nombre total de voyelles (a, e, i, o, u) dans une phrase.
                    <br>Exemple : <code>phrase = "Bonjour tout le monde"</code> → Affiche 8
                </div>

                <div style="color: #81d4fa; margin: 20px 0;">
                    <span style="color: #ffd700;">▸ EXO 4 :</span> Inverser une chaîne
                </div>
                <div style="color: #fff; margin-left: 20px; line-height: 1.8;">
                    Écris un programme qui inverse une chaîne de caractères.
                    <br>Exemple : <code>mot = "PYTHON"</code> → Affiche "NOHTYP"
                </div>

                <div style="color: #81d4fa; margin: 20px 0;">
                    <span style="color: #ffd700;">▸ EXO 5 :</span> Premier et dernier
                </div>
                <div style="color: #fff; margin-left: 20px; line-height: 1.8;">
                    Soit la chaîne : <code>ville = "Paris"</code>
                    <br>Afficher :
                    <br>• La première lettre
                    <br>• La dernière lettre
                    <br>• Le résultat de la concaténation des deux
                    <br>Résultat attendu : <code>Première lettre : P</code>, <code>Dernière lettre : s</code>, <code>Combinaison : Ps</code>
                </div>

                <div style="color: #81d4fa; margin: 20px 0;">
                    <span style="color: #ffd700;">▸ EXO 6 :</span> Afficher avec des espaces
                </div>
                <div style="color: #fff; margin-left: 20px; line-height: 1.8;">
                    Écris un programme qui affiche ton prénom avec des espaces entre chaque lettre.
                    <br>Exemple : "MARIE" → "M A R I E"
                </div>

                <div style="color: #81d4fa; margin: 20px 0;">
                    <span style="color: #ffd700;">▸ EXO 7 :</span> Extraire le milieu
                </div>
                <div style="color: #fff; margin-left: 20px; line-height: 1.8;">
                    Soit la chaîne : <code>mot = "ORDINATEUR"</code>
                    <br>Extrait les 4 caractères du milieu (de l'indice 3 à 6 inclus).
                    <br>Résultat attendu : INAT
                </div>

                <div style="color: #81d4fa; margin: 20px 0;">
                    <span style="color: #ffd700;">▸ EXO 8 :</span> Vérifier un mot de passe
                </div>
                <div style="color: #fff; margin-left: 20px; line-height: 1.8;">
                    Écris un programme qui vérifie si un mot de passe contient le caractère "@" ET a au moins 8 caractères.
                    <br>Exemple : <code>mot_de_passe = "Secure@123"</code> → Affiche "Mot de passe valide"
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
                <h3 style="color: #667eea; margin-bottom: 20px;">📊 Résumé des Actions</h3>
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
                <div style="color: #ffd700; font-weight: bold; margin-bottom: 10px;">💡 Astuces :</div>
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

            <div style="
                background: #1e1e1e;
                border: 2px solid #f093fb;
                border-radius: 12px;
                padding: 30px;
                margin: 30px 0;
                font-family: 'JetBrains Mono', monospace;
            ">
                <div style="color: #f093fb; font-size: 1.3em; margin-bottom: 20px; text-align: center;">
                    ═══════════════════════════════════════
                    <br>EXERCICES AVANCÉS : CHAÎNES DE CARACTÈRES
                    <br>═══════════════════════════════════════
                </div>

                <div style="color: #81d4fa; margin: 20px 0;">
                    <span style="color: #ffd700;">▸ EXO 1 :</span> Fonction palindrome
                </div>
                <div style="color: #fff; margin-left: 20px; line-height: 1.8;">
                    Écris une fonction <code>est_palindrome(mot)</code> qui vérifie si un mot est un palindrome.
                    <br>Un palindrome est un mot qui se lit de la même façon de gauche à droite et de droite à gauche.
                    <br><br><strong>Exemples :</strong>
                    <br>• <code>est_palindrome("kayak")</code> → True
                    <br>• <code>est_palindrome("radar")</code> → True
                    <br>• <code>est_palindrome("python")</code> → False
                    <br><br><strong>Bonus :</strong> Ignore les espaces et la casse (majuscules/minuscules)
                    <br>• <code>est_palindrome("Elu par cette crapule")</code> → True
                </div>

                <div style="color: #81d4fa; margin: 20px 0;">
                    <span style="color: #ffd700;">▸ EXO 2 :</span> Enlever les espaces d'une chaîne
                </div>
                <div style="color: #fff; margin-left: 20px; line-height: 1.8;">
                    Écris une fonction <code>enlever_espaces(texte)</code> qui supprime tous les espaces d'une chaîne.
                    <br><br><strong>Exemples :</strong>
                    <br>• <code>enlever_espaces("Bonjour tout le monde")</code> → "Bonjourtoutlemonde"
                    <br>• <code>enlever_espaces("Python  est  génial")</code> → "Pythonestgénial"
                </div>

                <div style="color: #81d4fa; margin: 20px 0;">
                    <span style="color: #ffd700;">▸ EXO 3 :</span> Carré en ASCII art (8×8)
                </div>
                <div style="color: #fff; margin-left: 20px; line-height: 1.8;">
                    Crée un programme qui affiche un carré 8×8 en utilisant le caractère dièse (#).
                    <br><br><strong>Résultat attendu :</strong>
                    <pre style="color: #4caf50; margin: 10px 0;">########
########
########
########
########
########
########
########</pre>
                    <strong>Indice :</strong> Utilise une boucle qui se répète 8 fois et affiche "#" * 8
                </div>

                <div style="color: #81d4fa; margin: 20px 0;">
                    <span style="color: #ffd700;">▸ EXO 4 :</span> AlTeRnEz MiNuScUlE eT mAjUsCuLe [OBLIGATOIRE]
                </div>
                <div style="color: #fff; margin-left: 20px; line-height: 1.8;">
                    <strong style="color: #ff6b6b;">⚠️ EXERCICE OBLIGATOIRE</strong>
                    <br><br>Écris une fonction <code>alterner_casse(texte)</code> qui alterne entre majuscules et minuscules.
                    <br>• Les caractères aux positions paires (0, 2, 4...) doivent être en minuscules
                    <br>• Les caractères aux positions impaires (1, 3, 5...) doivent être en majuscules
                    <br><br><strong>Exemples :</strong>
                    <br>• <code>alterner_casse("python")</code> → "pYtHoN"
                    <br>• <code>alterner_casse("bonjour")</code> → "bOnJoUr"
                    <br>• <code>alterner_casse("programmation")</code> → "pRoGrAmMaTiOn"
                    <br><br><strong>Indices :</strong>
                    <br>• Utilise une boucle for avec <code>enumerate()</code> pour avoir l'indice
                    <br>• Utilise <code>.lower()</code> et <code>.upper()</code>
                    <br>• Vérifie si l'indice est pair ou impair avec <code>%</code>
                </div>

                <div style="color: #81d4fa; margin: 20px 0;">
                    <span style="color: #ffd700;">▸ EXO 5 :</span> Est-ce un pangramme ?
                </div>
                <div style="color: #fff; margin-left: 20px; line-height: 1.8;">
                    Un <strong>pangramme</strong> est une phrase qui contient toutes les lettres de l'alphabet.
                    <br><br>Écris une fonction <code>est_pangramme(phrase)</code> qui vérifie si une phrase est un pangramme.
                    <br><br><strong>Exemples de pangrammes en français :</strong>
                    <br>• "Portez ce vieux whisky au juge blond qui fume"
                    <br>• "Voyez le brick géant que j'examine près du wharf"
                    <br><br><strong>Indices :</strong>
                    <br>• Crée une variable avec toutes les lettres : <code>alphabet = "abcdefghijklmnopqrstuvwxyz"</code>
                    <br>• Convertis la phrase en minuscules avec <code>.lower()</code>
                    <br>• Parcours chaque lettre de l'alphabet et vérifie si elle est dans la phrase
                    <br>• Si toutes les lettres sont présentes, c'est un pangramme !
                    <br><br><strong>Résultat attendu :</strong>
                    <br>• <code>est_pangramme("Portez ce vieux whisky au juge blond qui fume")</code> → True
                    <br>• <code>est_pangramme("Python est génial")</code> → False
                </div>

                <div style="color: #81d4fa; margin: 20px 0;">
                    <span style="color: #ffd700;">▸ EXO 6 :</span> Détecteur de langue 🌍
                </div>
                <div style="color: #fff; margin-left: 20px; line-height: 1.8;">
                    Crée un programme qui détecte si un texte est en <strong>français</strong> ou en <strong>anglais</strong> en analysant la fréquence d'apparition de certaines lettres.

                    <br><br><div style="background: rgba(74, 158, 255, 0.15); padding: 20px; border-radius: 10px; border-left: 4px solid #4a9eff;">
                        <strong style="color: #4a9eff;">📊 Fréquence d'apparition des lettres</strong>
                        <br><br>Chaque langue a ses propres statistiques !
                        <a href="https://fr.wikipedia.org/wiki/Fr%C3%A9quence_d%27apparition_des_lettres"
                           target="_blank"
                           style="color: #ffd700; text-decoration: underline;">
                            📖 Voir l'article complet sur Wikipédia
                        </a>

                        <br><br><strong>Top 10 des lettres en français :</strong> (corpus Wikipédia)
                        <br><span style="font-family: monospace; color: #4caf50;">
                        1. e = 12.10%  │  2. a = 7.11%   │  3. i = 6.59%   │  4. s = 6.51%   │  5. n = 6.39%
                        <br>6. r = 6.07%   │  7. t = 5.92%   │  8. o = 5.02%   │  9. l = 4.96%   │ 10. u = 4.49%
                        </span>

                        <br><br><strong>Top 10 des lettres en anglais :</strong>
                        <br><span style="font-family: monospace; color: #81d4fa;">
                        1. e = 12.70%  │  2. t = 9.06%   │  3. a = 8.17%   │  4. o = 7.51%   │  5. i = 6.97%
                        <br>6. n = 6.75%   │  7. s = 6.33%   │  8. h = 6.09%   │  9. r = 5.99%   │ 10. d = 4.25%
                        </span>

                        <br><br><strong style="color: #ffd700;">🔍 Indices clés :</strong>
                        <br>• <strong>Français :</strong> accents (é=1.94%, è=0.31%, à=0.31%), w rare (0.17%)
                        <br>• <strong>Anglais :</strong> 'w' plus fréquent (~2.36%), pas d'accents, 'h' très présent (6.09%)
                    </div>

                    <br><br><strong>📝 Ta mission :</strong>
                    <br>Écris une fonction <code>detecter_langue(texte)</code> qui retourne "français" ou "anglais"
                    <br><br><strong>💡 Stratégie suggérée :</strong>
                    <br>1. Convertis le texte en minuscules avec <code>.lower()</code>
                    <br>2. Compte le nombre total de lettres avec <code>len()</code>
                    <br>3. <strong>Méthode simple :</strong> Cherche les accents français
                    <br>&nbsp;&nbsp;&nbsp;• Si tu trouves 'é', 'è', 'à', 'ê', 'ç' → c'est du français
                    <br>&nbsp;&nbsp;&nbsp;• Sinon, c'est probablement de l'anglais
                    <br>4. <strong>Méthode avancée :</strong> Compare les fréquences (utilise <code>.count()</code>)
                    <br>&nbsp;&nbsp;&nbsp;• Compte le 'w' : si > 1.5% du texte → anglais, si < 0.5% → français
                    <br>&nbsp;&nbsp;&nbsp;• Compte le 'h' : si > 5% → anglais, si < 2% → français
                    <br>5. <strong>Pour les experts :</strong> Calcule un "score de langue" basé sur plusieurs lettres
                    <br><br><strong>Exemples de test :</strong>
                    <br>• <code>detecter_langue("Bonjour, comment allez-vous aujourd'hui ?")</code> → "français"
                    <br>• <code>detecter_langue("Hello, how are you today?")</code> → "anglais"
                    <br>• <code>detecter_langue("C'est une très belle journée ensoleillée")</code> → "français"
                    <br>• <code>detecter_langue("The weather is wonderful today")</code> → "anglais"
                    <br><br><strong>🚀 Bonus pour les experts :</strong>
                    <br>• Ajoute la détection de l'espagnol (cherche 'ñ', '¿', '¡')
                    <br>• Calcule la fréquence exacte du 'e' et compare avec les statistiques
                    <br>• Affiche un pourcentage de confiance (ex: "français à 87%")
                </div>

                <div style="color: #81d4fa; margin: 20px 0;">
                    <span style="color: #ffd700;">▸ EXO 7 :</span> Motif carré complexe [EXTRA DUR] 💀
                </div>
                <div style="color: #fff; margin-left: 20px; line-height: 1.8;">
                    <strong style="color: #ff6b6b;">⚠️ EXERCICE TRÈS DIFFICILE - AUCUN INDICE</strong>
                    <br><br>Reproduis exactement ce motif :
                    <pre style="color: #4caf50; margin: 10px 0; font-size: 0.9em;">+ + + + + + + + +
+ . . . . . . . +
+ . + + + + + . +
+ . + . . . + . +
+ . + . + . + . +
+ . + . . . + . +
+ . + + + + + . +
+ . . . . . . . +
+ + + + + + + + +</pre>
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
                <h3 style="color: #ff6b6b; margin-bottom: 20px;">🔥 Défi Expert</h3>
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
                <div style="color: #f093fb; font-weight: bold; margin-bottom: 10px;">💡 Astuces pour la Partie 2 :</div>
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
