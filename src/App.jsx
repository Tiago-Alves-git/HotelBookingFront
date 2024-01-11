// app.js
import React, {useState} from 'react';
import {Outlet} from 'react-router-dom';
import Menu from './Components/Menu';

const App = () => {
  const [Logged] = useState(true);
  return (
    <div className='App'>
      <Menu Logged={Logged} />
      <Outlet />
      <h1> Footer </h1>
    </div>
  );
};

export default App;
