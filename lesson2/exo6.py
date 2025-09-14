# Leçon 2 - Exercice 6: Calculateur d'aire de cercle
# Créez un programme qui demande le rayon d'un cercle en centimètres,
# calcule son aire et détermine sa taille (petit, moyen, grand).

import math

# Demander le rayon du cercle
rayon_str = input("Entrez le rayon du cercle (en centimètres) : ")
rayon = float(rayon_str)

# Calculer l'aire du cercle (aire = π × rayon²)
# Option 1: Utiliser math.pi pour plus de précision
aire = math.pi * rayon ** 2

# Option 2: Utiliser une valeur approximative de π
# pi = 3.14159
# aire = pi * rayon ** 2

# Classer le cercle selon son aire
if aire < 100:
    taille = "petit cercle"
elif aire <= 500:  # entre 100 et 500 inclus
    taille = "cercle moyen"
else:  # aire > 500
    taille = "grand cercle"

# Afficher les résultats
print(f"Rayon : {rayon} cm")
print(f"Aire : {aire:.2f} cm²")
print(f"Classification : {taille}")