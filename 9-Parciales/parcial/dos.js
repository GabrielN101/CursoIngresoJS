function Mostrar()
{
	var numero=prompt("Ingrese precio del producto: ");
	var descuento=prompt("Ingrese descuento a realizar: ");
	var total;

	numero=parseInt(numero);
	descuento=parseInt(descuento);

	total=numero-(numero*descuento/100);

	

	document.getElementById('importeFinal').value=total;

}
