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

let newBorn={
	title:"NEWBORN ",
	description:"*** Sesión de recién nacidos en estudio, con temperatura controlada y luz rebotada. Incluye wraps, props y accesorios",
	duration:" 90 minutos",
	digitals:" 10 imágenes digitales",
	maxPeople:" 3 personas(max)",
	titPrice:" Precio: $",
	price:100000
};


let cinco={
	title: "SMALL ",
	titPrice:" Precio: $",
	price:35000,
	description:" 5 imágenes digitales adicionales"
};

let diez={
	title: "MEDIUM ",
	titPrice:" Precio: $",
	price:50000,
	description:" 10 imágenes digitales adicionales"
};

let veinte={
	title: "LARGE ",
	titPrice:" Precio: $",
	price:80000,
	description:" 20 imágenes digitales adicionales"
};



document.getElementById("produ1").innerHTML = Object.values(outdoors);
document.getElementById("produ2").innerHTML = Object.values(studio);
document.getElementById("produ3").innerHTML = Object.values(newBorn);
document.getElementById("adi1").innerHTML = Object.values(cinco);
document.getElementById("adi2").innerHTML = Object.values(diez);
document.getElementById("adi3").innerHTML = Object.values(veinte);

//retraso el script para que cargue la pagina con la info primero
setTimeout(function () {

		//Botón opción abrir cotizador
		if (confirm('Quieres abrir el cotizador')) {




		//Cotizador de servicios


					let sesion=prompt("Ingrese el tipo de sesion (OUTDOORS, ESTUDIO, NEWBORN, en mayúscula): ");
					let adicional=prompt("Ingrese pack de fotos adicional (SMALL, MEDIUM, LARGE, en mayúscula): ");
					let valorUno;
					let valorDos;


					switch (sesion){
						case "OUTDOORS":
							valorUno= outdoors.price;
							break;
						case "ESTUDIO":
							valorUno= studio.price;
							break;
						case "NEWBORN":
							valorUno= newBorn.price;
							break;

					}


					switch (adicional){
						case "SMALL":
							valorDos= cinco.price;
							break;
						case "MEDIUM":
							valorDos= diez.price;
							break;
						case "LARGE":
							valorDos= veinte.price;
							break;

					}

			if(((sesion=="OUTDOORS")||(sesion=="ESTUDIO")||(sesion=="NEWBORN"))&((adicional=="SMALL")||(adicional=="MEDIUM")||(adicional=="LARGE"))){
			let total= valorUno+valorDos;
					alert("El valor total del servicio más adicionales es: "+total);
			}else{

					alert("Algo salió mal");

			};
	} else {
	 
	  console.log('OK listo');
	}
	
//Guardamos los ervicios que el ususario quiere contratar en un array
	
	let serviciosUsuario = [];
	
	while (confirm('Quieres guardar tu seleccion de servicios?')) {
		let item=prompt('Ingrese el servicio:');
		serviciosUsuario.push(item);
		console.log(serviciosUsuario);

		};
}, 200)
