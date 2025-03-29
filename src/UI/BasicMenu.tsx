import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { ChevronDown } from 'lucide-react';

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
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
        <MenuItem onClick={handleClose}>electronics</MenuItem>
        <MenuItem onClick={handleClose}>jewelery</MenuItem>
        <MenuItem onClick={handleClose}>men's clothing</MenuItem>
        <MenuItem onClick={handleClose}>women's clothing</MenuItem>
      </Menu>
    </div>
  );
}