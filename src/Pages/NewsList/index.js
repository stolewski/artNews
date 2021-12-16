import React, { useEffect } from 'react';
import routeNewsList from './routes';
import PageTitle from 'components/PageTitle';
import News from 'components/News';
import { loadNews } from 'store/news/actions';
import { selectList } from 'store/news/selectors';
import { useDispatch, useSelector } from 'react-redux';

const NewsList = () => {
  const dispatch = useDispatch();
  const newsList = useSelector(selectList);

  useEffect(() => {
    dispatch(loadNews());
  }, [dispatch]);
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
      {newsList.length > 0 && <News list={newsList} />}
    </section>
  );
};

export { routeNewsList };

export default NewsList;
