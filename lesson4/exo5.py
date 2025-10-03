# Leçon 4 - Exercice 5: Conjecture de Collatz
# Partant d'un nombre, si il est pair on le divise par 2,
# si il est impair on le multiplie par 3 et on ajoute 1.
# On répète jusqu'à atteindre 1.

nombre = int(input("Entrez un nombre de départ : "))
etapes = 0

print(f"Séquence de Collatz pour {nombre} :")
print(nombre, end="")

while nombre != 1:
    if nombre % 2 == 0:
        nombre = nombre // 2
    else:
        nombre = nombre * 3 + 1
    print(f" → {nombre}", end="")
    etapes += 1

print(f"\n\nNombre d'étapes : {etapes}")
