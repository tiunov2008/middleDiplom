const countTimer = function(deadLine) {
    const timerDays = document.querySelector('.count_1>span'),
        timerHours = document.querySelector('.count_2>span'),
        timerMinutes = document.querySelector('.count_3>span'),
        timerSeconds = document.querySelector('.count_4>span');


    function getTimeRemaining() {
        const dateStop = new Date(deadLine).getTime(),
            dateNow = new Date().getTime(),
            timeRemaining = (dateStop - dateNow) / 1000,
            seconds = Math.floor(timeRemaining % 60),
            minutes = Math.floor((timeRemaining / 60) % 60),
            hours = Math.floor(timeRemaining / 60 / 60) % 24,
            days = Math.floor(timeRemaining / 60 / 60 / 24);
        return { timeRemaining, days, hours, minutes, seconds };
    }

    function add0(n) {
        if (n.toString()[1] === undefined) {
            return '0' + n;
        } else {
            return  n;
        }
    }

    function updateClock() {
        const timer = getTimeRemaining();
        if (timer.timeRemaining < 0) {
            timerDays.textContent = '00';
            timerHours.textContent = '00';
            timerMinutes.textContent = '00';
            timerSeconds.textContent = '00';
        } else {
            timerDays.textContent = add0(timer.days);
            timerHours.textContent = add0(timer.hours);
            timerMinutes.textContent = add0(timer.minutes);
            timerSeconds.textContent = add0(timer.seconds);
        }
    }
    updateClock();
    setInterval(updateClock, 1000);
};
export default countTimer;
