import { Footer } from "@/components/Common/Footer/Footer";
import { Loading } from "@/components/CoreComponents/Loading/Loading";
import Map from "@/components/CoreComponents/Map/Map";
import { Box, Button, chakra, Flex, Icon, Image, Text } from "@chakra-ui/react";
import { CalendarBlank, MapPin, Users } from "@phosphor-icons/react";
import { usePanelEventDetail } from "./PanelEventDetail.biz";

export const PanelEventDetail = () => {
  const { loading, eventItem } = usePanelEventDetail();
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
                src={eventItem?.event_attachments[0]?.attachment}
              />
            </Flex>

            <Text fontSize="18px" fontWeight={500} color="amir.common">
              {eventItem?.title}
            </Text>
            <Text fontSize="14px" my="4" color="amir.common">
              {eventItem?.description!}
            </Text>
            <Map />
            <Flex
              my="2"
              alignItems="center"
              width={"full"}
              color={"amir.common"}
            >
              <Icon as={CalendarBlank} mx="2" />
              <Text fontSize="14px" color="amir.common">
                {new Date(eventItem?.datetime).toLocaleString()}
              </Text>
            </Flex>
            {/* <Flex
              my="2"
              alignItems="center"
              width={"full"}
              color={"amir.common"}
            >
              <Icon as={Users} mx="2" />
              <Text fontSize="14px" color="amir.common">
                3 person
              </Text>
            </Flex> */}
            <Flex
              my="2"
              alignItems="center"
              width={"full"}
              color={"amir.common"}
            >
              <Icon as={MapPin} mx="2" />
              <Text fontSize="14px" color="amir.common">
                {eventItem?.address}
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
