import { Box } from '@chakra-ui/react';
import React from 'react';
import './sidebar.css';
import { FaUserCircle } from 'react-icons/fa';
import { BsPrinter } from 'react-icons/bs';

import { GoFile } from 'react-icons/go';

import { useNavigate } from 'react-router-dom';

const SideBar = () => {
  const navigate = useNavigate();

  function Task() {
    navigate('/');
  }
  function User() {
    navigate('/user');
  }
  function Sprint() {
    navigate('/sprint');
  }

  return (
    <div>
      <Box className="mainbox">
        <h1 className="sideh12">MANAGE</h1>

        <Box className="boxside" onClick={Task}>
          <div className="divside">
            <GoFile className="sideicon" />
          </div>
          <div className="divside1">
            <h1 className="sideh1">Tasks</h1>
          </div>
        </Box>

        <Box className="boxside" onClick={User}>
          <div className="divside">
            <FaUserCircle className="sideicon" />
          </div>
          <div className="divside1">
            <h1 className="sideh1">Users</h1>
          </div>
        </Box>
        <Box className="boxside" onClick={Sprint}>
          <div className="divside">
            <BsPrinter className="sideicon" />
          </div>
          <div className="divside1">
            <h1 className="sideh1">Sprint</h1>
          </div>
        </Box>
      </Box>
    </div>
  );
};

export default SideBar;
