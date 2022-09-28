// JavaScript Document

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

let zero={
	title: "NULO",
	titPrice:" Precio: $",
	price:0,
	description:" Servicio inexistente"
};


document.getElementById("produ1").innerHTML = Object.values(outdoors);
document.getElementById("produ2").innerHTML = Object.values(studio);
document.getElementById("produ3").innerHTML = Object.values(newborn);
document.getElementById("adi1").innerHTML = Object.values(small);
document.getElementById("adi2").innerHTML = Object.values(medium);
document.getElementById("adi3").innerHTML = Object.values(large);

document.getElementById("outdoor").innerHTML = outdoors.title;
document.getElementById("studio").innerHTML = studio.title;
document.getElementById("newborn").innerHTML = newborn.title;
document.getElementById("small").innerHTML = small.title;
document.getElementById("medium").innerHTML = medium.title;
document.getElementById("large").innerHTML = large.title;



const cotizador= document.getElementById("cotizador");

cotizador.addEventListener("submit",(e) =>{
	e.preventDefault(); 
	cotizar();
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

	
	
	
	let total= valorUno+valorDos;
	alert("Elegiste la sesión: "+sesion.value+ " con el adicional "+ adicional.value+" por un valor total de $ "+total);
	console.log(valorUno);
	console.log(valorDos);
	console.log(total);
	
	
	
}	
