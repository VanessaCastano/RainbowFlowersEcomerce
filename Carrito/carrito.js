class Carrito{
    constructor(productos) {
        this.productos = productos; 
        this.itemSeleccionados = [];
        
     }
    agregarItem(id){ 
        this.itemSeleccionados.push (this.productos[id]);

        this.mostrarItems();
    }
    eliminarItem(id){ 
        this.mostrarItems();
        console.log(this.itemSeleccionados);
        this.itemSeleccionados.slice(id, 1);
        console.log(this.itemSeleccionados.slice(id, 1));
        this.mostrarItems();

    }
    mostrarItem(){
        let productosCodigoHTML = "";
        for( let i = 0; i < this.itemSeleccionados.length; i++) {
            let productoSeleccionados = ` <li class="list-group-item d-flex flex-row justify-content-evenly d-flex align-items-star">
            <img 
            src="${this.itemSeleccionados[i].img}" 
            class="item-img">
            <p>${this.itemSeleccionados[i].name}</p>
            <p1><i>${this.itemSeleccionados[i].precio}</i></p1>
          <button type="button" class="btn btn-danger" onclick="eliminarClick(${i};">Eliminar</button>
        </li>`;  
        productosCodigoHTML += productoSeleccionados 
        total += this.itemSeleccionados[i].precio; 

        }    
        document.getElementById("lista-compras").innerHTML = productosCodigoHTML;
        console.clear();
        console.log(total)
    }



}