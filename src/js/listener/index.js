import { newsList } from '../refs';
import uniq from 'lodash.uniq';

newsList.addEventListener('click', btnAddToFavorite);
let newLocalStorage = [];

function isLocalEmpty() {
  if (JSON.parse(localStorage.getItem('newsSection')) === null) {
    newLocalStorage = [];
    return;
  }
  newLocalStorage = JSON.parse(localStorage.getItem('newsSection'));
}
isLocalEmpty();

function btnAddToFavorite(event) {
  const btn = event.target.closest(`.item-news__add-to-favorite`);
  if (!btn) return;
  let articleId = +btn.parentNode.parentNode.id;
  if (!btn.classList.contains('hidden-span')) {
    btn.classList.add('hidden-span');
    addToFavoriteLocal(btn);
    return;
  }
  btn.classList.remove('hidden-span');
  for (let i = 0; i < newLocalStorage.length; i += 1) {
    if (+newLocalStorage[i].id === articleId) {
      newLocalStorage.splice(i, 1);
    }
  }
  localStorage.setItem(`newsSection`, JSON.stringify(newLocalStorage));
}

function addToFavoriteLocal(btn) {
  const newsSection = {
    id: btn.parentNode.parentNode.id,
    img: btn.parentNode.childNodes[1].attributes.src.nodeValue,
    category: btn.parentNode.childNodes[3].innerText,
    title: btn.parentNode.parentNode.childNodes[3].children[0].innerText,
    description: btn.parentNode.parentNode.childNodes[3].children[1].innerText,
    date: btn.parentNode.parentNode.lastElementChild.children[0].innerText,
    link: btn.parentNode.parentNode.lastElementChild.children[1].attributes[2]
      .value,
    favorite: 'true',
    uri: btn.parentNode.nextElementSibling.nextElementSibling.lastElementChild
      .textContent,
  };
  for (let i = 0; i < newLocalStorage.length; i += 1) {
    if (newLocalStorage[i].uri === newsSection.uri) return;
  }

  newLocalStorage.push(newsSection);
  localStorage.setItem(`newsSection`, JSON.stringify(newLocalStorage));
}

// const test = [{ 1: 1 }, { 2: 2 }, { 1: 1 }];

// function removeDuplicates(arr) {
//   const result = [];
//   const duplicatesIndices = [];

//   // Перебираем каждый элемент в исходном массиве
//   arr.forEach((current, index) => {
//     if (duplicatesIndices.includes(index)) return;

//     result.push(current);

//     // Сравниваем каждый элемент в массиве после текущего
//     for (
//       let comparisonIndex = index + 1;
//       comparisonIndex < arr.length;
//       comparisonIndex++
//     ) {
//       const comparison = arr[comparisonIndex];
//       const currentKeys = Object.keys(current);
//       const comparisonKeys = Object.keys(comparison);

//       // Проверяем длину массивов
//       if (currentKeys.length !== comparisonKeys.length) continue;

//       // Проверяем значение ключей
//       const currentKeysString = currentKeys.sort().join('').toLowerCase();
//       const comparisonKeysString = comparisonKeys.sort().join('').toLowerCase();
//       if (currentKeysString !== comparisonKeysString) continue;

//       // Проверяем индексы ключей
//       let valuesEqual = true;
//       for (let i = 0; i < currentKeys.length; i++) {
//         const key = currentKeys[i];
//         if (current[key] !== comparison[key]) {
//           valuesEqual = false;
//           break;
//         }
//       }
//       if (valuesEqual) duplicatesIndices.push(comparisonIndex);
//     } // Конец цикла
//   });
//   return result;
// }
// console.log(test);
// console.log(removeDuplicates(test));
