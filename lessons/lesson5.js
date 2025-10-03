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
                    <li>On commence avec un tas de <strong style="color: #ffeb3b;">20 allumettes</strong></li>
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
                <h3 style="color: #ffd700; margin-bottom: 20px;">🎥 Vidéo explicative</h3>
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
        title: 'Démo Interactive',
        subtitle: 'Essayez le jeu !',
        content: `
            <div class="section-text">
                Essayez le jeu de Nim pour bien comprendre les règles avant de le programmer !
            </div>

            <div id="nim-game" style="
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

            <div class="exercise-list" style="margin-top: 30px;">
                <div class="exercise-item" style="
                    background: linear-gradient(135deg, rgba(76, 175, 80, 0.1), rgba(139, 195, 74, 0.1));
                    border-left: 4px solid #4caf50;
                    padding: 25px;
                    margin: 20px 0;
                    border-radius: 12px;
                ">
                    <h3 style="color: #4caf50; margin-bottom: 15px;">
                        <span style="background: #4caf50; color: #000; padding: 5px 12px; border-radius: 8px; font-weight: bold; margin-right: 10px;">EXO 1</span>
                        Jeu de Nim - Ordinateur vs Joueur (mode dummy)
                    </h3>
                    <p style="color: #fff; line-height: 1.8; margin: 15px 0;">
                        <strong>Objectif :</strong> Créez un jeu de Nim complet où le joueur affronte l'ordinateur qui joue aléatoirement.
                    </p>
                    <div style="background: rgba(0, 0, 0, 0.2); padding: 15px; border-radius: 8px; margin: 15px 0;">
                        <p style="color: #ffd700; font-weight: bold; margin-bottom: 10px;">💡 Conseils :</p>
                        <ul style="color: #fff; margin-left: 20px; line-height: 1.8;">
                            <li>Utilisez <code style="background: rgba(0,0,0,0.3); padding: 2px 6px; border-radius: 4px; color: #ffeb3b;">random.randint(1, 3)</code> pour le choix de l'ordinateur</li>
                            <li>Utilisez <code style="background: rgba(0,0,0,0.3); padding: 2px 6px; border-radius: 4px; color: #ffeb3b;">min()</code> pour limiter le choix aux allumettes restantes</li>
                            <li>Pensez à valider les entrées du joueur</li>
                            <li>Gérez les erreurs si l'utilisateur entre autre chose qu'un nombre</li>
                        </ul>
                    </div>
                    <a href="lesson6/exo1.py" download style="
                        display: inline-block;
                        margin-top: 15px;
                        padding: 12px 25px;
                        background: linear-gradient(135deg, #4caf50, #66bb6a);
                        color: white;
                        text-decoration: none;
                        border-radius: 25px;
                        font-weight: 600;
                        transition: transform 0.3s ease;
                    ">📥 Télécharger exo1.py</a>
                </div>

                <div class="learning-objectives" style="
                    background: rgba(255, 215, 0, 0.1);
                    border: 2px solid rgba(255, 215, 0, 0.3);
                    border-radius: 12px;
                    padding: 25px;
                    margin: 25px 0;
                ">
                    <h3 style="color: #ffd700; margin-bottom: 20px;">🎯 Ce que vous allez pratiquer</h3>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 15px;">
                        <div style="background: rgba(0, 0, 0, 0.2); padding: 15px; border-radius: 8px;">
                            <div style="color: #4caf50; font-size: 1.5em; margin-bottom: 8px;">✅</div>
                            <div style="color: #fff; font-weight: bold; margin-bottom: 5px;">Les boucles while</div>
                            <div style="color: rgba(255,255,255,0.7); font-size: 0.9em;">Pour le déroulement de la partie</div>
                        </div>
                        <div style="background: rgba(0, 0, 0, 0.2); padding: 15px; border-radius: 8px;">
                            <div style="color: #4caf50; font-size: 1.5em; margin-bottom: 8px;">✅</div>
                            <div style="color: #fff; font-weight: bold; margin-bottom: 5px;">Les conditions</div>
                            <div style="color: rgba(255,255,255,0.7); font-size: 0.9em;">Pour valider les choix</div>
                        </div>
                        <div style="background: rgba(0, 0, 0, 0.2); padding: 15px; border-radius: 8px;">
                            <div style="color: #4caf50; font-size: 1.5em; margin-bottom: 8px;">✅</div>
                            <div style="color: #fff; font-weight: bold; margin-bottom: 5px;">Les fonctions</div>
                            <div style="color: rgba(255,255,255,0.7); font-size: 0.9em;">Pour organiser votre code</div>
                        </div>
                        <div style="background: rgba(0, 0, 0, 0.2); padding: 15px; border-radius: 8px;">
                            <div style="color: #4caf50; font-size: 1.5em; margin-bottom: 8px;">✅</div>
                            <div style="color: #fff; font-weight: bold; margin-bottom: 5px;">Les entrées utilisateur</div>
                            <div style="color: rgba(255,255,255,0.7); font-size: 0.9em;">Avec input() et validation</div>
                        </div>
                        <div style="background: rgba(0, 0, 0, 0.2); padding: 15px; border-radius: 8px;">
                            <div style="color: #4caf50; font-size: 1.5em; margin-bottom: 8px;">✅</div>
                            <div style="color: #fff; font-weight: bold; margin-bottom: 5px;">Le module random</div>
                            <div style="color: rgba(255,255,255,0.7); font-size: 0.9em;">Pour le jeu de l'ordinateur</div>
                        </div>
                        <div style="background: rgba(0, 0, 0, 0.2); padding: 15px; border-radius: 8px;">
                            <div style="color: #4caf50; font-size: 1.5em; margin-bottom: 8px;">✅</div>
                            <div style="color: #fff; font-weight: bold; margin-bottom: 5px;">La logique de jeu</div>
                            <div style="color: rgba(255,255,255,0.7); font-size: 0.9em;">Alternance et victoire</div>
                        </div>
                    </div>
                </div>

                <div class="next-steps" style="
                    background: linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1));
                    border: 2px solid rgba(102, 126, 234, 0.3);
                    border-radius: 12px;
                    padding: 25px;
                    margin: 25px 0;
                    text-align: center;
                ">
                    <h3 style="color: #667eea; margin-bottom: 15px;">🚀 Pour aller plus loin...</h3>
                    <p style="color: #fff; line-height: 1.8;">
                        Une fois que vous aurez réussi cette version, vous pourrez améliorer le jeu :
                    </p>
                    <ul style="color: #fff; text-align: left; margin: 15px auto; max-width: 500px; line-height: 1.8;">
                        <li>Mode Joueur vs Joueur</li>
                        <li>Ordinateur avec une vraie stratégie gagnante</li>
                        <li>Interface graphique</li>
                        <li>Sauvegarde des scores</li>
                    </ul>
                    <p style="color: rgba(255,255,255,0.7); margin-top: 15px; font-style: italic;">
                        Mais pour l'instant, concentrez-vous sur la version de base ! 🎯
                    </p>
                </div>
            </div>
        `
    }
};
