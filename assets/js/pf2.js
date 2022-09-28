// JavaScript Document
localStorage.clear();

//Defino mis objetos (los productos que voy a ofrecer)
let outdoors={
	title:"OUTDOORS ",
	description:"* Sesión Outdoors: sesión de fotos al aire libre, en una plaza, parque o en el jardín de tu casa",
	duration:" 60 minutos",
	digitals:" 10 imágenes digitales",
	maxPeople:" 12 personas(max)",
	titPrice:" Precio: $",
	price:80000,
};

let studio={
	title:"ESTUDIO ",
	description:"** Sesión Estudio: sesión de fotos en estudio, con fondo blanco, negro o de colores, flashes y luces artificiales",
	duration:" 45 minutos",
	digitals:" 10 imágenes digitales",
	maxPeople:" 6 personas(max)",
	titPrice:" Precio: $",
	price:60000
};

let newborn={
	title:"NEWBORN ",
	description:"*** Sesión de recién nacidos en estudio, con temperatura controlada y luz rebotada. Incluye wraps, props y accesorios",
	duration:" 90 minutos",
	digitals:" 10 imágenes digitales",
	maxPeople:" 3 personas(max)",
	titPrice:" Precio: $",
	price:100000
};


let small={
	title: "SMALL ",
	titPrice:" Precio: $",
	price:35000,
	description:" 5 imágenes digitales adicionales"
};

let medium={
	title: "MEDIUM ",
	titPrice:" Precio: $",
	price:50000,
	description:" 10 imágenes digitales adicionales"
};

let large={
	title: "LARGE ",
	titPrice:" Precio: $",
	price:80000,
	description:" 20 imágenes digitales adicionales"
};


//Presentamos los productos en el HTML
document.getElementById("produ1").innerHTML = Object.values(outdoors);
document.getElementById("produ2").innerHTML = Object.values(studio);
document.getElementById("produ3").innerHTML = Object.values(newborn);
document.getElementById("adi1").innerHTML = Object.values(small);
document.getElementById("adi2").innerHTML = Object.values(medium);
document.getElementById("adi3").innerHTML = Object.values(large);

//Pasamos el titulo de cada producto a las opciones del cotizador
document.getElementById("outdoor").innerHTML = outdoors.title;
document.getElementById("studio").innerHTML = studio.title;
document.getElementById("newborn").innerHTML = newborn.title;
document.getElementById("small").innerHTML = small.title;
document.getElementById("medium").innerHTML = medium.title;
document.getElementById("large").innerHTML = large.title;

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
	/*for(let i=0; i<quote.length; i++){
		quotes.push(quote[i]);
	} */ 
 
 }

const cotizador= document.getElementById("cotizador");

cotizador.addEventListener("submit",(e) =>{
	e.preventDefault(); 
	cotizar();
	showQuote();
});

function cotizar(){
	
	const sesion=document.getElementById("sesion");
	const adicional = document.getElementById("adicional");
	let valorUno;
	let valorDos;
	
	//VERIFICAMOS PRECIO
	
	switch (sesion.value){
						case "outdoor":
							valorUno= outdoors.price;
							break;
						case "studio":
							valorUno= studio.price;
							break;
						case "newborn":
							valorUno= newborn.price;
							break;
						default:
						valorUno= 0;
						break;

					}


	switch (adicional.value){
						case "small":
							valorDos= small.price;
							break;
						case "medium":
							valorDos= medium.price;
							break;
						case "large":
							valorDos= large.price;
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
	
	alert("Elegiste la sesión: "+sesion.value+ " con el adicional "+ adicional.value+" por un valor total de $ "+total);
	console.log(valorUno);
	console.log(valorDos);
	console.log(total);
	
	
	
}	


const quoteContainer= document.getElementById("quoteContainer");


//FUNCION PARA VER RESERVAS
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

