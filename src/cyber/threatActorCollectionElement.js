class ThreatActorCollectionElement extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <h2>Threat Actors</h2>
            <ul>
                <threat-actor-element name="Advanced Persistent Threat Group A" description="A state-sponsored threat group known for cyber espionage." motivation="Steal sensitive government data" ttps="Phishing, Zero-day exploits"></threat-actor-element>
            </ul>
        `;
    }
}

customElements.define('threat-actor-collection-element', ThreatActorCollectionElement);
