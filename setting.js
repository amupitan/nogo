

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

window.onload = () => {
	var webName = document.getElementById("web").value;
	let a = document.getElementById("add");
	var site;
	var cro = chrome.storage.sync.get("info",function(){
			} );
	if (cro == null) {
		site = {};
	}
	else{
		var stor = chrome.storage.sync.get("info",function(){
			} );
		site = JSON.parse(stor);
	}
	
	a.onclick=(function(){
		if(milTime()){
			return;
		}
		var b = document.getElementById("web").value;
		if(site[b] == null){
			site[b] = [ [], [], [], [], [], [], [] ];
			for(var c = 0; c < 7; ++c){
				
			}
			addWeb(site[b]);
			console.log(site);
//			console.log(site[b][0]);
		}	
		else{
			
			editWeb(site[b]);
			console.log(site);
		}
		var final 
		var x = JSON.stringify(site);
		//console.log(x);
		chrome.storage.sync.set({'info': x});
		
		
	});
	
}


