import React from 'react';
import Login from './login';
import Suggestions from './suggestions';
import Image from './image';

function componentClass(item) {
  if(item.name === "login")
    return Login;
  if(item.type === "suggestions")
    return Suggestions;
  if(item.type === "image")
    return Image;
}

function componentize(item) {
  let klass = componentClass(item);
  if(klass)
    return React.createElement(klass, {key: item.name, data: item}, null);
  return <span style={{color: "red"}} key={item.name}>Not yet implemented</span>;
}

export default componentize;
