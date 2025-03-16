import { createSkillCategory } from "../components/createSkillItem.js";
import { attachTooltip, removeTooltips } from "../utils/tooltip.js";

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
                        ${skillsData
                          .map((category) =>
                            createSkillCategory(
                              category.category,
                              category.items
                            )
                          )
                          .join("")}
                    </div>
                </div>
            </div>
        </div>
    `;

  // Tooltip 기능 초기화
  removeTooltips();

  // 각 기술에 툴팁 추가
  skillsData.forEach((category) => {
    category.items.forEach((skill) => {
      attachTooltip(
        document.getElementById(skill.id),
        `${skill.name}: Detailed description here.`
      );
    });
  });
}

export const skillsData = [
  {
    category: "Frontend",
    items: [
      { id: "skill-nextjs", icon: "devicon-nextjs-plain", name: "Next.js" },
      { id: "skill-react", icon: "devicon-react-original", name: "React" },
      {
        id: "skill-tailwindcss",
        icon: "devicon-tailwindcss-plain",
        name: "Tailwind CSS",
      },
    ],
  },
  {
    category: "Backend",
    items: [
      { id: "skill-spring", icon: "devicon-spring-plain", name: "Spring Boot" },
    ],
  },
  {
    category: "Container & Orchestration",
    items: [
      {
        id: "skill-kubernetes",
        icon: "devicon-kubernetes-plain",
        name: "Kubernetes",
      },
      { id: "skill-docker", icon: "devicon-docker-plain", name: "Docker" },
    ],
  },
  {
    category: "CI/CD",
    items: [
      { id: "skill-jenkins", icon: "devicon-jenkins-plain", name: "Jenkins" },
      {
        id: "skill-actions",
        icon: "devicon-githubactions-plain",
        name: "GitHub Actions",
      },
      { id: "skill-argocd", icon: "devicon-argocd-plain", name: "ArgoCD" },
    ],
  },
  {
    category: "Version Control",
    items: [
      { id: "skill-gitlab", icon: "devicon-gitlab-plain", name: "GitLab" },
      { id: "skill-github", icon: "devicon-github-plain", name: "GitHub" },
    ],
  },
  {
    category: "Database",
    items: [
      { id: "skill-mysql", icon: "devicon-mysql-plain", name: "MySQL" },
      { id: "skill-h2", icon: "fas fa-database", name: "H2" }, // Devicon에 H2는 없으니 대체 아이콘
      { id: "skill-mariadb", icon: "devicon-mariadb-plain", name: "MariaDB" },
      { id: "skill-mongodb", icon: "devicon-mongodb-plain", name: "MongoDB" },
      { id: "skill-redis", icon: "devicon-redis-plain", name: "Redis" },
    ],
  },
  {
    category: "Collaboration Tools",
    items: [
      { id: "skill-jira", icon: "devicon-jira-plain", name: "Jira" },
      { id: "skill-slack", icon: "devicon-slack-plain", name: "Slack" },
    ],
  },
];
