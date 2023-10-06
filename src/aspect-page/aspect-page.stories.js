import {html} from 'lit';
import './aspect-page.js';

export default {
    title: "Aspect Page",
    component: 'aspect-page',
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: {control: 'color'},
        pos: {options: ['noun', 'verb'], defaultValue: "noun"},
        title: {control:"text", defaultValue: "This is a cool title."},
        aspect: {
            control:"select",
            options: [
                'Processing', 'Analysis', 'Use'
            ], defaultValue: "Processing"
        }
    },
    args: {},
    render: (args) => html`

        <h1>aspect-page Demo</h1>
        <br>
        <p>Args: ${args}</p>

        <aspect-page pos="${args.pos}" title="${args.title}" aspect="${args.aspect}">
            <div slot="graphic">
                <img src="/download.jpg" style="width:100%;"/>
            </div>
        </aspect-page>

    `
};


export const Verb = {
    args: {
        pos: 'verb',

    },
};

