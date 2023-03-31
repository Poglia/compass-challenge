import styled from "styled-components";

export const SForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const SInput = styled.input`
  background-color: transparent;
  box-sizing: border-box;

  /* Auto layout */

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 19px 24px;

  width: 406px;
  height: 62px;
  
  border: 1px solid #f5f5f5;
  border-radius: 46px;
  margin-top: 24px;
  color: white;
`;

export const SButton = styled.button`
  width: 406px;
  height: 62px;

  background: linear-gradient(180deg, #ad2d14 0%, #f42e07 100%);

  border: 1px solid #fe2e05;
  border-radius: 46px;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;

  color: #f5f5f5;
`;
