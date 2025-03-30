import React, { useEffect, useState } from "react";
import { Footer } from "@/components/Common/Footer/Footer";
import {
  Avatar,
  Box,
  chakra,
  Divider,
  Flex,
  Icon,
  Text,
} from "@chakra-ui/react";
import { Toman } from "@/utils/Toman/Toman";
import { CallApi } from "@/settings/axiosConfig";
import { Loading } from "@/components/CoreComponents/Loading/Loading";
export const Transactions = () => {
  const [transactionList, setTransactionList] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    CallApi.get("/me/transactions")
      .then(({ data }) => {
        setTransactionList(data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return (
    <chakra.div
      h="calc(100dvh - 56px)"
      display="flex"
      flexDirection="column"
      m="0"
      justifyContent="space-between"
    >
      {loading ? (
        <Loading />
      ) : (
        <chakra.div m="0" overflow="auto" mb="4" px="4">
          {transactionList?.map((item:any, index) => (
            <Flex
              key={index}
              alignItems="center"
              justifyContent="space-between"
              p="2"
              my="4"
              borderRadius="8px"
              bg="amir.secondaryBg"
            >
              <Box mx="0">
                <Text fontSize={"14px"} fontWeight={500} color="amir.common">
                  برداشت از کیف پول
                </Text>
                <Text
                  my="1"
                  fontSize={"14px"}
                  fontWeight={500}
                  color="amir.common"
                >
                  {item.dateTime}
                </Text>
              </Box>
              <Box mx="0" textAlign={"center"}>
                <Text fontSize={"14px"} fontWeight={500} color="amir.common">
                  {Toman(item.amount | 0)}
                </Text>
                <Text
                  my="1"
                  mx="auto"
                  borderRadius="10px"
                  textAlign={"center"}
                  p={"4px"}
                  w={"fit-content"}
                  fontWeight={400}
                  fontSize={"12px"}
                  bg={item.isSuccess ? "green.200" :"red.200"}
                  color={item.isSuccess ? "green.700" :"red.700"}
                >
                  {item.isSuccess ? "موفق" : "ناموفق"}
                </Text>
              </Box>
            </Flex>
          ))}
        </chakra.div>
      )}
      <Footer />
    </chakra.div>
  );
};
