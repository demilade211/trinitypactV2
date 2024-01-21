import React from 'react'
import styled from 'styled-components';

const Footer = () => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    return (
        <Con>
            <FirstRow>
                <div className='first'>
                    <h4>TPL TrinityPact</h4>
                    <p className='first-p'>
                        TPL Trinitypact Limited is a recognized real estate firm
                        registered with the Corporate Affairs Commission
                        in Nigeria. We provide low-cost housing in high-brow areas
                        to our investors.
                    </p>
                    {/* <div className='soc flex my-3 items-center'>
                        <div><img className="mr-5 cursor-pointer" src="/images/components/fb.svg" alt="img" /></div>
                        <div><img className="mr-5 cursor-pointer" src="/images/components/insta.svg" alt="img" /> </div>
                        <div><img className="mr-5 cursor-pointer" src="/images/components/twit.svg" alt="img" /> </div>
                    </div> */}
                </div>
                <div className='second'>
                    <h4>Contact Us</h4>
                    <div className='loc'>
                        <img src="/images/components/ficon1.svg" alt="img" />
                        <p>
                            7, Bailey Street, Off Oguntolu Street,<br /> Shomolu, Lagos.
                        </p>
                    </div>
                    <div className='mail'>
                        <img src="/images/components/mail.svg" alt="img" />
                        <p>
                            trinitypactlimited@gmail.com

                        </p>
                    </div>
                    <div className='call'>
                        <img src="/images/components/phone.svg" alt="img" />
                        <p>+234 806 078 7963, +234 802 143 1957</p>
                    </div>
                </div>
                <div className='third'>
                    <h4>WORKING HOURS</h4>
                    <div className='links'>
                        <p>Monday - Friday: 8:00am - 6:00pm </p> 
                    </div>
                </div>

            </FirstRow>
            <ThirdRow>
                <p>Copyright © {currentYear} <span>TPL Trinitypact Limited</span></p>
            </ThirdRow>
        </Con>
    )
}

const Con = styled.section`  
    width: 100%;      
    padding: 80px 90px 40px 90px;
    background:#030303;  
    display: flex;
    flex-direction:column;
    align-items:center;
    @media (max-width: 600px) { 
        padding: 50px 10px;
    }
    p{ 
        color: #C3C3C3; 
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
    margin-bottom:30px;
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
        h4{
            color: #F58634;  
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
            color: #F58634;  
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
            color: #F58634;  
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
            color: #F58634;
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