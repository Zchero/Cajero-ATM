function numeros(e){
	var key = e.keyCode || e.which,
		tecla = String.fromCharCode(key),
		num = "0123456789",
		car = "8-37-38-46",//borrar-izquierda-derecha-suprimir
		teclaEsp = false,
		limite = document.getElementById('amount');
		for (var i in car) {
			if (key == car[i]) {
				teclaEsp = true;
			}
			if (num.indexOf(tecla) == -1 && !teclaEsp) {
				return false;
			}
		}
		limite.addEventListener('input',function(){
		 	if (this.value.length > 7) 
		    	this.value = this.value.slice(0,7); 
		})
}
function login(){
	var user = document.getElementById("usuario").value,
		pass = document.getElementById("pass").value,
		limiteu = document.getElementById('usuario'),
		limitep = document.getElementById('pass');
		if (user == "Zchero" && pass == "{h40z") {
			window.location.href = "index.html";
		}
		limiteu.addEventListener('input',function(){
		 	if (this.value.length > 10) 
		    	this.value = this.value.slice(0,10); 
		})
		limitep.addEventListener('input',function(){
		 	if (this.value.length > 10) 
		    	this.value = this.value.slice(0,10); 
		})
}
function logout(){
	window.location.href = "login.html";
}
function sacar(){
	var amount = document.getElementById("amount"),
		total = document.getElementById("amount").value,
		tot = total,
		residuo = tot + "";
		cien = tot / 100 + "",
		cinc = tot / 50 + "",
		vein = tot / 20 + "",
		diez = tot / 10 + "",
		contcien = 0,
		contcinc = 0,
		contvein = 0,
		contdiez = 0;
	if (cien.includes(".") && cinc.includes(".") && vein.includes(".") && diez.includes(".")) {
		alert("Solo contamos con billetes de 100, 50, 20 y 10");
		amount.value = "";
	}else {
		while(tot != 0){
			if (!cien.includes(".")) {
				tot = tot - 100;
				contcien++;
			}else if (!cinc.includes(".") || residuo.includes("6") || residuo.includes("7") || residuo.includes("8") || residuo.includes("9")) {
				tot = tot - 50;
				residuo = tot + "";
				cien = tot / 100 + "";
				vein = tot / 20 + "";
				diez = tot / 10 + "";
				contcinc++;
				cinc = ".";
			}else if (!vein.includes(".")) {
				tot = tot - 20;
				cien = tot / 100 + "";
				cinc = tot / 50 + "";
				vein = tot / 20 + "";
				diez = tot / 10 + "";
				contvein++;
				if (!cien.includes(".")) {
					vein = ".";
				}
			}else if (!diez.includes(".")) {
				tot = tot - 10;
				cien = tot / 100 + "";
				cinc = tot / 50 + "";
				vein = tot / 20 + "";
				diez = tot / 10 + "";
				contdiez++;
				if (!cien.includes(".") || !vein.includes(".")) {
					diez = ".";
				}
			}
		}
		alert("[Tiquet 100 x " + contcien + "] \n [Tiquet 50 x " + contcinc + "] \n [Tiquet 20 x " + contvein + "] \n [Tiquet 10 x " + contdiez + "]");

		if (confirm("¿Deseas realizar otro retiro?")) {
    		amount.value = "";
		} else {
			alert("¡Hasta luego!");
    		window.location.href = "login.html";
		}
	}
}