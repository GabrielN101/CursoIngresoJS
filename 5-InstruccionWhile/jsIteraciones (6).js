function Mostrar()
{

	var contador=0;
	var acumulador=0;
	

	while(contador<5)
	{
		numero = prompt("Ingrese numero: ");
		contador++;
		acumulador=acumulador+numero;
		alert(acumulador);
	}



	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/5;
}