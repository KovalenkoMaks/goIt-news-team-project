changeThemeBtn = document.querySelector('.switch-checkbox');
bodyTheme = document.querySelector('body');

changeThemeBtn.addEventListener('click', changeTheme);

function changeTheme() {
  if (localStorage.getItem('theme') === 'dark') {
    localStorage.removeItem('theme');
  } else {
    localStorage.setItem('theme', 'dark');
  }
  addDarkClassToHTML();
}

function addDarkClassToHTML() {
  try {
    if (localStorage.getItem('theme') === 'dark') {
      bodyTheme.classList.add('theme-dark');
      changeThemeBtn.checked = true;
    } else {
      bodyTheme.classList.remove('theme-dark');
    }
  } catch (err) {}
}

addDarkClassToHTML();
