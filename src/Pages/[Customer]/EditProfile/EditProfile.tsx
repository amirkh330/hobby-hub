import React, { useRef, useState } from "react";
import { Footer } from "@/components/Common/Footer/Footer";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Select,
  VStack,
  Avatar,
  Box,
  Text,
  chakra,
  Center,
  IconButton,
} from "@chakra-ui/react";
import { useEditProfile } from "./EditProfile.biz";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { Controller } from "react-hook-form";
import { Camera } from "@phosphor-icons/react/dist/ssr";
import gregorian from "react-date-object/calendars/gregorian";
import gregorian_en from "react-date-object/locales/gregorian_en";
import DateObject from "react-date-object";
import { Loading } from "@/components/CoreComponents/Loading/Loading";

export const EditProfile = () => {
  const {
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
  } = useEditProfile();

  return (
    <chakra.div
      pt="4"
      h="calc(100dvh - 56px)"
      display="flex"
      flexDirection="column"
      m="0"
      justifyContent="space-between"
    >
      <chakra.div m="0" overflow="auto" mb="4" px="4" color="amir.common">
        {loading ? (
          <Loading />
        ) : (
          <form onSubmit={handleSubmit(onSubmit)}>
            <VStack spacing={4}>
              {/* Avatar */}
              <FormControl>
                <Center>
                  <Controller
                    name="avatarFile"
                    control={control}
                    render={({ field }) => {
                      return (
                        <Avatar
                          src={
                            field.value instanceof File
                              ? URL.createObjectURL(field.value)
                              : field.value || undefined
                          }
                          w={"80px"}
                          h={"80px"}
                          onClick={handleAvatarClick}
                        />
                      );
                    }}
                  />
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    style={{ display: "none" }}
                    onChange={handleImageUpload}
                  />
                </Center>
              </FormControl>

              {/* Name */}
              <FormControl isInvalid={!!errors.fullName}>
                <FormLabel>نام کاربری</FormLabel>
                <Controller
                  name="fullName"
                  control={control}
                  render={({ field }) => {
                    return (
                      <Input
                        type="text"
                        placeholder="نام خود را وارد کنید"
                        {...field}
                      />
                    );
                  }}
                />
              </FormControl>

              <FormControl>
                <FormLabel>شماره موبایل</FormLabel>
            
                <Input dir="ltr" value={data?.phoneNumber} isDisabled />
              </FormControl>

              {/* Email */}
              <FormControl isInvalid={!!errors.email}>
                <FormLabel>ایمیل</FormLabel>
                <Input
                  type="email"
                  dir="ltr"
                  placeholder="ایمیل خود را وارد کنید"
                  {...register("email", {
                    pattern: {
                      value:
                        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                      message: "ایمیل نامعتبر است",
                    },
                  })}
                />
                {errors.email && (
                  <Text color="red.500">{errors.email.message}</Text>
                )}
              </FormControl>

              {/* Gender */}
              <FormControl>
                <FormLabel>جنسیت</FormLabel>
                <Select {...register("sex")}>
                  <option value="Man">مرد</option>
                  <option value="Woman">زن</option>
                </Select>
              </FormControl>

              {/* Birth Date */}
              <FormControl>
                <FormLabel>تاریخ تولد</FormLabel>
                <Controller
                  name="birthDate"
                  control={control}
                  render={({ field }) => (
                    <DatePicker
                      onChange={(e: any) =>
                        field.onChange(
                          new DateObject(e)
                            .convert(gregorian, gregorian_en)
                            .format("YYYY-MM-DD")
                        )
                      }
                      value={new DateObject(field.value)
                        .convert(persian, persian_fa)
                        .format("YYYY-MM-DD")}
                      containerStyle={{
                        width: "100%",
                      }}
                      style={{
                        width: "100%",
                        height: "40px",
                        backgroundColor: "transparent",
                      }}
                      calendar={persian}
                      locale={persian_fa}
                    />
                  )}
                />
                {errors.birthDate && (
                  <Text color="red.500">{errors.birthDate.message}</Text>
                )}
              </FormControl>

              <Button
                isLoading={loadingButton}
                type="submit"
                bgColor={"amir.primary"}
                width="full"
              >
                ثبت تغییرات
              </Button>
            </VStack>
          </form>
        )}
      </chakra.div>
      <Footer />
    </chakra.div>
  );
};
