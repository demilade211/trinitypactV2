'use client'
import React from 'react'
import styled from 'styled-components';

const AboutUs = () => {
    return (
        <Con>
            <div className='head flex items-center'>
                <img className='mr-3' src="/images/pages/home/icon1.svg" alt="img" />
                <h1>
                    About <span>Us</span>
                </h1>
            </div>
            <div className='flex-con'>
                <Left data-aos="fade-down-left" data-aos-delay="100">
                    <img src="/images/pages/home/img1.png" alt="img" />
                </Left>
                <Right data-aos="fade-down-right" data-aos-delay="200">
                    <h2>
                        Trinitypact Limited <span>: Leaders in</span><br />
                        Property Development
                    </h2>
                    <p className='para'>
                        Trinitypact Limited is a dynamic real estate development company based in Lagos,
                        Nigeria, with over three years of experience in the industry. We specialize in
                        property development and investment, offering services ranging from residential
                        and commercial property development to real estate advisory.
                    </p>
                    <OrangeButton>Read More</OrangeButton>
                    <div className='list-con flex'>
                        <div className='list m-3'>
                            <p className='number'>10+</p>
                            <p className='title'>Projects</p>
                        </div>
                        <div className='list m-3'>
                            <p className='number'>200+</p>
                            <p className='title'>Clients</p>
                        </div>
                        <div className='list m-3'>
                            <p className='number'>5+</p>
                            <p className='title'>Ratings</p>
                        </div>
                    </div>
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
    .head{  
        margin-bottom:40px; 
        @media (max-width: 600px) { 
            img{
                width: 50%;
            }
         
        }
    }
    .flex-con{
        display:flex;  
    }
    @media (max-width: 1200px) { 
        .flex-con{
            flex-direction:column;
        }
         
    }
`;

const Left = styled.div` 
    width:50%;
    padding: 0px;
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
    padding: 30px;
    @media (max-width: 1200px) { 
        width:100%;
        padding:0px;
    } 
    h2{
        color: #F58634;
        font-family: Nunito;
        font-size: 31px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        @media (max-width: 1200px) {  
            font-size: 20px;
        }
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

const OrangeButton = styled.button`  
    padding: 10px 30px;
    border-radius: 4px;
    border:none;
    border-radius: 20px;
    background: #F58634;
    line-height: normal; 
    color: #FFF; 
    font-size: 20px;
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
        border: 2px solid #DB0F31; /* Add border on hover */
        color: #FFF; /* Text color on hover */
        transition: 200ms ease-in;
    } 
`;

export default AboutUs