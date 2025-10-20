// Lesson Registry - Central configuration for all lessons and periods
// Add new lessons here to automatically include them in the application

export const periods = [
    {
        id: 1,
        name: "Première Période",
        description: "Les fondamentaux de Python",
        color: "#667eea",
        lessons: [
            {
                id: 1,
                number: 1,
                title: "Variables et Types",
                subtitle: "Les bases de Python",
                description: "Apprenez à créer et utiliser des variables, découvrez les types de données fondamentaux",
                module: () => import('./lesson1.js'),
                dataKey: 'lesson1Data',
                concepts: ['intro', 'variables', 'types', 'input_output', 'exercises']
            },
            {
                id: 2,
                number: 2,
                title: "Opérations et Conditions",
                subtitle: "Calculs et décisions",
                description: "Maîtrisez les opérations arithmétiques et les structures conditionnelles",
                module: () => import('./lesson2.js'),
                dataKey: 'lesson2Data',
                concepts: ['operations', 'conditions', 'logical_operators', 'exercises']
            },
            {
                id: 3,
                number: 3,
                title: "Les Fonctions",
                subtitle: "Organiser votre code",
                description: "Créez des fonctions pour structurer et réutiliser votre code efficacement",
                module: () => import('./lesson3.js'),
                dataKey: 'lesson3Data',
                concepts: ['functions_intro', 'parameters', 'return_values', 'exercises']
            },
            {
                id: 4,
                number: 4,
                title: "Les Boucles",
                subtitle: "Répéter des actions",
                description: "Maîtrisez les boucles while pour automatiser les tâches répétitives",
                module: () => import('./lesson4.js'),
                dataKey: 'lesson4Data',
                concepts: ['video_tutorial', 'intro', 'while_basics', 'loop_anatomy', 'infinite_loop', 'interactive_menu', 'validation', 'exercises']
            },
            {
                id: 5,
                number: 5,
                title: "Le Jeu de Nim",
                subtitle: "Projet pratique",
                description: "Créez votre premier jeu : le Jeu de Nim, un jeu de stratégie",
                module: () => import('./lesson5.js'),
                dataKey: 'lesson5Data',
                concepts: ['game_intro', 'game_demo', 'project_structure', 'exercises']
            }
        ]
    },
    {
        id: 2,
        name: "Deuxième Période",
        description: "Structures de données et manipulation",
        color: "#f093fb",
        lessons: [
            {
                id: 6,
                number: 1,
                title: "Les Chaînes de Caractères",
                subtitle: "Manipuler du texte",
                description: "Découvrez len(), slicing, et les méthodes de strings pour traiter du texte",
                module: () => import('./lesson6.js'),
                dataKey: 'lesson6Data',
                concepts: ['intro', 'len_indexing', 'slicing', 'in_operator', 'for_loop', 'methods', 'exercises', 'exercises_part2']
            }
            // Future lessons will be added here
        ]
    }
];

// Backward compatibility - flatten all lessons
export const lessonRegistry = periods.flatMap(period => period.lessons);

// Helper functions for lesson management
export function getLessonById(id) {
    return lessonRegistry.find(lesson => lesson.id === id);
}

export function getAllLessons() {
    return lessonRegistry;
}

export function getNextLesson(currentId) {
    const currentIndex = lessonRegistry.findIndex(lesson => lesson.id === currentId);
    return currentIndex < lessonRegistry.length - 1 ? lessonRegistry[currentIndex + 1] : null;
}

export function getPreviousLesson(currentId) {
    const currentIndex = lessonRegistry.findIndex(lesson => lesson.id === currentId);
    return currentIndex > 0 ? lessonRegistry[currentIndex - 1] : null;
}

// New helper functions for period management
export function getAllPeriods() {
    return periods;
}

export function getPeriodById(id) {
    return periods.find(period => period.id === id);
}

export function getLessonsByPeriod(periodId) {
    const period = getPeriodById(periodId);
    return period ? period.lessons : [];
}
