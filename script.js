let selectedDate = new Date(document.getElementById("date-select").value).getTime();

const countdown = () => {
    const now = new Date().getTime();
    const gap = selectedDate - now;

    // Time calculations for days, hours, minutes, and seconds
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);

    document.getElementById("days").innerText = textDay;
    document.getElementById("hours").innerText = textHour;
    document.getElementById("minutes").innerText = textMinute;
    document.getElementById("seconds").innerText = textSecond;

    // Calculate total progress (using an arbitrary start date for demonstration)
    const totalGap = selectedDate - new Date("March 23, 2025 8:0:0").getTime(); // Adjust the start date as needed
    const progress = ((totalGap - gap) / totalGap) * 360;

    document.querySelector(".progress-circle").style.background = `conic-gradient(#61dafb ${progress}deg, rgba(255, 255, 255, 0.2) 0)`;
};

// Listen for dropdown changes
document.getElementById("date-select").addEventListener("change", (event) => {
    selectedDate = new Date(event.target.value).getTime();
    countdown(); // Update the countdown immediately when the date changes
});

// Update the countdown every second
setInterval(countdown, 1000);
