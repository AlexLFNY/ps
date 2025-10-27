// Lesson 9: Analyse de Fréquence et Détection de Langue
// Deuxième Période - Statistiques et cryptanalyse

export const lesson9Data = {
    intro: {
        icon: 'icon-chart',
        emoji: '📊',
        title: 'Analyse de Fréquence des Lettres',
        subtitle: 'La science du texte',
        content: `
            <div class="section-text">
                L'<strong>analyse de fréquence</strong> consiste à compter combien de fois chaque lettre apparaît dans un texte.
                C'est un outil puissant utilisé en <strong>cryptanalyse</strong> et en <strong>traitement du langage naturel</strong> !
            </div>

            <div style="
                background: rgba(74, 158, 255, 0.15);
                padding: 20px;
                border-radius: 12px;
                border-left: 4px solid #4a9eff;
                margin: 25px 0;
            ">
                <div style="color: #4a9eff; font-weight: bold; margin-bottom: 15px;">🔍 Pourquoi c'est important ?</div>
                <div class="section-text">
                    <strong>1. Casser les codes :</strong> Les lettres les plus fréquentes dans un message chiffré correspondent probablement aux lettres les plus fréquentes de la langue.
                    <br><br>
                    <strong>2. Détecter la langue :</strong> Chaque langue a une "signature" unique de fréquences.
                    <br><br>
                    <strong>3. Identifier l'auteur :</strong> Chaque personne a son propre "style" de fréquences.
                </div>
            </div>

            <div class="code-example">
                <h3 style="color: #ffd700;">📈 Fréquences des lettres en français</h3>
                <div class="section-text">
                    Source : <a href="https://fr.wikipedia.org/wiki/Fréquence_d'apparition_des_lettres" target="_blank" style="color: #ffd700;">Wikipédia - Fréquence d'apparition des lettres</a>
                </div>
                <pre style="color: #fff; font-family: monospace; background: rgba(0,0,0,0.3); padding: 15px; border-radius: 8px; margin-top: 15px;">
<span style="color: #4caf50;">Top 5 des lettres les plus fréquentes en français :</span>
1. E → 14.72%  (très fréquent !)
2. A → 8.13%
3. S → 7.91%
4. I → 7.24%
5. N → 7.09%

<span style="color: #ff6b6b;">Lettres les moins fréquentes :</span>
K → 0.05%
W → 0.11%
X → 0.38%
Y → 0.46%
Z → 0.21%</pre>
            </div>

            <div class="code-example">
                <h3 style="color: #ffd700;">🌍 Comparaison Français vs Anglais</h3>
                <pre style="color: #fff; font-family: monospace; background: rgba(0,0,0,0.3); padding: 15px; border-radius: 8px; margin-top: 15px;">
<span style="color: #81d4fa;">Lettre  │ Français │ Anglais │ Différence</span>
───────┼──────────┼─────────┼────────────
   E   │  14.72%  │  12.70% │ +2.02%  ← Plus en français
   A   │   8.13%  │   8.17% │ ~égal
   W   │   0.11%  │   2.36% │ -2.25%  ← Rare en français !
   K   │   0.05%  │   0.77% │ -0.72%  ← Rare en français !
   H   │   0.74%  │   6.09% │ -5.35%  ← Beaucoup plus en anglais</pre>
            </div>

            <div style="
                background: rgba(76, 175, 80, 0.1);
                border-left: 4px solid #4caf50;
                padding: 20px;
                margin: 25px 0;
                border-radius: 8px;
            ">
                <div style="color: #4caf50; font-weight: bold; margin-bottom: 10px;">💡 Astuce pour détecter une langue</div>
                <div class="section-text">
                    <strong>Méthode simple :</strong> Chercher les accents français (é, è, à, ç, ê)
                    <br>Si présents → c'est du français !
                    <br><br>
                    <strong>Méthode avancée :</strong> Calculer la fréquence du 'W' et du 'K'
                    <br>Si élevée → probablement de l'anglais
                    <br>Si faible → probablement du français
                </div>
            </div>

            <div class="code-example">
                <h3 style="color: #ffd700;">🎯 Application : Casser le code de César</h3>
                <div class="section-text">
                    Si on chiffre un texte français avec César, la lettre la plus fréquente sera probablement le 'E' chiffré !
                </div>
                <pre style="color: #fff; font-family: monospace; background: rgba(0,0,0,0.3); padding: 15px; border-radius: 8px; margin-top: 15px;">
Message original : "Le petit chat est sur le toit"
                   → E apparaît 4 fois (le plus fréquent)

Chiffré avec décalage +3 : "Oh shwlw fkdw hvw vxu oh wrlw"
                           → H apparaît 4 fois (le plus fréquent)

Déduction : H dans le message chiffré = E en clair
           → Décalage de E à H = 3
           → On a trouvé la clé !</pre>
            </div>
        `
    },

    counting: {
        icon: 'icon-count',
        emoji: '🔢',
        title: 'Compter les Lettres',
        subtitle: 'Techniques de comptage',
        content: `
            <div class="section-text">
                Pour analyser un texte, on doit d'abord savoir compter combien de fois chaque lettre apparaît.
            </div>

            <div class="code-example">
                <h3 style="color: #ffd700;">📝 Méthode 1 : Compter une lettre spécifique</h3>
                <div class="section-text">
                    La façon la plus simple : utiliser <code>.count()</code>
                </div>
                <pre><code class="python">texte = "Bonjour tout le monde"

# Compter les 'o'
nb_o = texte.lower().count('o')
print(f"Nombre de 'o' : {nb_o}")  # 4

# Calculer le pourcentage
longueur = len(texte.replace(" ", ""))  # Sans espaces
pourcentage = (nb_o / longueur) * 100
print(f"Fréquence : {pourcentage:.2f}%")</code></pre>
                <button class="code-load-button" onclick="loadCodeIntoConsole(\`texte = &quot;Bonjour tout le monde&quot;

nb_o = texte.lower().count('o')
print(f&quot;Nombre de 'o' : {nb_o}&quot;)

longueur = len(texte.replace(&quot; &quot;, &quot;&quot;))
pourcentage = (nb_o / longueur) * 100
print(f&quot;Fréquence : {pourcentage:.2f}%&quot;)\`)">🐍 Charger</button>
            </div>

            <div class="code-example">
                <h3 style="color: #ffd700;">📊 Méthode 2 : Compter toutes les lettres</h3>
                <div class="section-text">
                    Pour analyser tout l'alphabet, on utilise un <strong>dictionnaire</strong> :
                </div>
                <pre><code class="python">def compter_lettres(texte):
    """Compte la fréquence de chaque lettre"""
    frequences = {}
    texte = texte.lower()

    for lettre in texte:
        if lettre.isalpha():  # Ignorer espaces et ponctuation
            if lettre in frequences:
                frequences[lettre] += 1
            else:
                frequences[lettre] = 1

    return frequences

texte = "Hello World"
freq = compter_lettres(texte)
print(freq)  # {'h': 1, 'e': 1, 'l': 3, 'o': 2, ...}</code></pre>
                <button class="code-load-button" onclick="loadCodeIntoConsole(\`def compter_lettres(texte):
    frequences = {}
    texte = texte.lower()

    for lettre in texte:
        if lettre.isalpha():
            if lettre in frequences:
                frequences[lettre] += 1
            else:
                frequences[lettre] = 1

    return frequences

texte = &quot;Hello World&quot;
freq = compter_lettres(texte)
print(freq)\`)">🐍 Charger</button>
            </div>

            <div class="code-example">
                <h3 style="color: #ffd700;">🏆 Méthode 3 : Trouver la lettre la plus fréquente</h3>
                <pre><code class="python">def lettre_la_plus_frequente(texte):
    """Trouve la lettre qui apparaît le plus"""
    frequences = compter_lettres(texte)

    max_freq = 0
    lettre_max = ''

    for lettre, freq in frequences.items():
        if freq > max_freq:
            max_freq = freq
            lettre_max = lettre

    return lettre_max, max_freq

texte = "Le petit chat est sur le toit"
lettre, nb = lettre_la_plus_frequente(texte)
print(f"Lettre la plus fréquente : '{lettre}' ({nb} fois)")</code></pre>
                <button class="code-load-button" onclick="loadCodeIntoConsole(\`def compter_lettres(texte):
    frequences = {}
    texte = texte.lower()
    for lettre in texte:
        if lettre.isalpha():
            if lettre in frequences:
                frequences[lettre] += 1
            else:
                frequences[lettre] = 1
    return frequences

def lettre_la_plus_frequente(texte):
    frequences = compter_lettres(texte)
    max_freq = 0
    lettre_max = ''
    for lettre, freq in frequences.items():
        if freq > max_freq:
            max_freq = freq
            lettre_max = lettre
    return lettre_max, max_freq

texte = &quot;Le petit chat est sur le toit&quot;
lettre, nb = lettre_la_plus_frequente(texte)
print(f&quot;Lettre la plus fréquente : '{lettre}' ({nb} fois)&quot;)\`)">🐍 Charger</button>
            </div>

            <div style="
                background: rgba(255, 215, 0, 0.1);
                border-left: 4px solid #ffd700;
                padding: 20px;
                margin: 25px 0;
                border-radius: 8px;
            ">
                <div style="color: #ffd700; font-weight: bold; margin-bottom: 10px;">💡 Astuce : Afficher un graphique</div>
                <div class="section-text">
                    Pour visualiser les fréquences, on peut créer un graphique en texte avec des barres :
                </div>
                <pre style="margin-top: 15px;"><code class="python">def afficher_graphique(frequences):
    for lettre in sorted(frequences.keys()):
        nb = frequences[lettre]
        barre = '█' * nb
        print(f"{lettre} : {barre} ({nb})")</code></pre>
            </div>
        `
    },

    exercises: {
        icon: 'icon-exercises',
        emoji: '✏️',
        title: 'Exercices Pratiques',
        subtitle: 'Analyse et détection',
        content: `
            <div class="section-text">
                Mettez en pratique l'analyse de fréquence avec ces exercices !
            </div>
            <div class="exercises-grid">
                <div class="exercise-card">
                    <div class="exercise-difficulty">Facile</div>
                    <div class="exercise-title">Compter les voyelles et consonnes</div>
                    <div class="exercise-desc">
                        Écris une fonction <code>compter_voyelles_consonnes(texte)</code> qui compte séparément le nombre de voyelles et de consonnes.
                    </div>

                    <div class="exercise-steps">
                        <strong>Ce qu'il faut faire :</strong>
                        <ol>
                            <li>Créer une chaîne avec toutes les voyelles : <code>"aeiou"</code></li>
                            <li>Parcourir le texte lettre par lettre</li>
                            <li>Si la lettre est dans les voyelles, incrémenter le compteur de voyelles</li>
                            <li>Sinon (et si c'est une lettre), incrémenter les consonnes</li>
                            <li>Retourner les deux compteurs</li>
                        </ol>
                    </div>

                    <div style="text-align: center; margin-top: 15px;">
                        <button class="hint-button" onclick="toggleHint('hint9_1')" style="
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
                    <div id="hint9_1" class="hint-content" style="
                        display: none;
                        background: rgba(255, 215, 0, 0.1);
                        border: 2px solid rgba(255, 215, 0, 0.3);
                        border-radius: 12px;
                        padding: 15px;
                        margin-top: 15px;
                        color: #ffd700;
                        font-style: italic;
                    ">
                        🔍 <strong>Indice :</strong>
                        <br>• Utilise <code>if lettre.lower() in "aeiou":</code> pour tester les voyelles
                        <br>• N'oublie pas de vérifier <code>lettre.isalpha()</code> avant de compter
                        <br>• Pense aux majuscules avec <code>.lower()</code>
                    </div>
                    <div class="console-output" style="margin-top: 15px;">
                        <strong>$ Exemple d'exécution :</strong><br>
                        >>> compter_voyelles_consonnes("Bonjour le monde")<br>
                        Voyelles : 6<br>
                        Consonnes : 7
                    </div>
                </div>

                <div class="exercise-card">
                    <div class="exercise-difficulty">Moyen</div>
                    <div class="exercise-title">Détecter la langue</div>
                    <div class="exercise-desc">
                        <strong style="color: #ff6b6b;">EXERCICE OBLIGATOIRE</strong><br><br>
                        Écris une fonction <code>detecter_langue(texte)</code> qui détecte si un texte est en français ou en anglais en analysant les fréquences.
                    </div>

                    <div class="exercise-steps">
                        <strong>Ce qu'il faut faire :</strong>
                        <ol>
                            <li><strong>Méthode 1 (simple) :</strong> Chercher les accents français (é, è, à, ç, ê, ù, î, ô, û, ï, ë, ü, ÿ, æ, œ)</li>
                            <li><strong>Méthode 2 (avancée) :</strong> Calculer la fréquence du 'w' et du 'k'
                                <ul>
                                    <li>Si fréquence W > 1.5% → probablement anglais</li>
                                    <li>Si fréquence W < 0.5% → probablement français</li>
                                </ul>
                            </li>
                            <li>Retourner "français" ou "anglais"</li>
                        </ol>
                    </div>

                    <div style="text-align: center; margin-top: 15px;">
                        <button class="hint-button" onclick="toggleHint('hint9_2')" style="
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
                    <div id="hint9_2" class="hint-content" style="
                        display: none;
                        background: rgba(255, 215, 0, 0.1);
                        border: 2px solid rgba(255, 215, 0, 0.3);
                        border-radius: 12px;
                        padding: 15px;
                        margin-top: 15px;
                        color: #ffd700;
                        font-style: italic;
                    ">
                        🔍 <strong>Indice :</strong>
                        <br>• Méthode simple : <code>if any(c in texte for c in "éèàçêùîôûïëüÿæœ"):</code>
                        <br>• Méthode avancée : Compter les 'w', diviser par la longueur, multiplier par 100
                        <br>• Combine les deux méthodes pour plus de précision !
                    </div>
                    <div class="console-output" style="margin-top: 15px;">
                        <strong>$ Exemple d'exécution :</strong><br>
                        >>> detecter_langue("Bonjour, comment allez-vous ?")<br>
                        'français'<br>
                        >>> detecter_langue("Hello, how are you today?")<br>
                        'anglais'<br>
                        >>> detecter_langue("The weather is wonderful")<br>
                        'anglais'
                    </div>
                </div>

                <div class="exercise-card">
                    <div class="exercise-difficulty">Avancé</div>
                    <div class="exercise-title">Afficher un graphique en barres</div>
                    <div class="exercise-desc">
                        Écris une fonction <code>graphique_frequences(texte)</code> qui affiche un graphique en barres des 10 lettres les plus fréquentes.
                    </div>

                    <div class="exercise-steps">
                        <strong>Ce qu'il faut faire :</strong>
                        <ol>
                            <li>Compter toutes les lettres avec un dictionnaire</li>
                            <li>Trier les lettres par fréquence (du plus au moins fréquent)</li>
                            <li>Garder seulement les 10 premières</li>
                            <li>Afficher chaque lettre avec une barre de '█' proportionnelle</li>
                        </ol>
                    </div>

                    <div style="text-align: center; margin-top: 15px;">
                        <button class="hint-button" onclick="toggleHint('hint9_3')" style="
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
                    <div id="hint9_3" class="hint-content" style="
                        display: none;
                        background: rgba(255, 215, 0, 0.1);
                        border: 2px solid rgba(255, 215, 0, 0.3);
                        border-radius: 12px;
                        padding: 15px;
                        margin-top: 15px;
                        color: #ffd700;
                        font-style: italic;
                    ">
                        🔍 <strong>Indice :</strong>
                        <br>• Pour trier : convertis le dictionnaire en liste de tuples, puis utilise <code>sorted()</code>
                        <br>• Pour trier par valeur : <code>sorted(freq.items(), key=lambda x: x[1], reverse=True)</code>
                        <br>• Pour les barres : <code>barre = '█' * frequence</code>
                    </div>
                    <div class="console-output" style="margin-top: 15px;">
                        <strong>$ Exemple d'exécution :</strong><br>
                        >>> graphique_frequences("Le petit chat est sur le toit")<br>
                        e : ████ (4)<br>
                        t : ███ (3)<br>
                        i : ██ (2)<br>
                        l : ██ (2)<br>
                        s : ██ (2)<br>
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
                <h3 style="color: #667eea; margin-bottom: 20px;">🎯 Applications de l'analyse de fréquence</h3>
                <div style="color: #fff; line-height: 2;">
                    ✓ <strong>Détection de langue :</strong> Français, anglais, espagnol, etc.
                    <br>✓ <strong>Visualisation de données :</strong> Graphiques pour comprendre un texte
                    <br>✓ <strong>Détection de spam :</strong> Les spams ont des fréquences anormales
                    <br>✓ <strong>Attribution d'auteur :</strong> Chaque auteur a son style
                    <br>✓ <strong>Compression de texte :</strong> Encoder les lettres fréquentes avec moins de bits
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
                <div style="color: #ffd700; font-weight: bold; margin-bottom: 10px;">💡 Conseils pour l'analyse :</div>
                <div style="color: #fff; line-height: 1.8; font-size: 0.95em;">
                    • Plus le texte est long, plus l'analyse est fiable
                    <br>• Ignorer la casse (tout en minuscules)
                    <br>• Ne compter que les lettres (pas les espaces/ponctuation)
                    <br>• Trier les résultats pour mieux visualiser les tendances
                    <br>• Comparer avec les fréquences théoriques pour détecter des anomalies
                </div>
            </div>
        `
    }
};
