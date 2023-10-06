import {html, css, LitElement} from 'lit';
import {customElement, property, query} from 'lit/decorators.js';
// Import the `virtualizerRef` symbol along with the directive
import {virtualize, virtualizerRef} from '@lit-labs/virtualizer/virtualize.js';
import '@lit-labs/virtualizer';
import {Grid} from "@ag-grid-community/core";
// @ag-grid-community/core will always be implicitly available
import {ModuleRegistry} from '@ag-grid-community/core';
import {ClientSideRowModelModule} from "@ag-grid-community/client-side-row-model";


ModuleRegistry.registerModules([
    ClientSideRowModelModule,

]);

async function logMovies() {
    const response = await fetch('http://127.0.0.1:5000/assets ');
    console.log(response)
    return await response.json()
}

@customElement('asset-collection-element')
class AssetCollectionElement extends LitElement {

    @property()
    data = [];

    @query("#myGrid")
    target;

    done = false;

    firstUpdated(_changedProperties) {
        super.firstUpdated(_changedProperties);
        const fuckme = logMovies();
        fuckme.then(r => {
            console.log(r)
            this.data = r;
        })
        console.log(this.data)

        console.log(this.data)




        setTimeout(()=>{
            const cd = this.createColumnDefs();
            let c2 = [];
            for (const i of cd) {
                c2.push({field: i})
            }
            this.gridOptions = {
                columnDefs: c2,
                rowData: this.createRowData()
            };
            let eGridDiv =  document.querySelector('#grid');
            new Grid(eGridDiv, this.gridOptions);
            this.done = true;
        }, 4000)
    }

    itemsTemplate() {
        return html`
            <div id="container">
                <div id="grid" class="ag-theme-alpine-dark"></div>
            </div>

        `;
    }

    itemsTemplate2() {
        return html`
            <div id="container">
                <lit-virtualizer
                        .items=${this.data}
                        .renderItem=${contact => html`

                            <div class="card">
                                <div class="px-6 py-4">
                                    <div id="name">${contact.Name}</div>
                                    <p id="description">
                                        ${contact.Description}
                                    </p>
                                </div>
                                <div class="pad">
                                    <button class="tag bg-${contact.Type} ">${contact.Type}</button>
                                    <button class="tag bg-${contact.CriticalityLevel}">${contact.CriticalityLevel}
                                    </button>
                                </div>
                            </div>

                        `}
                ></lit-virtualizer>
            </div>`;
    }

//{"ID":"ASSET001","Name":"Honorable","Description":"Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.","Type":"Switch","CriticalityLevel":"Low"},
    render() {
       let lo = "loaded";
        if (this.done) {
            lo = "loading";
        }
        return html`
            <h1>${lo}</h1>
           

        `;
    }

    static get styles() {

        return css`

          #container {
            display: flex;
            width: 100%;
          }

          #myGrid {
            width: 100%;

          }

          #name {
            font-weight: var(--font-weight-4);
          }

          #description {

          }

          .pad {
            padding: var(--size-2);
          }

          .card {
            border-radius: var(--radius-2);
            padding: var(--size-fluid-3);
            box-shadow: var(--shadow-4);

            &:hover {
              box-shadow: var(--shadow-6);
            }

            @media (--motionOK) {
              animation: var(--animation-fade-in);
            }
          }

          .bg-Low {
            background-color: var(--yellow-5);
          }

          .bg-High {
            background-color: var(--red-5);
          }

          .bg-Medium {
            background-color: var(--orange-5);
          }
        `;
    }

    createColumnDefs() {
        return ["Name", "Description", "CriticalityLevel", "Type", 'ID'];
    }

    createRowData() {
        return this.data
    }
}


