import { Loading } from "@/components/CoreComponents/Loading/Loading";
import { Characters } from "@/Pages/[Customer]/EventDetail/Components/Characters/Characters";
import { CallApiHost } from "@/settings/axiosConfig";
import { Toman } from "@/utils/Toman/Toman";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  chakra,
  Flex,
  Icon,
  Image,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PanelFooter } from "../PanelFooter/PanelFooter";
import Map from "@/components/CoreComponents/Map/Map";
import {
  CalendarBlank,
  Clock,
  MapPin,
  Person,
  Users,
} from "@phosphor-icons/react";
import { Footer } from "@/components/Common/Footer/Footer";

export const PanelEventDetail = () => {
  const { eventId } = useParams();

  return (
    <chakra.div
      pt="4"
      h="calc(100dvh - 56px)"
      display="flex"
      flexDirection="column"
      m="0"
      justifyContent="space-between"
    >
      {false ? (
        <Loading />
      ) : (
        <chakra.div mx="0" px="3" overflow="auto">
          <Box mx="0">
            <Flex justifyContent="flex-center" mx="0" mb="4">
              <Image
                mx={0}
                me={2}
                w="full"
                h="104px"
                objectFit="cover"
                borderRadius={"8px"}
                src={"/images/woman.jpg"}
              />
            </Flex>

            <Text fontSize="18px" fontWeight={500} color="amir.common">
              Going to eat burger
            </Text>
            <Text fontSize="14px" my="4" color="amir.common">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </Text>
            <Map />
            <Flex my="2" alignItems="center" width={"full"} color={"amir.common"}>
              <Icon as={CalendarBlank} mx="2" />
              <Text fontSize="14px"  color="amir.common">
                2025/10/12
              </Text>
            </Flex>
            <Flex my="2" alignItems="center" width={"full"} color={"amir.common"}>
              <Icon as={Users} mx="2" />
              <Text fontSize="14px"  color="amir.common">
                3 person
              </Text>
            </Flex>
            <Flex my="2" alignItems="center" width={"full"} color={"amir.common"}>
              <Icon as={MapPin} mx="2" />
              <Text fontSize="14px"  color="amir.common">
                Address tehran, tehran st. 123
              </Text>
            </Flex>
          </Box>

          <Button
            my="2"
            w="full"
            fontSize="12px"
            border="1px solid"
            borderRadius="6px"
            color="amir.primary"
            bgColor="transparent"
            borderColor="amir.primary"
          >
            Apply
          </Button>
        </chakra.div>
      )}
      <Footer />
    </chakra.div>
  );
};
