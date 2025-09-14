# Leçon 1 - Exercice 4: Distance d'un éclair
# Calculez la distance d'un éclair en fonction du délai entre l'éclair et le tonnerre.
# Formule: distance (en mètres) = délai (en secondes) × 343 (vitesse du son en m/s)

# Demander le délai entre l'éclair et le tonnerre
delai_str = input("Combien de secondes entre l'éclair et le tonnerre ? ")

# Convertir en nombre décimal
delai = float(delai_str)

# Vitesse du son en m/s
vitesse_son = 343

# Calculer la distance en mètres
distance_metres = delai * vitesse_son

# Convertir en kilomètres
distance_km = distance_metres / 1000

# Afficher les résultats
print(f"Délai observé : {delai} secondes")
print(f"Distance de l'éclair : {distance_metres} mètres")
print(f"Soit environ : {distance_km:.2f} kilomètres")