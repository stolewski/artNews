import React from 'react';
import NewsItem from './components/NewsItem';
import './styles.scss';

const News = props => {
  return (
    <div className='news row'>
      {props.list.map(item => (
        <NewsItem key={item._id} params={item} />
      ))}
    </div>
  );
};

export default News;
