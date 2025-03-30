import { Footer } from "@/components/Common/Footer/Footer";
import { CustomDatePicker } from "@/components/CoreComponents/CustomDatePicker/CustomDatePicker";
import Map from "@/components/CoreComponents/Map/Map";
import {
  Button,
  chakra,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Select,
  Textarea,
  VStack
} from "@chakra-ui/react";
import { usePanelEventCreate } from "./PanelEventCreate.biz";

export const PanelEventCreate = () => {
  const { handleSubmit, onSubmit, control, errors, register } =
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <VStack spacing={4} color={"white"}>
            <FormControl isInvalid={!!errors.title}>
              <FormLabel fontSize={"16px"} fontWeight={600} color="amir.common">
                title
              </FormLabel>
              <Input placeholder="event title" {...register("title")} />
              <FormErrorMessage>{errors.title?.message}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!errors.category}>
              <FormLabel fontSize={"16px"} fontWeight={600} color="amir.common">
                Category
              </FormLabel>
              <Select placeholder="event category" {...register("category")}>
                <option value="sport">sport</option>
                <option value="game">game</option>
                <option value="education">education</option>
              </Select>
              <FormErrorMessage>{errors.category?.message}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!errors.description}>
              <FormLabel fontSize={"16px"} fontWeight={600} color="amir.common">
                Description
              </FormLabel>
              <Textarea
                placeholder="event description"
                {...register("description")}
              />
              <FormErrorMessage>{errors.description?.message}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!errors.address}>
              <FormLabel fontSize={"16px"} fontWeight={600} color="amir.common">
                Address
              </FormLabel>
              <Textarea
                placeholder="event address"
                {...register("address")}
              />
              <FormErrorMessage>{errors.address?.message}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!errors.location}>
              <FormLabel fontSize={"16px"} fontWeight={600} color="amir.common">
                Location
              </FormLabel>
              <Map />
              <FormErrorMessage>{errors.location?.message}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!errors.date}>
              <FormLabel fontSize={"16px"} fontWeight={600} color="amir.common">
                Date
              </FormLabel>
              <CustomDatePicker setValue={() => {}} value={""} />
              {/* <Input placeholder="event date" {...register("date")} /> */}
              <FormErrorMessage>{errors.date?.message}</FormErrorMessage>
            </FormControl>
          </VStack>

          <Button w="full" mx="0" my="4" bgColor={"amir.primary"}>
            Create Event
          </Button>
        </form>
      </chakra.div>
      <Footer />
    </chakra.div>
  );
};
