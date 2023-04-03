import React, { useState, useEffect, useContext } from 'react';
import {theme} from "../../styles/defaultVariables"
import {SP2} from "../Text.style";
import {SDivError} from "../Form.style";

import AppContext from "../../AppContext";

function Warning(){
    const [heightDiv, setHeightDiv] = useState(0);    
    
    const { errorMessage, setErrorMessage} = useContext(AppContext);


    useEffect(()=>{
        setHeightDiv(errorMessage != null ? "2vw" : 0);
      },[errorMessage]);

    return (
        <SDivError style={{height: heightDiv}}>
            <SP2 style={{color: theme.colors.textError}}>{errorMessage}</SP2>
        </SDivError>
    )
}

export default Warning;