function milTime() {
    var num1 = document.getElementById("starting").value;
	var num2 = document.getElementById("ending").value;

    if (num1 > num2) {
		document.getElementById("starting").value = "";
		document.getElementById("ending").value = "";
		return true;
    }
	else {
        
    }
}

function addWeb(web){
	//var a = document.getElementById("web").value;
	//web = new Array(7);
	var t = [];
	t[0] = document.getElementById("starting").value;
	t[1] = document.getElementById("ending").value;
	var tags = document.getElementsByName("check");
	for(var i = 0; i < tags.length; ++i)
	{
		if(tags[i].checked){
			web[parseInt(tags[i].id)] = [];
			web[parseInt(tags[i].id)].push(t);
		}
	}
}

function editWeb(web){
	var t = [];
	t[0] = document.getElementById("starting").value;
	t[1] = document.getElementById("ending").value;
	var tags = document.getElementsByName("check");
	for(var i = 0; i < tags.length; ++i)
	{
		if(tags[i].checked){
			web[parseInt(tags[i].id)].push(t);
		}
	}
	
	
}

let urlMaker = url => {return `*://*.${url}/*`};

var hostGetter = url => {
  let fullhost = new URL(url).origin;
  return fullhost.substring(fullhost.substring(0, fullhost.lastIndexOf('.')).lastIndexOf('.') + 1);
};

window.onload = () => {
	var webName = document.getElementById("web").value;
	let a = document.getElementById("add");
	var site = {};
	chrome.storage.sync.get("info",function(obj){
	  console.log(obj);
	  if (obj.info)
      site = obj.info;
    if (site === null) site = {};
		} );
	
	a.onclick=(function(){
		if(milTime()){
			return;
		}
		var b = document.getElementById("web").value;
		if(site[b] === undefined){
			site[b] = [ [], [], [], [], [], [], [] ];
			addWeb(site[b]);
			console.log(site);
		}
		else{
			
			editWeb(site[b]);
			console.log(site);
		}
		chrome.storage.sync.set({'info': site});
		document.getElementById('message').innerHTML = `The page: ${b} has been added to the block list`;
	});
	
};


