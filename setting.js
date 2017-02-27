let delWebsite = (webObject, webData, htmlData) => {
  return function(){
    delete webObject[webData];
    chrome.storage.sync.set({'info': webObject});
    htmlData.remove();
  };
};

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
	var site = {};
	chrome.storage.sync.get("info",function(obj){
	  console.log(obj);
	  if (obj.info)
      site = obj.info;
    if (site === null) site = {};
		} );
	
	document.getElementById("add").onclick=(function(){
		if(milTime()) return;
		var b = document.getElementById("web").value;
		if(site[b] === undefined){
			site[b] = [ [], [], [], [], [], [], [] ];
			addWeb(site[b]);
			/*Display newly added blocked website*/
      /*Create Row*/
      let tr = document.createElement('tr');
      
      /*Website name column*/
      let webName = document.createElement('td');
      let txt = document.createTextNode(b);
      webName.appendChild(txt);
      
      /*TODO: Days/time website is blocked*/
      
      /*Delete website Column*/
      let delCol = document.createElement('td');
      let del = document.createElement('button');
      del.innerHTML = "Delete"; /*Use a glyphicon vs a button*/
      del.onclick = delWebsite(site, b, tr);
      delCol.appendChild(del);
      
      tr.appendChild(webName);
      tr.appendChild(document.createElement('td')); /*TODO: Add time data*/
      tr.appendChild(delCol);
      
      document.getElementById('blocked-list').appendChild(tr);
  
  		chrome.storage.sync.set({'info': site});
  		document.getElementById('message').innerHTML = `The page: ${b} has been added to the block list`;
  		
  		/*Clear form*/
  		document.getElementById("web").value = "";
  		document.getElementById("starting").value = "";
  		document.getElementById("ending").value = "";
		}else{
			editWeb(site[b]);
		}

	});
	
	document.getElementById('clear').onclick = () => {
	  document.getElementById('blocked-list').innerHTML = "";
	  document.getElementById('message').innerHTML = "";
	  chrome.storage.sync.clear();
	};
	
	/*Display currently blocked websites*/
  var websites = {}; /*TODO: This object is already refernced by site, use that instead*/
  chrome.storage.sync.get("info",function(obj){
    if (obj.info){
      websites = obj.info;
    }

  [...Object.getOwnPropertyNames(websites)].forEach((val, idx, arr) => {
    let tr = document.createElement('tr');
    let webCol = document.createElement('td');
    let txt = document.createTextNode(val);
    webCol.appendChild(txt);
    
    /*TODO: Add days/time column*/
    
    let delCol = document.createElement('td');
    let delButton = document.createElement('button'); /*Use glyphicon vs button tag*/
    delButton.innerHTML = "Delete";
    delButton.onclick = delWebsite(websites, val, tr);
    delCol.appendChild(delButton);
    
    tr.appendChild(webCol);
    tr.appendChild(document.createElement('td')); /*TODO: Create time column*/
    tr.appendChild(delCol);
    
    document.getElementById('blocked-list').appendChild(tr);
  });
});
	
};


