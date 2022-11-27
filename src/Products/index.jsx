import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import products from '@/mockup.json'
import Grid from '@mui/material/Grid';
import { SingleProduct } from './SingleProduct';
import { ModalTemplate } from "@/Modal"

export const Products = () => {
  return (
    <Grid container spacing={2}>
      {products.products.map((product, i) => (
        <Grid key={product.name} item xs={12} md={4} sm={6}>
          <SingleProduct name={product.name} image={product.image} unit_price={product.unit_price} stock={product.stock} />
        </Grid>

      ))
      }
      <ModalTemplate />

    </Grid >
  )
}
