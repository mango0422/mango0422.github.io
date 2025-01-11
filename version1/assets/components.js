export class NavBar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="terminal-nav">
                <div class="terminal-nav-left">
                    <div class="nav-prompt">developer@seoyongjun:~$</div>
                </div>
                <div class="terminal-nav-right">
                    <a href="#home" class="nav-link">cd ~</a>
                    <a href="#skills" class="nav-link">ls skills/</a>
                    <a href="#contact" class="nav-link">./contact</a>
                </div>
            </div>
        `;
    }
}
customElements.define("nav-bar", NavBar);