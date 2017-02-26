var websites = {
  "facebook.com" : [
    [['2:00','5:00'], ['11:00','12:00']],
    [['3:00','4:00'], ['11:00','12:00']],
    ]
  ,
  "twitter.com" : [
    [['2:00','4:00'], ['11:00','12:00']],
    [['3:00','4:00'], ['11:00','12:00']]
  ]
};

let urlMaker = url => {return `*://*.${url}/*`};
var websiteNames = [...Object.getOwnPropertyNames(websites)].map((url) => {
  return urlMaker(url);
});

var hostGetter = url => {
  let fullhost = new URL(url).origin;
  return fullhost.substring(fullhost.substring(0, fullhost.lastIndexOf('.')).lastIndexOf('.') + 1);
};

// var websites = localStorage.getItem('infpo');

var info = JSON.parse(localStorage.getItem('info'));
chrome.webRequest.onBeforeRequest.addListener(
  (details) => {
        let date = new Date();
        for(let val of websites[hostGetter(details.url)][date.getDay()]){
          let startTime = parseInt(val[0].split(':').join(''));
          let endTime = parseInt(val[1].split(':').join(''));
          let actualTime = parseInt(date.toTimeString().split(" ")[0].split(":")[0] + date.toTimeString().split(" ")[0].split(":")[1]);
          if ((actualTime >= startTime) && (actualTime < endTime)){
            chrome.tabs.update( {url : "blocked.html"});
            return {
              cancel : true
            };
          }
        }

        return {
        };
  },
  {urls: websiteNames},
  ["blocking"]
  );
