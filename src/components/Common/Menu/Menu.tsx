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
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isHost } = useAuthStore();
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
              جورچین
            </Text>
          </Flex>

          <DrawerBody mx="0" textAlign={"right"}>
            <VStack align="start" spacing={4}>
              <Link
                to={isHost ? "/panel/events" : "/panel/login"}
                onClick={onClose}
                style={{ fontSize: "14px" }}
              >
                <Text color="amir.primary">ورود به عنوان کافه</Text>
              </Link>
              <Divider borderColor={"amir.primary"} />
              <Link to="/" onClick={onClose} style={{ fontSize: "14px" }}>
                صفحه اصلی
              </Link>
              <Link to="#about" onClick={onClose} style={{ fontSize: "14px" }}>
                درباره ما
              </Link>
              <Link
                to="#services"
                onClick={onClose}
                style={{ fontSize: "14px" }}
              >
                خدمات
              </Link>
              <Link
                to="#contact"
                onClick={onClose}
                style={{ fontSize: "14px" }}
              >
                تماس با ما
              </Link>

              <a
                target="_blank"
                href="https://trustseal.enamad.ir/?id=566974&Code=1Zdbpg9ulLyXKUmt7oOg1yLncx04bbj4"
              >
                <img
                  src="https://trustseal.enamad.ir/logo.aspx?id=566974&Code=1Zdbpg9ulLyXKUmt7oOg1yLncx04bbj4"
                  alt=""
                  //   code="1Zdbpg9ulLyXKUmt7oOg1yLncx04bbj4"
                />
              </a>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Menu;
