import React from 'react';

import { Box } from '@chakra-ui/react';

import TaskHead from '../Components/modalContainer/TaskHead';

import TableCon from '../Components/Table/TableCon';

import InnerNavbar from '../Components/SideBar/InnerNavbar';
import SideBar from '../Components/SideBar/SideBar';

const TaskPage = () => {
  return (
    <>
      <Box>
        <InnerNavbar />
      </Box>
      <div style={{ display: 'flex', marginTop: '0px' }}>
        <div>
          <SideBar />
        </div>
        <div
          style={{
            background: '#f2f6f8',
            paddingTop: '4rem',
            marginTop: '0px',
            width: '100%',
            paddingLeft: '1rem',
            paddingRight: '1rem',
          }}
        >
          <TaskHead />

          <TableCon />
        </div>
      </div>
    </>
  );
};

export default TaskPage;
