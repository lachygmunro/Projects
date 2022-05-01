//mobile burger menu
const burgerMenu = document.querySelector('#mob-burger');
const navbarMenu = document.querySelector('#nav-links');

burgerMenu.addEventListener('click', () => {
  navbarMenu.classList.toggle('is-active');
});

//tabbed content - product info/delivery
const tabs = document.querySelectorAll('.tabs li');
const tabContentBoxes = document.querySelectorAll('#tab-content > div');

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    tabs.forEach(item => item.classList.remove('is-active'))
    tab.classList.add('is-active');

    const target = tab.dataset.target;
    tabContentBoxes.forEach(box => {
      if(box.getAttribute('id') === target) {
        box.classList.remove('is-hidden');
      } else {
        box.classList.add('is-hidden');
      }
    })
  })
})

//modal

const subscribeButton = document.querySelector('#subscribe');
const modalBg = document.querySelector('.modal-background');
const modal = document.querySelector('.modal');

subscribeButton.addEventListener('click', () => {
  modal.classList.add('is-active');
})

modalBg.addEventListener('click', () => {
  modal.classList.remove('is-active');
})
