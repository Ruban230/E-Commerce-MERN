import { Box } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <div className="container">
      <Box
        sx={{
          overflow: 'hidden',
          objectFit: 'cover',
          width: '100%',
          height:{xs: `auto`, width: `100%`}
        }}
      >
        <Link to='men-arrival'>
        <img
         
          src="/BannerMen.webp"
          alt="Banner for Men"
          style={{
          cursor: 'pointer',
            width: '100%',
            height: '500px',
            display: 'block',
          }}
        />
        </Link>
      </Box>
      <Box
        sx={{
          marginTop: '10px',
          overflow: 'hidden',
          objectFit: 'cover',
          width: '100%',
          height:{xs: `auto`, width: `100%`}
        }}
      >

      <Link to='women-arrival'>
        <img
          src="/bannerwomen.webp"
          alt="Banner for women"
          style={{
            cursor: 'pointer',
            width: '100%',
            height: '500px',
            display: 'block',
          }}
        />
        </Link>
      </Box>

         {/* new arrival  */}
      <Box
        sx={{
          marginTop: '10px',
          overflow: 'hidden',
          objectFit: 'cover',
          width: '100%',
          height:{xs: `auto`, width: `100%`},
        

        }}
      >
     
        <Link to="/arrival">
        <img
          
          src="/bannerarrival.webp"
          alt="Banner for Men"
        
          style={{
            cursor: 'pointer',
            width: '100%',
            height: '500px',
            display: 'block',
          }}
        />
        </Link>
        
      </Box>
    </div>
  );
};

export default Main;
