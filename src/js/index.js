import { LitElement, html, css, property } from 'lit';

class CButton extends LitElement {
  @property() name = 'test';
  render() {
    return html` <button>${this.name}</button> `;
  }
}

customElements.define('c-button', CButton);
