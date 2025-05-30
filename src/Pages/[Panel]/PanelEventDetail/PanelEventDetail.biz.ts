import { CallApi } from "@/settings/axiosConfig";
import useAuthStore from "@/store/authStore";
import { useDisclosure, useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const usePanelEventDetail = () => {
  const { eventId } = useParams();
  const [loading, setLoading] = useState<boolean>(false);
  const [loadingBtn, setLoadingBtn] = useState<boolean>(false);
  const [eventItem, setEventItem] = useState<any>();
  const { isAuth } = useAuthStore();
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    setLoading(true);
    CallApi.get(`event/${eventId}`)
      .then(({ data }) => {
        setEventItem(data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleApply = () => {
    if (!isAuth) {
      onOpen();
    } else {
      setLoadingBtn(true);
      CallApi.post(`event/${eventId}/attend/`)
        .then(() => {
          toast({
            title: "attend successful",
            description: "attend event for your successfully",
            status: "success",
            position: "top",
          });
        })
        .finally(() => {
          setLoadingBtn(false);
        });
    }
  };

  return {
    loading,
    eventItem,
    handleApply,
    isOpen,
    onOpen,
    onClose,
    loadingBtn,
  };
};
