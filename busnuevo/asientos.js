///////////////
var todos = [];

var asiento;
//////  todos son click
var celdas = document.getElementsByTagName('td');
for (var i = 0; i < celdas.length; i++) {
    celdas[i].addEventListener('click',redirect,false);

  //  celdas[i].addEventListener("click", cambiar_color_over,false);
  //  celdas[i].addEventListener("click", cambiar_color_out);

}
 function redirect(event){
    asiento=(event.target.textContent);
    var mostrar=document.getElementById("div");
    mostrar.innerHTML=asiento;
    (event.target).style.backgroundColor = ((event.target).style.backgroundColor=='rgb(248, 237, 80)') ? 'transparent' : '#F8ED50';
}

/*
function redirect(event){
document.getElementById("div").innerHTML=(event.target.textContent);
}
*/
/////


//////
/*

function cambiar_color_over(event){ 

   celda.style.backgroundColor="#66ff33";

 }

 function cambiar_color_out(event){ 
   celda.style.backgroundColor="blue"; 
}   


function nueva () {
var toditos = 32;	
var todos = [];
for(var i =0; i< toditos; i++) {
todos[i] = undefined;
}
*/


//////////////////////////////////////////////////////////
function Persona(nombre, apellido, dni) {
	this.nombre = nombre; 
	this.apellido = apellido;
	this.dni = dni;
	this.asiento = asiento; 
}


function listar() {
	var s = "";
	for(var i =0; i < todos.length; i++) {
		s+= "Nombre: " + todos[i].nombre+"<br>";
		s+= "Apellido: "+ todos[i].apellido+"<br>";
		s+="Dni: "+ todos[i].dni+"<br>";
		
	}
 var div = document.getElementById("div");

	div.innerHTML= s;
}
 


 function reservar() {
	var nombre = document.getElementById('nombre').value;
	var apellido =  document.getElementById("apellido").value;
	var dni = document.getElementById("dni").value;

	var persona = new Persona(nombre, apellido, dni);
	todos.push (persona);

 }




////////////////////////////////////////////////////////////


function busqueda () {
	var bDni = document.getElementById("buscarDNI").value;
	var div = document.getElementById("div");
	for(var i =0; i<todos.length; i++){
		if( parseInt (bDni) == parseInt(todos[i].dni)){
			div.innerHTML+= "<div>" + "Nombre: " + todos[i].nombre + "<br>" + "Apellido: " + todos[i].apellido + "<br>" + "DNI: " + todos[i].dni + "<br>" + "<br>" + "</div>";
		}
	}
} 
