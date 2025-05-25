import {Decree_1275_StartUps} from '../StartUpData.js';


const cardsGrid = document.querySelector('.cards-grid');


Decree_1275_StartUps.forEach((value) => {
    // Check if a card with this category already exists
    const existingCard = cardsGrid.querySelector(`[data-category="${value.university}"]`);
  
    if (!existingCard) {
      // Add new card for this category
      cardsGrid.innerHTML += `<div class="card" data-category="${value.university}">
            
      
            <div class="card-content">
                <div class="hidden-text" style="visibility: hidden">
                    <div class="card-header animated-bg header">
                      <img src="img/university.png" alt="NO IMAGE AVAILABLE" />
                    </div>
                    <h1 class="card-title title montserrat-heading">${value.university}</h1>
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
         


document.querySelectorAll('.card').forEach(card => {
  let longPressTimer;
  let moved = false;

    card.addEventListener('click', function () {
    const title = card.getAttribute('data-category');
    if (title) {
      window.location.href = `./DescriptionPage/index.html?title=${encodeURIComponent(title)}`;
    }
  });

  card.addEventListener('touchstart', function () {
    moved = false;

    const category = card.getAttribute('data-category');
    const colors = {
    "Université d’Oran 2": "#002147",
    "Université de M’Sila": "#002147",
    "Université de Blida 2": "#002147",
    "Université d’El Oued": "#002147",
    "Université de Sétif 1": "#002147"
    };

    longPressTimer = setTimeout(() => {
      card.style.setProperty('--category-color', colors[category] || '#000');
      card.classList.add('active');
            if (!moved) {
              const title = card.getAttribute('data-category');
              window.location.href = `./DescriptionPage/index.html?title=${encodeURIComponent(title)}`;
            }
    }, 600);
  }, { passive: true });

  card.addEventListener('touchend', function () {
    clearTimeout(longPressTimer); // Cancel if released early
  });

  card.addEventListener('touchmove', function () {
    moved = true;
    clearTimeout(longPressTimer); // Cancel if finger moves
  });
});

 