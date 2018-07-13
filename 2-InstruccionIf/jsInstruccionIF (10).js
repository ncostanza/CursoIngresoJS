function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var nota;

	nota=Math.floor(Math.random()*(11-1)+1);

	if(nota>=9){
		alert("EXCELENTE");
	}else{
		if(nota>4){

			alert("APROBÓ");
		}
		else{
			alert("Vamos...");
		}

	}



}//FIN DE LA FUNCIÓN