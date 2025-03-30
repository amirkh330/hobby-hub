import { Footer } from "@/components/Common/Footer/Footer";
import { CoffeeInfoSection } from "@/components/CoreComponents/CoffeeInfoSection/CoffeeInfoSection";
import { GameSection } from "@/components/CoreComponents/GameSection/GameSection";
import { Loading } from "@/components/CoreComponents/Loading/Loading";
import {
  Box,
  chakra,
  Flex,
  Icon,
  Image,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text
} from "@chakra-ui/react";
import { Star } from "@phosphor-icons/react";
import { MapPin } from "@phosphor-icons/react/dist/ssr";
import { useCoffeeShopDetail } from "./CoffeeShop.biz";

export const CoffeeShopDetail = () => {
  const { coffee, loading } = useCoffeeShopDetail();

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <chakra.div
          display={"flex"}
          mx="0"
          // h="calc(100dvh - 56px)"
          flexDirection="column"
          justifyContent="space-between"
        >
          <chakra.div
            mx="0"
            display={"flex"}
            h="calc(100dvh - 114px)"
            overflow={"auto"}
            flexDirection="column"
          >
            <Flex mx="0" my="4" px="4" gap="8px">
              <Image
                mx="0"
                borderRadius="50%"
                src={coffee?.logoUrl}
                w="80px"
                h="80px"
                objectFit="cover"
              />
              <Box mx="0">
                <Text fontSize={"14px"} color="amir.common" fontWeight={400}>
                  {coffee?.title}
                </Text>
                <Flex gap="1" align={"center"} my="2" color="amir.secondary">
                  <Icon mx="0" as={Star} />
                  <Text fontSize={"12px"} fontWeight={400} mx="0">
                    {coffee?.rate}
                  </Text>
                </Flex>

                <Flex gap="1" align={"center"} color="amir.secondary">
                  <Icon textAlign="center" mx="0" as={MapPin} />
                  <Text fontSize={"12px"} fontWeight={400} mx="0">
                    {coffee?.address}
                  </Text>
                </Flex>
              </Box>
            </Flex>


            <Tabs mx="0" color="amir.secondary">
              <TabList border={"none"}>
                <Tab {...styleTabs} w="50%">
                  بازی‌ها
                </Tab>
                <Tab {...styleTabs} w="50%">
                  اطلاعات کافه
                </Tab>
              </TabList>

              <TabPanels>
                <TabPanel>
                  <GameSection coffee={coffee!} />
                </TabPanel>
                <TabPanel>
                  <CoffeeInfoSection coffee={coffee!} />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </chakra.div>
          <Footer />
        </chakra.div>
      )}
    </>
  );
};

const styleTabs = {
  _selected: {
    color: "amir.common",
    borderColor: "amir.common",
  },
};
