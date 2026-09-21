/**
 * FORSKO - 3 Horizontal Exam Countdowns & Motivational Quotes Switcher
 */

// =========================================================================
// CONFIGURATION: CHANGE EXAM TARGET DATES HERE
// Format: "Month Day, Year Hours:Minutes:Seconds"
// =========================================================================
const COUNTDOWN_CONFIG = [
  {
    id: "1",
    targetDate: new Date("November 02, 2026 10:00:00").getTime(),
    daysId: "days-1",
    hoursId: "hours-1",
    minutesId: "minutes-1",
    secondsId: "seconds-1",
    timerId: "timer-1",
    expiredId: "expired-1"
  },
  {
    id: "2",
    targetDate: new Date("October 01, 2026 10:00:00").getTime(),
    daysId: "days-2",
    hoursId: "hours-2",
    minutesId: "minutes-2",
    secondsId: "seconds-2",
    timerId: "timer-2",
    expiredId: "expired-2"
  },
  {
    id: "3",
    targetDate: new Date("December 21, 2026 10:00:00").getTime(),
    daysId: "days-3",
    hoursId: "hours-3",
    minutesId: "minutes-3",
    secondsId: "seconds-3",
    timerId: "timer-3",
    expiredId: "expired-3"
  }
];

// Interactive Motivational Quotes Bank
const MOTIVATIONAL_QUOTES = [
  "\"Every line of code you write brings you closer to your goal. Stay focused!\"",
  "\"Consistency beats intensity. 1 hour of daily revision creates top rankers!\"",
  "\"You are building your future. Finish your degree strong and make it count!\"",
  "\"Smart work + PYQ analysis = 90%+ in SGBAU Semester Exams.\"",
  "\"Believe in your logic, debug your doubts, and master your subjects!\"",
  "\"Small daily efforts multiply into massive exam success. Keep going!\""
];

document.addEventListener("DOMContentLoaded", () => {

  // Helper function for two-digit formatting (5 -> "05")
  function padZero(num) {
    return String(num).padStart(2, "0");
  }

  // Update All 3 Timers simultaneously
  function updateAllCountdowns() {
    const now = new Date().getTime();

    COUNTDOWN_CONFIG.forEach(config => {
      const daysEl = document.getElementById(config.daysId);
      const hoursEl = document.getElementById(config.hoursId);
      const minutesEl = document.getElementById(config.minutesId);
      const secondsEl = document.getElementById(config.secondsId);
      const timerBox = document.getElementById(config.timerId);
      const expiredMsg = document.getElementById(config.expiredId);

      const timeRemaining = config.targetDate - now;

      if (timeRemaining <= 0) {
        if (timerBox) timerBox.style.display = "none";
        if (expiredMsg) expiredMsg.classList.remove("hidden");
        return;
      }

      const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

      if (daysEl) daysEl.textContent = padZero(days);
      if (hoursEl) hoursEl.textContent = padZero(hours);
      if (minutesEl) minutesEl.textContent = padZero(minutes);
      if (secondsEl) secondsEl.textContent = padZero(seconds);
    });
  }

  // Interactive Click to Change Motivational Quote
  ["1", "2", "3"].forEach(id => {
    const box = document.getElementById(`motivation-${id}`);
    const textEl = document.getElementById(`quote-${id}`);

    if (box && textEl) {
      box.addEventListener("click", () => {
        textEl.style.opacity = "0";
        setTimeout(() => {
          const randomIndex = Math.floor(Math.random() * MOTIVATIONAL_QUOTES.length);
          textEl.textContent = MOTIVATIONAL_QUOTES[randomIndex];
          textEl.style.opacity = "1";
        }, 200);
      });
    }
  });

  // Run Immediately & Update Every Second
  updateAllCountdowns();
  setInterval(updateAllCountdowns, 1000);

});
