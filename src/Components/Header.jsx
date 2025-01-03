import React, { useState } from 'react';
import { AppBar, Container, Toolbar, Typography, Box, IconButton, Menu, MenuItem, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { ShoppingCartRounded } from '@mui/icons-material';

const Header = () => {
  const [anchorElNewArrivals, setAnchorElNewArrivals] = useState(null);
  const [anchorElMen, setAnchorElMen] = useState(null);
  const [anchorElWomen, setAnchorElWomen] = useState(null);
  const [mobileMenuAnchor, setMobileMenuAnchor] = useState(null);
  const [mobileSubmenuAnchor, setMobileSubmenuAnchor] = useState(null);
  const [submenuItem, setSubmenuItem] = useState(null);

  // Handlers for "New Arrivals" dropdown
  const handleOpenNewArrivalsMenu = (event) => setAnchorElNewArrivals(event.currentTarget);
  const handleCloseNewArrivalsMenu = () => setAnchorElNewArrivals(null);

  // Handlers for "Men" dropdown
  const handleOpenMenMenu = (event) => setAnchorElMen(event.currentTarget);
  const handleCloseMenMenu = () => setAnchorElMen(null);

  // Handlers for "Women" dropdown
  const handleOpenWomenMenu = (event) => setAnchorElWomen(event.currentTarget);
  const handleCloseWomenMenu = () => setAnchorElWomen(null);

  // Handlers for mobile menu
  const handleOpenMobileMenu = (event) => setMobileMenuAnchor(event.currentTarget);
  const handleCloseMobileMenu = () => setMobileMenuAnchor(null);

  // Handlers for mobile submenu
  const handleOpenSubmenu = (item, event) => {
    setSubmenuItem(item);
    setMobileSubmenuAnchor(event.currentTarget);
  };
  const handleCloseSubmenu = () => setMobileSubmenuAnchor(null);

  return (
    <AppBar position="static" sx={{ backgroundColor: 'black' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo */}
          <img src="/1.png" alt="Logo" style={{ width: '60px', height: '60px', marginRight: '8px' }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            DRIP
          </Typography>

          {/* Desktop Menu */}
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Button sx={{ color: 'white' }} onClick={handleOpenNewArrivalsMenu}>
              New Arrivals
            </Button>
            <Menu
              anchorEl={anchorElNewArrivals}
              open={Boolean(anchorElNewArrivals)}
              onClose={handleCloseNewArrivalsMenu}
            >
              <MenuItem onClick={handleCloseNewArrivalsMenu}>Latest Trends</MenuItem>
              <MenuItem onClick={handleCloseNewArrivalsMenu}>Seasonal Collection</MenuItem>
            </Menu>

            <Button sx={{ color: 'white' }} onClick={handleOpenMenMenu}>
              Men
            </Button>
            <Menu
              anchorEl={anchorElMen}
              open={Boolean(anchorElMen)}
              onClose={handleCloseMenMenu}
            >
              <MenuItem onClick={handleCloseMenMenu}>Jeans</MenuItem>
              <MenuItem onClick={handleCloseMenMenu}>Shirts</MenuItem>
              <MenuItem onClick={handleCloseMenMenu}>Trousers</MenuItem>
            </Menu>

            <Button sx={{ color: 'white' }} onClick={handleOpenWomenMenu}>
              Women
            </Button>
            <Menu
              anchorEl={anchorElWomen}
              open={Boolean(anchorElWomen)}
              onClose={handleCloseWomenMenu}
            >
              <MenuItem onClick={handleCloseWomenMenu}>Jeans</MenuItem>
              <MenuItem onClick={handleCloseWomenMenu}>Shirts</MenuItem>
              <MenuItem onClick={handleCloseWomenMenu}>Trousers</MenuItem>
            </Menu>
            <ShoppingCartRounded sx={{ mt: 1, marginLeft: '1000px'}} />
          </Box>


          {/* Mobile Menu */}
          <Box sx={{ display: { xs: 'flex', md: 'none' }, ml: 'auto' }}>
            <IconButton
              size="large"
              color="inherit"
              onClick={handleOpenMobileMenu}
            >
              <MenuIcon />
              <ShoppingCartRounded sx={{ mx:1,  marginRight: '20px'}} />
            </IconButton>
            <Menu
              anchorEl={mobileMenuAnchor}
              open={Boolean(mobileMenuAnchor)}
              onClose={handleCloseMobileMenu}
              anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
              transformOrigin={{ vertical: 'top', horizontal: 'left' }}
            >
              <MenuItem
                onClick={(event) => handleOpenSubmenu('newArrivals', event)}
              >
                New Arrivals
              </MenuItem>
              <MenuItem
                onClick={(event) => handleOpenSubmenu('men', event)}
              >
                Men
              </MenuItem>
              <MenuItem
                onClick={(event) => handleOpenSubmenu('women', event)}
              >
                Women
              </MenuItem>
              <ShoppingCartRounded sx={{ mt: 1, marginLeft: '1000px'}} />
            </Menu>

            {/* Submenu on right side */}
            <Menu
              anchorEl={mobileSubmenuAnchor}
              open={Boolean(mobileSubmenuAnchor)}
              onClose={handleCloseSubmenu}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'Left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
            >
              {submenuItem === 'newArrivals' && (
                <>
                  <MenuItem onClick={handleCloseSubmenu}>Latest Trends</MenuItem>
                  <MenuItem onClick={handleCloseSubmenu}>Seasonal Collection</MenuItem>
                </>
              )}
              {submenuItem === 'men' && (
                <>
                  <MenuItem onClick={handleCloseSubmenu}>Jeans</MenuItem>
                  <MenuItem onClick={handleCloseSubmenu}>Shirts</MenuItem>
                  <MenuItem onClick={handleCloseSubmenu}>Trousers</MenuItem>
                </>
              )}
              {submenuItem === 'women' && (
                <>
                  <MenuItem onClick={handleCloseSubmenu}>Jeans</MenuItem>
                  <MenuItem onClick={handleCloseSubmenu}>Shirts</MenuItem>
                  <MenuItem onClick={handleCloseSubmenu}>Trousers</MenuItem>
                </>
              )}
              
            </Menu>
           
          </Box>
          
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
