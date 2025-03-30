import { CallApiHost } from "@/settings/axiosConfig";
import { useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const usePanelRate = () => {
  const [loading, setLoading] = useState(true);
  const [rateList, setRateList] = useState<{ [key: string]: number }>({});
  const [gamers, setGamers] = useState<any>([]);

  const [loadingButton, setLoadingButton] = useState(false);
  const navigate = useNavigate();
  const { gameId } = useParams();
  const toast = useToast();
  useEffect(() => {
    CallApiHost.get(`/game-sessions/${gameId}/mafia/gamers`)
      .then(({ data }) => setGamers(data))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleSubmit = () => {
    setLoadingButton(true);
    CallApiHost.post(`/game-sessions/${gameId}/participants/_rate`, rateList)
      .then(() => {
        toast({
          title: "امتیاز دهی با موفقیت انجام شد",
          status: "success",
          duration: 3000,
          position: "top",
        });
        navigate("/panel/events");
      })
      .finally(() => setLoadingButton(false));
  };

  const handleRating = (itemId: string, rateValue: number) => {
    setRateList((_prev) => ({ ..._prev, [itemId]: rateValue }));
  };
  return {
    loading,
    loadingButton,
    handleRating,
    handleSubmit,
    rateList,
    setRateList,
    gamers,
  };
};
