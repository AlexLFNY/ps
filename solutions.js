// Solutions for Python Lessons 1 & 2 Exercises
// Protected by simple code verification

const exerciseSolutions = {
    // Lesson 1 Solutions
    'dialogue-facile': {
        title: 'Solution: Dialogue',
        code: `# Solution - Dialogue
prenom = input("Quel est votre prénom ? ")
print("Bonjour", prenom, ", ravi de vous rencontrer !")`,
        explanation: 'On utilise input() pour demander le prénom, puis print() pour afficher un message personnalisé en utilisant la variable.'
    },
    
    'age-facile': {
        title: 'Solution: Calcul d\'âge',
        code: `# Solution - Calcul d'âge
annee_naissance = int(input("En quelle année êtes-vous né ? "))
age = 2024 - annee_naissance
print("Vous avez environ", age, "ans.")`,
        explanation: 'On convertit l\'année de naissance en entier avec int(), puis on soustrait de 2024 pour obtenir l\'âge approximatif.'
    },
    
    'ttc-avance': {
        title: 'Solution: Calculateur de TTC',
        code: `# Solution - Calculateur de TTC
prix_ht = float(input("Prix HT de l'article : "))
prix_ttc = prix_ht * 1.2
print("Le prix TTC est de :", prix_ttc, "euros")`,
        explanation: 'On convertit le prix HT en float(), puis on multiplie par 1.2 (équivalent à ajouter 20% de TVA).'
    },
    
    'eclair-avance': {
        title: 'Solution: Distance d\'un éclair',
        code: `# Solution - Distance d'un éclair
duree = float(input("Combien de secondes entre l'éclair et le tonnerre ? "))
distance = duree * 343
print("L'éclair se trouve à environ", distance, "mètres.")`,
        explanation: 'La vitesse du son est de 343 m/s. On multiplie la durée par cette vitesse pour obtenir la distance.'
    },
    
    // Lesson 2 Solutions
    'perimetre-rectangle': {
        title: 'Solution: Périmètre d\'un rectangle',
        code: `# Solution - Périmètre d'un rectangle
longueur = float(input("Entrez la longueur du rectangle (en mètres) : "))
largeur = float(input("Entrez la largeur du rectangle (en mètres) : "))

perimetre = 2 * (longueur + largeur)

print(f"Le périmètre du rectangle est de {perimetre} mètres.")`,
        explanation: 'La formule du périmètre d\'un rectangle est P = 2 × (longueur + largeur). N\'oubliez pas les parenthèses pour respecter l\'ordre des opérations !'
    },
    
    'surface-rectangle': {
        title: 'Solution: Surface d\'un rectangle',
        code: `# Solution - Surface d'un rectangle
longueur = float(input("Entrez la longueur du rectangle (en mètres) : "))
largeur = float(input("Entrez la largeur du rectangle (en mètres) : "))

surface = longueur * largeur

print(f"La surface du rectangle est de {surface} m².")`,
        explanation: 'La surface (ou aire) d\'un rectangle se calcule simplement : longueur × largeur. L\'unité est en mètres carrés (m²).'
    },
    
    'presentation-fstring': {
        title: 'Solution: Présentation avec f-string',
        code: `# Solution - Présentation avec f-string
prenom = "Lucas"
nom = "Martin" 
age = 16

message = f"Je m'appelle {prenom} {nom} et j'ai {age} ans."
print(message)`,
        explanation: 'Les f-strings permettent d\'insérer facilement des variables dans une chaîne en les plaçant entre accolades {} après le préfixe f.'
    },
    
    'calculateur-notes': {
        title: 'Solution: Calculateur de Notes',
        code: `# Solution - Calculateur de Notes
note = float(input("Entrez votre note sur 20 : "))

pourcentage = (note / 20) * 100

print(f"Votre note : {note}/20 ({pourcentage}%)")

if note >= 16:
    print("Mention : Très Bien")
elif note >= 14:
    print("Mention : Bien")
elif note >= 12:
    print("Mention : Assez Bien")
elif note >= 10:
    print("Mention : Passable")
else:
    print("Mention : Insuffisant")`,
        explanation: 'Le pourcentage se calcule en divisant par 20 puis multipliant par 100. Les conditions sont testées de la plus haute à la plus basse.'
    },
    
    'parc-attraction': {
        title: 'Solution: Contrôle d\'accès parc d\'attraction',
        code: `# Solution - Contrôle d'accès parc d'attraction
age = int(input("Quel est l'âge du visiteur ? "))

if age < 5:
    print("Accès interdit")
elif age >= 5 and age <= 12:
    print("Accès avec accompagnant obligatoire")
else:
    print("Accès libre")`,
        explanation: 'On utilise les opérateurs de comparaison et l\'opérateur logique "and" pour vérifier les intervalles d\'âge.'
    },
    
    'aire-cercle': {
        title: 'Solution: Calculateur d\'aire de cercle',
        code: `# Solution - Calculateur d'aire de cercle
pi = 3.14159
rayon = float(input("Entrez le rayon du cercle (en cm) : "))

aire = pi * rayon ** 2

print(f"L'aire du cercle est de {aire} cm²")

if aire < 100:
    print("C'est un petit cercle.")
elif aire <= 500:
    print("C'est un cercle de taille moyenne.")
else:
    print("C'est un grand cercle.")`,
        explanation: 'L\'aire d\'un cercle est π × r². On utilise ** 2 pour élever au carré et des conditions pour classer selon la taille.'
    },
    
    'moyenne-ponderee': {
        title: 'Solution: Calculateur de Moyenne Pondérée',
        code: `# Solution - Calculateur de Moyenne Pondérée
print("Entrez les notes et coefficients :")
note1 = float(input("Note Maths : "))
coef1 = float(input("Coefficient Maths : "))

note2 = float(input("Note Français : "))
coef2 = float(input("Coefficient Français : "))

note3 = float(input("Note Anglais : "))
coef3 = float(input("Coefficient Anglais : "))

# Calcul de la moyenne pondérée
somme_ponderee = (note1 * coef1) + (note2 * coef2) + (note3 * coef3)
somme_coefficients = coef1 + coef2 + coef3
moyenne = somme_ponderee / somme_coefficients

print(f"Moyenne pondérée : {moyenne:.2f}/20")

if moyenne >= 10:
    print("Résultat : Passe au niveau suivant !")
else:
    print("Résultat : Doit redoubler.")`,
        explanation: 'La moyenne pondérée = (somme des notes × leurs coefficients) / somme des coefficients. On utilise :.2f pour arrondir à 2 décimales.'
    },
    
    'volume-cylindre': {
        title: 'Solution: Calculateur de Volume et Surface de Cylindre',
        code: `# Solution - Calculateur de Volume et Surface de Cylindre
pi = 3.14159

rayon = float(input("Rayon du cylindre (cm) : "))
hauteur = float(input("Hauteur du cylindre (cm) : "))

# Calcul du volume : V = π × r² × h
volume = pi * rayon ** 2 * hauteur

# Calcul de la surface totale : S = 2π × r × (r + h)
surface_totale = 2 * pi * rayon * (rayon + hauteur)

print(f"Volume : {volume:.2f} cm³")
print(f"Surface totale : {surface_totale:.2f} cm²")

# Classification selon le volume
if volume < 1000:
    print("Catégorie : Petit cylindre")
elif volume <= 5000:
    print("Catégorie : Cylindre moyen")
else:
    print("Catégorie : Grand cylindre")`,
        explanation: 'Volume = π×r²×h et Surface totale = 2π×r×(r+h). On organise les calculs étape par étape pour plus de clarté.'
    },
    
    'trajets-scolaires': {
        title: 'Solution: Calculateur de Trajets Scolaires',
        code: `# Solution - Calculateur de Trajets Scolaires
distance_aller = float(input("Distance domicile-lycée (km) : "))
jours_semaine = int(input("Jours de cours/semaine : "))
prix_essence = float(input("Prix essence (€/L) : "))
consommation = float(input("Consommation (L/100km) : "))

# Calculs
distance_jour = distance_aller * 2  # Aller-retour
litres_jour = (distance_jour * consommation) / 100
cout_jour = litres_jour * prix_essence
cout_semaine = cout_jour * jours_semaine
cout_mois = cout_semaine * 4

print(f"Coût quotidien : {cout_jour:.2f}€")
print(f"Coût hebdomadaire : {cout_semaine:.2f}€")
print(f"Coût mensuel : {cout_mois:.2f}€")

# Conseils selon le coût mensuel
if cout_mois < 50:
    print("Conseil : Coût raisonnable.")
elif cout_mois < 100:
    print("Conseil : Coût modéré - Surveillez votre budget.")
else:
    print("Conseil : Coût élevé - Envisagez les transports en commun !")`,
        explanation: 'On calcule d\'abord la distance quotidienne (aller-retour), puis la consommation, et enfin les coûts sur différentes périodes. Les conseils dépendent du coût mensuel.'
    }
};

