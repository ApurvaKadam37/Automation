var totalLink = [];
let noSchemaMarkup = [];
let haveSchemaMarkup = [];
var request = new XMLHttpRequest();
request.open("GET", "https://www.lifebuoy.in/sitemap.xml", false);
request.send();
var xml = request.responseXML;
var urls = xml.getElementsByTagName("url");
for (var i = 0; i < urls.length; i++) {
  var pageURL = urls[i];
  var siteurls = pageURL.getElementsByTagName("loc");
  for (var j = 0; j < siteurls.length; j++) {
    var singleURL = siteurls[j].childNodes[0].nodeValue;
      //  console.log(singleURL);
    totalLink.push(singleURL);
  }
}


if (totalLink.length) {
totalLink.forEach(function (linkVal) {
if (totalLink.length) {
totalLink.forEach(function (linkVal) { 
$.get(linkVal, function (structuredDataText) {
if (checkSchemaMarkup(structuredDataText, linkVal) === true) {
  console.log("schema present =", haveSchemaMarkup)
} else {
  console.log("schema not present =", noSchemaMarkup)
}

});
});
}
});
}
function checkSchemaMarkup(data, url) {
const scriptFormmat =
/<script\b[^>]*>[\s\S]*?<\/script\b[^>]*>/g;
const scriptTags = data.match(scriptFormmat);
for (let i = 0; i < scriptTags.length; i++) {
if (
scriptTags[i]
  .toLowerCase()
  .indexOf('type=\"application/ld+json\"') > -1
) {
if (
  scriptTags[i].indexOf('"@type":"Recipe"') > -1 ||
  scriptTags[i].indexOf('"@type":"Product"') > -1 ||
  scriptTags[i].indexOf('"@type":"FAQPage"') > -1
) {
  haveSchemaMarkup.push(url);
  return true;
} else {
  noSchemaMarkup.push(url);
  return false;
}
}
}
}