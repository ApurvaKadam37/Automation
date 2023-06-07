
function linksListFunc() {
    let linksList = [];
    let value = $('.xml_input').val();
    if (!value.length > 0) {
        alert("Please share the XML URL")
        return true;
    }
    $('.xml_input,.xml_submit,.download').attr("disabled",true);
    $('.xml_submit').val("Running, you can download when completed...");

    $.get(value,
        function(data){
    //var getXMLdata = [];
    xmlDoc = data; 
    var loc= xmlDoc.getElementsByTagName("loc"); 

    for (var i = 0; i < loc.length; i++) {
    var item = loc[i];
    x = item.innerHTML;
    linksList.push(x);
    }
    
    console.log(linksList);

    let finalResultArray = [];
    let contentFinalArray = [];
    let directHTMLlink = [];
    const { hostname } = new URL(linksList[0]);
    document.querySelector("h1").textContent = `Report - ${hostname}`;
    // let finalCurrentData;

    // function pushItemsTofialList(list, pageURL) {
    //     if (list.length) {
    //         let dummyObj = {
    //             pageURL,
    //             targetLink: "",
    //         }
    //         finalResultArray = [...finalResultArray, ...list.map(l => {
    //             return { pageURL, targetLink: l.href }
    //         })];
    //     }
    // }

  //  function checkLinkTargetPresentOrNot(finalCurrentData, pageURL) {
    //    pushItemsTofialList([...finalCurrentData.querySelector("#main").querySelectorAll("a[target='_blank']")], pageURL);
   // }

    const fetchAllURLS = (pageURL) => {
        return new Promise(async (resolve) => {
            try {
                const response = await fetch(pageURL);
                if (response.status === 200) {
                
     //               const data = await response.text();
       //             let finalCurrentData = await new DOMParser().parseFromString(data, "text/html");
         //           checkLinkTargetPresentOrNot(finalCurrentData, pageURL);
                } else {
                    finalResultArray.push({ pageURL, status: response.status });
                }
            }
            finally {
                resolve();
            }
        });
    }

    var promisePool = [];
    var intid = setInterval(() => {
        if (linksList.length) {
            promisePool.push(fetchAllURLS(linksList.pop()));
            console.log("test ", Date.now());
        } else {
            clearInterval(intid);
            Promise.all(promisePool).then(() => {
                document.querySelector('.download').removeAttribute("disabled");
            })            
            $('.xml_input,.xml_submit').removeAttr("disabled");
            $('.xml_submit').val("Run");
        }
    }, 500);


    document.querySelector('.download').addEventListener('click', function () {
        let innerTableText = finalResultArray.map(function (eachData) {
            return `<tr><td>${eachData.pageURL}</td><td>${eachData.targetLink || eachData.status}</td></tr>`
        }).join("");
        let requiredHTML = `<!DOCTYPE html><html><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible"content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Document</title><style>table{font-family: arial, sans-serif;border-collapse: collapse;width: 100%;}td, th {border: 1px solid #dddddd;text-align: left;padding: 8px;}tr:nth-child(even) {background-color: #dddddd;}.red{background:red;color:white;}.green{background:green;color:white;}</style></head><body><table><tr><th>Page URL</th><th>Target URL</th></tr>${innerTableText}</table></body></html>`;
        const data = requiredHTML;
        const a = document.createElement('a');
        const blob = new Blob([JSON.stringify(data)]);
        a.href = URL.createObjectURL(blob);
        a.download = document.querySelector("h1").textContent.trim()+'.html';
        a.click();
    })

    // *************************************************
    // if you want only links
    // finalResultArray


    // for getting all the links in sitemap, RUN THIS CODE SITEMAP CONSOLE
    // [...document.querySelectorAll("li a[href]")].filter((item, index) => {
    //     console.log(item.href)
    //     return item.href
    // })

    // *************************************************
    
    
    });
};

    