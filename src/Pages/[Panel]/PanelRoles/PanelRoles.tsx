import BottomSheet from "@/components/CoreComponents/BottomSheet/BottomSheet";
import { Loading } from "@/components/CoreComponents/Loading/Loading";
import {
  Badge,
  Box,
  Button,
  Grid,
  HStack,
  Image,
  Text,
  chakra,
} from "@chakra-ui/react";
import { PanelFooter } from "../PanelFooter/PanelFooter";
import { usePanelRoles } from "./PanelRoles.biz";

export const PanelRoles = () => {
  const {
    characters,
    loading,
    handleDecrement,
    handleIncrement,
    selectedIds,
    confirm,
    loadingButton,
    handleStartGame,
    handleNextStep,
    setConfirm,
    approveCount,
    selectedCount,
    setSelectedCount,
  } = usePanelRoles();
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
           
            {selectedCount != approveCount ? (
              <>
                <Text
                  mb="4"
                  fontSize="14px"
                  fontWeight={400}
                  color="amir.common"
                  textAlign="center"
                >
                  تعداد بازیکن مورد نیاز برای شروع بازی {approveCount} کارکتر
                  است
                </Text>
                <Text
                  bgColor="yellow.500"
                  mb="4"
                  fontSize="16px"
                  fontWeight={600}
                  color="amir.common"
                  borderRadius={"6px"}
                  p="2"
                  w="fit-content"
                  mx="auto"
                >
                  {selectedCount != approveCount
                    ? `لطفا ${
                        approveCount - selectedCount
                      } کارکتر دیگر انتخاب کنید`
                    : null}
                </Text>
              </>
            ) : (
              <Text
                bgColor="green.500"
                mb="4"
                fontSize="14px"
                fontWeight={400}
                color="amir.common"
                borderRadius={"6px"}
                p="2"
                w="fit-content"
                mx="auto"
              >
                تعداد کاراکتر ها به درستی انتخاب شده 👍🏼
              </Text>
            )}
            <Grid templateColumns="repeat(2, 1fr)" gap="4">
              {characters.map((item, index) => {
                const count = selectedIds[item.id] || 0; // گرفتن شمارنده
                return (
                  <chakra.div
                    key={index}
                    p="4"
                    cursor="pointer"
                    boxShadow="sm"
                    borderRadius="md"
                    position="relative"
                    border="1px solid"
                    borderColor="gray.200"
                    opacity={count > 0 ? "1" : "0.4"}
                  >
                    {count > 0 && (
                      <Badge
                        position="absolute"
                        top="2"
                        right="2"
                        bg="blue.500"
                        color="white"
                        borderRadius="full"
                        px="2"
                        fontSize="12px"
                      >
                        {count}
                      </Badge>
                    )}
                    <Image
                      src={item.logoUrl}
                      width="152px"
                      height="192px"
                      borderRadius="md"
                    />
                    <Text
                      py="2"
                      fontSize="14px"
                      fontWeight="400"
                      color="amir.common"
                    >
                      {item.title}
                    </Text>

                    {/* دکمه‌های شمارنده */}
                    <HStack justify="space-between" mt="2">
                      <Button
                        size="sm"
                        colorScheme="red"
                        onClick={() => {
                          handleDecrement(item);
                          selectedCount &&
                            setSelectedCount((_prev) => _prev - 1);
                        }}
                        isDisabled={count === 0} // غیرفعال کردن دکمه کم کردن اگر شمارنده صفر باشد
                      >
                        -
                      </Button>
                      <Box fontSize="16px" fontWeight="bold">
                        {count}
                      </Box>
                      <Button
                        size="sm"
                        colorScheme="green"
                        onClick={() => {
                          handleIncrement(item);
                          setSelectedCount((_prev) => _prev + 1);
                        }}
                      >
                        +
                      </Button>
                    </HStack>
                  </chakra.div>
                );
              })}
            </Grid>
          </chakra.div>
          <chakra.div m="4">
            <Button
              w="full"
              isDisabled={selectedCount != approveCount}
              bgColor="amir.primary"
              borderRadius={"4px"}
              isLoading={loadingButton}
              onClick={handleNextStep}
            >
              مرحله بعد شروع بازی
            </Button>
          </chakra.div>
        </>
      )}
      {confirm ? (
        <BottomSheet
          title={"آماده برای شروع"}
          isOpen={confirm}
          onOpen={() => {}}
          onClose={() => setConfirm(false)}
        >
          <chakra.div p="4">
            <Text fontSize={"16px"} color="amir.common" mb="4">
              همه چیز برای شروع بازی آماده‌است! با کلیک روی دکمه شروع بازی، نقش
              ها بین گیمرها بصورت رندوم پخش خواهد شد و هریک از گیمرها لینک مخصوص
              به خود را برای دیدن نقش ها دریافت می‌کنند.
            </Text>
            <Button
              w="full"
              bgColor="amir.primary"
              borderRadius={"4px"}
              isLoading={loadingButton}
              onClick={handleStartGame}
            >
              شروع بازی
            </Button>
          </chakra.div>
        </BottomSheet>
      ) : null}
      <PanelFooter />
    </chakra.div>
  );
};
