import { NumberInput } from "@/components/CoreComponents/NumberInput/NumberInput";
import {
  Button,
  chakra,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text
} from "@chakra-ui/react";
import gregorian from "react-date-object/calendars/gregorian";
import persian from "react-date-object/calendars/persian";
import gregorian_en from "react-date-object/locales/gregorian_en";
import persian_fa from "react-date-object/locales/persian_fa";
import { Controller } from "react-hook-form";
import DatePicker, { DateObject } from "react-multi-date-picker";
import TimePicker from "react-multi-date-picker/plugins/time_picker";
import { usePanelEventAddSans } from "./PanelEventAddSans.biz";

export const PanelEventAddSans = (props: {
  eventId: number | undefined;
  onClose: () => void;
}) => {
  const { control, errors, loadingButton, onSubmit, handleSubmit } =
    usePanelEventAddSans(props);
  return (
    <chakra.div
      color="amir.common"
      display="flex"
      flexDirection="column"
      m="0"
      justifyContent="space-between"
    >
      <chakra.form
        px="4"
        mx="4"
        mb="4"
        borderRadius="8px"
        bgColor={"amir.secondaryBg"}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Flex flexDirection="column" gap="6" mx="0">
          <FormControl>
            <FormLabel fontSize="12px" fontWeight={400}>
              تاریخ
            </FormLabel>
            <Controller
              name="date"
              control={control}
              rules={{ required: "این فیلد اجباری است" }}
              render={({ field }) => (
                <DatePicker
                  onChange={(e: any) =>
                    field.onChange(
                      new DateObject(e)
                        .convert(gregorian, gregorian_en)
                        .format("YYYY-MM-DD")
                    )
                  }
                  placeholder="انتخاب کنید"
                  value={
                    field.value
                      ? new DateObject(field.value)
                          .convert(persian, persian_fa)
                          .format("YYYY-MM-DD")
                      : ""
                  }
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
                  minDate={
                    new DateObject({ date: new Date(), calendar: persian })
                  } // محدود کردن به امروز و بعد از آن
                />
              )}
            />
            {errors.date && (
              <Text color="red.500" fontSize="12px">
                {errors.date.message}
              </Text>
            )}
          </FormControl>

          <Flex alignItems="center" mx="0" gap="2">
            <FormControl>
              <FormLabel fontSize="12px" fontWeight={400}>
                از ساعت
              </FormLabel>
              <Controller
                name="from"
                control={control}
                rules={{ required: "این فیلد اجباری است" }}
                render={({ field }) => (
                  <TimeSelector {...field} placeholder="انتخاب کنید" />
                )}
              />
              {errors.from && (
                <Text color="red.500" fontSize="12px">
                  {errors.from.message}
                </Text>
              )}
            </FormControl>

            <FormControl>
              <FormLabel fontSize="12px" fontWeight={400}>
                تا ساعت
              </FormLabel>
              <Controller
                name="to"
                control={control}
                rules={{ required: "این فیلد اجباری است" }}
                render={({ field }) => (
                  <TimeSelector {...field} placeholder="انتخاب کنید" />
                )}
              />
              {errors.to && (
                <Text color="red.500" fontSize="12px">
                  {errors.to.message}
                </Text>
              )}
            </FormControl>
          </Flex>

          <FormControl>
            <FormLabel fontSize="12px" fontWeight={400}>
              قیمت پایه برای هر نفر (تومان)
            </FormLabel>
            <Controller
              name="basePrice"
              control={control}
              rules={{ required: "این فیلد اجباری است" }}
              render={({ field }) => {
                return (
                  <NumberInput
                    {...field}
                    onChange={(e: any) => {
                      field.onChange(Number(e));
                    }}
                  />
                );
              }}
            />
          </FormControl>

          <FormControl>
            <FormLabel fontSize="12px" fontWeight={400}>
              تخفیف
            </FormLabel>
            <Controller
              name="discountPercent"
              control={control}
              render={({ field }) => (
                <Input placeholder="وارد کنید" {...field} />
              )}
            />
            {errors.discountPercent && (
              <Text color="red.500" fontSize="12px">
                {errors.discountPercent.message}
              </Text>
            )}
          </FormControl>

          <FormControl>
            <FormLabel fontSize="12px" fontWeight={400}>
              ظرفیت رزرو بازی
            </FormLabel>
            <Controller
              name="capacity"
              control={control}
              rules={{ required: "این فیلد اجباری است" }}
              render={({ field }) => (
                <Input placeholder="وارد کنید" {...field} />
              )}
            />
            {errors.capacity && (
              <Text color="red.500" fontSize="12px">
                {errors.capacity.message}
              </Text>
            )}
          </FormControl>
        </Flex>

        <Button
          type="submit"
          isLoading={loadingButton}
          p="2"
          w="full"
          mt="8"
          borderRadius="4px"
          bgColor="amir.primary"
        >
          ثبت نهایی ایونت
        </Button>
      </chakra.form>
      {/* <PanelFooter /> */}
    </chakra.div>
  );
};
const TimeSelector = (props: any) => {
  return (
    <DatePicker
      {...props}
      format="HH:mm"
      onChange={(e: any) => props.onChange(e.format("HH:mm"))}
      value={props.value ? new DateObject(props.value).format("HH:mm") : ""}
      disableDayPicker
      style={{
        width: "100%",
        height: "40px",
        backgroundColor: "transparent",
      }}
      plugins={[
        <TimePicker
          style={{
            backgroundColor: "#414141",
            color: "black",
          }}
          hideSeconds
        />,
      ]}
    />
  );
};
