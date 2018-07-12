
function mostrar()
{	
	var base;
	var altura;
	var perimetro;

	base=prompt("Base del rectangulo");
	base=parseInt(base);
	altura=prompt("Altura del rectangulo");
	altura=parseInt(altura);

	perimetro=(base+altura)*2

	alert("El perimetro es: "+perimetro);
}


	/*Se ingresan 3 numeros informar en una sola ALERT 
	la suma, el promedio, y la resta de los numeros
	 tal cual como fueron ingresados
	
	var resultado1;
	var resultado2;
	var resultado3;
	var promedio;
	var resta;
	var suma; 

	suma=20+5+7;
	resultado1=suma;
	resultado1=parseInt(resultado1);
	promedio=suma/3;
	resultado2=promedio;
	resultado2=parseInt(resultado2); //se deja redondeado o con decimales?
	resta=20-5-7;
	resultado3=resta;
	resultado3=parseInt(resultado3);
	alert("La suma es: "+resultado1+" El promedio es: "+resultado2+" La resta es: "+resultado3);

	  */