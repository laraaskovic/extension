chrome.commands.onCommand.addListener(function(command) {
  console.log(`Command received: ${command}`); // This helps in debugging

  if (command == "open-first-link") {
      // Check if user has an active subscription
      checkSubscriptionStatus();
  }
});

function checkSubscriptionStatus() {
  // Send a request to your server to check the subscription status
  fetch('http://localhost:3000/check-subscription', {
    method: 'GET',
      credentials: 'include' // include cookies in the request
  })
  .then(response => {
      if (response.ok) {
          return response.text();
      } else {
          throw new Error('Network response was not ok.');
      }
  })
  .then(data => {
      if (data === 'success') {
          // User has an active subscription, execute the command
          executeCommand();
      } else {
          // User doesn't have an active subscription, prompt to purchase or upgrade
          console.log('User does not have an active subscription.');
          // Optionally, you can display a notification to the user or redirect them to a purchase page.
      }
  })
  .catch(error => {
      console.error('Error checking subscription status:', error);
  });
}

function executeCommand() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.scripting.executeScript({
          target: {tabId: tabs[0].id},
          function: openFirstLink
      });
  });
}

function openFirstLink() {
  setTimeout(() => {
      const resultsSelector = '#search .g'; 
      const linkSelector = 'a'; 

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


/*chrome.commands.onCommand.addListener(function(command) {
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
      const resultsSelector = '#search .g'; 
      const linkSelector = 'a'; 
  
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
    */