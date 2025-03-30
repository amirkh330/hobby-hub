import { IEventDetail } from "@/types/responses/ResponsesTypes";
import { IsShowDiscount } from "@/utils/IsShowDiscount/IsShowDiscount";
import { Toman } from "@/utils/Toman/Toman";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { useFooterByPrice } from "./FooterByPrice.biz";
import { Login } from "@/components/Common/Login/Login";

export const FooterByPrice = ({ eventItem }: { eventItem: IEventDetail }) => {
  const { handlePayment, isOpen, onOpen, onClose } = useFooterByPrice();
  return (
    <Flex
      bg="amir.secondaryBg"
      py={2}
      px={4}
      mx="0"
      zIndex={10}
      justifyContent="space-center"
      alignItems="center"
      gap={2}
    >
      <Button
        w="50%"
        borderRadius="6px"
        bgColor="amir.primary"
        color="amir.secondaryBg"
        onClick={handlePayment}
      >
        رزرو بازی
      </Button>
      <Box>
        <Text color={"amir.common"} fontSize={"12px"}>
          برای هر نفر
        </Text>
        <Flex alignItems="center" gap={"2"}>
          {IsShowDiscount({
            basePrice: eventItem?.basePrice!,
            finalPrice: eventItem?.finalPrice!,
          }) ? (
            <Text
              fontSize={"12px"}
              color="#FC8181"
              textDecoration="line-through"
            >
              {Toman(eventItem?.basePrice!)}
            </Text>
          ) : null}
          <Text fontSize={"16px"} fontWeight={500} color="amir.common">
            {Toman(eventItem?.finalPrice!)}
          </Text>
        </Flex>
      </Box>
      {isOpen && <Login isOpen={isOpen} onOpen={onOpen} onClose={onClose} />}
    </Flex>
  );
};
