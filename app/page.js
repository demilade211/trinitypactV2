'use client'

import styled from 'styled-components';
import AppLayout from '@/layouts/AppLayout';
import HeroSection from './subcomponents/HeroSection';
import AboutUs from './subcomponents/AboutUs';
import Service from './subcomponents/Services';
import CardsSection from './subcomponents/CardsSection';
import Listings from './subcomponents/Listings';
import Testimony from './subcomponents/Testimony';
import Discover from './subcomponents/Discover';

export default function Home() {
  return (
    <AppLayout>
      <Con>
        <HeroSection />
        <AboutUs />
        <Service />
        <CardsSection />
        <Listings />
        <Testimony />
        <Discover/>
      </Con>
    </AppLayout>

  )
}

const Con = styled.div`  
  width: 100%;    
`;