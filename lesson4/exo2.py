# Leçon 4 - Exercice 2: Table de Multiplication
# Demandez un nombre à l'utilisateur. Utilisez une boucle while pour afficher
# sa table de multiplication de 1 à 10.

nombre = int(input("Entrez un nombre : "))

i = 1
while i <= 10:
    resultat = nombre * i
    print(f"{nombre} x {i} = {resultat}")
    i += 1
