/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	var edad;
 	var sexo;
 	var estadoCivil;
 	var sueldo;
 	var legajo;
 	var nacionalidad;

 	edad = prompt("Ingrese edad: ");
 	while(isNaN(edad)||edad<18||edad>90)
 	{
 		edad = prompt("Ingrese una edad valida: ");
 	}

 	sexo = prompt("Ingrese sexo; M-Maculino, F-Femenino: ");
 	while(sexo!="m"&&sexo!="f")
 	{
 		sexo = prompt("Ingrese un sexo valido: ");
 	}

 	estadoCivil = prompt("Ingrese Estado Civil; 1-Soltero, 2-Casado, 3-Divorciado, 4-Viudo");
 	estadoCivil = parseInt(estadoCivil);

 	while(estadoCivil<1||estadoCivil>4||isNaN(estadoCivil))
 	{
 		estadoCivil = prompt("Ingrese un Estado Civil valido: ");
 	}

 	sueldo = prompt("Ingrese sueldo bruto: ");
 	while(isNaN(sueldo)||sueldo<8000)
 	{
 		sueldo = prompt("Ingrese sueldo bruto valido: ");
 	}


 	legajo = prompt("Ingrese su numero de legajo: ");
 	while(isNaN(legajo)||legajo<1000||legajo>9999)
 	{
 		legajo = prompt("Ingrese un numero de legajo valido: ");
 	}

 	nacionalidad = prompt("Ingrese nacionalidad; A-Argentino, E-Extranjero, N-Nacionalizado ");
 	while(nacionalidad!="a"&&nacionalidad!="e"&&nacionalidad!="n")
 	{
 		nacionalidad = prompt("Vuelva a ingresar una nacionalidad valida; A-Argentino, E-Extranjero, N-Nacionalizado ");
 	}

 	document.getElementById('Edad').value = edad;
 	document.getElementById('Sexo').value = sexo;
 	document.getElementById('EstadoCivil').value = estadoCivil;
 	document.getElementById('Sueldo').value = sueldo;
 	document.getElementById('Legajo').value = legajo;
 	document.getElementById('Nacionalidad').value = nacionalidad;
}
