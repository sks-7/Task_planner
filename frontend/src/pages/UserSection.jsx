import {
  Box,
  Button,
  Flex,
  Input,
  Table,
  TableContainer,
  Text,
  Th,
  Thead,
  Tr,
  Tbody,
  Td,
  VStack,
} from '@chakra-ui/react';

import { BsThreeDotsVertical } from 'react-icons/bs';

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import axios from 'axios';

import InnerNavbar from '../Components/SideBar/InnerNavbar';
import SideBar from '../Components/SideBar/SideBar';

const getUserData = async () => {
  let res = await axios.get('https://exuberant-pantyhose-moth.cyclic.app/user');

  return res.data;
};

function UserSection() {
  const [user, setUser] = useState('');
  const [allUser, setAllUser] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    getUserData().then((res) => {
      setAllUser(res);
    });
  }, []);

  const handalAdd = async () => {
    await axios.post('https://exuberant-pantyhose-moth.cyclic.app/user/new', {
      name: user,
    });

    getUserData().then((res) => {
      setAllUser(res);
    });
  };

  const handleDelete = async (id) => {
    let res = await axios.delete(`https://exuberant-pantyhose-moth.cyclic.app/user/${id}`);
    getUserData().then((res) => {
      setAllUser(res);
    });
  };

  return (
    <>
      <Box>
        <InnerNavbar />
      </Box>
      <div style={{ display: 'flex' }}>
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
          <div>
            <Text fontSize="xl" mb={30} px="4" py="4">
              User
            </Text>

            <Flex justifyContent="space-between">
              <div style={{ display: 'flex' }}>
                <Input
                  placeholder="Search by name"
                  htmlSize={8}
                  width="150px"
                  mr={600}
                  onChange={(event) => {
                    setSearch(event.target.value);
                  }}
                />
              </div>
              <div>
                <Input
                  name="user"
                  onChange={(e) => setUser(e.target.value)}
                  placeholder="Add new user"
                  htmlSize={12}
                  width="150px"
                  mr="15px"
                />
                <Button
                  colorScheme="blue"
                  px="10"
                  py="10px"
                  onClick={handalAdd}
                >
                  Add
                </Button>
              </div>
            </Flex>

            <Box bg="aliceblue" h="30" w="100%" color="grey" mt={30}>
              <TableContainer>
                <Table variant="striped" colorScheme="#e8f5fd">
                  <Thead>
                    <Tr>
                      <Th>NAME</Th>
                      <Th>Delete User</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {allUser &&
                      allUser
                        .filter((ele) => {
                          if (search === '') {
                            return ele;
                          } else if (
                            ele.name
                              .toLowerCase()
                              .includes(search.toLowerCase())
                          ) {
                            return ele;
                          }
                        })
                        .map((ele) => (
                          <Tr bg={'#e8f5fd'}>
                            <Td>{ele.name}</Td>
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
                                  <PopoverHeader>
                                    select to Delete
                                  </PopoverHeader>

                                  <PopoverBody display={'block'}>
                                    <VStack spacing={2}>
                                      <Button
                                        width={'100%'}
                                        _hover={{
                                          background: 'red',
                                          color: 'white',
                                        }}
                                        onClick={() => handleDelete(ele._id)}
                                      >
                                        Delete
                                      </Button>
                                    </VStack>
                                  </PopoverBody>
                                </PopoverContent>
                              </Popover>
                            </Td>
                          </Tr>
                        ))}
                  </Tbody>
                </Table>
              </TableContainer>
            </Box>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserSection;
