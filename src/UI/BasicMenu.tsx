import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { ChevronDown } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { FilterParam, setSortByCategory } from '../redux/slices/productsSlice';

export default function BasicMenu() {
  const dispatch = useDispatch();
  
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (category: string) => {
    const filterParam: FilterParam = {
      searchObj: '',
      category: category,
      sort: ''
    }
    setAnchorEl(null);
    dispatch(setSortByCategory(filterParam));
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        >
        Category <ChevronDown />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}

      >
        <MenuItem onClick={() => handleClose("all")}>all</MenuItem>
        <MenuItem onClick={() => handleClose("electronics")}>electronics</MenuItem>
        <MenuItem onClick={() => handleClose("jewelery")}>jewelery</MenuItem>
        <MenuItem onClick={() => handleClose("men's clothing")}>men's clothing</MenuItem>
        <MenuItem onClick={() => handleClose("women's clothing")}>women's clothing</MenuItem>
      </Menu>
    </div>
  );
}