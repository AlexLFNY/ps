# Leçon 4 - Exercice 4: Calcul de Factorielle
# La factorielle de n (notée n!) est le produit de tous les entiers de 1 à n.
# Par exemple, 5! = 1 × 2 × 3 × 4 × 5 = 120.

nombre = int(input("Entrez un nombre entier positif : "))

factorielle = 1
i = 1

while i <= nombre:
    factorielle *= i
    i += 1

print(f"{nombre}! = {factorielle}")
