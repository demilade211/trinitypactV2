'use client'
import React from 'react'
import styled from 'styled-components';

const Listings = () => {
    return (
        <Con>
            <div className='head flex items-center'>
                <img className='' src="/images/pages/home/icon1.svg" alt="img" />
                <h1>
                    Our  <span>Listing</span>
                </h1>
            </div>
            <div className='flex-con'>
                <div className='con'>

                </div>
            </div>

        </Con>
    )
}

const Con = styled.section`  
    width: 100%;     
    padding: 64px 70px 64px 70px;
    background: #F7F7F7;
    @media (max-width: 1200px) {  
        padding:30px;
    } 
    @media (min-width: 1400px) {  
        padding: 64px 120px;
    }
    h1{ 
        color: #F58634; 
        font-family: Nunito;
        font-size: 40px;
        font-style: normal;
        font-weight: 700;
        line-height: normal; 
        @media (max-width: 1200px) { 
            font-size: 20px;
        } 
        span{ 
            color: #272727;
        }
    }  
    .head{  
        border:1px solid black;
        margin-bottom:40px; 
        @media (max-width: 600px) { 
            img{
                width: 50%;
            }
         
        }
    }
    .flex-con{
        display:flex;  
        border: 1px solid black;
        .con{
            border: 1px solid red;
            padding: 40px;
        }
    } 
`;
export default Listings