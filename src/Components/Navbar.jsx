import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElDropdown, setAnchorElDropdown] = useState({});

  const pages = ['New Arrivals', 'Women', 'Men', 'Sale'];
  const dropdownItems = {
    'New Arrivals': [
      { label: 'T-Shirts', link: '/new-arrivals/t-shirts' },
      { label: 'Hoodies', link: '/new-arrivals/hoodies' },
      { label: 'Accessories', link: '/new-arrivals/accessories' },
    ],
    Women: [
      { label: 'Dresses' },
      { label: 'Shoes' },
      { label: 'Accessories' },
    ],
    Men: [
      { label: 'Shirts', link: '/men/shirts' },
      { label: 'Pants', link: '/men/pants' },
      { label: 'Shoes', link: '/men/shoes' },
    ],
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleDropdownOpen = (event, page) => {
    setAnchorElDropdown((prev) => ({ ...prev, [page]: event.currentTarget }));
  };

  const handleDropdownClose = (page) => {
    setAnchorElDropdown((prev) => ({ ...prev, [page]: null }));
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: 'black' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img
            src="/1.png"
            alt="Logo"
            style={{ width: '60px', height: '60px', marginRight: '8px' }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            DRIP
          </Typography>

          {/* Mobile Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  {page}
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Desktop Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <React.Fragment key={page}>
                {dropdownItems[page] ? (
                  <>
                    <Button
                      onClick={(e) => handleDropdownOpen(e, page)}
                      sx={{ my: 2, color: 'white', display: 'block' }}
                    >
                      {page}
                    </Button>
                    <Menu
                      anchorEl={anchorElDropdown[page]}
                      open={Boolean(anchorElDropdown[page])}
                      onClose={() => handleDropdownClose(page)}
                      anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                      }}
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                      }}
                    >
                      {dropdownItems[page].map((item) => (
                        <MenuItem
                          key={item.label}
                          onClick={() => handleDropdownClose(page)}
                        >
                          {item.label}
                        </MenuItem>
                      ))}
                    </Menu>
                  </>
                ) : (
                  <Button
                    sx={{ my: 2, color: 'white', display: 'block' }}
                  >
                    {page}
                  </Button>
                )}
              </React.Fragment>
            ))}
          </Box>

          {/* Icons */}
          <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 0 }}>
            <Typography
              variant="body1"
              sx={{ color: 'white', marginRight: 1, fontWeight: 'bold' }}
            >
              3
            </Typography>
            <Tooltip title="Open cart">
              <IconButton sx={{ p: 0 }}>
                <ShoppingCartIcon sx={{ fontSize: 30, color: 'white' }} />
              </IconButton>
            </Tooltip>
            <Tooltip title="Account">
              <IconButton sx={{ p: 0, marginLeft: 2 }}>
                <AccountCircleIcon sx={{ fontSize: 30, color: 'white' }} />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
