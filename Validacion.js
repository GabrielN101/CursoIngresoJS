/*1 Cantidad Alumnos, 2 Promedio Total, 3 Cantidad de Mujeres, 4 Cantidad de Hombres, 5 Cantidad de Varones Desaprobados
6 Nombre de la mejor nota, 7 Promedio de las mujeres(nota), 8 Sexo del menor de edad, 9 Promedio de Edades de aprobados
10 Cantidades de Notas Pares  */
function Mostrar()
{
	var contador=0;
	var nombre;
	var nota;
	var promedio=0;
	var ContadorMasculino=0;
	var ContadorFemenino=0;
	var MasculinoDesaprobado=0;
	var MejorNota;
	var maximo=0;
	var PromedioMujeres;
	var SexoMenorEdad;
	var PromedioEdadesAprobados;
	var Aprobados;
	var CantidadNotasPares;
	var respuesta="";

	while(respuesta!='no')
	{
	contador++;//1 - CANTIDAD ALUMNOS



		nombre = prompt("Ingrese nombre de alumno: ");



		sexo = prompt("Ingrese Sexo (M para Masculino, F para Femenino): ");
			while(sexo!="m"&&sexo!="f")//VALIDACION SEXO
				{
					sexo = prompt("Ingrese Sexo valido (M para Masculino, F para Femenino): ");
				}



			if(sexo=="m")
				{
					ContadorMasculino++;//4 - CANTIDAD DE HOMBRES
				}
			if(sexo=="f")
				{
					ContadorFemenino++;//3 - CANTIDAD DE MUJERES
				}



		nota = prompt("Ingrese nota del alumno: ");
		nota=parseInt(nota);



			while(nota<0||nota>10)//VALIDACION NOTA
			{
				nota = prompt("Ingrese nota valida del alumno: ");
				nota=parseInt(nota);
			}

			if(sexo=="m"&&nota>=4)//5 - MASCULINO DESAPROBADO
			{
				MasculinoDesaprobado++;
			}


		if(contador==1)//6 - NOMBRE MEJOR NOTA
			{
				maximo=nota
				MejorNota=nombre;
			}
		else
		{
			if(nota>maximo)
			{
				MejorNota=nombre;
			}
		}



		promedio=promedio+nota;//2 - PROMEDIO TOTAL



		respuesta = prompt("NO para salir");
	}


document.write("Usted registro: "+contador+" alumnos con un promedio de: "+promedio/contador+". Hay "+ContadorMasculino+" hombres y "+ContadorFemenino+" mujeres. Hay "+MasculinoDesaprobado+" varones desaprobados. El nombre del alumno con la mejor nota es: "+MejorNota);

}
