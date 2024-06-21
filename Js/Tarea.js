let productos = [];
class Articulo {
    constructor (nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }
}

class Producto extends Articulo{
    constructor(nombre, precio, cantidad){
        super(nombre, precio);
        this.cantidad = cantidad;
    }
}

    function annadir_producto(pr){
        productos.push(pr);
        }

    function actualizar_cantidad_producto(){ 
        let nom = prompt("Defina el nombre del producto que desea modificar: ");
        let is_num = true;
        if(productos.find(producto1 => producto1.nombre === nom)){
            let producto = productos.find(producto => producto.nombre === nom);
            let nueva_cantidad = prompt("Defina la cantidad deseada: ");
            if (isNaN(nueva_cantidad) || nueva_cantidad <= 0){
                is_num = false;
            } 
            if (!is_num){
                console.log("Dato incorrecto, no hubo modificaciones.\n");
                alert("Dato incorreco, no hubo modificaciones.");
            } else{
                producto.cantidad = nueva_cantidad;
                console.log("Valor modificado con éxito");
                alert("Valor modificado con éxito");
            }
        } else {
            console.log("El producto no se encuentra en el inventario.\n");
            alert("El producto no se encuentra en el inventario.\n"); 
        }
    }
    
    function mostrar_menu(){
        let opcion;
        do{
            console.log("Bienvenido al Gestor de Inventario de su Tienda, marque una de las siguientes opciones para continuar:\n1:Añadir producto al Inventario.\n2:Actualizar cantidad de producto.\n3:Mostrar inventario.\n4:Cerrar el Gestor de Inventario");
            opcion = prompt("Bienvenido al Gestor de Inventario de su Tienda, marque una de las siguientes opciones para continuar:\n1:Añadir producto al Inventario.\n\n2:Actualizar cantidad de producto.\n\n3:Mostrar inventario.\n\n4:Cerrar el Gestor de Inventario\n\nMarque la opcion deseada: \n");
            switch (opcion) {
                case "1":
                    let esLetra = true;
                    let esNumero = true;
                    let nomb = prompt("Defina el nombre del producto que desea agregar: ");
                    let price = prompt("Defina el precio del producto que desea agregar: ");
                    let cant = prompt("Defina la cantidad en stock del producto que desea agregar: ");
                    if (!/^[a-zA-Z]+/.test(nomb) || nomb == null){
                        esLetra = false;
                    }
                    if (isNaN(price) || isNaN(cant) || price <= 0 || cant <= 0){
                        esNumero = false;
                    }
                    if (esLetra && esNumero) {
                        let producto1 = new Producto(nomb, price, cant);
                    if (productos.length == 0 || !productos.find(producto1 => producto1.nombre === nomb)){
                        annadir_producto(producto1);
                        console.log("Producto agregado al inventario satisfactoriamente.\n");
                        alert("Producto agregado al inventario satisfactoriamente.\n");
                    }
                    else{
                        console.log("El producto ya se encuentra en el inventario");
                        alert("El producto ya se encuentra en el inventario");
                    }
                    }
                    else if(!esLetra || !esNumero){
                        console.log("Datos Incorrectos.\n");
                        alert("Datos Incorrectos.\n");
                    }
                    /*else if (!esNumero){
                        console.log("Datos Incorrectos.\n");
                        alert("Datos Incorrectos.\n");
                    }*/
                    break;
                case "2":
                    if (productos.length != 0){
                        actualizar_cantidad_producto();
                    }
                    else {
                        console.log("No hay productos en el inventario\n");
                        alert("No hay productos en el inventario\n");
                    }
                    break;
                case "3":
                    if(productos.length != 0){
                        console.log("Mostrando productos disponibles: \n");
                        alert("Mostrando productos disponibles: \n");
                        productos.forEach(p => {
                            console.log(`Nombre del producto: ${p.nombre}, Precio: ${p.precio}, Cantidad: ${p.cantidad}`);
                        });
                        productos.forEach(p => {
                            alert(`Nombre del producto: ${p.nombre}, Precio: ${p.precio}, Cantidad: ${p.cantidad}`);
                        });
                    } else {
                        console.log("No hay productos en la tienda.\n");
                        alert ("No hay productos en la tienda.\n");
                    }
                    break;
                case "4":
                    console.log("Saliendo del Gestor.\n");
                    alert("Saliendo del Gestor.\n");
                    break;                       
                default:
                    console.log("Opcion no disponible, por favor introduzca los valores que se le indican");
                    alert("Opcion no disponible, por favor introduzca los valores que se le indican");
                    break;
            }
        } while (opcion !== "4");
    }

    //llamada al menu
    mostrar_menu();