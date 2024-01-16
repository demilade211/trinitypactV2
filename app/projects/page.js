'use client'

import styled from 'styled-components';
import AppLayout from '@/layouts/AppLayout';
import Title from './subcomponents/Title';
import Listings from './subcomponents/Listings';

const Projects = () => {
    return (
        <AppLayout>
            <Con>
                <Title /> 
                <Listings/>
            </Con>
        </AppLayout>
    )
}

const Con = styled.div`  
  width: 100%;    
`;


export default Projects