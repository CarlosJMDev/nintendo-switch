import './LeftController';
import './RightController';

class NintendoSwitchConsole extends HTMLElement {
  constructor(){
    super();
    this.attachShadow({mode: 'open'});
  }

  static get styles(){
    return /* css */`
    :host{
      --container-width: 677px;
      --container-height: 288px;

      --controller-width: 14%;
      --controller-height: 100%;

      --image-width: 412px;
      --joystick-diameter: 50px;
      --button-diameter: 23px;

      --button-font-size: .8rem;

      --blue-color: #41bfe1;
      --blue-darken-color: #102b33;
      --red-color: #f25546;
      --black-color: #2e3234;
      --gray-color: #868383;
    }

    @media (max-width: 768px) {
      :host {
        --container-width: 508px;
        --container-height: 216px;
        --joystick-diameter: 40px;
        --button-diameter: 18px;
        --image-width: 288px;
        --button-font-size: .7rem;
      }
    }

    .container{
      width: var(--container-width);
      height: var(--container-height);
      display: flex;
    }

    .left-controller{
      width: var(--controller-width);
      height: var(--controller-height);
      border-top-left-radius: 70% 20%;
      border-bottom-left-radius: 70% 20%;
      background-color: var(--blue-color);
      box-shadow: 1px 1px 2px white inset, -2px -1px 2px var(--blue-darken-color);
    }

    .screen{
      width: 72%;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: var(--black-color);
      border: 1px solid black;
      border-radius: 0 0 4px 4px;
      position: relative;
      margin-inline: 1px;
      box-shadow: 0 2px 3px white inset, 0 -2px 6px black inset;
    }
    .screen::before,
    .screen::after {
      width: 2%;
      height: 5%;
      background-color: var(--background-color);
      content: "";
      position: absolute;
      top: -.3%;
    }

    .screen::before {
      left: -.2%;
      border-radius: 0 0 10px 0;
      border-right: 1px solid black;
      border-bottom: 1px solid black;
    }
    
    .screen::after {
      right: -.2%;
      border-radius: 0 0 0 10px;
      border-left: 1px solid black;
      border-bottom: 1px solid black;
    }

    .black-screen {
      width: 94%;
      height: 90%;
      background-color: black;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .image{
      width: 90%;
      height: 90%;
      display: flex;
      justify-content: center;
      align-items: center;
      background-image: contain;
    }

    .right-controller{
      width: 14%;
      background-color: green;
      border-top-right-radius: 70% 20%;
      border-bottom-right-radius: 70% 20%;
      background-color: var(--red-color);
    }
    `
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */ `
      <style>${NintendoSwitchConsole.styles}</style>
      <div class="container">
      <left-controller></left-controller>
      <div class="screen">
        <div class="black-screen">
          <picture class="image">
            <source srcset="/homemenu.avif" type="image/avif">
            <source srcset="/homemenu.webp" type="image/webp">
            <img src="/homemenu.jpg" alt="" type="image.jpeg" style="width: var(--image-width);">
          </picture>
        </div>
      </div>
      <right-controller></right-controller>
      </div>
    `
  }
}

customElements.define('nintendo-switch-console', NintendoSwitchConsole);