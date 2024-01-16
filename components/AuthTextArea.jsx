import React from 'react'
import styled from 'styled-components';

const TextAreaAndLabel = ({label,placeholder,name,onChange,value}) => {
  return (
    <TextAreaLabelCon>
        <Label>{label}</Label>
        <GreyTextArea type="textarea" placeholder={placeholder} name={name} onChange={onChange} value={value}></GreyTextArea>
    </TextAreaLabelCon>
  )
}

const TextAreaLabelCon = styled.div`
    margin-bottom:30px;  
    border-radius: 20px; 
    border: 1px solid #9D9D9D;
    background: #FFF;
`;

const GreyTextArea = styled.textarea`
    width:100%;
    max-width:327px;
    height: 119px;
    background: none;  
    padding:15px;
    outline:none;
    border:none;
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
`;

const Label = styled.div`
    font-weight: 500;
    font-size: 12px;
    color: #333843;
    margin-bottom:5px
`;

export default TextAreaAndLabel