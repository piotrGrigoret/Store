import { Container } from '@mui/material'
import { ProductsList } from '../components/ProductsList'
import { ShoppingCart } from 'lucide-react';
import { useSelector } from 'react-redux';
import { selectProducts } from '../redux/slices/productsSlice';

export const Cart = () => {
  const {cart} = useSelector(selectProducts);  
  return (
    <Container>
      <div className='flex justify-between  font-semibold mb-8 mt-6'>
        <div>Total cost: {cart.reduce((total, item) => total + item.price, 0)}$</div>
        <div className='flex gap-3'>Your Cart<ShoppingCart/></div>
      </div>
      <ProductsList/>      
    </Container>
  )
}
