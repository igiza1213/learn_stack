import { LitElement, html } from "lit";

class MyArticle extends LitElement {
    render() {
        return html` <article>article</article> `;
    }
}
customElements.define("my-article", MyArticle);
