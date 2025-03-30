import {
  Box,
  Button,
  chakra,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  Image,
  Input,
  NumberInputField,
  NumberInputStepper,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Controller } from "react-hook-form";
import DatePicker, { DateObject } from "react-multi-date-picker";
import { usePanelEventCreate } from "./PanelEventCreate.biz";
import gregorian from "react-date-object/calendars/gregorian";
import gregorian_en from "react-date-object/locales/gregorian_en";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import TimePicker from "react-multi-date-picker/plugins/time_picker";
import { Toman } from "@/utils/Toman/Toman";
import { NumberInput } from "@/components/CoreComponents/NumberInput/NumberInput";
import { PanelFooter } from "../PanelFooter/PanelFooter";
import { Loading } from "@/components/CoreComponents/Loading/Loading";
import { IScenario } from "@/types/responses/ResponsesTypes";
import BottomSheet from "@/components/CoreComponents/BottomSheet/BottomSheet";
import { Characters } from "@/Pages/[Customer]/EventDetail/Components/Characters/Characters";
import { CallApiHost } from "@/settings/axiosConfig";
import { PanelEventAddSans } from "../PanelEventAddSans/PanelEventAddSans";
import { useNavigate } from "react-router-dom";

// export const PanelEventCreate = () => {
//   const [step, setSteps] = useState();
//   const {
//     control,
//     errors,
//     loading,
//     loadingButton,
//     onSubmit,
//     register,
//     handleSubmit,
//     setValue,
//   } = usePanelEventCreate();
//   return (
//     <chakra.div
//       color="amir.common"
//       pt="4"
//       h="calc(100dvh - 56px)"
//       display="flex"
//       flexDirection="column"
//       m="0"
//       justifyContent="space-between"
//     >
//       <chakra.form
//         p="4"
//         mx="4"
//         borderRadius="8px"
//         bgColor={"amir.secondaryBg"}
//         onSubmit={handleSubmit(onSubmit)}
//       >
//         <Flex flexDirection="column" gap="6" mx="0">
//           <FormControl>
//             <FormLabel fontSize="12px" fontWeight={400}>
//               تاریخ
//             </FormLabel>
//             <Controller
//               name="date"
//               control={control}
//               rules={{ required: "این فیلد اجباری است" }}
//               render={({ field }) => (
//                 <DatePicker
//                   onChange={(e: any) =>
//                     field.onChange(
//                       new DateObject(e)
//                         .convert(gregorian, gregorian_en)
//                         .format("YYYY-MM-DD")
//                     )
//                   }
//                   placeholder="انتخاب کنید"
//                   value={
//                     field.value
//                       ? new DateObject(field.value)
//                           .convert(persian, persian_fa)
//                           .format("YYYY-MM-DD")
//                       : ""
//                   }
//                   containerStyle={{
//                     width: "100%",
//                   }}
//                   style={{
//                     width: "100%",
//                     height: "40px",
//                     backgroundColor: "transparent",
//                   }}
//                   calendar={persian}
//                   locale={persian_fa}
//                   minDate={
//                     new DateObject({ date: new Date(), calendar: persian })
//                   } // محدود کردن به امروز و بعد از آن
//                 />
//               )}
//             />
//             {errors.date && (
//               <Text color="red.500" fontSize="12px">
//                 {errors.date.message}
//               </Text>
//             )}
//           </FormControl>

//           <Flex alignItems="center" mx="0" gap="2">
//             <FormControl>
//               <FormLabel fontSize="12px" fontWeight={400}>
//                 از ساعت
//               </FormLabel>
//               <Controller
//                 name="from"
//                 control={control}
//                 rules={{ required: "این فیلد اجباری است" }}
//                 render={({ field }) => (
//                   <TimeSelector {...field} placeholder="انتخاب کنید" />
//                 )}
//               />
//               {errors.from && (
//                 <Text color="red.500" fontSize="12px">
//                   {errors.from.message}
//                 </Text>
//               )}
//             </FormControl>

//             <FormControl>
//               <FormLabel fontSize="12px" fontWeight={400}>
//                 تا ساعت
//               </FormLabel>
//               <Controller
//                 name="to"
//                 control={control}
//                 rules={{ required: "این فیلد اجباری است" }}
//                 render={({ field }) => (
//                   <TimeSelector {...field} placeholder="انتخاب کنید" />
//                 )}
//               />
//               {errors.to && (
//                 <Text color="red.500" fontSize="12px">
//                   {errors.to.message}
//                 </Text>
//               )}
//             </FormControl>
//           </Flex>

//           <FormControl>
//             <FormLabel fontSize="12px" fontWeight={400}>
//               قیمت پایه برای هر نفر (تومان)
//             </FormLabel>
//             <Controller
//               name="basePrice"
//               control={control}
//               rules={{ required: "این فیلد اجباری است" }}
//               render={({ field }) => {
//                 return (
//                   <NumberInput
//                     {...field}
//                     onChange={(e: any) => {
//                       field.onChange(Number(e));
//                     }}
//                   />
//                 );
//               }}
//             />
//           </FormControl>

//           <FormControl>
//             <FormLabel fontSize="12px" fontWeight={400}>
//               تخفیف
//             </FormLabel>
//             <Controller
//               name="discountPercent"
//               control={control}
//               render={({ field }) => (
//                 <Input placeholder="وارد کنید" {...field} />
//               )}
//             />
//             {errors.discountPercent && (
//               <Text color="red.500" fontSize="12px">
//                 {errors.discountPercent.message}
//               </Text>
//             )}
//           </FormControl>

