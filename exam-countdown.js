/**
 * FORSKO - Exam Countdown Timer
 * Calculates and renders live remaining time until the target exam date.
 */

// =========================================================================
// CONFIGURATION: CHANGE EXAM TARGET DATE HERE
// Format: "Month Day, Year Hours:Minutes:Seconds"
// Example: "November 15, 2026 10:00:00"
// =========================================================================
const TARGET_EXAM_DATE = new Date("November 02, 2026 10:00:00").getTime();

document.addEventListener("DOMContentLoaded", () => {
  const daysEl = document.getElementById("countdownDays");
  const hoursEl = document.getElementById("countdownHours");
  const minutesEl = document.getElementById("countdownMinutes");
  const secondsEl = document.getElementById("countdownSeconds");
  const timerContainer = document.getElementById("forskoCountdownTimer");
  const expiredMessage = document.getElementById("countdownExpiredMsg");

  /**
   * Formats a number to always display at least two digits (e.g., 5 -> "05")
   */
  function formatTwoDigits(number) {
    return String(number).padStart(2, "0");
  }

  /**
   * Updates the timer display every second
   */
  function updateCountdown() {
    const now = new Date().getTime();
    const timeRemaining = TARGET_EXAM_DATE - now;

    // Check if the countdown has finished
    if (timeRemaining <= 0) {
      if (timerContainer) {
        timerContainer.style.display = "none";
      }
      if (expiredMessage) {
        expiredMessage.classList.remove("hidden");
      }
      return;
    }

    // Calculations for days, hours, minutes and seconds
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    // Update DOM elements
    if (daysEl) daysEl.textContent = days < 10 ? `0${days}` : String(days);
    if (hoursEl) hoursEl.textContent = formatTwoDigits(hours);
    if (minutesEl) minutesEl.textContent = formatTwoDigits(minutes);
    if (secondsEl) secondsEl.textContent = formatTwoDigits(seconds);
  }

  // Initial call to display immediately without 1s delay
  updateCountdown();

  // Run timer every second (1000ms)
  setInterval(updateCountdown, 1000);
});