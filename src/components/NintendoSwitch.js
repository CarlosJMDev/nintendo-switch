import './LeftController';
import './RightController';

class NintendoSwitch extends HTMLElement {
  constructor(){
    super();
    this.attachShadow({mode: 'open'});
  }

  static get styles(){
    return /* css */`
    :host{
      --container-width: 677px;
      --container-height: 288px;
      // --controller-width: 94px;
      --controller-width: 14%;
      --controller-height: 100%;

      --controller-width: 14%;
      --joystick-diameter: 50px;
      --button-diameter: 23px;

      --blue-color: #41bfe1;
      --blue-darken-color: #102b33;
      --red-color: #f25546;
      --black-color: #2e3234;
      --gray-color: #868383;
    }

    .container{
      width: var(--container-width);
      height: var(--container-height);
      // background-color: gray;
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
      <style>${NintendoSwitch.styles}</style>
      <div class="container">
      <left-controller></left-controller>
      <div class="screen"></div>
      <right-controller></right-controller>
      </div>
    `
  }
}

customElements.define('nintendo-switch', NintendoSwitch);