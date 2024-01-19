'use client'
import React from 'react'
import styled from 'styled-components';

const Services = () => {
    return (
        <Con>
            <div className='flex-con'>
                <Left data-aos="fade-down-left" data-aos-delay="100">
                    <img src="/images/pages/home/img 2.png" alt="img" />
                </Left>
                <Right data-aos="fade-down-right" data-aos-delay="200">
                    <div className='head flex justify-between items-center'>
                        <div className='left flex'>
                            <img className='mr-3' src="/images/pages/home/icon1.svg" alt="img" />
                            <h1>
                                Our  <span>Services</span>
                            </h1>
                        </div>
                        <div className='right'>

                        </div>
                    </div>
                    <p className='para'>
                        At TPL Trinitypact Limited, we are dedicated to providing 
                        exceptional real estate services that cater to your unique 
                        needs and aspirations. With our extensive knowledge of 
                        the local market and a team of experienced professionals, 
                        we strive to guide you through every step of your real 
                        estate journey.
                    </p>
                </Right>
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
    .flex-con{
        display:flex;
        flex-direction:row-reverse;  
    }
    @media (max-width: 1200px) { 
        .flex-con{
            flex-direction:column;
        }
         
    }
`;

const Left = styled.div` 
    width:50%;
    padding: 10px;
    img{
        width: 100%;
        height: 100%;
    }
    @media (max-width: 1200px) { 
        width:100%;
        padding:0px;
        margin-bottom:20px;
    } 
`;

const Right = styled.div`  
    width:50%;
    padding: 10px;
    @media (max-width: 1200px) { 
        width:100%;
        padding:0px;
    } 
    .head{   
        .left{
            margin-bottom:40px; 
            @media (max-width: 600px) { 
                img{
                    width: 50%;
                } 
            }
        }
        .right{

        }
        
    }
    h2{
        color: #F58634;
        font-family: Nunito;
        font-size: 31px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        span{
            color: #000;
        }
    }
    .para{
        color: #000;
        text-align: justify; 
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        margin:20px 0;
        @media (max-width: 1200px) {  
            font-size: 14px;
        }
    }
    .list-con{ 
        margin-top:20px;
        .list{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 26px 40px 31px 40px; 
            border-radius: 20px;
            background: #F1F1F1;
            @media (max-width: 1200px) {  
                padding: 26px 25px 13px 25px;
            }
            .number{
                color: #000;
                font-family: Nunito;
                font-size: 40px;
                font-style: normal;
                font-weight: 700;
                line-height: normal;
                @media (max-width: 1200px) {  
                    font-size: 20px;
                }
            }
            .title{
                color: #000;
                text-align: justify;
                font-family: Nunito;
                font-size: 25px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
                @media (max-width: 1200px) {  
                    font-size: 12px;
                }
            }
        }
    }
    @media (max-width: 1200px) { 
        width:100%;
        padding-left:0px;
    } 
`;

export default Services