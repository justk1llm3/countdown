const countdown = () => {
    const countDate = new Date("Mar 20, 2025 8:0:0").getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    // Time calculations for days, hours, minutes and seconds
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

    // Calculate total progress
    const totalGap = countDate - new Date("July 1, 2024 8:0:0").getTime(); // Total time duration
    const progress = ((totalGap - gap) / totalGap) * 360;

    document.querySelector(".progress-circle").style.background = `conic-gradient(#61dafb ${progress}deg, rgba(255, 255, 255, 0.2) 0)`;
};

// Update the countdown every 1 second
setInterval(countdown, 1000);
