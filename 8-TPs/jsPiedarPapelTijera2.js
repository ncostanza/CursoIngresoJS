var eleccionMaquina;
var ContadorDeEmpates=0;
var ContadorDeGanadas=0;
var ContadorDePerdidas=0;
var	piedra=1;
var papel=2;
var tijera=3;
function comenzar()
{
	//Genero el número RANDOM entre 1 y 3
	 	eleccionMaquina=Math.Floor(Math.Random()*3)+1;



}//FIN DE LA FUNCIÓN
function piedra()
{
	var piedra=1;
	if(eleccionMaquina==1){
		ContadorDeEmpates++;
		alert("Empato");
	}else if (eleccionMaquina==3){
		ContadorDeGanadas++;
		alert("Ganada");

	}else{
		ContadorDePerdidas++;
		alert("Perdida");
	}

	mostrarResultado();	
	comenzar();

}//FIN DE LA FUNCIÓN
function papel()
{

}//FIN DE LA FUNCIÓN
function tijera()
{
	
}//FIN DE LA FUNCIÓN

function mostrarResultado()
{

}