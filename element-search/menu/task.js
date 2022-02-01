const menuLink = document.querySelectorAll(".menu__link");

for (let i = 0; i < menuLink.length; i++) {
  menuLink[i].onclick = function (e) {
    if (menuLink[i].closest(".menu__item").querySelector('.menu_sub')) {
      e.preventDefault();
      let menuOpen = menuLink[i].closest(".menu__item").querySelector('.menu_sub').classList.add('menu_active');
    }
  }
}
