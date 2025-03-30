import useAuthStore from "@/store/authStore";
import { Box, Flex, Icon, Text, useDisclosure } from "@chakra-ui/react";
import { List, User } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { Login } from "../Login/Login";
import Menu from "../Menu/Menu";

export const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isAuth } = useAuthStore();
  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      bg="amir.secondaryBg"
      color="amir.common"
      p={4}
    >
      <Flex m="0" alignItems="center" gap="2">
        <Menu/>
        <Text>Hubby Hub</Text>
      </Flex>

      {isAuth ? (
        <Box m={0} as={Link} to="/profile">
          <User size={24} />
        </Box>
      ) : (
        <Box onClick={onOpen} m={0}>
          Login
        </Box>
      )}
      <Login isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
    </Flex>
  );
};
