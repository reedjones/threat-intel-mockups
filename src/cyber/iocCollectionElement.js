class IoCCollectionElement extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <h2>Indicators of Compromise</h2>
            <ul>
                <ioc-element type="IP Address" description="Suspicious IP address observed in network traffic" value="192.168.1.100" associatedThreatActors="TA123"></ioc-element>
            </ul>
        `;
    }
}

customElements.define('ioc-collection-element', IoCCollectionElement);
