import React, { useState, useEffect, useContext } from "react";

// Import Default Variables - Colors, Fonts...
import { theme } from "../styles/defaultVariables";

// Import Component-Styles
import { SP2 } from "../styles/Text.style";
import { SDivError } from "../styles/Form.style";

import AppContext from "../AppContext";

function Warning() {
  const [heightDiv, setHeightDiv] = useState<number | string>(0);
  const { errorMessage } = useContext(AppContext);

  const sizeObject = Object.keys(errorMessage).length;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    setHeightDiv(sizeObject !== 0 ? sizeObject + "vw" : 0);
  });

  return (
    <SDivError style={{ height: heightDiv }}>
      {errorMessage.map((message: string) => (
        <SP2 style={{ color: theme.colors.textError }}>{message}</SP2>
      ))}
    </SDivError>
  );
}

export default Warning;