import { Footer } from "@/components/Common/Footer/Footer";
import { Image, Text, chakra } from "@chakra-ui/react";
import React from "react";

export const PanelRegisterSuccess = () => {
  return (
    <chakra.div
      pt="4"
      h="calc(100dvh - 56px)"
      display="flex"
      flexDirection="column"
      m="0"
      justifyContent="space-between"
    >
      <chakra.div p="4" overflow="auto">
        <Image src="/images/register-success.svg" w={"280px"} />
        <Text
          textAlign="center"
          fontSize="14px"
          py="6"
          fontWeight={600}
          color="amir.common"
        >
          ثبت نام شما با موفقیت انجام شد.
        </Text>
        <Text
          textAlign="center"
          fontSize="14px"
          fontWeight={400}
          lineHeight={"7"}
          color="amir.common"
        >
          بعد از بررسی اطلاعات توسط کارشناسان جورچین، حساب کافه فعال خواهد شد و
          نتیجه بصورت پیامک اطلاع داده می‌شود.
        </Text>
      </chakra.div>
      <Footer />
    </chakra.div>
  );
};
