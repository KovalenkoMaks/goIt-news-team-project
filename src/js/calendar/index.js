const daysTag = document.querySelector('.days'),
  currentDate = document.querySelector('.current-date'),
  prevNextIcon = document.querySelectorAll('.calendar-icons span');

// getting new date, current year and month
let date = new Date(),
  currDay = date.getDate(),
  currMonth = date.getMonth(),
  currYear = date.getFullYear();
// function showCurrentDate() {
//   let value1 = currYear + '-' + (currMonth + 1) + '-' + currDay;
//   document.getElementById('input-picker').value = value1;
// }

//активні кнопки та модульний календар
(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('body'),
    modal: document.querySelector('[data-modal]'),
    input: document.querySelector('.calendar-input'),
    arrow: document.querySelector('.calendar__button-arrow'),
    calendarBtn: document.querySelector('.calendar__button-calendar'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', hideModals);
  //   function cleanInput() {
  //     refs.input.classList.remove('isActive');
  //   }
  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    refs.input.classList.toggle('isActive');
    refs.arrow.classList.toggle('switched');
    refs.calendarBtn.classList.toggle('switchedColor');
    // showCurrentDate();
  }

  function hideModals(evt) {
    if (evt.target.closest('.calendar-form')) {
      return;
    }
    if (refs.input.classList.contains('isActive')) {
      toggleModal();
    }
  }
})();

// storing full name of all months in array
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const renderCalendar = number => {
  let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(), // getting first day of month
    lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(), // getting last date of month
    lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(), // getting last day of month
    lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate(); // getting last date of previous month
  let liTag = '';
  for (let i = firstDayofMonth; i > 0; i--) {
    // creating li of previous month last days
    liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
  }
  for (let i = 1; i <= lastDateofMonth; i++) {
    // creating li of all days of current month
    // adding active class to li if the current day, month, and year matched
    let isToday =
      i === date.getDate() &&
      currMonth === new Date().getMonth() &&
      currYear === new Date().getFullYear();
    //   ? 'active'
    //   : '';
    liTag += `<li class="${isToday}">${i}</li>`;
    //console.log(isToday);
  }
  for (let i = lastDayofMonth; i < 6; i++) {
    // creating li of next month first days
    liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`;
  }
  currentDate.innerText = `${months[currMonth]} ${currYear}`; // passing current mon and yr as currentDate text
  daysTag.innerHTML = liTag;
  // console.log(liTag);
  const dayChange = document.querySelector('.days');
  // function addChangingDayListener() {

  dayChange.addEventListener('click', evt => {
    //evt.preventDefault();
    // evt.target.classList.toggle('active');

    //     function hideButton() {
    //       if (showButton() && evt.target.contains('active')) {
    //         // evt.target.classList.remove('active');
    //       }
    //     }
    [...evt.currentTarget.children].forEach(item => {
      item.classList.remove('active');
      //console.log(item.textContent);
    });

    evt.target.classList.add('active');
    let newValueDay = evt.target.textContent;
    if (evt.target.textContent.length > 10) {
      return;
    }

    document.getElementById('input-picker').value =
      newValueDay.padStart(2, '0') + '/' + (currMonth + 1) + '/' + currYear;

    localStorage.setItem('VALUE', JSON.stringify(newValueDay));
  });
  //}
};

renderCalendar();
let findUl = document.querySelector('.days');

prevNextIcon.forEach(icon => {
  // getting prev and next icons
  icon.addEventListener('click', () => {
    // adding click event on both icons
    // if clicked icon is previous icon then decrement current month by 1 else increment it by 1
    currMonth = icon.id === 'prev' ? currMonth - 1 : currMonth + 1;
    if (currMonth < 0 || currMonth > 11) {
      // if current month is less than 0 or greater than 11
      // creating a new date of current year & month and pass it as date value
      date = new Date(currYear, currMonth, new Date().getDate());
      currYear = date.getFullYear(); // updating current year with new date year
      currMonth = date.getMonth(); // updating current month with new date month
    } else {
      date = new Date(); // pass the current date as date value
    }
    renderCalendar(); // calling renderCalendar function
    let test = JSON.parse(localStorage.getItem('VALUE'));
    let reachUl = daysTag.childNodes;
    //console.log(reachUl);
    reachUl.forEach(elem => {
      if (elem.textContent === test) {
        console.log(elem.textContent);
        elem.classList.add('active');
      }
    });
  });
});
