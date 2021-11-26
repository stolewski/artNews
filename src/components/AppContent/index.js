import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './styles.scss';
import Header from 'components/Header';
import Footer from 'components/Footer';
import MainPage, { routeMain } from 'Pages/MainPage';
import Contacts, { routeContacts } from 'Pages/Contacts';
import NewsList, { routeNewsList } from 'Pages/NewsList';
import NewsDetail, { routeNewsDetail } from 'Pages/NewsDetail';

const AppContent = () => {
  return (
    <div className='container'>
      <Header />
      <main>
        <Switch>
          <Route exact path={routeMain()} component={MainPage} />
          <Route exact path={routeContacts()} component={Contacts} />
          <Route exact path={routeNewsList()} component={NewsList} />
          <Route exact path={routeNewsDetail()} component={NewsDetail} />
          <Redirect
            to={{
              pathname: routeMain(),
            }}
          />
        </Switch>
      </main>

      <Footer />
    </div>
  );
};

export default AppContent;
