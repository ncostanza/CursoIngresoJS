function mostrar()
{
//tomo la edad  
	var edad;

	edad=document.getElementById('edad').value;

	if (edad==15)
	{
		alert("niña bonita");
	}
	else
	{
		alert("No hay fiesta de quince");
	}
	
}//FIN DE LA FUNCIÓN

/*
	Ninguna de estas estructuras lleva ";" 

	Para realizar comparaciones. 

	(== operado de igualda de derecha a izquierda compara valor)
	!=distinto
	> mayor
	>= mayor igual
	<menor
	<=menor igual	
	=== Igualdad estricta (primero tipo de valor)
	
	operadores logicos
	
	&& "Y"	conjuncion
	|| "o" "or" Disyuncion Inclusiva 
	!  "negacion"
	A  B  &&  ||
	v  v  v    v
	v  f  f    v
	f  v  f    v
	f  f  f    f


	else despues de la llave (no lleva condicion) 

	IMPORTANTE LLAVE {}
	








*/