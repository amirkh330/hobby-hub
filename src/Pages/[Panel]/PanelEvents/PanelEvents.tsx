import React from "react";
import { chakra } from "@chakra-ui/react";
import { PanelEventCard } from "@/components/CoreComponents/[PanelComponent]/PanelEventCard";
import { usePanelEvents } from "./PanelEvents.biz";
import { Loading } from "@/components/CoreComponents/Loading/Loading";
import { PanelFooter } from "../PanelFooter/PanelFooter";

export const PanelEvents = () => {
  const { eventList, loading } = usePanelEvents();
  return (
    <chakra.div
      pt="4"
      h="calc(100dvh - 56px)"
      display="flex"
      flexDirection="column"
      m="0"
      justifyContent="space-between"
    >
      {loading ? (
        <Loading />
      ) : (
        <chakra.div px="4" overflow="auto">
          {eventList.map((panelCardItem) => (
            <PanelEventCard
              panelCardItem={panelCardItem}
              key={panelCardItem.id}
            />
          ))}
        </chakra.div>
      )}
      <PanelFooter />
    </chakra.div>
  );
};
