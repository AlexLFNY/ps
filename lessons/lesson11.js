// Lesson 11: Les Listes
// Deuxième Période - Structures de données en Python

export const lesson11Data = {
    intro: {
        icon: 'icon-list',
        emoji: '📋',
        title: 'Qu\'est-ce qu\'une Liste ?',
        subtitle: 'Introduction aux listes',
        content: `
            <div class="section-text">
                En Python, une <strong>liste</strong> est une collection d'éléments qui peut être modifiée.
                Elle peut contenir différents types de données, comme des entiers, des flottants,
                des chaînes de caractères, et même d'autres listes.
            </div>

            <div style="background: rgba(102, 126, 234, 0.1); padding: 20px; border-radius: 10px; margin: 20px 0;">
                <p style="color: #667eea; font-weight: bold;">✨ Caractéristiques des listes :</p>
                <ul style="color: #fff; line-height: 1.8;">
                    <li><strong>Modifiable</strong> : on peut ajouter, modifier ou supprimer des éléments</li>
                    <li><strong>Ordonnée</strong> : les éléments ont un ordre précis</li>
                    <li><strong>Indexée</strong> : chaque élément a un indice (position)</li>
                    <li><strong>Flexible</strong> : peut contenir différents types de données</li>
                </ul>
            </div>

            <div class="code-example">
                <h3 style="color: #ffd700;">📌 Exemple simple</h3>
                <pre><code class="python"># Une liste peut contenir différents types
ma_liste = [1, "deux", 3.0, "quatre"]

print(ma_liste)  # Affiche: [1, 'deux', 3.0, 'quatre']
print(type(ma_liste))  # Affiche: &lt;class 'list'&gt;</code></pre>
                <button class="code-load-button" onclick="loadCodeIntoConsole(\`ma_liste = [1, &quot;deux&quot;, 3.0, &quot;quatre&quot;]

print(ma_liste)
print(type(ma_liste))\`)">🐍 Charger</button>
            </div>

            <div class="code-example">
                <h3 style="color: #ffd700;">📝 Différents types de listes</h3>
                <pre><code class="python"># Liste de nombres
nombres = [1, 2, 3, 4, 5]

# Liste de chaînes
fruits = ["pomme", "banane", "orange"]

# Liste mixte
mixte = [42, "texte", 3.14, True]

# Liste vide
vide = []

print(nombres)
print(fruits)
print(mixte)
print(vide)</code></pre>
                <button class="code-load-button" onclick="loadCodeIntoConsole(\`nombres = [1, 2, 3, 4, 5]
fruits = [&quot;pomme&quot;, &quot;banane&quot;, &quot;orange&quot;]
mixte = [42, &quot;texte&quot;, 3.14, True]
vide = []

print(nombres)
print(fruits)
print(mixte)
print(vide)\`)">🐍 Charger</button>
            </div>
        `
    },

    creation: {
        icon: 'icon-create',
        emoji: '🎨',
        title: 'Création de Listes',
        subtitle: 'Comment créer une liste',
        content: `
            <div class="section-text">
                Pour créer une liste, on utilise des <strong>crochets []</strong> et on sépare les éléments par des <strong>virgules</strong>.
            </div>

            <div class="code-example">
                <h3 style="color: #ffd700;">📌 Syntaxe de base</h3>
                <pre><code class="python"># Création avec des valeurs
ma_liste = [1, "deux", 3.0, "quatre"]
print(ma_liste)

# Liste vide
liste_vide = []
print(liste_vide)

# Liste avec un seul élément
liste_un_element = [42]
print(liste_un_element)</code></pre>
                <button class="code-load-button" onclick="loadCodeIntoConsole(\`ma_liste = [1, &quot;deux&quot;, 3.0, &quot;quatre&quot;]
print(ma_liste)

liste_vide = []
print(liste_vide)

liste_un_element = [42]
print(liste_un_element)\`)">🐍 Charger</button>
            </div>

            <div class="code-example">
                <h3 style="color: #ffd700;">🔧 Fonction list()</h3>
                <div class="section-text">
                    On peut aussi créer une liste à partir d'une chaîne de caractères avec <code>list()</code>.
                </div>
                <pre><code class="python"># Créer une liste à partir d'un string
mot = "Python"
lettres = list(mot)
print(lettres)  # ['P', 'y', 't', 'h', 'o', 'n']

# Créer une liste de nombres avec range()
nombres = list(range(1, 6))
print(nombres)  # [1, 2, 3, 4, 5]</code></pre>
                <button class="code-load-button" onclick="loadCodeIntoConsole(\`mot = &quot;Python&quot;
lettres = list(mot)
print(lettres)

nombres = list(range(1, 6))
print(nombres)\`)">🐍 Charger</button>
            </div>
        `
    },

    access: {
        icon: 'icon-index',
        emoji: '🎯',
        title: 'Accès aux Éléments',
        subtitle: 'Indexation et len()',
        content: `
            <div class="section-text">
                Chaque élément dans une liste a un <strong>indice</strong> qui commence à <strong>0</strong>.
                Pour accéder à l'élément, on utilise cet indice entre crochets.
            </div>

            <div style="background: rgba(255,215,0,0.1); padding: 20px; border-radius: 10px; margin: 15px 0;">
                <p style="color: #ffd700; font-weight: bold;">📊 Indices positifs et négatifs :</p>
                <pre style="color: #fff; font-family: monospace; margin-top: 15px;">
Liste:  ["a",  "b",  "c",  "d",  "e"]
Index:    0     1     2     3     4    ← positif
Index:   -5    -4    -3    -2    -1    ← négatif</pre>
            </div>

            <div class="code-example">
                <h3 style="color: #ffd700;">🎯 Accéder à un élément</h3>
                <pre><code class="python">ma_liste = [1, "deux", 3.0, "quatre"]

# Premier élément (indice 0)
premier_element = ma_liste[0]
print(premier_element)  # Affiche: 1

# Deuxième élément
print(ma_liste[1])  # Affiche: deux

# Dernier élément (indice -1)
print(ma_liste[-1])  # Affiche: quatre

# Avant-dernier élément
print(ma_liste[-2])  # Affiche: 3.0</code></pre>
                <button class="code-load-button" onclick="loadCodeIntoConsole(\`ma_liste = [1, &quot;deux&quot;, 3.0, &quot;quatre&quot;]

premier_element = ma_liste[0]
print(premier_element)

print(ma_liste[1])
print(ma_liste[-1])
print(ma_liste[-2])\`)">🐍 Charger</button>
            </div>

            <div class="code-example">
                <h3 style="color: #ffd700;">📏 len() - Longueur de la liste</h3>
                <div class="section-text">
                    La fonction <code>len()</code> renvoie le nombre d'éléments dans la liste.
                </div>
                <pre><code class="python">fruits = ["pomme", "banane", "orange"]
print(len(fruits))  # Affiche: 3

# Accéder au dernier élément avec len()
dernier = fruits[len(fruits) - 1]
print(dernier)  # Affiche: orange

# Liste vide
vide = []
print(len(vide))  # Affiche: 0</code></pre>
                <button class="code-load-button" onclick="loadCodeIntoConsole(\`fruits = [&quot;pomme&quot;, &quot;banane&quot;, &quot;orange&quot;]
print(len(fruits))

dernier = fruits[len(fruits) - 1]
print(dernier)

vide = []
print(len(vide))\`)">🐍 Charger</button>
            </div>

            <div style="
                background: rgba(255, 107, 107, 0.1);
                border-left: 4px solid #ff6b6b;
                padding: 20px;
                margin: 25px 0;
                border-radius: 8px;
            ">
                <div style="color: #ff6b6b; font-weight: bold; margin-bottom: 10px;">⚠️ Attention aux erreurs !</div>
                <pre><code class="python">liste = [1, 2, 3]

# Ceci provoque une erreur (indice hors limites)
# print(liste[5])  # IndexError!

# La liste a 3 éléments, les indices vont de 0 à 2</code></pre>
            </div>
        `
    },

    append: {
        icon: 'icon-add',
        emoji: '➕',
        title: 'Ajout d\'Éléments',
        subtitle: 'La méthode append()',
        content: `
            <div class="section-text">
                Pour ajouter un élément à la fin de la liste, on utilise la méthode <code>.append()</code>.
            </div>

            <div class="code-example">
                <h3 style="color: #ffd700;">➕ Ajouter un élément</h3>
                <pre><code class="python">ma_liste = [1, "deux", 3.0, "quatre"]
print("Avant:", ma_liste)

# Ajouter 5 à la fin
ma_liste.append(5)
print("Après:", ma_liste)  # [1, 'deux', 3.0, 'quatre', 5]</code></pre>
                <button class="code-load-button" onclick="loadCodeIntoConsole(\`ma_liste = [1, &quot;deux&quot;, 3.0, &quot;quatre&quot;]
print(&quot;Avant:&quot;, ma_liste)

ma_liste.append(5)
print(&quot;Après:&quot;, ma_liste)\`)">🐍 Charger</button>
            </div>

            <div class="code-example">
                <h3 style="color: #ffd700;">🔄 Construire une liste progressivement</h3>
                <div class="section-text">
                    On peut commencer avec une liste vide et ajouter des éléments un par un.
                </div>
                <pre><code class="python"># Commencer avec une liste vide
fruits = []
print("Liste vide:", fruits)

# Ajouter des éléments
fruits.append("pomme")
fruits.append("banane")
fruits.append("orange")

print("Liste finale:", fruits)
# ['pomme', 'banane', 'orange']</code></pre>
                <button class="code-load-button" onclick="loadCodeIntoConsole(\`fruits = []
print(&quot;Liste vide:&quot;, fruits)

fruits.append(&quot;pomme&quot;)
fruits.append(&quot;banane&quot;)
fruits.append(&quot;orange&quot;)

print(&quot;Liste finale:&quot;, fruits)\`)">🐍 Charger</button>
            </div>

            <div class="code-example">
                <h3 style="color: #ffd700;">📝 Exemple pratique avec input()</h3>
                <pre><code class="python"># Créer une liste de prénoms
prenoms = []

prenoms.append(input("Premier prénom: "))
prenoms.append(input("Deuxième prénom: "))
prenoms.append(input("Troisième prénom: "))

print("Liste des prénoms:", prenoms)
print(f"Nous avons {len(prenoms)} prénoms")</code></pre>
                <button class="code-load-button" onclick="loadCodeIntoConsole(\`prenoms = []

prenoms.append(input(&quot;Premier prénom: &quot;))
prenoms.append(input(&quot;Deuxième prénom: &quot;))
prenoms.append(input(&quot;Troisième prénom: &quot;))

print(&quot;Liste des prénoms:&quot;, prenoms)
print(f&quot;Nous avons {len(prenoms)} prénoms&quot;)\`)">🐍 Charger</button>
            </div>
        `
    },

    modification: {
        icon: 'icon-edit',
        emoji: '✏️',
        title: 'Modification d\'Éléments',
        subtitle: 'Changer une valeur',
        content: `
            <div class="section-text">
                On peut modifier un élément existant en lui assignant une nouvelle valeur avec son indice.
            </div>

            <div class="code-example">
                <h3 style="color: #ffd700;">✏️ Modifier un élément</h3>
                <pre><code class="python">ma_liste = [1, "deux", 3.0, "quatre"]
print("Avant:", ma_liste)

# Modifier le deuxième élément (indice 1)
ma_liste[1] = 2
print("Après:", ma_liste)  # [1, 2, 3.0, 'quatre']</code></pre>
                <button class="code-load-button" onclick="loadCodeIntoConsole(\`ma_liste = [1, &quot;deux&quot;, 3.0, &quot;quatre&quot;]
print(&quot;Avant:&quot;, ma_liste)

ma_liste[1] = 2
print(&quot;Après:&quot;, ma_liste)\`)">🐍 Charger</button>
            </div>

            <div class="code-example">
                <h3 style="color: #ffd700;">📊 Exemple avec des notes</h3>
                <pre><code class="python">notes = [12, 15, 8, 14]
print("Notes originales:", notes)

# Corriger la troisième note (indice 2)
notes[2] = 16
print("Notes corrigées:", notes)

# Modifier la première note
notes[0] = 18
print("Notes finales:", notes)  # [18, 15, 16, 14]</code></pre>
                <button class="code-load-button" onclick="loadCodeIntoConsole(\`notes = [12, 15, 8, 14]
print(&quot;Notes originales:&quot;, notes)

notes[2] = 16
print(&quot;Notes corrigées:&quot;, notes)

notes[0] = 18
print(&quot;Notes finales:&quot;, notes)\`)">🐍 Charger</button>
            </div>

            <div class="code-example">
                <h3 style="color: #ffd700;">🔄 Modifier avec calcul</h3>
                <pre><code class="python">points = [10, 20, 30, 40]
print("Points avant:", points)

# Doubler le premier élément
points[0] = points[0] * 2

# Ajouter 5 au deuxième élément
points[1] = points[1] + 5

print("Points après:", points)  # [20, 25, 30, 40]</code></pre>
                <button class="code-load-button" onclick="loadCodeIntoConsole(\`points = [10, 20, 30, 40]
print(&quot;Points avant:&quot;, points)

points[0] = points[0] * 2
points[1] = points[1] + 5

print(&quot;Points après:&quot;, points)\`)">🐍 Charger</button>
            </div>
        `
    },

    suppression: {
        icon: 'icon-delete',
        emoji: '🗑️',
        title: 'Suppression d\'Éléments',
        subtitle: 'del et pop()',
        content: `
            <div class="section-text">
                Il existe deux méthodes principales pour supprimer des éléments d'une liste.
            </div>

            <div class="code-example">
                <h3 style="color: #ffd700;">🗑️ del - Supprimer par indice</h3>
                <div class="section-text">
                    Le mot-clé <code>del</code> supprime un élément à un indice précis.
                </div>
                <pre><code class="python">ma_liste = [1, "deux", 3.0, "quatre"]
print("Avant:", ma_liste)

# Supprimer le quatrième élément (indice 3)
del ma_liste[3]
print("Après:", ma_liste)  # [1, 'deux', 3.0]</code></pre>
                <button class="code-load-button" onclick="loadCodeIntoConsole(\`ma_liste = [1, &quot;deux&quot;, 3.0, &quot;quatre&quot;]
print(&quot;Avant:&quot;, ma_liste)

del ma_liste[3]
print(&quot;Après:&quot;, ma_liste)\`)">🐍 Charger</button>
            </div>

            <div class="code-example">
                <h3 style="color: #ffd700;">↩️ pop() - Supprimer et récupérer</h3>
                <div class="section-text">
                    La méthode <code>.pop()</code> supprime un élément et <strong>renvoie</strong> sa valeur.
                </div>
                <pre><code class="python">ma_liste = [1, "deux", 3.0, "quatre"]
print("Avant:", ma_liste)

# Supprimer et récupérer l'élément à l'indice 3
element_supprime = ma_liste.pop(3)
print("Élément supprimé:", element_supprime)  # quatre
print("Après:", ma_liste)  # [1, 'deux', 3.0]</code></pre>
                <button class="code-load-button" onclick="loadCodeIntoConsole(\`ma_liste = [1, &quot;deux&quot;, 3.0, &quot;quatre&quot;]
print(&quot;Avant:&quot;, ma_liste)

element_supprime = ma_liste.pop(3)
print(&quot;Élément supprimé:&quot;, element_supprime)
print(&quot;Après:&quot;, ma_liste)\`)">🐍 Charger</button>
            </div>

            <div style="background: rgba(102, 126, 234, 0.1); padding: 20px; border-radius: 10px; margin: 20px 0;">
                <p style="color: #667eea; font-weight: bold;">💡 Différence entre del et pop() :</p>
                <ul style="color: #fff; line-height: 1.8;">
                    <li><code>del liste[i]</code> : supprime l'élément, ne renvoie rien</li>
                    <li><code>liste.pop(i)</code> : supprime l'élément ET renvoie sa valeur</li>
                    <li><code>liste.pop()</code> sans indice : supprime le dernier élément</li>
                </ul>
            </div>

            <div class="code-example">
                <h3 style="color: #ffd700;">📝 Exemple complet</h3>
                <pre><code class="python">taches = ["devoirs", "sport", "lecture", "jeux"]
print("Tâches:", taches)

# Terminer la première tâche
tache_finie = taches.pop(0)
print(f"Tâche terminée: {tache_finie}")
print("Tâches restantes:", taches)

# Supprimer la dernière tâche
taches.pop()
print("Après suppression:", taches)</code></pre>
                <button class="code-load-button" onclick="loadCodeIntoConsole(\`taches = [&quot;devoirs&quot;, &quot;sport&quot;, &quot;lecture&quot;, &quot;jeux&quot;]
print(&quot;Tâches:&quot;, taches)

tache_finie = taches.pop(0)
print(f&quot;Tâche terminée: {tache_finie}&quot;)
print(&quot;Tâches restantes:&quot;, taches)

taches.pop()
print(&quot;Après suppression:&quot;, taches)\`)">🐍 Charger</button>
            </div>
        `
    },

    iteration: {
        icon: 'icon-loop',
        emoji: '🔄',
        title: 'Itération sur une Liste',
        subtitle: 'La boucle for',
        content: `
            <div class="section-text">
                Pour exécuter une opération sur chaque élément de la liste, on utilise une <strong>boucle for</strong>.
            </div>

            <div class="code-example">
                <h3 style="color: #ffd700;">🔄 Syntaxe de base</h3>
                <pre><code class="python">for element in ma_liste:
    print(element)</code></pre>
            </div>

            <div class="code-example">
                <h3 style="color: #ffd700;">📝 Exemple simple</h3>
                <pre><code class="python">fruits = ["pomme", "banane", "orange"]

print("Liste des fruits:")
for fruit in fruits:
    print(fruit)

# Affiche:
# pomme
# banane
# orange</code></pre>
                <button class="code-load-button" onclick="loadCodeIntoConsole(\`fruits = [&quot;pomme&quot;, &quot;banane&quot;, &quot;orange&quot;]

print(&quot;Liste des fruits:&quot;)
for fruit in fruits:
    print(fruit)\`)">🐍 Charger</button>
            </div>

            <div class="code-example">
                <h3 style="color: #ffd700;">🔢 Effectuer des calculs</h3>
                <pre><code class="python">nombres = [1, 2, 3, 4, 5]

# Afficher chaque nombre
print("Nombres:")
for nombre in nombres:
    print(nombre)

print()  # Ligne vide

# Afficher chaque nombre multiplié par 2
print("Doubles:")
for nombre in nombres:
    print(nombre * 2)</code></pre>
                <button class="code-load-button" onclick="loadCodeIntoConsole(\`nombres = [1, 2, 3, 4, 5]

print(&quot;Nombres:&quot;)
for nombre in nombres:
    print(nombre)

print()

print(&quot;Doubles:&quot;)
for nombre in nombres:
    print(nombre * 2)\`)">🐍 Charger</button>
            </div>

            <div class="code-example">
                <h3 style="color: #ffd700;">📊 Calculer une somme</h3>
                <pre><code class="python">notes = [12, 15, 18, 14, 16]
somme = 0

# Additionner toutes les notes
for note in notes:
    somme = somme + note

print(f"Somme des notes: {somme}")
print(f"Moyenne: {somme / len(notes)}")</code></pre>
                <button class="code-load-button" onclick="loadCodeIntoConsole(\`notes = [12, 15, 18, 14, 16]
somme = 0

for note in notes:
    somme = somme + note

print(f&quot;Somme des notes: {somme}&quot;)
print(f&quot;Moyenne: {somme / len(notes)}&quot;)\`)">🐍 Charger</button>
            </div>

            <div class="code-example">
                <h3 style="color: #ffd700;">🎯 Avec enumerate() - obtenir indice et valeur</h3>
                <div class="section-text">
                    La fonction <code>enumerate()</code> permet d'obtenir à la fois l'indice et la valeur.
                </div>
                <pre><code class="python">couleurs = ["rouge", "vert", "bleu"]

for i, couleur in enumerate(couleurs):
    print(f"Indice {i}: {couleur}")

# Affiche:
# Indice 0: rouge
# Indice 1: vert
# Indice 2: bleu</code></pre>
                <button class="code-load-button" onclick="loadCodeIntoConsole(\`couleurs = [&quot;rouge&quot;, &quot;vert&quot;, &quot;bleu&quot;]

for i, couleur in enumerate(couleurs):
    print(f&quot;Indice {i}: {couleur}&quot;)\`)">🐍 Charger</button>
            </div>
        `
    },

    exercises: {
        icon: 'icon-exercises',
        emoji: '💪',
        title: 'Exercices Pratiques',
        subtitle: '10 exercices progressifs',
        content: `
            <div style="background: linear-gradient(135deg, rgba(102, 126, 234, 0.2), rgba(118, 75, 162, 0.2)); padding: 30px; border-radius: 15px; margin-bottom: 30px;">
                <h2 style="color: #ffd700; margin-bottom: 15px;">📚 Série d'Exercices sur les Listes</h2>
                <p style="color: #fff; line-height: 1.6;">
                    Voici 10 exercices progressifs pour maîtriser les listes en Python.
                    Commencez par les plus simples et progressez à votre rythme !
                </p>
            </div>

            <!-- Exercice 1 -->
            <div class="exercise-card">
                <div class="exercise-header">
                    <span class="exercise-number">Exercice 1</span>
                    <span class="difficulty very-easy">⭐ Très facile</span>
                </div>
                <h3>Création d'une liste simple</h3>
                <p>Créez une liste appelée <code>ma_liste</code> contenant les nombres 2, 4, 6, 8, 10. Puis affichez :</p>
                <ul>
                    <li>La liste complète</li>
                    <li>Le premier élément de la liste</li>
                    <li>Le dernier élément de la liste</li>
                </ul>
            </div>

            <!-- Exercice 2 -->
            <div class="exercise-card">
                <div class="exercise-header">
                    <span class="exercise-number">Exercice 2</span>
                    <span class="difficulty very-easy">⭐ Très facile</span>
                </div>
                <h3>Manipulation de base</h3>
                <p>Soit la liste : <code>fruits = ["pomme", "banane", "orange"]</code></p>
                <ol>
                    <li>Ajoutez "fraise" à la fin de la liste</li>
                    <li>Affichez la liste</li>
                    <li>Affichez la longueur de la liste</li>
                </ol>
            </div>

            <!-- Exercice 3 -->
            <div class="exercise-card">
                <div class="exercise-header">
                    <span class="exercise-number">Exercice 3</span>
                    <span class="difficulty very-easy">⭐ Très facile</span>
                </div>
                <h3>Modification d'éléments</h3>
                <p>Soit la liste : <code>notes = [12, 15, 8, 14]</code></p>
                <ol>
                    <li>Remplacez le troisième élément (8) par 16</li>
                    <li>Ajoutez la note 11 à la fin</li>
                    <li>Affichez la nouvelle liste</li>
                </ol>
            </div>

            <!-- Exercice 4 -->
            <div class="exercise-card">
                <div class="exercise-header">
                    <span class="exercise-number">Exercice 4</span>
                    <span class="difficulty easy">⭐⭐ Facile</span>
                </div>
                <h3>Parcours simple</h3>
                <p>Créez une liste contenant les nombres de 1 à 5, puis :</p>
                <ol>
                    <li>Utilisez une boucle <code>for</code> pour afficher chaque nombre</li>
                    <li>Utilisez une boucle <code>for</code> pour afficher chaque nombre multiplié par 2</li>
                </ol>
            </div>

            <!-- Exercice 5 -->
            <div class="exercise-card">
                <div class="exercise-header">
                    <span class="exercise-number">Exercice 5</span>
                    <span class="difficulty easy">⭐⭐ Facile</span>
                </div>
                <h3>Création d'une liste par étapes</h3>
                <p>Créez un programme qui :</p>
                <ol>
                    <li>Commence avec une liste vide</li>
                    <li>Demande à l'utilisateur de saisir 5 nombres un par un</li>
                    <li>Ajoute chaque nombre à la liste</li>
                    <li>Affiche la liste finale</li>
                </ol>
            </div>

            <!-- Exercice 6 -->
            <div class="exercise-card">
                <div class="exercise-header">
                    <span class="exercise-number">Exercice 6</span>
                    <span class="difficulty easy">⭐⭐ Facile</span>
                </div>
                <h3>Recherche dans une liste</h3>
                <p>Soit la liste : <code>couleurs = ["rouge", "bleu", "vert", "jaune", "bleu", "rouge"]</code></p>
                <ol>
                    <li>Comptez combien de fois "bleu" apparaît dans la liste</li>
                    <li>Trouvez la première position de "vert"</li>
                    <li>Vérifiez si "noir" est dans la liste</li>
                </ol>
            </div>

            <!-- Exercice 7 -->
            <div class="exercise-card">
                <div class="exercise-header">
                    <span class="exercise-number">Exercice 7</span>
                    <span class="difficulty medium">⭐⭐⭐ Moyen</span>
                </div>
                <h3>Manipulation de plusieurs listes</h3>
                <p>Créez deux listes :</p>
                <pre><code class="python">prenoms = ["Alice", "Bob", "Charlie"]
ages = [15, 14, 16]</code></pre>
                <p>Écrivez un programme qui affiche pour chaque personne : "[prénom] a [age] ans"</p>
            </div>

            <!-- Exercice 8 -->
            <div class="exercise-card">
                <div class="exercise-header">
                    <span class="exercise-number">Exercice 8</span>
                    <span class="difficulty medium">⭐⭐⭐ Moyen</span>
                </div>
                <h3>Calculs sur une liste</h3>
                <p>Soit la liste : <code>nombres = [10, 15, 20, 25, 30]</code></p>
                <p>Créez un programme qui calcule et affiche :</p>
                <ol>
                    <li>La somme de tous les nombres</li>
                    <li>La moyenne des nombres</li>
                    <li>Le plus grand nombre</li>
                    <li>Le plus petit nombre</li>
                </ol>
            </div>

            <!-- Exercice 9 -->
            <div class="exercise-card">
                <div class="exercise-header">
                    <span class="exercise-number">Exercice 9</span>
                    <span class="difficulty medium">⭐⭐⭐ Moyen</span>
                </div>
                <h3>Liste et conditions</h3>
                <p>Créez une liste de 8 nombres de votre choix, puis :</p>
                <ol>
                    <li>Créez une nouvelle liste contenant uniquement les nombres pairs</li>
                    <li>Créez une nouvelle liste contenant uniquement les nombres supérieurs à 10</li>
                    <li>Affichez les deux nouvelles listes</li>
                </ol>
            </div>

            <!-- Exercice 10 -->
            <div class="exercise-card">
                <div class="exercise-header">
                    <span class="exercise-number">Exercice 10</span>
                    <span class="difficulty hard">⭐⭐⭐⭐ Difficile</span>
                </div>
                <h3>Mini-projet : Liste de classe</h3>
                <p>Créez un programme qui gère une liste d'élèves avec les fonctionnalités suivantes :</p>
                <ol>
                    <li>Ajouter un élève à la liste</li>
                    <li>Supprimer un élève de la liste</li>
                    <li>Afficher tous les élèves</li>
                    <li>Quitter le programme</li>
                </ol>
                <p>Le programme doit afficher un menu et continuer jusqu'à ce que l'utilisateur choisisse de quitter.</p>
            </div>

            <div style="background: rgba(255,215,0,0.1); padding: 20px; border-radius: 10px; margin-top: 30px;">
                <h3 style="color: #ffd700;">📖 Légende de difficulté :</h3>
                <ul style="color: #fff; line-height: 2;">
                    <li>⭐ : Très facile</li>
                    <li>⭐⭐ : Facile</li>
                    <li>⭐⭐⭐ : Moyen</li>
                    <li>⭐⭐⭐⭐ : Difficile</li>
                </ul>
            </div>
        `
    }
};
