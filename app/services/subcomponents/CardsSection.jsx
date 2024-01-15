'use client'
import React from 'react'
import styled from 'styled-components';

const CardsSection = () => {
    return (
        <Con>
            <div className='in-con'>
                <div className='item-con flex flex-col items-center justify-center'>
                    <div className='img-con mb-3'><img src="/images/pages/home/icon3.svg" alt="img" /></div>
                    <h1 className='count'>Real Estate Development</h1>
                    <p>
                        TPL specializes in visionary real estate development, bringing innovative concepts
                        to life. Our team is dedicated to creating sustainable and thriving communities that
                        redefine the standard of living.
                    </p>
                </div>
                <div className='item-con flex flex-col items-center justify-center'>
                    <div className='img-con mb-3'><img src="/images/pages/home/icon3.svg" alt="img" /></div>
                    <h1 className='count'>Project Management</h1>
                    <p>
                        At TPL, we excel in project management, ensuring seamless execution from inception to
                        completion. Our experienced professionals navigate complexities, optimize resources,
                        and deliver projects on time and within budget.
                    </p>
                </div>
                <div className='item-con flex flex-col items-center justify-center'>
                    <div className='img-con mb-3'><img src="/images/pages/home/icon3.svg" alt="img" /></div>
                    <h1 className='count'>Property Management</h1>
                    <p>
                        Trust TPL to handle your property with care and expertise. Our property management
                        services encompass everything from tenant relations to maintenance, ensuring the
                        optimal performance and value of your real estate assets.
                    </p>
                </div>
                <div className='item-con flex flex-col items-center justify-center'>
                    <div className='img-con mb-3'><img src="/images/pages/home/icon3.svg" alt="img" /></div>
                    <h1 className='count'>Constructions</h1>
                    <p>
                        Trust TPL to handle your property with care and expertise. Our property management
                        services encompass everything from tenant relations to maintenance, ensuring the '
                        optimal performance and value of your real estate assets.
                    </p>
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
  .in-con{ 
    position: relative;  
    z-index: 1;    
    display: grid;
    grid-template-columns: 386px 386px ;
    justify-content: center;
    row-gap: 40px;
    column-gap:40px;
    @media (max-width: 1200px) { 
        grid-template-columns: 100%;
    }
    @media (max-width: 350px) { 
        grid-template-columns: 100%;
    }
    .item-con{
        height: 400px;
        border-radius: 30px;
        background: #FFF;
        padding: 20px;
        @media (max-width: 1200px) { 
            height: auto;
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
        h1{
            color: #272727;
            text-align: center;
            font-family: Nunito;
            font-size: 25px;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
            margin-bottom:25px;
            @media (max-width: 1200px) { 
                font-size:14px;
            }
        }
        p{
            color: #000;
            text-align: justify;
            font-family: Nunito;
            font-size: 18px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            @media (max-width: 1200px) { 
                font-size:13px;
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