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

export default CountdownTimer