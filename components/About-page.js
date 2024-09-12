export class AboutPage extends HTMLElement {
    constructor() {
        super();

        this.root = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        const template = document.getElementById('about-page-template');
        const content = template.content.cloneNode(true);
        const style = document.createElement("style");

        this.root.appendChild(content);
        this.root.appendChild(style);

        const loadCss = async () => {
            const request = await fetch('/components/About-page.css');
            style.textContent = await request.text();
        }

        loadCss();
    }
}

customElements.define("about-page", AboutPage);

