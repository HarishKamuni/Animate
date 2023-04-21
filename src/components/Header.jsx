import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from './Navbar'
import styled from 'styled-components'

const Header = () => {
  return (
    <>
    <MainHeader>
      <NavLink>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmOQYHSuDgwlcYTW-ZBblTLLtO_kwDFmB0_Q&usqp=CAU" alt='logo' className='logo'/>
      </NavLink>
      <Navbar/>
    </MainHeader>
    </>
    
  )
}

const MainHeader = styled.header`
paddind: 0 4.8rem;
height:10rem;
background-color: ${({theme})=>theme.colors.bg};
display:flex;
justify-content: space-between;
align-items: center;

.logo{
  height:5rem;
  width:360%;
}
`;

export default Header