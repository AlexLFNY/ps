"""
Exercice 1 : Jeu de Nim - Ordinateur vs Joueur (mode dummy)

Objectif : Créer un jeu de Nim où le joueur affronte l'ordinateur.
L'ordinateur joue de manière aléatoire (mode dummy).

Règles :
- On commence avec 20 allumettes
- Chaque joueur retire 1, 2 ou 3 allumettes à tour de rôle
- Le joueur qui prend la dernière allumette a PERDU

Structure suggérée du code :
1. Importer le module random
2. Créer une variable pour le nombre d'allumettes (20 au départ)
3. Créer une boucle qui continue tant qu'il reste des allumettes
4. À chaque tour :
   - Afficher le nombre d'allumettes restantes
   - Tour du joueur : demander combien retirer (1, 2 ou 3)
   - Vérifier que le choix est valide
   - Retirer les allumettes
   - Vérifier si le joueur a perdu (plus d'allumettes)
   - Tour de l'ordinateur : choisir aléatoirement 1, 2 ou 3
   - Vérifier que le choix ne dépasse pas les allumettes restantes
   - Retirer les allumettes
   - Vérifier si l'ordinateur a perdu
5. Annoncer le gagnant

Conseils :
- Utilisez random.randint(1, 3) pour le choix de l'ordinateur
- Utilisez min() pour limiter le choix de l'ordinateur aux allumettes restantes
- Pensez à convertir l'input() en int()
- Gérez les erreurs (si l'utilisateur entre autre chose qu'un nombre)
"""

# À toi de jouer ! Écris ton code ci-dessous :

import random

# Nombre initial d'allumettes
allumettes = 20

# Boucle principale du jeu
while allumettes > 0:
    # TODO : Afficher le nombre d'allumettes restantes

    # TODO : Tour du joueur
    #   - Demander combien d'allumettes retirer
    #   - Vérifier que c'est entre 1 et 3
    #   - Vérifier que ça ne dépasse pas le nombre d'allumettes restantes
    #   - Retirer les allumettes

    # TODO : Vérifier si le joueur a perdu (allumettes == 0)

    # TODO : Tour de l'ordinateur
    #   - Choisir aléatoirement entre 1, 2 et 3
    #   - Limiter au nombre d'allumettes restantes
    #   - Afficher le choix
    #   - Retirer les allumettes

    # TODO : Vérifier si l'ordinateur a perdu (allumettes == 0)

    pass  # Remplace ce pass par ton code

# TODO : Annoncer le gagnant final
