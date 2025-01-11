import { attachTooltip, removeTooltips } from './utils.js';

export function renderSkills() {
    const app = document.getElementById("app");
    app.innerHTML = `
        <div class="terminal-container">
            <div class="terminal-header">
                <div class="terminal-buttons">
                    <span class="terminal-button close"></span>
                    <span class="terminal-button minimize"></span>
                    <span class="terminal-button maximize"></span>
                </div>
                <span class="terminal-title">Technical Skills</span>
            </div>
            <div class="terminal-content">
                <div class="command-line">
                    <span class="prompt">$</span>
                    <span class="command"> ls -la skills/</span>
                </div>
                <div class="output">
                    <div class="skills-grid">
                        <div class="skill-category">
                            <h3 class="category-title">Backend</h3>
                            <div id="skill-spring" class="skill-item">
                                <i class="fab fa-java"></i>
                                <span>Spring Boot</span>
                            </div>
                        </div>
                        
                        <div class="skill-category">
                            <h3 class="category-title">Container & Orchestration</h3>
                            <div id="skill-kubernetes" class="skill-item">
                                <i class="fas fa-cloud"></i>
                                <span>Kubernetes</span>
                            </div>
                            <div id="skill-docker" class="skill-item">
                                <i class="fab fa-docker"></i>
                                <span>Docker</span>
                            </div>
                        </div>
                        
                        <div class="skill-category">
                            <h3 class="category-title">CI/CD</h3>
                            <div id="skill-jenkins" class="skill-item">
                                <i class="fas fa-cogs"></i>
                                <span>Jenkins</span>
                            </div>
                            <div id="skill-actions" class="skill-item">
                                <i class="fas fa-tools"></i>
                                <span>GitHub Actions</span>
                            </div>
                            <div id="skill-argocd" class="skill-item">
                                <i class="fas fa-sync-alt"></i>
                                <span>ArgoCD</span>
                            </div>
                        </div>
                        
                        <div class="skill-category">
                            <h3 class="category-title">Version Control</h3>
                            <div id="skill-gitlab" class="skill-item">
                                <i class="fab fa-gitlab"></i>
                                <span>GitLab</span>
                            </div>
                            <div id="skill-github" class="skill-item">
                                <i class="fab fa-github"></i>
                                <span>GitHub</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    removeTooltips();

    // Add tooltips to skill icons with updated descriptions
    attachTooltip(document.getElementById("skill-spring"), "Spring Boot: A Java framework for building scalable applications.");
    attachTooltip(document.getElementById("skill-kubernetes"), "Kubernetes: A container orchestration platform.");
    attachTooltip(document.getElementById("skill-docker"), "Docker: A platform for containerizing applications.");
    attachTooltip(document.getElementById("skill-jenkins"), "Jenkins: An automation server for CI/CD.");
    attachTooltip(document.getElementById("skill-gitlab"), "GitLab: A DevOps platform with version control.");
    attachTooltip(document.getElementById("skill-github"), "GitHub: A cloud-based Git repository hosting service.");
    attachTooltip(document.getElementById("skill-actions"), "GitHub Actions: A CI/CD tool for GitHub.");
    attachTooltip(document.getElementById("skill-argocd"), "ArgoCD: A GitOps tool for Kubernetes deployments.");
}

// Add to utils.js

/**
 * Manages navigation history
 */
class NavigationHistory {
    constructor() {
        this.history = [];
        this.maxItems = 10;

        // Load history from localStorage if available
        const savedHistory = localStorage.getItem('navigationHistory');
        if (savedHistory) {
            this.history = JSON.parse(savedHistory);
        }
    }

    /**
     * Add a new navigation entry
     * @param {string} route - The route that was navigated to
     */
    addEntry(route) {
        // Don't add duplicate consecutive entries
        if (this.history.length > 0 && this.history[0].route === route) {
            return;
        }

        const entry = {
            route: route,
            command: this.getCommandForRoute(route),
            timestamp: new Date().toISOString()
        };

        this.history.unshift(entry);

        // Keep only the most recent entries
        if (this.history.length > this.maxItems) {
            this.history.pop();
        }

        // Save to localStorage
        localStorage.setItem('navigationHistory', JSON.stringify(this.history));
    }

    /**
     * Get all history entries
     * @returns {Array} Array of history entries
     */
    getHistory() {
        return this.history;
    }

    /**
     * Convert route to terminal command
     * @param {string} route - The route to convert
     * @returns {string} The terminal command equivalent
     */
    getCommandForRoute(route) {
        const commands = {
            '#home': 'cd ~',
            '#skills': 'ls skills/',
            '#contact': './contact'
        };
        return commands[route] || route;
    }
}

/**
 * Formats a timestamp into a relative time string
 * @param {string} timestamp - ISO timestamp
 * @returns {string} Relative time string
 */
function formatRelativeTime(timestamp) {
    const date = new Date(timestamp);
    const now = new Date();
    const diffInSeconds = Math.floor((now - date) / 1000);

    if (diffInSeconds < 60) return 'just now';
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m ago`;
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h ago`;
    return `${Math.floor(diffInSeconds / 86400)}d ago`;
}

export const navigationHistory = new NavigationHistory();
export { formatRelativeTime };