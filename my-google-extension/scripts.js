/*NOT IN USE

document.getElementById('paymentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const paymentDetails = {
        name: formData.get('name'),
        cardNumber: formData.get('cardNumber'),
        expiry: formData.get('expiry'),
        cvv: formData.get('cvv')
    };

    handlePayment(paymentDetails);
});

function handlePayment(paymentDetails) {
    // Simulated payment processing
    simulatePayment(paymentDetails)
        .then(() => {
            alert('Payment successful! Thank you for subscribing.');
            // Redirect to success page or update extension subscription status
        })
        .catch(error => {
            console.error('Payment error:', error);
            alert('Payment failed. Please try again later.');
        });
}

function simulatePayment(paymentDetails) {
    // Simulate payment processing (replace with actual payment processing logic)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulated success
            resolve();
        }, 2000); // Simulate 2 seconds delay
    });
}
*/