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

var data = JSON.parse(localStorage.getItem("newtabLinks"));

for (var i = 0; i < data.length; i++) {
	var activeLink = document.getElementById("link_"+(i+1));
	activeLink.href = data[i].url;
	activeLink.firstElementChild.innerHTML = data[i].name;
	activeLink.style.backgroundImage = "url('"+data[i].icon+"')";
	activeLink.style.backgroundColor = data[i].color;
}