import React from 'react';
import './styles.scss';
import routeContacts from './routes';
import myPic from 'assets/minePic.jpg';

const Contacts = () => (
  <div className='contactsPage'>
    <div className='info'>
      <div className='name'>Stanislav Oleszko</div>
      <div className='tel'>
        <a href='tel:+48791310907'>+48 791 310 907</a>
      </div>
      <div className='email'>
        <a href='mailto:oleszko@yahoo.com'>oleszko@yahoo.com</a>
      </div>
      <div className='position'>FrontEnd Developer</div>
      <ul className='tech'>
        <li>HTML5</li>
        <li>CSS3/Sass</li>
        <li>ES6</li>
        <li>
          <span>React</span>
        </li>
      </ul>
    </div>
    <div className='image'>
      <img loading='lazy' src={myPic} width={400} alt={myPic} />
    </div>
  </div>
);

export { routeContacts };

export default Contacts;
