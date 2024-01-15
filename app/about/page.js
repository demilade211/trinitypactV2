'use client'

import styled from 'styled-components';
import AppLayout from '@/layouts/AppLayout';
import Title from './subComponents/Title';
import Mission from './subComponents/Mission';
import Tennets from './subComponents/Tennets';
import Why from './subComponents/Why';
import Discover from '../subcomponents/Discover';

const About = () => {
  return (
    <AppLayout>
      <Con>
        <Title />
        <Mission />
        <Tennets/>
        <Why/>
        <Discover/>
      </Con>
    </AppLayout>
  )
}

const Con = styled.div`  
  width: 100%;    
`;

export default About