import { createContext } from "react";
import { initialData } from "../utils";

const defaultState = {
  data: initialData,
  setData: () => {},
};

export const DataContext = createContext(defaultState);