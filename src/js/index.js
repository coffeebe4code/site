import { LitElement, html, css } from 'lit';
import sheet from '../css/index.css';

class CButton extends LitElement {
  static properties = {
    name,
  };
  static styles = css`
    button {
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

document.adoptedStyleSheets = [sheet];
customElements.define('c-button', CButton);
