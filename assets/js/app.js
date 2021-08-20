'use strict';

document.getElementById('footer_year').innerHTML = new Date().getFullYear();

// Toggling the Side menu
const menuToggleBtn = document.querySelector('.ToggleBtn');
const sideBar = document.querySelector('.SidebarWidth');
const sideMenu = document.querySelector('.SidebarWidth .sidebar');

menuToggleBtn.addEventListener('click', () => {
  sideBar.classList.toggle('SideberRemove');
});

sideMenu.addEventListener('mouseenter', () => {
  sideBar.classList.remove('SideberRemove')
});
sideMenu.addEventListener('mouseleave', () => {
  sideBar.classList.add('SideberRemove')
});


// Treeview Editing Detail Modal
function treeeditingModal() {
  const overlay = document.querySelector('#setting-overlay');
  const modal = document.querySelector('#settings-modal');

  overlay.style.display = 'block';
  modal.style.display = 'flex';
};
function closeTreeeditingModal() {
  const overlay = document.querySelector('#setting-overlay');
  const modal = document.querySelector('#settings-modal');

  overlay.style.display = 'none';
  modal.style.display = 'none';
};
