
function Mostrar()
{
	var base = document.getElementById('laBase').value;
	var altura = prompt("Ingrese altura: ");
	var perimetro;
	var superficie;


	perimetro = base*3;
	superficie	= (base*altura)/2;

	alert("El perimetro del triangulo es: "+perimetro+" y su superficie es: "+superficie);


}
