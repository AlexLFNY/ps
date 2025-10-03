# Leçon 3 - Exercice 5: Calculateur de pourboire NYC
# Créez une fonction calculer_pourboire_nyc(montant_addition, qualite_service) 
# où la qualité peut être "excellent" (25%), "bon" (20%), "moyen" (15%).

def calculer_pourboire_nyc(montant_addition, qualite_service):
    if qualite_service == "excellent":
        pourboire = montant_addition * 0.25
    elif qualite_service == "bon":
        pourboire = montant_addition * 0.20
    elif qualite_service == "moyen":
        pourboire = montant_addition * 0.15
    else:
        return "Erreur : qualité de service non reconnue. Utilisez 'excellent', 'bon', ou 'moyen'."

    total = montant_addition + pourboire
    return f"Pourboire : {pourboire}$ - Total à payer : {total}$"

# Tests de la fonction
print("=== Tests de la fonction ===")
print(calculer_pourboire_nyc(50, "bon"))
print(calculer_pourboire_nyc(75, "excellent"))
print(calculer_pourboire_nyc(30, "moyen"))
print(calculer_pourboire_nyc(40, "parfait"))  # Test d'erreur

# Version interactive
print("\n=== Version interactive ===")
try:
    addition = float(input("Entrez le montant de l'addition en $ : "))
    print("Qualité du service : 'excellent' (25%), 'bon' (20%), 'moyen' (15%)")
    service = input("Entrez la qualité du service : ").lower()
    
    resultat = calculer_pourboire_nyc(addition, service)
    print(f"\n{resultat}")
    
except ValueError:
    print("Erreur : Veuillez entrer un montant valide.")