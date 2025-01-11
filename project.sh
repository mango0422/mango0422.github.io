#!/bin/bash

# Set the root project directory
ROOT_DIR="version3"

# Create the project directory structure
mkdir -p $ROOT_DIR/{assets/{images,styles/components},src/{components,pages,services,utils,constants}}

# Create the necessary files with content
cat <<'EOL' > $ROOT_DIR/index.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Seo Yongjun - Profile</title>
    <link rel="stylesheet" href="assets/styles/main.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
    <script type="module" src="src/main.js" defer></script>
</head>
<body>
    <nav-bar></nav-bar>
    <main id="app"></main>
    <history-button></history-button>
    <history-popup></history-popup>
</body>
</html>
EOL

cat <<'EOL' > $ROOT_DIR/src/main.js
import './components/NavBar.js';
import './components/HistoryButton.js';
import './components/HistoryPopup.js';
import { initializeRouter } from './router.js';

document.addEventListener('DOMContentLoaded', initializeRouter);
EOL

cat <<'EOL' > $ROOT_DIR/src/constants/routes.js
export const ROUTES = {
    HOME: '#home',
    SKILLS: '#skills',
    CONTACT: '#contact'
};

export const DEFAULT_ROUTE = ROUTES.HOME;

export const ROUTE_COMMANDS = {
    [ROUTES.HOME]: 'cd ~',
    [ROUTES.SKILLS]: 'ls skills/',
    [ROUTES.CONTACT]: './contact'
};
EOL

cat <<'EOL' > $ROOT_DIR/src/constants/skillsData.js
export const SKILLS_DATA = {
    backend: {
        title: 'Backend',
        skills: [
            {
                id: 'spring',
                name: 'Spring Boot',
                icon: 'fab fa-java',
                description: 'Spring Boot: A Java framework for building scalable applications.'
            }
        ]
    },
    container: {
        title: 'Container & Orchestration',
        skills: [
            {
                id: 'kubernetes',
                name: 'Kubernetes',
                icon: 'fas fa-cloud',
                description: 'Kubernetes: A container orchestration platform.'
            },
            {
                id: 'docker',
                name: 'Docker',
                icon: 'fab fa-docker',
                description: 'Docker: A platform for containerizing applications.'
            }
        ]
    },
    // ... other skill categories
};
EOL

cat <<'EOL' > $ROOT_DIR/src/components/Terminal.js
export class Terminal extends HTMLElement {
    constructor() {
        super();
    }

    render(title, content) {
        this.innerHTML = `
            <div class="terminal-container">
                <div class="terminal-header">
                    <div class="terminal-buttons">
                        <span class="terminal-button close"></span>
                        <span class="terminal-button minimize"></span>
                        <span class="terminal-button maximize"></span>
                    </div>
                    <span class="terminal-title>\${title}</span>
                </div>
                <div class="terminal-content">
                    \${content}
                </div>
            </div>
        `;
    }
}

customElements.define('terminal-window', Terminal);
EOL

cat <<'EOL' > $ROOT_DIR/assets/styles/main.css
/* Import all component styles */
@import './components/buttons.css';
@import './components/history.css';
@import './components/nav.css';
@import './components/terminal.css';
@import './components/tooltip.css';

/* Global styles */
body {
    background-color: #f0f0f0;
    margin: 0;
    font-family: "Menlo", "Monaco", "Courier New", monospace;
}

/* ... other global styles ... */
EOL

cat <<'EOL' > $ROOT_DIR/src/services/NavigationHistory.js
import { ROUTE_COMMANDS } from '../constants/routes.js';

export class NavigationHistory {
    constructor() {
        this.history = [];
        this.maxItems = 10;
        this.loadHistory();
    }

    loadHistory() {
        const savedHistory = localStorage.getItem('navigationHistory');
        if (savedHistory) {
            this.history = JSON.parse(savedHistory);
        }
    }

    addEntry(route) {
        if (this.history.length > 0 && this.history[0].route === route) {
            return;
        }

        const entry = {
            route,
            command: ROUTE_COMMANDS[route] || route,
            timestamp: new Date().toISOString()
        };

        this.history.unshift(entry);
        
        if (this.history.length > this.maxItems) {
            this.history.pop();
        }

        localStorage.setItem('navigationHistory', JSON.stringify(this.history));
    }

    getHistory() {
        return this.history;
    }
}

export const navigationHistory = new NavigationHistory();
EOL

cat <<'EOL' > $ROOT_DIR/src/utils/dom.js
export const clearElement = (selector) => {
    const element = document.querySelector(selector);
    if (element) element.innerHTML = '';
};

export const appendToElement = (selector, child) => {
    const element = document.querySelector(selector);
    if (element) element.appendChild(child);
};
EOL

cat <<'EOL' > $ROOT_DIR/src/utils/formatters.js
export const formatRelativeTime = (timestamp) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffInSeconds = Math.floor((now - date) / 1000);

    if (diffInSeconds < 60) return 'just now';
    if (diffInSeconds < 3600) return `\${Math.floor(diffInSeconds / 60)}m ago`;
    if (diffInSeconds < 86400) return `\${Math.floor(diffInSeconds / 3600)}h ago`;
    return `\${Math.floor(diffInSeconds / 86400)}d ago`;
};
EOL

# Create empty placeholder files
> $ROOT_DIR/assets/images/profile.jpg
> $ROOT_DIR/assets/styles/components/buttons.css
> $ROOT_DIR/assets/styles/components/history.css
> $ROOT_DIR/assets/styles/components/nav.css
> $ROOT_DIR/assets/styles/components/terminal.css
> $ROOT_DIR/assets/styles/components/tooltip.css

> $ROOT_DIR/src/router.js
> $ROOT_DIR/src/pages/Home.js
> $ROOT_DIR/src/pages/Skills.js
> $ROOT_DIR/src/pages/Contact.js
> $ROOT_DIR/src/components/NavBar.js
> $ROOT_DIR/src/components/HistoryButton.js
> $ROOT_DIR/src/components/HistoryPopup.js

echo "Project structure and files created successfully in $ROOT_DIR."
