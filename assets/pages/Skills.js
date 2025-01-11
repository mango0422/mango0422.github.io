import { createSkillCategory } from '../components/createSkillItem.js';
import { attachTooltip, removeTooltips } from '../utils/tooltip.js';

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
                        ${skillsData.map(category =>
        createSkillCategory(category.category, category.items)
    ).join('')}
                    </div>
                </div>
            </div>
        </div>
    `;

    // Tooltip 기능 초기화
    removeTooltips();

    // 각 기술에 툴팁 추가
    skillsData.forEach(category => {
        category.items.forEach(skill => {
            attachTooltip(document.getElementById(skill.id), `${skill.name}: Detailed description here.`);
        });
    });
}


export const skillsData = [
    {
        category: "Backend",
        items: [
            { id: "skill-spring", icon: "fab fa-java", name: "Spring Boot" },
        ],
    },
    {
        category: "Container & Orchestration",
        items: [
            { id: "skill-kubernetes", icon: "fas fa-cloud", name: "Kubernetes" },
            { id: "skill-docker", icon: "fab fa-docker", name: "Docker" },
        ],
    },
    {
        category: "CI/CD",
        items: [
            { id: "skill-jenkins", icon: "fas fa-cogs", name: "Jenkins" },
            { id: "skill-actions", icon: "fas fa-tools", name: "GitHub Actions" },
        ],
    },
    {
        category: "Version Control",
        items: [
            { id: "skill-gitlab", icon: "fab fa-gitlab", name: "GitLab" },
            { id: "skill-github", icon: "fab fa-github", name: "GitHub" },
        ],
    },
];
