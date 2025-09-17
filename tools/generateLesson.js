#!/usr/bin/env node

/**
 * Lesson Generator Tool
 * 
 * Creates a new lesson using the LESSON_TEMPLATE.js as a base
 * 
 * Usage:
 *   node tools/generateLesson.js --number 4 --title "Listes et Boucles" --subtitle "Structures de données"
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const TEMPLATE_PATH = path.join(__dirname, '..', 'LESSON_TEMPLATE.js');
const LESSONS_DIR = path.join(__dirname, '..', 'lessons');
const REGISTRY_PATH = path.join(LESSONS_DIR, 'lessonRegistry.js');

// Parse command line arguments
function parseArgs() {
    const args = process.argv.slice(2);
    const options = {};
    
    for (let i = 0; i < args.length; i += 2) {
        const key = args[i].replace('--', '');
        const value = args[i + 1];
        options[key] = value;
    }
    
    return options;
}

// Validate required arguments
function validateArgs(options) {
    const required = ['number', 'title'];
    const missing = required.filter(key => !options[key]);
    
    if (missing.length > 0) {
        console.error('❌ Missing required arguments:', missing.join(', '));
        console.log('\nUsage:');
        console.log('  node tools/generateLesson.js --number 4 --title "Listes et Boucles" [--subtitle "Description"]');
        process.exit(1);
    }
    
    // Validate lesson number
    const lessonNumber = parseInt(options.number);
    if (isNaN(lessonNumber) || lessonNumber < 1) {
        console.error('❌ Lesson number must be a positive integer');
        process.exit(1);
    }
    
    return { ...options, number: lessonNumber };
}

// Read and transform template
function generateLessonContent(options) {
    const template = fs.readFileSync(TEMPLATE_PATH, 'utf8');
    const { number, title, subtitle = 'Nouveau concept' } = options;
    
    // Replace template placeholders
    const content = template
        .replace(/\[LESSON_NUMBER\]/g, number)
        .replace(/\[LESSON_TITLE\]/g, title)
        .replace(/\[LESSON_SUBTITLE\]/g, subtitle)
        .replace(/\[CONCEPT_NAME\]/g, title.toLowerCase().replace(/\s+/g, '_'))
        .replace(/\[EMOJI\]/g, '🎯') // Default emoji
        .replace(/\[CONCEPT_TITLE\]/g, title)
        .replace(/\[CONCEPT_SUBTITLE\]/g, subtitle)
        .replace(/\[MAIN_EXPLANATION_TEXT\]/g, `Introduction à ${title.toLowerCase()}.`)
        .replace(/\[HIGHLIGHT_TITLE\]/g, 'Points clés')
        .replace(/\[HIGHLIGHT_CONTENT\]/g, `Les concepts essentiels de ${title.toLowerCase()}.`)
        .replace(/\[ANIMATION_TITLE\]/g, `💡 Concept : ${title}`)
        .replace(/\[EXAMPLE_TITLE\]/g, 'Exemple pratique')
        .replace(/\[EXAMPLE_CONTENT\]/g, `Voici comment utiliser ${title.toLowerCase()} en pratique.`)
        .replace(/\[EXPLANATION_TEXT\]/g, `Explication détaillée des ${title.toLowerCase()}.`)
        .replace(/\[ESCAPED_CODE\]/g, `# Exemple de code\\nprint('Hello ${title}')`)
        .replace(/\[SYNTAX_HIGHLIGHTED_CODE\]/g, `<span class="code-comment"># Exemple de code</span>\n<span class="code-keyword">print</span>(<span class="code-string">'Hello ${title}'</span>)`)
        .replace(/\[KEY_POINTS_TITLE\]/g, 'Points importants')
        .replace(/\[POINT_1\]/g, 'Premier point important')
        .replace(/\[POINT_2\]/g, 'Deuxième point important')
        .replace(/\[POINT_3\]/g, 'Troisième point important')
        .replace(/\[EXERCISE_TITLE\]/g, `Exercice ${title}`)
        .replace(/\[EXERCISE_DESCRIPTION\]/g, `Pratiquez l'utilisation des ${title.toLowerCase()}.`)
        .replace(/\[STEP_1\]/g, 'Première étape')
        .replace(/\[STEP_2\]/g, 'Deuxième étape')
        .replace(/\[STEP_3\]/g, 'Troisième étape')
        .replace(/\[TIP_TITLE\]/g, 'Conseil')
        .replace(/\[TIP_CONTENT\]/g, 'Utilisez cette technique pour mieux comprendre.')
        .replace(/\[HINT_CONTENT\]/g, 'Voici un indice pour vous aider.')
        .replace(/\[LESSON_NUMBER\]_\[EXERCISE_NUMBER\]/g, `${number}_1`);
    
    return content;
}

// Update lesson registry
function updateRegistry(options) {
    const registryContent = fs.readFileSync(REGISTRY_PATH, 'utf8');
    const { number, title, subtitle } = options;
    
    // Find the position to insert the new lesson
    const lines = registryContent.split('\n');
    const exportIndex = lines.findIndex(line => line.includes('export const lessonRegistry'));
    const closingBracketIndex = lines.findIndex((line, index) => 
        index > exportIndex && line.trim() === '];'
    );
    
    // Create new lesson entry
    const newEntry = `    {
        id: ${number},
        number: ${number},
        title: "${title}",
        subtitle: "${subtitle}",
        description: "Apprenez ${title.toLowerCase()} en Python",
        module: () => import('./lesson${number}.js'),
        dataKey: 'lesson${number}Data',
        concepts: ['intro', 'basics', 'advanced', 'exercises']
    }`;
    
    // Insert before closing bracket
    if (closingBracketIndex > exportIndex) {
        // Add comma to previous entry if it exists
        const prevLine = lines[closingBracketIndex - 1];
        if (prevLine.trim().endsWith('}')) {
            lines[closingBracketIndex - 1] = prevLine + ',';
        }
        
        lines.splice(closingBracketIndex, 0, newEntry);
    }
    
    return lines.join('\n');
}

// Main function
function main() {
    console.log('🚀 Lesson Generator Tool\n');
    
    const options = validateArgs(parseArgs());
    const { number, title } = options;
    
    // Check if lesson already exists
    const lessonPath = path.join(LESSONS_DIR, `lesson${number}.js`);
    if (fs.existsSync(lessonPath)) {
        console.error(`❌ Lesson ${number} already exists at ${lessonPath}`);
        process.exit(1);
    }
    
    try {
        // Generate lesson content
        console.log(`📝 Generating lesson ${number}: ${title}...`);
        const lessonContent = generateLessonContent(options);
        
        // Write lesson file
        fs.writeFileSync(lessonPath, lessonContent);
        console.log(`✅ Created ${lessonPath}`);
        
        // Update registry
        console.log('📋 Updating lesson registry...');
        const updatedRegistry = updateRegistry(options);
        fs.writeFileSync(REGISTRY_PATH, updatedRegistry);
        console.log(`✅ Updated ${REGISTRY_PATH}`);
        
        console.log('\n🎉 Lesson generation complete!');
        console.log(`\nNext steps:`);
        console.log(`1. Edit ${lessonPath} to add your content`);
        console.log(`2. Replace placeholder content with actual lessons`);
        console.log(`3. Add appropriate emojis and concepts`);
        console.log(`4. Test your lesson in the application`);
        
    } catch (error) {
        console.error('❌ Error generating lesson:', error.message);
        process.exit(1);
    }
}

main();