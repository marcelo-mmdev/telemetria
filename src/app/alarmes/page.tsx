"use client";

import React from "react";
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  Image,
  Input,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
} from "@chakra-ui/react";
import { FiAlertTriangle, FiMenu } from "react-icons/fi";
import { MdTv, MdOutlinePersonPin } from "react-icons/md";
import { RiFileExcel2Line } from "react-icons/ri";
import { TbReportSearch } from "react-icons/tb";
import { IconType } from "react-icons";
import { ReactText } from "react";
import Telemetria from "@/components/cardTelemetria";

interface LinkItemProps {
  name: string;
  icon: IconType;
}
const LinkItems: Array<LinkItemProps> = [
  { name: "Telemetria", icon: MdTv },
  { name: "Alarmes", icon: FiAlertTriangle },
  { name: "Planilha", icon: RiFileExcel2Line },
  { name: "PDB", icon: MdOutlinePersonPin },
  { name: "Relatórios", icon: TbReportSearch },
];

export default function Alarmes({ children }: { children: any }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
      <SidebarContent
        bg="#0000FF"
        color="#FFF"
        fontWeight="bold"
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav display={{ base: "flex", md: "none" }} onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }}>
        <Box
          w="100%"
          h="100px"
          display="flex"
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Text ml="20px" fontSize="30px">
            PDBs
          </Text>
          <Input
            minLength={4}
            mr="20px"
            type="text"
            borderRadius="10px"
            h="30px"
            w="20%"
            bg="#FFFFFF"
            color="#000"
            border="1px"
            borderColor="blue.400"
            placeholder="Pesquisar"
          />
        </Box>
        <Box ml="20px">
          <Telemetria />
        </Box>
      </Box>
    </Box>
  );
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex w="100%" p="20px" alignItems="center" justifyContent="center">
        <Image
          boxSize="90px"
          borderRadius={"8px"}
          objectFit="cover"
          src="/equipecao.webp"
          alt="logo"
        />
        <CloseButton
          display={{ base: "flex", md: "none" }}
          onClick={onClose}
          ml="10px"
        />
      </Flex>

      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: ReactText;
}
const NavItem = ({ icon, children, ...rest }: NavItemProps) => {
  return (
    <Link
      href="#"
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "#00008B",
          color: "white",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

interface MobileProps extends FlexProps {
  onOpen: () => void;
}
const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent="flex-start"
      {...rest}
    >
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
      />
      <Flex w="100%" p="20px" alignItems="center" justifyContent="center">
        <Image
          boxSize="50px"
          borderRadius={"8px"}
          objectFit="cover"
          src="/equipecao.webp"
          alt="logo"
        />
      </Flex>
    </Flex>
  );
};
