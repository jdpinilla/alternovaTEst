import React from 'react';
import styled from 'styled-components';
import { SingleProductCart } from './SingleProductCart';
import { useCartContext } from '@/context/CartContext';
import CloseIcon from '@mui/icons-material/Close';

export const Cart = ({ open, isOpen }) => {
  const { cart } = useCartContext();
  let cartJson = JSON.stringify(cart);
  const file = new Blob([[cartJson], { type: 'text/plain' }])
  const createJson = () => {

  }
  return (
    <MainCart open={open}>
      <CartMenu>
        <StructureCart>
          <TopContainer>
            <Title>
              Cart
            </Title>
            <button onClick={() => isOpen(false)}>
              <CloseIcon className='closeIcon' />
            </button>
          </TopContainer>
          {cart.map((item) => (
            <SingleProductCart key={item.name} name={item.name} unit_price={item.unit_price} stock={item.stock} image={item.image} quantity={item.quantity} />
          ))}
          <ButtonContainer>
            {cart.length > 0 &&(
              <ButtonPay href={URL.createObjectURL(file)} download="newFile.json">
                Go To Pay
              </ButtonPay>
            )}
          </ButtonContainer>
        </StructureCart>
      </CartMenu>
    </MainCart>
  )
}



const MainCart = styled.div`
  z-index: 1;
  background-color: #00000060;
  position: absolute;
  top: 0;
  left: ${(props) => props.open ? 0 : '100%'};
  width: 100%;
  height: 100%;
  
`;

const TopContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 30px;
  .closeIcon {
    color: black;
    font-size: 40px;
    cursor: pointer;
  }
`

const CartMenu = styled.div`
  position: absolute;
  width: 50%;
  height: 100%;
  background-color: white;
  right: 0px;
`

const StructureCart = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  padding: 15px 10px;
`
const Title = styled.h1`
  font-size: 30px;
  color: black;
  text-transform: uppercase;  
`
const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ButtonPay = styled.a`
  border-radius: 10px;
  font-size: 20px;
  font-weight: 500;
  color: white;
  background-color: rgb(231, 30, 110);
  padding: 10px 30px;
  text-transform: uppercase;
  cursor: pointer;
`