import getNews from 'services/getNews';

export const setNewsAction = list => {
  return {
    type: 'news/setNews',
    payload: list,
  };
};

export const loadNews = () => async dispatch => {
  try {
    const response = await getNews();

    dispatch(setNewsAction(response.data.articles));
  } catch (e) {
    console.log(e, 'error occured');
  }
};
