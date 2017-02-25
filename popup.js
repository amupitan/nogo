

/*Tried to use closure to store all the websites and times *
 *Plan is to have a list of them stored somewhere where    *
 *The use will have a chance to view/delete later          */
 
 
// function updateArrays(time, website){
//   let websites = [];
//   let times = [];
//   return arrays = {
//     Info : {
//       websites: websites.push(website),
//       times: times:push(time),
//     }
//   }
// }

document.addEventListener('DOMContentLoaded', function() {
  var body = document.getElementById('body');
  let m = document.getElementById('status');
  let select = document.createElement('select');
  m.appendChild(select);
  
  let days = ["Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
        ];
  for(let i = 0; i < 7; i++){
    let op = new Option(days[i]);
    select.appendChild(op);
  }
  
  let i = document.createElement('input');
  i.setAttribute('placeholder', "website");
  body.appendChild(i);
  
  
  //TODO add a time picker. Looked online a little but had a little difficulty
  
  
  //HELP!! ONCLICK ISN"T WORKING
  var b = document.createElement('button');
  b.setAttribute('class', 'btn');
  b.onClick = function() {
    alert("pressed");
    console.log("Got here");
      var tbl = document.createElement('table');
      tbl.style.width = '100%';
      tbl.setAttribute('border', '1');
      var tbdy = document.createElement('tbody');
      var tr = document.createElement('tr');
      tr.appendChild(document.createTextNode("HI")); //Display information
      tdby.appendChild(tr);
      tbl.appendChild(tbdy);
      body.appendChild(tbl);
    };
      b.innerHTML = "Add";
      m.appendChild(b);
  
});




