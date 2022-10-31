import React, { useEffect, useState } from "react";
import SmartLayoutContext from "./SmartLayoutContext";

export default function SmartLayout({ children }) {
  const [menuExpanded, setMenuExpanded] = useState(
    localStorage.getItem("menuExpanded") === "true"
  );

  useEffect(() => {
    localStorage.setItem("menuExpanded", menuExpanded.toString());
  }, [menuExpanded]);

  const value = { menuExpanded, setMenuExpanded };

  return (
    <SmartLayoutContext.Provider value={value}>
      {children}
    </SmartLayoutContext.Provider>
  );
}
