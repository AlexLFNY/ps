# Algorithme du Vrai Wordle

## Introduction

L'algorithme du vrai Wordle est plus complexe que notre version simple. Il doit gérer les cas où une lettre apparaît plusieurs fois dans le mot secret ou dans la tentative.

---

## Problème des lettres répétées

**Exemple :** Mot secret = `ALLEE`, Tentative = `ELLES`

- Le premier **E** de ELLES est à la bonne position (position 3)
- Le second **E** de ELLES est présent mais mal placé (il y a un E en position 4 dans ALLEE)
- Le troisième **E** de ELLES n'existe plus dans ALLEE (les 2 E ont déjà été utilisés)

**Règle :** Chaque lettre du mot secret ne peut être "consommée" qu'une seule fois.

---

## Diagramme de l'algorithme

```
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
                  [ FIN ]
```

---

## Implémentation en Python

```python
def verifier_wordle(mot_secret, tentative):
    """
    Vérifie une tentative Wordle selon l'algorithme officiel.

    Args:
        mot_secret (str): Le mot à deviner
        tentative (str): La tentative de l'utilisateur

    Returns:
        list: Liste de couleurs pour chaque lettre ('VERT', 'JAUNE', 'GRIS')
    """
    n = len(mot_secret)
    resultat = [' '] * n
    disponibles = list(mot_secret)

    # Premier passage : marquer les lettres vertes (bonne position)
    for i in range(n):
        if tentative[i] == mot_secret[i]:
            resultat[i] = 'VERT'
            disponibles.remove(tentative[i])

    # Deuxième passage : marquer les lettres jaunes (présentes) ou grises (absentes)
    for i in range(n):
        if resultat[i] == 'VERT':
            continue  # Déjà traité

        if tentative[i] in disponibles:
            resultat[i] = 'JAUNE'
            disponibles.remove(tentative[i])
        else:
            resultat[i] = 'GRIS'

    return resultat


# Test de la fonction
mot_secret = "ALLEE"
tentative = "ELLES"
resultat = verifier_wordle(mot_secret, tentative)

for i, lettre in enumerate(tentative):
    print(f"{lettre} : {resultat[i]}")
```

**Sortie :**
```
E : JAUNE
L : JAUNE
L : VERT
E : VERT
S : GRIS
```

---

## Différence avec la version simple

### Notre version simple :
- Vérifie simplement si une lettre est dans le mot
- Ne gère pas les lettres répétées correctement
- Plus facile à comprendre pour débuter

**Code de la version simple :**
```python
for i in range(len(tentative)):
    lettre = tentative[i]

    if lettre == mot_secret[i]:
        print(f"{lettre} : VERT")
    elif lettre in mot_secret:
        print(f"{lettre} : JAUNE")
    else:
        print(f"{lettre} : GRIS")
```

### Version du vrai Wordle :
- Deux passages : d'abord les vertes, puis les jaunes
- Chaque lettre du mot secret n'est utilisée qu'une fois
- Plus complexe mais plus juste

**Problème avec la version simple :**

Avec mot_secret = `"ALLEE"` et tentative = `"ELLES"` :
- Les 3 E de ELLES seraient tous marqués JAUNE ou VERT
- Alors qu'il n'y a que 2 E dans ALLEE !

---

## Cas d'usage complexes

### Cas 1 : Lettre répétée dans la tentative seulement

**Mot secret :** `MARIN`
**Tentative :** `ARRET`

```
Résultat :
A : JAUNE (présent en position 1 dans MARIN)
R : VERT (bonne position 2)
R : GRIS (le R a déjà été consommé)
E : GRIS (absent)
T : GRIS (absent)
```

### Cas 2 : Lettre répétée dans le mot secret seulement

**Mot secret :** `BELLE`
**Tentative :** `BARBE`

```
Résultat :
B : VERT (bonne position 0)
A : GRIS (absent)
R : GRIS (absent)
B : GRIS (le B a déjà été consommé en position 0)
E : VERT (bonne position 4)
```

### Cas 3 : Lettres répétées des deux côtés

**Mot secret :** `ALLÉE`
**Tentative :** `LÂCHE`

```
Résultat :
L : JAUNE (présent aux positions 1 et 2 dans ALLÉE)
Â : GRIS (absent)
C : GRIS (absent)
H : GRIS (absent)
E : GRIS (le E a déjà été consommé... non attendez!)
```

*Note : Cet exemple nécessite de gérer les accents, ce qui complexifie encore l'algorithme.*

---

## Note importante

L'algorithme complet du vrai Wordle nécessite des concepts avancés :
- **Listes** : Pour stocker le résultat et les lettres disponibles
- **Manipulation de copies** : Pour ne pas modifier le mot original
- **Méthode `.remove()`** : Pour retirer des éléments d'une liste

Pour l'instant, concentrez-vous sur la version simple des exercices. Une fois que vous maîtriserez les listes (leçon future), vous pourrez implémenter la version complète !

---

## Exercices

### Exercice 1 (Facile)
Exécutez l'algorithme à la main avec :
- Mot secret : `PYTHON`
- Tentative : `PROJET`

### Exercice 2 (Moyen)
Exécutez l'algorithme à la main avec :
- Mot secret : `BELLE`
- Tentative : `BALLE`

### Exercice 3 (Avancé)
Implémentez la fonction `verifier_wordle()` en Python et testez-la avec plusieurs exemples.

### Exercice 4 (Expert)
Modifiez la fonction pour qu'elle affiche les lettres avec des couleurs dans le terminal (utilisez les codes ANSI).

---

## Ressources

- [Wordle officiel](https://www.nytimes.com/games/wordle/index.html)
- Documentation Python : [Listes](https://docs.python.org/fr/3/tutorial/datastructures.html)
- Codes ANSI pour les couleurs en terminal

---

**Créé le :** 2025-11-17
**Auteur :** Cours de Python - Leçon 10
