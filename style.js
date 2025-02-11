// JavaScript to add interactivity
document.addEventListener('DOMContentLoaded', () => {
  const portraits = document.querySelectorAll('.portrait');

  portraits.forEach(portrait => {
      portrait.addEventListener('click', () => {
          alert('If life is a movie, you are the best thing');
      });
  });
});