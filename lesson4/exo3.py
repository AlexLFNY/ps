# Leçon 4 - Exercice 3: Calculateur de Somme
# Demandez des nombres à l'utilisateur les uns après les autres.
# Chaque nombre est ajouté à une somme totale. La boucle s'arrête quand
# l'utilisateur entre 0. Affichez la somme finale.

somme = 0
nombre = 1

while nombre != 0:
    nombre = int(input("Entrez un nombre (0 pour arrêter) : "))
    if nombre != 0:
        somme += nombre

print(f"Somme totale : {somme}")
