// Lesson 8: Le Chiffrement de Vigenère
// Deuxième Période - Cryptographie avancée avec clé

export const lesson8Data = {
    intro: {
        icon: 'icon-key',
        emoji: '🔑',
        title: 'Le Chiffrement de Vigenère',
        subtitle: 'Le chiffre indéchiffrable',
        content: `
            <div class="section-text">
                Le <strong>chiffrement de Vigenère</strong> est une version améliorée du chiffrement de César.
                Au lieu d'utiliser un seul décalage, on utilise un <strong>mot-clé</strong> qui change le décalage à chaque lettre !
            </div>

            <div style="
                background: rgba(74, 158, 255, 0.15);
                padding: 20px;
                border-radius: 12px;
                border-left: 4px solid #4a9eff;
                margin: 25px 0;
            ">
                <div style="color: #4a9eff; font-weight: bold; margin-bottom: 15px;">📜 Histoire</div>
                <div class="section-text">
                    Inventé au 16ème siècle par Blaise de Vigenère, ce code était considéré comme
                    <strong>"le chiffre indéchiffrable"</strong> pendant plus de 300 ans !
                    <br><br>
                    Il a été utilisé pendant la Guerre de Sécession américaine et même pendant la Première Guerre mondiale.
                </div>
            </div>

            <div class="code-example">
                <h3 style="color: #ffd700;">🔑 Principe : Le mot-clé qui se répète</h3>
                <div class="section-text">
                    Chaque lettre du <strong>mot-clé</strong> indique un décalage différent à appliquer.
                </div>
                <pre style="color: #fff; font-family: monospace; background: rgba(0,0,0,0.3); padding: 15px; border-radius: 8px; margin-top: 15px;">
Exemple avec le mot-clé "CLE" :

Message :  B  O  N  J  O  U  R
Clé :      C  L  E  C  L  E  C    (la clé se répète !)
           ↓  ↓  ↓  ↓  ↓  ↓  ↓
Décalage : 3  12 5  3  12 5  3

B + 3  → E
O + 12 → A
N + 5  → S
J + 3  → M
O + 12 → A
U + 5  → Z
R + 3  → U

Résultat : EASMAZU</pre>
            </div>

            <div style="
                background: rgba(255, 107, 107, 0.1);
                border-left: 4px solid #ff6b6b;
                padding: 20px;
                margin: 25px 0;
                border-radius: 8px;
            ">
                <div style="color: #ff6b6b; font-weight: bold; margin-bottom: 10px;">🛡️ Pourquoi c'est plus sûr que César ?</div>
                <div class="section-text">
                    <strong>César</strong> : 25 décalages possibles → facile à casser par force brute
                    <br><br>
                    <strong>Vigenère</strong> : Avec une clé de 5 lettres → 26⁵ = 11 881 376 combinaisons !
                    <br>Impossible à casser sans ordinateur (au 16ème siècle).
                </div>
            </div>

            <div class="code-example">
                <h3 style="color: #ffd700;">💡 Concept clé : La répétition</h3>
                <div class="section-text">
                    Le secret de Vigenère, c'est l'<strong>opérateur modulo</strong> <code>%</code> pour répéter la clé :
                </div>
                <pre><code class="python"># Si la clé est "CLE" (longueur 3)
cle = "CLE"
texte = "BONJOUR"  # longueur 7

# Pour chaque position dans le texte :
# Position 0 → clé[0 % 3] = clé[0] = 'C'
# Position 1 → clé[1 % 3] = clé[1] = 'L'
# Position 2 → clé[2 % 3] = clé[2] = 'E'
# Position 3 → clé[3 % 3] = clé[0] = 'C'  ← Retour au début !
# Position 4 → clé[4 % 3] = clé[1] = 'L'
# Position 5 → clé[5 % 3] = clé[2] = 'E'
# Position 6 → clé[6 % 3] = clé[0] = 'C'</code></pre>
                <button class="code-load-button" onclick="loadCodeIntoConsole(\`cle = &quot;CLE&quot;
texte = &quot;BONJOUR&quot;

for i in range(len(texte)):
    lettre_cle = cle[i % len(cle)]
    print(f&quot;Position {i}: lettre='{texte[i]}' → clé='{lettre_cle}'&quot;)\`)">🐍 Charger</button>
            </div>
        `
    },

    implementation: {
        icon: 'icon-code',
        emoji: '💻',
        title: 'Réutiliser César pour Vigenère',
        subtitle: 'Du code intelligent',
        content: `
            <div class="section-text">
                Bonne nouvelle ! On peut <strong>réutiliser</strong> toutes les fonctions du chiffrement de César.
                Il suffit d'appliquer un décalage différent à chaque lettre.
            </div>

            <div class="code-example">
                <h3 style="color: #ffd700;">🔄 Rappel des fonctions de César</h3>
                <div class="section-text">
                    Ces fonctions vont nous servir pour Vigenère :
                </div>
                <pre><code class="python"># 1. Obtenir la position d'une lettre (1-26)
def get_position_dans_alphabet(c):
    return ord(c.lower()) - ord('a') + 1

# 2. Convertir une position en lettre
def ecris_lettre_du_numero(position):
    return chr(ord('a') + position - 1)

# 3. Chiffrer une lettre avec un décalage
def chiffrer_lettre(lettre, decalage):
    position = get_position_dans_alphabet(lettre)
    nouvelle_position = ((position + decalage - 1) % 26) + 1
    return ecris_lettre_du_numero(nouvelle_position)</code></pre>
            </div>

            <div class="code-example">
                <h3 style="color: #ffd700;">🎯 Stratégie pour Vigenère</h3>
                <div class="section-text">
                    Voici la logique à suivre :
                </div>
                <div style="
                    background: rgba(76, 175, 80, 0.1);
                    border-left: 4px solid #4caf50;
                    padding: 20px;
                    margin: 25px 0;
                    border-radius: 8px;
                ">
                    <div style="color: #4caf50; font-weight: bold; margin-bottom: 10px;">📋 Algorithme</div>
                    <div style="color: #fff; line-height: 1.8;">
                        1. Parcourir chaque lettre du message
                        <br>2. Trouver quelle lettre de la clé utiliser (avec <code>%</code>)
                        <br>3. Calculer le décalage correspondant à cette lettre de clé
                        <br>4. Appliquer ce décalage avec <code>chiffrer_lettre()</code>
                        <br>5. Passer à la lettre suivante (et à la lettre de clé suivante)
                    </div>
                </div>
            </div>

            <div class="code-example">
                <h3 style="color: #ffd700;">🔍 Exemple détaillé</h3>
                <pre><code class="python"># Message : "BONJOUR"
# Clé : "CLE"

# B (position 0)
lettre_cle = "CLE"[0 % 3] = 'C'  # Première lettre de la clé
decalage = get_position_dans_alphabet('C') = 3
resultat = chiffrer_lettre('B', 3) = 'E'

# O (position 1)
lettre_cle = "CLE"[1 % 3] = 'L'  # Deuxième lettre de la clé
decalage = get_position_dans_alphabet('L') = 12
resultat = chiffrer_lettre('O', 12) = 'A'

# N (position 2)
lettre_cle = "CLE"[2 % 3] = 'E'  # Troisième lettre de la clé
decalage = get_position_dans_alphabet('E') = 5
resultat = chiffrer_lettre('N', 5) = 'S'

# J (position 3) → Retour au début de la clé !
lettre_cle = "CLE"[3 % 3] = 'C'  # On recommence !
decalage = get_position_dans_alphabet('C') = 3
resultat = chiffrer_lettre('J', 3) = 'M'

# Et ainsi de suite...</code></pre>
            </div>

            <div style="
                background: rgba(255, 215, 0, 0.1);
                border-left: 4px solid #ffd700;
                padding: 20px;
                margin: 25px 0;
                border-radius: 8px;
            ">
                <div style="color: #ffd700; font-weight: bold; margin-bottom: 10px;">⚠️ Attention aux espaces !</div>
                <div class="section-text">
                    Les espaces et la ponctuation ne sont <strong>pas chiffrés</strong>.
                    <br>Mais attention : ils ne doivent <strong>pas avancer l'indice</strong> de la clé !
                    <br><br>
                    Exemple : "BON JOUR" avec clé "CLE"
                    <br>• B → C (indice 0)
                    <br>• O → L (indice 1)
                    <br>• N → E (indice 2)
                    <br>• [espace] → [espace] (l'indice reste à 2 !)
                    <br>• J → C (indice 3, qui redevient 0 avec %)
                </div>
            </div>
        `
    },

    exercises: {
        icon: 'icon-exercises',
        emoji: '✏️',
        title: 'Exercices Progressifs',
        subtitle: 'Coder Vigenère étape par étape',
        content: `
            <div class="section-text">
                À vous de coder le chiffrement de Vigenère en suivant ces exercices progressifs !
            </div>
            <div class="exercises-grid">
                <div class="exercise-card">
                    <div class="exercise-difficulty">Facile</div>
                    <div class="exercise-title">Répéter une clé</div>
                    <div class="exercise-desc">
                        Écris une fonction <code>repeter_cle(texte, cle)</code> qui affiche quelle lettre de la clé correspond à chaque lettre du texte.
                    </div>

                    <div class="exercise-steps">
                        <strong>Ce qu'il faut faire :</strong>
                        <ol>
                            <li>Créer un compteur pour suivre la position dans la clé</li>
                            <li>Parcourir chaque caractère du texte</li>
                            <li>Si c'est une lettre, afficher la lettre de clé correspondante</li>
                            <li>Incrémenter le compteur seulement pour les lettres</li>
                            <li>Utiliser <code>%</code> pour revenir au début de la clé</li>
                        </ol>
                    </div>

                    <div style="text-align: center; margin-top: 15px;">
                        <button class="hint-button" onclick="toggleHint('hint8_1')" style="
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
                    <div id="hint8_1" class="hint-content" style="
                        display: none;
                        background: rgba(255, 215, 0, 0.1);
                        border: 2px solid rgba(255, 215, 0, 0.3);
                        border-radius: 12px;
                        padding: 15px;
                        margin-top: 15px;
                        color: #ffd700;
                        font-style: italic;
                    ">
                        🔍 <strong>Indice :</strong> Étapes à suivre :
                        <br>• Crée une variable <code>indice_cle = 0</code> avant la boucle
                        <br>• Pour chaque lettre, utilise <code>cle[indice_cle % len(cle)]</code>
                        <br>• Vérifie si le caractère est une lettre avec <code>.isalpha()</code>
                        <br>• N'incrémente <code>indice_cle</code> que pour les lettres !
                    </div>
                    <div class="console-output" style="margin-top: 15px;">
                        <strong>$ Exemple d'exécution :</strong><br>
                        >>> repeter_cle("BON JOUR", "CLE")<br>
                        B → C<br>
                        O → L<br>
                        N → E<br>
                        J → C<br>
                        O → L<br>
                        U → E<br>
                        R → C
                    </div>
                </div>

                <div class="exercise-card">
                    <div class="exercise-difficulty">Moyen</div>
                    <div class="exercise-title">Chiffrer avec Vigenère</div>
                    <div class="exercise-desc">
                        <strong style="color: #ff6b6b;">EXERCICE OBLIGATOIRE</strong><br><br>
                        Écris une fonction <code>chiffrer_vigenere(texte, cle)</code> qui chiffre un texte avec le chiffrement de Vigenère.
                    </div>

                    <div class="exercise-steps">
                        <strong>Ce qu'il faut faire :</strong>
                        <ol>
                            <li>Copier les fonctions de César (helper + chiffrer_lettre)</li>
                            <li>Créer une variable pour le résultat et un indice pour la clé</li>
                            <li>Parcourir chaque caractère du texte</li>
                            <li>Si c'est une lettre :
                                <ul>
                                    <li>Trouver la lettre de clé correspondante</li>
                                    <li>Calculer le décalage avec <code>get_position_dans_alphabet()</code></li>
                                    <li>Chiffrer avec <code>chiffrer_lettre()</code></li>
                                    <li>Incrémenter l'indice de clé</li>
                                </ul>
                            </li>
                            <li>Sinon, garder le caractère tel quel</li>
                        </ol>
                    </div>

                    <div style="text-align: center; margin-top: 15px;">
                        <button class="hint-button" onclick="toggleHint('hint8_2')" style="
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
                    <div id="hint8_2" class="hint-content" style="
                        display: none;
                        background: rgba(255, 215, 0, 0.1);
                        border: 2px solid rgba(255, 215, 0, 0.3);
                        border-radius: 12px;
                        padding: 15px;
                        margin-top: 15px;
                        color: #ffd700;
                        font-style: italic;
                    ">
                        🔍 <strong>Indice :</strong> Structure générale :
                        <br>• <code>resultat = ""</code> et <code>indice_cle = 0</code>
                        <br>• Boucle <code>for caractere in texte:</code>
                        <br>• Si lettre : <code>lettre_cle = cle[indice_cle % len(cle)]</code>
                        <br>• Puis : <code>decalage = get_position_dans_alphabet(lettre_cle)</code>
                        <br>• Enfin : <code>resultat += chiffrer_lettre(caractere, decalage)</code>
                    </div>
                    <div class="console-output" style="margin-top: 15px;">
                        <strong>$ Exemple d'exécution :</strong><br>
                        >>> chiffrer_vigenere("BONJOUR", "CLE")<br>
                        'easmazu'<br>
                        >>> chiffrer_vigenere("HELLO WORLD", "KEY")<br>
                        'rijvs asvvn'
                    </div>
                </div>

                <div class="exercise-card">
                    <div class="exercise-difficulty">Moyen</div>
                    <div class="exercise-title">Déchiffrer Vigenère</div>
                    <div class="exercise-desc">
                        Écris une fonction <code>dechiffrer_vigenere(texte_chiffre, cle)</code> qui déchiffre un message Vigenère.
                    </div>

                    <div class="exercise-steps">
                        <strong>Ce qu'il faut faire :</strong>
                        <ol>
                            <li>Réfléchir : pour déchiffrer, que faut-il faire ?</li>
                            <li>Si chiffrer = ajouter un décalage...</li>
                            <li>Alors déchiffrer = soustraire le décalage</li>
                            <li>Adapter le code de <code>chiffrer_vigenere()</code></li>
                        </ol>
                    </div>

                    <div style="text-align: center; margin-top: 15px;">
                        <button class="hint-button" onclick="toggleHint('hint8_3')" style="
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
                    <div id="hint8_3" class="hint-content" style="
                        display: none;
                        background: rgba(255, 215, 0, 0.1);
                        border: 2px solid rgba(255, 215, 0, 0.3);
                        border-radius: 12px;
                        padding: 15px;
                        margin-top: 15px;
                        color: #ffd700;
                        font-style: italic;
                    ">
                        🔍 <strong>Indice :</strong> Pense au déchiffrement de César :
                        <br>• Pour déchiffrer, on utilise un décalage négatif
                        <br>• Au lieu de <code>chiffrer_lettre(caractere, decalage)</code>
                        <br>• Utilise <code>chiffrer_lettre(caractere, -decalage)</code>
                        <br>• Ou crée une fonction <code>dechiffrer_lettre()</code> si tu préfères
                    </div>
                    <div class="console-output" style="margin-top: 15px;">
                        <strong>$ Exemple d'exécution :</strong><br>
                        >>> dechiffrer_vigenere("easmazu", "CLE")<br>
                        'bonjour'<br>
                        >>> dechiffrer_vigenere("rijvs asvvn", "KEY")<br>
                        'hello world'
                    </div>
                </div>

                <div class="exercise-card">
                    <div class="exercise-difficulty">Avancé</div>
                    <div class="exercise-title">Programme interactif</div>
                    <div class="exercise-desc">
                        Crée un programme complet qui demande à l'utilisateur s'il veut chiffrer ou déchiffrer, puis le message et la clé.
                    </div>

                    <div class="exercise-steps">
                        <strong>Ce qu'il faut faire :</strong>
                        <ol>
                            <li>Demander : "Chiffrer ou déchiffrer ? (c/d)"</li>
                            <li>Demander le message</li>
                            <li>Demander la clé (mot sans espaces)</li>
                            <li>Valider que la clé contient uniquement des lettres</li>
                            <li>Appeler la bonne fonction et afficher le résultat</li>
                        </ol>
                    </div>

                    <div style="text-align: center; margin-top: 15px;">
                        <button class="hint-button" onclick="toggleHint('hint8_4')" style="
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
                    <div id="hint8_4" class="hint-content" style="
                        display: none;
                        background: rgba(255, 215, 0, 0.1);
                        border: 2px solid rgba(255, 215, 0, 0.3);
                        border-radius: 12px;
                        padding: 15px;
                        margin-top: 15px;
                        color: #ffd700;
                        font-style: italic;
                    ">
                        🔍 <strong>Indice :</strong> Validation de la clé :
                        <br>• Utilise <code>cle.isalpha()</code> pour vérifier que c'est uniquement des lettres
                        <br>• Si pas valide, affiche un message d'erreur
                        <br>• Convertis la clé en majuscules avec <code>.upper()</code> pour simplifier
                    </div>
                    <div class="console-output" style="margin-top: 15px;">
                        <strong>$ Exemple d'exécution :</strong><br>
                        Chiffrer ou déchiffrer ? (c/d) : c<br>
                        Message : SECRET MESSAGE<br>
                        Clé : PYTHON<br>
                        Message chiffré : hjvkxg rjlhnzx
                    </div>
                </div>

                <div class="exercise-card">
                    <div class="exercise-difficulty">Expert</div>
                    <div class="exercise-title">Analyse de fréquence</div>
                    <div class="exercise-desc">
                        Crée une fonction <code>analyser_vigenere(texte_chiffre)</code> qui essaie de deviner la longueur de la clé en analysant les répétitions de lettres.
                    </div>

                    <div class="exercise-steps">
                        <strong>Ce qu'il faut faire :</strong>
                        <ol>
                            <li>Chercher les séquences de 3 lettres qui se répètent</li>
                            <li>Calculer la distance entre les répétitions</li>
                            <li>Trouver le PGCD (Plus Grand Commun Diviseur) de ces distances</li>
                            <li>Le PGCD donne probablement la longueur de la clé !</li>
                        </ol>
                    </div>

                    <div style="text-align: center; margin-top: 15px;">
                        <button class="hint-button" onclick="toggleHint('hint8_5')" style="
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
                    <div id="hint8_5" class="hint-content" style="
                        display: none;
                        background: rgba(255, 215, 0, 0.1);
                        border: 2px solid rgba(255, 215, 0, 0.3);
                        border-radius: 12px;
                        padding: 15px;
                        margin-top: 15px;
                        color: #ffd700;
                        font-style: italic;
                    ">
                        🔍 <strong>Indice :</strong> Méthode Kasiski :
                        <br>• Parcours le texte avec une fenêtre de 3 lettres
                        <br>• Cherche si ce trigramme apparaît plus loin
                        <br>• Note la distance entre les occurrences
                        <br>• Utilise <code>import math</code> et <code>math.gcd()</code> pour le PGCD
                    </div>
                    <div class="console-output" style="margin-top: 15px;">
                        <strong>$ Exemple d'exécution :</strong><br>
                        >>> analyser_vigenere("easmazueasmazueasmazu")<br>
                        Répétitions trouvées :<br>
                        - "eas" à distance 7<br>
                        - "azu" à distance 7<br>
                        Longueur probable de la clé : 7
                    </div>
                </div>
            </div>

            <!-- Comparison table -->
            <div style="
                background: rgba(102, 126, 234, 0.1);
                border: 2px solid #667eea;
                border-radius: 12px;
                padding: 25px;
                margin: 30px 0;
            ">
                <h3 style="color: #667eea; margin-bottom: 20px;">⚖️ César vs Vigenère</h3>
                <table style="width: 100%; color: #fff; border-collapse: collapse;">
                    <thead>
                        <tr style="border-bottom: 2px solid #667eea;">
                            <th style="padding: 10px; text-align: left; color: #ffd700;">Critère</th>
                            <th style="padding: 10px; text-align: left; color: #ffd700;">César</th>
                            <th style="padding: 10px; text-align: left; color: #ffd700;">Vigenère</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                            <td style="padding: 10px;">Clé</td>
                            <td style="padding: 10px;">1 nombre (1-25)</td>
                            <td style="padding: 10px;">1 mot (longueur variable)</td>
                        </tr>
                        <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                            <td style="padding: 10px;">Décalage</td>
                            <td style="padding: 10px;">Fixe pour tout le message</td>
                            <td style="padding: 10px;">Change à chaque lettre</td>
                        </tr>
                        <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                            <td style="padding: 10px;">Sécurité</td>
                            <td style="padding: 10px;">Faible (25 possibilités)</td>
                            <td style="padding: 10px;">Beaucoup plus forte</td>
                        </tr>
                        <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                            <td style="padding: 10px;">Difficulté</td>
                            <td style="padding: 10px;">Simple</td>
                            <td style="padding: 10px;">Plus complexe</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px;">Cassage</td>
                            <td style="padding: 10px;">Force brute facile</td>
                            <td style="padding: 10px;">Analyse de fréquence requise</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <!-- Key concepts -->
            <div style="
                background: rgba(255, 215, 0, 0.1);
                border-left: 4px solid #ffd700;
                padding: 20px;
                margin: 25px 0;
                border-radius: 8px;
            ">
                <div style="color: #ffd700; font-weight: bold; margin-bottom: 10px;">🎯 Points clés à retenir :</div>
                <div style="color: #fff; line-height: 1.8; font-size: 0.95em;">
                    • Vigenère = César avec une clé qui change à chaque lettre
                    <br>• Utiliser <code>indice % len(cle)</code> pour répéter la clé
                    <br>• Les espaces ne consomment pas de lettre de clé
                    <br>• On peut réutiliser les fonctions de César
                    <br>• Beaucoup plus difficile à casser que César
                    <br>• La sécurité dépend de la longueur de la clé
                </div>
            </div>
        `
    }
};
