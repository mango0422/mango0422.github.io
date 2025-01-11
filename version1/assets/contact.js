import { clearElement } from './utils.js';

export function renderContact() {
    clearElement("#app");
    const app = document.getElementById("app");
    app.innerHTML = `
        <div class="terminal-container">
            <div class="terminal-header">
                <div class="terminal-buttons">
                    <span class="terminal-button close"></span>
                    <span class="terminal-button minimize"></span>
                    <span class="terminal-button maximize"></span>
                </div>
                <span class="terminal-title">Contact Information</span>
            </div>
            <div class="terminal-content">
                <div class="command-line">
                    <span class="prompt">$</span>
                    <span class="command"> cat contact.json</span>
                </div>
                <div class="output">
                    <pre class="contact-json">
{
    "name": "Seo Yongjun",
    "contact": {
        "email": "seo.yongjun@example.com",
        "github": "mango0422",
        "blog": "https://velog.io/@tom990422",
        "notion": "https://midnight-alpaca-c20.notion.site/seoyongjun?pvs=73"
    },
    "status": "open_to_work",
    "preferred_contact": "email"
}
                    </pre>
                    <div class="contact-links">
                        <a href="mailto:seo.yongjun@example.com" class="terminal-btn">
                            <i class="fas fa-envelope"></i> Email
                        </a>
                        <a href="https://github.com/mango0422" class="terminal-btn" target="_blank">
                            <i class="fab fa-github"></i> GitHub
                        </a>
                        <a href="https://velog.io/@tom990422" class="terminal-btn" target="_blank">
                            <i class="fas fa-blog"></i> Blog
                        </a>
                        <a href="https://midnight-alpaca-c20.notion.site/seoyongjun?pvs=73" class="terminal-btn" target="_blank">
                            <i class="fas fa-note-sticky"></i> Notion
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `;
}
