//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var numero1 = prompt("Ingrese el primer numero: ");
	var numero2 = prompt("Ingrese el segundo numero: ");

	numero1=parseInt(numero1);
	numero2=parseInt(numero2);

	if(numero1==numero2)
	{
		resultado=numero1*numero2;
	}
		
	else if(numero1>numero2)
	{
		resultado=numero1-numero2;
	}
	else
	{
		resultado=numero1+numero2;
	}

document.write("El resultado: "+resultado);
	
}

