import React, { useState, useEffect } from 'react';
import {theme} from "../../styles/defaultVariables"
import {SP2} from "../Text.style";
import {SDivError} from "../Form.style";

function Warning(){

    const [errorMessage, setErrorMessage] = useState('oui');
    const [heightDiv, setHeightDiv] = useState(0);

    useEffect(()=>{
        setHeightDiv(errorMessage != null ? "3vw" : 0);
      },[errorMessage]);

    return (
        <SDivError style={{height: heightDiv}}>
            <SP2 style={{color: theme.colors.textError}}>{errorMessage}</SP2>
        </SDivError>
    )
}

export default Warning;