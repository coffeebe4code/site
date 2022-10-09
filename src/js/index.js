import { LitElement, html, css, unsafeCss } from 'lit';
import '../css/index.css';

class PButton extends LitElement {
  static properties = {
    name,
    focus,
  };
  static styles = css`
    :host {
      padding-left: 2px;
      padding-right: 2px;
    }
    button {
      border-radius: 3px;
      font-weight: 400;
      border: 2px solid transparent;
      font-size: var(--fontMed);
      background-color: var(${unsafeCss(this.focusVal)});
      color: white;
      padding: 0.5rem;
    }
  `;

  constructor(name, focus) {
    super();
    this.name = name;
    this.focus = focus;
  }

  render() {
    return html`<button type="button">${this.name}</button>`;
  }
}

customElements.define('p-button', PButton);
