import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Button } from '../Style/Button'
import { useCustomContext } from '../Context'

const HeroSection = () => {
    const {name,image} = useCustomContext();
    const Wrapper = styled.section`
    padding: 9rem 0;
    .hero-data{
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .btn{
        max-width: 16rem;
    }
    .hero-top-data{
        text-transform: uppercase;
        font-weight: 500;
        font-size: 1.5rem;
        color: ${({theme})=>theme.colors.helper};
    }
    .hero-heading{
        text-transform: uppercase;
        font-size: 6.4rem;
    }
    .hero-para{
        margin-top: 1.5rem;
        margin-bottom: 3.4rem;
        max-width: 60rem;
    }
    .hero-image{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    picture{
        text-align: center;
    }
    .image{
        max-width: 80%;
    }

    @media (max-width: ${({theme})=>theme.media.mobile}){
        .grid{
            gap: 7.2rem; 
        }
    }
    `;
  return (
    <Wrapper>
        <div className="container grid grid-two-coloumn">
            <div className="hero-data">
                <p className="hero-top-data">This is me</p>
                <h1 className="hero-heading">{name}</h1>
                <p className="hero-para">
                    I am {name}. A full stack developer, youtuber and freelancer.A full stack developer, youtuber and freelancer.
                </p>
                <Button className="btn hireme-btn">
                    <NavLink to="/contact">hire me</NavLink>
                </Button>
            </div>
            <div className="hero-image">
                <picture>
                    <img src={image} alt="hero" className='image'/>
                </picture>
            </div>
        </div>

    </Wrapper>
  )
}

export default HeroSection