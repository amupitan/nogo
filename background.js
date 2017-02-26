// React when a browser action's icon is clicked.

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


// var blockedurls = 1/*TODO: Kern import the blocked urls as an array and store it in htis variabler*/;
// var websites = {
//   "facebook.com" : {
//     monday : []
//   },
//   web2 : {
//     monday : [],
//     tuesday : []
//   }
// };

var info = {
  websites : [
    "https://twitter.com/*",
    "https://www.facebook.com/*" //TODO parse through this to get website
  ],
  times : [
    ["2:00", "4:00"],
    ["4:00", "8:00"]
  ],
  days: [
    ["Sunday", "Monday", "Tuesday"],
    ["Wednesday", "Thursday", "Friday"]
  ]
};

function redirect(requestDetails) {
  console.log("Redirecting: " + requestDetails.url);
  return {
    redirectUrl: "https://38.media.tumblr.com/tumblr_ldbj01lZiP1qe0eclo1_500.gif"
  };
}

chrome.webRequest.onBeforeRequest.addListener(
  (details) => {
      // if (details.url.includes(url)){ /*TODO: change logic*/
       // alert("Gotem2");
        return {
          //cancel : true,
          redirectUrl: "https://www.google.com", /*Send the person to custom page*/
        };
      // }
  },
  {urls: info.websites},
  ["blocking"]
  );
