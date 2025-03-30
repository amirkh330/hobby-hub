import { Footer } from "@/components/Common/Footer/Footer";
import Map from "@/components/CoreComponents/Map/Map";
import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Textarea,
  chakra,
} from "@chakra-ui/react";
import { Controller } from "react-hook-form";
import { usePanelRegister } from "./PanelRegister.biz";

export const PanelRegister = () => {
  const { errors, register, handleSubmit, onSubmit, control, loading } =
    usePanelRegister();
  return (
    <chakra.div
      pt="4"
      h="calc(100dvh - 56px)"
      display="flex"
      flexDirection="column"
      m="0"
      justifyContent="space-between"
    >
      <chakra.form mx="0" overflow="auto" onSubmit={handleSubmit(onSubmit)}>
        <Flex p="4" mx="0" gap="6" flexDirection="column" color="amir.common">
          <FormControl isInvalid={!!errors.title}>
            <FormLabel fontSize={"14px"} fontWeight={400} color="amir.common">
              نام کافه
            </FormLabel>
            <Input placeholder="نام کافه" {...register("title")} />
            <FormErrorMessage>{errors.title?.message}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.districtId}>
            <FormLabel fontSize={"14px"} fontWeight={400} color="amir.common">
              محله
            </FormLabel>
            <Input placeholder="شهر" {...register("districtId")} />
            <FormErrorMessage>{errors.districtId?.message}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.map}>
            <FormLabel fontSize={"14px"} fontWeight={400} color="amir.common">
              موقعیت کافه روی نقشه
            </FormLabel>
            <Controller
              name="map"
              control={control}
              render={({ field }) => (
                <Map setNewPin={(e) => field.onChange(e)} />
              )}
            />
            <FormErrorMessage>{errors.map?.message}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.address}>
            <FormLabel fontSize={"14px"} fontWeight={400} color="amir.common">
              آدرس
            </FormLabel>
            <Textarea placeholder="آدرس" {...register("address")} />
            <FormErrorMessage>{errors.address?.message}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.ownerFullName}>
            <FormLabel fontSize={"14px"} fontWeight={400} color="amir.common">
              نام و نام خانوادگی مالک
            </FormLabel>
            <Input
              placeholder="نام و نام خانوادگی مالک"
              {...register("ownerFullName")}
            />
            <FormErrorMessage>{errors.ownerFullName?.message}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.ownerMobileNumber}>
            <FormLabel fontSize={"14px"} fontWeight={400} color="amir.common">
              شماره موبایل مالک
            </FormLabel>
            <Input
              placeholder="شماره موبایل مالک"
              {...register("ownerMobileNumber")}
            />
            <FormErrorMessage>
              {errors.ownerMobileNumber?.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.ownerNationalNumber}>
            <FormLabel fontSize={"14px"} fontWeight={400} color="amir.common">
              کد ملی مالک{" "}
            </FormLabel>
            <Input
              placeholder="کد ملی مالک"
              {...register("ownerNationalNumber")}
            />
            <FormErrorMessage>
              {errors.ownerNationalNumber?.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.sheba}>
            <FormLabel fontSize={"14px"} fontWeight={400} color="amir.common">
              شماره شبا
            </FormLabel>
            <Input placeholder="شماره شبا" {...register("sheba")} />
            <FormErrorMessage>{errors.sheba?.message}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.phoneNumber}>
            <FormLabel fontSize={"14px"} fontWeight={400} color="amir.common">
              شماره تلفن ثابت کافه{" "}
            </FormLabel>
            <Input
              placeholder="شماره تلفن ثابت کافه"
              {...register("phoneNumber")}
            />
            <FormErrorMessage>{errors.phoneNumber?.message}</FormErrorMessage>
          </FormControl>

          <Button
            isLoading={loading}
            type="submit"
            bgColor={"amir.primary"}
            width="full"
          >
            ثبت‌نام
          </Button>
        </Flex>
      </chakra.form>
      <Footer />
    </chakra.div>
  );
};
