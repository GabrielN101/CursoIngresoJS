function Mostrar()
{

	var numero;

	numero = Math.floor(Math.random() * 11);

	if(numero<=4)
	{
		alert("Vamos, la proxima se puede: "+numero)
	}
		else if(numero>4&&numero<9)
		{
			alert("APROBO: "+numero)
		}
			else
			{
				alert("EXCELENTE: "+numero)
			}
}