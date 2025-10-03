# Leçon 4 - Exercice 6: Chercheur de Diviseurs
# Demandez un nombre entier à l'utilisateur. Trouvez et affichez tous ses
# diviseurs (nombres qui le divisent sans reste).

nombre = int(input("Entrez un nombre entier : "))

print(f"Les diviseurs de {nombre} sont :")

diviseur = 1
while diviseur <= nombre:
    if nombre % diviseur == 0:
        print(diviseur, end=" ")
    diviseur += 1

print()
