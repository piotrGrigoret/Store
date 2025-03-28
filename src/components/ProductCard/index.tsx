import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { Button,  Tooltip } from '@mui/material';
import { ShoppingCart } from 'lucide-react';
import { useState } from 'react';
import BasicModal from '../../UI/BasicModal';
// import { CircleCheck } from 'lucide-react';
// import { CircleX } from 'lucide-react';

export default function ProductCard() {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setOpen(true);
    console.log("henalde open");

  };

  const handleClose = () => {
    setOpen(false);
    console.log(open);
  };

  return (
    <Card className='m-auto max-w-320px'>
      <Tooltip title="Open">
      <CardActionArea onClick={handleOpen}>
        <CardMedia
          component="img"
          className="w-full h-[200px] p-3"
          sx={{
            transition: "0.3s",
            objectFit: "contain",
          }}
          image="/assets/jpg/product2.jpg"
          alt="product"
        />
        <CardContent>
          <Typography 
          gutterBottom variant="h5" 
          className='text-primaryLight  line-clamp-1 overflow-hidden text-ellipsis' component="div"
          sx={{ fontFamily: 'Montserrat, sans-serif', fontWeight:'500'}}
          >
            Lizard
          </Typography>
          <Typography 
            variant="body2" 
            className='text-secondaryDark h-24 line-clamp-5 overflow-hidden text-ellipsis'
            sx={{ fontFamily: 'Montserrat, sans-serif'}}  
          >
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
            e reptiles, with over 6,000
            species, ranging across all continents exe reptiles, with over 6,000
            species, ranging across all continents ex
          </Typography>
        </CardContent>
        
      </CardActionArea>
      </Tooltip>
      {/* title="In cart"    title="Remove"*/}
      <Tooltip title="Add to cart">
          <Button className='w-full flex justify-center'>
              <ShoppingCart  className="h-10 w-8  text-white"/>
            {/* <CircleCheck className="h-10 m-auto w-8 text-white" /> */}
            {/* <CircleX className="h-10 w-8  text-white"/> */}

          </Button>    
        </Tooltip>
        <BasicModal open={open} handleClose={handleClose} />
    </Card>
  );
}