import React from 'react';
import './styles.scss';
import { NavLink } from 'react-router-dom';
import { routeMain } from 'Pages/MainPage';
import { routeContacts } from 'Pages/Contacts';
import { routeNewsList } from 'Pages/NewsList';

const Header = () => {
  return (
    <header className='header'>
      <div className='row'>
        <div className='col-sm-4'>
          <NavLink to={routeMain()}>
            <h2>
              <span>Art</span> News
            </h2>
          </NavLink>
        </div>
        <div className='col-sm-8'>
          <nav>
            <NavLink to={routeMain()} activeClassName={'linkActive'}>
              Home
            </NavLink>
            <NavLink to={routeNewsList()} activeClassName={'linkActive'}>
              News
            </NavLink>
            <NavLink to={routeContacts()} activeClassName={'linkActive'}>
              Contact
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
