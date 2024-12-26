import './console/NintendoSwitchConsole';
import './dock/Dock';

class NintendoSwitch extends HTMLElement {
  constructor(){
    super();
    this.attachShadow({mode: 'open'});
  }

  static get styles(){
    return /* css */`
      :host{
        
      }

      .container {
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    `
  }

  connectedCalback(){
    this.render();
  }

  render(){
    this.shadowRoot.innerHTML = /* html */ `
    <style>${NintendoSwitch.styles}</style>
    <h1>Hola</h1>
    <div class="container">
      <nintendo-switch-console></nintendo-switch-console>
      <docking-station></docking-station>
    </div>
    `
  }
}

customElements.define('nintendo-switch', NintendoSwitch);