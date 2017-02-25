// React when a browser action's icon is clicked.

  // alert  ("In background");

// chrome.browserAction.onClicked.addListener(function(tab) {
//   var viewTabUrl = chrome.extension.getURL('popup.html');
//   var imageUrl = "icon.png";

//   // Look through all the pages in this extension to find one we can use.
//   // var views = chrome.extension.getViews();
//   // for (var i = 0; i < views.length; i++) {
//   //   var view = views[i];

//   //   // If this view has the right URL and hasn't been used yet...
//   //   if (view.location.href == viewTabUrl && !view.imageAlreadySet) {

//   //     // ...call one of its functions and set a property.
//   //     view.setImageUrl(imageUrl);
//   //     view.imageAlreadySet = true;
//   //     break; // we're done
//   //   }
//   // }

// });


var blockedurls = 1/*TODO: Kern import the blocked urls as an array and store it in htis variabler*/;
var websites = {
  "facebook.com" : {
    monday : []
  },
  web2 : {
    monday : [],
    tuesday : []
  }
};
// var times = {
//   "facebook.com" : {
//     "monday" : [{"12:00", "1:00"}, {"4:00pm", "6:00"}]
//   },
// }
console.log("boo");
chrome.webRequest.onBeforeRequest.addListener(
  (details) => {
    console.log("Gotem");
    Object.getOwnPropertyNames(websites).forEach((url, idx, array) => {
      if (details.url.includes(url)){ /*TODO: change logic*/
        console.log("Gotem");
        return {
          cancel : true,
          redirectUrl: "www.google.com", /*Send the person to custom page*/
        };
      }
    });
  },
  {urls: ["<all_urls>", "https://facebook.com/*"]},
  ["blocking"]
  );