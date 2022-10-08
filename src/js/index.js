import { LitElement, html } from 'lit';

class CButton extends LitElement {
  static get properties() {
    return { name: name };
  }
  constructor(name) {
    super();
    this.name = name;
  }
  render() {
    return html`
      <div>
        <p>${this.name}</p>
      </div>
    `;
  }
}

customElements.define('c-button', CButton);
