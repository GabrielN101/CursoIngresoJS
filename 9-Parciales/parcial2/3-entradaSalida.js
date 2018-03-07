//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var ancho = document.getElementById('ancho').value;
	var largo = document.getElementById('largo').value;
	var perimetro;
	var alambre;


	ancho=parseInt(ancho);
	largo=parseInt(largo);

	perimetro=(ancho+largo)*2;

	alambre=perimetro*6;

	alert("Se nesecitara: "+alambre+" metros de alambre.");
	
}

