class Joystick extends HTMLElement {
  constructor(){
    super();
    this.attachShadow({mode: 'open'});
  }

  static get styles(){
    return /* css */ `
      :host{
        width: var(--joystick-diameter);
        height: var(--joystick-diameter);
        background-color: var(--black-color);
        border-radius: 50%;
        box-shadow: 0 0 3px white inset;
      }

      .container{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
      }

      .inner-circle{
        width: 75%;
        height: 75%;
        border-radius: 50%;
        box-shadow: 0 0 4px black inset, 0 0 4px black;
      }

      .inner-line{
        width: 20%;
        height: 4%;
        background-color: var(--black-color);
        position: absolute;
      }
      .inner-line:nth-child(2) {
        top: 9%;
        rotate: 90deg;
      }
      .inner-line:nth-child(3) {
        right: 2%;
      }
      .inner-line:nth-child(4) {
        bottom: 9%;
        rotate: 90deg;
      }
      .inner-line:nth-child(5) {
        left: 2%;
      }
    `
  }

  connectedCallback(){
    this.render();
  }

  render(){
    this.shadowRoot.innerHTML = /* html */ `
    <style>${Joystick.styles}</style>
    <div class="container">
      <div class="inner-circle"></div>
      <div class="inner-line"></div>
      <div class="inner-line"></div>
      <div class="inner-line"></div>
      <div class="inner-line"></div>
    </div>
    `
  }
}

customElements.define('controller-joystick', Joystick);