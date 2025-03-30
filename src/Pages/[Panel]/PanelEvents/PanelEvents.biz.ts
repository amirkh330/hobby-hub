import { CallApiHost } from "@/settings/axiosConfig";
import { IPanelEventCard } from "@/types/responses/ResponsesTypes";
import { useEffect, useState } from "react";

export const usePanelEvents = () => {
  const [eventList, setEventList] = useState<IPanelEventCard[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    CallApiHost.get("events")
      .then(({ data }) => setEventList(data))
      .finally(() => setLoading(false));
  }, []);

  return {
    eventList,
    loading,
  };
};
