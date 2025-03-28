import { Input } from '@mui/material';
import BasicMenu from '../../UI/BasicMenu';


export const InputData = () => {
  return (

    <div className='flex space-x-5 justify-center pt-6 pb-20 '>
      <Input className='w-96' placeholder='Search Product' />
      <BasicMenu/>
    </div>
  )
}
