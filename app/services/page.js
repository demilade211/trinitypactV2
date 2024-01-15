'use client'

import styled from 'styled-components';
import AppLayout from '@/layouts/AppLayout';
import Title from './subComponents/Title';
import CardsSection from './subcomponents/CardsSection';

const Service = () => {
  return (
    <AppLayout>
      <Con>
        <Title /> 
        <CardsSection/>
      </Con>
    </AppLayout>
  )
}

const Con = styled.div`  
  width: 100%;    
`;

export default Service