import { LitElement, html } from "lit";

class MyHeader extends LitElement {
    render() {
        return html` <header>header</header> `;
    }
}
customElements.define("my-header", MyHeader);
