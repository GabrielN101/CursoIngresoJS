function Mostrar() // numero entre -50 y 50, 
//informar el promedio de los numeros positivos, 
//la cantidad de numeros impares, 
//la suma de todos los numeros cuya letra haya sido una vocal, 
//numero maximo y letra con la cual fue ingresado
{
	var letra = prompt("Ingrese letra: ");
	var numero = prompt("Ingrese numero: ");
	var acumulador = 0;
	var impares = 0;
	var contador= 0;
	var maximo;
	var minimo;
	var letramaxima;
	while(contador<5)
	{
		contador++;

		numero = prompt("Ingrese un numero: ");
		numero = parseInt(numero);

		while(isNaN(numero)&&numero)
		{
			numero = prompt("Ingrese un numero valido: ");
		}
		letra = prompt("Ingrese letra: ");
		while(!isNaN(letra))
		{
			letra = prompt("Ingrese letra valida: ");
		}



		if(numero>0)
		{
			acumulador=acumulador+numero;
		}

		if(numero%2==1)
		{
			impares++;
		}

		if(letra=="a"||letra=="e"||letra=="i"||letra=="o"||letra=="u")
		{
			letravocal=letravocal+numero;
		}

		if(contador==1)
		{
			letramaxima=letra;
			maximo=numero;
		}
		else
		{
			if(numero>maximo)
			{
				maximo=numero;
				letramaxima=letra;
			}
		}
	}



}
