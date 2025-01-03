import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
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

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElDropdown, setAnchorElDropdown] = useState(null); // Manage dropdown state
  // const navigate = useNavigate();

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

  const handleDropdownOpen = (event) => {
    setAnchorElDropdown(event.currentTarget);
  };

  const handleDropdownClose = () => {
    setAnchorElDropdown(null);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: `black` }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img
            src="/1.png"
            alt=""
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

          {/* Responsive Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={(e) => setAnchorElNav(e.currentTarget)}
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
                  {dropdownItems[page] ? (
                    <Button onClick={handleDropdownOpen} sx={{ color: 'black' }}>
                      {page}
                    </Button>
                  ) : (
                    <Typography textAlign="center">{page}</Typography>
                  )}
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
                      onClick={handleDropdownOpen}
                      sx={{ my: 2, color: 'white', display: 'block' }}
                    >
                      {page}
                    </Button>
                    <Menu
                      anchorEl={anchorElDropdown}
                      open={Boolean(anchorElDropdown)}
                      onClose={handleDropdownClose}
                      anchorOrigin={{
                        vertical: 'top',
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
                          onClick={() => {
                            // navigate(item.link);
                            handleDropdownClose();
                          }}
                        >
                          {item.label}
                        </MenuItem>
                      ))}
                    </Menu>
                  </>
                ) : (
                  <Button
                    // onClick={() => navigate(`/${page.toLowerCase()}`)}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                  >
                    {page}
                  </Button>
                )}
              </React.Fragment>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open cart">
              <IconButton sx={{ p: 0 }}>
                <ShoppingCartIcon sx={{ fontSize: 30, color: `white` }} />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
