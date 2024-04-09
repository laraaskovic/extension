chrome.commands.onCommand.addListener(function(command) {
    console.log(`Command received: ${command}`); // This helps in debugging

    if (command == "open-first-link") {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.scripting.executeScript({
          target: {tabId: tabs[0].id},
          function: openFirstLink
        });
      });
    }
  });
  
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
      } else {
        console.log("First result link not found. Check if the selector is correct.");
      }
    }, 100); // Delay of 1000 milliseconds (1 second)
  }
    