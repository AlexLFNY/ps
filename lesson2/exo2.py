# Leçon 2 - Exercice 2: Surface d'un rectangle
# Demandez à l'utilisateur la longueur et la largeur d'un rectangle en mètres. 
# Calculez et affichez la surface avec la formule : surface = longueur × largeur.

# Demander la longueur du rectangle
longueur_str = input("Entrez la longueur du rectangle (en mètres) : ")
longueur = float(longueur_str)

# Demander la largeur du rectangle
largeur_str = input("Entrez la largeur du rectangle (en mètres) : ")
largeur = float(largeur_str)

# Calculer la surface
surface = longueur * largeur

# Afficher le résultat
print(f"La surface du rectangle est de {surface} m².")