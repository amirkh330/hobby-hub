import { CallApiHost } from "@/settings/axiosConfig";
import { IGamer } from "@/types/responses/ResponsesTypes";
import { useToast } from "@chakra-ui/react";
import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";

export const usePanelGame = () => {
  const [scanVisible, setScanVisible] = useState(false);
  const [guestVisible, setGuestVisible] = useState(false);
  const [guestPhoneNumber, setGuestPhoneNumber] = useState("");
  const [loading, setLoading] = useState(true);
  const [loadingButton, setLoadingButton] = useState(false);
  const [userScanned, setUserScanned] = useState<IGamer>();
  const [gamers, setGamers] = useState<IGamer[]>([]);
  const [data, setData] = useState("");
  const { gameId } = useParams();
  const toast = useToast();

  const senGuest = () => {
    setLoadingButton(true);
    CallApiHost.post(`/game-sessions/${gameId}/participants/_invite_guest`, {
      phoneNumber: guestPhoneNumber,
    })
      .then(({ data }) => {
        setGuestVisible(false);
        setGuestPhoneNumber("");
        toast({
          title: "لینک دعوت با موفقیت ارسال شد!",
          status: "success",
          duration: 3000,
          position: "top",
        });
      })
      .finally(() => {
        setLoadingButton(false);
      });
  };

  useEffect(() => {
    CallApiHost.get(`/game-sessions/${gameId}/participants`)
      .then(({ data }) => setGamers(data))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (!data) return;
    setLoading(true);
    CallApiHost.post(`/game-sessions/${gameId}/participants/_validate`, {
      code: data,
    })
      .then(({ data }) => setUserScanned(data))
      .catch(() =>
        toast({
          title: "کد QR شما نامعتبر است",
          description: "لطفا دوباره امتحان کنید",
          status: "error",
          position: "top",
        })
      )
      .finally(() => {
        setLoading(false);
      });
  }, [data]);

  const handleApprovedScanUser = () => {
    setLoadingButton(true);
    CallApiHost.post(`/game-sessions/${gameId}/participants/_approve`, {
      code: data,
    })
      .then(({ data }) => {
        setData("");
        setUserScanned(undefined);
      })
      .finally(() => {
        setData("");
        setUserScanned(undefined);
        setLoadingButton(false);
      });
  };

  const isDisable = useMemo(() => {
    return (
      gamers?.filter((gamer) => gamer.status === "approved").length ===
      gamers?.length
    );
  }, []);

  return {
    data,
    gamers,
    gameId,
    setData,
    loading,
    senGuest,
    scanVisible,
    userScanned,
    guestVisible,
    loadingButton,
    setUserScanned,
    isDisable,
    setScanVisible,
    setGuestVisible,
    guestPhoneNumber,
    setGuestPhoneNumber,
    handleApprovedScanUser,
  };
};
