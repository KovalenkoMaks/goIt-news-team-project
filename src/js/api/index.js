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
let sumPage;
async function getSearchArticle(value, page) {
  const articleFetch = await fetch(
    // https://api.nytimes.com/svc/news/v3/content/all/books.json?api-key=eQ8t8FWqeAGnKDTtIFrHmgZCflFrUTcV&limit=8&offset=40
    // https://api.nytimes.com/svc/news/v3/content/all/admin.json?api-key=SVYGfSzYyEfqvl2Rz9D9zXBCipJV7rQX&limit=10
    // ` ${BASE_URL}news/v3/content/all/${value}.json?${KEY}&limit=8`
    //  https://api.nytimes.com/svc/search/v2/articlesearch.json?q=car&api-key=eQ8t8FWqeAGnKDTtIFrHmgZCflFrUTcV&page=1
    `${BASE_URL}/search/v2/articlesearch.json?q=${value}&${KEY}&page=${page}`
  );
  const articles = await articleFetch.json();

  let { response } = articles;
  if (response.meta.hits > 1000) {
    sumPage = 1000;
  } else {
    sumPage = response.meta.hits;
  }
  //   console.log(response.meta.hits);
  let { docs } = response;
  //   console.log(docs);

  return docs;
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
  sumPage,
};
