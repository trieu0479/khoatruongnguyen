import React from 'react';

export const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [theme, setTheme] = React.useState('light');
  const [products, setProducts] = React.useState([])
  
  return (
    <AppContext.Provider
      value={{
        // states
        theme,
        products,

        // actions
        setTheme,
        setProducts
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => React.useContext(AppContext);