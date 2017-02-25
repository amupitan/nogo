
document.addEventListener('DOMContentLoaded', function() {
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
  
  
  //TODO add a time picker. Looked online a little but had a little difficulty
  
  let b = document.createElement('button');
  // let store = document.createTextNode("Add");
  b.setAttribute('content', 'test content');
  b.setAttribute('class', 'btn');
  b.innerHTML = "Add";
  m.appendChild(b);
  
});

