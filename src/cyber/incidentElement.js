class IncidentElement extends HTMLElement {
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
                <h2>${this.getAttribute('title')}</h2>
                <p>${this.getAttribute('description')}</p>
                <p>Severity: ${this.getAttribute('severity')}</p>
                <p>Date/Time: ${this.getAttribute('dateTime')}</p>
                <p>Associated IoCs: ${this.getAttribute('associatedIoCs')}</p>
                <p>Affected Systems: ${this.getAttribute('affectedSystems')}</p>
            </li>
        `;
    }
}

customElements.define('incident-element', IncidentElement);
