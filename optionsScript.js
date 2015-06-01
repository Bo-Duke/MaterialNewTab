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

for (var i = 0; i < 6; i++) {
	var activeLink = document.getElementById("link_"+(i+1));
	activeLink.href = data[i].url;
	activeLink.firstElementChild.innerHTML = data[i].name;
	activeLink.style.backgroundImage = "url('"+data[i].icon+"')";
	activeLink.style.backgroundColor = data[i].color;

	var activeForm = document.forms["form_"+(i+1)];
	activeForm["Name"].value = data[i].name;
	activeForm["url"].value = data[i].url;
	activeForm["icon"].value = data[i].icon;
	activeForm["color"].value = data[i].color;
}

document.getElementById("validate").onclick=function(){
	var links = [];
	for (var i = 0; i<document.forms.length; i++){
		links[i] = { 
			name:  document.forms["form_"+(i+1)]["Name"].value,
			url:   document.forms["form_"+(i+1)]["url"].value,
			icon:  document.forms["form_"+(i+1)]["icon"].value,
			color: document.forms["form_"+(i+1)]["color"].value
		};
	}
	localStorage.setItem('newtabLinks', JSON.stringify(links));
	window.location.href = 'newTab.html';
};