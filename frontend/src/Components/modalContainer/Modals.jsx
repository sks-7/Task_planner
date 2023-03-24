import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  useDisclosure,
} from '@chakra-ui/react';

import { useEffect, useState } from 'react';
import axios from 'axios';

import './modal.css';

const getUserData = async () => {
  let res = await axios.get('http://localhost:9001/user');

  return res.data;
};

export default function Modals() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [alluser, setAllUser] = useState([]);
  const [task, setTask] = useState('');
  const [user, setUser] = useState('');

  // console.log(name);
  // console.log(client);

  const handalAdd = async () => {
    await axios.post('http://localhost:9001/task/new', {
      name: task,
      status: false,

      userName: user || 'no user',
    });
    onClose();
  };

  useEffect(() => {
    getUserData().then((res) => {
      setAllUser(res);
    });
  }, []);
  return (
    <>
      <Button onClick={onOpen} colorScheme="blue">
        Create new Task
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create new Task</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div className="grid_colo">
              <Input
                placeholder="Add Task name"
                onChange={(e) => setTask(e.target.value)}
              />
              <Select
                onChange={(e) => setUser(e.target.value)}
                placeholder="Select User"
              >
                {alluser &&
                  alluser.map((ele) => (
                    <option value={ele.name}>{ele.name}</option>
                  ))}
              </Select>
            </div>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button variant="ghost" colorScheme="teal" onClick={handalAdd}>
              CREATE
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
