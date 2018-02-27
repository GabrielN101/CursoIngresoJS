function Mostrar()
{
	var peso;
	var maximo;
	var minimo;

	for(contenedor=0;contenedor<10;contenedor++)
	{
		peso = prompt("Ingrese peso del contenedor: "+contenedor);

		peso = parseInt(peso);

		while(isNaN(peso)||peso<=0)
		{
			peso = prompt("Ingrese un peso valido: ");
			peso = parseInt(peso);
		}

		if(contenedor==0)
		{
			maximo=peso;
			minimo=peso;
		}
		else
		{
			if(peso>maximo)
			{
				maximo=peso;
			}
			if(peso<minimo)
			{
				minimo=peso;
			}
		}
	}
	alert("El mayor contenedor pesa: "+maximo+" y el menor pesa: "+minimo);
}
