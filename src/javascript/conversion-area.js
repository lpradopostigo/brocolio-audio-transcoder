import { LitElement, html, css } from 'lit';
import '@shoelace-style/shoelace/dist/components/progress-bar/progress-bar.js';
const states = ['loading', 'ready', 'converted'];
export class ConversionArea extends LitElement {


  static get styles() {
    return css`
      :host {
        display: block;
      }
      .hidden{
        display: none;
      }
    `;
  }

  static get properties() {
    return {
      currentState: { type: String }
    };
  }

  constructor() {
    super();
    this.currentState = states[0];
  }

  render() {

    return html`
      <slot name="progress-indicator" class=${this.currentState === states[0]  ? null : "hidden"}></slot>
      <slot name="submit-button" class=${this.currentState === states[1]  ? null : "hidden"}></slot>
      <slot name="download-button" class=${this.currentState === states[2]  ? null : "hidden"}></slot>
    `;
  }
}

window.customElements.define('conversion-area', ConversionArea);