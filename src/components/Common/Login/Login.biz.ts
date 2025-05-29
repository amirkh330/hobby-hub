import BottomSheet from "@/components/CoreComponents/BottomSheet/BottomSheet";
import { Box, Button, Input, Text, useDisclosure } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import useAuthStore from "@/store/authStore";
import { emailRegex, phoneRegex } from "@/utils/Regex/Regex";
import { useLocation, useRoutes } from "react-router-dom";

interface ILogin {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}
export const useLogin = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [serverOtpKey, setServerOtpKey] = useState(null);
  const [loading, setLoading] = useState(false);
  const { pathname } = useLocation();
  const [step, setStep] = useState<"email" | "otp">("email");

  const handleSendOtp = async () => {
    setLoading(true);
    axios
      .post(
        `${
          import.meta.env.VITE_APP_BASE_URL
        }authorization/login-whit-otp/create-otp/`,
        {
          email,
        }
      )
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
    if (emailRegex.test(email)) {
      handleSendOtp();
    } else {
      setErrorMessage("phone number is incorrect");
    }
  };

  const handleReset = () => {
    setErrorMessage("");
    setEmail("");
    setStep("email");
    setOtp("");
  };
  const handleVerifyOtp = async () => {
    setLoading(true);

    axios
      .post(
        `${
          import.meta.env.VITE_APP_BASE_URL
        }authorization/login-whit-otp/validate-otp/`,
        {
          code: otp,
          email,
          // code: serverOtpKey,
        }
      )
      .then(({ data }) => {
        console.log("data:", data);
        
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return {
    otp,
    step,
    email,
    setOtp,
    loading,
    setEmail,
    setLoading,
    handleReset,
    errorMessage,
    handleVerifyOtp,
    setErrorMessage,
    handleSetPhoneNumber,
  };
};
