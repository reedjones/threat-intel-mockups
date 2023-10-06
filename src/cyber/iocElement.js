class IoCElement extends HTMLElement {
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
                <h2>${this.getAttribute('type')}</h2>
                <p>${this.getAttribute('description')}</p>
                <p>Value: ${this.getAttribute('value')}</p>
                <p>Associated Threat Actors: ${this.getAttribute('associatedThreatActors')}</p>
            </li>
        `;
    }
}

customElements.define('ioc-element', IoCElement);
