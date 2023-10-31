import React, { useEffect, useRef, useState } from 'react';
import Effect from '../Assets/ticing-clock.mp3'
import './Timer.css';

export default function Timer() {

    const [timerDays, setTimerDays] = useState("00");
    const [timerHours, setTimerHours] = useState("00");
    const [timerMinutes, setTimerMinutes] = useState("00");
    const [timerSeconds, setTimerSeconds] = useState("00");

    
    const effect = new Audio(Effect);
    const interval = useRef<NodeJS.Timeout | null>(null);

    const startTimer = () => {
        const countdownDate = new Date("December 25, 2023, 00:00:00").getTime();

        interval.current = setInterval(() => {
            const now = new Date().getTime(); // Correct the way to get the current time
            const distance = countdownDate - now;

            if (distance < 0) {
                clearInterval(interval.current!); // Stop the timer
                return alert("done")
            } else {
                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);

                // update value
                setTimerDays(days.toString().padStart(2, "0"));
                setTimerHours(hours.toString().padStart(2, "0"));
                setTimerMinutes(minutes.toString().padStart(2, "0"));
                setTimerSeconds(seconds.toString().padStart(2, "0"));
                effect.play();
            }

        }, 1000)
    }

    useEffect(() => {
        startTimer();
        return () => {
            if (interval.current) {
                clearInterval(interval.current);
            }
        };
    }, []);

    return (
        <div className="timer-container">
            <section className="timer">
                <div>
                    <section>
                        <p>{timerDays}</p>
                        <p><small>days</small></p>
                    </section>
                    <span>:</span>

                    <section>
                        <p>{timerHours}</p>
                        <p><small>Hours</small></p>
                    </section>
                    <span>:</span>

                    <section>
                        <p>{timerMinutes}</p>
                        <p><small>minutes</small></p>
                    </section>
                    <span>:</span>

                    <section>
                        <p>{timerSeconds}</p>
                        <p><small>seconds</small></p>
                    </section>

                </div>
            </section>
        </div>
    )
}