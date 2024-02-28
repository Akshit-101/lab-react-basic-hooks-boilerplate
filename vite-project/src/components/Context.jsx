import React, { useContext } from 'react';
import { ToggleTheme } from '../App';
import State from './State';
import '../App.css';

function Context() {
  const para = 'Made by kalvians';
  const theme = useContext(ToggleTheme);

  const themeStyle = {
    backgroundColor: theme ? 'grey' : 'lightblue',
    color: theme ? 'black' : 'black',
  
  };

  return (
    <div className='pink' style={themeStyle}>
      <State para={para} />
    </div>
  );
}

export default Context;