class AssetElement extends HTMLElement {
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
                <p>Type: ${this.getAttribute('type')}</p>
                <p>Criticality Level: ${this.getAttribute('criticalityLevel')}</p>
            </li>
        `;
    }
}

customElements.define('asset-element', AssetElement);
