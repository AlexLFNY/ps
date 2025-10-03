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
        const match = document.createElement('div');
        match.innerHTML = '🔥';
        match.style.fontSize = '2em';
        match.style.transition = 'all 0.3s ease';
        container.appendChild(match);
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

// Export functions to global scope
window.nimTakeMatches = nimTakeMatches;
window.nimResetGame = nimResetGame;
window.initNimGame = initNimGame;