//           <FormControl>
//             <FormLabel fontSize="12px" fontWeight={400}>
//               ظرفیت رزرو بازی
//             </FormLabel>
//             <Controller
//               name="capacity"
//               control={control}
//               rules={{ required: "این فیلد اجباری است" }}
//               render={({ field }) => (
//                 <Input placeholder="وارد کنید" {...field} />
//               )}
//             />
//             {errors.capacity && (
//               <Text color="red.500" fontSize="12px">
//                 {errors.capacity.message}
//               </Text>
//             )}
//           </FormControl>
//         </Flex>

//         <Button
//           type="submit"
//           isLoading={loadingButton}
//           p="2"
//           w="full"
//           mt="8"
//           mb="2"
//           borderRadius="4px"
//           bgColor="amir.primary"
//         >
//           ثبت نهایی ایونت
//         </Button>
//       </chakra.form>
//       <PanelFooter />
//     </chakra.div>
//   );
// };

export const PanelEventCreate = () => {
  const { loading, scenarios, activeScenarios, setActiveScenarios } =
    usePanelEventCreate();
  return (
    <chakra.div
      pt="4"
      h="calc(100dvh - 56px)"
      display="flex"
      flexDirection="column"
      m="0"
      justifyContent="space-between"
    >
      <chakra.div mx="0" px="4" overflow="auto">
        {loading ? (
          <Loading />
        ) : activeScenarios ? (
          <Cos activeScenarios={activeScenarios} />
        ) : (
          <Scenario
            scenarios={scenarios}
            setActiveScenarios={setActiveScenarios}
          />
        )}
      </chakra.div>
      <PanelFooter />
    </chakra.div>
  );
};

const Cos = ({ activeScenarios }: { activeScenarios: IScenario }) => {
  const [timeVisibility, setTimeVisibility] = useState(0);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const toast = useToast();
  const x = () => {
    setLoading(true);
    CallApiHost.post("/events", {
      gameId: activeScenarios.id,
      title: "temp title",
    })
      .then(({ data }: any) => {
        toast({
          title: "ایونت با موفقیت ایجاد شد!",
          status: "success",
          duration: 3000,
          position: "top",
        });
        setTimeVisibility(data);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <chakra.div>
      <Text mb="4" fontSize={"14px"} fontWeight={400} color="amir.common">
        در سناریوی {activeScenarios.title}، {activeScenarios.characters.length}{" "}
        نقش اصلی وجود دارد. می‌توانید در صورت نیاز، با کمک پشتیبانی جورچین، نقش
        دیگری را به سناریو اضافه کنید.
      </Text>

      <Text mb="8" fontSize={"14px"} fontWeight={400} color="amir.common">
        زمان شروع بازی یکبار دیگر نسبت به تعداد گیمرهای حاضر نقش ها را انتخاب
        خواهید کرد.
      </Text>

      <Characters characters={activeScenarios.characters} />
      <Button
        isLoading={loading}
        bgColor="amir.primary"
        borderRadius="4px"
        w="full"
        onClick={x}
      >
        تائید و ادامه
      </Button>
      <BottomSheet
        title={"افزودن سانس"}
        isOpen={!!timeVisibility}
        onOpen={() => setTimeVisibility(0)}
        onClose={() => setTimeVisibility(0)}
      >
        <PanelEventAddSans
          eventId={timeVisibility}
          onClose={() => navigate("/panel/events")}
        />
      </BottomSheet>
    </chakra.div>
  );
};
const Scenario = ({
  scenarios,
  setActiveScenarios,
}: {
  scenarios: IScenario[];
  setActiveScenarios: React.Dispatch<
    React.SetStateAction<IScenario | undefined>
  >;
}) => {
  const [visibility, setVisibility] = useState<IScenario | undefined>();
  return (
    <chakra.div>
      <Text mb="4" fontSize="14px" fontWeight={400} color="amir.common">
        یکی از سناریو هارو برای ایونت جدید انتخاب کنید.
      </Text>
      <Grid templateColumns="repeat(2, 1fr)" gap="4">
        {scenarios.map((item, index: number) => {
          return (
            <chakra.div
              key={index}
              cursor="pointer"
              onClick={() => setVisibility(item)}
            >
              <Image
                src={item.logoUrl}
                width="152px"
                height="192px"
                borderRadius="md"
              />
              <Text py="2" fontSize="14px" fontWeight="400" color="amir.common">
                {item.title}
              </Text>
            </chakra.div>
          );
        })}
      </Grid>
      {visibility && (
        <BottomSheet
          title={visibility.title}
          isOpen={!!visibility?.id}
          onOpen={() => setVisibility(undefined)}
          onClose={() => setVisibility(undefined)}
        >
          <chakra.div px="4" pb="4">
            <Text
              textAlign={"start"}
              py="2"
              pb="4"
              fontSize="14px"
              fontWeight="400"
              color="amir.common"
            >
              {visibility.description}
            </Text>
            <Flex gap="4">
              <Button
                w="full"
                bgColor="amir.primary"
                onClick={() => setActiveScenarios(visibility)}
              >
                تائید و انتخاب سناریو
              </Button>
              <Button
                w="full"
                border="1px solid"
                color="amir.common"
                bgColor="transparent"
                borderColor="amir.common"
                onClick={() => setVisibility(undefined)}
              >
                بازگشت
              </Button>
            </Flex>
          </chakra.div>
        </BottomSheet>
      )}
    </chakra.div>
  );
};
