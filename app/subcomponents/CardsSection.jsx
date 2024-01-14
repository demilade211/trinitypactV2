'use client'
import React from 'react'
import styled from 'styled-components';

const CardsSection = () => {
    return (
        <Con>
            <div className='head-tag'>
                <p>Our Services Include</p>
            </div>
            <div className='in-con'>
                <div className='item-con flex flex-col items-center justify-center'>
                    <div className='img-con mb-3'><img src="/images/pages/home/icon3.svg" alt="img" /></div>
                    <p className='count'>Real Estate Development</p>
                </div>
                <div className='item-con flex flex-col items-center justify-center'>
                    <div className='img-con mb-3'><img src="/images/pages/home/icon3.svg" alt="img" /></div>
                    <p className='count'>Project Management</p>
                </div>
                <div className='item-con flex flex-col items-center justify-center'>
                    <div className='img-con mb-3'><img src="/images/pages/home/icon3.svg" alt="img" /></div>
                    <p className='count'>Property Management</p>
                </div>
                <div className='item-con flex flex-col items-center justify-center'>
                    <div className='img-con mb-3'><img src="/images/pages/home/icon3.svg" alt="img" /></div>
                    <p className='count'>Constructions</p>
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
  background: url('/images/pages/home/cimg.jpg');
  background-position: center center;
  background-size: cover;
  position: relative; 
  background-attachment:fixed;
  @media (min-width: 1400px) {  
    padding: 50px 120px;
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
  .head-tag{  
    padding: 32px 29px 31px 28px;
    width: 392px;
    height: 90px;
    border-radius: 20px; 
    background: #FFF;
    box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.25);
    position: relative; 
    z-index: 1;  
    margin-top:-80px;
    margin-bottom:30px;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 1200px) { 
      display: none;
    }  
    p{
        color: #F58634;
        font-family: Nunito;
        font-size: 35px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }  
  }
  .in-con{ 
    position: relative;  
    z-index: 1;    
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    justify-content: center;
    row-gap: 40px;
    column-gap:40px;
    @media (max-width: 1200px) { 
        grid-template-columns: 164px 164px;
    }
    .item-con{
        height: 284px;
        border-radius: 30px;
        background: #FFF;
        padding: 20px;
        @media (max-width: 1200px) { 
            height: 181px;
        }
        .img-con{
            @media (max-width: 1200px) { 
                width: 65px;
                height: 65px;
            }
            img{
                width: 100%;
                height: 100%;
            }
        }
        p{
            color: #272727;
            text-align: center;
            font-family: Nunito;
            font-size: 25px;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
            @media (max-width: 1200px) { 
                font-size:14px;
            }
        }
    }
    @media (max-width: 600px) { 
      justify-content: center;
    }  
  }
  @media (max-width: 1200px) {  
      padding:30px;
  }   
`;

export default CardsSection