import styled from "styled-components";

export const SForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SInput = styled.input`
  background-color: transparent;
  box-sizing: border-box;

  /* Auto layout */

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;

  width: 25rem;
  height: 3rem;

  font-size: 1rem;
  
  border: 1px solid #f5f5f5;
  border-radius: 3rem;
  margin-top: 1.5rem;
  color: white;
`;

export const SButton = styled.button`
margin: 1rem 0 1rem 0;

  width: 25rem;
  height: 3rem;

  background: linear-gradient(180deg, #ad2d14 0%, #f42e07 100%);

  border: 1px solid #fe2e05;
  border-radius: 3rem;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 1rem;

  color: #f5f5f5;
`;
