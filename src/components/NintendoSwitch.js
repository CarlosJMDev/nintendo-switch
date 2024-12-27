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
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      .console{
        animation: ChargeNintendo 8s ease-in-out infinite;
      }


      @keyframes ChargeNintendo {
        0%{
          transform: translate(0, 0);
        }
        30%{
          transform: translate(0, 100%);
        }
        70%{
          transform: translate(0, 100%);
        }
        100%{
          transform: translate(0, 0);
        }
      }

      @media (max-width: 768px) {
        @keyframes ChargeNintendo {
          0%{
            transform: translate(0, 0);
          }
          30%{
            transform: translate(0, 107%);
          }
          70%{
            transform: translate(0, 107%);
          }
          100%{
            transform: translate(0, 0);
          }
        }
      }

      .console {
        margin-block-end: 2rem;
      }
    `
  }

  connectedCallback(){
    this.render();
  }

  render(){
    this.shadowRoot.innerHTML = /* html */ `
    <style>${NintendoSwitch.styles}</style>
    <div class="container">
      <div class="console">
        <nintendo-switch-console></nintendo-switch-console>
      </div>
      <div class="dock">
        <docking-station></docking-station>
      </div>
    </div>
    `
  }
}

customElements.define('nintendo-switch', NintendoSwitch);