import { createContext, ReactNode} from "react";
import { useState, useEffect } from "react";
import SanityFetch from "./SanityFetch";

export const PersonalContext = createContext<Me>({author:{name:"",email:"",headshot:{}}});

interface PersonalProviderProps {
  children: ReactNode; // Specify the type for the 'children' prop
}
interface Me {
  author:{
    name:string;
    email:string;
    headshot: object;
  }
}

const PersonalProvider = ({ children }:PersonalProviderProps) => {
  const [author, setAuthor] = useState<Me>({author:{name:"",email:"",headshot:{}}});

  useEffect(() => {
    async function getMeFetch() {
      setAuthor(await SanityFetch(`*[_type == "author"][0]`));
    }
    getMeFetch();
  }, []);

  const contextValue = author;
  

  return (
    <PersonalContext.Provider value={contextValue}>
      {children}
    </PersonalContext.Provider>
  );
};

export default PersonalProvider;
