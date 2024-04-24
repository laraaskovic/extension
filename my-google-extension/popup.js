document.addEventListener("DOMContentLoaded", function() {
    const goPremiumButton = document.getElementById("goPremium");
  
    goPremiumButton.addEventListener("click", function() {
        fetch("http://localhost:3000/create-checkout-session", {
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
