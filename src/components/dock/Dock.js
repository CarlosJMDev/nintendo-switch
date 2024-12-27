import './DockFrontTop'

class Dock extends HTMLElement {
  constructor(){
    super();
    this.attachShadow({mode: 'open'});
  }

  static get styles(){
    return /* css */`
    :host{
      --container-width-1: 486px;
      --container-width-2: 438px;
      --container-height: 288px;

      --top-height: 19.5px;

      --image-height: 212px;

      --blue-color: #41bfe1;
      --blue-darken-color: #102b33;
      --red-color: #f25546;
      --black-color: #2e3234;
      --gray-color: #868383;
    }

    @media (max-width: 768px) {
      :host {
        --container-width-1: 365px;
        --container-width-2: 330px;
        --container-height: 216px;
        --joystick-diameter: 40px;
        --button-diameter: 18px;
        --image-height: 150px;
        --button-font-size: .7rem;
      }
    }

    .container{
      position: relative;
      width: var(--container-width-1);
      height: var(--container-height);
      margin-block-start: 2rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .container-background {
      width: calc(var(--container-width-1) * .9);
      height: var(--container-height);
      background-color: var(--black-color);

      position: absolute;
      top: -25%;

      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 6px;

      margin-block-start: 2.3rem;
      z-index: -1
    }

    .container-front {
      width: var(--container-width-1);
      height: var(--container-height);
      background-color: var(--black-color);
      background-image: url("https://www.transparenttextures.com/patterns/black-orchid.png");
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 6px;
      position: relative;
      z-index: 1;
    }

    `
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */ `
      <style>${Dock.styles}</style>
      <div class="container">
        <div class="container-background">
          <dock-front-top style="--container-width: var(--container-width-2);"></dock-front-top>
        </div>
        <div class="container-front">
          <dock-front-top style="--container-width: var(--container-width-1);"></dock-front-top>
          <picture class="image">
            <source srcset="/Nintendo-Switch-Logo.avif" type="image/avif">
            <source srcset="/Nintendo-Switch-Logo.webp" type="image/webp">
            <img src="/Nintendo-Switch-Logo.jpg" alt="" type="image.jpeg" style="height: var(--image-height); opacity: .9;">
          </picture>
        </div>
      </div>
    `
  }
}

customElements.define('docking-station', Dock);