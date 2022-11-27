import React, { useState } from 'react'
import styled from 'styled-components'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { useCartContext } from '@/context/CartContext';

export const SingleProduct = ({
  name = 'Red Bull',
  unit_price = 5600,
  stock = 15,
  image = 'https://media.istockphoto.com/id/537022544/es/foto/aluminio-de-rojo-toro-bebida-energética-fondo-helada.jpg?s=612x612&w=0&k=20&c=ysqpWwd4y1REcCcQfI7ULBj9U7ILDjkiYlR_8d7dZec='
}) => {
  const [numberElements, setNumberElements] = useState(0);
  const isMobile = useMediaQuery();
  const {addProduct, cart} = useCartContext();
  const addNumber = () => {
    if ((numberElements + 1) <= stock)
      setNumberElements(numberElements + 1);
  }
  const lessNumber = () => {
    if ((numberElements - 1) >= 0)
      setNumberElements(numberElements - 1);
  }
  const addCartButton = () => {
    addProduct({name, unit_price, stock, image}, numberElements)
  }
  return (
    <MainBoxProduct isMobile={isMobile}>
      <Image src={image} atl="name" />
      <TopBox>
        <Name>
          <h2>
            {name}
          </h2>
        </Name>
        <Price>
          <p>
            ${unit_price}
          </p>
        </Price>
      </TopBox>
      <BotBox>
        <div>
          <Button onClick={() => lessNumber()}>
            -
          </Button>
          <InputNumber value={numberElements} />
          <Button onClick={() => addNumber()}>
            +
          </Button>
        </div>
        <ButtonAddToCart onClick={() => addCartButton()}>
          Add To Cart
        </ButtonAddToCart>
      </BotBox>
    </MainBoxProduct>
  )
}

const MainBoxProduct = styled.div`
  width: ${props => props.isMobile && '400px'};
  height: 600px;
  padding: 20px 15px;
  padding-right: ${props => !props.isMobile && '20px'}
`

const Image = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  object-position: center center;
`

const TopBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 5px;
`

const Name = styled.div`
  color: black;
  h2 {
    font-family: 'Courier New', Courier, monospace;
    font-weight: bold;
    margin: 0;
    font-size: 28px;
    text-transform: uppercase;
  }
`
const Price = styled.div`
  color: black;
  p {
    font-family: 'Courier New', Courier, monospace;
    font-weight: bold;
    margin: 0;
    font-size: 24px;
    padding-right: 5px;
  }
`
const Button = styled.button`
  background-color: rgb(231, 30, 110);
  color: white;
  font-size: 20px;
  padding: 10px;
  border-radius: 50%;
  cursor: pointer;
`
const InputNumber = styled.input`
  background-color: white;
  width: 25px;
  font-size: 20px;
  color: black;
  margin: 0 5px;
  border-radius: 5px;
`

const BotBox = styled.div`
  display: flex;
  justify-content: space-between;
`

const ButtonAddToCart = styled.button`
  cursor: pointer;
  padding: 10px;
  background-color: rgb(231, 30, 110);
  color: white;
  width: 120px;
  font-size: 14px;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif
`