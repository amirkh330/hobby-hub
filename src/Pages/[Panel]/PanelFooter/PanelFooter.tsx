import { Box, Flex, Text } from "@chakra-ui/react";
import { ChartBar, Coffee, PlusCircle } from "@phosphor-icons/react";
import { PuzzlePiece, Ticket } from "@phosphor-icons/react/dist/ssr";
import React from "react";
import { Link, useLocation, useNavigation, useParams } from "react-router-dom";

export const PanelFooter = () => {
  const { pathname } = useLocation();
  const isActive = (url: string) => pathname !== url;
  const list = [
    { icon: <PuzzlePiece size="20" />, text: "ایونت‌ها", url: "/panel/events" },
    { icon: <PlusCircle size="20" />, text: "ایجاد ایونت", url: "/panel/events/create" },
    { icon: <ChartBar size="20" />, text: "مدیریت مالی", url: "panel/transactions" },
  ];
  return (
    <Flex
      bg="amir.secondaryBg"
      p={4}
      w="full"
      zIndex={10}
      justifyContent="space-between"
      alignItems="center"
      borderRadius={" 16px 16px 0 0"}
    >
      {list.map((item, index) => (
        <Box
          key={index}
          as={Link}
          to={item.url}
          color={isActive(item.url) ? "amir.common" : "amir.primary"}
        >
          {item.icon}
          <Text
            fontSize={"12px"}
            fontWeight={isActive(item.url) ? "400" : "500"}
          >
            {item.text}
          </Text>
        </Box>
      ))}
    </Flex>
  );
};
