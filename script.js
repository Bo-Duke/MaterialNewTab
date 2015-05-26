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
    }
  } else {
    

  }
};

request.onerror = function() {
  
};

request.send();