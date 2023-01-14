import { createContext,useContext,useReducer,} from "react";
import { theme } from "../../theme";

export const ContextGlobal = createContext();

export const initialState = {
    dark: false,
    }


export const ContextProvider = ({ children }) => {

  const [state,dispatch]=useReducer(theme,initialState)

  return (
    <ContextGlobal.Provider
    value={{state:state,dispatch:dispatch}}
    >
      {children}
    </ContextGlobal.Provider>
  );
};

export const useGlobalStates = () =>{
  return useContext(ContextGlobal)
}