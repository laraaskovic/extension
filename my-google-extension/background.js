chrome.commands.onCommand.addListener(function(command) {
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
    let firstLink = document.querySelector('a[href^="http"]:not([href*="google.com"])');
    if (firstLink) {
      window.location.href = firstLink.href;
    } else {
      console.error("No link found!");
    }
  }
  