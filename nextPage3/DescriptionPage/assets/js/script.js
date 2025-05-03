import {StartUp_Examples} from '../../../../StartUpData.js';

const showMenu = (toggleId,navId) =>{
  const toggle = document.getElementById(toggleId),
  nav = document.getElementById(navId)

  if(toggle && nav){
      toggle.addEventListener('click', () =>{
          nav.classList.toggle('show')
      })
  }
}

showMenu('nav-toggle','nav-menu');

const urlParams = new URLSearchParams(window.location.search);
const startupTitle = urlParams.get('title');

const startup = StartUp_Examples.find(s => s.title === startupTitle);

if (startup) {
  document.querySelector('.startup-title').textContent = startup.title;
  document.querySelector('.startup-details').textContent = startup.details;
  document.querySelector('.startup-description').innerHTML=`                        
  <strong>${startup.description}</strong>
  `
  document.querySelector('.startup-founded').innerHTML=`                        
  <ion-icon name="calendar-outline" class="founded-icon"></ion-icon>
  <strong>Founded:</strong>${startup.founded}
  `
  if(startup.founders.length > 0){
    startup.founders.forEach(founder => {
      document.querySelector('.startup-founders-container').innerHTML += `  <div class="founder-container">
                              <img src="assets/img/${founder}.jpg" alt="${founder}" class="founder-image">
                              <p class="startup-founders">${founder}</p>
                          </div>`
    })
  }else{
    document.querySelector('.startup-founders-container').innerHTML += `<p class="startup-founded">
                        <strong>Founders not mentioned.</strong>
                      </p>`
  }

 
} else {
  document.body.innerHTML = "<p>Startup not found.</p>";
}

document.querySelector('.nav__icon').addEventListener('touchstart', function () {
  window.history.back();
});

document.querySelector('.nav__icon').addEventListener('click', function () {
  window.history.back();
});