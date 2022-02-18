import React from "react";
import "./style.css";
import Main from "./Main";
import Contact from "./Contact";



export default function App() {
  let a = "World!";
  return (
    <>
   <Main name={a}/>
   <Contact name={a}/>
   </>
  );
}
