let listaProductos = [
{
    name: "Ramo Rojo" ,
    precio: 38.000 ,
    descripcion: "Rosas rojas en precioso arreglo" ,
    img: "https://www.floristeriarosita.com/wp-content/uploads/2020/09/floristeria-rosita_017-19.jpeg" ,
},
{
    name: "Ramo Blanco" ,
    precio: 30.000 ,
    descripcion: "Ramo compuesto por margaritas, rosas pequeñas y lirios" ,
    img: "https://i.pinimg.com/originals/af/88/26/af88267663e6f5b576be338a396b8408.jp" ,
},
{
    name: "Ramo Azul" ,
    precio: 45.000 ,
    descripcion: "Rosas azules en " ,
    img: "https://i.pinimg.com/originals/38/ec/b2/38ecb25bad4a89724dacdab6248ed55f.jpg" ,
},
{
    name: "Ramo Amarillo" ,
    precio: 50.000 ,
    descripcion: "Rosas rojas en precioso arreglo" ,
    img: "https://floristeriafeliu.com/wp-content/uploads/2021/07/ramo-rosas-amarillas-regalo.jpg" ,
},
{
    name: "Ramo Dulces" ,
    precio: 45.000 ,
    descripcion: "Rosas rojas en precioso arreglo" ,
    img: "https://i.pinimg.com/originals/82/96/ab/8296ab35828166ea99591a3d11653888.jpg" ,
},
{
    name: "Ramo Rainbow" ,
    precio: 50.000 ,
    descripcion: "Rosas rojas en precioso arreglo" ,
    img: "https://i.pinimg.com/originals/d8/5d/cf/d85dcfc0a6a05ef23546aaff281f9cfe.jpg" ,
},
{
    name: "Ramo Fresas" ,
    precio: 35.000 ,
    descripcion: "Rosas rojas en precioso arreglo" ,
    img: "https://i.pinimg.com/564x/a3/69/f2/a369f26858153e9c19171dd28cf56ec7.jpg" ,
},
{
    name: "Ramo Ancheta" ,
    precio: 100.000 ,
    descripcion: "Rosas rojas en precioso arreglo" ,
    img: "https://floresdelasabana.com/wp-content/uploads/2020/04/arreglo-de-frutas-vino-y-chocolates-en-bogota.jpg" ,
},
{
    name: "Ramo Globos" ,
    precio: 38.000 ,
    descripcion: "Rosas rojas en precioso arreglo" ,
    img: "https://i.pinimg.com/736x/9d/90/38/9d9038935b364bdfd6d58c290c3246bf.jpg" ,
}
]

function hacerclick(id){
    console.log("diste click", id);
    RainbowShop.agregarItem(id);
}
 function eliminarClick(id) {
console.log("diatnce click", id);
RainbowShop.eliminarItem(id);
 }

function mostrarProductos(){
    let productosCodigoHTML = "";
    for( let i = 0; i < listaProductos.length; i++){
     let producto =   `<div class="row row-cols-1 row-cols-md-3 g-4">
     <div class="col">
       <div class="card">
         <img src="${listaProductos[i].img}">
         <div class="card-body">
           <h5 class="card-title">${listaProductos[i].name}</h5>
           <p class="card-text">${listaProductos[i].descripcion}</p>
           <p class="card-text">${listaProductos[i].precio}</p>
           <a href="2" class="btn btn-primary" onClick="hacerclick()=>{click(${i});}">Comprar</a>
         </div>
       </div>
     </div>
 </div>`; 
 productosCodigoHTML+= producto;

    }

document.getElementById("Catalogo-Carrito").innerHTML = productosCodigoHTML
mostrarProductos();

}

let RainbowShop = new Carrito(listaProductos)

