

/*Tried to use closure to store all the websites and times *
 *Plan is to have a list of them stored somewhere where    *
 *The use will have a chance to view/delete later          */
 
 

document.addEventListener('DOMContentLoaded', function() {
  // var websites = [];
  // var week = [];
  
  var body = document.getElementById('body');
   let m = document.getElementById('status');
   let select = document.createElement('select');
   m.appendChild(select);
  
   let days = ["",
         "Sunday",
         "Monday",
         "Tuesday",
         "Wednesday",
         "Thursday",
         "Friday",
         "Saturday"
         ];
   for(let i = 0; i < 7; i++){
     let op = new Option(days[i]);
     if(i===0){
       op.setAttribute('id', 'default');
     }
     select.appendChild(op);
   }
  
   let i = document.createElement('input');
   i.setAttribute('placeholder', "website");
   m.appendChild(i);
  
  
  // //TODO add a time picker. Looked online a little but had a little difficulty
  
  
  // var tbl = document.createElement('table');
  // tbl.style.width = '100%';
  // tbl.setAttribute('border', '1');
  // var tbdy = document.createElement('tbody');
  // var tr = document.createElement('tr');
  // tbl.appendChild(tbdy);
  // body.appendChild(tbl);

   var b = document.createElement('button');
   b.setAttribute('class', 'btn');
   b.onclick = function() {
     if(i.value !== null){
       websites.push(i.value);
       i.value("");
     }
    
     if(select.value !== null){
       week.push(select.value);
     }
   };
   b.innerHTML = "Add";
   m.appendChild(b);
      
  
  // var setting = document.createElement('button');
  // setting.setAttribute('class', 'btn');
  // setting.innerHTML = "Filters";
  // setting.onclick = function(){
  //   for(let a = 0; a < websites.length; a++){
  //     tr.appendChild(document.createTextNode(websites[a] + " ")); //TODO add break line, only print out new ones
  //     tbdy.appendChild(tr);
  //   }
  //   for(let a = 0; a < week.length; a++){
  //     tr.appendChild(document.createTextNode(week[a] + " ")); //TODO add break line
  //     tbdy.appendChild(tr);
  //   }
  // };
  // body.appendChild(setting);
  
  var settin = document.createElement('button');
  settin.setAttribute('class', 'btn');
  settin.innerHTML = "Settings";
  settin.onclick = function(){
    var newURL = "setting.html";
    chrome.tabs.create({ url: newURL });
  };
  m.appendChild(settin);
  
  // chrome.browserAction.onClicked.addListener(function(activeTab)
  // {
    
  // });
      
      
  
});




