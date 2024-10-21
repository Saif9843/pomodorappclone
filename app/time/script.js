let timer;
let isRunning = false;
let timeLeft = 1500; // 25 minutes in seconds

const displayTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    const formattedTime = `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    document.querySelector('.absolute.inset-0.flex.items-center.justify-center.text-5xl').textContent = formattedTime;
};

const startTimer = () => {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft--;
                displayTime(timeLeft);
            } else {
                clearInterval(timer);
                isRunning = false;
                alert('Time is up!');
            }
        }, 1000);
    }
};

const resetTimer = () => {
    clearInterval(timer);
    isRunning = false;
    timeLeft = 1500; // Reset to 25 minutes
    displayTime(timeLeft);
};

// Initialize display
displayTime(timeLeft);

// Attach event to the play button
document.querySelector('.mt-8.bg-white.bg-opacity-20.rounded-full.p-4').addEventListener('click', startTimer);

// Optional: Reset the timer when clicking the focus button
document.querySelector('.flex.items-center.space-x-2.bg-white.bg-opacity-20.rounded-full.px-6.py-2').addEventListener('click', resetTimer);
