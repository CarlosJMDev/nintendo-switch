class ConsoleScreen extends HTMLElement {
  constructor(){
    super();
    this.attachShadow({mode: 'open'});
  }

  static get styles(){
    return /* css */`
      :host{
        width: var(--controller-width);
        height: 100%;
        border-top-left-radius: 70% 20%;
        border-bottom-left-radius: 70% 20%;
        background-color: var(--blue-color);
        box-shadow: 1px 1px 2px white inset, -2px -1px 2px var(--blue-darken-color);
        position: relative;
      }
    `
  }

  connectedCallback(){
    this.render();
  }

  render(){
    this.shadowRoot.innerHTML = /* html */`
    <style>${ConsoleScreen.styles}</style>
    <div class="container">
    </div>
    `
  } 
}

customElements.define('console-screen',  ConsoleScreen);