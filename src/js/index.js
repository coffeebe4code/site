import { LitElement, html, css } from 'lit';

class CButton extends LitElement {
  static properties = {
    name,
  };
  static styles = css`
    button {
      background: yellow;
      border-radius: 0px;
      color: white;
      padding: 0.5rem;
    }
  `;

  constructor(name) {
    super();
    this.name = name;
  }

  render() {
    return html`<button type="button">${this.name}</button>`;
  }
}

customElements.define('c-button', CButton);
