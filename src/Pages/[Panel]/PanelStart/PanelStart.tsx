import { Loading } from "@/components/CoreComponents/Loading/Loading";
import {
  Avatar,
  Box,
  Button,
  Flex,
  Grid,
  Image,
  Text,
  chakra,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { PanelFooter } from "../PanelFooter/PanelFooter";
import { IScenarioCharacter } from "@/types/responses/ResponsesTypes";
import { CallApiHost } from "@/settings/axiosConfig";
import { useNavigate, useParams } from "react-router-dom";
import BottomSheet from "@/components/CoreComponents/BottomSheet/BottomSheet";

export const PanelStart = () => {
  const { gameId } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [confirm, setConfirm] = useState(false);
  const toast = useToast();
  const [loadingButton, setLoadingButton] = useState(false);
  const [characters, setCharactersList] = useState<any[]>([]);

  useEffect(() => {
    CallApiHost.get(`/game-sessions/${gameId}/mafia/gamers`)
      .then(({ data }) => {
        setCharactersList(data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleEndGame = () => {
    setLoadingButton(true);
    CallApiHost.post(`/game-sessions/${gameId}/_end`)
      .then(({ data }) => {
        setConfirm(false);
        toast({
          title: "بازی به پایان رسید",
          status: "success",
          duration: 3000,
          position: "top",
        });
        navigate(`/panel/games/${gameId}/rate`);
      })
      .finally(() => setLoadingButton(false));
  };

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
        <>
          <chakra.div px="4" overflow="auto" m="0">
            <Grid templateColumns="repeat(2, 1fr)" gap="4">
              {characters.map((item, index) => {
                return (
                  <chakra.div
                    key={index}
                    bgColor={"amir.secondaryBg"}
                    cursor="pointer"
                    boxShadow="sm"
                    borderRadius="md"
                    position="relative"
                    minH={"300px"}
                  >
                    <Image
                      src={item.characterLogoUrl}
                      height="192px"
                      borderRadius="md"
                    />
                    <Box position="absolute" top="180px" right="10px">
                      <Avatar src={item.userAvatarUrl} />
                      <Text
                        py="1"
                        fontSize="14px"
                        fontWeight="400"
                        color="amir.common"
                      >
                        {item.characterTitle}
                      </Text>
                      <Text
                        py="1"
                        fontSize="14px"
                        fontWeight="500"
                        color="amir.secondary"
                      >
                        {item.userDisplayName}
                      </Text>
                    </Box>
                  </chakra.div>
                );
              })}
            </Grid>
            <Button
              w="full"
              my="4"
              bgColor="amir.primary"
              borderRadius={"4px"}
              onClick={() => setConfirm(true)}
            >
              پایان بازی
            </Button>
          </chakra.div>
        </>
      )}
      {confirm ? (
        <BottomSheet
          title={"پایان بازی"}
          isOpen={confirm}
          onOpen={() => {}}
          onClose={() => setConfirm(false)}
        >
          <chakra.div p="4">
            <Text fontSize={"16px"} color="amir.common" mb="4">
              آیا از پایان بازی مطمئن هستید؟
            </Text>
            <Flex gap="4">
              <Button
                w="full"
                colorScheme="red"
                borderRadius={"4px"}
                onClick={() => setConfirm(false)}
              >
                خیر
              </Button>
              <Button
                w="full"
                bgColor="amir.primary"
                borderRadius={"4px"}
                isLoading={loadingButton}
                onClick={handleEndGame}
              >
                بله
              </Button>
            </Flex>
          </chakra.div>
        </BottomSheet>
      ) : null}
      <PanelFooter />
    </chakra.div>
  );
};
