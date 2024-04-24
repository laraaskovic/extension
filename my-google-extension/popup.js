document.addEventListener("DOMContentLoaded", function() {
    const button = document.querySelector("#goPremium")
        button.addEventListener("click", () => {
        fetch("http://localhost:3000/create-checkout-session", {
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
    
    /*
    const goPremiumButton = document.getElementById("goPremium");
  
    goPremiumButton.addEventListener("click", function() {
        chrome.tabs.create({ url: "landing.html" }, function(tab) {
            chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, updatedTab) {
                if (tabId === tab.id && changeInfo.status === "complete") {
                    chrome.scripting.executeScript({
                        target: { tabId: tab.id },
                        function: handlePremiumPurchase
                    });
                }
            });
        });
    });
    
    function handlePremiumPurchase() {
        simulateSuccessfulPurchase();
    
        function simulateSuccessfulPurchase() {
            chrome.runtime.sendMessage({ action: "upgradeToPremium" });
        }
    }
    */
  });
  