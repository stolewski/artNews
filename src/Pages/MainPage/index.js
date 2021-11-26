import React, { useState, useEffect } from 'react';
import routeMain from './routes';
import PageTitle from 'components/PageTitle';
import News from 'components/News';
import getNews from 'services/getNews';
import Loader from 'utils/Loader';

const MainPage = () => {
  const [newsList, setNewsList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getNews().then(response => {
      setNewsList(response.data.articles);
      setLoading(false);
    });
  }, []);

  return (
    <section className='mainPage'>
      <PageTitle
        title={
          <h2>
            What's new <br />
            in the world of <span>ART</span>
          </h2>
        }
      />
      {loading && <Loader />}
      {newsList.length > 0 && <News list={newsList.slice(0, 6)} />}
    </section>
  );
};

export { routeMain };

export default MainPage;
