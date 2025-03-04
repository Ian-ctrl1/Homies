// JavaScript to add interactivity
document.addEventListener('DOMContentLoaded', () => {
  const portraits = document.querySelectorAll('.portrait');

  portraits.forEach(portrait => {
      portrait.addEventListener('click', () => {
          portrait.style.transform = "scale(1.2)";
          setTimeout(() => {
              portrait.style.transform = "scale(1)";
              alert('🔥 BONI THE GREAT: If life is a movie, you are the best thing! 🔥');
          }, 300);
      });
  });
});
