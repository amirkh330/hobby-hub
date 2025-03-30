import BottomSheet from "@/components/CoreComponents/BottomSheet/BottomSheet";
import { ICharacter } from "@/types/responses/ResponsesTypes";
import { Box, chakra, Grid, Image, Text } from "@chakra-ui/react";
import React, { useState } from "react";

export const Characters = ({ characters }: { characters: ICharacter[] }) => {
  const [detailCharacter, setDetailCharacter] = useState<{
    visible: boolean;
    item?: ICharacter;
  }>({ visible: false, item: undefined });

  return (
    <chakra.div>
      <Grid templateColumns="repeat(2, 1fr)" gap="4">
        {characters?.map((item, index) => {
          return (
            <chakra.div
              key={index}
              cursor="pointer"
              onClick={() => setDetailCharacter({ visible: true, item })}
            >
              <Image
                src={item.logoUrl}
                width="152px"
                height="192px"
                borderRadius="md"
              />
              <Text py="2" fontSize="14px" fontWeight="400" color="amir.common">
                {item.title}
              </Text>
            </chakra.div>
          );
        })}
      </Grid>
      {detailCharacter.item && (
        <BottomSheet
          title={detailCharacter.item.title}
          isOpen={detailCharacter.visible}
          onOpen={() => {}}
          onClose={() =>
            setDetailCharacter({ visible: false, item: undefined })
          }
        >
          <chakra.div p="4">
            <Box mx="auto">
              <Image
                src={detailCharacter.item.logoUrl}
                borderRadius="4px"
                objectFit="cover"
                height="296px"
                width="248px"
              />
            </Box>
            <Text py="2" fontSize={14} fontWeight={400} color={"amir.common"}>
              {detailCharacter.item.description}
            </Text>
          </chakra.div>
        </BottomSheet>
      )}
    </chakra.div>
  );
};