// Simple code verification system
const accessCode = "prof2024";

function checkAccessCode() {
    const userCode = prompt("Entrez le code d'accès pour voir les solutions :");
    return userCode === accessCode;
}

function loadCodeToIDE(code, closeModal = true) {
    // Function to load code into the Python IDE
    console.log('Loading code to IDE:', code);
    
    // Close any existing solution modals
    if (closeModal) {
        const existingModals = document.querySelectorAll('[data-solution-modal]');
        existingModals.forEach(modal => modal.remove());
    }
    
    // Load code into the IDE console
    if (typeof loadCodeIntoConsole === 'function') {
        loadCodeIntoConsole(code);
    } else if (typeof window.loadCodeIntoConsole === 'function') {
        window.loadCodeIntoConsole(code);
    } else if (typeof loadCodeIntoEditor === 'function') {
        loadCodeIntoEditor(code);
    } else if (typeof window.loadCodeIntoEditor === 'function') {
        window.loadCodeIntoEditor(code);
    } else {
        console.warn('IDE loading function not available');
        alert('Fonction de chargement IDE non disponible. Veuillez copier le code manuellement.');
    }
}

// Make function available globally
window.loadCodeToIDE = loadCodeToIDE;

function showSolution(exerciseId) {
    // Access code check removed - direct access to solutions
    
    const solution = exerciseSolutions[exerciseId];
    if (!solution) {
        alert("Solution non trouvée !");
        return;
    }
    
    // Create modal for solution display
    const modal = document.createElement('div');
    modal.setAttribute('data-solution-modal', 'true');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10000;
    `;
    
    const content = document.createElement('div');
    content.style.cssText = `
        background: linear-gradient(135deg, #1a1a2e, #16213e);
        border: 2px solid rgba(255, 215, 0, 0.3);
        border-radius: 15px;
        padding: 30px;
        max-width: 80%;
        max-height: 80%;
        overflow-y: auto;
        color: white;
        font-family: 'Inter', sans-serif;
    `;
    
    content.innerHTML = `
        <h3 style="color: #ffd700; margin-bottom: 20px; font-size: 1.4rem;">${solution.title}</h3>
        <div style="background: rgba(0,0,0,0.3); border-radius: 8px; padding: 20px; margin-bottom: 20px;">
            <pre style="color: #4caf50; font-family: 'JetBrains Mono', monospace; white-space: pre-wrap; margin: 0; line-height: 1.4;">${solution.code}</pre>
        </div>
        <div style="background: rgba(255, 215, 0, 0.1); border: 2px solid rgba(255, 215, 0, 0.3); border-radius: 8px; padding: 15px; margin-bottom: 20px;">
            <h4 style="color: #ffd700; margin-top: 0;">💡 Explication :</h4>
            <p style="margin-bottom: 0; line-height: 1.5;">${solution.explanation}</p>
        </div>
        <div style="display: flex; gap: 10px; flex-wrap: wrap;">
            <button id="loadToIdeBtn" style="
                background: rgba(76, 175, 80, 0.2);
                border: 2px solid rgba(76, 175, 80, 0.4);
                border-radius: 8px;
                padding: 10px 20px;
                color: #4caf50;
                cursor: pointer;
                font-size: 1rem;
                font-weight: 600;
                margin-right: 10px;
            ">🐍 Charger dans l'IDE</button>
            <button id="closeModalBtn" style="
                background: rgba(255, 215, 0, 0.2);
                border: 2px solid rgba(255, 215, 0, 0.4);
                border-radius: 8px;
                padding: 10px 20px;
                color: #ffd700;
                cursor: pointer;
                font-size: 1rem;
                font-weight: 600;
            ">Fermer</button>
        </div>
    `;
    
    modal.appendChild(content);
    document.body.appendChild(modal);
    
    // Add event listeners for buttons
    const loadBtn = content.querySelector('#loadToIdeBtn');
    const closeBtn = content.querySelector('#closeModalBtn');
    
    loadBtn.addEventListener('click', () => {
        loadCodeToIDE(solution.code, true);
    });
    
    closeBtn.addEventListener('click', () => {
        modal.remove();
    });
    
    // Close modal when clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    });
}

// Alternative integrated solution display (like hints)
function showIntegratedSolution(exerciseId) {
    // Access code check removed - direct access to solutions
    
    const solution = exerciseSolutions[exerciseId];
    if (!solution) {
        alert("Solution non trouvée !");
        return;
    }
    
    // Find or create solution content div
    const targetContainer = event.target.closest('.exercise-card');
    let solutionDiv = targetContainer.querySelector('.solution-content');
    
    if (solutionDiv) {
        // Toggle visibility if already exists
        if (solutionDiv.style.display === 'none') {
            solutionDiv.style.display = 'block';
        } else {
            solutionDiv.style.display = 'none';
        }
        return;
    }
    
    // Create new solution div
    solutionDiv = document.createElement('div');
    solutionDiv.className = 'solution-content';
    solutionDiv.style.cssText = `
        display: block;
        background: rgba(76, 175, 80, 0.1);
        border: 2px solid rgba(76, 175, 80, 0.3);
        border-radius: 12px;
        padding: 20px;
        margin-top: 15px;
        color: #4caf50;
        font-style: normal;
        animation: slideDown 0.3s ease;
    `;
    
    solutionDiv.innerHTML = `
        <h4 style="color: #4caf50; margin-top: 0; display: flex; align-items: center; gap: 10px;">
            🔓 <strong>Solution :</strong>
            <button id="loadBtn-${exerciseId}" style="
                background: rgba(76, 175, 80, 0.2);
                border: 1px solid rgba(76, 175, 80, 0.4);
                border-radius: 6px;
                padding: 4px 8px;
                color: #4caf50;
                cursor: pointer;
                font-size: 0.8rem;
                font-weight: 600;
                margin-left: auto;
            ">🐍 Charger dans l'IDE</button>
        </h4>
        <div style="background: rgba(0,0,0,0.3); border-radius: 8px; padding: 15px; margin-bottom: 15px;">
            <pre style="color: #4caf50; font-family: 'JetBrains Mono', monospace; white-space: pre-wrap; margin: 0; line-height: 1.4; font-size: 0.9rem;">${solution.code}</pre>
        </div>
        <div style="background: rgba(255, 215, 0, 0.1); border: 1px solid rgba(255, 215, 0, 0.3); border-radius: 8px; padding: 12px;">
            <strong style="color: #ffd700;">💡 Explication :</strong>
            <p style="margin: 5px 0 0 0; line-height: 1.4; font-size: 0.9rem;">${solution.explanation}</p>
        </div>
    `;
    
    // Add event listener to the load button after creating the HTML
    const loadBtn = solutionDiv.querySelector(`#loadBtn-${exerciseId}`);
    if (loadBtn) {
        loadBtn.addEventListener('click', () => {
            loadCodeToIDE(solution.code);
        });
    }
    
    // Insert after the buttons container
    const buttonContainer = targetContainer.querySelector('[style*="text-align: center"]');
    if (buttonContainer && buttonContainer.nextElementSibling) {
        buttonContainer.parentNode.insertBefore(solutionDiv, buttonContainer.nextElementSibling);
    } else {
        targetContainer.appendChild(solutionDiv);
    }
}

// Make functions available globally
window.showSolution = showSolution;
window.showIntegratedSolution = showIntegratedSolution;
window.checkAccessCode = checkAccessCode;