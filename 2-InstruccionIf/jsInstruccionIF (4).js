function Mostrar()
{
	var edad

	edad=document.getElementById('edad').value;

	edad=parseInt(edad);

	if(edad>12&&edad<18)
	{
		alert("Es adolescente");
	}



}