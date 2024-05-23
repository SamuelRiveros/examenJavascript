import { LitElement, css, html } from 'lit'

import { peliculasdata,  
    getvideotrailer, 
    getphotoposter, 
    getmoredetailsofparticularimDb, 
    moviesources} from "../modules/consultas.js";

export class contentData extends LitElement {
  static get properties() {
    return {
        
    }
  }

  constructor() {
    super()
    this.docsHint = 'Click on the Vite and Lit logos to learn more'
    this.count = 0
  }

  render() {
    return html`
    <div class="Pelicula">
            <div class="imagen"></div>
            <p id="añolanzamiento" class="añolanzamiento">Año de Lanzamiento</p>
    </div>
    `
  }

  _onClick() {
    this.count++
  }

  static get styles() {
    return css`
    

.imagen {
	width: 200px;
	background-color: red;
	height: 300px;
}
    `
  }
}

window.customElements.define('my-contentdata', contentData)
