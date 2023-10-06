class ThreatActorElement extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <li>
                <h2>${this.getAttribute('name')}</h2>
                <p>${this.getAttribute('description')}</p>
                <p>Motivation: ${this.getAttribute('motivation')}</p>
                <p>TTPs: ${this.getAttribute('ttps')}</p>
            </li>
        `;
    }
}

customElements.define('threat-actor-element', ThreatActorElement);
