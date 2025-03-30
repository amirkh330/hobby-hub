import React from "react";
import { Footer } from "@/components/Common/Footer/Footer";
import { EventCard } from "@/components/CoreComponents/EventCard/EventCard";
import { FilterSecession } from "@/components/CoreComponents/FilterSecession/FilterSecession";
import InfinityScroll from "@/components/CoreComponents/InfiniteScroll/InfiniteScroll";
import { Loading } from "@/components/CoreComponents/Loading/Loading";
import { MainSwiper } from "@/components/CoreComponents/MainSwiper/MainSwiper";
import { IEventItem } from "@/types/responses/ResponsesTypes";
import {
  Box,
  chakra,
  Grid,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { MagnifyingGlass } from "@phosphor-icons/react";
import Map from "@/components/CoreComponents/Map/Map";

export const HobbyMap = () => {
  return (
    <chakra.div
      pt="4"
      h="calc(100dvh - 56px)"
      display="flex"
      flexDirection="column"
      m="0"
      justifyContent="space-between"
    >
      <chakra.div px={4} m="0" overflowY="auto">
        <Map />
      </chakra.div>
      <Footer />
    </chakra.div>
  );
};
