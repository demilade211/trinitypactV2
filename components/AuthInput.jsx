import React from 'react'
import styled from "styled-components";

const AuthInput = ({ place, withIcon, image, type, onChange, name, value, errors }) => {
  return (
    <InputLabelCon>
      <InputCon>
        {withIcon && <img src={image} alt="img" />}
        <input type={type} placeholder={place} onChange={onChange} name={name} value={value} />
      </InputCon>
      {errors?.inputName === name && errors?.isError && <ErrorMessage>{errors.message}</ErrorMessage>}
    </InputLabelCon>

  )
}
const InputLabelCon = styled.div`
    margin-bottom:30px;
`;
const ErrorMessage = styled.div` 
    color: red; 
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top:5px;
`;

const InputCon = styled.div`
    width: 100%;
    height:62px;
    display:flex; 
    align-items:center;
    border-radius: 20px;
    background: rgba(245, 134, 52, 0.23);   
    padding:10px 20px; 
    img{
        margin-right:10px;
        width:25px;
        height:25px;
    }
    input{
      width:100%;
      background:none;
      border:none;
      outline:none;
      color: #FFF;
      color: var(--pure-black, #000); 
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 16px; /* 100% */
      &::placeholder {
        color: var(--pure-black, #000); 
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 16px; /* 100% */
      }

    }
`;

export default AuthInput