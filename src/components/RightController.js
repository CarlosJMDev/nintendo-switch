class RightController extends HTMLElement {
  constructor(){
    super();
    this.attachShadow({mode: 'open'});
  }

  static get styles(){
    return /* css */`
      :host{
        width: var(--controller-width);
        height: 100%;
        border-radius: 5px;
        border-top-right-radius: 70% 20%;
        border-bottom-right-radius: 70% 20%;
        background-color: var(--red-color);
        box-shadow: -1px 1px 2px white inset, 2px -1px 2px var(--blue-darken-color);
        position: relative;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 2fr 2fr 2fr;
        justify-content: center;
        justify-items: center;
        align-items: center;
      }

      :host::after {
        width: 100%;
        height: 100%;
        content: "";
        position: absolute;
        top: -3%;
        right: -2%;
        background-color: black;
        border-top-right-radius: 70% 20%;
        border-top-left-radius: 20% 10%;
        border-bottom-right-radius: 70% 70%;
        z-index: -1;
        border: 1px solid black;
        clip-path: polygon(95% 0%, 95% 20%, 10% 20%, 10% 0);
      }

      :host::before {
        width: 10%;
        height: 90%;
        background-color: black;
        content: "";
        position: absolute;
        right: 100%;
        border-radius: 5px 0 0 5px;
        z-index: -5;
      }

      .plus {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: start;
        align-items: start;
        font-weight: bolder;
        font-size: 1.2em;
        margin-inline-start: 10%;
        margin-block-end: -5%;
      }

      .buttons {
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-columns: 2fr 1.5fr 2fr;
        grid-template-rows: 1fr 1fr 1fr;
        align-items: center;
        position: relative;
      }
      
      .btn{
        width: var(--button-diameter);
        height: var(--button-diameter);
        background-color: var(--black-color);
        border-radius: 50%;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 1px 0 2px black;
        color: white;
      }
      
      .btn:nth-child(1){
        grid-column: 2;
        grid-row: 1;
        position: absolute;
        margin-block-end: 70%;
      }
      .btn:nth-child(2){
        grid-column: 3;
        grid-row: 2;
        position: absolute;
        margin-inline-start: -15%;
        margin-block-end: 70%;
      }
      .btn:nth-child(3){
        grid-column: 2;
        grid-row: 3;
        position: absolute;
        margin-block-end: 15%;
      }
      .btn:nth-child(4){
        grid-column: 1;
        grid-row: 2;
        position: absolute;
        margin-inline-start: 15%;
        margin-block-end: 27%;
      }

      .menu {
        width: calc(var(--button-diameter) * 0.8);
        height: calc(var(--button-diameter) * 0.8);
        background-color: var(--black-color);
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 0 0 2px black;
        margin-inline-end: 60%;
        margin-block-end: 20%;
        background-color: gray;
        border-radius: 50%;
      }

      .inner-menu {
        width: 80%;
        height: 80%;
        background-color: var(--black-color);
        border-radius: 50%;
        box-shadow: 0 0 2px black inset;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    `
  }

  connectedCallback(){
    this.render();
  }

  render(){
    this.shadowRoot.innerHTML = /* html */`
    <style>${RightController.styles}</style>
    <div class="plus">+</div>
    <div class="buttons">
      <button class="btn">X</button>
      <button class="btn">A</button>
      <button class="btn">B</button>
      <button class="btn">Y</button>
    </div>
    <controller-joystick></controller-joystick>
    <div class="menu">
      <div class="inner-menu">
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="80%" height="80%" viewBox="0 0 24 24">
          <path d="M 12 2.0996094 L 1 12 L 4 12 L 4 21 L 10 21 L 10 14 L 14 14 L 14 21 L 20 21 L 20 12 L 23 12 L 12 2.0996094 z"></path>
        </svg>
      </div>
    </div>
    `
  }
}

customElements.define('right-controller',  RightController);