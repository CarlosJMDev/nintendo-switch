
class DockFrontTop extends HTMLElement {
  constructor(){
    super();
    this.attachShadow({mode: 'open'});
  }

  static get styles(){
    return /* css */`
    :host{
      position: absolute;
        top: -6.6%;
        perspective: 400px;
        transform-style: preserve-3d;
    }

    .container{
      width: calc(var(--container-width) * .98);
      height: var(--top-height);
      background-color: var(--black-color);
      background-image: url("https://www.transparenttextures.com/patterns/black-orchid.png");
      border-radius: 5px 5px 0 0;
      transform-origin: 50% 100%;
      transform: rotateX(75deg);
      box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3);
      position: relative;
    }
    `
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */ `
      <style>${DockFrontTop.styles}</style>
      <div class="container">
      </div>
    `
  }
}

customElements.define('dock-front-top', DockFrontTop);