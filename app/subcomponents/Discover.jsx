'use client'
import React, { useState } from 'react'
import styled from 'styled-components';

const Discover = () => {
    return (
        <Con>
            <div className='in-hero'>
                <h1>Discover the <span>Trinitypact</span> difference and let us
                    guide you on your <span>real estate journey.</span>
                </h1>
                <RedButton onClick={() => Router.push(`/contact`)}>Contact Us today to get started</RedButton>
            </div>
        </Con>
    )
}

const Con = styled.section`  
    width: 100%;  
    background: url('/images/pages/home/cimg1.png') center no-repeat;
    background-size: cover;  
    background-attachment:fixed;
    position: relative;
    padding:96px;
    @media (max-width: 600px) { 
        padding:20px;
    }
    @media (min-width: 1400px) {  
        padding: 96px 120px;
    }
    &::after{
        content: '';
        width: inherit;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background: linear-gradient(0deg, rgba(134, 134, 134, 0.49) 0%, rgba(134, 134, 134, 0.49) 100%);
    }
    .in-hero{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: relative; 
        width: 100%; 
        height: 100%;
        z-index: 1; 
        padding: 30px;
        h1{
            text-align: center;
            color: #FFF;
            text-align: center;
            font-family: Nunito;
            font-size: 45px;
            font-style: normal;
            font-weight: 900;
            line-height: normal;
            margin-bottom:30px;
            @media (max-width: 600px) { 
                font-size: 24px;
            }
            span{
                color: #F58634;
            }
        } 
    }
`;

const RedButton = styled.button`  
    padding: 10px 20px;
    border-radius: 4px;
    border:none;
    border-radius: 20px;
    background: #F58634;
    line-height: normal; 
    color: #FFF; 
    font-size: 22px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    cursor:pointer;
    outline:none;
    @media (max-width: 600px) { 
        font-size: 12px;
    }
    &:hover {
        background: none; /* Remove background color on hover */
        border: 2px solid #F58634; /* Add border on hover */
        color: #FFF; /* Text color on hover */
        transition: 200ms ease-in;
    } 
`;
export default Discover