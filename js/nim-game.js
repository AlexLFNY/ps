// Nim Game - Interactive Demo
let nimMatches = 19;
let nimCurrentPlayer = 'Joueur';
let nimGameOver = false;
let nimLog = [];

function nimRenderMatches() {
    const container = document.getElementById('nim-matches');
    if (!container) return;

    container.innerHTML = '';
    for (let i = 0; i < nimMatches; i++) {
        const matchWrapper = document.createElement('div');
        matchWrapper.style.transition = 'all 0.3s ease';
        matchWrapper.style.display = 'inline-block';

        const matchImg = document.createElement('img');
        matchImg.src = 'images/match.svg';
        matchImg.alt = 'Allumette';
        matchImg.style.width = '30px';
        matchImg.style.height = '60px';
        matchImg.style.margin = '0 4px';
        matchImg.style.filter = 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))';

        matchWrapper.appendChild(matchImg);
        container.appendChild(matchWrapper);
    }
}

function nimUpdateStatus() {
    const status = document.getElementById('nim-status');
    if (!status) return;

    if (nimGameOver) {
        status.innerHTML = '';
    } else {
        status.innerHTML = `Il reste <span style="color: #ffeb3b;">${nimMatches}</span> allumettes - Tour du <span style="color: ${nimCurrentPlayer === 'Joueur' ? '#81d4fa' : '#ffab91'}">${nimCurrentPlayer}</span>`;
    }
}

function nimAddLog(message, color = '#66bb6a') {
    nimLog.push(`<div style="color: ${color}; margin: 5px 0;">${message}</div>`);
    const logElement = document.getElementById('nim-log');
    if (logElement) {
        logElement.innerHTML = nimLog.join('');
        logElement.scrollTop = logElement.scrollHeight;
    }
}

function nimComputerTurn() {
    if (nimGameOver || nimMatches === 0) return;

    setTimeout(() => {
        const maxTake = Math.min(3, nimMatches);
        const take = Math.floor(Math.random() * maxTake) + 1;
        nimMatches -= take;

        nimAddLog(`🤖 L'ordinateur retire ${take} allumette${take > 1 ? 's' : ''} → Il reste ${nimMatches}`, '#ffab91');
        nimRenderMatches();

        if (nimMatches === 0) {
            nimGameOver = true;
            nimAddLog('🎉 Vous avez gagné ! L\'ordinateur a pris la dernière allumette !', '#4caf50');
            const status = document.getElementById('nim-status');
            if (status) {
                status.innerHTML = '<span style="color: #4caf50;">🎉 Vous avez gagné !</span>';
            }
            const buttons = document.querySelectorAll('.nim-button');
            buttons.forEach(btn => btn.disabled = true);
        } else {
            nimCurrentPlayer = 'Joueur';
            nimUpdateStatus();
        }
    }, 1000);
}

function nimTakeMatches(count) {
    if (nimGameOver || nimCurrentPlayer !== 'Joueur') return;
    if (count > nimMatches) {
        nimAddLog('❌ Vous ne pouvez pas retirer plus d\'allumettes qu\'il n\'en reste !', '#ff6b6b');
        return;
    }

    nimMatches -= count;
    nimAddLog(`👤 Vous retirez ${count} allumette${count > 1 ? 's' : ''} → Il reste ${nimMatches}`, '#81d4fa');
    nimRenderMatches();

    if (nimMatches === 0) {
        nimGameOver = true;
        nimAddLog('😢 Vous avez perdu ! Vous avez pris la dernière allumette !', '#ff6b6b');
        const status = document.getElementById('nim-status');
        if (status) {
            status.innerHTML = '<span style="color: #ff6b6b;">😢 Vous avez perdu !</span>';
        }
        const buttons = document.querySelectorAll('.nim-button');
        buttons.forEach(btn => btn.disabled = true);
    } else {
        nimCurrentPlayer = 'Ordinateur';
        nimUpdateStatus();
        nimComputerTurn();
    }
}

function nimResetGame() {
    nimMatches = 19;
    nimCurrentPlayer = 'Joueur';
    nimGameOver = false;
    nimLog = [];

    const logElement = document.getElementById('nim-log');
    if (logElement) {
        logElement.innerHTML = '';
    }

    const buttons = document.querySelectorAll('.nim-button');
    buttons.forEach(btn => btn.disabled = false);

    nimRenderMatches();
    nimUpdateStatus();
    nimAddLog('🎮 Nouvelle partie ! Il y a 19 allumettes.', '#ffd700');
}

// Initialize game when DOM elements are available
function initNimGame() {
    if (document.getElementById('nim-game')) {
        nimResetGame();
    }
}

// Console-style Nim game simulator
let consoleNimMatches = 19;
let consoleNimGameOver = false;
let consoleNimWaitingForInput = false;

