const left = document.querySelector('.left');
const center = document.querySelector('.center');
const right = document.querySelector('.right');
const decree = document.querySelector('.decree');
const container = document.querySelector('.container');


document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('click', function (e) {
    e.preventDefault() // Stop immediate navigation

    const ripple = document.createElement('span');
    ripple.classList.add('ripple');

    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    ripple.style.width = ripple.style.height = size + 'px';

    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';

    this.appendChild(ripple);

    const targetURL = this.getAttribute('href');

    setTimeout(() => {
      ripple.remove()
      if (targetURL && targetURL !== '#') {
        window.location.href = targetURL;
      }
    }, 600) // Delay matches ripple animation duration
  })
})

left.addEventListener('mouseenter', () => {
  container.classList.add('hover-left');
  container.classList.remove('hover-center', 'hover-right', 'hover-decree');
})

center.addEventListener('mouseenter', () => {
  container.classList.add('hover-center');
  container.classList.remove('hover-left', 'hover-right', 'hover-decree');
})

right.addEventListener('mouseenter', () => {
  container.classList.add('hover-right');
  container.classList.remove('hover-left', 'hover-center', 'hover-decree');
})

// Reset when mouse leaves the whole container
container.addEventListener('mouseleave', () => {
  container.classList.remove('hover-left', 'hover-center', 'hover-right', 'hover-decree');
});


left.addEventListener('touchstart', () => {
  container.classList.remove('hover-center', 'hover-right', 'hover-decree'); // remove others
  container.classList.add('hover-left');
}, { passive: true });

center.addEventListener('touchstart', () => {
  container.classList.remove('hover-left', 'hover-right', 'hover-decree');
  container.classList.add('hover-center');
}, { passive: true });

right.addEventListener('touchstart', () => {
  container.classList.remove('hover-left', 'hover-center', 'hover-decree');
  container.classList.add('hover-right');
}, { passive: true });

decree.addEventListener('mouseenter', () => {
  container.classList.add('hover-decree');
  container.classList.remove('hover-left', 'hover-center', 'hover-right');
});

decree.addEventListener('touchstart', () => {
  container.classList.remove('hover-left', 'hover-center', 'hover-right');
  container.classList.add('hover-decree');
}, { passive: true });