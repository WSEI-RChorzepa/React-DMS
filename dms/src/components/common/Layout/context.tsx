import { createContext, useContext } from "react";

export const LayoutContext = createContext<{ showNavigation: boolean; toggleShowNavigation: () => void }>({
  showNavigation: true,
  toggleShowNavigation: () => {},
});

export const useLayoutContext = () => useContext(LayoutContext);
