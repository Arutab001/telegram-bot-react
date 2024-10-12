import React, {createContext, useContext, useState} from "react";

const StringArrayContext = createContext();

export const StringArrayProvide = ({children}) => {
  const [strings, setStrings] = useState([]);
  return (
      <StringArrayContext.Provider value={{strings, setStrings}}>
          {children}
      </StringArrayContext.Provider>
  );
}

export const useStringArray = () => useContext(StringArrayContext);