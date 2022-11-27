import React from 'react';
import styled from 'styled-components';
import logoAlternova from '@/assets/logoAlternova.png'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useCartContext } from './context/CartContext';

function Navbar({ isOpen }) {
  const { alertStock, setAlertStock } = useCartContext();
  return (
    <MainNavbar>
      <Logo src={logoAlternova} alt="Logo_Alternova" />
      <button onClick={() => isOpen(true)}>
        <ShoppingCartIcon className='ShoppingIcon' />
      </button>
    </MainNavbar>
  )
}

const MainNavbar = styled.nav`

  height: 80px;
  position: sticky;
  padding: 10px 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  top: 0;
  background-color: white;
  box-shadow: inset 0 -0.1em 3em rgba(0, 0, 0, 0.1), 0 0 0 0px rgb(255, 255, 255),
    0.1em 0.1em 0.5em rgba(0, 0, 0, 0.3);

  .ShoppingIcon{
    cursor: pointer;
    font-size: 32px;
    color: rgb(231, 30, 110);
    background-color: #a8a8a8;
    padding: 8px;
    border: 3px solid;
    border-color: #a8a8a8;
    border-radius: 50%;
    &:hover{
    border: 3px solid;
    border-color: #a8a8a8;
    background-color: white;
    transition: background-color 0.5s linear;
    animation-duration: 1s;
    }
  }

`;

const Logo = styled.img`
  height: 20px;
  object-fit: contain;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    opacity: 0.8;
    transition-duration: 1s;
    animation-duration: 1s;
  }
`

export default Navbar