function appendToConsole(text, color = '#4caf50') {
    const consoleOutput = document.getElementById('nim-console-output');
    const consoleContainer = document.getElementById('nim-console');
    if (!consoleOutput) return;

    const line = document.createElement('div');
    line.style.color = color;
    line.style.margin = '4px 0';
    line.textContent = text;
    consoleOutput.appendChild(line);

    // Scroll both the output and container
    if (consoleContainer) {
        consoleContainer.scrollTop = consoleContainer.scrollHeight;
    }
}

function startNimConsoleGame() {
    consoleNimMatches = 19;
    consoleNimGameOver = false;
    consoleNimWaitingForInput = false;

    const consoleOutput = document.getElementById('nim-console-output');
    const inputArea = document.getElementById('nim-input-area');
    const userInput = document.getElementById('nim-user-input');

    if (consoleOutput) consoleOutput.innerHTML = '';
    if (inputArea) inputArea.style.display = 'none';
    if (userInput) userInput.value = '';

    appendToConsole('=== JEU DE NIM ===', '#ffd700');
    appendToConsole('Il y a 19 allumettes.', '#81d4fa');
    appendToConsole('Vous jouez contre l\'ordinateur.', '#81d4fa');
    appendToConsole('Celui qui prend la dernière allumette a perdu !', '#81d4fa');
    appendToConsole('');

    setTimeout(() => {
        playerTurn();
    }, 500);
}

function playerTurn() {
    if (consoleNimGameOver) return;

    appendToConsole('');
    appendToConsole(`Il reste ${consoleNimMatches} allumette${consoleNimMatches > 1 ? 's' : ''}.`, '#ffeb3b');

    // Display matches as ASCII
    const matchDisplay = '| '.repeat(consoleNimMatches);
    appendToConsole(matchDisplay, '#ffd700');
    appendToConsole('');

    appendToConsole('Combien voulez-vous en retirer (1, 2 ou 3) ? ', '#81d4fa');

    const inputArea = document.getElementById('nim-input-area');
    const userInput = document.getElementById('nim-user-input');

    if (inputArea) inputArea.style.display = 'flex';
    if (userInput) {
        userInput.value = '';
        userInput.max = Math.min(3, consoleNimMatches);
        userInput.focus();
    }

    consoleNimWaitingForInput = true;
}

function submitNimInput() {
    if (!consoleNimWaitingForInput || consoleNimGameOver) return;

    const userInput = document.getElementById('nim-user-input');
    const inputArea = document.getElementById('nim-input-area');

    const count = parseInt(userInput.value);

    if (isNaN(count) || count < 1 || count > 3) {
        appendToConsole('Erreur : Vous devez retirer 1, 2 ou 3 allumettes !', '#ff6b6b');
        return;
    }

    if (count > consoleNimMatches) {
        appendToConsole(`Erreur : Il ne reste que ${consoleNimMatches} allumette${consoleNimMatches > 1 ? 's' : ''} !`, '#ff6b6b');
        return;
    }

    consoleNimWaitingForInput = false;
    if (inputArea) inputArea.style.display = 'none';

    appendToConsole(`> ${count}`, '#4caf50');
    consoleNimMatches -= count;
    appendToConsole(`Vous retirez ${count} allumette${count > 1 ? 's' : ''}.`, '#66bb6a');

    if (consoleNimMatches === 0) {
        appendToConsole('', '#ffffff');
        appendToConsole('Vous avez pris la dernière allumette !', '#ff6b6b');
        appendToConsole('VOUS AVEZ PERDU !', '#ff6b6b');
        consoleNimGameOver = true;
        return;
    }

    appendToConsole('');
    setTimeout(() => {
        computerTurnConsole();
    }, 800);
}

function computerTurnConsole() {
    if (consoleNimGameOver) return;

    const maxTake = Math.min(3, consoleNimMatches);
    const take = Math.floor(Math.random() * maxTake) + 1;

    appendToConsole(`L'ordinateur réfléchit...`, '#ffab91');

    setTimeout(() => {
        consoleNimMatches -= take;
        appendToConsole(`L'ordinateur retire ${take} allumette${take > 1 ? 's' : ''}.`, '#ffab91');

        if (consoleNimMatches === 0) {
            appendToConsole('', '#ffffff');
            appendToConsole('L\'ordinateur a pris la dernière allumette !', '#4caf50');
            appendToConsole('VOUS AVEZ GAGNÉ !', '#4caf50');
            consoleNimGameOver = true;
            return;
        }

        appendToConsole('');
        setTimeout(() => {
            playerTurn();
        }, 500);
    }, 1000);
}

// Export functions to global scope
window.nimTakeMatches = nimTakeMatches;
window.nimResetGame = nimResetGame;
window.initNimGame = initNimGame;
window.startNimConsoleGame = startNimConsoleGame;
window.submitNimInput = submitNimInput;
