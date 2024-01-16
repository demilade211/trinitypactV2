'use client'

import styled from 'styled-components';
import AppLayout from '@/layouts/AppLayout';
import Title from './subcomponents/Title';
import FormSection from './subcomponents/FormSection';

const Contact = () => {
  return (
    <AppLayout>
      <Con>
        <Title /> 
        <FormSection/>
      </Con>
    </AppLayout>
  )
}

const Con = styled.div`  
  width: 100%;    
`;

export default Contact