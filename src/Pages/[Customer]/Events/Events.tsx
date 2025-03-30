import { Footer } from "@/components/Common/Footer/Footer";
import { EventCard } from "@/components/CoreComponents/EventCard/EventCard";
import { FilterSecession } from "@/components/CoreComponents/FilterSecession/FilterSecession";
import InfinityScroll from "@/components/CoreComponents/InfiniteScroll/InfiniteScroll";
import { Loading } from "@/components/CoreComponents/Loading/Loading";
import { MainSwiper } from "@/components/CoreComponents/MainSwiper/MainSwiper";
import { IEventItem } from "@/types/responses/ResponsesTypes";
import {
  Box,
  chakra,
  Grid,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { useEvents } from "./Events.biz";
import { EmptyState } from "@/components/Common/EmptyState/EmptyState";

export const Events = () => {
  const { eventList, loading, total, setPage, list } = useEvents();
  return (
    <chakra.div
      pt="4"
      h="calc(100dvh - 56px)"
      display="flex"
      flexDirection="column"
      m="0"
      justifyContent="space-between"
    >
      <chakra.div px={4} m="0" overflowY="auto">
        <InputGroup
          w="70%"
          m="0"
          bg="transparent"
          width="full"
          // my="12px"
          color="amir.common"
          alignItems="center"
          border="1px"
          borderRadius={"8px"}
          borderColor="gray.400"
        >
          <InputRightElement pointerEvents="none">
            <Icon>
              <MagnifyingGlass size={24} />
            </Icon>
          </InputRightElement>
          <Input
            placeholder="search"
            bg="transparent"
            width="full"
            // p="1"
            ps="8"
            border="none"
            _placeholder={{ color: "amir.common" }}
            _active={{
              border: "none",
              borderColor: "transparent",
            }}
            _focus={{
              border: "none",
              borderColor: "transparent",
            }}
            _hover={{
              border: "none",
              borderColor: "transparent",
            }}
            _focusVisible={{
              border: "none !important",
              borderColor: "transparent",
            }}
          />
        </InputGroup>

        {/* <MainSwiper list={list} /> */}

        {/* <FilterSecession /> */}
        <Box
          //  overflowY="auto"
          w={"full"}
        >
          {loading && !eventList.length ? (
            <Loading />
          ) : true ? (
            // ) : eventList.length ? (
            <InfinityScroll
              items={Array(12).fill("12")}
              // items={eventList}
              wrapper={<Grid templateColumns="repeat(1, 1fr)" />}
              total={total!}
              loading={loading}
              loadMore={() => {
                setPage((_prevPage) => _prevPage + 1);
              }}
              renderItem={(item: IEventItem, index: number) => {
                return <EventCard event={item} />;
              }}
            />
          ) : (
            <EmptyState />
          )}
        </Box>
      </chakra.div>
      <Footer />
    </chakra.div>
  );
};
