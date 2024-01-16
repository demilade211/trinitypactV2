'use client'

import React, { useState } from "react";
import styled from 'styled-components';
import Image from 'next/image'
import { useRouter,usePathname } from 'next/navigation'
import Router from "next/router"

const Navbar = () => {
    const [showNav, setShowNav] = useState(false);
    const router = useRouter();
    const pathname = usePathname()

    const isActive = route => pathname === route;
    return (
        <LandingNavbarCon>
            <Bottom>
                <div className="logo">
                    <img src="/images/components/logo.png" alt="img" />
                </div>
                <nav>
                    <ul>
                        <li className={`${isActive("/") && "active"}`} onClick={() => router.push(`/`)}>Home</li>
                        <li className={`${isActive("/about") && "active"}`} onClick={() => router.push(`/about`)}>About Us</li>
                        <li className={`${isActive("/services") && "active"}`} onClick={() => router.push(`/services`)}>Services</li>
                        <li className={`${isActive("/projects") && "active"}`} onClick={() => router.push(`/projects`)}>Projects</li>
                        <li className={`contact ${isActive("/contact") && "active"}`} onClick={() => router.push(`/contact`)}>Contact Us</li>
                    </ul>
                </nav>
                <div className='mobile-right'>
                    <img src="/images/components/ham.svg" alt="img" onClick={() => setShowNav(!showNav)} />
                </div>
                <div className={`mobile-nav ${showNav && "active"}`}>
                    <div className="close" onClick={() => setShowNav(false)} >
                        <img src="/images/components/close.svg" alt="img" onClick={() => setShowNav(!showNav)} />
                    </div>
                    <ul>
                        <li onClick={() => router.push(`/`)}>Home</li>
                        <li onClick={() => router.push(`/about`)}>About</li>
                        <li onClick={() => router.push(`/services`)}>Services</li>
                        <li onClick={() => router.push(`/contact`)}>Contact</li>
                        {/* <li className="flex items-center">
                            <img className="mr-5 cursor-pointer" src="/images/components/insta.svg" alt="img" />
                            <img className="mr-5 cursor-pointer" src="/images/components/twit.svg" alt="img" />
                            <img className="mr-5 cursor-pointer" src="/images/components/fb.svg" alt="img" />
                        </li> */}
                    </ul>
                </div>
            </Bottom>
        </LandingNavbarCon>
    )
}

const LandingNavbarCon = styled.header`
    width:100%;   
    background: #E7E7E7;
`;



const Bottom = styled.div`
    width:100%;   
    height: 100%;
    padding: 10px 90px; 
    display: flex;
    justify-content: space-between;
    align-items: center;   
    @media (max-width: 1200px) { 
        padding: 5px 30px; 
    }
    .logo{
        width: 75px;
        height: 75px; 
        img{
            width: 100%;
            height: 100%;
        }
    }
    nav{
        @media (max-width: 1200px) { 
            display:none; 
        }
        ul{
            display: flex;
            align-items: center;
            li{
                list-style-type:none;
                margin:0 40px;
                color: #090808;
                text-align: center; 
                font-size: 18px;
                font-style: normal;
                font-weight: 700;
                line-height: normal;
                cursor: pointer;
                &:hover {
                    border-radius: 10px;
                    background: #F58634;
                    color: #FFF; /* Remove background color on hover */ 
                    padding: 15px 20px; 
                    transition: 200ms ease-in;
                } 
                
            }
            .contact{
                border-radius: 10px;
                border: 1px solid #F58634;
                padding: 15px 20px;
            }
            .active{
                border-radius: 10px;
                background: #F58634;
                color: #FFF; /* Remove background color on hover */ 
                padding: 15px ; 
            }
        }
    }
    .mobile-right{
        display:none;
        img{
            margin-left:30px;
        }
        @media (max-width: 1200px) { 
            display:flex;
            align-items:center; 
        }
    }
    .mobile-nav{ 
        position: absolute;
        width: 100%;
        top: -100%; /* Start above the viewport */
        left: 0;
        display: block; /* Change to 'none' when you want to hide it */ 
        border: 0.5px solid rgba(255, 255, 255, 0.04);
        background:#E7E7E7;
        padding: 20px 50px;
        opacity: 0; /* Start fully transparent */
        transition: 900ms ease-in;
        transform: translateY(0); /* Start at the original position */ 
        z-index:5;
        &.active {
            /* Add a class 'active' when you want to show the navigation */
            top: 0; /* Move it to the original position */
            opacity: 1; /* Make it fully visible */
            transform: translateY(0); /* Ensure it's at the original position */
        }
        .close{
            display:flex;
            justify-content:flex-end;
            align-items:center;
            margin-bottom:40px;
        }
        ul{
            li{
                text-align:left;
                list-style-type:none;
                margin-bottom:30px;
                color: #F58634; 
                font-size: 18px;
                font-style: normal;
                font-weight: 700;
                line-height: normal;
            }
            .contact{
                border-radius: 10px;
                border: 1px solid #F58634;
                padding: 20px 40px;
            }
        }
        @media (max-width: 1200px) { 
            display:block;  
        }
    }
`;

const NavButton = styled.button` 
    width: 172px;
    height: 44px;   
    padding: 10px 24px;
    border-radius: 4px;
    border:none;
    background: linear-gradient(270deg, #903AFF 0%, #D434FE 56.42%, #FF26B9 99.99%, #FE34B9 100%); 
    line-height: normal;
    margin-left:30px; 
    color: #FFF;
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 400; 
    cursor:pointer;
    &:hover {
        background: none; /* Remove background color on hover */
        border: 2px solid #9A39FF; /* Add border on hover */
        color: #FFF; /* Text color on hover */
      }
    @media (max-width: 1200px) { 
        margin-left:0px;  
    }
`;

export default Navbar