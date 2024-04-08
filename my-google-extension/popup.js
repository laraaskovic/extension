// popup.js

document.addEventListener("DOMContentLoaded", function() {
    const goPremiumButton = document.getElementById("goPremium");

    goPremiumButton.addEventListener("click", function() {
        chrome.storage.sync.get('subscriptionStatus', function(data) {
            if (data.subscriptionStatus === 'premium') {
                alert("You are already subscribed to the premium version.");
            } else {
                // Open the payment page
                chrome.tabs.create({ url: "landing.html" });
            }
        });
    });
});
