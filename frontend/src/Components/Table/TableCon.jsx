import React from 'react';
import { AiOutlineStar } from 'react-icons/ai';
import { BsThreeDotsVertical } from 'react-icons/bs';
import {
  Table,
  Thead,
  Tbody,
  Box,
  Tr,
  Th,
  Td,
  TableContainer,
  Checkbox,
} from '@chakra-ui/react';

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Button,
  Text,
} from '@chakra-ui/react';

import { useEffect, useState } from 'react';
import axios from 'axios';

// import './modal.css'

export const getTaskData = async () => {
  let res = await axios.get('http://localhost:9001/task');

  return res.data;
};

const TableCon = () => {
  const [allTask, setAllTask] = useState([]);

  useEffect(() => {
    getTaskData().then((res) => {
      setAllTask(res);
    });
  }, [allTask]);

  const handleDelete = async (id) => {
    let res = await axios.delete(`http://localhost:9001/task/${id}`);
    getTaskData().then((res) => {
      setAllTask(res);
    });
  };

  return (
    <>
      <Box bg="aliceblue" h="30" w="100%" color="grey">
        <Text fontSize="md" px={5}>
          Tasks
        </Text>
      </Box>

      <TableContainer>
        <Table variant="striped" colorScheme="#e8f5fd">
          <Thead>
            <Tr>
              <Th>
                <Checkbox mt={3} px={5}></Checkbox>
              </Th>
              <Th>TASK</Th>
              <Th>Assined user</Th>

              <Th>Created Time</Th>

              <Th>EDIT</Th>
            </Tr>
          </Thead>
          <Tbody>
            {allTask &&
              allTask.map((ele) => (
                <Tr bg={'#e8f5fd'}>
                  <Td>
                    <Checkbox mt={3} px={5}></Checkbox>
                  </Td>
                  <Td>{ele.name}</Td>
                  <Td>{ele.userName}</Td>

                  <Td>{ele.createdAt}</Td>
                 
                 
                  <Td>
                    <Popover>
                      <PopoverTrigger>
                        <Button>
                          <BsThreeDotsVertical pr="-20px" />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent>
                        <PopoverArrow />
                        <PopoverCloseButton />
                        <PopoverHeader>select</PopoverHeader>
                        <PopoverBody>Set as Template</PopoverBody>
                        <PopoverBody
                          style={{ cursor: 'pointer' }}
                          _hover={{ background: 'red', color: 'white' }}
                          onClick={() => handleDelete(ele._id)}
                        >
                          Done
                        </PopoverBody>
                      </PopoverContent>
                    </Popover>
                  </Td>
                </Tr>
              ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default TableCon;
