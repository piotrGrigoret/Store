import { Input } from '@mui/material';
import BasicMenu from '../../UI/BasicMenu';
import { useDispatch } from 'react-redux';
import { AppDispatch } from "../../redux/store";
import {  setsearchedParameters } from '../../redux/slices/productsSlice';


export const InputData = () => {
  const dispath = useDispatch<AppDispatch>();

  const handleChangeParameters = (e: React.ChangeEvent<HTMLInputElement>) =>{
    dispath(setsearchedParameters(e.target.value));
  }
  return (
    <div className='flex space-x-5 items-center justify-center pt-6 pb-20 '>
      <Input 
      className='w-96' 
      placeholder='Search Product' 
      onChange={handleChangeParameters} />
      <BasicMenu/>
    </div>
  )
}
