import './Joystick';
class LeftController extends HTMLElement {
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
        border-top-left-radius: 70% 20%;
        border-bottom-left-radius: 70% 20%;
        background-color: var(--blue-color);
        box-shadow: 1px 1px 2px white inset, -2px -1px 2px var(--blue-darken-color);
        position: relative;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 2fr 2fr 2fr;
        justify-content: center;
        justify-items: center;
        align-items: center;
      }
      
      :host::before {
        animation: move-to-top-before 4s ease-in-out infinite;
        width: 100%;
        height: 100%;
        content: "";
        position: absolute;
        top: -3%;
        left: -2%;
        background-color: black;
        border-top-left-radius: 70% 20%;
        border-top-right-radius: 20% 10%;
        border-bottom-left-radius: 70% 70%;
        z-index: -1;
        border: 1px solid black;
        clip-path: polygon(5% 0, 90% 0, 90% 15%, 5% 15%);
        cursor: pointer;
      }
      
      :host::after{
        width: 10%;
        height: 90%;
        background-color: black;
        content: "";
        position: absolute;
        left: 100%;
        border-radius: 0 5px 5px 0;
        z-index: -5;
        box-shadow: 1px 0 2px black;
        cursor: pointer;
      }
      
      .minus {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: end;
        align-items: start;
        font-weight: bold;
        font-size: 2em;
        margin-inline-end: 15%;
        margin-block-start: -15%;
      }

      .minus-letter{
        margin: 0;
        cursor: pointer;
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
        position: absolute;
        font-size: var(--button-font-size);
      }

      .btn:nth-child(1){
        grid-column: 2;
        grid-row: 1;
        margin-block-end: 70%;
      }
      .btn:nth-child(2){
        grid-column: 3;
        grid-row: 2;
        margin-inline-start: -15%;
        margin-block-end: 65%;
      }
      .btn:nth-child(3){
        grid-column: 2;
        grid-row: 3;
        margin-block-start: 17%;
        margin-block-end: 24%;
      }
      .btn:nth-child(4){
        grid-column: 1;
        grid-row: 2;
        margin-inline-start: 15%;
        margin-block-end: 24%;
      }

      .menu {
        width: calc(var(--button-diameter) * 0.8);
        height: calc(var(--button-diameter) * 0.8);
        background-color: var(--black-color);
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 0 0 2px black;
        margin-inline-start: 60%;
        margin-block-end: 20%;
        border-radius: 10%;
      }

      .inner-menu {
        width: 65%;
        height: 65%;
        background-color: #121212;
        border-radius: 50%;
        box-shadow: 0 0 2px black inset;
      }
    `
  }

  connectedCallback(){
    this.render();
  }

  render(){
    this.shadowRoot.innerHTML = /* html */`
    <style>${LeftController.styles}</style>
    <div class="minus"><p class="minus-letter">-</p></div>
    <controller-joystick></controller-joystick>
    <div class="buttons">
      <button class="btn">▲</button>
      <button class="btn">▶</button>
      <button class="btn">▼</button>
      <button class="btn">◀</button>
    </div>
    <div class="menu"><div class="inner-menu"></div></div>
    `
  }
}

customElements.define('left-controller',  LeftController);