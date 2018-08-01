$(document).ready(function(){
    $("#btnregistro").click(function(){	
		var nome = $("#nome").val();
		var sobrenome = $("#sobrenome").val();
		var tel = $("#tel").val();
		var voide = $("#voide").val();
	if(nome=="" || sobrenome=="" || tel=="" || voide==""){
		$('#erro').show();
		$('#btnregistro').hide();;
		$('#header').hide();
		$('#navigation').hide()
	}
	else{
		$('#bom').show();
	}
});
	$('#tel').mask('(00) 00000-0000');
	
	
	$("#botaomeme").click(function(){	
		$('#divman').toggle();
})

	 $("#botaum").click(function(){	
		alert('Lol Get Bambeezleded')
	})

});



