# Leçon 3 - Exercice Bonus: Convertisseur de température
# Créez deux fonctions pour convertir entre Celsius et Fahrenheit.

def celsius_vers_fahrenheit(celsius):
    fahrenheit = (celsius * 9/5) + 32
    return fahrenheit

def fahrenheit_vers_celsius(fahrenheit):
    celsius = (fahrenheit - 32) * 5/9
    return celsius

# Tests des fonctions
print("=== Tests des conversions ===")
print(f"25°C = {celsius_vers_fahrenheit(25)}°F")
print(f"0°C = {celsius_vers_fahrenheit(0)}°F")
print(f"100°C = {celsius_vers_fahrenheit(100)}°F")

print(f"77°F = {fahrenheit_vers_celsius(77)}°C")
print(f"32°F = {fahrenheit_vers_celsius(32)}°C")
print(f"212°F = {fahrenheit_vers_celsius(212)}°C")

# Version interactive
print("\n=== Convertisseur interactif ===")
choix = input("Conversion (1) C→F ou (2) F→C ? ")

if choix == "1":
    temp_c = float(input("Entrez la température en Celsius : "))
    temp_f = celsius_vers_fahrenheit(temp_c)
    print(f"{temp_c}°C = {temp_f}°F")

elif choix == "2":
    temp_f = float(input("Entrez la température en Fahrenheit : "))
    temp_c = fahrenheit_vers_celsius(temp_f)
    print(f"{temp_f}°F = {temp_c}°C")
    
else:
    print("Choix non valide. Utilisez 1 ou 2.")