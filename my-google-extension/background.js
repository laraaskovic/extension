// background.js

// Track the usage count of the shortcut
let usageCount = 0;

chrome.commands.onCommand.addListener(function(command) {
    console.log(`Command received: ${command}`); // This helps in debugging

    if (command == "open-first-link") {
        // Check if the user has a subscription before executing the shortcut
        chrome.storage.sync.get('subscriptionStatus', function(data) {
            if (data.subscriptionStatus === 'premium' || usageCount < 100) {
                executeShortcut();
            } else {
                alert("You've reached the usage limit for the free version. Please upgrade to the premium version for unlimited access.");
            }
        });
    }
});

function executeShortcut() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.scripting.executeScript({
            target: {tabId: tabs[0].id},
            function: openFirstLink
        });
    });
}

function openFirstLink() {
    setTimeout(() => {
        const resultsSelector = '#search .g'; // This is an example; adjust based on actual structure
        const linkSelector = 'a'; // Likely needs adjustment to be more specific

        const resultsContainer = document.querySelector(resultsSelector);
        if (!resultsContainer) {
            console.log("Results container not found. Page structure might have changed.");
            return;
        }

        const firstResultLink = resultsContainer.querySelector(linkSelector);
        if (firstResultLink) {
            console.log("Opening first result:", firstResultLink.href);
            window.location.href = firstResultLink.href; // Navigate to the first result
            usageCount++; // Increment the usage count
        } else {
            console.log("First result link not found. Check if the selector is correct.");
        }
    }, 100); // Delay of 100 milliseconds
}
