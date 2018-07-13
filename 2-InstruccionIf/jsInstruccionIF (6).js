function mostrar()
{
//tomo la edad  
	var edad;

	edad=document.getElementById('edad').value;

	if(edad<13)
	{
		alert("Es un niño");
	}
	else{
		if(edad<18){
			alert("Es un adolecente");
		}
		else
			alert("Es mayor de edad");

		}

		
	
	


}//FIN DE LA FUNCIÓN