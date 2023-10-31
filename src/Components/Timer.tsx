import React, { useRef, useState } from 'react';
import './Timer.css';

export default function Timer() {

    const [timerDays, setTimerDays] = useState("00");
    const [timerHours, setTimerHours] = useState("00");
    const [timerMinutes, setTimerMinutes] = useState("00");
    const [timerSeconds, setTimerSeconds] = useState("00");

    let interval: NodeJS.Timeout | null = null;

    const startTimer = () => {
        const countdownDate = new Date("December 25, 2023, 00:00:00").getTime();

        interval = setInterval(() => {
            const now: any = new Date().getTime;
            const distance = countdownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)));
            const minutes = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        }, 1000);

        if (distance < 0) {
            // stop
        }
        

    }

    return (
        <div className="timer-container">
            <section className="timer">
                <div>
                    <section>
                        <p>84</p>
                        <p><small>days</small></p>
                    </section>
                    <span>:</span>

                    <section>
                        <p>84</p>
                        <p><small>Hours</small></p>
                    </section>
                    <span>:</span>

                    <section>
                        <p>84</p>
                        <p><small>minutes</small></p>
                    </section>
                    <span>:</span>

                    <section>
                        <p>84</p>
                        <p><small>seconds</small></p>
                    </section>

                </div>
            </section>
        </div>
    )
}