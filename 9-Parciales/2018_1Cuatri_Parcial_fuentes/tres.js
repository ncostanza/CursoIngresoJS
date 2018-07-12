function mostrar()
{
	var precio;
	var porcentaje;
	var precioFinal;

	precio=prompt("El precio es: ");
	precio=parseInt(precio);
	porcentaje=prompt("El porcentaje de descuento es de: ");
	

	precioFinal=precio*porcentaje;
	precioFinal=parseInt(precioFinal)

	document.getElementById('elPrecioFinal').value=precioFinal;
	
}
