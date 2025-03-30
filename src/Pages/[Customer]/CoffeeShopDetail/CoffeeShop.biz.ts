import { CallApi } from "@/settings/axiosConfig";
import { ICoffeeShopDetail } from "@/types/responses/ResponsesTypes";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const useCoffeeShopDetail = () => {
  const { id } = useParams();
  const [coffee, setCoffee] = useState<ICoffeeShopDetail>();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    CallApi.get(`/hosts/${id}/_detail`)
      .then(({ data }) => {
        setCoffee(data);
        setLoading(false);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return { loading, coffee };
};
