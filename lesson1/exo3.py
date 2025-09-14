# Leçon 1 - Exercice 3: Calculateur de TTC
# Demandez un prix hors taxe et calculez le prix TTC (TVA = 20%).

# Demander le prix hors taxe
prix_ht_str = input("Entrez le prix hors taxe en euros : ")

# Convertir en nombre décimal
prix_ht = float(prix_ht_str)

# Définir le taux de TVA (20%)
taux_tva = 0.20

# Calculer le prix TTC
prix_ttc = prix_ht * (1 + taux_tva)

# Afficher les résultats
print(f"Prix hors taxe : {prix_ht}€")
print(f"TVA (20%) : {prix_ht * taux_tva}€")
print(f"Prix TTC : {prix_ttc}€")