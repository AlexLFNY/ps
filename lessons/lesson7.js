// Lesson 7: Le Chiffrement de César
// Deuxième Période - Application pratique des chaînes de caractères

export const lesson7Data = {
    intro: {
        icon: 'icon-lock',
        emoji: '🔐',
        title: 'Le Chiffrement de César',
        subtitle: 'Cryptographie simple',
        content: `
            <div class="section-text">
                Le <strong>chiffrement de César</strong> est une des plus anciennes méthodes de cryptographie.
                Elle consiste à <strong>décaler</strong> chaque lettre de l'alphabet d'un nombre fixe de positions.
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
                    Jules César utilisait ce code pour ses communications militaires. Il décalait les lettres de 3 positions :
                    <br><br>
                    <code>A → D</code>, <code>B → E</code>, <code>C → F</code>, etc.
                </div>
            </div>

            <div class="code-example">
                <h3 style="color: #ffd700;">🔄 Principe du décalage</h3>
                <div class="section-text">
                    Avec un décalage de 3, le mot <strong>"BONJOUR"</strong> devient <strong>"ERQMRXU"</strong>
                </div>
                <pre style="color: #fff; font-family: monospace; background: rgba(0,0,0,0.3); padding: 15px; border-radius: 8px; margin-top: 15px;">
Alphabet normal : A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
                  ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓
Décalé de 3     : D E F G H I J K L M N O P Q R S T U V W X Y Z A B C

Exemple :
B → E
O → R
N → Q
J → M
O → R
U → X
R → U</pre>
            </div>

            <div class="code-example">
                <h3 style="color: #ffd700;">🔑 Chiffrement et Déchiffrement</h3>
                <div class="section-text">
                    • <strong>Chiffrer</strong> : Ajouter le décalage (ex: +3)<br>
                    • <strong>Déchiffrer</strong> : Soustraire le décalage (ex: -3)
                </div>
            </div>

            <div style="
                background: rgba(76, 175, 80, 0.1);
                border-left: 4px solid #4caf50;
                padding: 20px;
                margin: 25px 0;
                border-radius: 8px;
            ">
                <div style="color: #4caf50; font-weight: bold; margin-bottom: 10px;">💡 Le saviez-vous ?</div>
                <div class="section-text">
                    Le chiffrement de César est très facile à casser aujourd'hui car il n'y a que 25 décalages possibles.
                    Mais il reste un excellent exercice pour comprendre les bases de la cryptographie !
                </div>
            </div>
        `
    },

    helper_functions: {
        icon: 'icon-functions',
        emoji: '🛠️',
        title: 'Fonctions Prédéfinies',
        subtitle: 'Outils pour le chiffrement',
        content: `
            <div class="section-text">
                Pour faciliter le chiffrement, nous allons utiliser deux <strong>fonctions prédéfinies</strong> qui manipulent les lettres et l'alphabet.
            </div>

            <div class="code-example">
                <h3 style="color: #ffd700;">🔢 Fonction 1 : get_position_dans_alphabet()</h3>
                <div class="section-text">
                    Cette fonction prend une lettre et retourne sa <strong>position dans l'alphabet</strong> (1 pour A, 2 pour B, etc.)
                </div>
                <pre><code class="python">def get_position_dans_alphabet(c):
    """Retourne la position d'une lettre dans l'alphabet (1-26)"""
    return ord(c.lower()) - ord('a') + 1

# Exemples d'utilisation :
print(get_position_dans_alphabet('A'))  # 1
print(get_position_dans_alphabet('B'))  # 2
print(get_position_dans_alphabet('Z'))  # 26
print(get_position_dans_alphabet('m'))  # 13</code></pre>
                <button class="code-load-button" onclick="loadCodeIntoConsole(\`def get_position_dans_alphabet(c):
    return ord(c.lower()) - ord('a') + 1

print(get_position_dans_alphabet('A'))
print(get_position_dans_alphabet('B'))
print(get_position_dans_alphabet('Z'))
print(get_position_dans_alphabet('m'))\`)">🐍 Charger</button>
            </div>

            <div class="code-example">
                <h3 style="color: #ffd700;">🔤 Fonction 2 : ecris_lettre_du_numero()</h3>
                <div class="section-text">
                    Cette fonction fait l'inverse : elle prend une <strong>position</strong> et retourne la <strong>lettre correspondante</strong>.
                </div>
                <pre><code class="python">def ecris_lettre_du_numero(position):
    """Retourne la lettre correspondant à une position (1-26)"""
    return chr(ord('a') + position - 1)

# Exemples d'utilisation :
print(ecris_lettre_du_numero(1))   # 'a'
print(ecris_lettre_du_numero(2))   # 'b'
print(ecris_lettre_du_numero(26))  # 'z'
print(ecris_lettre_du_numero(13))  # 'm'</code></pre>
                <button class="code-load-button" onclick="loadCodeIntoConsole(\`def ecris_lettre_du_numero(position):
    return chr(ord('a') + position - 1)

print(ecris_lettre_du_numero(1))
print(ecris_lettre_du_numero(2))
print(ecris_lettre_du_numero(26))
print(ecris_lettre_du_numero(13))\`)">🐍 Charger</button>
            </div>

            <div class="code-example">
                <h3 style="color: #ffd700;">🔄 Utilisation combinée</h3>
                <div class="section-text">
                    Voici comment utiliser ces deux fonctions ensemble pour décaler une lettre :
                </div>
                <pre><code class="python">def get_position_dans_alphabet(c):
    return ord(c.lower()) - ord('a') + 1

def ecris_lettre_du_numero(position):
    return chr(ord('a') + position - 1)

# Décaler la lettre 'B' de 3 positions
lettre = 'B'
position = get_position_dans_alphabet(lettre)  # 2
nouvelle_position = position + 3               # 5
nouvelle_lettre = ecris_lettre_du_numero(nouvelle_position)
print(f"{lettre} décalé de 3 → {nouvelle_lettre}")  # B décalé de 3 → e</code></pre>
                <button class="code-load-button" onclick="loadCodeIntoConsole(\`def get_position_dans_alphabet(c):
    return ord(c.lower()) - ord('a') + 1

def ecris_lettre_du_numero(position):
    return chr(ord('a') + position - 1)

lettre = 'B'
position = get_position_dans_alphabet(lettre)
nouvelle_position = position + 3
nouvelle_lettre = ecris_lettre_du_numero(nouvelle_position)
print(f&quot;{lettre} décalé de 3 → {nouvelle_lettre}&quot;)\`)">🐍 Charger</button>
            </div>

            <div style="
                background: rgba(255, 215, 0, 0.1);
                border-left: 4px solid #ffd700;
                padding: 20px;
                margin: 25px 0;
                border-radius: 8px;
            ">
                <div style="color: #ffd700; font-weight: bold; margin-bottom: 10px;">⚠️ Attention au débordement !</div>
                <div class="section-text">
                    Si on dépasse 26 (la lettre 'Z'), il faut revenir au début de l'alphabet.
                    <br>Par exemple : position 28 → position 2 (lettre 'B')
                    <br><br>
                    Solution : Utiliser l'<strong>opérateur modulo</strong> <code>%</code>
                    <br><code>nouvelle_position = ((position + decalage - 1) % 26) + 1</code>
                </div>
            </div>
        `
    },

    exercises: {
        icon: 'icon-exercises',
        emoji: '✏️',
        title: 'Exercices Guidés',
        subtitle: 'Coder le chiffrement de César',
        content: `
            <div class="section-text">
                À vous de coder le chiffrement de César en utilisant les fonctions prédéfinies !
            </div>
            <div class="exercises-grid">
                <div class="exercise-card">
                    <div class="exercise-difficulty">Facile</div>
                    <div class="exercise-title">Chiffrer une seule lettre</div>
                    <div class="exercise-desc">
                        Écris une fonction <code>chiffrer_lettre(lettre, decalage)</code> qui prend une lettre et un décalage, et retourne la lettre chiffrée.
                    </div>

                    <div class="exercise-steps">
                        <strong>Ce qu'il faut faire :</strong>
                        <ol>
                            <li>Copier les deux fonctions prédéfinies dans ton code</li>
                            <li>Créer la fonction <code>chiffrer_lettre(lettre, decalage)</code></li>
                            <li>Obtenir la position de la lettre avec <code>get_position_dans_alphabet()</code></li>
                            <li>Ajouter le décalage : <code>nouvelle_position = position + decalage</code></li>
                            <li>Gérer le débordement avec modulo : <code>((nouvelle_position - 1) % 26) + 1</code></li>
                            <li>Retourner la nouvelle lettre avec <code>ecris_lettre_du_numero()</code></li>
                        </ol>
                    </div>

                    <div style="text-align: center; margin-top: 15px;">
                        <button class="hint-button" onclick="toggleHint('hint7_1')" style="
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
                    <div id="hint7_1" class="hint-content" style="
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
                        <br>1. Utilise <code>get_position_dans_alphabet(lettre)</code> pour obtenir la position
                        <br>2. Ajoute le décalage à cette position
                        <br>3. Utilise le modulo <code>% 26</code> pour gérer le débordement (attention à bien ajuster les indices !)
                        <br>4. Utilise <code>ecris_lettre_du_numero()</code> pour convertir la position en lettre
                    </div>
                    <div class="console-output" style="margin-top: 15px;">
                        <strong>$ Exemple d'exécution :</strong><br>
                        >>> chiffrer_lettre('A', 3)<br>
                        'd'<br>
                        >>> chiffrer_lettre('X', 5)<br>
                        'c'<br>
                        >>> chiffrer_lettre('Z', 1)<br>
                        'a'
                    </div>
                </div>

                <div class="exercise-card">
                    <div class="exercise-difficulty">Moyen</div>
                    <div class="exercise-title">Chiffrer un mot entier</div>
                    <div class="exercise-desc">
                        <strong style="color: #ff6b6b;">EXERCICE OBLIGATOIRE</strong><br><br>
                        Écris une fonction <code>chiffrer_mot(mot, decalage)</code> qui chiffre un mot entier. Les espaces et la ponctuation restent inchangés.
                    </div>

                    <div class="exercise-steps">
                        <strong>Ce qu'il faut faire :</strong>
                        <ol>
                            <li>Créer une variable vide pour le résultat : <code>resultat = ""</code></li>
                            <li>Parcourir chaque caractère du mot avec <code>for lettre in mot:</code></li>
                            <li>Si c'est une lettre (utiliser <code>lettre.isalpha()</code>), la chiffrer</li>
                            <li>Sinon, garder le caractère tel quel (espace, ponctuation)</li>
                            <li>Ajouter chaque caractère au résultat</li>
                        </ol>
                    </div>

                    <div style="text-align: center; margin-top: 15px;">
                        <button class="hint-button" onclick="toggleHint('hint7_2')" style="
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
                    <div id="hint7_2" class="hint-content" style="
                        display: none;
                        background: rgba(255, 215, 0, 0.1);
                        border: 2px solid rgba(255, 215, 0, 0.3);
                        border-radius: 12px;
                        padding: 15px;
                        margin-top: 15px;
                        color: #ffd700;
                        font-style: italic;
                    ">
                        🔍 <strong>Indice :</strong> Utilisez <code>lettre.isalpha()</code> pour tester si c'est une lettre, et <code>resultat += chiffrer_lettre(lettre, decalage)</code> pour ajouter la lettre chiffrée.
                    </div>
                    <div class="console-output" style="margin-top: 15px;">
                        <strong>$ Exemple d'exécution :</strong><br>
                        >>> chiffrer_mot("BONJOUR", 3)<br>
                        'erqmrxu'<br>
                        >>> chiffrer_mot("HELLO WORLD", 5)<br>
                        'mjqqt btwqi'<br>
                        >>> chiffrer_mot("Python!", 7)<br>
                        'wfaovu!'
                    </div>
                </div>

                <div class="exercise-card">
                    <div class="exercise-difficulty">Moyen</div>
                    <div class="exercise-title">Déchiffrer un message</div>
                    <div class="exercise-desc">
                        Écris une fonction <code>dechiffrer_mot(mot_chiffre, decalage)</code> qui déchiffre un mot.
                        <strong>Astuce :</strong> Déchiffrer revient à chiffrer avec un décalage négatif !
                    </div>

                    <div class="exercise-steps">
                        <strong>Ce qu'il faut faire :</strong>
                        <ol>
                            <li>Utiliser la fonction <code>chiffrer_mot()</code> déjà créée</li>
                            <li>Passer un décalage <strong>négatif</strong> : <code>-decalage</code></li>
                            <li>Tester avec des mots chiffrés</li>
                        </ol>
                    </div>

                    <div style="text-align: center; margin-top: 15px;">
                        <button class="hint-button" onclick="toggleHint('hint7_3')" style="
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
                    <div id="hint7_3" class="hint-content" style="
                        display: none;
                        background: rgba(255, 215, 0, 0.1);
                        border: 2px solid rgba(255, 215, 0, 0.3);
                        border-radius: 12px;
                        padding: 15px;
                        margin-top: 15px;
                        color: #ffd700;
                        font-style: italic;
                    ">
                        🔍 <strong>Indice :</strong> Réfléchis à la logique :
                        <br>• Si chiffrer avec +3 transforme A → D
                        <br>• Alors déchiffrer avec 3 doit faire l'inverse : D → A
                        <br>• Comment obtenir ce comportement inverse avec un seul nombre ?
                        <br>• Astuce : Tu peux réutiliser la fonction <code>chiffrer_mot()</code> !
                    </div>
                    <div class="console-output" style="margin-top: 15px;">
                        <strong>$ Exemple d'exécution :</strong><br>
                        >>> dechiffrer_mot("erqmrxu", 3)<br>
                        'bonjour'<br>
                        >>> dechiffrer_mot("mjqqt", 5)<br>
                        'hello'
                    </div>
                </div>

                <div class="exercise-card">
                    <div class="exercise-difficulty">Avancé</div>
                    <div class="exercise-title">Programme interactif complet</div>
                    <div class="exercise-desc">
                        Crée un programme qui demande à l'utilisateur s'il veut chiffrer ou déchiffrer, puis le message et le décalage.
                    </div>

                    <div class="exercise-steps">
                        <strong>Ce qu'il faut faire :</strong>
                        <ol>
                            <li>Demander à l'utilisateur : "Chiffrer ou déchiffrer ? (c/d)"</li>
                            <li>Demander le message</li>
                            <li>Demander le décalage (nombre entre 1 et 25)</li>
                            <li>Selon le choix, appeler <code>chiffrer_mot()</code> ou <code>dechiffrer_mot()</code></li>
                            <li>Afficher le résultat</li>
                        </ol>
                    </div>

                    <div style="text-align: center; margin-top: 15px;">
                        <button class="hint-button" onclick="toggleHint('hint7_4')" style="
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
                    <div id="hint7_4" class="hint-content" style="
                        display: none;
                        background: rgba(255, 215, 0, 0.1);
                        border: 2px solid rgba(255, 215, 0, 0.3);
                        border-radius: 12px;
                        padding: 15px;
                        margin-top: 15px;
                        color: #ffd700;
                        font-style: italic;
                    ">
                        🔍 <strong>Indice :</strong> Utilisez <code>input()</code> pour les questions et <code>if choix == "c":</code> pour tester le choix.
                    </div>
                    <div class="console-output" style="margin-top: 15px;">
                        <strong>$ Exemple d'exécution :</strong><br>
                        Chiffrer ou déchiffrer ? (c/d) : c<br>
                        Message : BONJOUR<br>
                        Décalage : 3<br>
                        Message chiffré : erqmrxu
                    </div>
                </div>

                <div class="exercise-card">
                    <div class="exercise-difficulty">Expert</div>
                    <div class="exercise-title">Casseur de code César</div>
                    <div class="exercise-desc">
                        Crée un programme <code>casser_cesar(message_chiffre)</code> qui essaie tous les décalages possibles (1 à 25) et affiche les résultats. L'utilisateur pourra ainsi trouver le bon décalage.
                    </div>

                    <div class="exercise-steps">
                        <strong>Ce qu'il faut faire :</strong>
                        <ol>
                            <li>Utiliser une boucle <code>for decalage in range(1, 26):</code></li>
                            <li>Pour chaque décalage, déchiffrer le message</li>
                            <li>Afficher le décalage et le message déchiffré</li>
                            <li><strong>Bonus :</strong> Compter les voyelles dans chaque résultat pour identifier automatiquement le bon décalage</li>
                        </ol>
                    </div>

                    <div style="text-align: center; margin-top: 15px;">
                        <button class="hint-button" onclick="toggleHint('hint7_5')" style="
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
                    <div id="hint7_5" class="hint-content" style="
                        display: none;
                        background: rgba(255, 215, 0, 0.1);
                        border: 2px solid rgba(255, 215, 0, 0.3);
                        border-radius: 12px;
                        padding: 15px;
                        margin-top: 15px;
                        color: #ffd700;
                        font-style: italic;
                    ">
                        🔍 <strong>Indice :</strong> Stratégie à adopter :
                        <br>• Il n'y a que 25 décalages possibles (1 à 25)
                        <br>• Utilise une boucle <code>for</code> avec <code>range()</code> pour tester tous les décalages
                        <br>• Pour chaque décalage, déchiffre le message et affiche le résultat
                        <br>• L'un des 25 résultats sera le bon message en français !
                    </div>
                    <div class="console-output" style="margin-top: 15px;">
                        <strong>$ Exemple d'exécution :</strong><br>
                        >>> casser_cesar("erqmrxu")<br>
                        Décalage 1: dqplqwt<br>
                        Décalage 2: cpolpvs<br>
                        Décalage 3: bonjour  ← Le bon décalage !<br>
                        Décalage 4: anmintq<br>
                        ...
                    </div>
                </div>
            </div>

            <!-- Summary -->
            <div style="
                background: rgba(102, 126, 234, 0.1);
                border: 2px solid #667eea;
                border-radius: 12px;
                padding: 25px;
                margin: 30px 0;
            ">
                <h3 style="color: #667eea; margin-bottom: 20px;">🎯 Concepts Clés</h3>
                <div style="color: #fff; line-height: 2;">
                    ✓ Le chiffrement de César décale chaque lettre d'un nombre fixe de positions
                    <br>✓ Utiliser <code>get_position_dans_alphabet()</code> pour convertir lettre → nombre
                    <br>✓ Utiliser <code>ecris_lettre_du_numero()</code> pour convertir nombre → lettre
                    <br>✓ L'opérateur modulo <code>%</code> gère le retour au début de l'alphabet
                    <br>✓ Déchiffrer = chiffrer avec un décalage négatif
                    <br>✓ Il n'y a que 25 décalages possibles, donc facile à casser par force brute
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
                <div style="color: #ffd700; font-weight: bold; margin-bottom: 10px;">💡 Astuces de débogage :</div>
                <div style="color: #fff; line-height: 1.8; font-size: 0.95em;">
                    • Testez d'abord avec une seule lettre avant un mot complet
                    <br>• Vérifiez que le décalage fonctionne pour Z → A
                    <br>• Utilisez <code>print()</code> pour afficher les positions intermédiaires
                    <br>• N'oubliez pas de gérer les majuscules ET les minuscules
                    <br>• Les espaces et la ponctuation ne doivent pas être chiffrés
                </div>
            </div>
        `
    }
};
