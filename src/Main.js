import React from 'react';
import Header from "./Component/Header";
import Landing from "./Component/Landing"

export default function Main({name}) {
  return (
    <div>
      Hello 
      <Header name={name} />
      <Landing name={name}/>
    </div>
  );
}
