function momgay(){
	window.alert('Stonp clinkin')
}
function clonk(){
	var x = document.getElementById("divman");
    if (x.style.display === "block") {
        x.style.display = "none";
    }
	else {
        x.style.display = "block";
    }
}
function registro(){
	var x = document.getElementById("erro");
	var y = document.getElementById("btnregistro");
	var z =document.getElementById("bom");
	var nome=document.getElementById("nome");
	var sobrenome=document.getElementById("sobrenome");
	var tel=document.getElementById("tel");
	var voide=document.getElementById("voide");
	if(!nome||!sobrenome||!tel||!voide){
		x.style.display = "block";
		y.style.display = "none";
	}
	else{
		z.style.display = "block";

	}
}