# Leçon 3 - Exercice 4: Analyseur de notes
# Créez une fonction analyser_note(note) qui retourne une appréciation 
# selon la note sur 20.

def analyser_note(note):
    if note >= 16:
        return "Excellent"
    elif note >= 14:
        return "Bien"
    elif note >= 12:
        return "Assez bien"
    elif note >= 10:
        return "Passable"
    else:
        return "Insuffisant"

# Tests de la fonction
print(f"Note 18/20 : {analyser_note(18)}")
print(f"Note 15/20 : {analyser_note(15)}")
print(f"Note 12/20 : {analyser_note(12)}")
print(f"Note 8/20 : {analyser_note(8)}")
print(f"Note 19.5/20 : {analyser_note(19.5)}")

# Version interactive avec affichage complet
print("\n--- Version interactive ---")
note_utilisateur = float(input("Entrez votre note sur 20 : "))
appreciation = analyser_note(note_utilisateur)
pourcentage = (note_utilisateur / 20) * 100

print(f"Votre note : {note_utilisateur}/20 ({pourcentage}%)")
print(f"Appréciation : {appreciation}")