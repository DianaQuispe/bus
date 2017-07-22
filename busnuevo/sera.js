
/*
function nueva () {
	var toditos = 32;	
	var todos = [];
	for(var i =0; i< toditos; i++) {
	todos[i] = undefined;
	}
 }
//	var todos = [];
*/


function mostrar(nombre, apellido, dni){
	
	this.nombre = document.getElementById('nombre').value;
	this.apellido = document.getElementById('apellido').value;
	this.dni = document.getElementById('dni').value;

}

function guardar () {

var nombre = document.getElementById('nombre').value;
var apellido = document.getElementById('apellido').value;
var dni = document.getElementById('dni').value;

}



function el() {
	var toditos = 32; var i =0;
	var div =document.getElementById("div");
		var humano = {
			nombre: "",
			apellido: "",
			dni: "",

	};
	for (var property in humano) 
			if( true ) {
				humano.nombre = nombre.value;
				humano.apellido = apellido.value;
				humano.dni = dni.value;
			}else
				
				do {
				div.innerHTML+= "nombre "+ humano.nombre;
				i++
				} while(i< toditos)	
			

}
	
//keys
	