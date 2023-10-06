class IncidentCollectionElement extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <h2>Incidents</h2>
            <ul>
                <incident-element title="Data Breach in Government Agency" description="Sensitive government data leaked to the dark web." severity="High" dateTime="2023-10-04T14:30:00Z" associatedIoCs="IOC456" affectedSystems="Server-01, Workstation-03"></incident-element>
            </ul>
        `;
    }
}

customElements.define('incident-collection-element', IncidentCollectionElement);
