import { Loading } from "@/components/CoreComponents/Loading/Loading";
import {
  Avatar,
  Box,
  Button,
  Flex,
  Icon,
  Text,
  chakra,
} from "@chakra-ui/react";
import React from "react";
import { usePanelRate } from "./PanelRate.biz";
import { PanelFooter } from "../PanelFooter/PanelFooter";
import { Star } from "@phosphor-icons/react";

const ratingArray = [
  { id: 1, title: "ضعیف" },
  { id: 2, title: "نسبتا بد" },
  { id: 3, title: "معمولی" },
  { id: 4, title: "خوب" },
  { id: 5, title: "عالی" },
];

export const PanelRate = () => {
  const {
    handleSubmit,
    loading,
    loadingButton,
    gamers,
    rateList,
    setRateList,
    handleRating,
  } = usePanelRate();
  return (
    <chakra.div
      color="amir.common"
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
          <Text fontSize={"14px"} fontWeight={400} color={"amir.common"}>
            لطفا به بازی هر یک از گیمرها از ضعیف ترین (۱) تا قوی‌ترین(۵) امتیاز
            دهید.
          </Text>
          {gamers.map((user: any) => {
            return (
              <Box mb="4" borderRadius="8px" p="4" bgColor={"amir.secondaryBg"}>
                <Flex mx="0" alignItems="center" mb="4">
                  <Avatar mx="0" src={user.userAvatarUrl} />
                  <Box mx="0" ps="4">
                    <Text
                      fontSize={"16px"}
                      fontWeight={600}
                      color={"amir.common"}
                    >
                      {user.userDisplayName}
                    </Text>
                    <Text
                      pt="8px"
                      fontWeight={500}
                      fontSize={"14px"}
                      color={"amir.secondary"}
                    >
                      {user.characterTitle}
                    </Text>
                  </Box>
                </Flex>
                <Flex mx="0" alignItems="center" direction="row-reverse">
                  {ratingArray.map((rateItem) => {
                    // const isSelected=rateList?.[user.id] == rateItem.id;
                    const isSelected =
                      rateList?.[user.userId] && rateList?.[user.userId] >= rateItem.id;
                    return (
                      <Box
                        key="sda"
                        textAlign="center"
                        onClick={() => handleRating(user.userId, rateItem.id)}
                      >
                        <Icon
                          as={Star}
                          boxSize="6"
                          weight={isSelected ? "fill" : "regular"}
                          color={isSelected ? "yellow.400" : "amir.common"}
                        />
                        <Text
                          fontSize={"12px"}
                          fontWeight={400}
                          color={"amir.secondary"}
                        >
                          {rateItem.title}
                        </Text>
                      </Box>
                    );
                  })}
                </Flex>
              </Box>
            );
          })}
          <Button
            onClick={handleSubmit}
            isLoading={loadingButton}
            type="submit"
            bgColor={"amir.primary"}
            width="full"
          >
            ثبت امتیاز
          </Button>
        </chakra.div>
      )}
      <PanelFooter />
    </chakra.div>
  );
};
