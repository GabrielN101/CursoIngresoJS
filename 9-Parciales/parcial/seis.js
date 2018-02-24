function Mostrar()
{
	var numero;
	var contador=0;
	var maximo = 0;
	var minimo = 0;

	while(contador<24)
	{
		contador++;

		numero= prompt("Ingrese Numero: ");

			while(numero<=0)
			{
				numero= prompt("Ingrese Numero mayor a 0: ");
				numero= parseInt(numero);
			}

	
		
		if(contador==1)
		{
			maximo=numero;
			minimo=numero;
		}
		else
		{
			if(numero>maximo)
			{
				maximo=numero;
			}
			if(numero<minimo)
			{
				minimo=numero;
			}
		}
	}
	alert("El importe maximo fue: " +maximo);
	alert("El importe minimo fue: " +minimo);
}
