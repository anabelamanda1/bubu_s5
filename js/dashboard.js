const compras = [
    {   
        "id": "001",
        "uuid": "15414581asda1a1x",
        "nombre": "Compra en tienda",
        "monto": "S/. 50",
        "detalle": "La compra cancelada a las 9:30pm",
        "productos": [
            {
                "SKU": "14815",
                "nombre": "Gaseosa Coreana",
                "monto": "S/ 25",
                "imagen":"images/imagen.jpg"
            },
            {
                "SKU": "145811",
                "nombre": "Ramen Picante",
                "monto": "S/ 20",
                "imagen":"images/imagen.jpg"
            },
            {
                "SKU": "148112",
                "nombre": "Palillos",
                "monto": "S/ 5",
                "imagen":"images/imagen.jpg"
            }
        ]
    },
    {
        "id": "002",
        "uuid": "15414581ytytaaddq1",
        "nombre": "Compra en Web",
        "monto": "S/. 50.00",
        "detalle": "Compra cancelada mediante aplicativo - BCP a las 7:20pm",
        "productos": [
            {
                "SKU": "177774",
                "nombre": "Ramen con picante medio",
                "monto": "S/ 30",
                "imagen":"images/imagen.jpg"
            },
            {
                "SKU": "177771",
                "nombre": "Helado coreano",
                "monto": "S/ 9.00",
                "imagen":"images/imagen.jpg"
            },
            {
                "SKU": "177779",
                "nombre": "Peperos",
                "monto": "S/ 11.00",
                "imagen":"images/imagen.jpg"
            }
        ]
    },
    {
        "id": "003",
        "uuid": "1566664514aa",
        "nombre": "Compra en tienda",
        "monto": "S/. 8",
        "detalle": "La compra fue cancelada mediante billetera digital - Plina las 6:06pm",
        "productos": [
            {
                "SKU": "666",
                "nombre": "Galleta coreana",
                "monto": "S/ 8",
                "imagen":"images/imagen.jpg"
            }
        ]
    }
];
//Imprimir esa lista de compras
const $misProductos = $("#misProductos");
compras.forEach((compra) => {
    //2. Crear una NUEVA URL donde usemos de parametro el ID
    const link = "producto.html?idcompra="+compra.id;
    const template = `
        <li class="collection-item avatar" data-id="${compra.id}" data-uuid="${compra.uuid}">
            <i class="material-icons circle red">play_arrow</i>
            <span class="title">${compra.nombre}</span>
            <p>
                ${compra.detalle}        
            </p>
            <p class="precio">
                ${compra.monto}
            </p>
            <a href="${link}" class="waves-effect waves-light btn btnIcon">
                <i class="material-icons">grade</i>
                Ver producto
            </a>
        </li>
    `;
    $misProductos.append(template);
});

/*
    3. En esa URL vamos a leer el parametro 
    e imprimir los datos de los productos
*/

const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const idcompra = params.get("idcompra");
let misproductos = [];
if (idcompra) {
    compras.forEach((compra) => {
        if (compra.id == idcompra) {
            const mytitle = "Historial de productos de " + compra.nombre;
            $("#myTitle").html(mytitle);
            misproductos = compra.productos;           
        }
    });
    if (misproductos.length > 0) {
        misproductos.forEach((producto)=> {
            const template = `
                <li class="collection-item">
                    <img class="producto-imagen" src="${producto.imagen}">
                    <p class="sku">SKU: ${producto.SKU}</p>
                    <p class="nombre">${producto.nombre}</p>
                    <p class="monto">${producto.monto}</p>
                </li>
            `;
            $("#myProducts").append(template);
        });
    }
}