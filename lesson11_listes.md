# Leçon 11 : Les Listes en Python

## Introduction

En Python, une **liste** est une collection d'éléments qui peut être modifiée. Elle peut contenir différents types de données, comme des entiers, des flottants, des chaînes de caractères, et même d'autres listes.

### Caractéristiques des listes
- **Modifiable** : on peut ajouter, modifier ou supprimer des éléments
- **Ordonnée** : les éléments ont un ordre précis
- **Indexée** : chaque élément a un indice (position)
- **Flexible** : peut contenir différents types de données

## 1. Création de Listes

Pour créer une liste, on utilise des **crochets []** et on sépare les éléments par des **virgules**.

```python
# Création avec des valeurs
ma_liste = [1, "deux", 3.0, "quatre"]

# Liste vide
liste_vide = []

# Liste avec un seul élément
liste_un_element = [42]
```

### Exemples de différents types de listes

```python
# Liste de nombres
nombres = [1, 2, 3, 4, 5]

# Liste de chaînes
fruits = ["pomme", "banane", "orange"]

# Liste mixte
mixte = [42, "texte", 3.14, True]
```

### Fonction list()

On peut aussi créer une liste à partir d'une chaîne de caractères avec `list()`.

```python
# Créer une liste à partir d'un string
mot = "Python"
lettres = list(mot)
print(lettres)  # ['P', 'y', 't', 'h', 'o', 'n']

# Créer une liste de nombres avec range()
nombres = list(range(1, 6))
print(nombres)  # [1, 2, 3, 4, 5]
```

## 2. Accès aux Éléments

Chaque élément dans une liste a un **indice** qui commence à **0**. Pour accéder à l'élément, on utilise cet indice entre crochets.

### Indices positifs et négatifs

```
Liste:  ["a",  "b",  "c",  "d",  "e"]
Index:    0     1     2     3     4    ← positif
Index:   -5    -4    -3    -2    -1    ← négatif
```

### Exemples d'accès

```python
ma_liste = [1, "deux", 3.0, "quatre"]

# Premier élément (indice 0)
premier_element = ma_liste[0]
print(premier_element)  # Affiche: 1

# Deuxième élément
print(ma_liste[1])  # Affiche: deux

# Dernier élément (indice -1)
print(ma_liste[-1])  # Affiche: quatre

# Avant-dernier élément
print(ma_liste[-2])  # Affiche: 3.0
```

### Fonction len()

La fonction `len()` renvoie le nombre d'éléments dans la liste.

```python
fruits = ["pomme", "banane", "orange"]
print(len(fruits))  # Affiche: 3

# Accéder au dernier élément avec len()
dernier = fruits[len(fruits) - 1]
print(dernier)  # Affiche: orange
```

## 3. Ajout d'Éléments

Pour ajouter un élément à la fin de la liste, on utilise la méthode `.append()`.

```python
ma_liste = [1, "deux", 3.0, "quatre"]
print("Avant:", ma_liste)

# Ajouter 5 à la fin
ma_liste.append(5)
print("Après:", ma_liste)  # [1, 'deux', 3.0, 'quatre', 5]
```

### Construire une liste progressivement

On peut commencer avec une liste vide et ajouter des éléments un par un.

```python
# Commencer avec une liste vide
fruits = []
print("Liste vide:", fruits)

# Ajouter des éléments
fruits.append("pomme")
fruits.append("banane")
fruits.append("orange")

print("Liste finale:", fruits)
# ['pomme', 'banane', 'orange']
```

### Exemple avec input()

```python
# Créer une liste de prénoms
prenoms = []

prenoms.append(input("Premier prénom: "))
prenoms.append(input("Deuxième prénom: "))
prenoms.append(input("Troisième prénom: "))

print("Liste des prénoms:", prenoms)
print(f"Nous avons {len(prenoms)} prénoms")
```

## 4. Modification d'Éléments

