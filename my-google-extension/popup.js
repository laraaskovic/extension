const CLIENT_URL = "http://localhost:3010";

document.addEventListener("DOMContentLoaded", function() {
    const button = document.querySelector("#goPremium");
    button.addEventListener("click", function() {
        // Open a new tab with the checkout session URL
        chrome.tabs.create({ url: `${CLIENT_URL}/create-checkout-session` });
    });
});


/*const CLIENT_URL = "http://localhost:3010"; // Update with your client URL

document.addEventListener("DOMContentLoaded", function() {
    const button = document.querySelector("#goPremium");
    button.addEventListener("click", function() {
        // Open a new tab with the checkout session URL
        chrome.tabs.create({ url: "about:blank" }, function(tab) {
            chrome.tabs.executeScript(tab.id, {
                code: `window.location.href = "${CLIENT_URL}/create-checkout-session";`
            });
        });
    });
});*/


/*document.addEventListener("DOMContentLoaded", function() {
    const button = document.querySelector("#goPremium")
        button.addEventListener("click", function() {

        fetch("http://localhost:3010/create-checkout-session", {
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
    
    
    const goPremiumButton = document.getElementById("goPremium");
  
    goPremiumButton.addEventListener("click", function() {
        chrome.tabs.create({ url: "landing.html" }, function(tab) {
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
*/