import { createContext } from "react";

const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  return <GlobalContext.Provider>{children}</GlobalContext.Provider>;
}
