// selecting required element
const listElement = document.querySelector('.pagination__list');
let totalPages = 20;
let page = 5;

// calling function with passing parameters and adding inside element which is ul tag
listElement.innerHTML = createPagination(totalPages, page);
function createPagination(totalPages, page) {
  let liTag = '';
  let active;
  let beforePage = page - 1;
  let afterPage = page + 1;
  if (page > 1) {
    // show the next button if the page value is greater than 1
    liTag += `<li class="pagination__item" onclick="createPagination(totalPages, ${
      page - 1
    })">
                  <a class="pagination__link pagination__pointer-prev">
                    // <svg width="24" height="24">
                    //     <use href="./images/sprite.svg#arrow-down"></use>
                    // </svg>
                    Prev
                  </a>
              </li>`;
  }

  if (page > 2) {
    // if page value is less than 2 then add 1 after the previous button
    liTag += `<li class="pagination__item pagination__first-numb" onclick="createPagination(totalPages, 1)">
                <a class="pagination__link">
                    1
                </a>
              </li>`;
    if (page > 3) {
      //if page value is greater than 3 then add this (...) after the first li or page
      liTag += `<li class="pagination__item pagination__dots">
                <a class="pagination__link">
                    ...
                </a>
            </li>`;
    }
  }

  // how many pages or li show before the current li
  if (page == totalPages) {
    beforePage = beforePage - 2;
  } else if (page == totalPages - 1) {
    beforePage = beforePage - 1;
  }
  // how many pages or li show after the current li
  if (page == 1) {
    afterPage = afterPage + 2;
  } else if (page == 2) {
    afterPage = afterPage + 1;
  }

  for (let plength = beforePage; plength <= afterPage; plength++) {
    if (plength > totalPages) {
      // if plength is greater than totalPage length then continue
      continue;
    }
    if (plength == 0) {
      //if plength is 0 than add +1 in plength value
      plength = plength + 1;
    }
    if (page == plength) {
      //if page is equal to plength than assign active string in the active variable
      active = 'active';
    } else {
      //else leave empty to the active variable
      active = '';
    }
    liTag += `<li class="pagination__item numb ${active}" onclick="createPagination(totalPages, ${plength})"><a>${plength}</a></li>`;
  }

  if (page < totalPages - 1) {
    //if page value is less than totalPage value by -1 then show the last li or page
    if (page < totalPages - 2) {
      //if page value is less than totalPage value by -2 then add this (...) before the last li or page
      liTag += `<li class="pagination__item pagination__dots">
                  <a class="pagination__link">
                    ...
                  </a>
                </li>`;
    }
    liTag += `<li class="pagination__item pagination__last-numb" onclick="createPagination(totalPages, ${totalPages})"><a>${totalPages}</a></li>`;
  }

  if (page < totalPages) {
    //show the next button if the page value is less than totalPage(20)
    liTag += `<li class="pagination__item pagination__pointer-next" onclick="createPagination(totalPages, ${
      page + 1
    })"><a>Next <i class="fas fa-angle-right"></i></a></li>`;
  }
  listElement.innerHTML = liTag; //add li tag inside ul tag
  return liTag; //reurn the li tag
}
