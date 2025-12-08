// Lesson 12: Introduction à Pyxel
// Troisième Période - Programmation graphique et jeux vidéo

export const lesson12Data = {
    video_tutorial: {
        icon: 'icon-video',
        emoji: '🎬',
        title: 'Vidéo Tutoriel',
        subtitle: 'Introduction visuelle à Pyxel',
        content: `
            <div class="section-text">
                Regardez cette vidéo pour découvrir Pyxel et comprendre les bases de la création de jeux rétro.
            </div>

            <div style="background: rgba(255, 107, 107, 0.1); padding: 20px; border-radius: 10px; margin: 20px 0;">
                <p style="color: #ff6b6b; font-weight: bold; text-align: center;">📹 Vidéo à venir</p>
                <p style="color: #fff; text-align: center; margin-top: 10px;">
                    Une vidéo explicative sera bientôt disponible ici.
                </p>
            </div>
        `
    },

    documentation: {
        icon: 'icon-book',
        emoji: '📚',
        title: 'Documentation et Ressources',
        subtitle: 'Tout ce dont vous avez besoin pour apprendre',
        content: `
            <div class="section-text">
                La bibliothèque Pyxel est parfaite pour créer des jeux rétro inspirés des consoles 8-bits.
                Voici les ressources essentielles pour apprendre à l'utiliser.
            </div>

            <div style="background: rgba(102, 126, 234, 0.1); padding: 20px; border-radius: 10px; margin: 20px 0;">
                <p style="color: #667eea; font-weight: bold;">📖 Ressources officielles</p>
                <ul style="color: #fff; line-height: 1.8;">
                    <li><strong>Documentation officielle :</strong>
                        <a href="https://github.com/kitao/pyxel" target="_blank" style="color: #ffd700;">
                            github.com/kitao/pyxel
                        </a>
                    </li>
                    <li><strong>Exemples et tutoriels :</strong>
                        <a href="https://github.com/kitao/pyxel/tree/main/docs" target="_blank" style="color: #ffd700;">
                            github.com/kitao/pyxel/tree/main/docs
                        </a>
                    </li>
                </ul>
            </div>

            <div style="background: rgba(255, 215, 0, 0.1); padding: 20px; border-radius: 10px; margin: 20px 0;">
                <p style="color: #ffd700; font-weight: bold;">🎮 Pourquoi Pyxel ?</p>
                <ul style="color: #fff; line-height: 1.8;">
                    <li><strong>Simple</strong> : API facile à apprendre pour débutants</li>
                    <li><strong>Complet</strong> : graphismes, sons, et contrôles intégrés</li>
                    <li><strong>Rétro</strong> : esthétique de console 8-bit nostalgique</li>
                    <li><strong>Amusant</strong> : créez des jeux rapidement</li>
                </ul>
            </div>

            <div class="code-example">
                <h3 style="color: #ffd700;">📝 Exemple de programme complet</h3>
                <div class="section-text">
                    Copiez ce code dans Thonny puis exécutez-le pour voir votre premier jeu Pyxel !
                </div>
                <pre><code class="python">import pyxel

# Initialisation de la fenêtre (largeur=160, hauteur=120)
pyxel.init(160, 120)

# Variables globales
position_x = 80
position_y = 60

def update():
    """
    Fonction appelée 60 fois par seconde
    Gère la logique du programme (déplacements, collisions, etc.)
    """
    global position_x, position_y

    # Déplace le point avec les flèches du clavier
    if pyxel.btn(pyxel.KEY_RIGHT):
        position_x = position_x + 1
    if pyxel.btn(pyxel.KEY_LEFT):
        position_x = position_x - 1
    if pyxel.btn(pyxel.KEY_DOWN):
        position_y = position_y + 1
    if pyxel.btn(pyxel.KEY_UP):
        position_y = position_y - 1

def draw():
    """
    Fonction appelée 60 fois par seconde
    Gère l'affichage graphique
    """
    # Efface l'écran avec la couleur 0 (noir)
    pyxel.cls(0)

    # Dessine un point blanc aux coordonnées variables
    pyxel.pset(position_x, position_y, 7)  # 7 est la couleur blanche

    # Dessine un rectangle rouge (x=50, y=50, largeur=30, hauteur=20)
    pyxel.rect(50, 50, 30, 20, 8)  # 8 est la couleur rouge

    # Dessine un cercle bleu (x=100, y=80, rayon=10)
    pyxel.circ(100, 80, 10, 12)  # 12 est la couleur bleue

# Définit les fonctions update et draw, puis lance le programme
pyxel.run(update, draw)</code></pre>
            </div>

            <div style="background: linear-gradient(135deg, rgba(255,215,0,0.2), rgba(255,107,107,0.2)); padding: 25px; border-radius: 15px; margin: 25px 0; border: 2px solid rgba(255,215,0,0.3);">
                <p style="color: #ffd700; font-weight: bold; font-size: 1.2em; margin-bottom: 15px;">⚠️ Important</p>
                <p style="color: #fff; line-height: 1.6;">
                    Pyxel ne fonctionne <strong>pas</strong> dans le navigateur avec Pyodide.
                    Vous devez installer Python sur votre ordinateur pour utiliser Pyxel.
                    Suivez les instructions d'installation dans la section suivante !
                </p>
            </div>
        `
    },

    architecture: {
        icon: 'icon-structure',
        emoji: '🏗️',
        title: 'Architecture d\'un Jeu Vidéo',
        subtitle: 'Comprendre la boucle de jeu',
        content: `
            <div class="section-text">
                Un jeu vidéo avec Pyxel suit une architecture précise basée sur une <strong>boucle de jeu</strong>.
                Comprendre cette structure est essentiel pour créer vos propres jeux.
            </div>

            <div style="background: rgba(102, 126, 234, 0.1); padding: 20px; border-radius: 10px; margin: 20px 0;">
                <p style="color: #667eea; font-weight: bold;">🎯 Principe fondamental</p>
                <p style="color: #fff; margin-top: 10px; line-height: 1.6;">
                    Un jeu vidéo fonctionne sur le principe d'une <strong>boucle de jeu (game loop)</strong>
                    qui exécute en continu deux phases principales :
                </p>
                <ol style="color: #fff; line-height: 1.8; margin-top: 10px;">
                    <li><strong>La mise à jour de l'état du jeu</strong> (fonction <code>update()</code>)</li>
                    <li><strong>Le rendu graphique</strong> (fonction <code>draw()</code>)</li>
                </ol>
            </div>

            <div class="code-example">
                <h3 style="color: #ffd700;">🔄 1. La boucle de jeu</h3>
                <div class="section-text">
                    Dans Pyxel, la boucle de jeu est gérée automatiquement par <code>pyxel.run(update, draw)</code>.
                    Elle s'exécute à une fréquence de <strong>60Hz</strong>, soit 60 cycles par seconde.
                    Cette fréquence assure une fluidité optimale pour l'expérience utilisateur.
                </div>
            </div>

            <div class="code-example">
                <h3 style="color: #ffd700;">⚙️ 2. La fonction update()</h3>
                <pre><code class="python">def update():
    global position_x, position_y
    if pyxel.btn(pyxel.KEY_RIGHT):
        position_x = position_x + 1</code></pre>
                <div class="section-text" style="margin-top: 15px;">
                    Cette fonction :
                </div>
                <ul style="color: #fff; line-height: 1.8;">
                    <li>Gère la <strong>logique du jeu</strong></li>
                    <li>Traite les <strong>entrées utilisateur</strong></li>
                    <li>Met à jour l'<strong>état du jeu</strong> (positions, scores, collisions...)</li>
                    <li>Est appelée <strong>60 fois par seconde</strong></li>
                </ul>
            </div>

            <div class="code-example">
                <h3 style="color: #ffd700;">🎨 3. La fonction draw()</h3>
                <pre><code class="python">def draw():
    pyxel.cls(0)
    pyxel.pset(position_x, position_y, 7)</code></pre>
                <div class="section-text" style="margin-top: 15px;">
                    Cette fonction :
                </div>
                <ul style="color: #fff; line-height: 1.8;">
                    <li>Gère le <strong>rendu graphique</strong></li>
                    <li>Efface et redessine l'écran <strong>entièrement</strong></li>
                    <li>Utilise les états mis à jour pour positionner les éléments</li>
                    <li>Est également appelée <strong>60 fois par seconde</strong></li>
                </ul>
            </div>

            <div style="background: rgba(240, 147, 251, 0.1); padding: 20px; border-radius: 10px; margin: 20px 0;">
                <p style="color: #f093fb; font-weight: bold;">💾 Gestion de l'état</p>
                <p style="color: #fff; margin-top: 10px; line-height: 1.6;">
                    Les <strong>variables globales</strong> (comme <code>position_x</code> et <code>position_y</code>
                    dans notre exemple) servent à maintenir l'état du jeu entre les appels des fonctions
                    <code>update</code> et <code>draw</code>. Elles représentent la "mémoire" du jeu et
                    permettent de conserver les informations nécessaires d'un cycle à l'autre.
                </p>
            </div>

            <div style="background: rgba(255, 215, 0, 0.1); padding: 20px; border-radius: 10px; margin: 20px 0;">
                <p style="color: #ffd700; font-weight: bold;">🔄 Flux d'exécution</p>
                <ol style="color: #fff; line-height: 1.8; margin-top: 10px;">
                    <li><code>pyxel.init()</code> initialise le système avec la taille de la fenêtre et le titre</li>
                    <li>La boucle de jeu démarre avec <code>pyxel.run()</code></li>
                    <li>À chaque cycle (1/60 seconde) :
                        <ul style="margin-left: 20px; margin-top: 5px;">
                            <li><code>update()</code> met à jour l'état du jeu</li>
                            <li><code>draw()</code> effectue le rendu graphique</li>
                        </ul>
                    </li>
                    <li>Le cycle se répète jusqu'à la fermeture du programme</li>
                </ol>
            </div>

            <div style="background: linear-gradient(135deg, rgba(102,126,234,0.2), rgba(240,147,251,0.2)); padding: 25px; border-radius: 15px; margin: 25px 0; border: 2px solid rgba(102,126,234,0.3);">
                <p style="color: #667eea; font-weight: bold; font-size: 1.1em; margin-bottom: 15px;">💡 Pourquoi cette architecture ?</p>
                <p style="color: #fff; line-height: 1.6;">
                    Cette architecture permet une <strong>séparation claire</strong> entre la logique du jeu
                    et son rendu, facilitant ainsi la maintenance et l'évolution du code. C'est un pattern
                    utilisé dans tous les moteurs de jeu modernes !
                </p>
            </div>
        `
    },

    installation: {
        icon: 'icon-download',
        emoji: '💾',
        title: 'Installation de Pyxel',
        subtitle: 'Préparer votre environnement',
        content: `
            <div class="section-text">
                Pour utiliser Pyxel, vous devez d'abord installer Python sur votre ordinateur,
                puis installer la bibliothèque Pyxel avec pip.
            </div>

            <div style="background: rgba(102, 126, 234, 0.1); padding: 20px; border-radius: 10px; margin: 20px 0;">
                <p style="color: #667eea; font-weight: bold;">📋 Étape 1 : Vérifier Python</p>
                <p style="color: #fff; margin: 10px 0;">
                    Ouvrez un terminal (ou l'invite de commandes sous Windows) et tapez :
                </p>
                <pre style="background: rgba(0,0,0,0.3); padding: 15px; border-radius: 8px; margin: 10px 0;"><code>python --version</code></pre>
                <p style="color: #fff; margin: 10px 0;">
                    ou (sur Mac/Linux) :
                </p>
                <pre style="background: rgba(0,0,0,0.3); padding: 15px; border-radius: 8px; margin: 10px 0;"><code>python3 --version</code></pre>
                <p style="color: #fff; margin: 10px 0;">
                    Si Python n'est pas installé, téléchargez-le depuis
                    <a href="https://www.python.org/downloads/" target="_blank" style="color: #ffd700;">python.org</a>
                </p>
            </div>

            <div style="background: rgba(240, 147, 251, 0.1); padding: 20px; border-radius: 10px; margin: 20px 0;">
                <p style="color: #f093fb; font-weight: bold;">📦 Étape 2 : Installer Pyxel</p>
                <p style="color: #fff; margin: 10px 0;">
                    Dans votre terminal, tapez la commande suivante :
                </p>
                <pre style="background: rgba(0,0,0,0.3); padding: 15px; border-radius: 8px; margin: 10px 0;"><code>pip install pyxel</code></pre>
                <p style="color: #fff; margin: 10px 0;">
                    ou (sur Mac/Linux) :
                </p>
                <pre style="background: rgba(0,0,0,0.3); padding: 15px; border-radius: 8px; margin: 10px 0;"><code>pip3 install pyxel</code></pre>
                <p style="color: #fff; margin: 10px 0;">
                    L'installation peut prendre quelques minutes. Une fois terminée, Pyxel est prêt !
                </p>
            </div>

            <div style="background: rgba(255, 215, 0, 0.1); padding: 20px; border-radius: 10px; margin: 20px 0;">
                <p style="color: #ffd700; font-weight: bold;">✅ Étape 3 : Vérifier l'installation</p>
                <p style="color: #fff; margin: 10px 0;">
                    Pour vérifier que Pyxel est bien installé, tapez :
                </p>
                <pre style="background: rgba(0,0,0,0.3); padding: 15px; border-radius: 8px; margin: 10px 0;"><code>pyxel --version</code></pre>
                <p style="color: #fff; margin: 10px 0;">
                    Si vous voyez un numéro de version, l'installation a réussi ! 🎉
                </p>
            </div>

            <div style="background: rgba(255, 107, 107, 0.1); padding: 20px; border-radius: 10px; margin: 20px 0;">
                <p style="color: #ff6b6b; font-weight: bold;">🔧 En cas de problème</p>
                <ul style="color: #fff; line-height: 1.8;">
                    <li>Assurez-vous que Python est bien dans votre PATH</li>
                    <li>Essayez <code>python -m pip install pyxel</code> à la place</li>
                    <li>Sur Mac/Linux, vous devrez peut-être utiliser <code>sudo</code></li>
                    <li>Consultez la documentation officielle :
                        <a href="https://github.com/kitao/pyxel" target="_blank" style="color: #ffd700;">github.com/kitao/pyxel</a>
                    </li>
                </ul>
            </div>
        `
    },

    dessiner: {
        icon: 'icon-paint',
        emoji: '🎨',
        title: 'Dessiner des Formes',
        subtitle: 'Rectangles, cercles et lignes',
        content: `
            <div class="section-text">
                Pyxel offre plusieurs fonctions pour dessiner des formes géométriques.
                Toutes ces fonctions s'utilisent dans la fonction <code>draw()</code>.
            </div>

            <div class="code-example">
                <h3 style="color: #ffd700;">📌 Les fonctions de dessin</h3>
                <pre><code class="python">import pyxel

def update():
    pass

def draw():
    # Fond bleu foncé
    pyxel.cls(1)

    # Rectangle plein : x, y, largeur, hauteur, couleur
    pyxel.rect(10, 10, 40, 30, 8)

    # Rectangle vide (contour)
    pyxel.rectb(60, 10, 40, 30, 11)

    # Cercle plein : x_centre, y_centre, rayon, couleur
    pyxel.circ(30, 70, 15, 10)

    # Cercle vide (contour)
    pyxel.circb(80, 70, 15, 12)

    # Ligne : x1, y1, x2, y2, couleur
    pyxel.line(110, 10, 150, 40, 14)

    # Pixel unique : x, y, couleur
    pyxel.pset(130, 70, 7)

    # Texte
    pyxel.text(110, 100, "Formes!", 7)

pyxel.init(160, 120, title="Dessiner des formes")
pyxel.run(update, draw)</code></pre>
            </div>

            <div style="background: rgba(102, 126, 234, 0.1); padding: 20px; border-radius: 10px; margin: 20px 0;">
                <p style="color: #667eea; font-weight: bold;">📚 Référence des fonctions</p>
                <table style="width: 100%; color: #fff; border-collapse: collapse;">
                    <tr style="border-bottom: 2px solid rgba(255,255,255,0.1);">
                        <td style="padding: 10px;"><strong>Fonction</strong></td>
                        <td style="padding: 10px;"><strong>Description</strong></td>
                    </tr>
                    <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);">
                        <td style="padding: 10px;"><code>pyxel.cls(col)</code></td>
                        <td style="padding: 10px;">Efface l'écran avec la couleur col</td>
                    </tr>
                    <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);">
                        <td style="padding: 10px;"><code>pyxel.pset(x, y, col)</code></td>
                        <td style="padding: 10px;">Dessine un pixel</td>
                    </tr>
                    <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);">
                        <td style="padding: 10px;"><code>pyxel.line(x1, y1, x2, y2, col)</code></td>
                        <td style="padding: 10px;">Dessine une ligne</td>
                    </tr>
                    <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);">
                        <td style="padding: 10px;"><code>pyxel.rect(x, y, w, h, col)</code></td>
                        <td style="padding: 10px;">Rectangle plein</td>
                    </tr>
                    <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);">
                        <td style="padding: 10px;"><code>pyxel.rectb(x, y, w, h, col)</code></td>
                        <td style="padding: 10px;">Rectangle vide (contour)</td>
                    </tr>
                    <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);">
                        <td style="padding: 10px;"><code>pyxel.circ(x, y, r, col)</code></td>
                        <td style="padding: 10px;">Cercle plein</td>
                    </tr>
                    <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);">
                        <td style="padding: 10px;"><code>pyxel.circb(x, y, r, col)</code></td>
                        <td style="padding: 10px;">Cercle vide (contour)</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px;"><code>pyxel.text(x, y, s, col)</code></td>
                        <td style="padding: 10px;">Affiche du texte</td>
                    </tr>
                </table>
            </div>

            <div style="background: rgba(255, 215, 0, 0.1); padding: 20px; border-radius: 10px; margin: 20px 0;">
                <p style="color: #ffd700; font-weight: bold;">🎨 Les couleurs dans Pyxel</p>
                <p style="color: #fff; margin: 10px 0;">
                    Pyxel utilise une palette de 16 couleurs (0-15) :
                </p>
                <div style="display: grid; grid-template-columns: repeat(8, 1fr); gap: 5px; margin: 15px 0;">
                    <div style="background: #000000; padding: 10px; text-align: center; border-radius: 4px;">0</div>
                    <div style="background: #1D2B53; padding: 10px; text-align: center; border-radius: 4px;">1</div>
                    <div style="background: #7E2553; padding: 10px; text-align: center; border-radius: 4px;">2</div>
                    <div style="background: #008751; padding: 10px; text-align: center; border-radius: 4px;">3</div>
                    <div style="background: #AB5236; padding: 10px; text-align: center; border-radius: 4px;">4</div>
                    <div style="background: #5F574F; padding: 10px; text-align: center; border-radius: 4px;">5</div>
                    <div style="background: #C2C3C7; padding: 10px; text-align: center; border-radius: 4px; color: #000;">6</div>
                    <div style="background: #FFF1E8; padding: 10px; text-align: center; border-radius: 4px; color: #000;">7</div>
                    <div style="background: #FF004D; padding: 10px; text-align: center; border-radius: 4px;">8</div>
                    <div style="background: #FFA300; padding: 10px; text-align: center; border-radius: 4px;">9</div>
                    <div style="background: #FFEC27; padding: 10px; text-align: center; border-radius: 4px; color: #000;">10</div>
                    <div style="background: #00E436; padding: 10px; text-align: center; border-radius: 4px;">11</div>
                    <div style="background: #29ADFF; padding: 10px; text-align: center; border-radius: 4px;">12</div>
                    <div style="background: #83769C; padding: 10px; text-align: center; border-radius: 4px;">13</div>
                    <div style="background: #FF77A8; padding: 10px; text-align: center; border-radius: 4px;">14</div>
                    <div style="background: #FFCCAA; padding: 10px; text-align: center; border-radius: 4px; color: #000;">15</div>
                </div>
            </div>

            <div class="code-example">
                <h3 style="color: #ffd700;">🎨 Exemple : Dessiner un visage</h3>
                <pre><code class="python">import pyxel

def update():
    pass

def draw():
    # Fond ciel
    pyxel.cls(12)

    # Visage (cercle jaune)
    pyxel.circ(80, 60, 30, 10)

    # Yeux (cercles noirs)
    pyxel.circ(70, 50, 4, 0)
    pyxel.circ(90, 50, 4, 0)

    # Sourire (arc avec plusieurs lignes)
    pyxel.line(65, 70, 70, 75, 0)
    pyxel.line(70, 75, 80, 77, 0)
    pyxel.line(80, 77, 90, 75, 0)
    pyxel.line(90, 75, 95, 70, 0)

    # Texte
    pyxel.text(58, 100, "Bonjour!", 7)

pyxel.init(160, 120, title="Visage Souriant")
pyxel.run(update, draw)</code></pre>
            </div>
        `
    },

    interactivite: {
        icon: 'icon-cursor',
        emoji: '🖱️',
        title: 'Ajouter de l\'Interactivité',
        subtitle: 'Clavier et souris',
        content: `
            <div class="section-text">
                Un programme devient vraiment amusant quand on peut interagir avec lui !
                Pyxel permet de détecter les touches du clavier et les clics de souris.
            </div>

            <div class="code-example">
                <h3 style="color: #ffd700;">⌨️ Détecter les touches du clavier</h3>
                <pre><code class="python">import pyxel

# Variables globales pour la position du carré
x = 70
y = 50

def update():
    global x, y

    # Déplacer avec les flèches
    if pyxel.btn(pyxel.KEY_LEFT):
        x -= 2
    if pyxel.btn(pyxel.KEY_RIGHT):
        x += 2
    if pyxel.btn(pyxel.KEY_UP):
        y -= 2
    if pyxel.btn(pyxel.KEY_DOWN):
        y += 2

def draw():
    pyxel.cls(1)

    # Dessiner le carré à la position (x, y)
    pyxel.rect(x, y, 20, 20, 8)

    # Instructions
    pyxel.text(20, 5, "Fleches pour deplacer", 7)

pyxel.init(160, 120, title="Deplacer un carre")
pyxel.run(update, draw)</code></pre>
            </div>

            <div style="background: rgba(102, 126, 234, 0.1); padding: 20px; border-radius: 10px; margin: 20px 0;">
                <p style="color: #667eea; font-weight: bold;">🎮 Fonctions d'entrée</p>
                <ul style="color: #fff; line-height: 1.8;">
                    <li><strong>pyxel.btn(key)</strong> : retourne True si la touche est maintenue</li>
                    <li><strong>pyxel.btnp(key)</strong> : retourne True si la touche vient d'être pressée</li>
                    <li><strong>pyxel.btnr(key)</strong> : retourne True si la touche vient d'être relâchée</li>
                </ul>
                <p style="color: #fff; margin-top: 15px;"><strong>Touches courantes :</strong></p>
                <ul style="color: #fff; line-height: 1.8;">
                    <li><code>pyxel.KEY_LEFT, KEY_RIGHT, KEY_UP, KEY_DOWN</code> : flèches</li>
                    <li><code>pyxel.KEY_SPACE</code> : barre d'espace</li>
                    <li><code>pyxel.KEY_A, KEY_B, KEY_C...</code> : lettres</li>
                    <li><code>pyxel.KEY_RETURN</code> : entrée</li>
                    <li><code>pyxel.KEY_ESCAPE</code> : échap (ferme automatiquement)</li>
                </ul>
            </div>

            <div style="background: rgba(255, 215, 0, 0.1); padding: 20px; border-radius: 10px; margin: 20px 0;">
                <p style="color: #ffd700; font-weight: bold;">💡 Le mot-clé <code>global</code></p>
                <p style="color: #fff; margin-top: 10px; line-height: 1.6;">
                    Quand on veut <strong>modifier</strong> une variable définie en dehors d'une fonction,
                    il faut utiliser le mot-clé <code>global</code> dans la fonction. Sinon Python pense
                    que vous créez une nouvelle variable locale.
                </p>
                <pre style="background: rgba(0,0,0,0.3); padding: 15px; border-radius: 8px; margin: 10px 0;"><code class="python"># Variable globale
compteur = 0

def augmenter():
    global compteur  # Important !
    compteur += 1

print(compteur)  # 0
augmenter()
print(compteur)  # 1</code></pre>
            </div>

            <div class="code-example">
                <h3 style="color: #ffd700;">🖱️ Utiliser la souris</h3>
                <pre><code class="python">import pyxel

def update():
    pass

def draw():
    # Ne pas effacer pour garder les traits

    # Si bouton gauche pressé, dessiner
    if pyxel.btn(pyxel.MOUSE_BUTTON_LEFT):
        # Position de la souris
        x = pyxel.mouse_x
        y = pyxel.mouse_y

        # Dessiner un cercle à cette position
        pyxel.circ(x, y, 2, 8)

    # Clic droit pour effacer
    if pyxel.btnp(pyxel.MOUSE_BUTTON_RIGHT):
        pyxel.cls(0)

    # Instructions
    pyxel.text(5, 5, "Clic gauche: dessiner", 7)
    pyxel.text(5, 12, "Clic droit: effacer", 7)

pyxel.init(160, 120, title="Dessiner avec la souris")
pyxel.run(update, draw)</code></pre>
            </div>

            <div style="background: rgba(240, 147, 251, 0.1); padding: 20px; border-radius: 10px; margin: 20px 0;">
                <p style="color: #f093fb; font-weight: bold;">🖱️ Fonctions souris</p>
                <ul style="color: #fff; line-height: 1.8;">
                    <li><strong>pyxel.mouse_x</strong> : position X de la souris</li>
                    <li><strong>pyxel.mouse_y</strong> : position Y de la souris</li>
                    <li><strong>pyxel.btn(pyxel.MOUSE_BUTTON_LEFT)</strong> : bouton gauche</li>
                    <li><strong>pyxel.btn(pyxel.MOUSE_BUTTON_RIGHT)</strong> : bouton droit</li>
                </ul>
            </div>

            <div class="code-example">
                <h3 style="color: #ffd700;">🎯 Exemple complet : Attraper des cercles</h3>
                <pre><code class="python">import pyxel
import random

# Variables globales
target_x = 80
target_y = 60
score = 0

def update():
    global target_x, target_y, score

    # Si clic sur la cible
    if pyxel.btnp(pyxel.MOUSE_BUTTON_LEFT):
        # Distance entre souris et cible
        dx = pyxel.mouse_x - target_x
        dy = pyxel.mouse_y - target_y
        distance = (dx**2 + dy**2)**0.5

        # Si assez proche (rayon = 10)
        if distance < 10:
            score += 1
            # Nouvelle position aléatoire
            target_x = random.randint(10, 150)
            target_y = random.randint(10, 110)

def draw():
    pyxel.cls(1)

    # Dessiner la cible
    pyxel.circ(target_x, target_y, 10, 8)
    pyxel.circ(target_x, target_y, 5, 7)

    # Afficher le score
    pyxel.text(5, 5, f"Score: {score}", 7)
    pyxel.text(5, 12, "Cliquez sur la cible!", 7)

pyxel.init(160, 120, title="Attrape les cercles!")
pyxel.run(update, draw)</code></pre>
            </div>
        `
    },

    bouncing_point: {
        icon: 'icon-bounce',
        emoji: '🎾',
        title: 'Point Rebondissant',
        subtitle: 'Détection de collisions',
        content: `
            <div class="section-text">
                Maintenant que vous connaissez les bases, créons ensemble un point qui rebondit
                automatiquement sur les bords de l'écran. Ce tutoriel vous apprendra à gérer
                le mouvement et les collisions.
            </div>

            <div class="code-example">
                <h3 style="color: #ffd700;">🎾 Code complet du point rebondissant</h3>
                <pre><code class="python">import pyxel

pyxel.init(160, 120, title="Point rebondissant")

x = 80  # position initiale x
y = 60  # position initiale y
vitesse_x = 2  # vitesse horizontale
vitesse_y = 2  # vitesse verticale

def update():
    global x, y, vitesse_x, vitesse_y

    # Mise à jour de la position
    x = x + vitesse_x
    y = y + vitesse_y

    # Gestion des rebonds sur les bords
    if x >= 160 or x <= 0:
        vitesse_x = -vitesse_x

    if y >= 120 or y <= 0:
        vitesse_y = -vitesse_y

def draw():
    pyxel.cls(0)
    pyxel.pset(x, y, 7)

pyxel.run(update, draw)</code></pre>
            </div>

            <div style="background: rgba(102, 126, 234, 0.1); padding: 20px; border-radius: 10px; margin: 20px 0;">
                <p style="color: #667eea; font-weight: bold;">⚙️ Configuration initiale</p>
                <p style="color: #fff; margin-top: 10px; line-height: 1.6;">
                    Le programme commence par définir les variables essentielles :
                </p>
                <ul style="color: #fff; line-height: 1.8; margin-top: 10px;">
                    <li><code>pyxel.init(160, 120)</code> : crée une fenêtre de 160×120 pixels</li>
                    <li><code>x = 80, y = 60</code> : position initiale au centre de l'écran</li>
                    <li><code>vitesse_x = 2, vitesse_y = 2</code> : vitesse de déplacement en pixels par frame</li>
                </ul>
                <p style="color: #fff; margin-top: 10px; line-height: 1.6;">
                    Ces variables sont <strong>globales</strong> car elles doivent être accessibles
                    et modifiables par les fonctions <code>update()</code> et <code>draw()</code>.
                </p>
            </div>

            <div style="background: rgba(240, 147, 251, 0.1); padding: 20px; border-radius: 10px; margin: 20px 0;">
                <p style="color: #f093fb; font-weight: bold;">🎯 Gestion du mouvement</p>
                <p style="color: #fff; margin-top: 10px; line-height: 1.6;">
                    Dans la fonction <code>update()</code>, le mouvement est géré très simplement :
                </p>
                <pre style="background: rgba(0,0,0,0.3); padding: 15px; border-radius: 8px; margin: 10px 0;"><code class="python">x = x + vitesse_x
y = y + vitesse_y</code></pre>
                <p style="color: #fff; margin-top: 10px; line-height: 1.6;">
                    À chaque frame (60 fois par seconde), la position du point est mise à jour
                    en ajoutant la vitesse. Si <code>vitesse_x = 2</code>, le point se déplace
                    de 2 pixels vers la droite à chaque frame.
                </p>
            </div>

            <div style="background: rgba(255, 215, 0, 0.1); padding: 20px; border-radius: 10px; margin: 20px 0;">
                <p style="color: #ffd700; font-weight: bold;">💥 Gestion des rebonds</p>
                <p style="color: #fff; margin-top: 10px; line-height: 1.6;">
                    La détection des collisions avec les bords utilise des conditions simples :
                </p>
                <pre style="background: rgba(0,0,0,0.3); padding: 15px; border-radius: 8px; margin: 10px 0;"><code class="python">if x >= 160 or x <= 0:
    vitesse_x = -vitesse_x

if y >= 120 or y <= 0:
    vitesse_y = -vitesse_y</code></pre>
                <ul style="color: #fff; line-height: 1.8; margin-top: 10px;">
                    <li><strong>Bords horizontaux</strong> : si x atteint 0 (bord gauche) ou 160 (bord droit),
                        on inverse <code>vitesse_x</code> pour faire rebondir le point</li>
                    <li><strong>Bords verticaux</strong> : si y atteint 0 (haut) ou 120 (bas),
                        on inverse <code>vitesse_y</code></li>
                    <li>L'<strong>inversion de vitesse</strong> (<code>-vitesse_x</code>) change la direction
                        du mouvement, créant l'effet de rebond</li>
                </ul>
            </div>

            <div style="background: rgba(255, 107, 107, 0.1); padding: 20px; border-radius: 10px; margin: 20px 0;">
                <p style="color: #ff6b6b; font-weight: bold;">🎨 Affichage</p>
                <p style="color: #fff; margin-top: 10px; line-height: 1.6;">
                    La fonction <code>draw()</code> est très simple :
                </p>
                <pre style="background: rgba(0,0,0,0.3); padding: 15px; border-radius: 8px; margin: 10px 0;"><code class="python">pyxel.cls(0)      # Efface l'écran (fond noir)
pyxel.pset(x, y, 7)  # Dessine le point blanc</code></pre>
                <ul style="color: #fff; line-height: 1.8; margin-top: 10px;">
                    <li><code>pyxel.cls(0)</code> efface tout l'écran avec la couleur noire</li>
                    <li><code>pyxel.pset(x, y, 7)</code> dessine un pixel blanc à la position (x, y)</li>
                    <li>Ces deux lignes sont exécutées 60 fois par seconde, créant l'illusion du mouvement</li>
                </ul>
            </div>

            <div style="background: linear-gradient(135deg, rgba(102,126,234,0.2), rgba(240,147,251,0.2)); padding: 25px; border-radius: 15px; margin: 25px 0; border: 2px solid rgba(102,126,234,0.3);">
                <p style="color: #667eea; font-weight: bold; font-size: 1.2em; margin-bottom: 15px;">🚀 Pour aller plus loin</p>
                <p style="color: #fff; line-height: 1.6; margin-bottom: 10px;">
                    Une fois que vous avez compris ce programme de base, essayez ces améliorations :
                </p>
                <ul style="color: #fff; line-height: 1.8;">
                    <li><strong>Vitesse aléatoire</strong> : utilisez <code>import random</code> et
                        <code>random.randint(-3, 3)</code> pour des vitesses variables</li>
                    <li><strong>Changer de couleur</strong> : changez la couleur du point à chaque rebond
                        avec <code>random.randint(1, 15)</code></li>
                    <li><strong>Plusieurs points</strong> : créez plusieurs points avec des listes de positions
                        et de vitesses</li>
                    <li><strong>Contrôle au clavier</strong> : ajoutez des touches pour accélérer/ralentir
                        ou changer la direction</li>
                    <li><strong>Traînée</strong> : ne pas effacer l'écran à chaque frame pour laisser
                        une trace du mouvement</li>
                </ul>
            </div>

            <div style="background: rgba(255, 215, 0, 0.15); padding: 25px; border-radius: 15px; margin: 25px 0; text-align: center;">
                <p style="color: #ffd700; font-size: 1.3em; margin-bottom: 10px;">💡 Concept clé</p>
                <p style="color: #fff; line-height: 1.6;">
                    Ce simple exemple illustre les <strong>trois piliers</strong> de tout jeu vidéo :<br>
                    <strong>1. État</strong> (variables x, y, vitesses)<br>
                    <strong>2. Logique</strong> (mouvement et collisions)<br>
                    <strong>3. Rendu</strong> (affichage graphique)
                </p>
            </div>
        `
    },

    exercises: {
        icon: 'icon-dumbbell',
        emoji: '💪',
        title: 'Exercices Pratiques',
        subtitle: 'À vous de jouer !',
        content: `
            <div class="section-text">
                Maintenant que vous connaissez les bases de Pyxel, il est temps de créer vos propres programmes !
                Voici quelques exercices pour vous entraîner.
            </div>

            <div class="exercise-section" style="background: rgba(102, 126, 234, 0.1); padding: 25px; border-radius: 12px; margin: 20px 0;">
                <h3 style="color: #667eea; margin-bottom: 15px;">🟢 Exercice 1 : Arc-en-ciel</h3>
                <p style="color: #fff; margin-bottom: 10px;"><strong>Difficulté :</strong> Facile</p>
                <p style="color: #fff; line-height: 1.6;">
                    Créez un programme qui affiche 7 bandes horizontales de couleurs différentes
                    pour former un arc-en-ciel. Utilisez <code>pyxel.rect()</code> pour dessiner
                    les bandes, une en dessous de l'autre.
                </p>
                <details style="margin-top: 15px;">
                    <summary style="color: #ffd700; cursor: pointer; font-weight: bold;">💡 Indice</summary>
                    <p style="color: #fff; margin-top: 10px; line-height: 1.6;">
                        Créez 7 rectangles de même largeur (160) et hauteur (environ 17 pixels chacun).
                        Utilisez les couleurs 8, 9, 10, 11, 12, 13, 14 pour l'arc-en-ciel.
                        La position Y de chaque rectangle : 0, 17, 34, 51, 68, 85, 102.
                    </p>
                </details>
            </div>

            <div class="exercise-section" style="background: rgba(255, 215, 0, 0.1); padding: 25px; border-radius: 12px; margin: 20px 0;">
                <h3 style="color: #ffd700; margin-bottom: 15px;">🟡 Exercice 2 : Balle rebondissante</h3>
                <p style="color: #fff; margin-bottom: 10px;"><strong>Difficulté :</strong> Moyen</p>
                <p style="color: #fff; line-height: 1.6;">
                    Créez une balle qui se déplace automatiquement et rebondit sur les bords de l'écran.
                </p>
                <ul style="color: #fff; line-height: 1.8; margin-top: 10px;">
                    <li>La balle a une position (x, y) et une vitesse (vx, vy)</li>
                    <li>Dans <code>update()</code>, ajoutez la vitesse à la position</li>
                    <li>Si la balle touche un bord, inversez la vitesse correspondante</li>
                    <li>Dessinez la balle avec <code>pyxel.circ()</code></li>
                </ul>
                <details style="margin-top: 15px;">
                    <summary style="color: #ffd700; cursor: pointer; font-weight: bold;">💡 Indice</summary>
                    <p style="color: #fff; margin-top: 10px; line-height: 1.6;">
                        Variables globales : <code>x = 80, y = 60, vx = 2, vy = 1</code><br>
                        Dans update : <code>x += vx</code> et <code>y += vy</code><br>
                        Pour les bords : <code>if x < 0 or x > 160: vx = -vx</code><br>
                        N'oubliez pas le mot-clé <code>global</code> !
                    </p>
                </details>
            </div>

            <div class="exercise-section" style="background: rgba(255, 107, 107, 0.1); padding: 25px; border-radius: 12px; margin: 20px 0;">
                <h3 style="color: #ff6b6b; margin-bottom: 15px;">🔴 Exercice 3 : Pong simplifié</h3>
                <p style="color: #fff; margin-bottom: 10px;"><strong>Difficulté :</strong> Avancé</p>
                <p style="color: #fff; line-height: 1.6;">
                    Créez un jeu de Pong simplifié avec une raquette que vous contrôlez.
                </p>
                <ul style="color: #fff; line-height: 1.8; margin-top: 10px;">
                    <li>Une balle qui se déplace et rebondit (comme exercice 2)</li>
                    <li>Une raquette (rectangle) en bas que vous déplacez avec les flèches gauche/droite</li>
                    <li>Si la balle touche la raquette, elle rebondit</li>
                    <li>Si la balle touche le bas de l'écran, c'est perdu (affichez "Game Over")</li>
                    <li>Bonus : ajoutez un score qui augmente à chaque rebond sur la raquette</li>
                </ul>
                <details style="margin-top: 15px;">
                    <summary style="color: #ffd700; cursor: pointer; font-weight: bold;">💡 Indice</summary>
                    <p style="color: #fff; margin-top: 10px; line-height: 1.6;">
                        Variables : <code>paddle_x = 70, paddle_y = 110, game_over = False</code><br>
                        Collision raquette : vérifiez si la balle est à la même hauteur que la raquette
                        ET si sa position X est entre paddle_x et paddle_x + largeur_raquette.<br>
                        Utilisez une condition pour ne pas dessiner le jeu si <code>game_over</code> est True.
                    </p>
                </details>
            </div>

            <div class="exercise-section" style="background: rgba(240, 147, 251, 0.1); padding: 25px; border-radius: 12px; margin: 20px 0;">
                <h3 style="color: #f093fb; margin-bottom: 15px;">🟣 Exercice 4 : Dessin créatif</h3>
                <p style="color: #fff; margin-bottom: 10px;"><strong>Difficulté :</strong> Expert</p>
                <p style="color: #fff; line-height: 1.6;">
                    Créez votre propre programme créatif ! Quelques idées :
                </p>
                <ul style="color: #fff; line-height: 1.8; margin-top: 10px;">
                    <li>Un programme de dessin avec plusieurs couleurs au choix (touches 1-9 pour changer)</li>
                    <li>Un feu d'artifice avec des particules qui explosent</li>
                    <li>Une horloge digitale qui affiche l'heure</li>
                    <li>Un jeu de Snake simplifié</li>
                    <li>Une animation de pluie ou de neige</li>
                    <li>Votre propre idée originale !</li>
                </ul>
                <p style="color: #ffd700; margin-top: 15px; font-weight: bold;">
                    Laissez libre cours à votre imagination ! 🎨✨
                </p>
            </div>

            <div style="background: linear-gradient(135deg, rgba(102,126,234,0.2), rgba(240,147,251,0.2)); padding: 25px; border-radius: 15px; margin: 25px 0; border: 2px solid rgba(102,126,234,0.3);">
                <p style="color: #667eea; font-weight: bold; font-size: 1.2em; margin-bottom: 15px;">📚 Ressources supplémentaires</p>
                <ul style="color: #fff; line-height: 1.8;">
                    <li>Documentation officielle Pyxel :
                        <a href="https://github.com/kitao/pyxel" target="_blank" style="color: #ffd700;">github.com/kitao/pyxel</a>
                    </li>
                    <li>Exemples de jeux : tapez <code>pyxel run examples/01_hello_pyxel.py</code> dans votre terminal</li>
                    <li>Éditeur de ressources : tapez <code>pyxel edit mon_jeu.pyxres</code> pour créer des sprites</li>
                </ul>
            </div>

            <div style="background: rgba(255, 215, 0, 0.15); padding: 25px; border-radius: 15px; margin: 25px 0; text-align: center;">
                <p style="color: #ffd700; font-size: 1.3em; margin-bottom: 10px;">🎮 Félicitations !</p>
                <p style="color: #fff; line-height: 1.6;">
                    Vous avez maintenant toutes les bases pour créer vos propres jeux avec Pyxel !
                    N'hésitez pas à expérimenter et à créer quelque chose d'unique.
                    Bonne programmation ! 🚀
                </p>
            </div>
        `
    }
};
