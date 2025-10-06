// Lesson 5: Le Jeu de Nim - Projet Pratique
// Contenu éducatif pour créer un jeu de Nim

export const lesson5Data = {
    game_intro: {
        icon: 'icon-game',
        emoji: '🎮',
        title: 'Le Jeu de Nim',
        subtitle: 'Un jeu de stratégie',
        content: `
            <div class="section-text">
                Le <strong>jeu de Nim</strong> est un jeu de stratégie mathématique qui se joue à deux joueurs.
                C'est un excellent projet pour mettre en pratique tout ce que vous avez appris en Python !
            </div>

            <div class="rules-section" style="
                background: linear-gradient(135deg, rgba(255, 215, 0, 0.1), rgba(255, 165, 0, 0.1));
                border-left: 4px solid #ffd700;
                padding: 25px;
                margin: 25px 0;
                border-radius: 12px;
            ">
                <h3 style="color: #ffd700; margin-bottom: 15px;">🎯 Règles du jeu</h3>
                <ul style="color: #fff; line-height: 2; margin-left: 20px;">
                    <li>On commence avec un tas de <strong style="color: #ffeb3b;">19 allumettes</strong></li>
                    <li>Deux joueurs jouent à tour de rôle</li>
                    <li>À chaque tour, un joueur doit retirer <strong style="color: #ffeb3b;">1, 2 ou 3 allumettes</strong></li>
                    <li style="color: #ff6b6b; font-weight: bold;">⚠️ Le joueur qui prend la dernière allumette a PERDU !</li>
                </ul>
            </div>

            <div class="video-section" style="
                text-align: center;
                margin: 30px 0;
                padding: 25px;
                background: rgba(0, 0, 0, 0.2);
                border-radius: 15px;
            ">
                <h3 style="color: #ffd700; margin-bottom: 20px;">Tutoriel vidéo</h3>
                <video controls style="
                    max-width: 100%;
                    border-radius: 10px;
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
                " preload="metadata">
                    <source src="video/JeuDeNim_avec_voix.mp4" type="video/mp4">
                    Votre navigateur ne supporte pas la lecture de vidéos.
                </video>
                <p style="margin-top: 15px; font-size: 0.9em; color: rgba(255,255,255,0.7);">
                    Cette vidéo explique les règles et la stratégie du jeu de Nim
                </p>
            </div>

        `
    },

    game_demo: {
        icon: 'icon-demo',
        emoji: '🕹️',
        title: 'Démo Interactive Console',
        subtitle: 'Simulateur du jeu !',
        content: `
            <div class="section-text">
                Cette démo simule exactement ce que vous allez coder en Python. Jouez pour bien comprendre avant de programmer !
            </div>

            <div style="
                background: linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1));
                border: 2px solid rgba(102, 126, 234, 0.3);
                border-radius: 15px;
                padding: 30px;
                margin: 25px 0;
            ">
                <h3 style="color: #ffd700; margin-bottom: 20px; text-align: center;">🎮 Simulateur Console du Jeu de Nim</h3>

                <!-- Console simulator -->
                <div id="nim-console" style="
                    background: #1e1e1e;
                    color: #d4d4d4;
                    font-family: 'JetBrains Mono', monospace;
                    font-size: 0.95em;
                    padding: 20px;
                    border-radius: 10px;
                    min-height: 400px;
                    max-height: 500px;
                    overflow-y: auto;
                    margin-bottom: 20px;
                    line-height: 1.6;
                ">
                    <div id="nim-console-output"></div>
                </div>

                <!-- Input area -->
                <div id="nim-input-area" style="display: none; margin-bottom: 15px;">
                    <div style="display: flex; gap: 10px; align-items: center;">
                        <input type="number" id="nim-user-input" min="1" max="3"
                            placeholder="Entrez 1, 2 ou 3"
                            onkeypress="if(event.key==='Enter') submitNimInput()"
                            style="
                            flex: 1;
                            padding: 12px;
                            font-size: 1em;
                            border: 2px solid #667eea;
                            border-radius: 8px;
                            background: rgba(255,255,255,0.1);
                            color: white;
                            font-family: 'JetBrains Mono', monospace;
                        ">
                        <button onclick="submitNimInput()" style="
                            background: linear-gradient(135deg, #4caf50, #66bb6a);
                            color: white;
                            border: none;
                            padding: 12px 25px;
                            font-size: 1em;
                            font-weight: bold;
                            border-radius: 8px;
                            cursor: pointer;
                        ">Valider</button>
                    </div>
                </div>

                <!-- Start/Reset button -->
                <div style="text-align: center;">
                    <button onclick="startNimConsoleGame()" id="nim-start-btn" style="
                        background: linear-gradient(135deg, #667eea, #764ba2);
                        color: white;
                        border: none;
                        padding: 15px 35px;
                        font-size: 1.2em;
                        font-weight: bold;
                        border-radius: 10px;
                        cursor: pointer;
                        transition: transform 0.2s;
                    " onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
                        🐍 Lancer le jeu
                    </button>
                </div>

                <div style="margin-top: 20px; padding: 15px; background: rgba(255, 215, 0, 0.1); border-left: 4px solid #ffd700; border-radius: 8px;">
                    <p style="margin: 0; color: #ffd700; font-weight: bold;">💡 Comment jouer :</p>
                    <ul style="margin: 10px 0 0 20px; color: #fff; line-height: 1.6;">
                        <li>Entrez un nombre entre 1 et 3</li>
                        <li>Le jeu alterne entre Joueur 1 et Joueur 2</li>
                        <li>Celui qui prend la dernière allumette a PERDU !</li>
                    </ul>
                </div>
            </div>

            <div id="old-nim-game" style="display: none;

                background: linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1));
                border: 2px solid rgba(102, 126, 234, 0.3);
                border-radius: 15px;
                padding: 30px;
                margin: 25px 0;
                text-align: center;
            ">
                <div id="nim-matches" style="
                    display: flex;
                    flex-wrap: nowrap;
                    justify-content: center;
                    gap: 8px;
                    margin: 25px 0;
                    min-height: 80px;
                    overflow-x: auto;
                "></div>

                <div id="nim-status" style="
                    font-size: 1.3em;
                    font-weight: bold;
                    color: #ffd700;
                    margin: 20px 0;
                    min-height: 30px;
                "></div>

                <div id="nim-controls" style="margin: 25px 0;">
                    <div style="margin-bottom: 15px; color: #fff; font-size: 1.1em;">
                        Combien d'allumettes voulez-vous retirer ?
                    </div>
                    <div style="display: flex; gap: 15px; justify-content: center; margin-bottom: 20px;">
                        <button onclick="nimTakeMatches(1)" class="nim-button" style="
                            background: linear-gradient(135deg, #4caf50, #66bb6a);
                            color: white;
                            border: none;
                            padding: 15px 30px;
                            font-size: 1.2em;
                            font-weight: bold;
                            border-radius: 10px;
                            cursor: pointer;
                            transition: transform 0.2s, box-shadow 0.2s;
                        ">1</button>
                        <button onclick="nimTakeMatches(2)" class="nim-button" style="
                            background: linear-gradient(135deg, #2196F3, #42a5f5);
                            color: white;
                            border: none;
                            padding: 15px 30px;
                            font-size: 1.2em;
                            font-weight: bold;
                            border-radius: 10px;
                            cursor: pointer;
                            transition: transform 0.2s, box-shadow 0.2s;
                        ">2</button>
                        <button onclick="nimTakeMatches(3)" class="nim-button" style="
                            background: linear-gradient(135deg, #ff9800, #ffa726);
                            color: white;
                            border: none;
                            padding: 15px 30px;
                            font-size: 1.2em;
                            font-weight: bold;
                            border-radius: 10px;
                            cursor: pointer;
                            transition: transform 0.2s, box-shadow 0.2s;
                        ">3</button>
                    </div>
                    <button onclick="nimResetGame()" style="
                        background: linear-gradient(135deg, #667eea, #764ba2);
                        color: white;
                        border: none;
                        padding: 12px 25px;
                        font-size: 1em;
                        font-weight: 600;
                        border-radius: 25px;
                        cursor: pointer;
                        transition: transform 0.2s;
                    ">🔄 Nouvelle partie</button>
                </div>

                <div id="nim-log" style="
                    background: rgba(0, 0, 0, 0.3);
                    border-radius: 10px;
                    padding: 20px;
                    margin-top: 25px;
                    max-height: 300px;
                    overflow-y: auto;
                    font-family: 'JetBrains Mono', monospace;
                    text-align: left;
                    color: #66bb6a;
                    line-height: 1.8;
                "></div>
            </div>
        `
    },

    project_structure: {
        icon: 'icon-project',
        emoji: '💻',
        title: 'Structure du Projet',
        subtitle: 'Version Ordinateur vs Joueur',
        content: `
            <div class="section-text">
                Nous allons commencer par créer une version simple du jeu : <strong>Ordinateur vs Joueur</strong>.
                L'ordinateur jouera de manière "basique" (mode dummy) sans utiliser de stratégie particulière.
            </div>

            <div class="project-features" style="
                background: rgba(102, 126, 234, 0.1);
                border: 2px solid rgba(102, 126, 234, 0.3);
                border-radius: 12px;
                padding: 25px;
                margin: 25px 0;
            ">
                <h3 style="color: #ffd700; margin-bottom: 20px;">🔧 Fonctionnalités à implémenter</h3>

                <div style="margin: 20px 0;">
                    <h4 style="color: #81d4fa; margin-bottom: 10px;">1️⃣ Initialisation</h4>
                    <ul style="color: #fff; margin-left: 20px; line-height: 1.8;">
                        <li>Créer une variable pour stocker le nombre d'allumettes (20 au départ)</li>
                    </ul>
                </div>

                <div style="margin: 20px 0;">
                    <h4 style="color: #81d4fa; margin-bottom: 10px;">2️⃣ Affichage</h4>
                    <ul style="color: #fff; margin-left: 20px; line-height: 1.8;">
                        <li>Montrer le nombre d'allumettes restantes à chaque tour</li>
                        <li>Afficher clairement qui joue</li>
                    </ul>
                </div>

                <div style="margin: 20px 0;">
                    <h4 style="color: #81d4fa; margin-bottom: 10px;">3️⃣ Tour du joueur</h4>
                    <ul style="color: #fff; margin-left: 20px; line-height: 1.8;">
                        <li>Demander combien d'allumettes retirer (1, 2 ou 3)</li>
                        <li>Vérifier que le choix est valide (entre 1 et 3)</li>
                        <li>Vérifier que ça ne dépasse pas le nombre d'allumettes restantes</li>
                        <li>Mettre à jour le nombre d'allumettes</li>
                    </ul>
                </div>

                <div style="margin: 20px 0;">
                    <h4 style="color: #81d4fa; margin-bottom: 10px;">4️⃣ Tour de l'ordinateur</h4>
                    <ul style="color: #fff; margin-left: 20px; line-height: 1.8;">
                        <li>Choisir aléatoirement 1, 2 ou 3 allumettes</li>
                        <li>Limiter le choix au nombre d'allumettes restantes</li>
                        <li>Afficher le choix de l'ordinateur</li>
                    </ul>
                </div>

                <div style="margin: 20px 0;">
                    <h4 style="color: #81d4fa; margin-bottom: 10px;">5️⃣ Fin de partie</h4>
                    <ul style="color: #fff; margin-left: 20px; line-height: 1.8;">
                        <li>Détecter quand il ne reste plus d'allumettes</li>
                        <li>Annoncer qui a perdu (celui qui a pris la dernière)</li>
                    </ul>
                </div>
            </div>

            <div class="code-example" style="margin-top: 30px;">
                <h3 style="color: #ffd700; margin-bottom: 15px;">📝 Structure de code suggérée</h3>
                <pre style="
                    background: rgba(0, 0, 0, 0.4);
                    padding: 20px;
                    border-radius: 10px;
                    border: 2px solid rgba(255, 215, 0, 0.2);
                    overflow-x: auto;
                "><code style="font-family: 'JetBrains Mono', monospace; color: #66bb6a; font-size: 0.9em;">import random

allumettes = 20

while allumettes > 0:
    # Afficher le nombre d'allumettes

    # Tour du joueur
    # - Demander le choix
    # - Valider le choix
    # - Retirer les allumettes
    # - Vérifier si perdu

    # Tour de l'ordinateur
    # - Choisir aléatoirement
    # - Retirer les allumettes
    # - Vérifier si perdu

# Annoncer le gagnant</code></pre>
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
                Maintenant que vous connaissez les règles et la structure, c'est à vous de coder le jeu !
            </div>

            <!-- Mission briefing style -->
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
                    <br>MISSION : JEU DE NIM
                    <br>═══════════════════════════════════════
                </div>

                <div style="color: #81d4fa; margin: 20px 0;">
                    <span style="color: #ffd700;">▸</span> OBJECTIF : Créer un jeu de Nim complet (Ordinateur vs Joueur)
                </div>

                <div style="color: #ffeb3b; margin: 20px 0; font-size: 0.95em;">
                    <div style="margin-bottom: 10px;">SPÉCIFICATIONS TECHNIQUES :</div>
                    <div style="color: #fff; margin-left: 20px; line-height: 1.8;">
                        • 19 allumettes au départ<br>
                        • Retirer 1, 2 ou 3 allumettes par tour<br>
                        • IA : choix aléatoire (mode dummy)<br>
                        • Celui qui prend la dernière perd
                    </div>
                </div>

                <div style="color: #ffab91; margin: 20px 0; font-size: 0.95em;">
                    <div style="margin-bottom: 10px;">MODULES REQUIS :</div>
                    <div style="color: #fff; margin-left: 20px;">
                        <code style="color: #66bb6a;">import random</code>
                    </div>
                </div>

                <div style="color: #ff6b6b; margin: 20px 0; font-size: 0.95em;">
                    <div style="margin-bottom: 10px;">! VALIDATION REQUISE !</div>
                    <div style="color: #fff; margin-left: 20px; line-height: 1.6;">
                        • Vérifier entrée entre 1 et 3<br>
                        • Ne pas dépasser allumettes restantes<br>
                        • Gérer erreurs de saisie
                    </div>
                </div>

                <div style="text-align: center; margin-top: 30px;">
                    <a href="lesson5/exo1.py" download style="
                        display: inline-block;
                        padding: 15px 35px;
                        background: linear-gradient(135deg, #4caf50, #66bb6a);
                        color: white;
                        text-decoration: none;
                        border-radius: 8px;
                        font-weight: bold;
                        font-size: 1.1em;
                        transition: all 0.3s ease;
                        border: 2px solid #4caf50;
                    " onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
                        TÉLÉCHARGER LE FICHIER
                    </a>
                </div>
            </div>

            <!-- Quick tips -->
            <div style="
                background: rgba(255, 215, 0, 0.1);
                border-left: 4px solid #ffd700;
                padding: 20px;
                margin: 25px 0;
                border-radius: 8px;
            ">
                <div style="color: #ffd700; font-weight: bold; margin-bottom: 10px;">💡 Astuces de code :</div>
                <div style="color: #fff; line-height: 1.8; font-size: 0.95em;">
                    • <code style="background: rgba(0,0,0,0.3); padding: 2px 8px; border-radius: 4px; color: #ffeb3b;">random.randint(1, 3)</code> → choix aléatoire pour l'IA
                    <br>• <code style="background: rgba(0,0,0,0.3); padding: 2px 8px; border-radius: 4px; color: #ffeb3b;">min(3, allumettes)</code> → limiter aux allumettes restantes
                    <br>• <code style="background: rgba(0,0,0,0.3); padding: 2px 8px; border-radius: 4px; color: #ffeb3b;">while allumettes > 0:</code> → boucle de jeu
                </div>
            </div>

            <!-- What you'll practice -->
            <div style="
                background: linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1));
                border: 2px solid rgba(102, 126, 234, 0.3);
                border-radius: 12px;
                padding: 25px;
                margin: 25px 0;
            ">
                <h3 style="color: #667eea; margin-bottom: 20px; text-align: center;">🎯 Compétences pratiquées</h3>
                <div style="display: flex; flex-direction: column; gap: 10px; max-width: 400px; margin: 0 auto;">
                    <div style="background: rgba(0,0,0,0.2); padding: 15px; border-radius: 6px; display: flex; align-items: center; gap: 15px;">
                        <div style="color: #4caf50; font-size: 1.5em;">✓</div>
                        <div style="color: #fff;">Boucles while</div>
                    </div>
                    <div style="background: rgba(0,0,0,0.2); padding: 15px; border-radius: 6px; display: flex; align-items: center; gap: 15px;">
                        <div style="color: #4caf50; font-size: 1.5em;">✓</div>
                        <div style="color: #fff;">Conditions</div>
                    </div>
                    <div style="background: rgba(0,0,0,0.2); padding: 15px; border-radius: 6px; display: flex; align-items: center; gap: 15px;">
                        <div style="color: #4caf50; font-size: 1.5em;">✓</div>
                        <div style="color: #fff;">Validation</div>
                    </div>
                    <div style="background: rgba(0,0,0,0.2); padding: 15px; border-radius: 6px; display: flex; align-items: center; gap: 15px;">
                        <div style="color: #4caf50; font-size: 1.5em;">✓</div>
                        <div style="color: #fff;">Module random</div>
                    </div>
                </div>
            </div>
        `
    }
};
