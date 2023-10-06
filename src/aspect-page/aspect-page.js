import {customElement, property} from 'lit/decorators.js';
import {LitElement, html, css} from 'lit';

/** - cyber -
 * The aspect-page element.
 * It's really cool.
 * @slot - This element has a slot
 * @csspart button - The button
 */

const lorum = "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.";

@customElement('aspect-page')
export class AspectPage extends LitElement {
    @property() title = "";
    @property() aspect = "";
    @property() pos = "";
    @property() text = "";
    @property() summary = lorum;
    @property() caption = "Here is a figure caption.";


    pos_choices = ['noun', 'verb'];

    render() {
        return html`
            <main>
                <section id="title">
                    <hgroup id="verb">
                        <h1>${this.aspect}</h1>
                        <h3>${this.title}</h3>
                    </hgroup>
                    <summary>
                        ${this.summary}
                    </summary>
                </section>
               <article id="body">
                   <section id="text">
                       <p>${this.text}</p>
                       <hr>
                       <ul>
                           <li>Lorem ipsum dolor sit amet</li>
                           <li>consectetur adipiscing elit</li>
                           <li>sed do eiusmod tempor incididunt</li>
                           <li>ut labore et dolore magna aliqua</li>
                       </ul>
                       <hr>
                       <small>Small Detail <i>Information</i></small>
                       <aside>
                           <blockquote>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”</blockquote>
                       </aside>
                   </section>
                   <section id="graphic">
                       <figure>
                           <slot name="graphic"></slot>
                           <figcaption>${this.caption}</figcaption>
                       </figure>
                       
                   </section>
               </article>
            </main>
        `
    }

    static get styles() {
        return css`
          :host {

            width: clamp(23ch, 60%, 46ch);
            box-shadow: var(--inner-shadow-2);
            padding: var(--size-fluid-3);
          }

          h1 {
            font-weight: var(--font-weight-7);
            max-inline-size: var(--size-header-2);
          }

          small {
            max-inline-size: var(--size-header-1);
          }

          p {
            max-inline-size: var(--size-content-3);
          }

          aside {
            max-inline-size: var(--size-content-2);
          }

          figure {
            position: relative;

            & figcaption {
              position: absolute;
              z-index: var(--layer-1);
              inset-inline: 0;
              inset-block: auto 0;
            }
            
            & img {
              width:100%;
            }
          }

          main {
          }

          summary {

          }

          section#text {

          }

          section#graphic {
            box-shadow: var(--shadow-4);

            &:hover {
              box-shadow: var(--shadow-6);
            }

            & img {
              aspect-ratio: var(--ratio-golden);
            }
          }

          section#text > ul {

          }

          section#text > p {

          }

          section#text > aside {
          }

          section#text > aside > blockquote {
          }

          hr {
            margin-block: var(--size-fluid-5);
          }

          section#text > ul > li {
            padding-inline-start: var(--size-2);
          }

          main {
            display: grid;
            grid-template-columns: 7.2fr;
            grid-template-rows: 0.3fr 1.7fr;
            gap: 0px 0px;
            grid-template-areas: 
    "title"
    "body";
          }

          #title {
            grid-area: title;
            line-height: var(--font-lineheight-1);
            font-size: var(--font-size-fluid-3);
            font-weight: var(--font-weight-9);
            font-family: var(--font-sans);

            & summary {
              font-size: var(--font-size-2);
            }
          }

          blockquote {
            --_accent-1: var(--lime-5);
            --_accent-2: var(--lime-4);
            --_bg: var(--surface-2);
            --_ink: var(--text-1);

            color: var(--_ink);
            border-color: var(--_accent-2);
            background-color: var(--_bg);
            justify-self: flex-start;
          }

          #body {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr;
            grid-template-rows: 1fr 1fr 3.8fr 0.1fr;
            gap: 0px 0px;
            grid-template-areas: 
    ". . Text Text"
    "graphic graphic Text Text"
    "graphic graphic Text Text"
    ". . . .";
            grid-area: body;
          }

          #text {
            grid-area: Text;
            font-size: var(--font-size-4);
          }

          #graphic {
            grid-area: graphic;
          }

         
          #graphic > img, ::slotted(img) {
            width: 100%;

          }

          article {
            display: grid;
            gap: var(--size-3);
          }
        `
    }
}


