document.addEventListener('DOMContentLoaded', () => {
    const countdownDate = new Date("Dec 31, 2024 23:59:59").getTime();
  
    const updateCountdown = () => {
      const now = new Date().getTime();
      const duration = countdownDate - now;
  
      const days = Math.floor(duration / (1000 * 60 * 60 * 24));
      const hours = Math.floor((duration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((duration % (1000 * 60)) / 1000);
  
      updateDigit("days", days);
      updateDigit("hours", hours);
      updateDigit("minutes", minutes);
      updateDigit("seconds", seconds);
  
      if (duration < 0) {
        clearInterval(interval);
        document.querySelector("main").innerHTML = "<h1>We have launched!</h1>";
      }
    };

    const updateDigit = (id, value) => {
      const digitElement = document.getElementById(id).querySelector("h2");
      if (digitElement.innerText !== value.toString()) {
        digitElement.innerText = value;
        const digitContainer = document.getElementById(id);
        digitContainer.querySelector('.digit-top').classList.add('animate-top');
        digitContainer.querySelector('.digit-bottom').classList.add('animate-bottom');

        setTimeout(() => {
          digitContainer.querySelector('.digit-top').classList.remove('animate-top');
          digitContainer.querySelector('.digit-bottom').classList.remove('animate-bottom');
        }, 300); 
      }
    };
  
    const interval = setInterval(updateCountdown, 1000);
    updateCountdown();
});