import {StatUp_Ideas} from '../../../../StartUpData.js';


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

const startup = StatUp_Ideas.find(s => s.title === startupTitle);

if (startup) {
  document.querySelector('.startup-title').textContent = startup.title;
  document.querySelector('.startup-details').textContent = startup.details;
  document.querySelector('.startup-founded').innerHTML=`                        
  <strong>${startup.description}</strong>
  `

 
} else {
  document.body.innerHTML = "<p>Startup not found.</p>";
}