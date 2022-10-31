import { createContext, useContext } from "react";

const SmartLayoutContext = createContext();

export const useSmartLayoutContext = () => {
  const value = useContext(SmartLayoutContext);

  if (!value) throw new Error("Cannot render component outside of SmartLayout");

  return value;
};

export default SmartLayoutContext;
