document.addEventListener("DOMContentLoaded", function() {
    /*const button = document.querySelector("goPremium")
        button.addEventListener("click", function() {

        fetch("http://localhost:3004/create-checkout-session", {
            method: "POST"
        })
            .then(res => res.json())
            .then(({ url }) => {
            window.location = url
            })
            .catch(e => {
            console.error(e.error)
            })
        })
    
    */
    const goPremiumButton = document.getElementById("goPremium");
  
    goPremiumButton.addEventListener("click", function() {
        chrome.tabs.create({ url: "server.js" }, function(tab) {
            chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, updatedTab) {
                if (tabId === tab.id && changeInfo.status === "complete") {
                    chrome.scripting.executeScript({
                        target: { tabId: tab.id },
                    });
                }
            });
        });
    });
    

    
  });
