import { Loading } from "@/components/CoreComponents/Loading/Loading";
import { Characters } from "@/Pages/[Customer]/EventDetail/Components/Characters/Characters";
import { CallApiHost } from "@/settings/axiosConfig";
import { Toman } from "@/utils/Toman/Toman";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  chakra,
  Flex,
  Image,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PanelFooter } from "../PanelFooter/PanelFooter";

export interface IPanelEventDetail {
  id: number;
  game: IPanelEventDetailGame;
  income: IPanelEventDetailIncome;
}

export interface IPanelEventDetailGame {
  gameType: string;
  title: string;
  logoUrl: string;
  scenario: string;
  rules: string;
  mafia: Mafia;
}

export interface Mafia {
  characters: Character[];
}

export interface Character {
  title: string;
  logoUrl: string;
  description: string;
}

export interface IPanelEventDetailIncome {
  totalAmount: number;
  items: Item[];
}

export interface Item {
  date: string;
  from: string;
  to: string;
  amount: number;
}

export const PanelEventDetail = () => {
  const { eventId } = useParams();
  const [eventDetail, setEventDetail] = useState<IPanelEventDetail>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    CallApiHost.get(`events/${eventId}/_detail`)
      .then(({ data }) => setEventDetail(data))
      .finally(() => setLoading(false));
  }, []);

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
        <chakra.div mx="0" p="2" overflow="auto">
          <Flex justifyContent="flex-center" mx="0" mb="4">
            <Image
              mx={0}
              me={2}
              w="88px"
              h="104px"
              objectFit="cover"
              borderRadius={"8px"}
              src={eventDetail?.game.logoUrl}
            />
            <Box mx="0">
              <Text fontSize="14px" fontWeight={500} color="amir.common">
                {eventDetail?.game.title}
              </Text>
            </Box>
          </Flex>
          <Accordion borderColor={"gray.600"} mx={0} allowToggle>
            {/* Section 1 */}
            <AccordionItem p="4">
              <AccordionButton justifyContent="space-between" px="0">
                <Text fontSize={"16px"} fontWeight={600} color="amir.common">
                  درآمد ایونت{" "}
                </Text>
                <AccordionIcon mx="0" color="amir.common" />
              </AccordionButton>
              <AccordionPanel pb={4}>
                <Flex
                  border="1px"
                  py="2"
                  px="4"
                  my="1"
                  borderRadius="4px"
                  alignItems="center"
                  borderColor="amir.secondaryVariant"
                  bgColor="amir.secondaryBg"
                  justifyContent="space-between"
                  gap={2}
                >
                  <Text fontSize={"12px"} fontWeight={400} color="amir.common">
                    سانس‌ها
                  </Text>
                  <Text fontSize={"12px"} fontWeight={400} color="amir.common">
                    درآمد (تومان)
                  </Text>
                </Flex>
                {eventDetail?.income?.items?.map((item, index) => (
                  <Flex
                    border="1px"
                    py="2"
                    px="4"
                    my="1"
                    borderRadius="4px"
                    alignItems="center"
                    borderColor="amir.secondaryVariant"
                    bgColor="amir.secondaryBg"
                    justifyContent="space-between"
                    key={index}
                    gap={2}
                  >
                    <Flex
                      mx="0"
                      gap="1"
                      justifyContent="flex-start"
                      alignItems="center"
                    >
                      <Text
                        fontSize={"12px"}
                        fontWeight={400}
                        color="amir.common"
                      >
                        {item.date}
                      </Text>
                      <Text
                        fontSize={"12px"}
                        fontWeight={400}
                        color="amir.common"
                      >
                        {item.from} تا
                      </Text>
                      <Text
                        fontSize={"12px"}
                        fontWeight={400}
                        color="amir.common"
                      >
                        {item.to}
                      </Text>
                    </Flex>

                    <Text
                      textAlign="center"
                      fontSize={"12px"}
                      fontWeight={400}
                      color="amir.common"
                    >
                      {Toman(item.amount)}
                    </Text>
                  </Flex>
                ))}
                <Flex
                  border="1px"
                  py="2"
                  px="4"
                  my="1"
                  borderRadius="4px"
                  alignItems="center"
                  borderColor="amir.secondaryVariant"
                  bgColor="#3D0368"
                  justifyContent="space-between"
                  gap={2}
                >
                  <Text fontSize={"12px"} fontWeight={400} color="amir.common">
                    مجموع درآمد
                  </Text>
                  <Text fontSize={"12px"} fontWeight={400} color="amir.common">
                    {Toman(eventDetail?.income?.totalAmount!)}
                  </Text>
                </Flex>
              </AccordionPanel>
            </AccordionItem>

            {/* Section 2 */}
            <AccordionItem p="4">
              <AccordionButton justifyContent="space-between" px="0">
                <Text fontSize={"16px"} fontWeight={600} color="amir.common">
                  سناریو بازی
                </Text>
                <AccordionIcon mx="0" color="amir.common" />
              </AccordionButton>
              <AccordionPanel
                fontSize={"14px"}
                fontWeight={400}
                color="amir.common"
                pb={4}
              >
                {eventDetail?.game?.scenario}
              </AccordionPanel>
            </AccordionItem>

            {/* Section 3 */}
            <AccordionItem p="4">
              <AccordionButton justifyContent="space-between" px="0">
                <Text fontSize={"16px"} fontWeight={600} color="amir.common">
                  کاراکترهای بازی
                </Text>
                <AccordionIcon mx="0" color="amir.common" />
              </AccordionButton>
              <AccordionPanel pb={4}>
                <Characters
                  characters={eventDetail?.game?.mafia?.characters!}
                />
              </AccordionPanel>
            </AccordionItem>

            {/* Section 4 */}
            <AccordionItem p="4">
              <AccordionButton justifyContent="space-between" px="0">
                <Text fontSize={"16px"} fontWeight={600} color="amir.common">
                  قوانین بازی
                </Text>
                <AccordionIcon mx="0" color="amir.common" />
              </AccordionButton>
              <AccordionPanel
                fontSize={"14px"}
                fontWeight={400}
                color="amir.common"
                pb={4}
              >
                {eventDetail?.game?.rules}
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </chakra.div>
      )}
      <PanelFooter />
    </chakra.div>
  );
};
