"""
===========================================
    MISSION : JEU DE NIM
===========================================

OBJECTIF : Créer un jeu de Nim complet (Ordinateur vs Joueur)

RÈGLES :
- 19 allumettes au départ
- Retirer 1, 2 ou 3 allumettes par tour
- Celui qui prend la dernière perd

===========================================
"""

import random

# ========== FONCTION POUR L'ORDINATEUR ==========
def tour_ordinateur(allumettes_restantes):
    return random.randint(1, min(3, allumettes_restantes))


# ========== TON CODE ICI ==========
# Crée le jeu de Nim en utilisant :
# - Une variable allumettes = 19
# - Une boucle while
# - Des conditions if/elif/else
# - La fonction tour_ordinateur() pour faire jouer l'ordinateur
# - input() pour demander au joueur
# - print() pour afficher

