function sera(todos) {
var n  = 32;
for(var i =0; i <todos.length; i++) {
  console.log(i);
}
i++;	
}

var todos = [];
var asiento;
//////  todos son click
var celdas = document.getElementsByTagName('td');
for (var i = 0; i < celdas.length; i++) {
    celdas[i].addEventListener('click',redirect,false);

}
 function redirect(event){
    asiento=(event.target.textContent);
    var mostrar=document.getElementById("div");
    mostrar.innerHTML=parseInt(asiento) ;
    (event.target).style.backgroundColor = ((event.target).style.backgroundColor=='rgb(248, 237, 80)') ? 'transparent' : '#F8ED50';
}
//////////
function Persona(nombre, apellido, dni) {
	this.nombre = nombre; 
	this.apellido = apellido;
	this.dni = dni;
	this.asiento = asiento; 
}

 
 function reservar() {
	var nombre = document.getElementById('nombre').value;
	var apellido =  document.getElementById("apellido").value;
	var dni = document.getElementById("dni").value;
	var persona = new Persona(nombre, apellido, dni);
	todos.push (persona);

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

function busqueda () {
	var bDni = document.getElementById("buscarDNI").value;
	var div = document.getElementById("div");
	for(var i =0; i<todos.length; i++){
		if( parseInt (bDni) == parseInt(todos[i].dni)){
			div.innerHTML+= "<div>" + "Nombre: " + todos[i].nombre + "<br>" + "Apellido: " + todos[i].apellido + "<br>" + "DNI: " + todos[i].dni + "<br>" + "<br>" + "</div>";
		}
	}
} 

function cancelar() {


}
