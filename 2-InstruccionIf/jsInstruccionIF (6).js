function Mostrar()
{
	var edad

	edad=document.getElementById('edad').value;

	edad=parseInt(edad);

	if(edad<13)
	{
		alert("Es un niño");
	}
	else
	{
		if(edad>12&&edad<18)
		{
			alert("Es un adolescente");
		}
			else
			{
				alert("Es un adulto");
			}
		
	}		
}