import {StatUp_Ideas} from '../StartUpData.js';


const cardsGrid = document.querySelector('.cards-grid');


StatUp_Ideas.forEach((value) => {
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
  const filteredStartups = StatUp_Ideas.filter(startup => startup.category.toLowerCase() === category.toLowerCase());

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

  card.addEventListener('touchstart', function () {
    document.querySelectorAll('.card').forEach(c => c.classList.remove('active'));
  
    // Get color based on category
    const category = card.getAttribute('data-category');
    const colors = {
      'Agriculture': '#476930',
      'Technologie': '#0a84ff',
      'e-commerce': '#2A9D8F',
      'Environnement': '#A26769',
      'Éducation': '#F9C74F',
      'Médical': '#E63946',
      'Finance': '#7851A9',
      'Transport': '#E97451',
      'Industries': '#2C3539',
      'Énergie et Environnement': '#43B3AE',
      'Support aux Startups' : '#005B5D',
      'Santé et bien être' : '#E63946'
    };
  
    card.style.setProperty('--category-color', colors[category] || '#000');
    card.classList.add('active');
  
    setTimeout(() => {
      loadStartupsByCategory(category);
    }, 300);
  }, { passive: true });