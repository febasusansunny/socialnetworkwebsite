import React from 'react';

import FriendsList from '../../components/friendslist/friendslist.component';


import './homepage.styles.scss';

const HomePage = () => (
  <div className='homepage'>
      <h1>Friends List</h1>
    <FriendsList />
    

  </div>
);

export default HomePage;