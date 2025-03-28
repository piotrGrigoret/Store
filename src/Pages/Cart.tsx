import { Container } from '@mui/material'
import { ProductsList } from '../components/ProductsList'
import { ShoppingCart } from 'lucide-react';

export const Cart = () => {
  return (
    <Container>
      <div className='flex justify-end gap-3 font-semibold mb-8'>Your Cart<ShoppingCart/></div>
      <ProductsList/>      
    </Container>
  )
}
