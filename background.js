// React when a browser action's icon is clicked.

  alert  ("In background");

chrome.browserAction.onClicked.addListener(function(tab) {
  var viewTabUrl = chrome.extension.getURL('popup.html');
  var imageUrl = "icon.png";

  // Look through all the pages in this extension to find one we can use.
  // var views = chrome.extension.getViews();
  // for (var i = 0; i < views.length; i++) {
  //   var view = views[i];

  //   // If this view has the right URL and hasn't been used yet...
  //   if (view.location.href == viewTabUrl && !view.imageAlreadySet) {

  //     // ...call one of its functions and set a property.
  //     view.setImageUrl(imageUrl);
  //     view.imageAlreadySet = true;
  //     break; // we're done
  //   }
  // }

});