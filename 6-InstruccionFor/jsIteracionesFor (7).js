function Mostrar()
{
	var numero= prompt("Ingrese Numero: ");
	var contadorDiv=0;
	numero=parseInt(numero);

	for (anterior=2;anterior<numero;anterior++)
	{
		if(numero%anterior==0)
		{
			document.write("<br>"+anterior);
			contadorDiv++;
		}
		if(anterior>(numero/2))
		{
			break;
		}
	}
if(contadorDiv==0)
{
	document.write("Es primo");
}



}//FIN DE LA FUNCIÓN