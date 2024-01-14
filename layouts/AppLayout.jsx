import React from 'react'
import styled from 'styled-components';
import Navbar from "../components/Navbar"
import Footer from '../components/Footer';
import Head from "next/head";

const AppLayout = ({ children }) => {
  return (
    <Con>
      {/* <Head> 
        <link rel="icon" href="/fav.svg" />
      </Head> */}
      <Navbar />
      {children}
      <Footer />
    </Con>
  )
}

const Con = styled.div`  
  width: 100%;    
`;

export default AppLayout