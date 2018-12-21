export default function menuMobile() {
  let menu = document.querySelector("#menu");
  let btn = document.querySelector("#open-menu");
  function toggleMenu () {
    console.log(menu)
    menu.classList.toggle('active')    
  }
  btn.addEventListener("click", toggleMenu)
}