function cabecalho(){

	if(document.getElementById('alunos').style.display === "none"){
		document.getElementById('alunos').style.display = "block"
		document.getElementById("alunos").style.animationName = "fadein"


	}else{
		document.getElementById("alunos").style.animationName = "fadeout"	
		setTimeout(function (){
			document.getElementById('alunos').style.display = "none"
		}, 1000);
	}

}