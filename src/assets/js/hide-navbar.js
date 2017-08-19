export function HideNavbar() {
  let navBar = document.querySelector('.mobile-nav')
  if(navBar) {
    navBar.style.visibility = 'hidden'
  }
}