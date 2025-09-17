# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a French educational web application teaching Python programming fundamentals to high school students (Seconde level). The project consists of a single-page interactive web application with a modern glassmorphism design.

## Project Structure

- `index.html` - Main HTML file with clean structure and external references
- `styles.css` - All CSS styles including glassmorphism effects and animations
- `script.js` - Main JavaScript functionality (modal, interactions, quizzes)
- `content.js` - Educational content data for all Python concepts
- `index_old.html` - Original monolithic version (backup)
- `README.md` - Project documentation in French
- `.github/workflows/static.yml` - GitHub Pages deployment workflow

## Technology Stack

- **Frontend**: Pure HTML5, CSS3, and Vanilla JavaScript (no frameworks)
- **Python Engine**: Pyodide v0.24.1 (CPython compiled to WebAssembly)
- **Styling**: CSS3 with glassmorphism effects, CSS Grid, Flexbox, responsive design
- **Animations**: CSS animations and JavaScript for interactive particles
- **Deployment**: GitHub Pages via GitHub Actions
- **Architecture**: Modular structure with separated concerns

## Architecture

This is a **modular web application** with clean separation of concerns:

- **HTML Structure**: Clean semantic structure in `index.html`
- **CSS Styles**: All styling in external `styles.css` file
- **JavaScript Logic**: Application logic in `script.js`
- **Content Data**: Educational content stored in `content.js`

### Key Components

1. **Hero Section**: Landing area with animated background and floating particles
2. **Concept Tiles**: 7 interactive tiles covering Python concepts
3. **Modal System**: Full-screen modal for detailed content display
4. **Python Console**: Interactive Pyodide-powered Python interpreter with code execution
5. **Content Data**: JavaScript object containing all educational content
6. **Interactive Effects**: Hover effects, touch gestures, particle animations

### Content Structure

The application covers these Python topics:
- **Lesson 1**: Variables and data types (int, float, str, bool), print/input functions, type conversion
- **Lesson 2**: Operations (arithmetic, string), conditions (if/else/elif), logical operators
- **Lesson 3**: Functions (definition, parameters, return values, docstrings, error handling)
- Each lesson includes interactive code examples with **🐍 Charger** buttons that load into the Python console
- F-strings fully supported thanks to Pyodide's Python 3.12 compatibility
- Practical exercises (4 levels: Facile, Moyen, Avancé, Expert)

## Development Workflow

### Local Development
```bash
# No build process required - open directly in browser
open index.html
```

### Deployment
- Automatic deployment to GitHub Pages via `.github/workflows/static.yml`
- Triggers on pushes to `main` branch
- No build step - deploys static files directly
- ES6 modules supported with `.nojekyll` file for proper MIME types
- Lesson registry and modular architecture fully compatible

## Common Tasks

### Testing Changes
- Open `index.html` in browser
- Test responsive design on different screen sizes
- Verify touch gestures on mobile devices
- Test Python console functionality with f-strings and complex code
- Verify **🐍 Charger** buttons load code correctly into the Pyodide interpreter

### Content Updates
- Modify the `conceptData` object in JavaScript section (lines 768-1076)
- Update tile information in HTML structure (lines 658-734)

### Styling Changes
- Modify CSS in the `<style>` section (lines 7-645)
- Key color scheme: Purple/blue gradients with gold accents
- Uses Inter font for text, JetBrains Mono for code

### Adding New Educational Content
1. Update the `conceptData` object with new content
2. Add corresponding tile in HTML structure
3. Ensure modal system handles the new concept
4. Test interactive features

## Notes for Development

- This is a **modular application** with clean separation of concerns
- All educational content is in French - maintain language consistency  
- The design follows glassmorphism trends with responsive mobile-first approach
- **Python Engine**: Uses Pyodide v0.24.1 for full Python 3.12 compatibility including f-strings
- **No build process**: Pyodide loads directly from CDN, no package managers or build tools needed
- The particle animation system creates floating elements for visual appeal
- When updating content, modify `content.js` - avoid hardcoding content in other files
- Styling changes should be made in `styles.css`
- Interactive functionality belongs in `script.js`
- **Python Console**: Fully functional with variable inspection, code execution, and error handling

## Python Console Features

- **Full Python 3.12 Support**: F-strings, modern syntax, comprehensive standard library
- **Interactive Code Loading**: 🐍 Charger buttons automatically load examples into the console
- **Variable Inspection**: Real-time display of user-defined variables with types and values
- **Error Handling**: Clean error messages with French localization
- **Persistent State**: Variables remain available across code executions within a session