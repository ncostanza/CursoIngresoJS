/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	/*var precioUnitario=35;
 	var marca;
 	var cantidadLamparas;
 	var	precioFinal
 	var ingresosBrutos;
 	var descuento;
 	var precioBruto;*/

 	var precioConDescuento;
 	var marca;
 	var cantidadLamparas;
 	var totalBruto
 	precio=35;
 	precio=parseInt(precio); 		
 	cantidadLamparas=document.getElementById('Cantidad').value;
 	marca=document.getElementById('Marca').value;

 	
 	

 	if(cantidadLamparas>=6)
 	{
 		precioConDescuento=(cantidadLamparas*precio)*0.5;
 		
 	} 		

 	document.getElementById('precioDescuento').value=precioConDescuento;

 	
 }
 	
/*ejercicio 4*/


/* 
var precioConDescuento;
 	var marca;
 	var cantidadLamparas;
 	var totalBruto
 	precio=35;
 	precio=parseInt(precio);
 	totalBruto=cantidadLamparas*precio;
 	
 	cantidadLamparas=document.getElementById('Cantidad').value;
 	marca=document.getElementById('Marca').value;

 	
 	

 	if(cantidadLamparas>=6)
 	{
 		precioConDescuento=(cantidadLamparas*precio)*0.5;
 		
 	}
 	else
 	{
 		if(cantidadLamparas==5 && marca=="ArgentinaLuz")
 			
 		{
 			precioConDescuento=(cantidadLamparas*precio)*0.6;
 		}else
 		{
 			if(cantidadLamparas==5&&marca!="ArgentinaLuz")
 			{
 				(precioConDescuento=(cantidadLamparas*precio)*0.7);
 			}
 			
 		}
 	} 	

 		
 	

 document.getElementById('precioDescuento').value=precioConDescuento;	
*/

/*

else
 	{
 		if(cantidadLamparas==5 && marca=="ArgentinaLuz")
 			
 		{
 			precioConDescuento=(cantidadLamparas*precio)*0.6;
 		}else
 		{
 			if(cantidadLamparas==5&&marca!="ArgentinaLuz")
 			{
 				(precioConDescuento=(cantidadLamparas*precio)*0.7);
 			}
 			
 		}
 	} 	

*/