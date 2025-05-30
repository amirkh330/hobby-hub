import useAuthStore from "@/store/authStore";
import {
  CloseButton,
  Divider,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Icon,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { List } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

const Menu = () => {
  const { 
    isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Icon as={List} size={18} onClick={onOpen} />
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bgColor="amir.mainBg" color="amir.common">
          <Flex
            p="4"
            mx="0"
            alignItems="center"
            gap="2"
            justifyContent="space-between"
          >
            {/* <DrawerCloseButton /> */}
            <Icon mx="0" as={CloseButton} onClick={onClose} />
            <Text fontSize={"18px"} fontWeight={600}>
              Hubby Hub
            </Text>
          </Flex>

          <DrawerBody mx="0" textAlign={"right"}>
            <VStack align="start" spacing={4}>
              <Divider borderColor={"amir.primary"} />
              <Link to="/" onClick={onClose} style={{ fontSize: "14px" }}>
                home
              </Link>
              <Link to="#about" onClick={onClose} style={{ fontSize: "14px" }}>
                about us
              </Link>
              <Link
                to="#services"
                onClick={onClose}
                style={{ fontSize: "14px" }}
              >
                service
              </Link>
              <Link
                to="#contact"
                onClick={onClose}
                style={{ fontSize: "14px" }}
              >
                contact us
              </Link>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Menu;
