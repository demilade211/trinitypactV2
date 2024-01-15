'use client'

import styled from 'styled-components';

const Mission = () => {
    return (
        <Con>
            <div className='row1'>
                <img className='' src="/images/pages/about/img1.png" alt="img" />
            </div>
            <div className='head flex items-center'>
                <img className='mr-3' src="/images/pages/home/icon1.svg" alt="img" />
                <h1>
                    Trinity<span>Pact</span>
                </h1>
            </div>
            <p className='para'>
                Trinitypact Limited is a reputable real estate development entity in Lagos,
                Nigeria, focused on providing enticing investment opportunities to investors.
                Our core identity revolves around the construction of superior properties
                capable of generating considerable returns over a 15-year span, while upholding
                principles of sustainability and environmental mindfulness.
            </p>
            <div className='mission-con'>
                <h2>Mission <span>&</span> Vision</h2>
                <div>
                    <div className='row'>
                        <h3>Our  Mission</h3>
                        <p>Empower individuals and businesses to achieve
                            their dreams by providing exceptional real
                            estate services. Strive for excellence in
                            every aspect of our operations, from property
                            development to customer service, fostering
                            trust and long-term relationships.
                        </p>
                    </div>
                    <div className='row'>
                        <h3>Our Vission</h3>
                        <p>
                            To be a leading force in the real estate industry,
                            pioneering innovative and sustainable solutions
                            that transform landscapes and enrich communities. 
                        </p>
                    </div>
                </div>
            </div>
        </Con>
    )
}

const Con = styled.section`  
    width: 100%; 
    padding:60px; 
    margin-bottom:30px;
    @media (max-width: 1200px) { 
        padding:30px;
    } 
    .row1{
        margin:30px 0; 
    }
    .head{ 
        margin-bottom:30px;
        @media (max-width: 600px) { 
            img{
                width: 50%;
            }
         
        }
        h1{ 
            color: #747474; 
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
    }
    .para{
        margin-bottom:30px;
        color: #000;
        text-align: justify;
        font-family: Nunito;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        @media (max-width: 1200px) { 
            font-size: 14px;
        } 
    }
    .mission-con{
        display: flex;
        align-items: center;
        @media (max-width: 1200px) { 
            flex-direction:column
        }
        h2{
            width: 20%;
            color: #F58634;
            font-family: Nunito;
            font-size: 35px;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
            @media (max-width: 1200px) { 
                width: 100%;
                font-size: 16px;
                margin-bottom:10px;
            }
            span{
                color: #747474;
            }
        }
        div{
            width: 80%; 
            border-radius: 30px;
            background: #F58634; 
            padding: 30px;
            @media (max-width: 1200px) { 
                width: 100%;
                padding:10px;
            }
            .row{
                display: flex;  
                @media (max-width: 1200px) { 
                    flex-direction: column;
                }
                h3{
                    width: 20%;
                    color: #FFF; 
                    font-family: Nunito;
                    font-size: 25px;
                    font-style: normal;
                    font-weight: 700;
                    line-height: normal;
                    @media (max-width: 1200px) { 
                        width: 100%;
                        font-size: 16px;
                    }
                }
                p{
                    width: 80%;
                    color: #FFF; 
                    font-family: Nunito;
                    font-size: 20px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: normal;
                    @media (max-width: 1200px) { 
                        width: 100%;
                        font-size: 14px;
                    }
                }
            }
        }
    }
`;

export default Mission