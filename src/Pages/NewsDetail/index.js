import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './styles.scss';
import routeNewsDetail from './routes';
import getNews from 'services/getNews';
import DateView from 'components/DateView';
import Loader from 'utils/Loader';

const NewsDetail = () => {
  const { id } = useParams();
  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getNews().then(response => {
      setNews(response.data.articles.find(el => el._id === id));
      setLoading(false);
    });
  }, [id]);
  return (
    <section className='newsDetailPage'>
      {loading && <Loader />}
      {news ? (
        <div className='newsWrapper row'>
          <div className='col-lg-4 leftSide'>
            <h2 className='title'>{news.title}</h2>
            <a
              href={`https://${news.clean_url}`}
              target='_blank'
              rel='noreferrer'
              className='source'
            >
              {news.clean_url}
            </a>
            <DateView value={news.published_date} />
          </div>
          <div className='col-lg-8 rightSide'>
            <img loading='lazy' src={news.media} alt={news.media} />
            <p className='content'>{news.summary}</p>
          </div>
        </div>
      ) : loading ? null : (
        <h2 style={{ textAling: 'center', color: '#097c8a' }}>
          Sorry, this page doesn't exist!
        </h2>
      )}
    </section>
  );
};

export { routeNewsDetail };

export default NewsDetail;
