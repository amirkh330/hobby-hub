import { CallApi } from "@/settings/axiosConfig";
import { IEventDetail } from "@/types/responses/ResponsesTypes";
import { useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const useEventDetail = () => {
  const toast = useToast();
  const { timeId, eventId, dateId } = useParams();
  const [loading, setLoading] = useState<boolean>(false);
  const [eventItem, setEventItem] = useState<IEventDetail>();
  // const eventId =1001
  // const dateId =1018
  // const timeId=1019
  useEffect(() => {
    setLoading(true);
    CallApi.get(`events/${eventId}/dates/${dateId}/times/${timeId}`)
      .then(({ data }) => {
        setEventItem(data as IEventDetail);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          text: "بیا با ما بازی کنیم!",
          title: eventItem?.title,
          url: window.location.href,
        });
      } catch (error) {}
    } else {
      const currentUrl = window.location.href;
      navigator.clipboard.writeText(currentUrl).then(() => {
        toast({
          title: "آدرس بازی با موفقیت کپی شد!",
          status: "success",
          position: "top",
        });
      });
    }
  };

  return { eventItem, loading, handleShare };
};
