(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))b(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const r of e.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&b(r)}).observe(document,{childList:!0,subtree:!0});function p(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function b(t){if(t.ep)return;t.ep=!0;const e=p(t);fetch(t.href,e)}})();class i extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
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
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${i.styles}</style>
    <div class="container">
      <div class="inner-circle"></div>
      <div class="inner-line"></div>
      <div class="inner-line"></div>
      <div class="inner-line"></div>
      <div class="inner-line"></div>
    </div>
    `}}customElements.define("controller-joystick",i);class n extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
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
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${n.styles}</style>
    <div class="minus"><p class="minus-letter">-</p></div>
    <controller-joystick></controller-joystick>
    <div class="buttons">
      <button class="btn">▲</button>
      <button class="btn">▶</button>
      <button class="btn">▼</button>
      <button class="btn">◀</button>
    </div>
    <div class="menu"><div class="inner-menu"></div></div>
    `}}customElements.define("left-controller",n);class s extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
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
        box-shadow: -1px 0 2px black;
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
        font-size: var(--button-font-size);
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
        width: calc(var(--button-diameter) * 0.9);
        height: calc(var(--button-diameter) * 0.9);
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
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${s.styles}</style>
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
    `}}customElements.define("right-controller",s);class a extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
    :host{
      position: absolute;
        top: -12%;
        perspective: 1000px;
        transform-style: preserve-3d;
    }

    .container{
      width: calc(var(--top-width) * .98);
      height: var(--top-height);
      background-color: var(--black-color);
      border-radius: 5px 5px 0 0;
      transform-origin: 50% 100%;
      transform: rotateX(75deg);
      box-shadow: -1px 0 4px rgba(255, 255, 255, 0.5) inset;
      position: relative;
    }
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
      <style>${a.styles}</style>
      <div class="container">
      </div>
    `}}customElements.define("top-screen",a);class c extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
    :host{
      --container-width: 677px;
      --container-height: 288px;
      --controller-width: 14%;
      --controller-height: 100%;
      --top-width: 477px;
      --top-height: 35px;
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
        --top-width: 357px;
        --top-height: 25px;
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
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
      <style>${c.styles}</style>
      <div class="container">
      <left-controller></left-controller>
      <div class="screen">
        <top-screen></top-screen>
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
    `}}customElements.define("nintendo-switch-console",c);class l extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
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
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
      <style>${l.styles}</style>
      <div class="container">
      </div>
    `}}customElements.define("dock-front-top",l);class d extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
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

    .light {
      position: absolute;
      left: 0;
      bottom: 14%;
      width: 3%;
      height: 2%;
      background-color: black;
    }
    
    .animation-light {
      animation: ChangeOfLight 8s ease-in-out infinite;
    }

    @keyframes ChangeOfLight {
      0%{
        background-color: black;
      }
      50%{
        background-color: green;
        box-shadow: 0 0 8px green;
      }
      70%{
        box-shadow: 0 0 8px green;
        background-color: green;
      }
      100%{
        background-color: black;
      }
    }
    `}connectedCallback(){this.render();const o=this.shadowRoot.getElementById("light");setInterval(()=>{o.classList.add("animation-light"),setTimeout(()=>{o.classList.remove("animation-light")},8e3)},12e3)}render(){this.shadowRoot.innerHTML=`
      <style>${d.styles}</style>
      <div class="container">
        <div class="container-background">
          <dock-front-top style="--container-width: var(--container-width-2);"></dock-front-top>
        </div>
        <div class="container-front">
          <dock-front-top style="--container-width: var(--container-width-1);"></dock-front-top>
          <div id="light" class="light"></div>
          <picture class="image">
            <source srcset="/Nintendo-Switch-Logo.avif" type="image/avif">
            <source srcset="/Nintendo-Switch-Logo.webp" type="image/webp">
            <img src="/Nintendo-Switch-Logo.jpg" alt="" type="image.jpeg" style="height: var(--image-height); opacity: .9;">
          </picture>
        </div>
      </div>
    `}}customElements.define("docking-station",d);class h extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
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
    `}connectedCallback(){this.render();const o=this.shadowRoot.getElementById("console");setInterval(()=>{o.classList.add("animation-console"),setTimeout(()=>{o.classList.remove("animation-console")},8e3)},12e3)}render(){this.shadowRoot.innerHTML=`
    <style>${h.styles}</style>
    <div class="container">
      <div id="console" class="console">
        <nintendo-switch-console></nintendo-switch-console>
      </div>
      <div class="dock">
        <docking-station></docking-station>
      </div>
    </div>
    `}}customElements.define("nintendo-switch",h);
