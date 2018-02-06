/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var PrecioUno;
	var PrecioDos;
	var PrecioTres;
	var suma;

	PrecioUno=document.getElementById('PrecioUno').value;
	PrecioDos=document.getElementById('PrecioDos').value;
	PrecioTres=document.getElementById('PrecioTres').value;

	PrecioUno= parseInt(PrecioUno);
	PrecioDos= parseInt(PrecioDos);
	PrecioTres= parseInt(PrecioTres);

	suma=(PrecioUno+PrecioDos+PrecioTres);

	alert("La suma de sus productos es: "+suma);

}
function Promedio () 
{
	var PrecioUno;
	var PrecioDos;
	var PrecioTres;
	var promedio;

	PrecioUno=document.getElementById('PrecioUno').value;
	PrecioDos=document.getElementById('PrecioDos').value;
	PrecioTres=document.getElementById('PrecioTres').value;

	PrecioUno= parseInt(PrecioUno);
	PrecioDos= parseInt(PrecioDos);
	PrecioTres= parseInt(PrecioTres);

	promedio=(PrecioUno+PrecioDos+PrecioTres)/3;

	alert("El promedio de sus productos es: "+promedio);

	
}
function PrecioFinal () 
{
	var PrecioUno;
	var PrecioDos;
	var PrecioTres;
	var final;

	PrecioUno=document.getElementById('PrecioUno').value;
	PrecioDos=document.getElementById('PrecioDos').value;
	PrecioTres=document.getElementById('PrecioTres').value;

	PrecioUno= parseInt(PrecioUno);
	PrecioDos= parseInt(PrecioDos);
	PrecioTres= parseInt(PrecioTres);

	final=(PrecioUno+PrecioDos+PrecioTres)*1.21;
	
	alert("El precio final es: "+final);


	
}