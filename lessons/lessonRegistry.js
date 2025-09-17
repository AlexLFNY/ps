// Lesson Registry - Central configuration for all lessons
// Add new lessons here to automatically include them in the application

export const lessonRegistry = [
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
    }
];

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