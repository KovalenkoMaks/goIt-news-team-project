const KEY = 'api-key=eQ8t8FWqeAGnKDTtIFrHmgZCflFrUTcV';
const BASE_URL = 'https://api.nytimes.com/svc';
const MOST_POPULAR_NEWS = `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?${KEY}`;

async function getPopularArticle() {
  const articleFetch = await fetch(MOST_POPULAR_NEWS);
  const articles = await articleFetch.json();
  let { results } = articles;
  console.log(results);
  return results;
}

async function getCategoryList() {
  const categoryList = await fetch(
    `${BASE_URL}//news/v3/content/section-list.json?${KEY}`
  );
  const categories = await categoryList.json();
  let { results } = categories;

  //   console.log(results);
  return results;
}

async function getSearchArticle() {
  const articleFetch = await fetch(
    `${BASE_URL}/search/v2/articlesearch.json?q=automobiles&${KEY}`
  );
  const articles = await articleFetch.json();
  let { response } = articles;
  let { docs } = response;
  //   console.log(docs);

  return docs;
}

async function getArticleByCategory() {
  const articleFetch = await fetch(
    `${BASE_URL}/news/v3/content/inyt/automobiles.json?${KEY}`
  );
  const articles = await articleFetch.json();
  let { results } = articles;
  //   console.log(results);

  return results;
}

export {
  getPopularArticle,
  getCategoryList,
  getSearchArticle,
  getArticleByCategory,
};
