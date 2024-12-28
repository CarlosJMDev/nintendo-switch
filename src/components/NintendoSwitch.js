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
      
      .animation-console {
        animation: animation-console 8s ease-in-out infinite;
      }

      @keyframes animation-console {
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
        @keyframes animation-console {
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

    const console = this.shadowRoot.getElementById("console");

    setInterval(() => {
      console.classList.add('animation-console');

      setTimeout(() => {
        console.classList.remove('animation-console');
      }, 8000);
    }, 12000);
  }

  render(){
    this.shadowRoot.innerHTML = /* html */ `
    <style>${NintendoSwitch.styles}</style>
    <div class="container">
      <div id="console" class="console">
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