'use client'

import styled from 'styled-components'; 

const Title = () => {
    return (
        <Con>
            <div className='in-hero'>
                <div className='head flex items-center'>
                    <img className='mr-3' src="/images/pages/home/icon1.svg" alt="img" />
                    <h1>
                        Our <span>Services</span>
                    </h1>
                </div>
            </div>
        </Con>
    )
}

const Con = styled.section`  
    width: 100%;  
    height: 500px;
    background: url('/images/pages/home/truck1.jpg') center no-repeat;
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
        width: 100%; 
        height: 100%;
        z-index: 1; 
        padding: 30px 110px; 
        display: flex;
        align-items: center;
        @media (max-width: 1200px) { 
            width: 100%;
            padding: 30px; 
        }
        h1{ 
            color: #FFF; 
            font-family: Nunito;
            font-size: 40px;
            font-style: normal;
            font-weight: 700;
            line-height: normal; 
            @media (max-width: 1200px) { 
                font-size: 20px;
            } 
            span{ 
                color: #F58634;
            }
        }  
        .head{
            @media (max-width: 600px) { 
                img{
                    width: 50%;
                }
         
            }
        }
    }
`;

export default Title