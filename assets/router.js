import { renderHome } from './pages/Home.js';
import { renderSkills } from './pages/Skills.js';
import { renderContact } from './pages/Contact.js';

const routes = { "#home": renderHome, "#skills": renderSkills, "#contact": renderContact };
const defaultRoute = "#home";

function renderRoute() {
    const hash = window.location.hash || defaultRoute;
    (routes[hash] || routes[defaultRoute])();
}

window.addEventListener("hashchange", renderRoute);
window.addEventListener("DOMContentLoaded", renderRoute);
