import { LitElement } from "lit";


export class peliculasporañodelanzamiento extends LitElement {
    static properties = {
        añopelicula: {type: Number},
    }

    constructor() {
        super();
        console.log('a');
        
        this.dataPeliculas = []
        
        const peliculasdata = JSON.parse(localStorage.getItem('carrito')) || [];
        this.dataCarrito = carritoData.map(item => ({
            imagen: item.imagen,
            nombre: item.nombre,
            cantidad: item.quantity,
            precio: item.precio,
            subtotal: item.quantity * item.precio
        }));
    
    }


}

window.customElements.define('añolanzamiento', MyElement)