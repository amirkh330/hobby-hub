import useAuthStore from "@/store/authStore";
import { Footer } from "@/components/Common/Footer/Footer";
import {
  Avatar,
  Box,
  chakra,
  Divider,
  Flex,
  Icon,
  Text,
} from "@chakra-ui/react";
import { CaretLeft } from "@phosphor-icons/react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { CallApi } from "@/settings/axiosConfig";
import { IUserProfile } from "@/types/responses/ResponsesTypes";
import { Loading } from "@/components/CoreComponents/Loading/Loading";
import { Star } from "@phosphor-icons/react/dist/ssr";
export const Profile = () => {
  const { logout } = useAuthStore();
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  const [userInfo, setUserInfo] = useState<IUserProfile>();
  useEffect(() => {
    setLoading(true);
    CallApi.get("/me/profile")
      .then(({ data }) => {
        setUserInfo(data);
      })
      .finally(() => {
        setLoading(false);
      });
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
        <chakra.div m="0" overflow="auto" mb="4">
          <Flex
            px="4"
            py="2"
            mx="3"
            as={Link}
            to="edit"
            borderRadius="8px"
            alignItems="center"
            bg="amir.secondaryBg"
            justifyContent="space-between"
          >
            <Flex mx="0" alignItems="center" gap="2">
              <Avatar src={userInfo?.avatarUrl} />
              <Box>
                <Flex alignItems={"center"} gap="2">
                  <Text
                    fontWeight={600}
                    fontSize={"16px"}
                    color={"amir.common"}
                  >
                    {userInfo?.fullName}
                  </Text>
                  <Flex
                    bgColor={"#5C5C5C"}
                    px={1}
                    borderRadius={"4px"}
                    alignItems={"center"}
                    color={"#E7E7E7"}
                    gap="2"
                    mx={0}
                    fontSize={"12px"}
                  >
                    <Icon as={Star} color={"yellow.500"} weight="fill" mx="0" />
                    {userInfo?.rate}
                  </Flex>
                </Flex>
                <Text
                  fontWeight={500}
                  fontSize={"14px"}
                  color={"amir.secondary"}
                >
                  {userInfo?.phoneNumber}
                </Text>
              </Box>
            </Flex>
            <Icon as={CaretLeft} mx="0" fontSize={"24px"} color="amir.common" />
          </Flex>

          <Flex
            my="4"
            px="4"
            py="2"
            mx="0"
            as={Link}
            to="wallet"
            alignItems="center"
            justifyContent="space-between"
          >
            <Text fontSize={"16px"} color={"amir.common"} fontWeight={600}>
              کیف پول
            </Text>
            <Icon as={CaretLeft} mx="0" fontSize={"24px"} color="amir.common" />
          </Flex>
          <Divider color="gray.600" />

          <Flex
            my="4"
            px="4"
            py="2"
            mx="0"
            as={Link}
            to="transactions"
            alignItems="center"
            justifyContent="space-between"
          >
            <Text fontSize={"16px"} color={"amir.common"} fontWeight={600}>
              تراکنش‌ها
            </Text>
            <Icon as={CaretLeft} mx="0" fontSize={"24px"} color="amir.common" />
          </Flex>
          <Divider color="gray.600" />

          <Flex
            my="4"
            px="4"
            py="2"
            mx="0"
            as={Link}
            to="support"
            alignItems="center"
            justifyContent="space-between"
          >
            <Text fontSize={"16px"} color={"amir.common"} fontWeight={600}>
              ارتباط با پشتیبانی
            </Text>
            <Icon as={CaretLeft} mx="0" fontSize={"24px"} color="amir.common" />
          </Flex>
          <Divider color="gray.600" />

          <Flex
            px="4"
            py="2"
            my="4"
            mx="0"
            onClick={() => {
              logout();
              navigate("/");
            }}
            alignItems="center"
            justifyContent="space-between"
          >
            <Text fontSize={"16px"} color={"amir.common"} fontWeight={600}>
              خروج از حساب کاربری
            </Text>
            <Icon as={CaretLeft} mx="0" fontSize={"24px"} color="amir.common" />
          </Flex>
          <Divider color="gray.600" />
        </chakra.div>
      )}
      <Footer />
    </chakra.div>
  );
};
