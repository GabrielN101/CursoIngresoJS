function Mostrar()
{
	var edad

	edad=document.getElementById('edad').value;

	edad=parseInt(edad);

	if(edad<18)
	{
		alert("Es menor de edad");
	}
}