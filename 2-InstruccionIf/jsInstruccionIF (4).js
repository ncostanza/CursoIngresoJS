function mostrar()
{
//tomo la edad  

	var edad;

	edad=document.getElementById('edad').value;

	if(edad>=13&&edad<=17)
	{
		alert("Es adolecente");
	}
	else
	{
		alert("No es adolescente");
	}

}//FIN DE LA FUNCIÓN

/*
if(!(edad>=13&&edad<=17)){
	
	alert("No es adolecente");
}

*/