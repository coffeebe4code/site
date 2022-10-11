import { LitElement, html, css } from 'lit';
import '../css/index.css';

class CButton extends LitElement {
  static properties = {
    _name: {},
    _class: {},
  };
  static styles = css`
    :host {
      padding-left: 8px;
      padding-right: 4px;
    }
    .primary {
      background-color: var(--colorPrimary);
      color: white;
    }
    .tertiary {
      background-color: var(--colorTertiary);
    }
    .primary:hover {
      background-color: var(--colorPrimaryLighter);
    }
    .tertiary:hover {
      background-color: var(--colorTertiaryDarker);
    }
    button {
      cursor: pointer;
      min-width: 80px;
      border-radius: 4px;
      border: 2px solid transparent;
      font-size: var(--fontMed);
      padding: 0.5rem;
    }
  `;

  constructor(_name, _class) {
    super();
    this._name = _name;
    this._class = _class;
  }

  render() {
    return html`<button type="button" class=${this._class}>
      ${this._name}
    </button>`;
  }
}

customElements.define('c-button', CButton);
