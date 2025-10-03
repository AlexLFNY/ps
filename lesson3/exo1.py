# Leçon 3 - Exercice 1: Salutation personnalisée
# Écrivez une fonction saluer(prenom) qui prend un prénom en paramètre 
# et affiche un message de bienvenue personnalisé avec une f-string.

def saluer(prenom):
    print(f"Bonjour {prenom} !")
    print(f"Bienvenue dans notre programme, {prenom} !")

# Tests de la fonction
saluer("Marie")
saluer("Alex")
saluer("Emma")

# Version interactive
print("\n--- Version interactive ---")
nom_utilisateur = input("Entrez votre prénom : ")
saluer(nom_utilisateur)