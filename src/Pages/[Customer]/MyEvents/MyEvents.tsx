import { Footer } from "@/components/Common/Footer/Footer";
import {
  Box,
  Button,
  Center,
  Flex,
  Icon,
  Image,
  Text,
  chakra,
  useDisclosure,
} from "@chakra-ui/react";
import { CalendarBlank, MapPin, Plus } from "@phosphor-icons/react/dist/ssr";
import React, { useEffect, useState } from "react";
import { Ticket } from "../Ticket/Ticket";
import { CallApi } from "@/settings/axiosConfig";
import { Loading } from "@/components/CoreComponents/Loading/Loading";
import { Link, useNavigate } from "react-router-dom";
import { Login } from "@/components/Common/Login/Login";
import useAuthStore from "@/store/authStore";

export interface ITicketItem {
  id: number;
  eventId: number;
  dateId: number;
  timeId: number;
  gameSessionId: number;
  status: string;
  event: IReserveItem;
  ticketAddress: string;
}

export interface IReserveItem {
  title: string;
  dateTime: string;
  logoUrl: string;
  host: Host;
}

export interface Host {
  title: string;
  districtTitle: string;
}

export const MyEvents = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const {
    isOpen: isOpenLogin,
    onOpen: onOpenLogin,
    onClose: onCloseLogin,
  } = useDisclosure();
  const [loading, setLoading] = useState<boolean>(true);
  const [activeTicket, setActiveTicket] = useState<ITicketItem>();

  const { isAuth } = useAuthStore();
  const handleCreateNewEvent = () => {
    if (isAuth) {
      navigate("/create-event");
    } else {
      onOpenLogin();
    }
  };
  return (
    <chakra.div
      display="flex"
      h="calc(100dvh - 56px)"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Flex pt="4" w="full">
        <Button
          w="full"
          mx="4"
          bgColor={"amir.primary"}
          onClick={handleCreateNewEvent}
        >
          Create Event
        </Button>
      </Flex>
      {/* {loading ? (
        <Loading />
      ) : false ? (
        // ) : !reserveList.length ? (
        <chakra.div p="4" overflow={"auto"} mt="50%">
          <Text
            textAlign="center"
            fontSize={"14px"}
            fontWeight={400}
            color="amir.common"
          >
            for crete or show you`r events, please login
          </Text>
          {/* <Center>
            <Image
              src="/images/ticket.png"
              w="70%"
              mt="30%"
              objectFit="cover"
            />
          </Center> */}
      {/* <Center>
            <Button mt="8" onClick={onOpenLogin} bgColor="amir.primary" w="70%">
              login
            </Button>
          </Center>
          {isOpenLogin && (
            <Login
              isOpen={isOpenLogin}
              onOpen={onOpenLogin}
              onClose={onCloseLogin}
            />
          )}
        </chakra.div>
      ) : (
        <chakra.div px="4" mx="0" overflow={"auto"}>
          {Array(10)
            .fill(21)
            .map((item) => {
              return (
                <Flex
                  key={"item.event.title"}
                  mx="0"
                  my="4"
                  p="2"
                  flexDirection="column"
                  bgColor="amir.secondaryBg"
                  borderRadius={"8px"}
                >
                  <Flex
                    mx="0"
                    alignItems="end"
                    justifyContent="start"
                    gap="4"
                    mb="2"
                  >
                    <Image
                      mx="0"
                      borderRadius="4px"
                      src={"/images/woman.jpg"}
                      objectFit="cover"
                      width="96px"
                      height="104px"
                    />
                    <Box mx="0" gap="6px" display="flex" flexDirection="column">
                      {renderStatus(item)}
                      <Text
                        fontSize={"14px"}
                        fontWeight={400}
                        color="amir.common"
                      >
                        going to eat burger
                      </Text>
                      <Text
                        fontSize={"12px"}
                        fontWeight={400}
                        color="amir.secondary"
                      >
                        Iran - tehran
                        <Icon as={MapPin} />
                      </Text>
                      <Text
                        fontSize={"12px"}
                        fontWeight={400}
                        color="amir.secondary"
                      >
                        23:00 <Icon as={CalendarBlank} />
                      </Text>
                    </Box>
                  </Flex>
                  <Flex mx="0" alignItems="center" gap={2}>
                    <Button
                      variant="outline"
                      borderColor="amir.secondary"
                      color="amir.secondary"
                      as={Link}
                      to={`/events/${item.eventId}/dates/${item.dateId}/times/${item.timeId}`}
                      w="50%"
                    >
                      event visit
                    </Button>
                    <Button
                      bgColor="amir.primary"
                      color="amir.secondaryBg"
                      w="50%"
                      onClick={() => {
                        onOpen();
                        setActiveTicket(item);
                      }}
                    >
                      ticket visit
                    </Button>
                  </Flex>
                </Flex>
              );
            })}
        </chakra.div>
      )} */}
      {isOpenLogin && (
        <Login
          isOpen={isOpenLogin}
          onOpen={onOpenLogin}
          onClose={onCloseLogin}
        />
      )}
      {isOpen && (
        <Ticket
          isOpen={isOpen}
          onClose={() => {
            onClose();
            setActiveTicket(undefined);
          }}
          ticketItem={activeTicket!}
        />
      )}
      <Footer />
    </chakra.div>
  );
};
