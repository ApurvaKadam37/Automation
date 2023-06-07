// $(function () {
//     $("#chkPassport").click(function () {
//         if ($(this).is(":checked")) {
//             $("#txtPassportNumber").removeAttr("disabled");
//             $("#txtPassportNumber").focus();
//         } else {
//             $("#txtPassportNumber").attr("disabled", "disabled");
//         }
//     });
// });

document.getElementById("txtother").disabled = true;
function EnableDisableTextBox(chkother) {
    var txtother = document.getElementById("txtother");
    txtother.disabled = chkother.checked ? false : true;
    if (txtother.disabled == false) {
        txtother.focus();
    }
    elseif(txtother.disabled == true)
    {
        document.getElementById("txtother").disabled = true;
    }
}

// let linksList = [];
// $.get("https://www.qtips.com/sitemap.xml/",function(data){
// 		//var getXMLdata = [];
// 		xmlDoc = data; 
// 		var loc= xmlDoc.getElementsByTagName("loc"); 
	
// 		for (var i = 0; i < loc.length; i++) {    
// 		var item = loc[i];   
// 		x = item.innerHTML;
// 		linksList.push(x);
//         $(document).ready(function(){
//     $(document).on("click", "a", function () {
//         var target=$(this).attr("href");
//         if(target!=undefined){
//             alert(target);
//         }
//     });
// });
        // var target = $(document.activeElement)[0].href;
        // const result = linksList.has(schema.org);
        // return result
		// }
		// console.log(linksList); 
        // console.log("target link =",target);
//         $('a').click(function(event) {
//   console.log($('div').html(event.target.href));
//   event.preventDefault(); // Used to prevent the page from redirecting to google.com, just used for demo, you can remove it in your actual if not needed
// });
        // console.log("result =", result); 
      
    // });


//     fetch('https://www.talentigelato.com/us/en/faq.html')
//  .then(response => response.text())
//  .then(structuredDataText => {
//    var scripts=document.getElementsByTagName("script");
// for(var i=0; i<scripts.length; i++){
//     script_text=scripts[i].text;
//     // console.log("script_text=scripts[i].text = ",script_text=scripts[i].text)
//      if(script_text.trim()!==""){ // local script text 
//     if(script_text.search("schema.org") >= 0){
//       console.log("Found schema.org");
//     }
// }
//  }
// });

/************************************************************************************************************************************ */

//  let totalLink = [];
//  let noSchemaMarkup =[];
//  let haveSchemaMarkup =[];
// var request = new XMLHttpRequest();
// request.open("GET", "https://www.talentigelato.com/us/en/sitemap.xml", false);
// request.send();
// var xml = request.responseXML;
// var urls = xml.getElementsByTagName("url");
// for(var i = 0; i < urls.length; i++) {
//     var pageURL = urls[i];
//     var siteurls = pageURL.getElementsByTagName("loc");
//     for(var j = 0; j < siteurls.length; j++) {
//         var singleURL = siteurls[j].childNodes[0].nodeValue;
//         //   console.log(singleURL);
// 		totalLink.push(singleURL); 
//     }
//     fetch(`${totalLink}`)
//  .then(response => response.text())
//  .then(structuredDataText => {
//     function hasSchemaMarkup(structuredDataText) {
//   const scriptTags = document.getElementsByTagName('script');
//   for (let i = 0; i < scriptTags.length; i++) {
//     if (scriptTags[i].getAttribute('type') === 'application/ld+json') {
//       return true;
//     }
//   }
//   return false;
// }

// if (hasSchemaMarkup()) {
//     haveSchemaMarkup.push(totalLink);
//     console.log("have schema present =",haveSchemaMarkup)
//   console.log('This site has schema markup!');
// } else {
//     noSchemaMarkup.push(totalLink);
//     console.log("No schema present =",noSchemaMarkup)
//   console.log('This site does not have schema markup.');
// }
// });
// }



//     fetch('https://www.talentigelato.com/us/en/faq.html')
//  .then(response => response.text())
//  .then(structuredDataText => {
//     function hasSchemaMarkup(structuredDataText) {
//   const scriptTags = document.getElementsByTagName('script');
//   for (let i = 0; i < scriptTags.length; i++) {
//     if (scriptTags[i].getAttribute('type') === 'application/ld+json') {
//       return true;
//     }
//   }
//   return false;
// }



// function hasSchemaMarkup(structuredDataText) {
//   const schemaTypes = ["Person", "Organization", "Event", "Product","BreadcrumbList","FAQPage"]; // Add more schema types as needed
//   const schemaTags = document.querySelectorAll('[itemtype*="schema.org/' + schemaTypes.join('"],[itemtype*="schema.org/') + '"]');

//   return schemaTags.length > 0;
// }

// if (hasSchemaMarkup()) {
//   console.log("Schema markup is present");
// } else {
//   console.log("Schema markup is not present");
// }


// if (isSchemaMarkupPresent(structuredDataText)) {
//   console.log('Schema markup is present!');
// } else {
//   console.log('Schema markup is not present.');
// }
// if (checkSchemaMarkup(structuredDataText)) {
//   console.log("Schema markup is present.");
// } else {
//   console.log("Schema markup is not present.");
// }


// function checkSchemaMarkup() {
//   var schemaTags = document.querySelectorAll('[itemscope][itemtype]');
//   if (schemaTags.length > 0) {
//     return true; // schema markup is present
//   } else {
//     return false; // schema markup is not present
//   }
// }

// function checkSchemaMarkup() {
//   // Get all script elements on the page
//   var scriptTags = document.getElementsByTagName("script");
  
//   // Loop through the script tags and check if any of them contain a schema.org JSON-LD markup
//   for (var i = 0; i < scriptTags.length; i++) {
//     var scriptTag = scriptTags[i];
//     if (scriptTag.type === "application/ld+json") {
//       try {
//         var json = JSON.parse(scriptTag.innerHTML);
//         console.log(" Json url : ", json)
//         if (json['@context'] === "http://schema.org") {
//           return true;
//         }
//       } catch (e) {
//         // The JSON-LD markup is invalid, so ignore it
//       }
//     }
//   }
  
//   // If no schema.org JSON-LD markup is found, return false
//   return false;
// }



// });

// function isSchemaMarkupPresent() {
//   var schemaMarkup = document.querySelector('script[type="application/ld+json"]');
//   if (schemaMarkup) {
//     return true;
//   } else {
//     return false;
//   }
// }

//  console.log("totalURLS :", totalLink);

function checkSchemaMarkup() {
    // Get all script elements on the page
    var scriptTags = document.getElementsByTagName("script");
    
    // Loop through the script tags and check if any of them contain a schema.org JSON-LD markup
    for (var i = 0; i < scriptTags.length; i++) {
      var scriptTag = scriptTags[i];
      if (scriptTag.type === "application/ld+json") {
        try {
          var json = JSON.parse(scriptTag.innerHTML);
          if (json['@context'] === "http://schema.org") {
            return true;
          }
        } catch (e) {
          // The JSON-LD markup is invalid, so ignore it
        }
      }
    }
    
    // If no schema.org JSON-LD markup is found, return false
    return false;
  }
