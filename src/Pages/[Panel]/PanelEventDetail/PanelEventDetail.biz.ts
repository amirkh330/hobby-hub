import { CallApi } from "@/settings/axiosConfig";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const usePanelEventDetail = () => {
  const { eventId } = useParams();
  const [loading, setLoading] = useState<boolean>(false);
  const [eventItem, setEventItem] = useState<any>();

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

  return { loading, eventItem };
};
