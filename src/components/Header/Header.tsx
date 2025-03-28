import { Box, Container, Tooltip } from "@mui/material";
import { Link } from "react-router-dom";
import { ShoppingCart } from 'lucide-react';
import Button from '@mui/material/Button';
import { useLocation } from 'react-router-dom';

export const Header = () => {
  const location = useLocation();

  return (
    <Container>
      <Box className="flex justify-between items-center p-4">
        <Link to={"/"}>
        <Box
          component='img'
          src='/assets/png/logo.png'
          alt='Example'
          className="w-16"
        />
        </Link>
        {location.pathname === "/" &&
        <Tooltip title="Cart">
          <Link to={"/cart"}>
          <Button>
              <ShoppingCart  className="h-10 w-8 text-white" />
          </Button>
          </Link>
        </Tooltip>

        }
      </Box>
    </Container>
  )
}
