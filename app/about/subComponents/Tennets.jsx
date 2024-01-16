'use client'

import styled from 'styled-components';

const Tennets = () => {
  return (
    <Con>
      <div className='mission-con'>
        <h2>Our <span>Tenets</span></h2>
        <div>
          <div className='row'>
            <h3>1. Innovation</h3>
            <p>
              Embrace creativity and forward-thinking to constantly evolve and deliver cutting-edge
              real estate solutions that surpass expectations.
            </p>
          </div>
          <div className='row'>
            <h3>2. Integrity</h3>
            <p>
              Uphold the highest standards of honesty and transparency in all our dealings, ensuring
              trust and credibility with our clients and partners.
            </p>
          </div>
          <div className='row'>
            <h3>3. Community Focus</h3>
            <p>
              Act as a responsible corporate citizen, actively contributing to the betterment of the
              communities in which we operate.
            </p>
          </div>
          <div className='row'>
            <h3>4. Client Centric</h3>
            <p>
              Approach: Prioritize the needs and satisfaction of our clients, going above and beyond to
              deliver personalized and exceptional services
            </p>
          </div>
          <div className='row'>
            <h3>5. Sustainability</h3>
            <p>
              Commit to environmentally conscious practices in our developments, promoting eco-friendly
              and sustainable solutions for a greener future.
            </p>
          </div>
          <div className='row'>
            <h3>6. Employee Empowerment</h3>
            <p>
              Cultivate a positive and inclusive work environment that encourages the professional growth
              and well-being of our team, recognizing their role as key contributors to our success.
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
    margin-bottom:20px;
    @media (max-width: 1200px) { 
        padding:30px;
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
            background: #747474;; 
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
                    width: 30%;
                    color: #FFF; 
                    font-family: Nunito;
                    font-size: 22px;
                    font-style: normal;
                    font-weight: 700;
                    line-height: normal;
                    margin-right:20px;
                    @media (max-width: 1200px) { 
                        width: 100%;
                        font-size: 16px;
                    }
                }
                p{
                    width: 70%;
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

export default Tennets