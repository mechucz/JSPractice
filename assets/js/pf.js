// JavaScript Document

/************Presentamos los productos en el HTML****************/

//INFO PARA EL USUARIO
const productos=document.getElementById("productos");
const adicionales=document.getElementById("adicionales");

//OPCIONES DEL COTIZADOR
const opSesion=document.getElementById("opSesion");
const opAdicional=document.getElementById("opAdicional");

/************Recuperamos los objetos de un JSONL****************/
const listadoProductos= "https://raw.githubusercontent.com/mechucz/JSPractice/master/assets/js/productos.json";
const listadoAdicionales= "https://raw.githubusercontent.com/mechucz/JSPractice/master/assets/js/adicionales.json";


/************Array para guardar los productos y adicionales****************/
const listaProdu=[];
const listaAdic=[];

/************Funcion para agregar al carro****************/	
let prod = "";
let cart=[];


	function addToCart(prod){
			cart.push(prod);
			console.log(cart);
			
	//Muestro con sweet alert
		Swal.fire({
		title:"Producto agregado:",
		text:prod,
		icon:"success",
		iconColor:"#d0aeb2",
		imageUrl:"https://simplybook.me/uploads/mcstudiophotos/image_files/original/bfee6fc77935df3f8471def45e8906be.jpg",
		background:"#f7e7e8",
		backdrop:"#f5eff0",
		confirmButtonText:"cerrar",
		confirmButtonColor:"#d0aeb2",
	});
			
		}
/************Creo el contenedor para agregar los botones-carrito dinamicamente****************/	


fetch(listadoProductos)
	.then(respuesta=>respuesta.json())
	.then(datos=>{
	datos.forEach(producto=>{	

	
		productos.innerHTML+=`<h3>${producto.nombre}</h3>
							<p>Precio: ${producto.price}</p>
							<p>Descripcion: ${producto.description}</<p>
							<p>Cantidad de fotos: ${producto.digitals}</<p>
							<p>Cant max de personas: ${producto.maxPeople}</<p>
							<p><input type = 'button' value = 'Agregar al carrito' class='btn btn-danger' onclick = addToCart('${producto.nombre}')></p>`

		
		//Pasamos el nombre de cada producto a las opciones del cotizador
		opSesion.innerHTML+=`<option>${producto.nombre}</option>`
		//Guardamos los productos en el array antes declarado 
		listaProdu.push(producto);
		
	})
	
})
.catch(error =>console.log(error))
.finally(()=> console.log("Proceso finalizado"));





//ADICIONALES
fetch(listadoAdicionales)
	.then(respuesta=>respuesta.json())
	.then(datos=>{
	datos.forEach(adicional=>{
	
		adicionales.innerHTML+=`<h4>${adicional.nombre}</h4>
							<p>Precio: ${adicional.price}</p>
							<p>Descripcion: ${adicional.description}</<p>
							<p><input type = 'button' value = 'Agregar al carrito' class='btn btn-danger' onclick = addToCart("${adicional.nombre}")></p>`
		//Pasamos el nombre de cada producto a las opciones del cotizador
		opAdicional.innerHTML+=`<option>${adicional.nombre}</option>`
		//Guardamos los adicionales en el array antes declarado 
		listaAdic.push(adicional);
					
	})
	
})
.catch(error =>console.log(error))
.finally(()=> console.log("Proceso finalizado"));


//Generamos la clase quotes

class Quote{
	constructor (sesionType, packType, totalPrice){
		this.sesionType= sesionType;
		this.packType = packType;
		this.totalPrice=totalPrice;

	}
}

//Generamos un recipiente para las distintas cotizaciones:
let quotes=[];

//Vemos si tenemos algo guardado en localStorage

if(localStorage.getItem("quotes")){
   
   let quote = JSON.parse(localStorage.getItem("quotes"));
	quotes.push(...quote);
 }

const cotizador= document.getElementById("cotizador");

cotizador.addEventListener("submit",(e) =>{
	e.preventDefault(); 
	cotizar();
	showQuote();
});

function cotizar(){
	
	const sesion=document.getElementById("opSesion");
	const adicional = document.getElementById("opAdicional");
	let valorUno;
	let valorDos;
	
	//VERIFICAMOS PRECIO
	
	switch (sesion.value){
						case "Outdoors":
							valorUno= listaProdu[0].price;
							break;
						case "Estudio":
							valorUno= listaProdu[1].price;
							break;
						case "Newborn":
							valorUno= listaProdu[2].price;
							break;
						default:
						valorUno= 0;
						break;

					}


	switch (adicional.value){
						case "Small":
							valorDos= listaAdic[0].price;
							break;
						case "Medium":
							valorDos= listaAdic[1].price;
							break;
						case "Large":
							valorDos= listaAdic[2].price;
							break;
						default:
						valorDos= 0;
						break;

					}
	
//Sumo el valor de la sesion y el adicional	
	let total= valorUno+valorDos;
	
//Guardo la info en el array quotes
	const newQuote= new Quote(sesion.value, adicional.value, total);
	quotes.push(newQuote);
	
	//Agrego al localStorage
	localStorage.setItem("quotes",JSON.stringify(quotes));
	
	//Muestro con sweet alert
		Swal.fire({
		title:"Cotizastes los siguientes servicios",
		text:sesion.value.toUpperCase()+ " con el adicional "+ adicional.value.toUpperCase()+" por un valor total de $ "+total,
		icon:"success",
		iconColor:"#d0aeb2",
		imageUrl:"https://simplybook.me/uploads/mcstudiophotos/image_files/original/bfee6fc77935df3f8471def45e8906be.jpg",
		background:"#f7e7e8",
		backdrop:"#f5eff0",
		confirmButtonText:"Aceptar Cotización",
		confirmButtonColor:"#d0aeb2",
	});
	
	
	console.log(valorUno);
	console.log(valorDos);
	console.log(total);
	
	
	
}	


const quoteContainer= document.getElementById("quoteContainer");


//FUNCION PARA VER LAS COTIZACIONES
function showQuote(){
	
	quoteContainer.innerHTML="";
	
	quotes.forEach(quote=>{
		const div=document.createElement("div");
		div.innerHTML=`<div>
							<p>Tipo de sesión: ${quote.sesionType}</p>
							<p>Adicional: ${quote.packType}</p>
							<p>Total: ${quote.totalPrice}</p>
							<p>_____________________________</p>
							
						</div>`;
		quoteContainer.appendChild(div);
	})
}

