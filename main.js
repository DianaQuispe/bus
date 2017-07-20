

var todos = [];
var todito = document.getElementById("mos").value;

function Indentidad(nombre,apellido,dni) {
 this.nombre = nombre.toLowerCase();
 this.apellido = apellido.toLowerCase();
 this dni = dni;
 this.todosID = (todos.length +1);
}

Producto.prototype.toHTML = function() {
  var html = '';
  html += this.nombre.toUpperCase() + '<br>';
  html += this.apellido.toUpperCase() + '<br>';
  html += 'Cantidad: ' + this.dni + '<br>';
  html += '<br><br>';
  return html;
}

function mergeHTML (){
  var html = '';
  for (i=0;i<todos.length; i++){
    html += todos[i].toHTML();
  }
  return html;
}

//función que imprime un producto luego de ingresarlo
function printHTML (html){
  mos.innerHTML = '';
  mos.innerHTML = html;
}

var guarda = document.getElementById("reservar"); //boton reserva
guarda.onclick = function() {

}

function reservar() {
var nombre = document.getElementById('nombre').value;
var apellido = document.getElementById("apellido").value;
var dni = document.getElementById("DNI").value;

var datos = new Indentidad(nombre,apellido,dni);
todos.push(datos);
printHTML(datos.toHTML());
}



/*
function buscar (asientos, dni) {
   for (var i = 0; i < asientos.length; i++) {
      if (asientos[i] != undefined ) 
         if (asientos[i].dni == dni)
            return asientos[i];
   }
   return '';
}
function mostrar(asientos){
   var s1 = "", s2 = "";
   for (var i = 0; i < asientos.length; i++) {
      var e =  (asientos[i] != undefined)  ?  '*' : '';
      if ( i % 2 == 0)
         s1 += (i+1) + "[" + e + "] ";
      else
         s2 += (i+1) + "[" + e + "] ";
   }
   return "\n" + s1 + "\n" + s2 + "\n";
}  

function reserva () {
   var N = 10; // Número de asientos
   var asientos = [];
   for (var i = 0; i < N; i++) {
      asientos[i] = undefined;
   }
   var mensaje = "0: Salir\n" +
                 "1: Reservar  asiento\n" +
                 "2: Liberar asiento \n" + 
                 "3: Seleccionar asiento \n" +
                 "4: Buscar por DNI \n";
   
   var option = 0;
   while (true){
      var str = mostrar(asientos) + mensaje + " >> ingrese opcion:" ;
      option = parseInt( prompt( str )  );
      if (option == 0) {
         break;
      }else if (option == 1) {
         str = "seleccione asiento: " + mostrar(asientos);
         var nro = parseInt( prompt( str )  );
         if (nro > 0 && nro <= N) {
            var name =  prompt( "nombre del pasajero" )  ;
            var id = parseInt( prompt( "dni del pasajero"  ) );
            asientos[nro - 1] = {
               nombre : name,
               dni: id
            };
         }
      }else if (option == 2) {
         str = "seleccione asiento: " + mostrar(asientos);
         var nro = parseInt( prompt( str )  );
         if (nro >0 && nro <= N) {
            asientos[nro - 1] = undefined;
         }
       }else if (option == 3) {
         str = "seleccione asiento: " + mostrar(asientos);
         var nro = parseInt( prompt( str )  );
         if (nro > 0 && nro <= N) {
            str = mostrar(asientos) +
                     "Nombre del pasajero: " + asientos [nro - 1].nombre + 
                     "DNI del pasajero: " + asientos [nro - 1].dni;
                
            alert (str);
         }
      }
      else if (option == 4) {
         str = "ingrese dni: ";
         var dni = parseInt( prompt( str )  );
         
         alert ( "usuario:" +  buscar (asientos, dni).nombre );
       }
      
   } 
   imprimir(asientos);
}

//reserva();
*/