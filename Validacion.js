//ingreso de alumnos, no sabemos cuantos hay, pedir el nombre, saber cuantos alumnos ingrese
function Mostrar()
{
	var contador=0;
	var nombre;
	var nota;
	var promedio=0;
	var respuesta="";

	while(respuesta!='no')
	{

		nombre = prompt("Ingrese nombre de alumno: ");

		sexo = prompt("Ingrese Sexo (M para Masculino, F para Femenino): ");
			while(sexo!="m"&&sexo!="f")
			{
				sexo = prompt("Ingrese Sexo valido (M para Masculino, F para Femenino): ");
			}

		nota = prompt("Ingrese nota del alumno: ");
		nota=parseInt(nota);

			while(nota<0||nota>10)
			{
				nota = prompt("Ingrese nota valida del alumno: ");
				nota=parseInt(nota);
			}

		promedio=promedio+nota;
		contador++;

		respuesta = prompt("NO para salir");
	}
	document.write("Usted registro: "+contador+" alumnos con un promedio de: "+promedio/contador);

}
