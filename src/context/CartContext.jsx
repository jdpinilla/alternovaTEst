import React, { useContext, useState } from 'react';
export const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [alertStock, setAlertStock] = useState(false);
  const [textAlert, setTextAlert] = useState('');

  const addProduct = (item, quantity) => {
    let newCart;
    let product = cart.find(product => product.name === item.name);
    if(quantity === 0) return
    if (product) {
      if (product.stock < product.quantity + quantity) {
        setAlertStock(true);
        setTextAlert('Not enough stock')
        return;
      } else {
        product.quantity += quantity;
        product.totalQuantity = product.quantity * product.unit_price;
        newCart = [...cart];
      }
    } else {
      if (item.stock < quantity) {
        setAlertStock(true);
        return;
      } else {
        product = { ...item, quantity: quantity, totalQuantity: quantity * item.unit_price };
        newCart = [...cart, product]
      }
    }
    setCart(newCart)
  }

  const clearCart = () => setCart([]);

  const removeProduct = (name) => setCart(cart.filter(product => product.name !== name));

  return (
    <CartContext.Provider value={{
      clearCart,
      addProduct,
      removeProduct,
      cart,
      alertStock,
      setAlertStock,
      textAlert,
      setTextAlert
    }}>
      {children}
    </CartContext.Provider>
  )
}
