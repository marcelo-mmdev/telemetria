/* eslint-disable react/jsx-no-undef */
/* eslint-disable @typescript-eslint/no-shadow */
import {
  Button,
  Modal,
  ModalBody,
  Text,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Box,
} from "@chakra-ui/react";

export function ModalCancelamentoEFDReinf(props: any) {
  return (
    <Modal isOpen={props?.isOpen} onClose={props?.onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            mt="20px"
          >
            <Text
              as="b"
              fontSize="34px"
              color="#325F74"
              display="center"
              alignItems="center"
              justifyContent="center"
            >
              Deseja prosseguir com o <br /> cancelamento?
            </Text>
          </Box>
        </ModalHeader>
        <ModalCloseButton bg="#325F74" color="#FFFFFF" w="40px" h="30px" />
        <ModalBody>
          <Box
            display="flex"
            justifyContent="center"
            mt="10px"
            mb="20px"
            alignItems="center"
            gap="10px"
          >
            <Button
              onClick={props?.onClick}
              bg="#D8D8D8"
              color="#FFFFFF"
              w="198px"
              h="48px"
              borderRadius="10px"
            >
              Não
            </Button>
            <Button
              onClick={() => {
                window.location.href = "/reinf";
              }}
              color="#FFFFFF"
              bg="#317A7D"
              _hover={{ bg: "rgba(49, 146, 132, 0.7)" }}
              w="198px"
              h="48px"
              borderRadius="10px"
            >
              Sim
            </Button>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
