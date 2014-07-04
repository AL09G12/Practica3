//JavaScript
	
$(document).ready(function(e){
	var TuNombre,TuDia,TuMes,TuAnio;
	
	
$('#ContinuarFecha').click(function(e) {

TuNombre=$('#Nombre').val();
//alert(TuNombre);
});// click continuar fecha
$('#ContinuarResultado').click(function(e){
	//alert(TuNombre);
	MiDia=$('#Dia').val();
	MiMes=$('#Mes').val();
	MiAnio=$('#Anio').val();
	$('#Quien').text(TuNombre);
	var Fecha=new Date();
	//alert(Fecha);
	//var Fecha1=new Date('2014/06/29');
	//alert(Fecha1);
	/*alert(((Fecha-Fecha1)/1000/60/60/24));
	alert(Fecha.getFullYear());
	alert(Fecha.getMonth());
	alert(Fecha.getDate());*/
	$('#Limpiar').click(function(e)
	{
	$('#Nombre').val('');	
	$('#Dia').val('');
	$('#Mes').val('');
	$('#Anio').val('');
	
	
	});
	var Edad;
	var DiasFaltantes;
	var MiFecha=new Date(Fecha.getFullYear()+'/'+MiMes+'/'+MiDia);
	var FechaActual=new Date(Fecha.getFullYear()+'/'+(Fecha.getMonth()+1)+'/'+Fecha.getDate());
	
	Edad= Fecha.getFullYear()- MiAnio;
	if (MiFecha.getMonth()>= FechaActual.getMonth())
	{
	
	  if (MiFecha.getMonth()== FechaActual.getMonth())
	{
	
        if (MiFecha.getDate()> FechaActual.getDate())
	    {
			DiasFaltantes=((MiFecha-FechaActual)/1000/60/60/24);
		}
		
		 else
		   {
			   MiFecha=new Date((MiFecha.getFullYear()+1)+'/'+MiMes+'/'+MiDia);
		   DiasFaltantes=((MiFecha-MiFechaActual)/1000/60/60/24);
		  
		   }
	}
	   else
	   {DiasFaltantes=((MiFecha-FechaActual)/1000/60/60/24);}
	    Edad=Edad-1;
	}
	else
	{
		MiFecha=new Date((Fecha.getFullYear()+1)+'/'+MiMes+'/'+MiDia);
		DiasFaltantes=((MiFecha-FechaActual)/1000/60/60/24);
	}
		$('#Faltan').text('Faltan ' +DiasFaltantes+ ' Dias Para tu Cumpleaños');
	//alert (DiasFaltantes);
	$('#Edad').text('Edad '+Edad+' Años')
	//alert (Edad);
	if (DiasFaltantes <=30)
     {
	   $('#Mensaje').show();
     }
	 else
	  {
		$('#Mensaje').hide();  
	  }
	
  });
});//ready