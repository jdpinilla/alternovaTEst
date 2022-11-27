import React from 'react'
import styled from 'styled-components'
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { useCartContext } from '@/context/CartContext';

export const ModalTemplate = ({}) => {
  const {alertStock, setAlertStock, textAlert} = useCartContext();
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    color: 'black',
    p: 4,
  };
  return (
    <Modal
      open={alertStock}
      onClose={() => setAlertStock(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        Not enough Stock
      </Box>
    </Modal>
  )
}

const ModalContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`