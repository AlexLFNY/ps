// Lesson 10: Mini Wordle en Python
// Deuxième Période - Application pratique des chaînes de caractères

export const lesson10Data = {
    intro: {
        icon: 'icon-game',
        emoji: '',
        title: 'Mini Wordle en Python',
        subtitle: 'Un jeu de devinettes de mots',
        content: `
            <div class="section-text">
                <strong>Wordle</strong> est un jeu viral où vous devez deviner un mot de 6 lettres en un nombre limité d'essais.
                Après chaque tentative, le jeu vous indique quelles lettres sont correctes et bien placées, présentes mais mal placées, ou absentes.
            </div>

            <div style="
                background: rgba(74, 158, 255, 0.15);
                padding: 20px;
                border-radius: 12px;
                border-left: 4px solid #4a9eff;
                margin: 25px 0;
            ">
                <div style="color: #4a9eff; font-weight: bold; margin-bottom: 15px;">Le jeu Wordle</div>
                <div class="section-text">
                    Vous avez 6 tentatives pour deviner le mot secret. Après chaque essai :
                    <br><br>
                    🟩 <strong style="color: #4caf50;">Vert</strong> : La lettre est correcte et à la bonne position<br>
                    🟨 <strong style="color: #ffd700;">Jaune</strong> : La lettre est dans le mot mais mal placée<br>
                    ⬜ <strong style="color: #999;">Gris</strong> : La lettre n'est pas dans le mot
                </div>
            </div>

            <div class="code-example">
                <h3 style="color: #ffd700;">Exemple de partie</h3>
                <div class="section-text">
                    Mot secret : <code>PYTHON</code>
                </div>
                <div style="background: rgba(0,0,0,0.3); padding: 15px; border-radius: 8px; margin-top: 15px; color: #fff;">
                    <strong>Tentative 1 : PROJET</strong><br>
                    <span style="background: #4caf50; color: white; padding: 2px 6px; font-weight: bold; margin: 2px;"> P </span>
                    <span style="background: #666; color: white; padding: 2px 6px; font-weight: bold; margin: 2px;"> R </span>
                    <span style="background: #ffd700; color: white; padding: 2px 6px; font-weight: bold; margin: 2px;"> O </span>
                    <span style="background: #666; color: white; padding: 2px 6px; font-weight: bold; margin: 2px;"> J </span>
                    <span style="background: #666; color: white; padding: 2px 6px; font-weight: bold; margin: 2px;"> E </span>
                    <span style="background: #ffd700; color: white; padding: 2px 6px; font-weight: bold; margin: 2px;"> T </span>
                    <br><br>
                    <strong>Tentative 2 : PYTHON</strong><br>
                    <span style="background: #4caf50; color: white; padding: 2px 6px; font-weight: bold; margin: 2px;"> P </span>
                    <span style="background: #4caf50; color: white; padding: 2px 6px; font-weight: bold; margin: 2px;"> Y </span>
                    <span style="background: #4caf50; color: white; padding: 2px 6px; font-weight: bold; margin: 2px;"> T </span>
                    <span style="background: #4caf50; color: white; padding: 2px 6px; font-weight: bold; margin: 2px;"> H </span>
                    <span style="background: #4caf50; color: white; padding: 2px 6px; font-weight: bold; margin: 2px;"> O </span>
                    <span style="background: #4caf50; color: white; padding: 2px 6px; font-weight: bold; margin: 2px;"> N </span>
                    <br><br>
                    <strong>Bravo ! Mot trouvé !</strong>
                </div>
            </div>

            <div style="
                background: rgba(76, 175, 80, 0.1);
                border-left: 4px solid #4caf50;
                padding: 20px;
                margin: 25px 0;
                border-radius: 8px;
            ">
                <div style="color: #4caf50; font-weight: bold; margin-bottom: 10px;">Ce que vous allez apprendre</div>
                <div class="section-text">
                    Dans cette leçon, vous allez créer votre propre version de Wordle en Python !
                    Vous utiliserez les concepts de chaînes de caractères : parcours, indexation, et comparaison.
                </div>
            </div>
        `
    },

    color_functions: {
        icon: 'icon-palette',
        emoji: '',
        title: 'Fonctions de Coloration',
        subtitle: 'Afficher les lettres en couleur',
        content: `
            <div class="section-text">
                Pour rendre notre jeu Wordle plus visuel, nous allons utiliser des <strong>codes ANSI</strong> qui permettent d'afficher du texte coloré dans le terminal Python.
            </div>

            <div style="
                background: rgba(74, 158, 255, 0.15);
                padding: 20px;
                border-radius: 12px;
                border-left: 4px solid #4a9eff;
                margin: 25px 0;
            ">
                <div style="color: #4a9eff; font-weight: bold; margin-bottom: 15px;">Les codes ANSI</div>
                <div class="section-text">
                    Les codes ANSI sont des séquences spéciales qui permettent de changer la couleur du texte dans le terminal.
                    <br>Par exemple : <code>\\033[42m</code> donne un fond vert, <code>\\033[43m</code> un fond jaune.
                </div>
            </div>

            <div class="code-example">
                <h3 style="color: #ffd700;">Fonction principale : color_letter()</h3>
                <div class="section-text">
                    Cette fonction prend une lettre et une couleur, et retourne la lettre avec un fond coloré.
                </div>
                <pre><code class="python">def color_letter(letter, color):
    # Codes ANSI pour les couleurs
    GREEN_BG = '\\033[42m'      # Fond vert
    YELLOW_BG = '\\033[43m'     # Fond jaune
    GRAY_BG = '\\033[100m'      # Fond gris
    WHITE_TEXT = '\\033[97m'    # Texte blanc
    BOLD = '\\033[1m'           # Texte en gras
    RESET = '\\033[0m'          # Réinitialiser les couleurs

    # Choisir la couleur de fond selon le paramètre
    if color == 'green':
        bg_color = GREEN_BG
    elif color == 'yellow':
        bg_color = YELLOW_BG
    elif color == 'gray':
        bg_color = GRAY_BG
    else:
        return "boom"  # Erreur si couleur invalide

    # Retourner la lettre formatée avec couleur
    return f"{bg_color}{WHITE_TEXT}{BOLD} {letter.upper()} {RESET}"</code></pre>
                <button class="code-load-button" onclick="loadCodeIntoConsole(\`def color_letter(letter, color):
    GREEN_BG = '\\\\033[42m'
    YELLOW_BG = '\\\\033[43m'
    GRAY_BG = '\\\\033[100m'
    WHITE_TEXT = '\\\\033[97m'
    BOLD = '\\\\033[1m'
    RESET = '\\\\033[0m'

    if color == 'green':
        bg_color = GREEN_BG
    elif color == 'yellow':
        bg_color = YELLOW_BG
    elif color == 'gray':
        bg_color = GRAY_BG
    else:
        return &quot;boom&quot;

    return f&quot;{bg_color}{WHITE_TEXT}{BOLD} {letter.upper()} {RESET}&quot;

# Test de la fonction
print(color_letter('P', 'green'))
print(color_letter('O', 'yellow'))
print(color_letter('R', 'gray'))\`)">Charger</button>
            </div>

            <div class="code-example">
                <h3 style="color: #ffd700;">Fonctions helper simplifiées</h3>
                <div class="section-text">
                    Pour faciliter l'utilisation, nous créons trois fonctions courtes qui appellent <code>color_letter()</code> :
                </div>
                <pre><code class="python">def good_position(letter):
    """Lettre à la bonne position (vert)"""
    return color_letter(letter, "green")

def in_word(letter):
    """Lettre présente mais mal placée (jaune)"""
    return color_letter(letter, "yellow")

def not_in_word(letter):
    """Lettre absente du mot (gris)"""
    return color_letter(letter, "gray")</code></pre>
                <button class="code-load-button" onclick="loadCodeIntoConsole(\`def color_letter(letter, color):
    GREEN_BG = '\\\\033[42m'
    YELLOW_BG = '\\\\033[43m'
    GRAY_BG = '\\\\033[100m'
    WHITE_TEXT = '\\\\033[97m'
    BOLD = '\\\\033[1m'
    RESET = '\\\\033[0m'

    if color == 'green':
        bg_color = GREEN_BG
    elif color == 'yellow':
        bg_color = YELLOW_BG
    elif color == 'gray':
        bg_color = GRAY_BG
    else:
        return &quot;boom&quot;

    return f&quot;{bg_color}{WHITE_TEXT}{BOLD} {letter.upper()} {RESET}&quot;

def good_position(letter):
    return color_letter(letter, &quot;green&quot;)

def in_word(letter):
    return color_letter(letter, &quot;yellow&quot;)

def not_in_word(letter):
    return color_letter(letter, &quot;gray&quot;)

# Test des fonctions
print(good_position('P'))
print(in_word('O'))
print(not_in_word('R'))\`)">Charger</button>
            </div>

            <div class="code-example">
                <h3 style="color: #ffd700;">Exemple d'utilisation complète</h3>
                <div class="section-text">
                    Voici comment utiliser ces fonctions pour afficher le résultat d'une tentative :
                </div>
                <pre><code class="python">mot_secret = "PYTHON"
tentative = "PROJET"

for i in range(len(tentative)):
    lettre = tentative[i]

    if lettre == mot_secret[i]:
        # Bonne position → vert
        print(good_position(lettre), end=" ")
    elif lettre in mot_secret:
        # Dans le mot mais mal placé → jaune
        print(in_word(lettre), end=" ")
    else:
        # Pas dans le mot → gris
        print(not_in_word(lettre), end=" ")

print()  # Retour à la ligne</code></pre>
                <button class="code-load-button" onclick="loadCodeIntoConsole(\`def color_letter(letter, color):
    GREEN_BG = '\\\\033[42m'
    YELLOW_BG = '\\\\033[43m'
    GRAY_BG = '\\\\033[100m'
    WHITE_TEXT = '\\\\033[97m'
    BOLD = '\\\\033[1m'
    RESET = '\\\\033[0m'

    if color == 'green':
        bg_color = GREEN_BG
    elif color == 'yellow':
        bg_color = YELLOW_BG
    elif color == 'gray':
        bg_color = GRAY_BG
    else:
        return &quot;boom&quot;

    return f&quot;{bg_color}{WHITE_TEXT}{BOLD} {letter.upper()} {RESET}&quot;

def good_position(letter):
    return color_letter(letter, &quot;green&quot;)

def in_word(letter):
    return color_letter(letter, &quot;yellow&quot;)

def not_in_word(letter):
    return color_letter(letter, &quot;gray&quot;)

mot_secret = &quot;PYTHON&quot;
tentative = &quot;PROJET&quot;

for i in range(len(tentative)):
    lettre = tentative[i]

    if lettre == mot_secret[i]:
        print(good_position(lettre), end=&quot; &quot;)
    elif lettre in mot_secret:
        print(in_word(lettre), end=&quot; &quot;)
    else:
        print(not_in_word(lettre), end=&quot; &quot;)

print()\`)">Charger</button>
            </div>

            <div style="
                background: rgba(255, 215, 0, 0.1);
                border-left: 4px solid #ffd700;
                padding: 20px;
                margin: 25px 0;
                border-radius: 8px;
            ">
                <div style="color: #ffd700; font-weight: bold; margin-bottom: 10px;">Pourquoi trois fonctions ?</div>
                <div class="section-text">
                    Au lieu d'écrire <code>color_letter('P', 'green')</code>, on peut simplement écrire <code>good_position('P')</code>.
                    <br>C'est plus court, plus lisible, et le code exprime clairement l'intention !
                </div>
            </div>
        `
    },

    concepts: {
        icon: 'icon-concepts',
        emoji: '',
        title: 'Concepts Clés',
        subtitle: 'Les outils nécessaires',
        content: `
            <div class="section-text">
                Pour créer notre jeu Wordle, nous aurons besoin de plusieurs concepts sur les chaînes de caractères.
            </div>

            <div class="code-example">
                <h3 style="color: #ffd700;">1. Parcourir une chaîne avec les indices</h3>
                <div class="section-text">
                    Pour comparer chaque lettre position par position, nous devons parcourir les deux chaînes en même temps.
                </div>
                <pre><code class="python">mot_secret = "PYTHON"
tentative = "PROJET"

# Parcourir chaque position
for i in range(len(tentative)):
    lettre_tentative = tentative[i]
    lettre_secret = mot_secret[i]
    print(f"Position {i}: '{lettre_tentative}' vs '{lettre_secret}'")</code></pre>
                <button class="code-load-button" onclick="loadCodeIntoConsole(\`mot_secret = &quot;PYTHON&quot;
tentative = &quot;PROJET&quot;

for i in range(len(tentative)):
    lettre_tentative = tentative[i]
    lettre_secret = mot_secret[i]
    print(f&quot;Position {i}: '{lettre_tentative}' vs '{lettre_secret}'&quot;)\`)">Charger</button>
            </div>

            <div class="code-example">
                <h3 style="color: #ffd700;">2. Comparer des lettres</h3>
                <div class="section-text">
                    Nous utilisons <code>==</code> pour vérifier si deux lettres sont identiques.
                </div>
                <pre><code class="python">mot_secret = "PYTHON"
tentative = "PROJET"

i = 0  # Première position
if tentative[i] == mot_secret[i]:
    print(f"✓ Lettre {tentative[i]} est à la bonne position !")
else:
    print(f"✗ Lettre {tentative[i]} n'est pas à la bonne position")</code></pre>
                <button class="code-load-button" onclick="loadCodeIntoConsole(\`mot_secret = &quot;PYTHON&quot;
tentative = &quot;PROJET&quot;

i = 0
if tentative[i] == mot_secret[i]:
    print(f&quot;✓ Lettre {tentative[i]} est à la bonne position !&quot;)
else:
    print(f&quot;✗ Lettre {tentative[i]} n'est pas à la bonne position&quot;)\`)">Charger</button>
            </div>

            <div class="code-example">
                <h3 style="color: #ffd700;">3. Vérifier si une lettre est dans le mot</h3>
                <div class="section-text">
                    L'opérateur <code>in</code> permet de vérifier si une lettre est présente quelque part dans le mot.
                </div>
                <pre><code class="python">mot_secret = "PYTHON"
lettre = "O"

if lettre in mot_secret:
    print(f"? La lettre {lettre} est dans le mot !")
else:
    print(f"X La lettre {lettre} n'est pas dans le mot")</code></pre>
                <button class="code-load-button" onclick="loadCodeIntoConsole(\`mot_secret = &quot;PYTHON&quot;
lettre = &quot;O&quot;

if lettre in mot_secret:
    print(f&quot;? La lettre {lettre} est dans le mot !&quot;)
else:
    print(f&quot;X La lettre {lettre} n'est pas dans le mot&quot;)\`)">Charger</button>
            </div>

            <div class="code-example">
                <h3 style="color: #ffd700;">4. Combiner les trois logiques</h3>
                <div class="section-text">
                    Pour chaque lettre, nous devons vérifier dans l'ordre :
                    <br>1. Est-elle à la bonne position ? → ✓ (vert)
                    <br>2. Sinon, est-elle dans le mot ? → ? (jaune)
                    <br>3. Sinon, elle est absente → X (gris)
                </div>
                <pre><code class="python">mot_secret = "PYTHON"
tentative = "PROJET"

for i in range(len(tentative)):
    lettre = tentative[i]

    if lettre == mot_secret[i]:
        print(f"{lettre} : ✓ (bonne position)")
    elif lettre in mot_secret:
        print(f"{lettre} : ? (présent mais mal placé)")
    else:
        print(f"{lettre} : X (absent)")</code></pre>
                <button class="code-load-button" onclick="loadCodeIntoConsole(\`mot_secret = &quot;PYTHON&quot;
tentative = &quot;PROJET&quot;

for i in range(len(tentative)):
    lettre = tentative[i]

    if lettre == mot_secret[i]:
        print(f&quot;{lettre} : ✓ (bonne position)&quot;)
    elif lettre in mot_secret:
        print(f&quot;{lettre} : ? (présent mais mal placé)&quot;)
    else:
        print(f&quot;{lettre} : X (absent)&quot;)\`)">Charger</button>
            </div>

            <div style="
                background: rgba(255, 215, 0, 0.1);
                border-left: 4px solid #ffd700;
                padding: 20px;
                margin: 25px 0;
                border-radius: 8px;
            ">
                <div style="color: #ffd700; font-weight: bold; margin-bottom: 10px;">Astuce importante</div>
                <div class="section-text">
                    L'ordre des conditions est crucial ! On vérifie d'abord si la lettre est à la bonne position
                    (<code>==</code>), puis si elle est présente ailleurs (<code>in</code>).
                    Si on inverse, une lettre bien placée serait marquée comme "présente mais mal placée".
                </div>
            </div>
        `
    },

    algorithm: {
        icon: 'icon-flowchart',
        emoji: '',
        title: 'Algorithme du Vrai Wordle',
        subtitle: 'Diagramme et logique complète',
        content: `
            <div class="section-text">
                L'algorithme du vrai Wordle est plus complexe que notre version simple. Il doit gérer les cas où une lettre apparaît plusieurs fois dans le mot secret ou dans la tentative.
            </div>

            <div style="
                background: rgba(74, 158, 255, 0.15);
                padding: 20px;
                border-radius: 12px;
                border-left: 4px solid #4a9eff;
                margin: 25px 0;
            ">
                <div style="color: #4a9eff; font-weight: bold; margin-bottom: 15px;">Problème des lettres répétées</div>
                <div class="section-text">
                    Exemple : Mot secret = <code>ALLEE</code>, Tentative = <code>ELLES</code>
                    <br><br>
                    Le premier <strong>E</strong> de ELLES est à la bonne position (position 3)<br>
                    Le second <strong>E</strong> de ELLES est présent mais mal placé (il y a un E en position 4 dans ALLEE)<br>
                    Le troisième <strong>E</strong> de ELLES n'existe plus dans ALLEE (les 2 E ont déjà été utilisés)<br>
                    <br>
                    <strong>Règle :</strong> Chaque lettre du mot secret ne peut être "consommée" qu'une seule fois.
                </div>
            </div>

            <div class="code-example">
                <h3 style="color: #ffd700;">Diagramme de l'algorithme</h3>
                <div style="background: rgba(0,0,0,0.3); padding: 25px; border-radius: 12px; margin-top: 15px;">
                    <pre style="color: #fff; font-family: monospace; line-height: 1.8; margin: 0;">
┌─────────────────────────────────────────────────────────┐
│  DÉBUT : Comparer mot_secret et tentative              │
└────────────────────┬────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────┐
│  Étape 1 : Créer un tableau de résultats               │
│  résultat = [' ', ' ', ' ', ' ', ' ', ' ']             │
│  disponibles = copie de mot_secret                      │
└────────────────────┬────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────┐
│  Étape 2 : PREMIER PASSAGE (lettres vertes)            │
│  Pour i de 0 à 5 :                                      │
│    Si tentative[i] == mot_secret[i] :                   │
│      → résultat[i] = 'VERT'                             │
│      → Retirer cette lettre de disponibles              │
└────────────────────┬────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────┐
│  Étape 3 : DEUXIÈME PASSAGE (lettres jaunes/grises)    │
│  Pour i de 0 à 5 :                                      │
│    Si résultat[i] est déjà 'VERT' :                     │
│      → Continuer (ignorer cette position)               │
│    Sinon si tentative[i] est dans disponibles :         │
│      → résultat[i] = 'JAUNE'                            │
│      → Retirer cette lettre de disponibles              │
│    Sinon :                                              │
│      → résultat[i] = 'GRIS'                             │
└────────────────────┬────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────┐
│  Étape 4 : Afficher le résultat                         │
│  Pour chaque lettre, afficher avec sa couleur           │
└────────────────────┬────────────────────────────────────┘
                     │
                     ▼
                  [ FIN ]</pre>
                </div>
            </div>

            <div class="code-example">
                <h3 style="color: #ffd700;">Exemple pas à pas</h3>
                <div class="section-text">
                    Appliquons l'algorithme avec mot_secret = <code>"ALLEE"</code> et tentative = <code>"ELLES"</code>
                </div>
                <div style="background: rgba(0,0,0,0.3); padding: 20px; border-radius: 12px; margin-top: 15px;">
                    <strong style="color: #4a9eff;">Initialisation :</strong><br>
                    résultat = [' ', ' ', ' ', ' ', ' ']<br>
                    disponibles = ['A', 'L', 'L', 'E', 'E']<br>
                    <br>
                    <strong style="color: #4caf50;">Premier passage (VERT) :</strong><br>
                    i=0 : E ≠ A → rien<br>
                    i=1 : L ≠ L → rien<br>
                    i=2 : L = L → résultat[2] = 'VERT', disponibles = ['A', 'L', 'E', 'E']<br>
                    i=3 : E = E → résultat[3] = 'VERT', disponibles = ['A', 'L', 'E']<br>
                    i=4 : S ≠ E → rien<br>
                    <br>
                    Résultat après 1er passage : [' ', ' ', 'VERT', 'VERT', ' ']<br>
                    <br>
                    <strong style="color: #ffd700;">Deuxième passage (JAUNE/GRIS) :</strong><br>
                    i=0 : déjà traité ? Non. E dans ['A', 'L', 'E'] ? Oui<br>
                          → résultat[0] = 'JAUNE', disponibles = ['A', 'L']<br>
                    i=1 : déjà traité ? Non. L dans ['A', 'L'] ? Oui<br>
                          → résultat[1] = 'JAUNE', disponibles = ['A']<br>
                    i=2 : déjà traité ? Oui (VERT) → ignorer<br>
                    i=3 : déjà traité ? Oui (VERT) → ignorer<br>
                    i=4 : déjà traité ? Non. S dans ['A'] ? Non<br>
                          → résultat[4] = 'GRIS'<br>
                    <br>
                    <strong style="color: #fff;">Résultat final :</strong><br>
                    <span style="background: #ffd700; color: white; padding: 2px 6px; font-weight: bold;"> E </span>
                    <span style="background: #ffd700; color: white; padding: 2px 6px; font-weight: bold;"> L </span>
                    <span style="background: #4caf50; color: white; padding: 2px 6px; font-weight: bold;"> L </span>
                    <span style="background: #4caf50; color: white; padding: 2px 6px; font-weight: bold;"> E </span>
                    <span style="background: #666; color: white; padding: 2px 6px; font-weight: bold;"> S </span>
                </div>
            </div>

            <div class="code-example">
                <h3 style="color: #ffd700;">Différence avec notre version simple</h3>
                <div class="section-text">
                    <strong>Notre version simple :</strong>
                    <ul style="margin-left: 20px;">
                        <li>Vérifie simplement si une lettre est dans le mot</li>
                        <li>Ne gère pas les lettres répétées correctement</li>
                        <li>Plus facile à comprendre pour débuter</li>
                    </ul>
                    <br>
                    <strong>Version du vrai Wordle :</strong>
                    <ul style="margin-left: 20px;">
                        <li>Deux passages : d'abord les vertes, puis les jaunes</li>
                        <li>Chaque lettre du mot secret n'est utilisée qu'une fois</li>
                        <li>Plus complexe mais plus juste</li>
                    </ul>
                </div>
            </div>

            <div style="
                background: rgba(255, 215, 0, 0.1);
                border-left: 4px solid #ffd700;
                padding: 20px;
                margin: 25px 0;
                border-radius: 8px;
            ">
                <div style="color: #ffd700; font-weight: bold; margin-bottom: 10px;">Note importante</div>
                <div class="section-text">
                    L'algorithme complet du vrai Wordle nécessite des concepts avancés (listes, manipulation de copies).
                    Pour l'instant, concentrez-vous sur la version simple des exercices.
                    Une fois que vous maîtriserez les listes (leçon future), vous pourrez implémenter la version complète !
                </div>
            </div>
        `
    },

    exercises: {
        icon: 'icon-exercises',
        emoji: '',
        title: 'Exercices Guidés',
        subtitle: 'Construire le jeu Wordle',
        content: `
            <div class="section-text">
                Créons progressivement notre jeu Wordle en Python !
            </div>
            <div class="exercises-grid">
                <div class="exercise-card">
                    <div class="exercise-difficulty">Facile</div>
                    <div class="exercise-title">Vérifier une tentative avec couleurs</div>
                    <div class="exercise-desc">
                        Écris un programme qui compare une tentative avec le mot secret et affiche le résultat en couleur pour chaque lettre.
                    </div>

                    <div class="exercise-steps">
                        <strong>Ce qu'il faut faire :</strong>
                        <ol>
                            <li>Copier les fonctions de coloration dans ton code (ou charger avec le bouton Charger)</li>
                            <li>Créer deux variables : <code>mot_secret = "PYTHON"</code> et <code>tentative = "PROJET"</code></li>
                            <li>Parcourir chaque position avec <code>for i in range(len(tentative)):</code></li>
                            <li>Pour chaque lettre, vérifier :
                                <ul>
                                    <li>Si elle est à la bonne position → <code>print(good_position(lettre), end=" ")</code></li>
                                    <li>Sinon, si elle est dans le mot → <code>print(in_word(lettre), end=" ")</code></li>
                                    <li>Sinon → <code>print(not_in_word(lettre), end=" ")</code></li>
                                </ul>
                            </li>
                        </ol>
                    </div>

                    <div style="text-align: center; margin-top: 15px;">
                        <button class="hint-button" onclick="toggleHint('hint10_1')" style="
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
                            Indice
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
                            Solution
                        </button>
                    </div>
                    <div id="hint10_1" class="hint-content" style="
                        display: none;
                        background: rgba(255, 215, 0, 0.1);
                        border: 2px solid rgba(255, 215, 0, 0.3);
                        border-radius: 12px;
                        padding: 15px;
                        margin-top: 15px;
                        color: #ffd700;
                        font-style: italic;
                    ">
                        <strong>Indice :</strong> Commencez par charger les fonctions de coloration avec le bouton de la section précédente. Puis utilisez <code>if lettre == mot_secret[i]:</code> pour tester la bonne position, et <code>elif lettre in mot_secret:</code> pour la présence. N'oubliez pas <code>end=" "</code> dans les print !
                    </div>
                    <div class="console-output" style="margin-top: 15px;">
                        <strong>$ Exemple d'exécution :</strong><br>
                        <span style="background: #4caf50; color: white; padding: 2px 6px; font-weight: bold;"> P </span>
                        <span style="background: #666; color: white; padding: 2px 6px; font-weight: bold;"> R </span>
                        <span style="background: #ffd700; color: white; padding: 2px 6px; font-weight: bold;"> O </span>
                        <span style="background: #666; color: white; padding: 2px 6px; font-weight: bold;"> J </span>
                        <span style="background: #666; color: white; padding: 2px 6px; font-weight: bold;"> E </span>
                        <span style="background: #ffd700; color: white; padding: 2px 6px; font-weight: bold;"> T </span>
                    </div>
                </div>

                <div class="exercise-card">
                    <div class="exercise-difficulty">Moyen</div>
                    <div class="exercise-title">Créer une fonction de vérification</div>
                    <div class="exercise-desc">
                        Transforme ton code en une fonction réutilisable <code>verifier_tentative(mot_secret, tentative)</code>.
                    </div>

                    <div class="exercise-steps">
                        <strong>Ce qu'il faut faire :</strong>
                        <ol>
                            <li>Créer une fonction qui prend deux paramètres : <code>mot_secret</code> et <code>tentative</code></li>
                            <li>Reprendre la logique de l'exercice précédent</li>
                            <li>Tester avec plusieurs tentatives différentes</li>
                        </ol>
                    </div>

                    <div style="text-align: center; margin-top: 15px;">
                        <button class="hint-button" onclick="toggleHint('hint10_2')" style="
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
                            Indice
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
                            Solution
                        </button>
                    </div>
                    <div id="hint10_2" class="hint-content" style="
                        display: none;
                        background: rgba(255, 215, 0, 0.1);
                        border: 2px solid rgba(255, 215, 0, 0.3);
                        border-radius: 12px;
                        padding: 15px;
                        margin-top: 15px;
                        color: #ffd700;
                        font-style: italic;
                    ">
                        <strong>Indice :</strong> Commencez par <code>def verifier_tentative(mot_secret, tentative):</code> et mettez le code de l'exercice 1 à l'intérieur.
                    </div>
                    <div class="console-output" style="margin-top: 15px;">
                        <strong>$ Exemple d'exécution :</strong><br>
                        >>> verifier_tentative("PYTHON", "PROJET")<br>
                        <span style="background: #4caf50; color: white; padding: 2px 6px; font-weight: bold;"> P </span>
                        <span style="background: #666; color: white; padding: 2px 6px; font-weight: bold;"> R </span>
                        <span style="background: #ffd700; color: white; padding: 2px 6px; font-weight: bold;"> O </span>
                        <span style="background: #666; color: white; padding: 2px 6px; font-weight: bold;"> J </span>
                        <span style="background: #666; color: white; padding: 2px 6px; font-weight: bold;"> E </span>
                        <span style="background: #ffd700; color: white; padding: 2px 6px; font-weight: bold;"> T </span>
                        <br>
                        <br>
                        >>> verifier_tentative("PYTHON", "PYTHON")<br>
                        <span style="background: #4caf50; color: white; padding: 2px 6px; font-weight: bold;"> P </span>
                        <span style="background: #4caf50; color: white; padding: 2px 6px; font-weight: bold;"> Y </span>
                        <span style="background: #4caf50; color: white; padding: 2px 6px; font-weight: bold;"> T </span>
                        <span style="background: #4caf50; color: white; padding: 2px 6px; font-weight: bold;"> H </span>
                        <span style="background: #4caf50; color: white; padding: 2px 6px; font-weight: bold;"> O </span>
                        <span style="background: #4caf50; color: white; padding: 2px 6px; font-weight: bold;"> N </span>
                        <br>
                        Bravo !
                    </div>
                </div>

                <div class="exercise-card">
                    <div class="exercise-difficulty">Moyen</div>
                    <div class="exercise-title">Vérifier si le mot est trouvé</div>
                    <div class="exercise-desc">
                        Ajoute une vérification pour détecter si l'utilisateur a trouvé le mot secret.
                    </div>

                    <div class="exercise-steps">
                        <strong>Ce qu'il faut faire :</strong>
                        <ol>
                            <li>Vérifier si <code>tentative == mot_secret</code></li>
                            <li>Si oui, afficher un message de félicitations</li>
                            <li>Sinon, afficher le résultat lettre par lettre</li>
                        </ol>
                    </div>

                    <div style="text-align: center; margin-top: 15px;">
                        <button class="hint-button" onclick="toggleHint('hint10_3')" style="
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
                            Indice
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
                            Solution
                        </button>
                    </div>
                    <div id="hint10_3" class="hint-content" style="
                        display: none;
                        background: rgba(255, 215, 0, 0.1);
                        border: 2px solid rgba(255, 215, 0, 0.3);
                        border-radius: 12px;
                        padding: 15px;
                        margin-top: 15px;
                        color: #ffd700;
                        font-style: italic;
                    ">
                        <strong>Indice :</strong> Ajoutez un <code>if tentative == mot_secret:</code> au début de votre fonction.
                    </div>
                    <div class="console-output" style="margin-top: 15px;">
                        <strong>$ Exemple d'exécution :</strong><br>
                        >>> verifier_tentative("PYTHON", "PYTHON")<br>
                        <span style="background: #4caf50; color: white; padding: 2px 6px; font-weight: bold;"> P </span>
                        <span style="background: #4caf50; color: white; padding: 2px 6px; font-weight: bold;"> Y </span>
                        <span style="background: #4caf50; color: white; padding: 2px 6px; font-weight: bold;"> T </span>
                        <span style="background: #4caf50; color: white; padding: 2px 6px; font-weight: bold;"> H </span>
                        <span style="background: #4caf50; color: white; padding: 2px 6px; font-weight: bold;"> O </span>
                        <span style="background: #4caf50; color: white; padding: 2px 6px; font-weight: bold;"> N </span>
                        <br>
                        Bravo ! Vous avez trouvé le mot !
                    </div>
                </div>

                <div class="exercise-card">
                    <div class="exercise-difficulty">Avancé</div>
                    <div class="exercise-title">Wordle complet avec boucle</div>
                    <div class="exercise-desc">
                        Crée un jeu Wordle complet où l'utilisateur a 6 tentatives pour deviner le mot.
                    </div>

                    <div class="exercise-steps">
                        <strong>Ce qu'il faut faire :</strong>
                        <ol>
                            <li>Définir un mot secret</li>
                            <li>Créer une boucle qui permet 6 tentatives maximum</li>
                            <li>Demander une tentative à l'utilisateur avec <code>input()</code></li>
                            <li>Vérifier la tentative et afficher le résultat</li>
                            <li>Si le mot est trouvé, arrêter la boucle avec <code>break</code></li>
                            <li>Si les 6 tentatives sont épuisées, afficher le mot secret</li>
                        </ol>
                    </div>

                    <div style="text-align: center; margin-top: 15px;">
                        <button class="hint-button" onclick="toggleHint('hint10_4')" style="
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
                            Indice
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
                            Solution
                        </button>
                    </div>
                    <div id="hint10_4" class="hint-content" style="
                        display: none;
                        background: rgba(255, 215, 0, 0.1);
                        border: 2px solid rgba(255, 215, 0, 0.3);
                        border-radius: 12px;
                        padding: 15px;
                        margin-top: 15px;
                        color: #ffd700;
                        font-style: italic;
                    ">
                        <strong>Indice :</strong> Utilisez <code>for tentative_num in range(1, 7):</code> pour créer une boucle de 6 tentatives. N'oubliez pas de convertir l'entrée en majuscules avec <code>.upper()</code>.
                    </div>
                    <div class="console-output" style="margin-top: 15px;">
                        <strong>$ Exemple de partie :</strong><br>
                        Tentative 1/6 : PROJET<br>
                        <span style="background: #4caf50; color: white; padding: 2px 6px; font-weight: bold;"> P </span>
                        <span style="background: #666; color: white; padding: 2px 6px; font-weight: bold;"> R </span>
                        <span style="background: #ffd700; color: white; padding: 2px 6px; font-weight: bold;"> O </span>
                        <span style="background: #666; color: white; padding: 2px 6px; font-weight: bold;"> J </span>
                        <span style="background: #666; color: white; padding: 2px 6px; font-weight: bold;"> E </span>
                        <span style="background: #ffd700; color: white; padding: 2px 6px; font-weight: bold;"> T </span>
                        <br>
                        <br>
                        Tentative 2/6 : PYTHON<br>
                        <span style="background: #4caf50; color: white; padding: 2px 6px; font-weight: bold;"> P </span>
                        <span style="background: #4caf50; color: white; padding: 2px 6px; font-weight: bold;"> Y </span>
                        <span style="background: #4caf50; color: white; padding: 2px 6px; font-weight: bold;"> T </span>
                        <span style="background: #4caf50; color: white; padding: 2px 6px; font-weight: bold;"> H </span>
                        <span style="background: #4caf50; color: white; padding: 2px 6px; font-weight: bold;"> O </span>
                        <span style="background: #4caf50; color: white; padding: 2px 6px; font-weight: bold;"> N </span>
                        <br>
                        Bravo ! Vous avez trouvé le mot en 2 tentatives !
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
                <h3 style="color: #ff6b6b; margin-bottom: 20px;">Défis Bonus</h3>
                <div style="color: #fff; line-height: 1.8;">
                    <strong>Améliorations possibles :</strong>
                    <br><br>• Vérifier que la tentative a exactement 6 lettres
                    <br>• Vérifier que la tentative ne contient que des lettres
                    <br>• Afficher un résumé visuel avec des carrés colorés (🟩 🟨 ⬜)
                    <br>• Garder l'historique de toutes les tentatives
                    <br>• Choisir un mot aléatoire dans une liste de mots
                    <br>• Ajouter un chronomètre pour mesurer le temps
                </div>
            </div>

            <!-- Tips -->
            <div style="
                background: rgba(255, 215, 0, 0.1);
                border-left: 4px solid #ffd700;
                padding: 20px;
                margin: 25px 0;
                border-radius: 8px;
            ">
                <div style="color: #ffd700; font-weight: bold; margin-bottom: 10px;">Conseils</div>
                <div style="color: #fff; line-height: 1.8; font-size: 0.95em;">
                    • Testez votre code progressivement, exercice par exercice
                    <br>• Utilisez <code>.upper()</code> pour convertir les entrées en majuscules
                    <br>• N'oubliez pas que <code>range(len(mot))</code> génère les indices 0, 1, 2...
                    <br>• Pour arrêter une boucle, utilisez <code>break</code>
                    <br>• Affichez des messages clairs pour guider le joueur
                </div>
            </div>
        `
    }
};
