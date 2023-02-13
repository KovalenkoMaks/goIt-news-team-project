import { inputDateValue } from '../calendar';
const KEY = 'api-key=eQ8t8FWqeAGnKDTtIFrHmgZCflFrUTcV';
const BASE_URL = 'https://api.nytimes.com/svc';
const MOST_POPULAR_NEWS = `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?${KEY}`;

async function getPopularArticle() {
  const articleFetch = await fetch(MOST_POPULAR_NEWS);
  const articles = await articleFetch.json();
  let { results } = articles;
  // console.log(results);
  return results;
}

async function getCategoryList() {
  const categoryList = await fetch(
    `${BASE_URL}//news/v3/content/section-list.json?${KEY}`
  );
  const categories = await categoryList.json();
  let { results } = categories;

  // console.log(results);

  return results;
}

async function getSearchArticle(value) {
  console.log(inputDateValue);
  if (inputDateValue === null) {
    let date = inputDateValue.replace('/', '').replace('/', '');
    let begin_date = date;
    let end_date = date;
    const articleFetch = await fetch(
      `${BASE_URL}/search/v2/articlesearch.json?q=${value}&${KEY}&begin_date=20120101&end_date=20121231`
    );
    const articles = await articleFetch.json();
    let { response } = articles;
    let { docs } = response;
    //   console.log(docs);

    return docs;
  } else {
    let date = inputDateValue.replace('/', '').replace('/', '');
    let begin_date = date;
    let end_date = date;
    const articleFetch = await fetch(
      `${BASE_URL}/search/v2/articlesearch.json?q=${value}&${KEY}&begin_date=${begin_date}&end_date=${end_date}`
    );
    const articles = await articleFetch.json();
    let { response } = articles;
    let { docs } = response;
    //   console.log(docs);

    return docs;
  }
}

async function getArticleByCategory(value) {
  // console.log(value);
  const articleFetch = await fetch(
    `${BASE_URL}/news/v3/content/all/${value}.json?${KEY}&limit=8`
  );
  const articles = await articleFetch.json();
  let { results } = articles;
  // console.log(results);

  return results;
}
// getArticleByCategory('automobiles');

export {
  getPopularArticle,
  getCategoryList,
  getSearchArticle,
  getArticleByCategory,
};
