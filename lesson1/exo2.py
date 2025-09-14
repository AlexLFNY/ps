# Leçon 1 - Exercice 2: Age
# Demandez l'âge de l'utilisateur et affichez son âge dans 10 ans.

# Demander l'âge à l'utilisateur
age_str = input("Quel est votre âge ? ")

# Convertir en nombre entier
age = int(age_str)

# Calculer l'âge dans 10 ans
age_futur = age + 10

# Afficher le résultat
print(f"Vous avez actuellement {age} ans.")
print(f"Dans 10 ans, vous aurez {age_futur} ans !")