import useAuthStore from "@/store/authStore";
import { IEventDetail } from "@/types/responses/ResponsesTypes";
import { useDisclosure } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export const useFooterByPrice = () => {
  const { isAuth } = useAuthStore();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const handlePayment = () => {
    if (isAuth) {
      navigate("reserve");
    } else {
      onOpen();
    }
  };

  return { handlePayment, isOpen, onOpen, onClose };
};
