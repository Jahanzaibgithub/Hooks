import React from 'react'
// import MyProvider from "../context";
import {MyContext} from "../context"

function HeroSection () {
  const {name, age, myName, setMyName} = MyContext();
  return (
    <>
    <div>heroSection component{name} {age} {myName}</div>
    <button onClick={() => setMyName('my new name is jhanzaib')}>click</button>
    </>
  )
};

export default (HeroSection)
