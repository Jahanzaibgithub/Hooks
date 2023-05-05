import { Children, createContext } from 'react';
const AppContext = createContext(); // {provider:'', consumer:''}
const AppProvider = AppContext.Provider;



const myProvider = () => {
let data = 'name';


  return (
    <AppProvider value={data}>{Children}</AppProvider>
  )
}


export default (myProvider);