import { createContext, useContext } from "react";
import { IEntitiesContext } from "./types";

export const EntitiesContext = createContext<IEntitiesContext>({
  displayType: "mosaic",
  showFilterConditions: false,
  toogleFilterConditions: () => {},
});

export const useEntitiesContext = () => useContext(EntitiesContext);
