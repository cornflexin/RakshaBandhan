const letters = {
  "Abhi Bhaiya": "Wishing you lots of love this Rakshabandhan Abhi bhaiya! 🎉 Coolest guy ever. Always fun when you come around. Can't wait to meet you again! Love you loads bhaiya ",
  "Pawan Bhaiya": "Happy Rakshabandhan Pawan bhaiya!! Funniest person ever and always so fun with you. Miss you as well. Love you & Thanks for always being there for everyone! ❤️",
  "Saksham Bhaiya": "Miss you so much, bhaiya. Hope Europe is awesome, Happy Rakshabandhan Saksham bhaiya! Most hardworking person I know, you're so cool. Love you!",
  "Dada": "Okay Doctor sahab, Happy Rakshabandhan. Thanks for everything. My favourite person ever, You’re simply the best! Always my protector 🛡️, LOVE YOU!!!!!!!!!!",
  "Ripu Bhaiya": "Happy Rakshabandhan pookie bhaiya, you're the sweetest person ever! Nothing but absolute affection and respect for you. ALWAYS wishing for your happiness and success. Love you!"
};

function openLetter(name) {
  document.getElementById("letterTitle").innerText = `For: ${name}`;
  document.getElementById("letterText").innerText = letters[name];
  document.getElementById("letterModal").style.display = "flex";

  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 }
  });
}

function closeLetter() {
  document.getElementById("letterModal").style.display = "none";
}
