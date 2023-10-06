import {LitElement, css, html} from 'lit'
import {customElement, property} from 'lit/decorators.js';


/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('my-thing')
export class MyThing extends LitElement {
    @property() greeting = "Welcome";
    @property() count = 0;


    render() {
        return html`
      
      <slot></slot>
      <div class="card">
        <button @click=${this._onClick} part="button">
          count is ${this.count}
        </button>
      </div>
      <p class="read-the-docs">${this.greeting}</p>
    `
    }

    _onClick() {
        this.count++
    }

    static get styles() {
        return css`
      :host {
        margin: 0 auto;
      }
    `
    }
}

