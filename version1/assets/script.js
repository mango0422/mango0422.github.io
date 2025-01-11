import { navigationHistory, formatRelativeTime } from './utils.js';

document.addEventListener("DOMContentLoaded", () => {
    // Floating button functionality
    const floatingButton = document.querySelector(".floating-button");
    if (floatingButton) {
        floatingButton.addEventListener("click", () => alert("Button Clicked!"));
    }

    // Tooltip functionality
    const skillIcons = document.querySelectorAll(".skill-icon");
    skillIcons.forEach(icon => {
        const tooltip = document.createElement("div");
        tooltip.className = "tooltip";
        tooltip.innerText = icon.dataset.tooltip;
        document.body.appendChild(tooltip);

        icon.addEventListener("mouseenter", (e) => {
            const rect = e.target.getBoundingClientRect();
            tooltip.style.left = `${rect.left + rect.width / 2 - tooltip.offsetWidth / 2}px`;
            tooltip.style.top = `${rect.top - tooltip.offsetHeight - 8}px`;
            tooltip.style.opacity = 1;
        });

        icon.addEventListener("mouseleave", () => {
            tooltip.style.opacity = 0;
        });
    });
});


// Setup history button functionality
const historyBtn = document.querySelector('.floating-button');
const historyPopup = document.querySelector('.history-popup');

historyBtn.addEventListener('click', () => {
    historyPopup.classList.toggle('show');
    updateHistoryDisplay();
});

// Close popup when clicking outside
document.addEventListener('click', (e) => {
    if (!historyBtn.contains(e.target) && !historyPopup.contains(e.target)) {
        historyPopup.classList.remove('show');
    }
});

// Update history display
function updateHistoryDisplay() {
    const historyContent = document.getElementById('history-content');
    const history = navigationHistory.getHistory();

    historyContent.innerHTML = history.map(entry => `
        <a href="${entry.route}" class="history-item">
            <span class="prompt">$</span>
            <span class="command">${entry.command}</span>
            <span class="history-timestamp">${formatRelativeTime(entry.timestamp)}</span>
        </a>
    `).join('');
}

// Track navigation
window.addEventListener('hashchange', () => {
    navigationHistory.addEntry(window.location.hash || '#home');
});