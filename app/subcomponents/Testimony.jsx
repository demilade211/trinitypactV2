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
                        Taking a leap of faith with this real estate website was the best decision of my
                        life. From the initial property search to the final closing, the seamless and
                        user-friendly experience exceeded my expectations. The platform not only helped me
                        find my dream home but also made the entire journey a joy. Kudos to the team for
                        creating a platform that turns dreams into reality!
                    </p>
                    <div className='outer flex justify-end'>
                        <div className='inner flex items-center'>
                            <p className='name mr-2'>Ugochukwu Eze</p>
                            <div className='img-con'>
                                <h4>UE</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='con'>
                    <h2>“Was the best decision..”</h2>
                    <p className='testi'>
                        Choosing this real estate website for our property needs was undeniably the best
                        decision we made. The attention to detail, user-centric design, and comprehensive
                        property listings made the entire process a breeze. The commitment to excellence
                        and personalized service showcased by the team truly sets them apart. We are now
                        proud homeowners, all thanks to this exceptional platform.
                    </p>
                    <div className='outer flex justify-end'>
                        <div className='inner flex items-center'>
                            <p className='name mr-2'>Ryan Daniels Eze</p>
                            <div className='img-con'>
                                <h4>RD</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='con'>
                    <h2>“100% Delivery rate....”</h2>
                    <p className='testi'>
                        We were promised a 100% delivery rate, and this real estate website didn't
                        disappoint. From the moment we engaged with the platform to the successful
                        acquisition of our property, every commitment was met with precision.
                        The transparency, reliability, and dedication of the team ensured a smooth
                        and stress-free experience. If you're looking for a platform that delivers
                        on its promises, this is it!
                    </p>
                    <div className='outer flex justify-end'>
                        <div className='inner flex items-center'>
                            <p className='name mr-2'>Tolani Oluwabola</p>
                            <div className='img-con'>
                                <h4>TO</h4>
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
                        width: 50px;
                        height: 50px;
                        border-radius:100%;
                        border: 1px solid black;
                        background-color: black;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        h4{
                            color: white;
                            font-weight:500;
                        }
                    }
                }
            }
        }
    }   
`;

export default Testimony