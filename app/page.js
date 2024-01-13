'use client'

import styled from 'styled-components';
import AppLayout from '@/layouts/AppLayout';
import HeroSection from './subcomponents/HeroSection';

export default function Home() {
  return (
    <AppLayout>
      <Con>
        <HeroSection/>
      </Con>
    </AppLayout>

  )
}

const Con = styled.div`  
  width: 100%; 
  height: 100vh;
  border: 1px solid black;
  p{
    color: #F58634; 
    font-size: 70px;
    font-style: normal;
    font-weight: 900;
    line-height: normal; 
  }
`;