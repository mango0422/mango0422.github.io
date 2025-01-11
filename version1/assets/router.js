import { renderHome } from './home.js';
import { renderSkills } from './skills.js';
import { renderContact } from './contact.js';

const routes = {
    "#home": renderHome,
    "#skills": renderSkills,
    "#contact": renderContact,
};

const defaultRoute = "#home";

function renderRoute() {
    const hash = window.location.hash || defaultRoute;
    const app = document.getElementById("app");
    app.innerHTML = '';
    (routes[hash] || routes[defaultRoute])();
}

window.addEventListener("hashchange", renderRoute);
window.addEventListener("DOMContentLoaded", renderRoute);