On peut modifier un élément existant en lui assignant une nouvelle valeur avec son indice.

```python
ma_liste = [1, "deux", 3.0, "quatre"]
print("Avant:", ma_liste)

# Modifier le deuxième élément (indice 1)
ma_liste[1] = 2
print("Après:", ma_liste)  # [1, 2, 3.0, 'quatre']
```

### Exemple avec des notes

```python
notes = [12, 15, 8, 14]
print("Notes originales:", notes)

# Corriger la troisième note (indice 2)
notes[2] = 16
print("Notes corrigées:", notes)

# Modifier la première note
notes[0] = 18
print("Notes finales:", notes)  # [18, 15, 16, 14]
```

### Modification avec calcul

```python
points = [10, 20, 30, 40]
print("Points avant:", points)

# Doubler le premier élément
points[0] = points[0] * 2

# Ajouter 5 au deuxième élément
points[1] = points[1] + 5

print("Points après:", points)  # [20, 25, 30, 40]
```

## 5. Suppression d'Éléments

Il existe deux méthodes principales pour supprimer des éléments d'une liste.

### del - Supprimer par indice

Le mot-clé `del` supprime un élément à un indice précis.

```python
ma_liste = [1, "deux", 3.0, "quatre"]
print("Avant:", ma_liste)

# Supprimer le quatrième élément (indice 3)
del ma_liste[3]
print("Après:", ma_liste)  # [1, 'deux', 3.0]
```

### pop() - Supprimer et récupérer

La méthode `.pop()` supprime un élément et **renvoie** sa valeur.

```python
ma_liste = [1, "deux", 3.0, "quatre"]
print("Avant:", ma_liste)

# Supprimer et récupérer l'élément à l'indice 3
element_supprime = ma_liste.pop(3)
print("Élément supprimé:", element_supprime)  # quatre
print("Après:", ma_liste)  # [1, 'deux', 3.0]
```

### Différence entre del et pop()

- `del liste[i]` : supprime l'élément, ne renvoie rien
- `liste.pop(i)` : supprime l'élément ET renvoie sa valeur
- `liste.pop()` sans indice : supprime le dernier élément

### Exemple complet

```python
taches = ["devoirs", "sport", "lecture", "jeux"]
print("Tâches:", taches)

# Terminer la première tâche
tache_finie = taches.pop(0)
print(f"Tâche terminée: {tache_finie}")
print("Tâches restantes:", taches)

# Supprimer la dernière tâche
taches.pop()
print("Après suppression:", taches)
```

## 6. Itération sur une Liste

Pour exécuter une opération sur chaque élément de la liste, on utilise une **boucle for**.

### Syntaxe de base

```python
for element in ma_liste:
    print(element)
```

### Exemple simple

```python
fruits = ["pomme", "banane", "orange"]

print("Liste des fruits:")
for fruit in fruits:
    print(fruit)

# Affiche:
# pomme
# banane
# orange
```

### Effectuer des calculs

```python
nombres = [1, 2, 3, 4, 5]

# Afficher chaque nombre
print("Nombres:")
for nombre in nombres:
    print(nombre)

print()  # Ligne vide

# Afficher chaque nombre multiplié par 2
print("Doubles:")
for nombre in nombres:
    print(nombre * 2)
```

### Calculer une somme

```python
notes = [12, 15, 18, 14, 16]
somme = 0

# Additionner toutes les notes
for note in notes:
    somme = somme + note

print(f"Somme des notes: {somme}")
print(f"Moyenne: {somme / len(notes)}")
```

### Avec enumerate() - obtenir indice et valeur

La fonction `enumerate()` permet d'obtenir à la fois l'indice et la valeur.

```python
couleurs = ["rouge", "vert", "bleu"]

for i, couleur in enumerate(couleurs):
    print(f"Indice {i}: {couleur}")

# Affiche:
# Indice 0: rouge
# Indice 1: vert
# Indice 2: bleu
```

