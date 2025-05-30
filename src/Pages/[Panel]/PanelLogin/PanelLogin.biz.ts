// import useAuthStore from "@/store/authStore";
// import { phoneRegex } from "@/utils/Regex/Regex";
// import axios from "axios";
// import { useState } from "react";

// export const usePanelLogin = () => {
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [otp, setOtp] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");
//   const [serverOtpKey, setServerOtpKey] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [step, setStep] = useState<"phone" | "otp">("phone");
//   // const { login } = useAuthStore();

//   // const handleSendOtp = async () => {
//   //   setLoading(true);
//   //   axios
//   //     .post(`${import.meta.env.VITE_APP_PANEL_BASE_URL}/auth/_init`, {
//   //       loginIdentifier: phoneNumber,
//   //     })
//   //     .then(({ data }) => {
//   //       setServerOtpKey(data);
//   //       // handleLogin();
//   //       setStep("otp");
//   //     })
//   //     .catch((err) => {
//   //       console.log(err);
//   //     })
//   //     .finally(() => {
//   //       setLoading(false);
//   //     });
//   // };

//   // const handleSetPhoneNumber = () => {
//   //   if (phoneRegex.test(phoneNumber)) {
//   //     handleSendOtp();
//   //   } else {
//   //     setErrorMessage("شماره وارد شده صحیح نیست");
//   //   }
//   // };

//   // const handleReset = () => {
//   //   setErrorMessage("");
//   //   setPhoneNumber("");
//   //   setStep("phone");
//   //   setOtp("");
//   // };
//   // const handleVerifyOtp = async () => {
//   //   setLoading(true);
//   //   axios
//   //     .post(`${import.meta.env.VITE_APP_BASE_URL}/auth/_authenticate`, {
//   //       otp,
//   //       code: serverOtpKey,
//   //     })
//   //     .then(({ data }) => {
//   //       login(true);
//   //       window.location.replace(
//   //         `${
//   //           import.meta.env.VITE_APP_BASE_URL
//   //         }/auth/_authorize?code=${data}&returnUrl=${"/panel/events"}`
//   //       );
//   //     })
//   //     .catch((err) => {
//   //       console.log(err);
//   //       setLoading(false);
//   //     });
//   // };

//   return {
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
//   };
// };
