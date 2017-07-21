

function reservar () {
var toditos = 32;	
var todos = [];
for(var i =0; i< toditos; i++) {
todos[i] = undefined;
}
var nombre = document.getElementById('nombre').value;
var apellido =  document.getElementById("apellido").value;
var dni = document.getElementById("dni").value;
var div = document.getElementById("div");
div.innerHTML+= "<div>" + "Nombre: " + nombre + "<br>" + "Apellido: " + apellido + "<br>" + "DNI: " + dni + "<br>" + "<br>" + "</div>" ;

}




//////  todos son click
var celdas = document.getElementsByTagName('td');
for (var i = 0; i < celdas.length; i++) {
    celdas[i].addEventListener('click',redirect,false);
    celdas[i].addEventListener("click", cambiar_color_over,false);
    celdas[i].addEventListener("click", cambiar_color_out);

}

function redirect(event){
document.getElementById("div").innerHTML=(event.target.textContent);
}
/////


function cambiar_color_over(event){ 

   celda.style.backgroundColor="#66ff33";

 }

 function cambiar_color_out(event){ 
   celda.style.backgroundColor="blue"; 
}   
  





function Persona(nombre, apellido, dni) {
	this.nombre = nombre; 
	this.apellido = apellido;
	this.dni = dni; 
}

var persona = new Persona(nombre, apellido, dni);
todos.push(persona);



var reservar = document.getElementById("reservar");
var lista = document.getElementById("listar");


// reservar.innerHTML = todos;




var buscarDNI = document.getElementById("buscarDNI");
function buscar() {
	//var x = document.getElementById("textito");
	for(var i =0; i <todos.length; i++) {
		if( buscarDNI == todos[i].dni){
			alert("asd");
		}else alert("todos[i][1]");
	}

}


