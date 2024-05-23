import { LitElement, css, html } from 'lit'

import {  } from "module";

export class contentData extends LitElement {
  static get properties() {
    return {

      //docsHint: { type: String },

      //count: { type: Number },
    }
  }

  constructor() {
    super()
    this.docsHint = 'Click on the Vite and Lit logos to learn more'
    this.count = 0
  }

  render() {
    return html`

    `
  }

  _onClick() {
    this.count++
  }

  static get styles() {
    return css`
    
    `
  }
}

window.customElements.define('my-contentdata', contentData)
