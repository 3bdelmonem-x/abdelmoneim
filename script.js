
// circle skill //////////////////////////////////

const circles = document.querySelectorAll('.circle');
circles.forEach(elem => {
  var dots = elem.getAttribute("data-dots");
  var marked = elem.getAttribute("data-percent");
  var percent = Math.floor(dots * marked / 100);
  var points = "";
  var rotate = 360 / dots;

  for(let i=0; i < dots; i++){
    points += `<div class="points" style="--i:${i}; --rot: ${rotate}deg"></div>`;
  }
  elem.innerHTML = points;
  const pointsMarked = elem.querySelectorAll('.points');
  for(let i=0; i<percent; i++){
    pointsMarked[i].classList.add('marked')
  }
  });

//
/*===== ============ scroll sections avtive link ===================*/
let sections = document.querySelectorAll('section');
let navLink = document.querySelectorAll('header nav a');

function activeMenu(){
    let len =sections.length;
    while(--len && window.scrollY+97< sections[len].offsetTop ){}
    navLink.forEach(sec => sec.classList.remove("active"));
    navLink[len].classList.add("active");
}

/*===== ============ sticky mavbar ===================*/

let header =document.querySelector('header');

header.classList.toggle('sticky', window.scrollY > 100);


/*===== ============ toggle icon navbar ===================*/

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick =()=>{
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('open')
}
activeMenu();
window.addEventListener("scroll",activeMenu)
/////////////////
window.onscroll =()=>{
    menuIcon.classList.remove('bx-x')
    navbar.classList.remove('open')
}
//////////////////////////////////////////

ScrollReveal({
    // reset: true,
    distance:'80px',
    duration:2000,
    delay:200
    });

    ScrollReveal().reveal('.home-content,.heading', { origin: 'top' });
    ScrollReveal().reveal('.home-img,.services-container, .skills-main, .contact form', { origin: 'bottom' });
    ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
    ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });


  