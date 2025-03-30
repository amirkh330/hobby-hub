import { CallApi } from "@/settings/axiosConfig";
import { Box, useDisclosure, useToast } from "@chakra-ui/react";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import useAuthStore from "@/store/authStore";
import { Login } from "../Login/Login";
import { log } from "node:console";

export const Layout = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { logout, login, isAuth } = useAuthStore();
  const navigate = useNavigate();
  const toast = useToast();
  useEffect(() => {
    CallApi.get(`/me`)
      .then(( res : any) => {
        !isAuth && login(res.data.isHost);
      })
      .catch((error) => {
        if (error.status == 401) {
          logout();
          // navigate("/");
          // onOpen();
          // toast({
          //   description: "لطفا وارد شوید",
          //   status: "info",
          //   duration: 2000,
          //   position: "top",
          // });
        }
      });
  }, []);
  return (
    <Box maxWidth="400px" width="100%" bg="amir.mainBg" height="100dvh">
      <Header />
      {/* <Box mx="auto" height="calc(100dvh - 56px)"> */}
      <Outlet />
      {isOpen && <Login isOpen={isOpen} onOpen={onOpen} onClose={onClose} />}

      {/* </Box> */}
    </Box>
  );
};
