const buttons = document.querySelectorAll(".secret-notes__buttons button");
const note = document.querySelector(".secret-notes__text p");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", () => {
    note.classList.remove("slide-animation");
    void note.offsetWidth;
    note.classList.add("slide-animation");

    if (i === 0) {
      note.innerHTML = "You make my heart smile.";
    } else if (i === 1) {
      note.innerHTML = "I love your laugh";
    } else {
      note.innerHTML = "Always thinking of you (w/ Merlion)";
    }
  });
}

const playfulButton = document.getElementById("playful-button");
const container = document.querySelector("body");

const phrases = [
  "Are you sure? 💘",
  "Try again 😉",
  "Oops, too late! 💌",
  "Catch me if you can! ❤️",
];

playfulButton.addEventListener("mouseover", () => {
  // Get container and button dimensions
  const maxX = container.clientWidth - playfulButton.offsetWidth;
  const maxY = container.clientHeight - playfulButton.offsetHeight;

  // Random position
  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  // Move the button
  playfulButton.style.left = randomX + "px";
  playfulButton.style.top = randomY + "px";

  // Change text to a random playful phrase
  const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
  playfulButton.textContent = randomPhrase;
});

const dummy = document.getElementById("dummy-playful-button");

dummy.addEventListener("mouseover", () => {
  dummy.style.display = "none";
  playfulButton.style.display = "block";
});

dummy.addEventListener("hover", () => {
  dummy.style.display = "none";
  playfulButton.style.display = "block";
});

// Yes button
const yesButton = document.querySelector(
  ".main-container__buttons button:nth-child(1)",
);
const header = document.querySelector(".main-container__header");
const body = document.body;

// Confetti function
function createConfetti() {
  const colors = ["#fb7185", "#facc15", "#f97316", "#3b82f6", "#10b981"];
  const confettiCount = 150;

  for (let i = 0; i < confettiCount; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");
    confetti.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];
    confetti.style.left = Math.random() * window.innerWidth + "px";
    confetti.style.top = "-10px";
    confetti.style.opacity = Math.random();

    body.appendChild(confetti);

    // Animate falling
    const duration = Math.random() * 3000 + 2000;
    const endX = (Math.random() - 0.5) * 100; // side drift
    const endY = window.innerHeight + 50;

    confetti.animate(
      [
        {
          transform: `translate(0px, 0px) rotate(0deg)`,
          opacity: confetti.style.opacity,
        },
        {
          transform: `translate(${endX}px, ${endY}px) rotate(${Math.random() * 360}deg)`,
          opacity: 0,
        },
      ],
      { duration: duration, easing: "ease-out", iterations: 1 },
    );

    setTimeout(() => confetti.remove(), duration);
  }
}

// Heart rain function
function createHearts() {
  const heartCount = 50;

  for (let i = 0; i < heartCount; i++) {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.top = "-50px";
    heart.style.fontSize = Math.random() * 20 + 20 + "px";

    body.appendChild(heart);

    const duration = Math.random() * 4000 + 3000;
    const endX = (Math.random() - 0.5) * 100;
    const endY = window.innerHeight + 50;

    heart.animate(
      [
        { transform: `translate(0px, 0px) rotate(0deg)`, opacity: 1 },
        {
          transform: `translate(${endX}px, ${endY}px) rotate(${Math.random() * 360}deg)`,
          opacity: 0,
        },
      ],
      { duration: duration, easing: "linear", iterations: 1 },
    );

    setTimeout(() => heart.remove(), duration);
  }
}

// On Yes button click
yesButton.addEventListener("click", () => {
  header.innerHTML = `It's a date! <br> <span>February 14, 2026 - 1:00 PM</span>`;
  playfulButton.style.display = "none";
  dummy.style.display = "none";
  yesButton.style.display = "none";

  createConfetti();
  createHearts();
});
