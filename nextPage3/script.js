import {StartUp_Examples} from '/startUpData.js';


const cardsGrid = document.querySelector('.cards-grid');


StartUp_Examples.forEach((value) => {
    // Check if a card with this category already exists
    const existingCard = cardsGrid.querySelector(`[data-category="${value.category}"]`);
  
    if (!existingCard) {
      // Add new card for this category
      cardsGrid.innerHTML += `<div class="card" data-category="${value.category}">
            
      
            <div class="card-content">
                <div class="hidden-text" style="visibility: hidden">
                    <div class="card-header animated-bg header">
                      <img src="img/${value.category}.png" alt="NO IMAGE AVAILABLE" />
                    </div>
                    <h1 class="card-title title montserrat-heading">${value.category}</h1>
                </div>
                <div class="animated-skeleton">
                    <div class="animated-bg header">&nbsp;</div>
                    <div class="animated-bg animated-bg-text">&nbsp;</div>
                    <div class="animated-bg animated-bg-text">&nbsp;</div>
                    <div class="animated-bg animated-bg-text">&nbsp;</div>
                </div>
              
            </div>
          </div>
            `;
    }
  });

/*
`<div class="card" data-category="${value.category}">
            <div class="card-header animated-bg header">&nbsp;</div>
      
            <div class="card-content">
                <div class="hidden-text" style="visibility: hidden">
                    <h3 class="card-title title">${value.category}</h3>
                    <p class="card-excerpt excerpt">${value.title}</p>
                </div>
                <div class="animated-skeleton">
                    <div class="animated-bg header">&nbsp;</div>
                    <div class="animated-bg animated-bg-text">&nbsp;</div>
                    <div class="animated-bg animated-bg-text">&nbsp;</div>
                    <div class="animated-bg animated-bg-text">&nbsp;</div>
                </div>
              
            </div>
          </div>
            `
*/


  document.querySelectorAll(".card").forEach((card) => {
    const animatedBgs = card.querySelectorAll('.animated-bg');
    const animatedBgTexts = card.querySelectorAll('.animated-bg-text');
    const hiddenText = card.querySelector('.hidden-text');
    const skeleton = card.querySelector('.animated-skeleton');
  
    setTimeout(() => {
      animatedBgs.forEach(bg => bg.classList.remove('animated-bg'));
      animatedBgTexts.forEach(bg => bg.classList.remove('animated-bg-text'));
      
      if (skeleton) skeleton.remove();
      if (hiddenText) hiddenText.style.visibility = 'visible';
    }, 2500);
  });
         

    // Add event listener to each category card
document.querySelectorAll('.card').forEach((card) => {
  card.addEventListener('click', function() {
    const category = card.getAttribute('data-category');
    loadStartupsByCategory(category);
  });
});

// Function to load startups based on the selected category
function loadStartupsByCategory(category) {
  // Clear existing content (optional, depending on the page structure)
  document.querySelector('.cards-grid').innerHTML = '';

  // Filter the startup ideas for the selected category
  const filteredStartups = StartUp_Examples.filter(startup => startup.category.toLowerCase() === category.toLowerCase());

  // Add the filtered cards to the page
  filteredStartups.forEach((value) => {
    document.querySelector('.cards-grid').innerHTML += `<div class="card" data-category="${value.category}">
            
      
            <div class="card-content">
                <div class="hidden-text" style="visibility: hidden">
                    <div class="card-header animated-bg header">
                      <img src="img/${value.category}.png" alt="NO IMAGE AVAILABLE" />
                    </div>
                    <h1 class="card-title title montserrat-heading">${value.title}</h1>
                </div>
                <div class="animated-skeleton">
                    <div class="animated-bg header">&nbsp;</div>
                    <div class="animated-bg animated-bg-text">&nbsp;</div>
                    <div class="animated-bg animated-bg-text">&nbsp;</div>
                    <div class="animated-bg animated-bg-text">&nbsp;</div>
                </div>
              
            </div>
          </div>
            `;
    });
  
    document.querySelectorAll(".card").forEach((card) => {
      const animated_bgs = card.querySelectorAll('.animated-bg');
      const animated_bg_texts = card.querySelectorAll('.animated-bg-text');
      const hiddenText = card.querySelector('.hidden-text');
      const skeleton = card.querySelector('.animated-skeleton');
      setTimeout(() => {
        animated_bgs.forEach(bg => bg.classList.remove('animated-bg'));
        animated_bg_texts.forEach(bg => bg.classList.remove('animated-bg-text'));
        if (skeleton) skeleton.remove();
        if (hiddenText) hiddenText.style.visibility = 'visible';
      }, 2500);
    });
  }