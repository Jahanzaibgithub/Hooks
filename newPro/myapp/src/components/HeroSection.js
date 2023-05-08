import React from 'react'
// import MyProvider from "../context";
import {MyContext} from "../context"

function HeroSection () {
  const {name, age, myName, setMyName} = MyContext();
  return (
    <>
    <div>For List Click me! {myName} </div>
    <button onClick={() => setMyName([
      <dev class="list-item">
        <ul>Mouse</ul>
        <ul>cabel</ul>
        <ul>Laptop</ul>
      </dev>
    ])}>
      click
      </button>
    </>
  )
};
export default (HeroSection)
