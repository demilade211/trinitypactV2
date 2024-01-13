import React from 'react'
import styled from 'styled-components';

const Footer = () => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    return (
        <Con>
            <FirstRow>
                <div className='first'>
                    <img className='logo' src="/images/components/logo.svg" alt="img" />
                    <p className='first-p'>
                        At Transportco Trucking Company, we're not just about moving freight; we're about moving your business forward. With a relentless commitment to reliability, efficiency, and safety, we've been the go-to partner for businesses in need of top-tier transportation solutions.
                    </p>
                    <div className='soc flex my-3 items-center'>
                        <div><img className="mr-5 cursor-pointer" src="/images/components/fb.svg" alt="img" /></div>
                        <div><img className="mr-5 cursor-pointer" src="/images/components/insta.svg" alt="img" /> </div>
                        <div><img className="mr-5 cursor-pointer" src="/images/components/twit.svg" alt="img" /> </div>
                    </div>
                </div>
                <div className='second'>
                    <h4>Contact Us</h4>
                    <div className='loc'>
                        <img src="/images/components/lo.svg" alt="img" />
                        <p>
                        Block 22 Flat 4 Omole Estate,<br/> Phase 1, Ojodu Lagos
                        </p>
                    </div>
                    <div className='mail'>
                        <img src="/images/components/msg.svg" alt="img" />
                        <p>
                        hello@transportcotrucking.com

                        </p>
                    </div>
                    <div className='call'>
                        <img src="/images/components/tabler_phone-filled.svg" alt="img" />
                        <p>08034225648, 08025761900</p>
                    </div>
                </div>
                <div className='third'>
                    <h4>WORKING HOURS</h4>
                    <div className='links'>
                        <p>Monday - Friday: 8:00am - 6:00pm </p>
                        <p>Saturday - Sunday: 8:00am - 1:00pm</p>
                    </div>
                </div>

            </FirstRow>
            <ThirdRow>
                <p>Copyright © {currentYear} <span>Transportco Trucking Company</span></p>
            </ThirdRow>
        </Con>
    )
}

const Con = styled.section`  
    width: 100%;      
    padding: 80px 90px 40px 90px;
    background: #202020;  
    display: flex;
    flex-direction:column;
    align-items:center;
    @media (max-width: 600px) { 
        padding: 50px 30px;
    }
    p{ 
        color: #C3C3C3;
        font-family: Roboto;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 175%; /* 28px */
        @media (max-width: 1200px) { 
            text-align: center;
        }
    }
`;

const FirstRow = styled.div`  
    width: 80%;    
    display: flex; 
    justify-content:space-between;  
    @media (max-width: 1200px) { 
        justify-content: center;
        align-items:center;
        flex-direction: column;
    }
    @media (min-width: 1400px) {  
        width: 70%;
    }
    .first{    
        width: 35%;
        margin-bottom:40px; 
        @media (max-width: 1200px) { 
            display: flex;
            flex-direction:column;
            align-items: center;
            width: 100%;
        } 
        .logo{
            margin-bottom:10px; 
            width: 80%;
        }  
    }
    .second{  
        display:flex;
        flex-direction:column; 
        margin-bottom:40px;
        @media (max-width: 1200px) { 
            align-items: center;
        }
        h4{
            color: var(--pure-white, #FFF); 
            /* Body 1/Semi-Bold */
            font-family: Roboto;
            font-size: 18px;
            font-style: normal;
            font-weight: 700;
            line-height: 150%; /* 27px */
            margin-bottom:10px;
            text-transform: uppercase;
            @media (max-width: 1200px) { 
                text-align: center;
            }
        }
        div{
            display:flex;
            margin-bottom:10px;
            align-items:center;
            img{
                margin-right:10px;
            }
        }
    }
    .third{  
        display:flex;
        flex-direction:column; 
        margin-bottom:40px;
        @media (max-width: 1200px) { 
            align-items: center;
        }
        h4{
            color: var(--pure-white, #FFF); 
            /* Body 1/Semi-Bold */
            font-family: Roboto;
            font-size: 18px;
            font-style: normal;
            font-weight: 700;
            line-height: 150%; /* 27px */
            margin-bottom:10px;
            text-align:left;
            text-transform: uppercase;
            @media (max-width: 1200px) { 
                text-align: center;
            }
        }
        .links{ 
            p{
                margin-bottom:10px; 
                text-align:left;
                @media (max-width: 1200px) { 
                    text-align: center;
                }
            }
            div{
                display:flex;
                align-items:center;
                img{
                    margin-left:20px;
                }
                span{
                    color: #D434FE;
                    font-family: Montserrat;
                    font-size: 12px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: normal;
                }
            }
        }
    }
    
`;

const ThirdRow = styled.div`  
    width: 100%;     
    display:flex;
    justify-content:center;   
    p{
        text-align:center;
        span{
            color: #DB0F31;
        }
    }
`;

const VerticalDivider = styled.section`  
  width: 2px;
  height: 19px;
  background: #D434FE; 
  margin:0 15px;
`;

export default Footer