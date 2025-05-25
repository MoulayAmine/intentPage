import {StartUp_Examples} from '../StartUpData.js';


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
    document.querySelector('.cards-grid').innerHTML += `<div class="card-nxt" data-category="${value.category}" data-title="${value.title}">
            
            <div class="card-header-nxt animated-bg header hidden-text" style="visibility: hidden;">
             <img src="img/${value.title}.png" alt="NO IMAGE AVAILABLE" />
            </div>
            <div class="card-content">
                <div class="hidden-text" style="visibility: hidden">
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
  
    document.querySelectorAll(".card-nxt").forEach((card) => {
      const animated_bgs = card.querySelectorAll('.animated-bg');
      const animated_bg_texts = card.querySelectorAll('.animated-bg-text');
      const hiddenText = card.querySelectorAll('.hidden-text');
      const skeleton = card.querySelector('.animated-skeleton');
      setTimeout(() => {
        animated_bgs.forEach(bg => bg.classList.remove('animated-bg'));
        animated_bg_texts.forEach(bg => bg.classList.remove('animated-bg-text'));
        if (skeleton) skeleton.remove();
        hiddenText.forEach(HT=>{
          if (HT) HT.style.visibility = 'visible';
        });
      }, 2500);
    });

    document.querySelectorAll('.card-nxt').forEach(card => {
      card.addEventListener('touchstart', function () {
        
        
        
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
      
        requestAnimationFrame(() => {
          setTimeout(() => {
          }, 300);
        });
  
      }, { passive: false }); 
    });

    document.querySelectorAll('.card-nxt').forEach(card => {
      card.addEventListener('click', () => {
        const title = card.getAttribute('data-title');
        window.location.href = `./DescriptionPage/index.html?title=${encodeURIComponent(title)}`;
      });
    });
    
    document.querySelectorAll('.card-nxt').forEach(card => {
      let pressTimer;
      let moved = false;

      card.addEventListener('touchstart', function (e) {
        moved = false;

        // Start long press timer
        pressTimer = setTimeout(() => {
          if (!moved) {
            const title = card.getAttribute('data-title');
            window.location.href = `./DescriptionPage/index.html?title=${encodeURIComponent(title)}`;
          }
        }, 600);
      }, { passive: true });

      card.addEventListener('touchmove', function () {
        // If the finger moves, cancel the long press
        moved = true;
        clearTimeout(pressTimer);
      }, { passive: true });

      card.addEventListener('touchend', function () {
        clearTimeout(pressTimer);
      });
    });
  }


document.querySelectorAll('.card').forEach(card => {
  let longPressTimer;

  card.addEventListener('touchstart', function () {
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
      'Support aux Startups': '#005B5D',
      'Santé et bien être': '#E63946'
    };

    longPressTimer = setTimeout(() => {
      card.style.setProperty('--category-color', colors[category] || '#000');
      card.classList.add('active');
      loadStartupsByCategory(category);
    }, 600);
  }, { passive: true });

  card.addEventListener('touchend', function () {
    clearTimeout(longPressTimer); // Cancel if released early
  });

  card.addEventListener('touchmove', function () {
    clearTimeout(longPressTimer); // Cancel if finger moves
  });
});

 