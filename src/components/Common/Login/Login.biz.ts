import BottomSheet from "@/components/CoreComponents/BottomSheet/BottomSheet";
import { Box, Button, Input, Text, useDisclosure } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import useAuthStore from "@/store/authStore";
import { phoneRegex } from "@/utils/Regex/Regex";
import { useLocation, useRoutes } from "react-router-dom";

interface ILogin {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}
export const useLogin = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [serverOtpKey, setServerOtpKey] = useState(null);
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState<"phone" | "otp">("phone");
  const handleSendOtp = async () => {
    setLoading(true);
    axios
      .post(`${import.meta.env.VITE_APP_BASE_URL}/auth/_init`, {
        loginIdentifier: phoneNumber,
      })
      .then(({ data }) => {
        setServerOtpKey(data);
        // handleLogin();
        setStep("otp");
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleSetPhoneNumber = () => {
    if (phoneRegex.test(phoneNumber)) {
      handleSendOtp();
    } else {
      setErrorMessage("شماره وارد شده صحیح نیست");
    }
  };

  const handleReset = () => {
    setErrorMessage("");
    setPhoneNumber("");
    setStep("phone");
    setOtp("");
  };
  const { pathname } = useLocation();
  const handleVerifyOtp = async () => {
    setLoading(true)

    axios
      .post(`${import.meta.env.VITE_APP_BASE_URL}/auth/_authenticate`, {
        otp,
        code: serverOtpKey,
      })
      .then(({ data }) => {
        window.location.replace(
          `${
            import.meta.env.VITE_APP_BASE_URL
          }/auth/_authorize?code=${data}&returnUrl=${pathname}`
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return {
    handleSetPhoneNumber,
    phoneNumber,
    setPhoneNumber,
    otp,
    loading,
    setLoading,
    step,
    errorMessage,
    handleReset,
    setOtp,
    handleVerifyOtp,
    setErrorMessage,
  };
};
