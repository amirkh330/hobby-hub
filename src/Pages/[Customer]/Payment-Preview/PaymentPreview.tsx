import { Toman } from "@/utils/Toman/Toman";
import {
  Box,
  Button,
  chakra,
  Divider,
  Flex,
  Icon,
  Input,
  Switch,
  Text,
} from "@chakra-ui/react";
import { CheckCircle } from "@phosphor-icons/react";
import { Cardholder } from "@phosphor-icons/react/dist/ssr";
import { usePaymentPreview } from "./PaymentPreview.biz";
export const PaymentPreview = () => {
  const {
    discount,
    handlePayment,
    handleSubmitSetDiscount,
    setDiscount,
    item,
    msgError,
    loading,
    useWallet,
    setUseWallet,
  } = usePaymentPreview();

  return (
    <chakra.div>
      <chakra.div h="calc(100vh - 110px)">
        <Flex flexDirection="column" mx="0" px="4" gap="24px" pt="8px">
          <Text fontSize={"16px"} fontWeight={600} color={"amir.common"}>
            جزئیات رزرو بازی
          </Text>
          <Flex mx="0" alignItems="center" justifyContent="space-between">
            <Text fontSize={"14px"} fontWeight={400} color={"amir.common"}>
              هزینه رزرو
            </Text>
            <Text fontSize={"16px"} fontWeight={600} color={"amir.common"}>
              {Toman(item.totalAmount)}
            </Text>
          </Flex>
          <Flex mx="0" alignItems="center" justifyContent="space-between">
            <Text fontSize={"14px"} fontWeight={400} color={"green.300"}>
              تخفیف بازی
            </Text>
            <Text fontSize={"16px"} fontWeight={600} color={"green.300"}>
              {Toman(item.eventDiscountAmount)}
            </Text>
          </Flex>
          {item.discountCodeAmount && (
            <Flex mx="0" alignItems="center" justifyContent="space-between">
              <Text fontSize={"14px"} fontWeight={400} color={"green.300"}>
                کد تخفیف
              </Text>
              <Text fontSize={"16px"} fontWeight={600} color={"green.300"}>
                {Toman(item.discountCodeAmount)}
              </Text>
            </Flex>
          )}

          {item.walletWithDrawAmount && (
            <Flex mx="0" alignItems="center" justifyContent="space-between">
              <Text fontSize={"14px"} fontWeight={400} color={"amir.common"}>
                شارژ کیف پول
              </Text>
              <Text fontSize={"16px"} fontWeight={600} color={"amir.common"}>
                {Toman(item.walletWithDrawAmount)}
              </Text>
            </Flex>
          )}
          {/* <Flex
            borderRadius="8px"
            border="1px solid"
            borderColor={useWallet ? "amir.primary" : "transparent"}
            background="amir.secondaryBg"
            px="16px"
            py="16px"
            alignItems="center"
            justifyContent="space-between"
          >
            <Flex
              alignItems="center"
              mx="0"
              justifyContent={"space-between"}
              gap="2"
            >
              <Icon
                as={Cardholder}
                mx="0"
                w="6"
                h="6"
                p="1"
                bgColor={"amir.common"}
                borderRadius={"50%"}
              />
              <Text fontSize={"14px"} fontWeight={400} color={"amir.common"}>
                پرداخت از کیف پول - {Toman(item.userWalletBalance!)}
              </Text>
            </Flex>

            <Switch
              mx="0"
              sx={{
                ".chakra-switch__track": {
                  _checked: {
                    bg: "amir.primary",
                  },
                },

                ".chakra-switch__thumb": {
                  m: "0",
                  bg: "amir.common",
                },
              }}
              checked={useWallet}
              onChange={(e) => setUseWallet(e.target.checked)}
            />
          </Flex> */}
          <Flex mx="0" alignItems="center" justifyContent="space-between">
            <Text fontSize={"16px"} fontWeight={600} color={"amir.common"}>
              مبلغ نهایی
            </Text>
            <Text fontSize={"16px"} fontWeight={600} color={"amir.common"}>
              {Toman(item.finalAmount)}
            </Text>
          </Flex>
        </Flex>
        <Divider color="gray.600" my="24px" />
        <Flex flexDirection="column" mx="0" px="4" gap="24px">
          <Text fontSize={"16px"} fontWeight={600} color={"amir.common"}>
            کد تخفیف
          </Text>
          <Flex
            mx="0"
            alignItems="center"
            justifyContent="space-between"
            gap="2"
          >
            <Input
              color="amir.common"
              value={discount}
              onChange={(e) => setDiscount(e.target.value)}
            />
            <Button
              isLoading={loading}
              variant={"outline"}
              color={"amir.primary"}
              borderColor={"amir.primary"}
              onClick={handleSubmitSetDiscount}
            >
              اعمال کد
            </Button>
          </Flex>
          {msgError && <Text color="red.500">کد تخفیف اشتباه است.</Text>}
        </Flex>
        {item.userWalletBalance && (
          <Box mx="4">
            <Divider color="gray.600" my="24px" />
            <Text
              fontSize={"16px"}
              fontWeight={600}
              color={"amir.common"}
              mb="4"
            >
              استفاده از کیف پول
            </Text>
            <Flex
              borderRadius="8px"
              border="1px solid"
              borderColor={useWallet ? "amir.primary" : "transparent"}
              background="amir.secondaryBg"
              px="16px"
              py="16px"
              alignItems="center"
              justifyContent="space-between"
            >
              <Flex
                alignItems="center"
                mx="0"
                justifyContent={"space-between"}
                gap="2"
              >
                <Icon
                  as={Cardholder}
                  mx="0"
                  w="6"
                  h="6"
                  p="1"
                  bgColor={"amir.common"}
                  borderRadius={"50%"}
                />
                <Text fontSize={"14px"} fontWeight={400} color={"amir.common"}>
                  استفاده از کیف پول - {Toman(item.userWalletBalance)}
                </Text>
              </Flex>

              <Switch
                mx="0"
                sx={{
                  ".chakra-switch__track": {
                    _checked: {
                      bg: "amir.primary",
                    },
                  },

                  ".chakra-switch__thumb": {
                    m: "0",
                    bg: "amir.common",
                  },
                }}
                checked={useWallet}
                onChange={(e) => setUseWallet(e.target.checked)}
              />
            </Flex>
          </Box>
        )}
        <Divider color="gray.600" my="24px" />
        <Flex flexDirection="column" mx="0" px="4" gap="24px">
          <Text fontSize={"16px"} fontWeight={600} color={"amir.common"}>
            انتخاب روش پرداخت
          </Text>

          <Flex
            borderRadius="8px"
            border="1px solid"
            borderColor={"amir.primary"}
            background="amir.secondaryBg"
            px="16px"
            py="16px"
            mx="0"
            alignItems="center"
            justifyContent="space-between"
          >
            <Flex alignItems="center" mx="0" gap="2">
              <Icon
                as={Cardholder}
                mx="0"
                w="6"
                h="6"
                p="1"
                bgColor={"amir.common"}
                borderRadius={"50%"}
              />
              <Text fontSize={"14px"} fontWeight={400} color={"amir.common"}>
                پرداخت مستقیم از درگاه
              </Text>
            </Flex>
            <Icon
              as={CheckCircle}
              mx="0"
              color={"amir.primary"}
              weight="fill"
            />
          </Flex>
        </Flex>
      </chakra.div>
      <chakra.div px="4">
        <Button
          width={"100%"}
          variant={"solid"}
          bgColor="amir.primary"
          color="amir.secondaryBg"
          onClick={handlePayment}
        >
          پرداخت
        </Button>
      </chakra.div>
    </chakra.div>
  );
};
