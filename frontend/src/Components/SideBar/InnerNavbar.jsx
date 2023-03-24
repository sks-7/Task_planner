import { Box } from '@chakra-ui/react';
import React from 'react';
import './sidebar.css';
import { BsFillGrid3X3GapFill } from 'react-icons/bs';
import { BiUserCircle } from 'react-icons/bi';

import { Link as RouterLink } from 'react-router-dom';

const InnerNavbar = () => {
  return (
    <div>
      <Box className="mainNav">
        <Box className="mainNav1">
          <BsFillGrid3X3GapFill className="bell" />
          <RouterLink to={'/'}>
            <img
              className="imgk1"
              src="https://cdn-icons-png.flaticon.com/512/906/906334.png"
              alt=""
            />
          </RouterLink>
        </Box>
        <Box className="mainNav1">
          <h1>
            {
              <BiUserCircle
                style={{
                  fontSize: '30px',
                }}
              />
            }
          </h1>
        </Box>
      </Box>
    </div>
  );
};

export default InnerNavbar;
