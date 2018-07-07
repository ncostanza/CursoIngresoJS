/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	//Entrada: sueldo: id: sueldo
	//Proceso: aumentar el 10%
	//Salida: Resultado del sueldo con el aumento :id: resultado

	var sueldo;
	/*var aumento;*/
	var sueldoConAumento;
	
	sueldo=document.getElementById('sueldo').value;  //entradas
	sueldo=parseInt(sueldo);                         //entradas

	/*aumento=sueldo *(10/100); */                       //proceso
	/*sueldoConAumento = sueldo*0.10;*/
	
	sueldoConAumento=sueldo*1.10;          //proceso

	document.getElementById("resultado").value=sueldoConAumento/*.toFixed(); :repara decimales*/;
	
	}
	/* 
	var sueldo;
	var resultado;
	

	sueldo=document.getElementById('sueldo').value;
	sueldo=parseInt(sueldo);
	resultado = sueldo *1.10;
	resultado=parseInt(resultado);
	document.getElementById('resultado').value=resultado;
	
*/