import { CallApi } from "@/settings/axiosConfig";
import { useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";


export interface IPayment {
  finalAmount:          number;
  walletWithDrawAmount: null;
  transactionRefId:     string;
  dateTime:             string;
  event:                Event;
}

export interface Event {
  title:    string;
  dateTime: string;
  logoUrl:  string;
  host:     Host;
}

export interface Host {
  title:         string;
  address:       string;
  districtTitle: string;
}

export const usePaymentCallBack = () => {
  const toast = useToast();
  const { timeId, eventId, dateId } = useParams();
  const [loading, setLoading] = useState<boolean>(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const orderId = searchParams.get("orderId");
  const [eventItem, setEventItem] = useState<IPayment>();

  useEffect(() => {
    setLoading(true);
    CallApi.get(`/orders/${orderId}/payments/_succeed`)
      .then(({ data }) => {
        setEventItem(data as IPayment);
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
          title: eventItem?.event.title,
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
