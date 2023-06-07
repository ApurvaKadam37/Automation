var title = document.getElementById("title");
var chartTitle = document.getElementById("chartTitle");
var message = document.getElementById("message");
var inputLink = document.getElementById("inputLink");
var getURL = document.getElementById("runUtility");
var dynamicTable = document.getElementById("dynamicTable");
var download = document.getElementById("download");
var clearField = document.getElementById("clearField");

let finalResultArray = [];

download.setAttribute("disabled", "");

clearField.addEventListener("click", () => {
  inputLink.value = " ";
});

inputLink.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    getURL.click();
  }
});

getURL.addEventListener("click", () => {
  getURL.setAttribute("disabled", "");
  let url = inputLink.value;
  // console.log(url)
  dynamicTable.innerHTML = "";

  if (!url.length > 0 || url === " ") {
    alert("Please enter the URL in input box");
    message.innerText = " ";
    document.querySelector(".sub-container").style.display = "none";
    return true;
  } else {
    getExternalLink();

    async function getExternalLink() {
      const newURL = new URL(url);
      const username = newURL.username;
      const password = newURL.password;
      const pathname = newURL.origin + newURL.pathname;
      // console.log("pathname",pathname );
      // console.log("Username",username);
      // console.log("password",password);
      url = pathname;
      try {
        var xmlFetch = await fetch(url, {
          method: "GET",
          headers: new Headers({
            Authorization: "Basic " + btoa(username + ":" + password),
            "Content-Type": "application/x-www-form-urlencoded",
          }),
        });
      } catch (err) {
        message.innerText = err.message;
        document.querySelector(".sub-container").style.display = "none";
        download.setAttribute("disabled", "");
      }

      var xmlResponse = await xmlFetch.status;

      if (xmlResponse === 401) {
        message.innerText =
          "Please follow URL with credentials like https://USERNAME:PASSWORD@domain.com/";
        document.querySelector(".sub-container").style.display = "none";
        download.setAttribute("disabled", "");
        return true;
      }
      if (xmlResponse === 200) {
        let externalLinks = [];
        const internalLinks = [];
        const totalLinks = [];
        const formLinks = [];
        let allLinks = [];

        message.innerText = " ";
        document.querySelector(".sub-container").style.display = "block";

        title.innerHTML = "All External Links In your URL -";

        if (!url.includes(".xml")) {
          allLinks.push(url);
          getAllLinks();
        } else {
          fetchSitemapURL();
        }

        async function fetchSitemapURL() {
          try {
            var xmlText = await xmlFetch.text();
            var xml = await new DOMParser().parseFromString(
              xmlText,
              "text/xml"
            );
            // console.log(xml);

            var urls = xml.getElementsByTagName("url");
            for (var i = 0; i < urls.length; i++) {
              var pageURL = urls[i];
              var siteurls = pageURL.getElementsByTagName("loc");
              for (var j = 0; j < siteurls.length; j++) {
                var singleURL = siteurls[j].childNodes[0].nodeValue;
                // console.log(singleURL);
                allLinks.push(singleURL);
              }
            }
            getAllLinks();
          } catch (err) {
            message.innerText = err.message;
            document.querySelector(".sub-container").style.display = "none";
            download.setAttribute("disabled", "");
          }
        }

        function getAllLinks() {
          allLinks.forEach(async (linkVal) => {
            // console.log("link Val =",linkVal)

            await fetch(linkVal, {
              method: "GET",
              // credentials: "include",
              headers: new Headers({
                Authorization: "Basic " + btoa(username + ":" + password),
                "Content-Type": "application/x-www-form-urlencoded",
              }),
            })
              .then((response) => response.text())
              .then((html) => {
                const parser = new DOMParser();
                const doc = parser.parseFromString(html, "text/html");
                const anchors = doc.getElementsByTagName("a");
                // console.log("All anchors =", anchors);

                externalLinks = [];
                // finalResultArray = [];

                for (var i = 0; i < anchors.length; i++) {
                  let target = anchors[i].target;
                  // console.log(target);
                  const href = anchors[i].attributes.href
                    ? anchors[i].attributes.href.value
                    : "";
                  //  console.log("href =",href);
                  if (
                    target === "_blank" &&
                    !href.includes("tel:") &&
                    !(
                      anchors[i].closest("form") &&
                      anchors[i].closest("form").length
                    )
                  ) {
                    externalLinks.push(href);
                  } else {
                    internalLinks.push(href);
                    if (
                      target === "_blank" &&
                      !href.includes("tel:") &&
                      anchors[i].closest("form") &&
                      anchors[i].closest("form").length
                    ) {
                      formLinks.push(href);
                    }
                  }
                  totalLinks.push(href);
                }

                // console.log("Total link =", totalLinks);
                // console.log("Internal link =", internalLinks);
                // console.log("External link =", externalLinks);
                // console.log("Form link =", formLinks);

                download.removeAttribute("disabled");
                finalResultArray.push({ linkVal, externalLinks });

                generateTable();

                function generateTable() {
                  const listBody = document.createElement("li");
                  if (externalLinks.length > 0) {
                    const h4 = document.createElement("h4");
                    h4.innerHTML = "Page Url : " + linkVal;
                    listBody.appendChild(h4);
                    let ol = document.createElement("ol");

                    externalLinks.forEach((item) => {
                      let li = document.createElement("li");
                      li.innerText = "External link : " + item;
                      ol.appendChild(li);
                      listBody.appendChild(ol);
                    });
                    dynamicTable.appendChild(listBody);
                  }
                  if (dynamicTable.textContent.length <= 0) {
                    dynamicTable
                      .appendChild(listBody)
                      .append(" No external links found");
                  }
                  getURL.removeAttribute("disabled", "");
                }

                // var xValues = [
                //   "Total Links",
                //   "External Links",
                //   "Internal Links",
                //   "external link in form",
                // ];
                // var yValues = [
                //   totalLinks.length,
                //   externalLinks.length,
                //   internalLinks.length,
                //   formLinks.length,
                // ];
                // var barColors = ["#b300b3", "#0000ff", "#00ff00", "#bf113a"];

                // Chart.register(ChartDataLabels);
                // new Chart("myChart", {
                //   type: "bar",
                //   data: {
                //     labels: [
                //       "Total Links",
                //       "External Links",
                //       "Internal Links",
                //       "external link in form",
                //     ],
                //     datasets: [
                //       {
                //         label: [
                //           "Total Links",
                //           "External Links",
                //           "Internal Links",
                //           "external link in form",
                //         ],
                //         data: [
                //           totalLinks.length,
                //           externalLinks.length,
                //           internalLinks.length,
                //           formLinks.length,
                //         ],
                //         backgroundColor: [
                //           "#b300b3",
                //           "#0000ff",
                //           "#00ff00",
                //           "#bf113a",
                //         ],
                //         barPercentage: 0.5,
                //       },
                //     ],
                //   },
                //   options: {
                //     responsive: false,
                //     plugins: {
                //       datalabels: {
                //         color: "white",
                //         font: {
                //           weight: "bold",
                //         },
                //       },
                //     },
                //   },
                // });

                var ctx = document.getElementById("myChart");
                var data = {
                  labels: [ "Total Links","External Links", "Internal Links", "external link in form",],
                  datasets: [{
                    data: [totalLinks.length, externalLinks.length,internalLinks.length,formLinks.length,],
                    backgroundColor: ["#b300b3", "#0000ff", "#00ff00", "#bf113a"],
                  }]
                }
                var myChart = new Chart(ctx, {
                  type: 'bar',
                  data: data,
                  options: {
                    "hover": {
                      "animationDuration": 0
                    },
                    "animation": {
                      "duration": 1,
                      "onComplete": function() {
                        var chartInstance = this.chart,
                          ctx = chartInstance.ctx;
                
                        ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontSize, Chart.defaults.global.defaultFontStyle, Chart.defaults.global.defaultFontFamily);
                        ctx.textAlign = 'center';
                        ctx.textBaseline = 'bottom';
                
                        this.data.datasets.forEach(function(dataset, i) {
                          var meta = chartInstance.controller.getDatasetMeta(i);
                          meta.data.forEach(function(bar, index) {
                            var data = dataset.data[index];
                            ctx.fillText(data, bar._model.x, bar._model.y - 5);
                          });
                        });
                      }
                    },
                    legend: {
                      "display": false
                    },
                    tooltips: {
                      "enabled": false
                    },
                    scales: {
                      yAxes: [{
                        display: false,
                        gridLines: {
                          display: false
                        },
                        ticks: {
                          max: Math.max(...data.datasets[0].data) + 10,
                          display: false,
                          beginAtZero: true
                        }
                      }],
                      xAxes: [{
                        gridLines: {
                          display: false
                        },
                        ticks: {
                          beginAtZero: true
                        }
                      }]
                    }
                  }
                });



              });
          });
        }
      } else {
        message.innerText = " This is an Invalid url, Please try again!";
        document.querySelector(".sub-container").style.display = "none";
        // console.log("error 404");
      }
    }
  }
});

download.addEventListener("click", function () {
  let innerTableText = finalResultArray
    .map(function (eachData) {
      return `<tr><td>${
        eachData.linkVal
      }</td><td><ol><li>${eachData.externalLinks.join("</li><li>")}</li></ol></td></tr>`;
    })
    .join("");
  let requiredHTML = `<!DOCTYPE html><html><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible"content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Document</title><style>table{font-family: arial, sans-serif;border-collapse: collapse;width: 100%;}td, th {border: 1px solid #dddddd;text-align: left;padding: 8px;}tr:nth-child(even) {background-color: #dddddd;}.red{background:red;color:white;}.green{background:green;color:white;}</style></head><body><table><tr><th>Page URL</th><th>All External Links</th></tr>${innerTableText}</table></body></html>`;
  const data = requiredHTML;
  const a = document.createElement("a");
  const blob = new Blob([JSON.stringify(data)]);
  a.href = URL.createObjectURL(blob);
  a.download = document.querySelector("h1").textContent.trim() + ".html";
  a.click();
});
