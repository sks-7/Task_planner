import React from 'react';

import './modal.css';
import { Flex, Spacer, Text, Box } from '@chakra-ui/react';
import Modals from './Modals';

const TaskHead = () => {
  return (
    <>
      <Flex>
        <Text px={3} mb={5} fontSize="4xl">
          Tasks
        </Text>
        <Spacer />
        <Box px={3} py={5}>
          <Modals />
        </Box>
      </Flex>
    </>
  );
};

export default TaskHead;
