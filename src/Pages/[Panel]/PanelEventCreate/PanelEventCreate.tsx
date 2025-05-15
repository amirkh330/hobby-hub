import { Footer } from "@/components/Common/Footer/Footer";
import { CustomDatePicker } from "@/components/CoreComponents/CustomDatePicker/CustomDatePicker";
import Map from "@/components/CoreComponents/Map/Map";
import {
  Box,
  Button,
  chakra,
  Container,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Select,
  Text,
  Textarea,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { usePanelEventCreate } from "./PanelEventCreate.biz";
import Icon from "react-multi-date-picker/components/icon";
import { Upload } from "@phosphor-icons/react";

export const PanelEventCreate = () => {
  const { handleSubmit, onSubmit, control, errors, register, setValue } =
    usePanelEventCreate();
  const bg = useColorModeValue("gray.50", "gray.700");
  const border = useColorModeValue("gray.300", "gray.600");
  const hoverBg = useColorModeValue("gray.100", "gray.600");
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
                <option value="1">sport</option>
                <option value="2">game</option>
                <option value="3">education</option>
              </Select>
              <FormErrorMessage>{errors.category?.message}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!errors.recurrence}>
              <FormLabel fontSize={"16px"} fontWeight={600} color="amir.common">
                Recurrence
              </FormLabel>
              <Select
                placeholder="event recurrence"
                {...register("recurrence")}
              >
                <option value="ONE_TIME">ONE_TIME</option>
                <option value="WEEKLY">WEEKLY</option>
                <option value="MONTHLY">MONTHLY</option>
                <option value="QUARTERLY">QUARTERLY</option>
                <option value="YEARLY">YEARLY</option>
              </Select>
              <FormErrorMessage>{errors.recurrence?.message}</FormErrorMessage>
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
              <Textarea placeholder="event address" {...register("address")} />
              <FormErrorMessage>{errors.address?.message}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!errors.location}>
              <FormLabel fontSize={"16px"} fontWeight={600} color="amir.common">
                Location
              </FormLabel>
              <Map setNewPin={(location) => setValue("location", location)} />
              <FormErrorMessage>{errors.location?.message}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!errors.date}>
              <FormLabel fontSize={"16px"} fontWeight={600} color="amir.common">
                Date
              </FormLabel>
              <CustomDatePicker
                setValue={(e: any) =>
                  setValue("date", new Date(e).toISOString())
                }
                value={""}
              />
              {/* <Input placeholder="event date" {...register("date")} mt={4} /> */}
              <FormErrorMessage>{errors.date?.message}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!errors.upload}>
              <FormLabel fontSize={"16px"} fontWeight={600} color="amir.common">
                upload images
              </FormLabel>

              <Flex>
                <Box
                  as="label"
                  htmlFor="file-upload"
                  cursor="pointer"
                  border="2px dashed"
                  borderColor={border}
                  borderRadius="2xl"
                  bg={bg}
                  _hover={{ bg: hoverBg }}
                  transition="background-color 0.2s"
                  p={10}
                  w="full"
                  textAlign="center"
                >
                  <VStack spacing={3}>
                    {/* <Icon as={Upload} boxSize={10} color="blue.400" /> */}
                    <Text fontSize="lg" fontWeight="medium" color="gray.500">
                      Click to upload or drag and drop
                    </Text>
                    <Text fontSize="sm" color="gray.400">
                      SVG, PNG, JPG, or GIF (max. 10MB)
                    </Text>
                  </VStack>
                  <Input
                    id="file-upload"
                    type="file"
                    hidden
                    // onChange={handleFileChange}
                  />
                </Box>
              </Flex>
              <FormErrorMessage>{errors.upload?.message}</FormErrorMessage>
            </FormControl>
          </VStack>

          <Button w="full" type="submit" mx="0" my="4" bgColor={"amir.primary"}>
            Create Event
          </Button>
        </form>
      </chakra.div>
      <Footer />
    </chakra.div>
  );
};
