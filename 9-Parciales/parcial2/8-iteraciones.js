//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.

/*nombre de un animal, 
peso del animal,
validar mayor a 0, 
temperatura del habitat en el que vive, 
temperatura entre -40 y +40, 
informar cantidad de temperaturas pares, 
cantidad de temperaturas impares, 
nombre del animal mas pesado, 
nombre del animal menos pesado, 
cantidad de animales cuyo habitad tiene menos de 0 grados, 
promedio de pesos de todos los animales, 
temperatura maxima y minima.*/

function Mostrar()
{
	var respuesta = "";
	var nombre;
	var peso;
	var habitad;
	var temperaturaHabitad;
	var temperaturaPar = 0;
	var temperaturaImpar = 0;
	var contador = 0;
	var pesoTotal = 0;
	var maximoPeso;
	var maximoTemperatura;
	var maximoNombre;
	var minimoPeso;
	var minimoTemperatra;
	var minimoNombre;
	var zeroHabitad = 0;
	
	while(respuesta!='no')
	{
		contador++;
		nombre = prompt("Ingrese nombre del animal: ");

		peso = prompt("Ingrese peso del animal: ");
		peso = parseInt(peso);

		while(peso<=0||isNaN(peso))
		{
			peso = prompt("Ingrese peso del animal nuevamente: ");            
		}

		habitad = prompt("Ingrese el habitat del animal: ");
		while(!isNaN(habitad))
		{
			habitad = prompt("Ingrese habitad nuevamente: ");
		}

		temperaturaHabitad = prompt("Ingrese temperatura del habitad: ");
		temperaturaHabitad = parseInt(temperaturaHabitad);
		while(temperaturaHabitad<-40||temperaturaHabitad>40||isNaN(temperaturaHabitad))
		{
			temperaturaHabitad = prompt("Ingrese temperatura del habitad nuevamente: ");
		}

		if(temperaturaHabitad%2==0) //PARES
		{
			temperaturaPar++;
		}

		if(temperaturaHabitad%2==1) //IMPARES
		{
			temperaturaImpar++;
		}

		if(contador==1) //MAXIMOS Y MINIMOS
		{
			maximoPeso = peso;
			maximoNombre = nombre;
			minimoPeso = peso;
			minimoNombre = nombre;
			maximoTemperatura = temperaturaHabitad;
			minimoTemperatra = temperaturaHabitad;
		}
		else
		{
			if(peso>maximoPeso)
			{
				maximoPeso = peso;
				maximoNombre = nombre;
			}
			if(peso<minimoPeso)
			{
				minimoPeso = peso;
				minimoNombre = nombre;
			}
			if(temperaturaHabitad>maximoTemperatura)
			{
				maximoTemperatura = temperaturaHabitad;
			}
			if(temperaturaHabitad<minimoTemperatra)
			{
				minimoTemperatra = temperaturaHabitad;
			}
		}

		if(temperaturaHabitad<0) //HABITAD BAJO CERO
		{
			zeroHabitad++;
		}

		pesoTotal=pesoTotal+peso; //PESO PROMEDIO

		respuesta = prompt("NO para salir");
	}


	document.write("Hay: "+temperaturaPar+" temperaturas pares y: "+temperaturaImpar+" temperaturas impares.");
	document.write("<br>El animal mas pesado es el: "+maximoNombre+" y el mas liviano es el: "+minimoNombre+".");
	document.write("<br>Hay: "+zeroHabitad+" animales cuyo habitad tiene una temperatura menor a 0.");
	document.write("<br>El promedio de peso de los animales es: "+pesoTotal/contador+".");
	document.write("<br>La temperatura maxima registrada es: "+maximoTemperatura+" y la minima es: "+minimoTemperatra+".");


}

