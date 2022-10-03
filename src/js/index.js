import {LitElement, html} from 'lit';

class MyElement extends LitElement {

  render(){
    return html`
      <div>
        <p>A paragraph</p>
      </div>
    `;
  }
}

customElements.define('my-element', MyElement);

console.log('hello');

