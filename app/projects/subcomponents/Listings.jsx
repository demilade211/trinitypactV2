'use client'
import React, { useState } from 'react'
import styled from 'styled-components';

const Listings = () => {
    const [active, setActive] = useState(0) 
    return (
        <Con> 
            <div className='flex-con'>
                <div className='con'>
                    <img className='' src="/images/pages/home/img3.png" alt="img" />
                </div>
                <div className='con'>
                    <img className='' src="/images/pages/home/img4.png" alt="img" />
                </div>
                <div className='con'>
                    <img className='' src="/images/pages/home/img5.png" alt="img" />
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
        padding:20px;
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
            font-size: 16px;
        } 
        span{ 
            color: #272727;
        }
    }  
    .head{  
        margin-bottom:40px; 
        .left{  
            @media (max-width: 600px) { 
                img{
                    width: 50%;
                } 
            }
        } 
        
    }
    .flex-con{
        display:grid;   
        grid-template-columns:1fr 1fr 1fr;
        column-gap: 20px;
        row-gap: 20px;
        @media (max-width: 900px) {  
            grid-template-columns:1fr 1fr;
        }
        @media (max-width: 500px) {  
            grid-template-columns:100%;
        }  
        .con{ 
            height: 490px;
            border-radius: 30px;
            background: linear-gradient(0deg, rgba(234, 234, 234, 0.10) 0%, rgba(234, 234, 234, 0.10) 100%), url(<path-to-image>), lightgray 50% / cover no-repeat;
            img{
                width: 100%;
                height:100%;
            }
        }
    } 
    .mobile-flex-con{
        display:none;   
        grid-template-columns:349px;
        justify-content: center;
        column-gap: 20px;
        @media (max-width: 1200px) {  
            display: grid;
        } 
        @media (max-width: 390px) {  
            grid-template-columns:100%;
        } 
        .con{ 
            height: 490px;
            border-radius: 30px;
            background: linear-gradient(0deg, rgba(234, 234, 234, 0.10) 0%, rgba(234, 234, 234, 0.10) 100%), url(<path-to-image>), lightgray 50% / cover no-repeat;
            img{
                width: 100%;
                height:100%;
            }
        }
    } 
    .active-con{
        width: 100%;
        display: none;
        justify-content: center;
        margin:10px 0;
        @media (max-width: 1200px) { 
            display: flex;
        }
        .dot{
            width: 13px;
            height: 13px;
            border-radius:100%;
            background-color:#D9D9D9;
            margin-right:10px;
        }
        .active{
            background-color:#FF9445;
        }
    }
`;

const CountBtn = styled.button`  
    width: 49px;
    height: 49px;
    display: flex;
    justify-content:center;
    align-items:center; 
    border:none;
    border-radius: 100%;
    background: #F58634;
    line-height: normal; 
    color: #FFF;  
    cursor:pointer;
    outline:none; 
    &:disabled,
    button[disabled]{ 
      background:  #D9D9D9;
      color:white;
    }
`;
export default Listings