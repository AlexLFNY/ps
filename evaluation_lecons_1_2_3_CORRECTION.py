# ==========================================
# CORRECTION - ÉVALUATION LEÇONS 1, 2 et 3
# Variables, Opérations, Conditions et Fonctions
# Durée : 45 minutes
# Note : /20
# ==========================================

# ==========================================
# PARTIE 1 : QUIZ (4 points - 0.5 point par question)
# ==========================================

# Q1. Quel est le type de la variable : age = 15
# Réponse : int (entier)

# Q2. Que fait la fonction int() ?
# Réponse : Convertit une valeur en nombre entier

# Q3. Quelle est la différence entre = et == ?
# Réponse : = assigne une valeur, == compare deux valeurs

# Q4. Quel mot-clé utilise-t-on pour définir une fonction ?
# Réponse : def

# Q5. Comment récupérer une valeur d'une fonction ?
# Réponse : Avec le mot-clé return

# Q6. Que fait l'instruction elif ?
# Réponse : Teste une autre condition si la première est fausse

# Q7. Comment afficher "Bonjour" à l'écran ?
# Réponse : print("Bonjour")

# Q8. Que signifie f-string (exemple : f"Bonjour {nom}") ?
# Réponse : Permet d'insérer des variables dans une chaîne de caractères


# ==========================================
# PARTIE 2 : LECTURE DE CODE (3 points - 1.5 point par exercice)
# ==========================================

# Exercice 2.1 (1.5 point)
x = 5
y = 10
z = x + y * 2
print(z)

# Quel est le résultat affiché ?
# Réponse : 25
# Explication : 10 * 2 = 20, puis 5 + 20 = 25


# Exercice 2.2 (1.5 point)
def mystere(n):
    if n >= 18:
        return "Majeur"
    else:
        return "Mineur"

resultat = mystere(16)
print(resultat)

# Quel est le résultat affiché ?
# Réponse : Mineur
# Explication : 16 < 18 donc la fonction retourne "Mineur"


# ==========================================
# PARTIE 3 : DÉBOGAGE (3 points - 1.5 point par exercice)
# ==========================================

# Exercice 3.1 (1.5 point) - Erreur de syntaxe
# Erreur : Il manque les deux points (:) après la définition de fonction

# Code corrigé :
def dire_bonjour(nom):
    print(f"Bonjour {nom}")


# Exercice 3.2 (1.5 point) - Erreur de logique
# Erreur : La condition teste si le nombre est impair (== 1) alors qu'on veut tester s'il est pair

# Code corrigé :
nombre = 8
if nombre % 2 == 0:
    print("Pair")
else:
    print("Impair")


# ==========================================
# PARTIE 4 : EXERCICES À CODER (10 points)
# ==========================================

# Exercice 4.1 (3 points) - Variables et opérations
longueur = 5
largeur = 3
hauteur = 2
volume = longueur * largeur * hauteur
print(f"Le volume est : {volume}")

# Barème :
# - Déclaration des 3 variables : 1 point
# - Calcul du volume : 1 point
# - Affichage avec message : 1 point


# Exercice 4.2 (3 points) - Fonction simple
def double(nombre):
    return nombre * 2

resultat = double(7)
print(resultat)

# Barème :
# - Définition de la fonction avec paramètre : 1 point
# - Return correct (nombre * 2) : 1 point
# - Appel et affichage : 1 point


# Exercice 4.3 (4 points) - Fonction avec condition
def peut_voter(age):
    if age >= 18:
        return True
    else:
        return False

print(peut_voter(15))
print(peut_voter(20))

# Barème :
# - Définition de la fonction avec paramètre : 1 point
# - Condition correcte (age >= 18) : 1 point
# - Return True/False : 1 point
# - Tests des deux âges : 1 point


# ==========================================
# FIN DE LA CORRECTION
# ==========================================
# Barème total :
# Partie 1 (Quiz) : 4 points
# Partie 2 (Lecture) : 3 points
# Partie 3 (Débogage) : 3 points
# Partie 4 (Code) : 10 points
# TOTAL : 20 points
# ==========================================
