import DateView from 'components/DateView';
import { NavLink } from 'react-router-dom';
import { routeNewsDetail } from 'Pages/NewsDetail';
import React from 'react';
import './styles.scss';

const NewsItem = props => {
  return (
    <div className='col-8 col-sm-6 col-lg-4 col-xl-3'>
      <NavLink className='newsItem' to={routeNewsDetail(props.params._id)}>
        <h3 className='title'>{props.params.title}</h3>
        <div className='wrapper'>
          <p>{props.params.clean_url}</p>
          <DateView value={props.params.published_date} />
        </div>
      </NavLink>
    </div>
  );
};

export default NewsItem;
