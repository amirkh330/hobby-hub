// import React from "react";
// import {
//   Box,
//   Button,
//   Center,
//   chakra,
//   Flex,
//   HStack,
//   Icon,
//   Image,
//   Input,
//   PinInput,
//   PinInputField,
//   Text,
// } from "@chakra-ui/react";
// // import { usePanelLogin } from "./PanelLogin.biz";
// import { persianToEnglishNumbers } from "@/utils/convertNumber/ConvertNumber";
// import { Pen } from "@phosphor-icons/react/dist/ssr";
// import { Link } from "react-router-dom";

// export const PanelLogin = () => {
//   const {
//     handleSetPhoneNumber,
//     phoneNumber,
//     setPhoneNumber,
//     otp,
//     loading,
//     setLoading,
//     step,
//     errorMessage,
//     handleReset,
//     setOtp,
//     handleVerifyOtp,
//     setErrorMessage,
//   } = usePanelLogin();
//   return step === "phone" ? (
//     <chakra.div p={4}>
//       <Image src="/images/host-login.svg" alt="panellogin" w="100%" h="100%" />
//       <Text
//         textAlign="center"
//         fontWeight={500}
//         fontSize={"16px"}
//         color="amir.common"
//         my="4"
//       >
//         ورود کافه به جورچین
//       </Text>
//       <Flex mb="2">
//         <Text fontSize="12px" fontWeight={400} color={"amir.common"}>
//           شماره موبایل{" "}
//         </Text>
//       </Flex>
//       <Input
//         mb="4"
//         placeholder="09123456789"
//         dir="ltr"
//         maxLength={11}
//         color="amir.common"
//         _placeholder="amir.common"
//         _focusVisible={{ borderColor: "amir.primary" }}
//         value={phoneNumber}
//         onChange={(e) => {
//           setPhoneNumber(persianToEnglishNumbers(e.target.value));
//           errorMessage && setErrorMessage("");
//         }}
//       />
//       {errorMessage && (
//         <Text fontSize={"12px"} mb="4" color="red">
//           {errorMessage}
//         </Text>
//       )}
//       <Button
//         isLoading={loading}
//         onClick={handleSetPhoneNumber}
//         p="2"
//         w="full"
//         borderRadius="4px"
//         bgColor="amir.primary"
//       >
//         دریافت کد
//       </Button>
//       <Text
//         textAlign="center"
//         fontWeight={500}
//         fontSize={"16px"}
//         color="amir.primary"
//         py="6"
//       >
//         <Link to={"/panel/register"}>ثبت‌نام کافه در جورچین</Link>
//       </Text>
//     </chakra.div>
//   ) : (
//     <Box mx="auto" p="4">
//       <Image src="/images/host-login.svg" alt="panellogin" w="100%" h="100%" />
//       <Text
//         textAlign="center"
//         fontWeight={500}
//         fontSize={"16px"}
//         color="amir.common"
//         my="4"
//       >
//         دریافت کد فعالسازی
//       </Text>
//       <Text fontWeight={400} fontSize={"14px"} color="amir.common" my="4">
//         کد ارسال شده به شماره {phoneNumber} را وارد کنید.
//       </Text>
//       <Text
//         onClick={handleReset}
//         fontWeight={400}
//         fontSize={"14px"}
//         color="amir.primary"
//         my="4"
//       >
//         ویرایش شماره موبایل
//       </Text>
//       <HStack my="6" justifyContent={"space-around"} mx="8" dir="ltr">
//         <PinInput
//           value={otp}
//           onChange={(e) => setOtp(persianToEnglishNumbers(e))}
//         >
//           <PinInputField
//             _focusVisible={{ borderColor: "amir.primary" }}
//             color={"amir.common"}
//           />
//           <PinInputField
//             _focusVisible={{ borderColor: "amir.primary" }}
//             color={"amir.common"}
//           />
//           <PinInputField
//             _focusVisible={{ borderColor: "amir.primary" }}
//             color={"amir.common"}
//           />
//           <PinInputField
//             _focusVisible={{ borderColor: "amir.primary" }}
//             color={"amir.common"}
//           />
//         </PinInput>
//       </HStack>
//       <Button
//         my="2"
//         isDisabled={otp.length !== 4}
//         isLoading={loading}
//         bg={"amir.primary"}
//         w={"100%"}
//         onClick={handleVerifyOtp}
//       >
//         ورود
//       </Button>
//     </Box>
//   );
// };
