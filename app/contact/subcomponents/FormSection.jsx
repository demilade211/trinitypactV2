'use client'

import React, { useState } from 'react'
import styled from 'styled-components';
import AuthInput from '../../../components/AuthInput';
import AuthTextArea from '../../../components/AuthTextArea';

const FormSection = () => {

    const [formData, setFormData] = useState({ name: '', email: '', phone: "", subject: "", message: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <Con>
            <div className='flex-con'>
                <Left>
                    <div className=''>
                        <h1 className='mb-6'>Get in touch With <span>Us</span></h1>
                        <p className='mb-10'>
                            For any further information required, or any inquiry you
                            wish to make, kindly consider using any of the contact
                            options listed below
                            </p>
                    </div>
                    <div className='det-con' >
                        <img className='mr-4' src="/images/pages/contact/i1.svg" alt="img" />
                        <div className='det'>
                            <h2>Find us</h2>
                            <p>
                                7, Bailey Street, Off Oguntolu Street,<br /> Shomolu, Lagos.
                            </p>
                        </div>
                    </div>
                    <div className='det-con' >
                        <img className='mr-4' src="/images/pages/contact/i1.svg" alt="img" />
                        <div className='det'>
                            <h2>Call us today</h2>
                            <p>
                                Local: 08060787963<br />
                                Mobile: 08025761900
                            </p>
                        </div>
                    </div>
                    <div className='det-con' >
                        <img className='mr-4' src="/images/pages/contact/i1.svg" alt="img" />
                        <div className='det'>
                            <h2>Email us now</h2>
                            <p>
                                trinitypactlimited@gmail.com<br />
                            </p>
                        </div>
                    </div>
                </Left>
                <Right>
                    <GridCon>
                        <AuthInput place="Name" name="name" onChange={handleChange} />
                        <AuthInput place="Email" name="email" onChange={handleChange} />
                    </GridCon>
                    <AuthInput place="Phone" name="phone" onChange={handleChange} />
                    <AuthInput place="Subject" name="subject" onChange={handleChange} />
                    <AuthTextArea placeholder="Message" name="message" onChange={handleChange} />
                    <RedButton>SEND NOW</RedButton>
                </Right>
            </div>
        </Con>
    )
}

const Con = styled.section`  
    width: 100%;     
    padding: 80px 90px; 
    background: #F7F7F7;  
    @media (max-width: 1200px) {  
        padding:80px 30px;
    }  
    @media (min-width: 1400px) {  
        padding: 80px 120px;
    }
    h1{
        color: #747474;
        font-family: Nunito;
        font-size: 35px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        text-align: left; 
        white-space: nowrap;
        @media (max-width: 1200px) { 
            font-size: 25px;
        }
        span{
            color: #F58634;
        }
    }  
    .flex-con{
        display: flex;
        @media (max-width: 1200px) { 
            flex-direction:column; 
        }
    }
`;

const GridCon = styled.div`  
    width: 100%;     
    display: grid; 
    grid-template-columns: 1fr 1fr;
    column-gap:30px;
    @media (max-width: 600px) { 
        grid-template-columns: 100%;
         
    }
`;

const Left = styled.div` 
    width:40%;  
    .det-con{
        display: flex;
        align-items: flex-start;
        margin-bottom:50px;
        .det{
            h2{
                color: #000; 
                font-size: 20px;
                font-style: normal;
                font-weight: 600; 
                margin-bottom:10px;
            }
            p{
                color: #292929;  
                font-size: 16px;
                font-style: normal;
                font-weight: 400;
                line-height: 150%; /* 30px */
            }
        }
    }
    @media (max-width: 1200px) { 
        width:100%;  
    }
`;

const Right = styled.div`  
    width:60%; 
    @media (max-width: 1200px) { 
        width:100%;  
    } 
`;

const RedButton = styled.button`  
    width: 100%;
    height:62px;
    padding: 12px 24px; 
    border-radius: 4px;
    border:none;
    border-radius: 20px;
    background: #F58634; 
    line-height: normal; 
    color: #FFF; 
    font-size: 14px;
    font-style: normal;
    font-weight: 700; 
    cursor:pointer;
    outline:none; 
`;

export default FormSection