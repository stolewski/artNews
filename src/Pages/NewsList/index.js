import React, { useState, useEffect } from 'react';
import './styles.scss';
import routeNewsList from './routes';
import PageTitle from 'components/PageTitle';
import News from 'components/News';
import getNews from 'services/getNews';
import Loader from 'utils/Loader';

const NewsList = () => {
  const [newsList, setNewsList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getNews().then(response => {
      setNewsList(response.data.articles);
      setLoading(false);
    });
  }, []);
  return (
    <section className='newsList'>
      <PageTitle
        title={
          <h2>
            Be updated <br />
            on what's <span>going on</span>
          </h2>
        }
      />
      {loading && <Loader />}
      {newsList.length > 0 && <News list={newsList} />}
    </section>
  );
};

export { routeNewsList };

export default NewsList;
