class TopScreen extends HTMLElement {
  constructor(){
    super();
    this.attachShadow({mode: 'open'});
  }

  static get styles(){
    return /* css */`
    :host{
      position: absolute;
        top: -12%;
        perspective: 1000px;
        transform-style: preserve-3d;
    }

    .container{
      width: calc(var(--top-width) * .98);
      height: var(--top-height);
      background-color: var(--black-color);
      border-radius: 5px 5px 0 0;
      transform-origin: 50% 100%;
      transform: rotateX(75deg);
      box-shadow: -1px 0 4px rgba(255, 255, 255, 0.5) inset;
      position: relative;
    }
    `
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */ `
      <style>${TopScreen.styles}</style>
      <div class="container">
      </div>
    `
  }
}

customElements.define('top-screen', TopScreen);