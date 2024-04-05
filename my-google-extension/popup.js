document.addEventListener("DOMContentLoaded", function() {
    const goPremiumButton = document.getElementById("goPremium");
  
    goPremiumButton.addEventListener("click", function() {
        // Open a new tab with the purchase page URL
        chrome.tabs.create({ url: "landing.html" }, function(tab) {
            // Add an event listener to the newly created tab to handle communication
            chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, updatedTab) {
                // Check if the tab is the newly created purchase page and it's fully loaded
                if (tabId === tab.id && changeInfo.status === "complete") {
                    // Call a function in the purchase page to handle premium purchase
                    chrome.scripting.executeScript({
                        target: { tabId: tab.id },
                        function: handlePremiumPurchase
                    });
                }
            });
        });
    });
    
    function handlePremiumPurchase() {
        // This function will be executed in the context of the purchase page
        // Implement your premium purchase logic here
        // For example, you can handle payment processing using a payment processor API
        // Once the purchase is successful, send a message to the background page to update the subscription status
    
        // Simulate a successful premium purchase for demonstration purposes
        // In a real-world scenario, you would replace this with actual payment processing logic
        simulateSuccessfulPurchase();
    
        function simulateSuccessfulPurchase() {
            // Simulate a successful premium purchase
            // Here, you would typically interact with a payment processor API and handle the payment processing
    
            // Once the purchase is successful, send a message to the background page to update the subscription status
            chrome.runtime.sendMessage({ action: "upgradeToPremium" });
        }
    }
    
  });
  