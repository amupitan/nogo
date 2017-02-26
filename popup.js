document.addEventListener('DOMContentLoaded', function() { 

	var body = document.getElementById('body');
	var settin = document.createElement('button');
  settin.setAttribute('class', 'btn');
  settin.setAttribute('id', 'sett');
  settin.style.textAlign = "center";
	
  settin.innerHTML = "Settings";
  settin.onclick = function(){
    var newURL = "setting.html";
    chrome.tabs.create({ url: newURL });
  };
  body.appendChild(settin);
	
})