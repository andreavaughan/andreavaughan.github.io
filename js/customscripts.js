// document.getElementById('pendo-resource-center-bubble-animation').innerHTML = document.getElementById('pendo-resource-center-bubble-animation').innerHTML.replaceAll('pulse', 'myNewPulse');

console.log("customscripts.js loaded");


const filter = {
  url: [{ hostContains: "example.com" }, { hostPrefix: "developer" }],
};

// function logOnCompleted(details) {
//   console.log(`onCompleted: ${details.url}`);
// }

// chrome.webNavigation.onCompleted.addListener(logOnCompleted, filter);


function logOnCommitted(details) {
  console.log(`onCommitted: ${details.url}`);
}

chrome.webNavigation.onCommitted.addListener(logOnCommitted, filter);

