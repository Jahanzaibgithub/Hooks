import { useState } from 'react';
import { useContext, createContext } from 'react';
const AppContext = createContext(); // {provider:'', consumer:''}
const AppProvider = AppContext.Provider;



export const MyProvider = ({children}) => {
  const [myName, setName] = useState('shahzaib')
let name = 'name';
let age = 50;
let loggedIn = false;
const setMyName = (name) => {
  setName(name);
  loggedIn = true
}
  return (
    <AppProvider value={{name, age, myName, setMyName, }}>{children}</AppProvider>
  )
}

export const MyContext = () => {
  return useContext(AppContext);
}
