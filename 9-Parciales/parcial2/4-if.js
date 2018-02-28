/*Se ingresan 2 numeros, 
si son iguales se concatenan, 
si el primero es mayor que el segundo se multiplican, 
si el segundo es mas grande se restan, 
si la multiplicaicon da un numero par, ademas de mostrar el resultado, se muestra el mensaje es par*/

function Mostrar()
{
	var numero1;
	var numero2;
	
	numero1 = prompt("Ingrese el primer numero: ");
	numero1 = parseInt(numero1);
	numero2 = prompt("Ingrese el segundo numero: ");
	numero2 = parseInt(numero2);

	if(numero1==numero2)
	{
	
		alert("El resultado es: "+numero1+numero2);
	}
	else if(numero1>numero2)
		{
			resultado=numero1*numero2;

			if(resultado%2==0&&resultado!=0)
			{
				alert("El resultado es: "+resultado+" ademas es par.");
			}
			else
			{
				alert("El resultado es: "+resultado);	
			}
		}
		else
		{
			resultado=numero1-numero2;
			alert("El resultado es: "+resultado);
		}
}


