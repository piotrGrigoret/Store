import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { MoveLeft } from 'lucide-react';
import { Button } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  height:'90%',
  overflow:'auto',
  bgcolor: 'background.paper',
  border: '2px solid #000',
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
  handleClose: () => void;
}

const BasicModal: React.FC<BasicModalProps> = ({ open, handleClose }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >

      <Box  sx={style}>
      <Button onClick={handleClose} className='absolute'><MoveLeft /></Button> 

        <img className="w-full h-[200px] p-3 object-contain" src="/assets/jpg/product2.jpg" alt="" />
        
        <Typography sx={styleTypografy}  variant="h6" component="div">
            <h4 className='text-base text-primaryLight font-medium'>Title:</h4>
            <h6 className='text-base'>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</h6>
        </Typography>
        <Typography sx={styleTypografy}  variant="h6" component="div">
            <h4 className='text-base text-primaryLight font-medium'>Price:</h4>
            <h6 className='text-base'>695</h6>
        </Typography>
        <Typography sx={styleTypografy}  variant="h6" component="div">
            <h4 className='text-base text-primaryLight font-medium'>Description:</h4>
            <h6 className='text-base'> Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everydayYour perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday</h6>
        </Typography>            
        <Typography sx={styleTypografy}  variant="h6" component="div">
            <h4 className='text-base text-primaryLight font-medium'>Category:</h4>
            <h6 className='text-base'> jewelery</h6>
        </Typography>            
        <Typography sx={styleTypografy}  variant="h6" component="div">
            <h4 className='text-base text-primaryLight font-medium'>Rating:</h4>
            <h6 className='text-base'> 4.6</h6>
        </Typography>            

        <Typography sx={styleTypografy}  variant="h6" component="div">
            <h4 className='text-base text-primaryLight font-medium'>Count:</h4>
            <h6 className='text-base'> 200</h6>
        </Typography>            

        
      </Box>
    </Modal>
  );
};

export default BasicModal;
