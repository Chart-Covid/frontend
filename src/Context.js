import React, { createContext, useState } from 'react';
const Context = createContext();

const Provider = ({children}) => {
  const [countryName, setCountryName] = useState('');
  const value = {
    countryName,
    changeName: (name) => {
      setCountryName(name)
    }
  }

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  )
}

export default {
  Provider,
  Consumer: Context.Consumer
};
