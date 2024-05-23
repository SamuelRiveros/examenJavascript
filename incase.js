/*    agregarAlCarrito(event) {
        const card = event.target.closest('.card');
        const nombre = card.querySelector('.principal p:first-child').textContent;
        const precio = card.querySelector('.principal p:last-child').textContent;
        const imagen = card.querySelector('img').src;
        const id = card.querySelector(".id").textContent
        const producto = {
            nombre: nombre,
            precio: precio,
            imagen: imagen,
            id: id,

        };
        this.exportarACarrito(producto);

        // suma de cantidad en el carrito //
        
        
    }

    exportarACarrito(producto) {
        let dataCarro = JSON.parse(localStorage.getItem('carrito')) || [];
        let instanceCar = new carrito()

        // Buscar si el producto ya está en el carrito
        const existingProductIndex = dataCarro.findIndex(item => item.id === producto.id);
        const carLabel = document.querySelector('#idCantCarrito')
    
        // Si el producto ya está en el carrito, incrementar su cantidad
        if (existingProductIndex !== -1) {
            dataCarro[existingProductIndex].quantity++;
        } else {
            // Si el producto no está en el carrito, añadirlo
            dataCarro.push({
                id: producto.id,
                nombre: producto.nombre,
                imagen: producto.imagen,
                precio: producto.precio,
                quantity: 1,  // Inicialmente la cantidad es 1
            });
        }
    
        // Almacenar el carrito actualizado en localStorage
        localStorage.setItem('carrito', JSON.stringify(dataCarro)); 
        //localStorage.getItem('carrito')
        //localStorage.removeItem("carrito")
        carLabel.innerHTML = dataCarro.length
        console.log("VALOrrrrrr", dataCarro)
        instanceCar.addCar()
        document.querySelector('#errorLoad').innerHTML = ` <my-carrito style="width: 100%; height: 100%;"></my-carrito>`
        
        
    }