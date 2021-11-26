import React from 'react';
import './styles.scss';
import logo from 'assets/Stolewski.png';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='row align-items-end'>
        <div className='col-sm-5'>
          <div className='leftBlock'>
            <p>Art News</p>
            <p className='small'>Single Page Application</p>
          </div>
        </div>
        <div className='col-sm-2'>
          <p className='test'>Test Page</p>
        </div>
        <div className='col-sm-5'>
          <div className='rigthBlock'>
            <p className='small'>Made by</p>
            <a
              target='_blank'
              rel='noreferrer'
              href='https://www.linkedin.com/in/stanislavoleszko/'
            >
              <img src={logo} alt={logo} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
