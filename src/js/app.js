import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
  const cards = document.querySelectorAll('.card');
  console.log(cards);
  
  setTimeout(() => {
    cards.forEach(card => {
      const str = card.classList.toString()
      console.log(str)
      if(!str.includes('active')){
        card.style.display = 'none';
      }
    })
  }, 3000)

});
