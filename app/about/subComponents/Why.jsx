'use client'

import styled from 'styled-components';

const Why = () => {
  return (
    <Con>
      <div className='mission-con'>
        <h2>Why Choose<span> TPL?</span></h2>
        <div>
          <div className='row'>
            <h3>1. GlobalPresence</h3>
            <p>
              TPL operates on a global scale, it bring added benefits such as diverse expertise,
              international market insights, and the ability to handle projects on a larger scale.
            </p>
          </div>
          <div className='row'>
            <h3>2. Innovative Solution</h3>
            <p>
              TPL stand out for its commitment to innovation. They continuously adopt and implement
              cutting-edge approaches, it could be a significant advantage for clients seeking
              forward-thinking solutions.
            </p>
          </div>
          <div className='row'>
            <h3>3. Proven Track Record</h3>
            <p>
              TPL has demonstrated a consistent track record of success in their industry.
              Their history of delivering quality services showcases reliability and competence.
            </p>
          </div>
          <div className='row'>
            <h3>4. Customer Centric Approach</h3>
            <p>
              A customer-centric focus is crucial. TPL places a high value on customer satisfaction,
              it can lead to a positive experience for clients, ensuring their needs are understood
              and met effectively.
            </p>
          </div>
          <div className='row'>
            <h3>5. Reputation & Reviews</h3>
            <p>
              Positive reviews and a strong reputation within the industry can be indicative of TPL's
              credibility. Researching client testimonials and industry feedback can provide valuable
              insights into their performance and client satisfaction.
            </p>
          </div>
          <div className='row'>
            <h3>6. Comprehensive Services</h3>
            <p>
              TPL's range of services align with specific needs. They offer a comprehensive suite of
              products that cater to various requirements, it can be advantageous for clients looking
              for a one-stop solution.
            </p>
          </div>
          <div className='row'>
            <h3>7. Financial Stability</h3>
            <p>
              Assessing TPL's financial stability is crucial for long-term partnerships. A financially
              sound company is more likely to weather economic fluctuations and fulfill its commitments.
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

export default Why