function createSkillItem(id, iconClass, name) {
    return `
        <div id="${id}" class="skill-item">
            <i class="${iconClass}"></i>
            <span>${name}</span>
        </div>
    `;
}

export function createSkillCategory(title, skills) {
    const skillItems = skills.map(skill =>
        createSkillItem(skill.id, skill.icon, skill.name)
    ).join('');

    return `
        <div class="skill-category">
            <h3 class="category-title">${title}</h3>
            ${skillItems}
        </div>
    `;
}