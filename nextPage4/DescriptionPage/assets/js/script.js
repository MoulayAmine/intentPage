import { Decree_1275_StartUps } from '../../../../StartUpData.js';

document.addEventListener('DOMContentLoaded', () => {
  const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
      nav = document.getElementById(navId);

    if (toggle && nav) {
      toggle.addEventListener('click', () => {
        nav.classList.toggle('show');
      });
    }
  };

  showMenu('nav-toggle', 'nav-menu');

  const urlParams = new URLSearchParams(window.location.search);
  const startupTitle = urlParams.get('title');

  const startup = Decree_1275_StartUps.find((s) => s.university === startupTitle);

  if (startup) {
    document.querySelector('.startup-title').textContent = startup.university;
    document.querySelector('.startup-description').innerHTML = startup.description;

    if (startup.StartUps.length > 0) {
      startup.StartUps.forEach((StartUp) => {
        document.querySelector('.startups-container').innerHTML += `
        <div class="startup-wrapper">
          <div class="StartUp-container">
            <p class="startup-name"><strong>${StartUp.name}</strong></p>
          </div>
          <h5 class="startup-founders">${StartUp.details}</h5>
        </div>
`;
      });
    } else {
      document.querySelector('.startups-container').innerHTML += `
        <p class="startup-founded">
          <strong>nothing mentioned.</strong>
        </p>`;
    }
  } else {
    document.body.innerHTML = '<p>Startup not found.</p>';
  }

  const navIcon = document.querySelector('.nav__icon');
  if (navIcon) {
    navIcon.addEventListener('touchstart', function () {
      window.history.back();
    });

    navIcon.addEventListener('click', function () {
      window.history.back();
    });
  }
});
