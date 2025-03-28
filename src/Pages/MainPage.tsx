import { Container } from '@mui/material'
import { ProductsList } from '../components/ProductsList'
import { InputData } from '../components/InputData'
export const MainPage = () => {
  return (
    <Container >
      <InputData/>
      <ProductsList/>
    </Container>
  )
}
