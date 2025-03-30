import { Loading } from "@/components/CoreComponents/Loading/Loading";
import Map from "@/components/CoreComponents/Map/Map";
import { Toman } from "@/utils/Toman/Toman";
import {
  Box,
  Button,
  Divider,
  Flex,
  Icon,
  Image,
  Text,
  chakra,
} from "@chakra-ui/react";
import { Calendar, Coffee, MapPin, ShareNetwork } from "@phosphor-icons/react";
import { usePaymentCallBack } from "./PaymentCallBack.biz";
import { useNavigate } from "react-router-dom";

export const PaymentCallBack = () => {
  const navigate = useNavigate();
  const { loading, eventItem, handleShare } = usePaymentCallBack();
  return (
    <>
      {loading && !eventItem ? (
        <Loading />
      ) : (
        <chakra.div
          display={"flex"}
          mx="0"
          flexDirection="column"
          justifyContent="space-between"
        >
          <Flex
            p={2}
            w={"full"}
            fontSize={16}
            fontWeight={600}
            bgColor={"green.500"}
            color="amir.common"
            justifyContent="center"
          >
            خرید شما با موفقیت انجام شد.
          </Flex>
          <chakra.div
            mx="0"
            display={"flex"}
            h="calc(100dvh - 150px)"
            overflow={"auto"}
            flexDirection="column"
            justifyContent="space-between"
          >
            <Box p="4">
              <Image
                src={eventItem?.event.logoUrl}
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
                  {eventItem?.event.title}
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
                  {eventItem?.event.host.title} -{" "}
                  {eventItem?.event.host.districtTitle}
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
                {eventItem?.event.host.address}
              </Text>

              <Map lat={35.6892} lng={51.389} />
            </Box>
            <Divider color="gray.600" />
            <Box mx="0" p="4">
              <Flex
                mx="0"
                alignItems="center"
                justifyContent="space-between"
                gap="1"
                my="2"
              >
                <Text fontWeight={400} fontSize={"14px"} color="amir.common">
                  مبلغ خرید
                </Text>
                <Text fontWeight={400} fontSize={"16px"} color="amir.common">
                  {Toman(eventItem?.finalAmount!)}
                </Text>
              </Flex>

            

              <Flex
                mx="0"
                alignItems="center"
                justifyContent="space-between"
                gap="1"
                my="3"
              >
                <Text fontWeight={400} fontSize={"14px"} color="amir.common">
                  ساعت و تاریخ خرید
                </Text>
                <Text fontWeight={400} fontSize={"16px"} color="amir.common">
                  {eventItem?.dateTime}
                </Text>
              </Flex>

              <Flex
                mx="0"
                alignItems="center"
                justifyContent="space-between"
                gap="1"
                my="2"
              >
                <Text fontWeight={600} fontSize={"16px"} color="amir.common">
                  کد رهگیری
                </Text>
                <Text fontWeight={600} fontSize={"16px"} color="amir.common">
                  {eventItem?.transactionRefId}
                </Text>
              </Flex>
            </Box>
          </chakra.div>
          <Flex
            py={2}
            px={4}
            mx="0"
            zIndex={10}
            justifyContent="space-center"
            alignItems="center"
            gap={2}
          >
            <Button
              w="100%"
              borderRadius="6px"
              bgColor="amir.primary"
              color="amir.secondaryBg"
              onClick={() => navigate('/my-tickets')}
            >
              مشاهده بلیط رزرو
            </Button>
          </Flex>
        </chakra.div>
      )}
    </>
  );
};
