import React, { useEffect } from 'react';
import routeMain from './routes';
import PageTitle from 'components/PageTitle';
import News from 'components/News';
import { loadNews } from 'store/news/actions';
import { selectList } from 'store/news/selectors';
import { useDispatch, useSelector } from 'react-redux';

const MainPage = () => {
  const dispatch = useDispatch();
  const newsList = useSelector(selectList);

  useEffect(() => {
    dispatch(loadNews());
  }, [dispatch]);

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
      {newsList.length > 0 && <News list={newsList.slice(0, 6)} />}
    </section>
  );
};

export { routeMain };

export default MainPage;
