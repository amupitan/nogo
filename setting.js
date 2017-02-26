/*function nogo() {
    var blocked = 
		{website: document.getElementById("web").value,
		 days:[],
		 times:[],
		};
	blocked.times[0] = document.getElementById("starting").value;
	blocked.times[1] = document.getElementById("ending").value;
	var tags = document.getElementsByName("check");
	var j=0;
	for(var i = 0; i < tags.length; ++i)
	{
		if(tags[i].checked){
			blocked.days[j] = tags[i].id;
			++j;
		}
	}
	return blocked;
}*/
//document.addEventListener('DOMContentLoaded', function(event)				{(document.getElementById("add").onclick(function(){
//										 let dd = new doIt();
//										  }))})
class doIt{
	constructor(){
		this.websites = [];
		this.times = [];
		this.days = [];	
	}
	
	nogo() {
		console.log("hi");
		this.websites.push(document.getElementById("web").value);
		var d = [];
		var t = [];
			
		t[0] = document.getElementById("starting").value;
		t[1] = document.getElementById("ending").value;
		var tags = document.getElementsByName("check");
		var j=0;
		for(var i = 0; i < tags.length; ++i)
		{
			if(tags[i].checked){
				d[j] = tags[i].id;
				++j;
			}
		}
		this.times.push(t);
		this.days.push(d);
		console.log(this.times[0]);
		console.log(this.times[1]);
	}
}
window.onload = () => {
    var dd = new doIt();
    let a = document.getElementById("add");
    a.onclick=(function(){
        return dd.nogo();
    })
}
