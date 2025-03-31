import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { MoveLeft } from 'lucide-react';
import { Button, Rating } from '@mui/material';
import { Product } from '../redux/slices/productsSlice';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  height:'90%',
  overflow:'auto',
  bgcolor: 'background.paper',
  border: '2px solid background.paper',
  borderRadius:'10px',
  boxShadow: 24,
  p:{xs:1, sm:3} ,
};

const styleTypografy = {
  fontFamily:"montserrat", 
  display:"flex", 
  flexDirection:{ xs: "column", sm: "row"},
  textAlign:{xs: "center", sm: "left"},
  gap:"10px", 
  marginTop:'30px'
}

interface BasicModalProps {
  open: boolean;
  modalProduct: Product;
  handleClose: () => void;
}

const BasicModal: React.FC<BasicModalProps> = ({ open, handleClose, modalProduct }) => {
  
  
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >

      <Box  sx={style}>
      <Button onClick={handleClose} className='absolute'><MoveLeft /></Button> 

        <img className="w-full h-[200px] p-3 object-contain" src={modalProduct.image} alt="" />
        
        <Typography sx={styleTypografy}  variant="h6" component="div">
            <h4 className='text-base text-primaryLight font-medium'>Title:</h4>
            <h6 className='text-base'>{modalProduct.title}</h6>
        </Typography>
        <Typography sx={styleTypografy}  variant="h6" component="div">
            <h4 className='text-base text-primaryLight font-medium'>Price:</h4>
            <h6 className='text-base'>{modalProduct.price}</h6>
        </Typography>
        <Typography sx={styleTypografy}  variant="h6" component="div">
            <h4 className='text-base text-primaryLight font-medium'>Description:</h4>
            <h6 className='text-base'>{modalProduct.description}</h6>
        </Typography>            
        <Typography sx={styleTypografy}  variant="h6" component="div">
            <h4 className='text-base text-primaryLight font-medium'>Category:</h4>
            <h6 className='text-base'> {modalProduct.category}</h6>
        </Typography>            
        <Typography 
          sx={styleTypografy}  
          variant="h6" 
          component="div" 
          className='flex items-center'
        >
            <h4 className='text-base text-primaryLight font-medium'>Rating:</h4>
            <Rating 
               sx={{ color: "#F3F3F5",   "& .MuiRating-iconEmpty": {
                color: "#FFFFFF", 
                }, }} 
                className='mt-1' name="read-only" value={Number(modalProduct.rating.rate)} readOnly 
              />
        </Typography>            

        <Typography sx={styleTypografy}  variant="h6" component="div">
            <h4 className='text-base text-primaryLight font-medium'>Count:</h4>
            <h6 className='text-base'> {modalProduct.rating.count}</h6>
        </Typography>            

        
      </Box>
    </Modal>
  );
};

export default BasicModal;
