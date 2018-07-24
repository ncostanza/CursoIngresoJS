function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
	switch(mesDelAño){
		case ("Enero"):
		case ("Marzo"):
		case ("Mayo"):
		case ("Julio"):
		case ("Agosto"):
		case ("Octubre"):
		case ("Diciembre"):
			alert("Tiene 31 dias.");
			break;
		case ("Abril"):
		case ("Junio"):
		case ("Septiembre"):
		case ("Noviembre"):
			alert("tiene 30 dias.");
			break;
		default:
			alert("Tiene 28 dias.");	
	}
	



}//FIN DE LA FUNCIÓN