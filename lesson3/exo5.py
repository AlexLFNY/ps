# Leçon 3 - Exercice 5: Calculateur de pourboire NYC
# Créez une fonction calculer_pourboire_nyc(montant_addition, qualite_service) 
# où la qualité peut être "excellent" (25%), "bon" (20%), "moyen" (15%).

def calculer_pourboire_nyc(montant_addition, qualite_service):
    """
    Calcule le pourboire et le total à payer selon la qualité du service.
    
    Paramètres:
        montant_addition (float): Montant de l'addition
        qualite_service (str): "excellent", "bon", ou "moyen"
    
    Retourne:
        str: Message avec le pourboire et le total à payer
    """
    # Définir les taux de pourboire
    taux = {
        "excellent": 0.25,  # 25%
        "bon": 0.20,        # 20%
        "moyen": 0.15       # 15%
    }
    
    # Vérifier si la qualité de service est reconnue
    if qualite_service not in taux:
        return "Erreur : qualité de service non reconnue. Utilisez 'excellent', 'bon', ou 'moyen'."
    
    # Calculer le pourboire et le total
    pourboire = montant_addition * taux[qualite_service]
    total = montant_addition + pourboire
    
    return f"Pourboire : {pourboire:.2f}$ - Total à payer : {total:.2f}$"

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