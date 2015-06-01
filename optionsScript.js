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

var data;
request = new XMLHttpRequest();
request.open('GET', 'links.json', true);

request.onload = function() {
	if (request.status >= 200 && request.status < 400){
		data = JSON.parse(request.responseText);

		for (var i = 0; i < data.links.length; i++) {
			var activeLink = document.getElementById("link_"+(i+1));
			activeLink.href=data.links[i].url;
			activeLink.firstElementChild.innerHTML = data.links[i].name;
			activeLink.style.backgroundImage = "url('"+data.links[i].icon+"')";
			activeLink.style.backgroundColor = data.links[i].color;

			var activeForm = document.forms["form_"+(i+1)];
			activeForm["Name"].value = data.links[i].name;
			activeForm["url"].value = data.links[i].url;
			activeForm["icon"].value = data.links[i].icon;
			activeForm["color"].value = data.links[i].color;
		}
	} else {
		

	}
};

request.onerror = function() {
	
};

request.send();

document.getElementById("validate").onclick=function(){
	var links = {};
	for (var i = 0; i<document.forms.length; i++){
		console.log(document.forms["form_"+(i+1)]["Name"].value);
		links[i] = { 
			name:  document.forms["form_"+(i+1)]["Name"].value,
			url:   document.forms["form_"+(i+1)]["url"].value,
			icon:  document.forms["form_"+(i+1)]["icon"].value,
			color: document.forms["form_"+(i+1)]["color"].value
		};
	}
	localStorage.setItem('newtabLinks', JSON.stringify(links));
	console.log(JSON.stringify(links));
};