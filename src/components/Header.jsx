import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from './Navbar'
import styled from 'styled-components'
// https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmOQYHSuDgwlcYTW-ZBblTLLtO_kwDFmB0_Q&usqp=CAU
// https://st2.depositphotos.com/4035913/6124/i/450/depositphotos_61243733-stock-photo-business-company-logo.jpg
const Header = () => {
  return (
    <>
    <MainHeader>
      <NavLink>
          <img src="https://www.citypng.com/public/uploads/preview/-21602265983dg1gedthiy.png" alt='logo' className='logo'/>
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
  height:10rem;
  width:20rem;
  margin-left: 40px;
}
`;

export default Header