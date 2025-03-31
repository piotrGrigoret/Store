import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { Button,  Rating,  Tooltip } from '@mui/material';
import { ShoppingCart } from 'lucide-react';
import { useEffect, useState } from 'react';
import BasicModal from '../../UI/BasicModal';
import { CircleCheck } from 'lucide-react';
import { CircleX } from 'lucide-react';
import { selectProducts, setCart, setRemoveFromCart,  type Product } from '../../redux/slices/productsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
interface ProductCardProps {
  product: Product
}

export default function ProductCard({product}: ProductCardProps) {
  const location = useLocation();
  const [open, setOpen] = useState<boolean>(false);
  const [isRepeatInCard, setIsRepeatInCard] = useState(false);
  const dispatch = useDispatch();
  const {cart} = useSelector(selectProducts);
  
  useEffect(() =>{
    if(cart.some(s => s.id === product.id)){
      setIsRepeatInCard(true);
    }
  }, [])
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleSetCart = () => {
    const isRepeat = cart.some(s => s.id === product.id);
    if(!isRepeat){
      setIsRepeatInCard(true);
      dispatch(setCart(product));
    }
  }

  const handleRemoveCart = () => {
    dispatch(setRemoveFromCart(product));
  }
  return (
    <Card className='flex items-center justify-center flex-col'>
      <Tooltip title="Open">
      <CardActionArea onClick={handleOpen}>
        <CardMedia
          component="img"
          className="w-full p-4 h-[200px]"
          sx={{
            transition: "0.3s",
            objectFit: "contain",
            borderRadius: "10px",  
          }}
          image={product.image}
          alt="product"
        />
        <CardContent>
        <Typography 
            variant="body2" 
            className='text-secondaryDark line-clamp-1 overflow-hidden text-ellipsis'
            sx={{ fontFamily: 'Montserrat, sans-serif', fontWeight:'600', fontSize:'20px'}}  
          >
            {product.price} $
          </Typography>
          <Typography 
          gutterBottom variant="h5" 
          className='text-primaryLight  line-clamp-2 h-16 mt-1 overflow-hidden text-ellipsis' component="div"
          sx={{ fontFamily: 'Montserrat, sans-serif', fontWeight:'500'}}
          >
            {product.title}
          </Typography>
          <Rating 
            sx={{ color: "#F3F3F5",   "& .MuiRating-iconEmpty": {
              color: "#FFFFFF", 
            }, }} 
            className='mt-1' name="read-only" value={Number(product.rating.rate)} readOnly 
          />
        </CardContent>
        
      </CardActionArea>
      </Tooltip>
      {location.pathname === '/cart' ?
      <Tooltip title="Remove" onClick={handleRemoveCart}>
        <Button className='w-full flex justify-center'>
          <CircleX className="h-10 w-8  text-white"/>
        </Button>    
      </Tooltip>
      :
      <Tooltip 
        title={isRepeatInCard ? "In cart" : "Add to cart"}
        onClick={handleSetCart}
      >
        <Button className='w-full flex justify-center'>
          {isRepeatInCard ?
            <CircleCheck className="h-10 m-auto w-8 text-white" />
            :
            <ShoppingCart  className="h-10 w-8  text-white"/>
          }
        </Button>    
      </Tooltip>
      }
      <BasicModal open={open} handleClose={handleClose} modalProduct={product}  />
    </Card>
  );
}