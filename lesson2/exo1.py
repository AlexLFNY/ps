# Leçon 2 - Exercice 1: Périmètre d'un rectangle
# Demandez à l'utilisateur la longueur et la largeur d'un rectangle en mètres. 
# Calculez et affichez le périmètre avec la formule : périmètre = 2 × (longueur + largeur).

# Demander la longueur du rectangle
longueur_str = input("Entrez la longueur du rectangle (en mètres) : ")
longueur = float(longueur_str)

# Demander la largeur du rectangle
largeur_str = input("Entrez la largeur du rectangle (en mètres) : ")
largeur = float(largeur_str)

# Calculer le périmètre
perimetre = 2 * (longueur + largeur)

# Afficher le résultat
print(f"Le périmètre du rectangle est de {perimetre} mètres.")