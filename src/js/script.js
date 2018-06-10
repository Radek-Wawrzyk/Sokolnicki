//Preloader

window.addEventListener("load", () => {
  const preloader = document.querySelector("#preloader");
  const body = document.querySelector("body");

  preloader.classList.add("loaded");
  body.classList.add("loaded");
  preloader.addEventListener("transitionend", () => {
    body.removeChild(preloader);
  });
});

//Navitation

const navigation = () => {

  const navMenu = document.querySelector(".navigation-right");
  const navBtn = document.querySelector(".navigation-button");
  const navLink = document.querySelectorAll(".navigation-menu-link");
  const logoLink = document.querySelector(".navigation-logo a");

  navBtn.addEventListener("click", () => {
    navBtn.classList.toggle("active");
    navMenu.classList.toggle("active");

    let aria = navBtn.getAttribute("aria-expanded");
    if (aria == "false") {
      aria = "true"
    } else {
      aria = "false";
    }
    navBtn.setAttribute("aria-expanded", aria);
  });

  logoLink.addEventListener("click", () => {
    if (navBtn.classList.contains("active")) {
      close();
    }
  });

  const close = () => {
    navBtn.classList.remove("active");
    navBtn.setAttribute("aria-expanded", false);
    navMenu.classList.remove("active");
  };

  document.addEventListener('click', () => {
    if (!event.target.classList.contains("navigation-menu-link")) {
      return;
    } 

    event.target.classList.add('active');
    
    for (let i = 0; i < navLink.length; i++) {
      if (navLink[i] === event.target) {
        continue;
      }
      if (navBtn.classList.contains("active")) {
        close();
      }   
      navLink[i].classList.remove('active');
    }
  }, false);

  document.onkeydown = (e) => {
    e = e || window.event;
    if (e.keyCode == 27) {
      close();
    }
  };

  function scrollIt(element) {  
    window.scrollTo({
      'behavior': 'smooth',
      'left': 0,
      'top': element.offsetTop
    });
  };
  
  const sections = document.querySelectorAll('.section');
  const header = document.querySelector('.header');
  
  logoLink.addEventListener('click', (e) => {
    e.preventDefault();
    scrollIt(header);
  });

  navLink[0].addEventListener('click', (e) => {
    e.preventDefault();
    scrollIt(sections[0]);
  });
  
  navLink[1].addEventListener('click', (e) => {
    e.preventDefault();
    scrollIt(sections[1]);
  });
  
  navLink[2].addEventListener('click', (e) => {
    e.preventDefault();
    scrollIt(sections[3]);
  });
  
  navLink[3].addEventListener('click', (e) => {
    e.preventDefault();
    scrollIt(sections[6]);
  });
};

//Animate element when show

const animation = () => {

  const offset = (element) => {
    element = element.getBoundingClientRect();
    return {
      top: element.top + window.scrollY
    }
  };
  
  const animateElement = document.querySelectorAll(".animate");

  const scrollFunction = () => {
    let windowHeight = window.scrollY;
  
    for (let i = 0; i < animateElement.length; i++) {
  
      let scrollPosition = offset(animateElement[i]).top - 700;
      let animationDuration = animateElement[i].getAttribute("data-animation-duration");
      let animationType = animateElement[i].getAttribute("data-animation-type");
  
      if (windowHeight > scrollPosition ) {
        animateElement[i].classList.add("animation-init");
        animateElement[i].style.transitionDuration = ""+animationDuration+"s",
        animateElement[i].style.transitionTimingFunction = ""+animationType+"";
      }
      else {
        
      }
    }
  };
  
  window.addEventListener("scroll", scrollFunction);
}


//Function inits
navigation();
animation();