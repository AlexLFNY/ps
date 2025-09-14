# Leçon 2 - Exercice 4: Calculateur de Notes
# Créez un programme qui demande une note sur 20, calcule le pourcentage correspondant, 
# et affiche la mention obtenue selon le système français.

# Demander la note sur 20
note_str = input("Entrez votre note sur 20 : ")
note = float(note_str)

# Calculer le pourcentage
pourcentage = (note / 20) * 100

# Déterminer la mention selon le système français
if note >= 16:
    mention = "Très Bien"
elif note >= 14:
    mention = "Bien"
elif note >= 12:
    mention = "Assez Bien"
elif note >= 10:
    mention = "Passable"
else:
    mention = "Insuffisant"

# Afficher les résultats
print(f"Votre note : {note}/20 ({pourcentage}%)")
print(f"Mention : {mention}")