var chart = document.getElementById("myChart");
var title = document.getElementById("title");
var chartTitle = document.getElementById("chartTitle");
var message = document.getElementById("message");
var externalLinkList = document.getElementById("externalLinkList");
var inputLink = document.getElementById("inputLink");
var getURL = document.getElementById("runUtility");
var dynamicTable =  document.getElementById("dynamicTable");

inputLink.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    getURL.click();
  }
});

getURL.addEventListener("click", () => {
  const url = inputLink.value;

  if (!url.length > 0 || url === " ") {
    alert("Please enter the URL in input box");
    message.innerText = " ";
    document.querySelector(".sub-container").style.display = "none";
    return true;
  } else {
    getExternalLink();
  

    async function getExternalLink() {   
      const data = await fetch(url).then((response) => {
        if (response.status === 200 || response.status === 401) {
          message.innerText = " ";
          document.querySelector(".sub-container").style.display = "block";

          title.innerHTML = "All External Links In your URL -";
          // chartTitle.innerHTML = "Result of URL -";
          // chart.display = "block";

          const externalLinks = [];
          const internalLinks = [];
          const totalLinks = [];
          const formLinks = [];

          let domain = new URL(url);
          domain = domain.hostname;
           console.log("Domain", domain);


          fetch(url)
            .then((response) => response.text())
            .then((html) => {
              const parser = new DOMParser();
              const doc = parser.parseFromString(html, "text/html");
              const anchors = doc.getElementsByTagName("a");
              //  console.log("All anchors =", anchors);

              const forms = doc.getElementsByTagName("form");

              for (let i = 0; i < forms.length; i++) {
                const form = forms[i];
                const links = form.getElementsByTagName("a");

                for (let j = 0; j < links.length; j++) {
                  let target = links[i].target;
                   const link = links[j];
                  //  console.log(target);
                  if(target === "_blank"){
                    // console.log("form link = ",link.href);
                    formLinks.push(link.pathname);
                  }
                }
              }

              for (var i = 0; i < anchors.length; i++) {
                let target = anchors[i].target;
                // console.log(target);
                const href = anchors[i].href;
                  console.log("href =",href);
                if (target === "_blank" && !href.includes("tel") && !formLinks.includes(href)) {
                  externalLinks.push(href);
                } else {
                  internalLinks.push(href);
                }
                totalLinks.push(href);
              }

              // console.log("Total link =", totalLinks);
              // console.log("Internal link =", internalLinks);
              // console.log("External link =", externalLinks);
              // console.log("Form link =", formLinks);


                generateTable();

                
                function generateTable() {
                  const listBody = document.createElement("li");
                  listBody.innerHTML = url ;
                  dynamicTable.appendChild(listBody);
                externalLinks.forEach((item) => {
                  let li = document.createElement("li");
                  li.innerText = item;
                  externalLinkList.appendChild(li);
                });
                }
                

              var xValues = ["Total Links", "External Links", "Internal Links" , "external link in form"];
              var yValues = [
                totalLinks.length,
                externalLinks.length,
                internalLinks.length,
                formLinks.length,
              ];
              var barColors = ["#b300b3", "#0000ff", "#00ff00","#bf113a"];

              new Chart("myChart", {
                type: "bar",
                data: {
                  labels: xValues,
                  datasets: [
                    {
                      backgroundColor: barColors,
                      data: yValues,
                    },
                  ],
                },
                options: {
                  legend: { display: false },
                },
              });

            });

        } else {
          message.innerText = " This url found an 404 error, Kindly check URL";
          document.querySelector(".sub-container").style.display = "none";
          // console.log("error 404");
        }
      });
    }
  }
});
