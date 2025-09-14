# Leçon 2 - Exercice 5: Contrôle d'accès parc d'attraction
# Demandez l'âge d'un visiteur et affichez les règles d'accès selon l'âge.

# Demander l'âge du visiteur
age_str = input("Quel est l'âge du visiteur ? ")
age = int(age_str)

# Déterminer les règles d'accès selon l'âge
if age < 5:
    message = "Accès interdit"
elif age >= 5 and age <= 12:
    message = "Accès avec accompagnant obligatoire"
else:  # age > 12
    message = "Accès libre"

# Afficher le résultat
print(message)