import { createContext } from "react";
import { useState, useEffect } from "react";
import SanityFetch from "./SanityFetch";

export const PersonalContext = createContext();

const PersonalProvider = ({ children }) => {
  const [author, setAuthor] = useState({});

  useEffect(() => {
    async function getMeFetch() {
      setAuthor(await SanityFetch(`*[_type == "author"][0]`));
    }
    getMeFetch();
  }, []);

  const contextValue = {author};
  

  return (
    <PersonalContext.Provider value={contextValue}>
      {children}
    </PersonalContext.Provider>
  );
};

export default PersonalProvider;
