# Leçon 3 - Exercice 2: Calculateur simple
# Créez une fonction additionner(a, b) qui prend deux nombres 
# et retourne leur somme. Testez-la avec différents nombres.

def additionner(a, b):
    """
    Additionne deux nombres et retourne le résultat.
    
    Paramètres:
        a (float): Premier nombre
        b (float): Deuxième nombre
    
    Retourne:
        float: La somme de a et b
    """
    return a + b

# Tests de la fonction
resultat1 = additionner(5, 3)
print(f"5 + 3 = {resultat1}")

resultat2 = additionner(10, 7)
print(f"10 + 7 = {resultat2}")

resultat3 = additionner(2.5, 3.7)
print(f"2.5 + 3.7 = {resultat3}")

# Version interactive
print("\n--- Version interactive ---")
nombre1 = float(input("Entrez le premier nombre : "))
nombre2 = float(input("Entrez le deuxième nombre : "))
somme = additionner(nombre1, nombre2)
print(f"{nombre1} + {nombre2} = {somme}")