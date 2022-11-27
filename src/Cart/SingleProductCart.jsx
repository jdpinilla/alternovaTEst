import React from 'react'
import styled from 'styled-components';
import DeleteIcon from '@mui/icons-material/Delete';
import { useCartContext } from '@/context/CartContext';

export const SingleProductCart = ({
  name = "Test",
  quantity = 3,
  unit_price = 5000,
  image = "https://media.istockphoto.com/id/537022544/es/foto/aluminio-de-rojo-toro-bebida-energética-fondo-helada.jpg?s=612x612&w=0&k=20&c=ysqpWwd4y1REcCcQfI7ULBj9U7ILDjkiYlR_8d7dZec=",
}) => {
  const { removeProduct} = useCartContext();
  return (
    <SingleProductContainer>
      <Image src={image} alt="name" />
      <MidContainer>
        <p>
          {name}
        </p>
        <p>
          {unit_price * quantity}
        </p>
      </MidContainer>
      <button onClick={() => removeProduct(name)}>
        <DeleteIcon className='DeleteIcon' />
      </button>
    </SingleProductContainer>
  )
}

const SingleProductContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
  align-items: flex-start;
  justify-content: space-between;
  padding: 5px 10px;
  margin: 10px 0 ;
  box-shadow: inset 0 -0.1em 3em rgba(0, 0, 0, 0.1), 0 0 0 0px rgb(255, 255, 255),
    0.1em 0.1em 0.5em rgba(0, 0, 0, 0.3);

  .DeleteIcon {
    color: gray;
    cursor: pointer;
    padding: 7px;
    border-radius: 50%;
    background-color: white;
    font-size: 32px;
    margin-right: 20px;
    &:hover {
      background-color:gray;
      color: white;
      transition: background-color 0.5s linear;
    }
  }

`

const Image = styled.img`
  width: 200px;
  height: 100px;
  object-fit: cover;
`

const MidContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  p {
    color: black;
    margin: 0;
  }
`
