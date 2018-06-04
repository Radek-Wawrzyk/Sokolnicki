const navigation = () => {

  const navMenu = document.querySelector(".navigation-right");
  const navBtn = document.querySelector(".navigation-button");
  const navLink = document.querySelectorAll(".navigation-menu li a");

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
}

//Function inits
navigation();