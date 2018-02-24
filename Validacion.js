/*1 Cantidad Alumnos, 2 Promedio Total, 3 Cantidad de Mujeres, 4 Cantidad de Hombres, 5 Cantidad de Varones Desaprobados
6 Nombre de la mejor nota, 7 Promedio de las mujeres(nota), 8 Sexo del menor de edad, 9 Promedio de Edades de aprobados
10 Cantidades de Notas Pares, 11 Cantidad Notas Impares  */
function Mostrar()
{
	var contador=0;
	var nombre;
	var edad;
	var nota;
	var promedio=0;
	var PromedioEdad=0;
	var ContadorMasculino=0;
	var ContadorFemenino=0;
	var MasculinoDesaprobado=0;
	var Aprobados=0;
	var MejorNota;
	var maximo=0;
	var PromedioMujeres=0;
	var SexoMenorEdad;
	var PromedioEdadesAprobados;
	var Aprobados;
	var CantidadNotasPares=0;
	var CantidadNotasImpares=0;
	var CantidadZeros=0;
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
		edad = prompt("Ingrese edad: ");
		edad = parseInt(edad);
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

		if(nota>=4)//9 - PROMEDIO APROBADOS
		{
			PromedioEdad=PromedioEdad+edad;
			Aprobados++;
		}


		if(nota%2==0&&nota!=0)//10 - CANTIDAD NOTAS PARES
			{	
				CantidadNotasPares++;
			}
		if(nota%2==1)//11 - CANTIDAD NOTAS IMPARES
			{
				CantidadNotasImpares++;
			}
		else
			{
				CantidadZeros++;
			}


		if(sexo=="f")//7 - PROMEDIO MUJERES
			{
				PromedioMujeres=PromedioMujeres+nota;
			}


		if(contador==1)//6 - NOMBRE MEJOR NOTA
			{
				maximo=nota;
				MejorNota=nombre;
			}
		else
		{
			if(nota>maximo)
			{ 
				maximo=nota;
				MejorNota=nombre;
			}
		}


		if(contador==1)//8 - SEXO MENOR DE EDAD
			{
				minimo=edad;
				SexoMenorEdad=sexo;
			}
		else
		{
			if(edad<minimo)
			{
				minimo=edad;
				SexoMenorEdad=sexo;
			}
		}

		promedio=promedio+nota;//2 - PROMEDIO TOTAL

		respuesta = prompt("NO para salir");
	}


document.write("Usted registro: "+contador+" alumnos con un promedio de: "+promedio/contador);
document.write("<br>Hay "+ContadorMasculino+" hombres y "+ContadorFemenino+" mujeres");
document.write("<br>Hay "+MasculinoDesaprobado+" varones desaprobados"); 
document.write("<br>El nombre del alumno con la mejor nota es: "+MejorNota);
document.write("<br>El promedio de las mujeres es: "+PromedioMujeres/ContadorFemenino);
document.write("<br>El sexo del menor de edad es: "+SexoMenorEdad);
document.write("<br>El promedio de edades para los aprobados es: "+PromedioEdad/Aprobados);
document.write("<br>Hay en total: "+CantidadNotasPares+" notas pares y: "+CantidadNotasImpares+" notas impares con: "+CantidadZeros+" cantidad de Ceros de por medio.");


}
