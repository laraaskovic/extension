document.addEventListener("DOMContentLoaded", function() {
    const button = document.querySelector("#goPremium"); // Corrected selector to use id

    button.addEventListener("click", function() {
        fetch("http://localhost:3000/create-checkout-session", { // Adjusted port to match your server
            method: "POST"
        })
        .then(res => res.json())
        .then(({ url }) => {
            window.location = url;
        })
        .catch(e => {
            console.error(e.error);
        });
    });
});

    
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
  