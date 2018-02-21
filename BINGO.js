function Mostrar()
{
	var numeroRandom;
	var contadorZero=0;
	var contadorUno=0;
	var contadorDos=0;
	var contadorTres=0;
	var contadorCuatro=0;
	var contadorCinco=0;
	var contadorSeis=0;
	var contadorSiete=0;
	var contadorOcho=0;
	var contadorNueve=0;
	var porcen0;
	var porcen1;
	var porcen2;
	var porcen3;
	var porcen4;
	var porcen5;
	var porcen6;
	var porcen7;
	var porcen8;
	var porcen9;


	for(contador=0;contador<1000;contador++)
	{
		numeroRandom= Math.floor((Math.random() * 10) + 0);

		switch(numeroRandom)
		{
			case 0:
				contadorZero++;
				break;
			case 1:
				contadorUno++;
				break;
			case 2:
				contadorDos++;
				break;
			case 3:
				contadorTres++;
				break;
			case 4:
				contadorCuatro++;
				break;
			case 5:
				contadorCinco++;
				break;
			case 6:
				contadorSeis++;
				break;
			case 7:
				contadorSiete++;
				break;
			case 8:
				contadorOcho++;
				break;
			case 9:
				contadorNueve++;
				break;
		}
	}
	porcen0=(contadorZero/(contador+1))*100;
	porcen0=Math.round(porcen0);
	document.write("<br>Cantidad de 0: "+contadorZero+ " para un porcentaje de %: "+porcen0);

	porcen1=(contadorUno/(contador+1))*100;
	porcen1=Math.round(porcen1);
	document.write("<br>Cantidad de 1: "+contadorUno+ " para un porcentaje de %: "+porcen1);


	porcen2=(contadorDos/(contador+1))*100;
	porcen2=Math.round(porcen2);
	document.write("<br>Cantidad de 2: "+contadorDos+ " para un porcentaje de %: "+porcen2);


	porcen3=(contadorTres/(contador+1))*100;
	porcen3=Math.round(porcen3);
	document.write("<br>Cantidad de 3: "+contadorTres+ " para un porcentaje de %: "+porcen3);


	porcen4=(contadorCuatro/(contador+1))*100;
	porcen4=Math.round(porcen4);
	document.write("<br>Cantidad de 4: "+contadorCuatro+ " para un porcentaje de %: "+porcen4);


	porcen5=(contadorCinco/(contador+1))*100;
	porcen5=Math.round(porcen5);
	document.write("<br>Cantidad de 5: "+contadorCinco+ " para un porcentaje de %: "+porcen5);


	porcen6=(contadorSeis/(contador+1))*100;
	porcen6=Math.round(porcen6);
	document.write("<br>Cantidad de 6: "+contadorSeis+ " para un porcentaje de %: "+porcen6);


	porcen7=(contadorSiete/(contador+1))*100;
	porcen7=Math.round(porcen7);
	document.write("<br>Cantidad de 7: "+contadorSiete+ " para un porcentaje de %: "+porcen7);


	porcen8=(contadorOcho/(contador+1))*100;
	porcen8=Math.round(porcen8);
	document.write("<br>Cantidad de 8: "+contadorOcho+ " para un porcentaje de %: "+porcen8);


	porcen9=(contadorNueve/(contador+1))*100;
	porcen9=Math.round(porcen9);
	document.write("<br>Cantidad de 9: "+contadorNueve+ " para un porcentaje de %: "+porcen9);

}