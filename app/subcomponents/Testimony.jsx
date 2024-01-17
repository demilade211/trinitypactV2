'use client'
import React, { useState } from 'react'
import styled from 'styled-components';

const Testimony = () => {
    return (
        <Con>
            <div className='head flex items-center'>
                <img className='mr-3' src="/images/pages/home/wicon1.svg" alt="img" />
                <h1>
                    What Our Client Thinks
                </h1>
            </div>
            <div className='flex-con'>
                <div className='con'>
                    <h2>“Leap of Faith....”</h2>
                    <p className='testi'>
                        It was a leap of faith trusting Invicta Homes with my real estate investment,
                        and they lived up to the expectation. The entire process was seamless,
                        especially since I was transacting with them out of state. Definitely a 10/10
                        experience. I highly recommend them.
                    </p>
                    <div className='outer flex justify-end'>
                        <div className='inner flex items-center'>
                            <p className='name mr-2'>Ugochukwu Eze</p>
                            <div className='img-con'>
                                <img className='mr-5' src="/images/pages/home/pic.png" alt="img" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='con'>
                    <h2>“Was the best decision..”</h2>
                    <p className='testi'>
                        It was a leap of faith trusting Invicta Homes with my real estate investment,
                        and they lived up to the expectation. The entire process was seamless,
                        especially since I was transacting with them out of state. Definitely
                        a 10/10 experience. I highly recommend them.
                    </p>
                    <div className='outer flex justify-end'>
                        <div className='inner flex items-center'>
                            <p className='name mr-2'>Ryan Daniels Eze</p>
                            <div className='img-con'>
                                <img className='mr-5' src="/images/pages/home/pic.png" alt="img" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='con'>
                    <h2>“100% Delivery rate....”</h2>
                    <p className='testi'>
                        It was a leap of faith trusting Invicta Homes with my real estate investment,
                        and they lived up to the expectation. The entire process was seamless,
                        especially since I was transacting with them out of state. Definitely
                        a 10/10 experience. I highly recommend them.
                    </p>
                    <div className='outer flex justify-end'>
                        <div className='inner flex items-center'>
                            <p className='name mr-2'>Tolani Oluwabola</p>
                            <div className='img-con'>
                                <img className='mr-5' src="/images/pages/home/pic.png" alt="img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </Con>
    )
}
const Con = styled.section`  
    width: 100%;     
    display: flex;
    flex-direction:column;
    padding: 50px 90px;
    background: url('/images/pages/home/cimg.png');
    background-position: center center;
    background-size: cover;
    position: relative; 
    background-attachment:fixed;
    @media (max-width: 1200px) {  
        padding: 20px;
    }
    &::after{
        content: '';
        width: inherit;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background: linear-gradient(0deg, rgba(245, 134, 52, 0.57) 0%, rgba(245, 134, 52, 0.57) 100%);
    }
    h1{ 
        color: #FFF; 
        font-family: Nunito;
        font-size: 40px;
        font-style: normal;
        font-weight: 700;
        line-height: normal; 
        @media (max-width: 1200px) { 
            font-size: 16px;
        }  
    }  
    .head{  
        margin-bottom:40px;
        position: relative;  
        z-index: 1;  
        @media (max-width: 600px) { 
            img{
                width: 50%;
            } 
        }
        
    }
    .flex-con{
        position: relative;  
        z-index: 1;  
        display:grid;   
        grid-template-columns:1fr 1fr 1fr;
        column-gap: 20px;
        row-gap: 30px;
        @media (max-width: 1200px) {  
            grid-template-columns:100%;
        } 
        .con{ 
            height: 400px;
            border-radius: 20px;
            background: rgba(188, 96, 255, 0.06);
            backdrop-filter: blur(10px);
            padding:20px;
            display: flex;
            flex-direction:column;
            justify-content:center; 
            h2{
                color: #FFF;
                font-family: Nunito;
                font-size: 26px;
                font-style: normal;
                font-weight: 700;
                line-height: normal;
                margin-bottom:20px;
            }
            .testi{
                color: #FFF;
                text-align: justify; 
                font-size: 15px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
                margin-bottom:30px;
            }
            .outer{
                .inner{
                    .name{
                        color: #FFF;
                        font-family: Nunito;
                        font-size: 20px;
                        font-style: normal;
                        font-weight: 700;
                        line-height: normal;
                    }
                    .img-con{ 
                        width: 59px;
                        height: 59px;
                        img{
                            width: 100%;
                            height: 100%;
                        }
                    }
                }
            }
        }
    }   
`;

export default Testimony