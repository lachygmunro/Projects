//mobile menu
const burgerMenu = document.querySelector('#mob-burger')
const navbarMenu = document.querySelector('#nav-links')

burgerMenu.addEventListener('click', () => {
  navbarMenu.classList.toggle('is-active')
})
