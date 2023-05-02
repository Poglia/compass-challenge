import { createContext } from "react";
import React from "react";

const AppContext = React.createContext<string | any>(null!);

export default AppContext;