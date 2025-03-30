import { persianToEnglishNumbers } from "@/utils/convertNumber/ConvertNumber";
import {
  Button,
  chakra,
  Divider,
  Flex,
  Icon,
  Input,
  Text,
} from "@chakra-ui/react";
import { Minus, Plus } from "@phosphor-icons/react/dist/ssr";
import { useEventReserve } from "./EventReserve.biz";

export const EventReserve = () => {
  const {
    phoneNumberList,
    value,
    setValue,
    handleDeletePhoneNumber,
    handleAddPhoneNumber,
    errMsg,
    setErrMsg,
    handleSubmit,
    btnLoading,
  } = useEventReserve();
  return (
    <chakra.div px="4">
      <chakra.div pt="6">
        <Text fontSize="14px" color={"amir.common"}>
          پس از رزرو بازی، برای هر نفر یک بارکد اختصاصی ارسال می‌شود که در هنگام
          حضور در محل بازی، باید در اختیار افراد باشد. به همین دلیل، شماره
          موبایل همه‌ی افراد را جهت دریافت کد اختصاصی وارد کنید.
        </Text>
        {phoneNumberList.map((phoneNumber, index) => {
          return (
            <Flex mx="0" mt="4" direction="column" key={index}>
              <Flex
                w="full"
                alignItems="center"
                justifyContent="space-between"
                mb="1"
              >
                <Text fontSize="14px" color={"amir.common"}>
                  شماره موبایل نفر {index + 1}
                </Text>
                <Button
                  p="0"
                  w="63px"
                  h="24px"
                  gap="6px"
                  fontSize="12px"
                  borderRadius="6px"
                  colorScheme="red"
                  backgroundColor="red.800"
                  onClick={() => handleDeletePhoneNumber(index)}
                >
                  <Icon as={Minus} mx="0" />
                  حذف
                </Button>
              </Flex>

              <Input
                type="number"
                color="amir.common"
                value={phoneNumber}
                isReadOnly
                placeholder="شماره موبایل"
              />
            </Flex>
          );
        })}
        <Divider color="gray.600" my="6" />

        <Text mt="2" mb="1" fontSize="14px" color={"amir.common"}>
          لطفا شماره تلفن نفر جدید را وارد کنید
        </Text>
        <Input
          type="number"
          color="amir.common"
          value={value}
          onChange={(e) => {
            errMsg && setErrMsg(false);
            setValue(persianToEnglishNumbers(e.target.value));
          }}
          placeholder="شماره موبایل"
        />
        {errMsg && (
          <Text mt="2" color="red">
            شماره موبایل نامعتبر است
          </Text>
        )}
        <Button
          w="full"
          mt="4"
          gap={"6px"}
          borderRadius={"6px"}
          bgColor={"#EAD3FF"}
          color={"#6F1BAE"}
          onClick={handleAddPhoneNumber}
        >
          <Icon as={Plus} mx="0" color={"#6F1BAE"} />
          افزودن شماره موبایل
        </Button>
      </chakra.div>
      <Button
        mt="4"
        w="full"
        bg="amir.primary"
        borderRadius="6px"
        color="amir.secondaryBg"
        onClick={handleSubmit}
        isLoading={btnLoading}
        isDisabled={!phoneNumberList.length}
      >
        تائید و ادامه
      </Button>
    </chakra.div>
  );
};
