document.addEventListener("DOMContentLoaded", function() {
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
    
  });
  