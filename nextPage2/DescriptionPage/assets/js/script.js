import {Formations} from '../../../../StartUpData.js';


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
const formationTitle = urlParams.get('title');

const formation = Formations.find(s => s.title === formationTitle);

if (formation) {
  document.querySelector('.startup-title').textContent = formation.title;
  document.querySelector('.startup-details').textContent = formation.details;
  document.querySelector('.startup-description').innerHTML=`                        
  <strong>${formation.description}</strong>
  `
  document.querySelector('.startup-founded').innerHTML=`                        
                        <ion-icon name="link-outline" class="founded-icon"></ion-icon>
                        <strong>Web link:</strong><a href="${formation.webLink}">Click Here</a>
                        `
 
} else {
  document.body.innerHTML = "<p>Startup not found.</p>";
}