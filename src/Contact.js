import React from 'react';
import Search from "./Component/Search";

export default function Contact({name}) {
  return (
    <div>
      Hello
      <Search name={name}/>
    </div>
  );
}