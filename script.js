function changeBg(name){
	document.body.style.backgroundImage = "url('img/mountains"+name+".jpg')";
}

var hour = new Date().getHours();

if(hour >= 5 && hour < 9){
	changeBg("dawn");
}
else if (hour >= 9 && hour < 20){
	changeBg("day");
}
else if (hour >= 20){
	changeBg("dusk");
}
else if (hour >= 0 && hour < 5){
	changeBg("night");
}