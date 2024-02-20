function setCountdown() {
    const targetDateInput = document.getElementById("targetDate");
    const targetDate = new Date(targetDateInput.value);
    
    if (isNaN(targetDate.getTime())) {
        alert("Invalid date. Please enter a valid date and time.");
        return;
    }

    // Update the countdown every second
    const countdownInterval = setInterval(updateCountdown, 1000, targetDate);

    // Call updateCountdown initially to avoid one-second delay
    updateCountdown(targetDate);

    // Function to update the countdown
    function updateCountdown(targetDate) {
        const currentDate = new Date();
        const timeDifference = targetDate.getTime() - currentDate.getTime();

        if (timeDifference <= 0) {
            clearInterval(countdownInterval);
            document.getElementById("countdown").innerHTML = "Countdown expired!";
        } else {
            const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

            document.getElementById("countdown").innerHTML =
                `${days}d ${hours}h ${minutes}m ${seconds}s`;
        }
    }
}
