class TitleComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `<h1>Title</h1>`;
  }
}

customElements.define("title-component", TitleComponent);