## 7. Exercices Pratiques

### Exercice 1 : Création d'une liste simple ⭐

Créez une liste appelée `ma_liste` contenant les nombres 2, 4, 6, 8, 10. Puis affichez :
- La liste complète
- Le premier élément de la liste
- Le dernier élément de la liste

### Exercice 2 : Manipulation de base ⭐

Soit la liste : `fruits = ["pomme", "banane", "orange"]`

1. Ajoutez "fraise" à la fin de la liste
2. Affichez la liste
3. Affichez la longueur de la liste

### Exercice 3 : Modification d'éléments ⭐

Soit la liste : `notes = [12, 15, 8, 14]`

1. Remplacez le troisième élément (8) par 16
2. Ajoutez la note 11 à la fin
3. Affichez la nouvelle liste

### Exercice 4 : Parcours simple ⭐⭐

Créez une liste contenant les nombres de 1 à 5, puis :
1. Utilisez une boucle `for` pour afficher chaque nombre
2. Utilisez une boucle `for` pour afficher chaque nombre multiplié par 2

### Exercice 5 : Création d'une liste par étapes ⭐⭐

Créez un programme qui :
1. Commence avec une liste vide
2. Demande à l'utilisateur de saisir 5 nombres un par un
3. Ajoute chaque nombre à la liste
4. Affiche la liste finale

### Exercice 6 : Recherche dans une liste ⭐⭐

Soit la liste : `couleurs = ["rouge", "bleu", "vert", "jaune", "bleu", "rouge"]`

1. Comptez combien de fois "bleu" apparaît dans la liste
2. Trouvez la première position de "vert"
3. Vérifiez si "noir" est dans la liste

### Exercice 7 : Manipulation de plusieurs listes ⭐⭐⭐

Créez deux listes :
```python
prenoms = ["Alice", "Bob", "Charlie"]
ages = [15, 14, 16]
```

Écrivez un programme qui affiche pour chaque personne : "[prénom] a [age] ans"

### Exercice 8 : Calculs sur une liste ⭐⭐⭐

Soit la liste : `nombres = [10, 15, 20, 25, 30]`

Créez un programme qui calcule et affiche :
1. La somme de tous les nombres
2. La moyenne des nombres
3. Le plus grand nombre
4. Le plus petit nombre

### Exercice 9 : Liste et conditions ⭐⭐⭐

Créez une liste de 8 nombres de votre choix, puis :
1. Créez une nouvelle liste contenant uniquement les nombres pairs
2. Créez une nouvelle liste contenant uniquement les nombres supérieurs à 10
3. Affichez les deux nouvelles listes

### Exercice 10 : Mini-projet Liste de classe ⭐⭐⭐⭐

Créez un programme qui gère une liste d'élèves avec les fonctionnalités suivantes :
1. Ajouter un élève à la liste
2. Supprimer un élève de la liste
3. Afficher tous les élèves
4. Quitter le programme

Le programme doit afficher un menu et continuer jusqu'à ce que l'utilisateur choisisse de quitter.

## Légende de difficulté

- ⭐ : Très facile
- ⭐⭐ : Facile
- ⭐⭐⭐ : Moyen
- ⭐⭐⭐⭐ : Difficile

## Résumé

Les listes en Python sont puissantes et flexibles. Elles peuvent être changées après leur création, on peut ajouter ou supprimer des éléments, et elles peuvent contenir des types de données variés.

### Points clés à retenir

1. **Création** : `ma_liste = [1, 2, 3]`
2. **Accès** : `ma_liste[0]` (premier élément)
3. **Ajout** : `ma_liste.append(4)`
4. **Modification** : `ma_liste[0] = 10`
5. **Suppression** : `del ma_liste[0]` ou `ma_liste.pop(0)`
6. **Itération** : `for element in ma_liste:`
7. **Longueur** : `len(ma_liste)`
