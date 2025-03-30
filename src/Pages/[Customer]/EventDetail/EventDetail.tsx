import { Loading } from "@/components/CoreComponents/Loading/Loading";
import Map from "@/components/CoreComponents/Map/Map";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Avatar,
  Box,
  Divider,
  Flex,
  Icon,
  Image,
  Text,
  chakra
} from "@chakra-ui/react";
import {
  Calendar,
  Coffee,
  MapPin,
  ShareNetwork,
  Users,
} from "@phosphor-icons/react";
import { Characters } from "./Components/Characters/Characters";
import { FooterByPrice } from "./Components/FooterByPrice/FooterByPrice";
import { useEventDetail } from "./EventDetail.biz";

export const EventDetail = () => {
  const { loading, eventItem, handleShare } = useEventDetail();
  return (
    <>
      {loading && !eventItem ? (
        <Loading />
      ) : (
        <chakra.div
          display={"flex"}
          mx="0"
          // h="calc(100dvh - 56px)"
          flexDirection="column"
          justifyContent="space-between"
        >
          <chakra.div
            mx="0"
            display={"flex"}
            h="calc(100dvh - 114px)"
            overflow={"auto"}
            flexDirection="column"
            justifyContent="space-between"
          >
            <Box p="4">
              <Image
                src={eventItem?.game.logoUrl}
                maxH={"380px"}
                w={"full"}
                objectFit={"cover"}
              />
            </Box>
            <Box mx="0" gap="4px" display="flex" flexDirection="column" p="4">
              <Flex
                mx="0"
                alignItems={"center"}
                mb="4"
                justifyContent="space-between"
              >
                <Text fontSize={"20px"} fontWeight={600} color="amir.common">
                  {eventItem?.game.title}
                </Text>

                <Icon
                  mx="0"
                  as={ShareNetwork}
                  onClick={handleShare}
                  color={"amir.primary"}
                />
              </Flex>
              <Flex
                mx="0"
                my="2"
                alignItems={"center"}
                justifyContent="space-between"
              >
                <Flex mx="0" alignItems="center" gap="1">
                  <Icon mx="0" as={Coffee} color={"amir.secondary"} />
                  <Text
                    fontSize={"16px"}
                    fontWeight={500}
                    color="amir.secondary"
                  >
                    برگذارکننده:
                  </Text>
                </Flex>
                <Text fontSize={"16px"} fontWeight={500} color="amir.secondary">
                  {eventItem?.host.title} - {eventItem?.host.districtTitle}
                </Text>
              </Flex>
              <Flex
                mx="0"
                my="2"
                alignItems={"center"}
                justifyContent="space-between"
              >
                <Flex mx="0" alignItems="center" gap="1">
                  <Icon mx="0" as={Calendar} color={"amir.secondary"} />
                  <Text
                    fontSize={"16px"}
                    fontWeight={500}
                    color="amir.secondary"
                  >
                    سانس بازی:
                  </Text>
                </Flex>
                <Text fontSize={"16px"} fontWeight={500} color="amir.secondary">
                  {eventItem?.dateTime}
                </Text>
              </Flex>
              <Flex
                mx="0"
                my="2"
                alignItems={"center"}
                justifyContent="space-between"
              >
                <Flex mx="0" alignItems="center" gap="1">
                  <Icon mx="0" as={Users} color={"amir.secondary"} />
                  <Text
                    fontSize={"16px"}
                    fontWeight={500}
                    color="amir.secondary"
                  >
                    ظرفیت باقی مانده:
                  </Text>
                </Flex>
                <Text fontSize={"16px"} fontWeight={500} color="amir.secondary">
                  {eventItem?.availableCapacity} نفر
                </Text>
              </Flex>
            </Box>
            <Divider color="gray.600" />

            <Box mx="0" p="4">
              <Flex mx="0" alignItems="center" gap="1">
                <Icon mx="0" as={MapPin} color={"amir.secondary"} />
                <Text fontWeight={500} fontSize={"16px"} color="amir.secondary">
                  آدرس:
                </Text>
              </Flex>
              <Text
                mt="2"
                mb="4"
                fontSize={"14px"}
                fontWeight={500}
                color="amir.secondary"
              >
                {eventItem?.host.address}
              </Text>

              <Map lat={35.6892} lng={51.389} />
            </Box>
            <Divider color="gray.600" />

            {/* Section 1*/}
            <Accordion borderColor={"gray.600"} mx={0} allowToggle>
              <AccordionItem p="4">
                <AccordionButton justifyContent="space-between" px="0">
                  <Text fontSize={"16px"} fontWeight={600} color="amir.common">
                    کارکترهای بازی
                  </Text>
                  <AccordionIcon mx="0" color="amir.common" />
                </AccordionButton>
                <AccordionPanel pb={4}>
                  <Characters characters={eventItem?.game.mafia.characters!} />
                </AccordionPanel>
              </AccordionItem>
              {/* Section 2*/}
              <AccordionItem p="4">
                <AccordionButton justifyContent="space-between" px="0">
                  <Text fontSize={"16px"} fontWeight={600} color="amir.common">
                    سناریو بازی
                  </Text>
                  <AccordionIcon mx="0" color="amir.common" />
                </AccordionButton>
                <AccordionPanel
                  pb={4}
                  fontSize={"14px"}
                  fontWeight={400}
                  color={"amir.common"}
                >
                  {eventItem?.game.scenario}
                </AccordionPanel>
              </AccordionItem>
              {/* Section 3*/}

              <AccordionItem p="4">
                <AccordionButton justifyContent="space-between" px="0">
                  <Text fontSize={"16px"} fontWeight={600} color="amir.common">
                    قوانین بازی
                  </Text>
                  <AccordionIcon mx="0" color="amir.common" />
                </AccordionButton>
                <AccordionPanel
                  pb={4}
                  fontSize={"14px"}
                  fontWeight={400}
                  color={"amir.common"}
                >
                  {eventItem?.game?.rules}
                </AccordionPanel>
              </AccordionItem>

              {/* Section 4*/}

              <AccordionItem p="4">
                <AccordionButton justifyContent="space-between" px="0">
                  <Text fontSize={"16px"} fontWeight={600} color="amir.common">
                    گیمرها
                  </Text>
                  <AccordionIcon mx="0" color="amir.common" />
                </AccordionButton>
                <AccordionPanel
                  pb={4}
                  fontSize={"14px"}
                  fontWeight={400}
                  color={"amir.common"}
                >
                  {eventItem?.participants.map((item: any, index: number) => {
                    return (
                      <Flex
                        key={index}
                        alignItems="center"
                        justifyContent="space-between"
                        my={2}
                      >
                        <Avatar
                          src={item.avatar}
                          w="64px"
                          h="64px"
                          borderRadius="50%"
                        />
                        <Text
                          mt="2"
                          fontSize="12px"
                          fontWeight={500}
                          color="amir.common"
                        >
                          {item.name}
                        </Text>
                      </Flex>
                    );
                  })}
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </chakra.div>
          <FooterByPrice eventItem={eventItem!} />
        </chakra.div>
      )}
    </>
  );
};
