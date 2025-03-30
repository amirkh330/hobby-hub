import { CallApi, PostApi } from "@/settings/axiosConfig";
import { IUserProfile } from "@/types/responses/ResponsesTypes";
import { useToast } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

type FormData = {
  avatarFile: File | null | string;
  fullName: string;
  email: string;
  sex: string;
  birthDate: string;
};
export const useEditProfile = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [data, setData] = useState<IUserProfile>();
  const [loading, setLoading] = useState(false);
  const [loadingButton, setLoadingButton] = useState(false);

  useEffect(() => {
    setLoading(true);
    CallApi.get("/me/profile")
      .then(({ data }) => {
        setData(data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm<FormData>();

  useEffect(() => {
    if (data) {
      setValue("avatarFile", data?.avatarUrl);
      setValue("fullName", data?.fullName);
      setValue("email", data?.email);
      setValue("sex", data?.sex);
      setValue("birthDate", data?.birthDate);
    }
  }, [data]);

  const toast = useToast();
  const navigate = useNavigate();

  const onSubmit = (data: FormData) => {
    setLoadingButton(true);

    const formData = new FormData();
    Object.keys(data).forEach((key) => {
      const typedKey = key as keyof FormData;
      if (typedKey === "avatarFile" && data[typedKey] instanceof File) {
        formData.append(key, data[typedKey]);
      } else {
        formData.append(key, data[typedKey] as string);
      }
    });

    PostApi.put("/me/profile", formData)
      .then(({ data }) => {
        navigate("/profile");
        toast({
          title: "فرم با موفقیت ارسال شد!",
          status: "success",
          duration: 3000,
          position: "top",
        });
      })
      .finally(() => {
        setLoadingButton(false);
      });
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setValue("avatarFile", file);
    }
  };

  const handleAvatarClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return {
    data,
    errors,
    control,
    loading,
    onSubmit,
    register,
    fileInputRef,
    handleSubmit,
    loadingButton,
    handleAvatarClick,
    handleImageUpload,
  };
};
