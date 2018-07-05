/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{	
	var numeroUno;
	var numeroDos;
	var resultado;

	numeroUno = document.getElementById('numeroUno').value;
	numeroUno=parseInt (numeroUno);
	numeroDos = document.getElementById('numeroDos').value;



	resultado = numeroUno+numeroDos;	

	alert (resultado);

	/* el signo + sirve par a sumar y para concatenar

	para ver el paso a paso: se ejecuta el programa se abre consola se abre el codigo se ejecuta y se genera el punto de interrupcion*/
}

