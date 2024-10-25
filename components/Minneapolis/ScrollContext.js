import React, { createContext, useContext, useRef } from "react";

const ScrollContext = createContext();

export function ScrollProvider({ children }) {
  const registerSectionRef = useRef(null);

  return (
    <ScrollContext.Provider value={registerSectionRef}>
      {children}
    </ScrollContext.Provider>
  );
}

export function useScrollContext() {
  return useContext(ScrollContext);
}