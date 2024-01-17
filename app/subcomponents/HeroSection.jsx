'use client'
import React from 'react'
import styled from 'styled-components';
import { useRouter,usePathname } from 'next/navigation'

const HeroSection = () => {

    const router = useRouter();

    return (
        <Con>
            <div className='in-hero'>
                <h1>Best - Value</h1>
                <h2>Deals Now in Your City</h2>
                <p>Real estate properties for sale and Uop<br/>
                    rent in over 12+ Countries.Real estate <br/>
                    properties for sale and rent in over 12+<br/>
                     Countries
                </p>
                <RedButton onClick={() => router.push(`/about`)}>Learn More</RedButton>
            </div>
        </Con>
    )
}

const Con = styled.section`  
    width: 100%;  
    background: url('/images/pages/home/truck1.png') center no-repeat;
    background-size: cover;  
    position: relative;
    &::after{
        content: '';
        width: inherit;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background: linear-gradient(90deg, rgba(70, 67, 67, 0.65) 21.84%, rgba(182, 182, 182, 0.00) 99.94%);
    }
    .in-hero{ 
        position: relative; 
        width: 50%; 
        height: 100%;
        z-index: 1; 
        padding: 30px 110px; 
        @media (max-width: 1200px) { 
            width: 100%;
            padding: 30px; 
        }
        h1{
            color: #FFF;
            font-family: Nunito;
            font-size: 50px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            margin-bottom:20px;
            @media (max-width: 600px) { 
                font-size: 16px;
            }
        }
        h2{
            color: #F58634; 
            font-size: 70px;
            font-style: normal;
            font-weight: 900;
            line-height: normal;
            @media (max-width: 600px) { 
                font-size: 30px;
            }
        }
        p{
            color: var(--pure-white, #FFF); 
            font-size: 20px;
            font-style: normal;
            font-weight: 400;
            line-height: 150%; /* 30px */
            margin-bottom:20px;
            @media (max-width: 600px) { 
                font-size: 16px;
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


export default HeroSection