import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { ArrowDownUp } from 'lucide-react';
import {  FilterParam, sortByPrice } from '../redux/slices/productsSlice';
import { useDispatch } from 'react-redux';

const ITEM_HEIGHT = 48;

export default function LongMenu() {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (sort: string) => {
    const filterParam: FilterParam = {
        searchObj: '',
        category: '',
        sort: sort
    }

    setAnchorEl(null);
    if(filterParam.sort.length > 0){
        dispatch(sortByPrice(filterParam));
    }
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
        sx={{ 
            color: "#F3F3F5", 
            '&:hover': {
            backgroundColor: 'rgba(179, 86, 165, 0.2)',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            }
        }}>
         <ArrowDownUp  />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={()=>handleClose('')}
        slotProps={{
          paper: {
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: '20ch',
            },
          },
        }}
      >
          <MenuItem  onClick={() =>handleClose("high")}>
            High to Low
          </MenuItem>

          <MenuItem  onClick={() => handleClose("low")}>
            Low to High
          </MenuItem>
      </Menu>
    </div>
  );
}