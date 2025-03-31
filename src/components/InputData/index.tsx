import { Input } from '@mui/material';
import BasicMenu from '../../UI/BasicMenu';
import { useDispatch } from 'react-redux';
import { AppDispatch } from "../../redux/store";
import {  FilterParam, setsearchedParameters } from '../../redux/slices/productsSlice';
import LongMenu from '../../UI/LongMenu';


export const InputData = () => {
  const dispath = useDispatch<AppDispatch>();

  const handleChangeParameters = (e: React.ChangeEvent<HTMLInputElement>) =>{
    const filterParam: FilterParam = {
      searchObj: e.target.value,
      category: "",
      sort: ""
    }
    dispath(setsearchedParameters(filterParam));
  }
  return (
    <div className='flex flex-col space-y-5  items-center justify-center pt-6 pb-20 '>
      <Input 
      className='lg:w-96 ' 
      placeholder='Search Product' 
      onChange={handleChangeParameters} />
      <div className='flex gap-3'><BasicMenu/> <LongMenu/></div>
    </div>
  )
}
