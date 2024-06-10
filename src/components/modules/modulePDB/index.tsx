import {
  Box,
  Button,
  Divider,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { FaPen, FaWhatsapp } from "react-icons/fa";

export default function ModulePDB() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen}>Contato PDB</Button>

      <Modal
        size="xl"
        blockScrollOnMount={false}
        isOpen={isOpen}
        onClose={onClose}
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Contatos</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box>
              <Divider bg={"#000"} h="2px" />
              <Text fontWeight="bold" mt="3px" fontSize={"12px"}>
                PDB
              </Text>
              <Box p="10px" gap="6px" display="flex">
                <Box>
                  <Text fontWeight="bold" fontSize={"10px"}>
                    Nome
                  </Text>
                  <Input variant="filled" placeholder="Murilo Santos" />
                </Box>
                <Box>
                  <Text fontWeight="bold" fontSize={"10px"}>
                    Telefone
                  </Text>
                  <Input variant="filled" placeholder="(81) 98904-4988" />
                </Box>
                <Box>
                  <Text fontWeight="bold" fontSize={"10px"}>
                    Editar
                  </Text>
                  <Button colorScheme="red" variant="solid">
                    <FaPen />
                  </Button>
                </Box>
                <Box>
                  <Text fontWeight="bold" fontSize={"10px"}>
                    WhatsApp
                  </Text>
                  <Button colorScheme="teal" variant="solid">
                    <FaWhatsapp />
                  </Button>
                </Box>
              </Box>
              <Divider bg={"#000"} h="2px" />
              <Text fontWeight="bold" mt="3px" fontSize={"12px"}>
                Telespectador 1
              </Text>
              <Box p="10px" gap="6px" display="flex">
                <Box>
                  <Text fontWeight="bold" fontSize={"10px"}>
                    Nome
                  </Text>
                  <Input variant="filled" placeholder="Murilo Santos" />
                </Box>
                <Box>
                  <Text fontWeight="bold" fontSize={"10px"}>
                    Telefone
                  </Text>
                  <Input variant="filled" placeholder="(81) 98904-4988" />
                </Box>
                <Box>
                  <Text fontWeight="bold" fontSize={"10px"}>
                    Editar
                  </Text>
                  <Button
                    // leftIcon={<EmailIcon />}
                    colorScheme="red"
                    variant="solid"
                  >
                    <FaPen />
                  </Button>
                </Box>
                <Box>
                  <Text fontWeight="bold" fontSize={"10px"}>
                    WhatsApp
                  </Text>
                  <Button
                    // leftIcon={<EmailIcon />}
                    colorScheme="teal"
                    variant="solid"
                  >
                    <FaWhatsapp />
                  </Button>
                </Box>
              </Box>
              <Divider bg={"#000"} h="2px" />
              <Text fontWeight="bold" mt="3px" fontSize={"12px"}>
                Telespectador 2
              </Text>
              <Box p="10px" gap="6px" display="flex">
                <Box>
                  <Text fontWeight="bold" fontSize={"10px"}>
                    Nome
                  </Text>
                  <Input variant="filled" placeholder="Murilo Santos" />
                </Box>
                <Box>
                  <Text fontWeight="bold" fontSize={"10px"}>
                    Telefone
                  </Text>
                  <Input variant="filled" placeholder="(81) 98904-4988" />
                </Box>
                <Box>
                  <Text fontWeight="bold" fontSize={"10px"}>
                    Editar
                  </Text>
                  <Button
                    // leftIcon={<EmailIcon />}
                    colorScheme="red"
                    variant="solid"
                  >
                    <FaPen />
                  </Button>
                </Box>
                <Box>
                  <Text fontWeight="bold" fontSize={"10px"}>
                    WhatsApp
                  </Text>
                  <Button
                    // leftIcon={<EmailIcon />}
                    colorScheme="teal"
                    variant="solid"
                  >
                    <FaWhatsapp />
                  </Button>
                </Box>
              </Box>
            </Box>
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
