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
  const navLink = document.querySelectorAll(".navigation-menu li a");
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

  for (let i = 0; navLink.length > i; i++) {
    navLink[i].addEventListener("click", () => {
      close();
    });
  }

  document.onkeydown = (e) => {
    e = e || window.event;
    if (e.keyCode == 27) {
      close();
    }
  };
};

//Animate element when show

const animation = () => {

  const offset = (element) => {
    element = element.getBoundingClientRect();
    return {
      top: element.top + window.scrollY
    }
  };
  
  const animate_element = document.querySelectorAll(".animate");

  const scroll_function = () => {
    let window_height = window.scrollY;
  
    for (let i=0;i<animate_element.length; i++) {
  
      let scroll_position = offset(animate_element[i]).top - 600;
      let animation_duration = animate_element[i].getAttribute("data-animation-duration");
      let animation_type = animate_element[i].getAttribute("data-animation-type");
  
      if (window_height > scroll_position ) {
        animate_element[i].classList.add("animation-init");
        animate_element[i].style.transitionDuration = ""+animation_duration+"s",
        animate_element[i].style.transitionTimingFunction = ""+animation_type+"";
      }
      else {
        
      }
    }
  };
  
  window.addEventListener("scroll", scroll_function);
}


//Function inits
navigation();
animation();