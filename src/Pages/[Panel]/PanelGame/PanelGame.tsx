import BottomSheet from "@/components/CoreComponents/BottomSheet/BottomSheet";
import { CustomModal } from "@/components/CoreComponents/CustomModal/CustomModal";
import { Loading } from "@/components/CoreComponents/Loading/Loading";
import { persianToEnglishNumbers } from "@/utils/convertNumber/ConvertNumber";
import {
  Avatar,
  Box,
  Button,
  chakra,
  Flex,
  Grid,
  Icon,
  Input,
  Text,
} from "@chakra-ui/react";
import { QrReader } from "react-qr-reader";
import { PanelFooter } from "../PanelFooter/PanelFooter";
import { usePanelGame } from "./PanelGame.biz";
import { Star } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

export const PanelGame = () => {
  const {
    gameId,
    loading,
    gamers,
    guestVisible,
    scanVisible,
    setGuestVisible,
    setScanVisible,
    setData,
    guestPhoneNumber,
    setGuestPhoneNumber,
    senGuest,
    loadingButton,
    userScanned,
    setUserScanned,
    handleApprovedScanUser,
    isDisable,
  } = usePanelGame();
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
          <Text fontSize="14px" fontWeight={400} color="amir.common">
            برای ورود گیمرها به بازی ابتدا qr کد تک تک افراد حاضر را اسکن کنید.
            ر غیر اینصورت با شروع بازی افرادی که اسکن نشده باشند، نقش دریافت
            نمی‌کنند.
          </Text>
          <Flex alignItems="center" gap="4" my="4">
            <Button
              borderRadius="4px"
              w="full"
              bgColor="amir.primary"
              onClick={() => setScanVisible(true)}
            >
              اسکن
            </Button>
            <Button
              w="full"
              variant="ghost"
              borderRadius="4px"
              color={"amir.common"}
              border={"1px solid"}
              borderColor={"amir.common"}
              onClick={() => setGuestVisible(true)}
            >
              دعوت مهمان
            </Button>
          </Flex>
          <Text fontSize="16px" fontWeight={600} color="amir.common" my="4">
            گیمرها
          </Text>
          <Grid templateColumns="repeat(4, 1fr)" gap="4">
            {gamers?.map((gamer, index) => {
              return (
                <chakra.div
                  key={index}
                  cursor="pointer"
                  opacity={gamer.status === "Approved" ? "1" : "0.4"}
                >
                  <Avatar src={gamer.avatarUrl} size={"lg"} />
                  <Text
                    fontSize={"12px"}
                    fontWeight={400}
                    color="amir.common"
                    mt="2"
                  >
                    {gamer.userName}
                  </Text>
                </chakra.div>
              );
            })}
          </Grid>
          <Text my="4" fontSize="14px" fontWeight={400} color="amir.common">
            بعد از اتمام اسکن گیمرها و ورود همه به محوطه بازی، وارد مرحله انتخاب
            نقش ها شوید.
          </Text>
          <Button
            my="4"
            border="1px solid"
            borderColor="amir.primary"
            bgColor="transparent"
            color="amir.primary"
            w="full"
            borderRadius="8px"
            as={Link}
            to={`/panel/games/${gameId}/roles`}
            isDisabled={!isDisable}
          >
            بریم مرحله بعدی
          </Button>
        </chakra.div>
      )}

      {scanVisible && (
        <CustomModal
          isOpen={!!scanVisible}
          onClose={() => setScanVisible(false)}
        >
          <chakra.div h={"400px"} mx="0">
            <QrReader
              containerStyle={{ width: "100%", height: "100%" }}
              onResult={(result: any, error) => {
                if (!!result) {
                  setData(result?.text);
                  setScanVisible(false);
                }
              }}
              constraints={{ facingMode: "environment" }}
            />
          </chakra.div>
        </CustomModal>
      )}

      {guestVisible && (
        <BottomSheet
          isOpen={guestVisible}
          onClose={() => setGuestVisible(false)}
          onOpen={() => setGuestVisible(false)}
          title={"دعوت مهمان"}
        >
          <chakra.div px={4}>
            <Text>
              شماره موبایل فرد حاضر در کافه را جهت دریافت لینک دعوت و دریافت
              بارکد، وارد کنید.
            </Text>
            <Flex mb="4">
              <Text color={"amir.common"}>شماره تلفن خود را وارد کنید</Text>
            </Flex>
            <Input
              mb="4"
              placeholder="09123456789"
              dir="ltr"
              maxLength={11}
              color="amir.common"
              _placeholder="amir.common"
              _focusVisible={{ borderColor: "amir.primary" }}
              value={guestPhoneNumber}
              onChange={(e) => {
                setGuestPhoneNumber(persianToEnglishNumbers(e.target.value));
              }}
            />
            <Button
              onClick={senGuest}
              isLoading={loadingButton}
              isDisabled={!guestPhoneNumber}
              w="full"
              bgColor="amir.primary"
              borderRadius={"6px"}
            >
              ارسال لینک
            </Button>
          </chakra.div>
        </BottomSheet>
      )}

      {userScanned?.userId && (
        <BottomSheet
          isOpen={!!userScanned?.userId}
          onClose={() => setUserScanned(undefined)}
          onOpen={() => setUserScanned(undefined)}
          title={"تائید گیمر"}
        >
          <Flex
            alignItems="flex-start"
            bgColor="amir.secondaryBg"
            borderRadius="8px"
            p="2"
            mx="4"
            justifyContent="space-between"
          >
            <Flex mx="0">
              <Avatar w={"56px"} h={"56px"} src={userScanned.userAvatarUrl as string} />
              <Box mx="0" ms={3} textAlign={"start"}>
                <Text
                  mb="2"
                  fontSize="16px"
                  fontWeight={500}
                  color="amir.common"
                >
                  {userScanned.userFullName}
                </Text>
                <Text fontSize="14px" fontWeight={500} color="amir.secondary">
                  {userScanned.userPhoneNumber}
                </Text>
              </Box>
            </Flex>
            <Flex
              mx="0"
              px="2"
              py="1"
              gap="2"
              w="fit-content"
              borderRadius={"8px"}
              alignItems={"center"}
              justifyContent="center"
              bgColor={"#5C5C5C"}
              color={"#E7E7E7"}
            >
              <Icon as={Star} color={"yellow.500"} weight="fill" mx="0" />
              <Text fontSize={"12px"} fontWeight={400} mx="0">
                {userScanned.userRate}
              </Text>
            </Flex>
          </Flex>

          <Flex alignItems="center" p={4} gap={4}>
            <Button
              w="full"
              borderRadius="6px"
              bgColor="amir.primary"
              isLoading={loadingButton}
              onClick={handleApprovedScanUser}
            >
              تائید گیمر
            </Button>
            <Button
              w="full"
              bgColor="transparent"
              color="amir.common"
              borderRadius="6px"
              border="1px solid"
              borderColor="amir.common"
              onClick={() => setUserScanned(undefined)}
            >
              رد کردن
            </Button>
          </Flex>
        </BottomSheet>
      )}
      <PanelFooter />
    </chakra.div>
  );
};
