import React from 'react';
import Login from './login';

function componentize(item) {
  if(item.name === "login")
    return <Login key={item.name} />;
  return <span style={{color: "red"}} key={item.name}>Hi</span>;
}

export default componentize;
