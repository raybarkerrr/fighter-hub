import "./Countdown.css"

export const CountdownTimer = () => {
    return (
        <>
            <div className="time-counter-container">
                <div className="main-event">
                    <h1>UFC 280</h1>
                </div>
            </div>
            <div className="time-counter">
                <div className="container-day">
                    <h3 className="day">Time</h3>
                </div>
                <div className="container-hour">
                    <h3 className="hour">Time</h3>
                </div>
                <div className="container-minute">
                    <h3 className="minute">Time</h3>
                </div>
            </div>
        </>
    )
}

export const CountdownFunct = () => {
    const countDate = new Date("September 10, 2022 17:00:00").getTime()
    const now = new Date().getTime();
    const gap = countDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const textDay = Math.floor (gap / day);
    const textHour = Math.floor ((gap % day) / hour);
    const textMinute = Math.floor ((gap % hour) / minute);

    document.querySelector(".time-counter").innerText = textDay
    document.querySelector(".container-hour").innerText = textHour
    document.querySelector(".container-minute").innerText = textMinute
};

export default (CountdownTimer, CountdownFunct)
