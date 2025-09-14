# Leçon 2 - Exercice 3: Présentation avec f-string
# Créez des variables pour un prénom, un nom, et un âge. 
# Utilisez une f-string pour afficher une phrase de présentation complète.

# Définir les variables
prenom = "Lucas"
nom = "Martin"
age = 16

# Afficher la présentation avec une f-string
print(f"Je m'appelle {prenom} {nom} et j'ai {age} ans.")

# Version alternative avec input utilisateur
print("\n--- Version interactive ---")
prenom_utilisateur = input("Entrez votre prénom : ")
nom_utilisateur = input("Entrez votre nom : ")
age_utilisateur = int(input("Entrez votre âge : "))

print(f"Je m'appelle {prenom_utilisateur} {nom_utilisateur} et j'ai {age_utilisateur} ans.")