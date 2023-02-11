changeThemeBtn = document.querySelector('.switch-checkbox');
bodyTheme = document.querySelector('body');
themeDarkEl = document.querySelector('.theme__dark');
themeLightEl = document.querySelector('.theme__light');
changeThemeBtn.addEventListener('click', changeTheme);

function changeTheme() {
  bodyTheme.classList.toggle('darkMode');
  themeDarkEl.classList.toggle('opacity');
  themeLightEl.classList.toggle('opacity');
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
