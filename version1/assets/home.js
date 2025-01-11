import { clearElement } from './utils.js';

export function renderHome() {
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
                <span class="terminal-title">developer@seoyongjun:~</span>
            </div>
            <div class="terminal-content">
                <div class="command-line">
                    <span class="prompt">$</span>
                    <span class="command"> whoami</span>
                </div>
                <div class="output">
                    <div class="profile-section">
                        <img src="./assets/profile.jpg" 
                             alt="Seo Yongjun Profile Picture"
                             class="profile-image" />
                        <div class="profile-info">
                            <h1>Seo Yongjun</h1>
                            <h2>Backend Developer & DevOps Engineer</h2>
                        </div>
                    </div>
                </div>
                
                <div class="command-line">
                    <span class="prompt">$</span>
                    <span class="command"> cat about.txt</span>
                </div>
                <div class="output">
                    <p>Hi there! I'm a backend developer with a strong interest in DevOps practices and cloud infrastructure.</p>
                    <p>Core competencies:</p>
                    <ul class="skills-list">
                        <li><span class="highlight">Backend:</span> Spring Boot, Node.js, RESTful APIs</li>
                        <li><span class="highlight">DevOps:</span> Docker, Kubernetes, Jenkins, GitHub Actions</li>
                        <li><span class="highlight">Cloud:</span> AWS, Infrastructure as Code</li>
                        <li><span class="highlight">Databases:</span> PostgreSQL, MongoDB, Redis</li>
                    </ul>
                </div>

                <div class="command-line">
                    <span class="prompt">$</span>
                    <span class="command"> ./connect.sh</span>
                </div>
                <div class="output">
                    <div class="connect-buttons">
                        <a href="#contact" class="terminal-btn">Contact</a>
                        <a href="https://github.com/mango0422" class="terminal-btn">GitHub</a>
                        <a href="https://linkedin.com/in/용준-서-15a5a52b9" class="terminal-btn">LinkedIn</a>
                    </div>
                </div>
            </div>
        </div>
    `;
}