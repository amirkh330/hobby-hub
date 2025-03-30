import { Footer } from "@/components/Common/Footer/Footer";
import { CoffeeCard } from "@/components/CoreComponents/CoffeeCard/CoffeeCard";
import { CallApi } from "@/settings/axiosConfig";
import { ICoffeeShopListItem } from "@/types/responses/ResponsesTypes";
import {
  chakra,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { useEffect, useState } from "react";

export const useCoffeesShops = () => {
  const [coffeeShopList, setCoffeeShopList] = useState<ICoffeeShopListItem[]>(
    []
  );
  const [page, setPage] = useState<number>(1);
  const [total, setTotal] = useState<number>();
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    setLoading(true);
    CallApi.get(`/hosts/_filter`)
      .then(({ data }) => {
        page === 1
          ? setCoffeeShopList(data.items)
          : setCoffeeShopList((prev) => [...prev, ...data.items]);

        setTotal(data.total);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return { coffeeShopList, page, setPage, total, loading };
};
