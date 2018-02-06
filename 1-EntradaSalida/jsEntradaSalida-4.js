/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'MOSTRAR'
*/
function Mostar()
{
	var nombre;
	nombre = prompt("Ingrese nombre");
	document.getElementById('elNombre').value = nombre; //Con esto, cambia el orden, nombre = a lo que escribi en el texto

}

