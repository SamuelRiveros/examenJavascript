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
    <div class="Peliculadata">
        <div class="imagen">
            <img src="https://m.media-amazon.com/images/M/MV5BOTI3NzI3MjUtZGY4Yy00ODU0LTg3OTMtNWYyOWI5MWIzNjdiXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg"></img>
        </div>
    <p id="añolanzamiento" class="añolanzamiento">Niram Maaratha Pookkal, 1979</p>
    </div>

    <div class="Peliculadata">
        <div class="imagen">
            <img src="https://m.media-amazon.com/images/M/MV5BOTRlYjJhMTItY2FlOC00ZDc3LWIwNTctMTI2YTFmODFkZWUzXkEyXkFqcGdeQXVyOTIzODUxMjk@._V1_.jpg"></img>
        </div>
    <p id="añolanzamiento" class="añolanzamiento">Varumayin Niram Sigappu, 1980</p>
    </div>

    <div class="Peliculadata">
        <div class="imagen">
            <img src="https://m.media-amazon.com/images/M/MV5BOTYwYTRiZTctZjU2NC00ZTRkLWExYTUtODU1NTBhMzU1MzM4XkEyXkFqcGdeQXVyMjkxNzQ1NDI@._V1_.jpg"></img>
        </div>
    <p id="añolanzamiento" class="añolanzamiento">Niram, 1999</p>
    </div>

    <div class="Peliculadata">
        <div class="imagen">
            <img src="https://m.media-amazon.com/images/M/MV5BOTYwYTRiZTctZjU2NC00ZTRkLWExYTUtODU1NTBhMzU1MzM4XkEyXkFqcGdeQXVyMjkxNzQ1NDI@._V1_.jpg"></img>
        </div>
    <p id="añolanzamiento" class="añolanzamiento">Niram, 2007</p>
    </div>

    <div class="Peliculadata">
        <div class="imagen">
            <img src="https://m.media-amazon.com/images/M/MV5BMTZjMTRiYTYtNWYyMS00OTE1LTljNzEtMDBjZTIyNWZjYmIwXkEyXkFqcGdeQXVyOTk3NTc2MzE@._V1_.jpg"></img>
        </div>
    <p id="añolanzamiento" class="añolanzamiento">Akashathinte Niram, 2012</p>
    </div>



    
    
    `
  }

  static get styles() {
    return css`

    .Peliculadata {
        display: flex;
        padding-left: 10px;
        justify-content: center;
        flex-direction: column;
        color: black;
    }

    * {
        padding: 0;
        margin: 0
    }
    .Peliculadata .imagen img {
        display: flex;
        width: 300px;
    }
    `
  }
}

window.customElements.define('my-contentdata', contentData)
