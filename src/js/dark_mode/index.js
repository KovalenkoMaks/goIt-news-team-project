const changeThemeBtn = document.querySelector('.switch-checkbox');
const bodyTheme = document.querySelector('body');
const themeDarkEl = document.querySelector('.theme__dark');
const themeLightEl = document.querySelector('.theme__light');

changeThemeBtn.addEventListener('click', changeTheme);

function changeTheme() {
  bodyTheme.classList.toggle('darkMode');
  themeDarkEl.classList.toggle('opacityForDark');
  themeLightEl.classList.toggle('opacityForDark');
  // localStorage.setItem('theme', 'dark');
  if (localStorage.getItem('theme') !== 'dark') {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.removeItem('theme');
  }
  // addDarkClassToHTML();
}

function addDarkClassToHTML() {
  try {
    if (localStorage.getItem('theme') === 'dark') {
      bodyTheme.classList.add('darkMode');
      changeThemeBtn.checked = true;
    }
    // else {
    //   bodyTheme.classList.remove('theme-dark');
    // }
  } catch (err) {}
}

addDarkClassToHTML();
