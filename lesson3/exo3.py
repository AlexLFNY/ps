# Leçon 3 - Exercice 3: Calculateur de TTC
# Créez une fonction calculer_ttc(prix_ht, taux_tva=0.20) qui prend le prix hors taxe 
# et renvoie le prix TTC avec un message formaté.

def calculer_ttc(prix_ht, taux_tva=0.20):
    """
    Calcule le prix TTC à partir du prix hors taxe.
    
    Paramètres:
        prix_ht (float): Prix hors taxe
        taux_tva (float): Taux de TVA (par défaut 0.20 = 20%)
    
    Retourne:
        str: Message formaté avec le prix TTC
    """
    prix_ttc = prix_ht * (1 + taux_tva)
    return f"Prix HT: {prix_ht}€ → Prix TTC: {prix_ttc:.2f}€"

# Tests de la fonction
print(calculer_ttc(100))  # Avec TVA par défaut (20%)
print(calculer_ttc(50, 0.10))  # Avec TVA à 10%
print(calculer_ttc(75, 0.055))  # Avec TVA à 5.5%

# Version interactive
print("\n--- Version interactive ---")
prix = float(input("Entrez le prix hors taxe : "))
choix = input("Voulez-vous utiliser la TVA par défaut (20%) ? (o/n) : ")

if choix.lower() == 'n':
    tva = float(input("Entrez le taux de TVA (ex: 0.20 pour 20%) : "))
    resultat = calculer_ttc(prix, tva)
else:
    resultat = calculer_ttc(prix)

print(resultat)