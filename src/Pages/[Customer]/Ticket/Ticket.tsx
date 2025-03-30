import BottomSheet from "@/components/CoreComponents/BottomSheet/BottomSheet";
import { Box, Button, Divider, Image, Text, chakra } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ITicketItem } from "../MyTickets/MyTickets";

export const Ticket = ({
  isOpen,
  ticketItem,
  onClose,
}: {
  isOpen: boolean;
  ticketItem: ITicketItem;
  onClose: () => void;
}) => {
  
  return (
    <BottomSheet
      title={ticketItem.event.title}
      isOpen={isOpen}
      onOpen={() => {}}
      onClose={onClose}
    >
      <chakra.div px="4" h="65dvh" mx="0">
        <Text
          textAlign={"start"}
          fontSize={"14px"}
          fontWeight={400}
          color={"amir.common"}
          mb="4"
        >
          برای دریافت بارکد اختصاصی، هر یک از افراد وارد سایت جورچین شده و در
          صفحه (بازی‌های من)، شماره موبایل خود را وارد کنند.
        </Text>
        <Box
          w="full"
          p="6"
          bgColor={"amir.secondaryBg"}
          border={"1px solid"}
          borderColor={"amir.secondaryVariant"}
          borderRadius={"8px"}
        >
          <Text
            fontSize={"16px"}
            fontWeight={600}
            color={"amir.primary"}
            textAlign={"center"}
            mb="4"
          >
            {ticketItem.id} - کد رزرو
          </Text>
          <Image src={ticketItem.ticketAddress} w="50%" />
        
          <Divider my="6" borderColor={"amir.common"} variant="dashed" />
          <Button
            w="full"
            as={Link}
            variant="outline"
            color="amir.secondary"
            borderColor="amir.secondary"
            target="_blank"
            to={ticketItem.ticketAddress}
          >
            دانلود
          </Button>
        </Box>
      </chakra.div>
    </BottomSheet>
  );
};
