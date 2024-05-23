import { LitElement } from "lit";
import { MyElement } from "../js/my-element";


export class peliculasporañodelanzamiento extends LitElement {
    static properties = {
        añopelicula: {type: Number},
    }

    constructor() {
        super();
        console.log('a');
        
        this.dataCarrito = []
        
        const carritoData = JSON.parse(localStorage.getItem('carrito')) || [];
        this.dataCarrito = carritoData.map(item => ({
            imagen: item.imagen,
            nombre: item.nombre,
            cantidad: item.quantity,
            precio: item.precio,
            subtotal: item.quantity * item.precio
        }));
    
    }


}