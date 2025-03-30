import { Footer } from "@/components/Common/Footer/Footer";
import { Loading } from "@/components/CoreComponents/Loading/Loading";
import { CallApi } from "@/settings/axiosConfig";
import { Box, Button, Image, Text, VStack, chakra } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const RollPreview = () => {
  const { sessionId } = useParams();
  const [loading, setLoading] = useState(true);
  const [role, setRole] = useState<any>();
  useEffect(() => {
    CallApi.get(`/me/game-sessions/${sessionId}`)
      .then(({ data }) => setRole(data))
      .finally(() => setLoading(false));
  }, []);

  const [isRevealed, setIsRevealed] = useState(false);

  const handleMouseDown = () => setIsRevealed(true);
  const handleMouseUp = () => setIsRevealed(false);

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
        <chakra.div
          pt="4"
          h="calc(100dvh - 56px)"
          display="flex"
          flexDirection="column"
          m="0"
          justifyContent="space-between"
        >
          <VStack spacing={6} align="center" mt={10}>
            <Box transition="opacity 0.3s">
              <Image w="200px" src={role.mafia.logoUrl} />
              <Text
                my="4"
                fontSize="16px"
                fontWeight={600}
                color={"amir.common"}
                textAlign="center"
              >
                نقش شما: {role.mafia.title}
              </Text>
            </Box>
          </VStack>
        </chakra.div>
      )}
      <Footer />
    </chakra.div>
  );
};
