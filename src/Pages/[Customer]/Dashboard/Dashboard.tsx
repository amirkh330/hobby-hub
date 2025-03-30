import { Box, Card, Flex, Image, Text, chakra } from "@chakra-ui/react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const Dashboard = () => {
  const items = [
    { name: "mafia", id: 1, address: "...." },
    { name: "mafia", id: 2, address: "...." },
    { name: "mafia", id: 3, address: "...." },
    { name: "mafia", id: 4, address: "...." },
    { name: "mafia", id: 5, address: "...." },
    { name: "mafia", id: 6, address: "...." },
    { name: "mafia", id: 7, address: "...." },
    { name: "mafia", id: 8, address: "...." },
    { name: "mafia", id: 9, address: "...." },
    { name: "mafia", id: 10, address: "...." },
    { name: "mafia", id: 11, address: "...." },
    { name: "mafia", id: 12, address: "...." },
    { name: "mafia", id: 13, address: "...." },
    { name: "mafia", id: 14, address: "...." },
    { name: "mafia", id: 15, address: "...." },
    { name: "mafia", id: 16, address: "...." },
  ];
  const navigate = useNavigate();
  return (
    <chakra.div overflow="auto" h={"dvh"}>
      {/* <InfiniteScroll
  dataLength={items.length} //This is important field to render the next data
  next={fetchData}
  hasMore={true}
  loader={<h4>Loading...</h4>}
  endMessage={
    <p style={{ textAlign: 'center' }}>
      <b>Yay! You have seen it all</b>
    </p>
  }
  // below props only if you need pull down functionality
  refreshFunction={this.refresh}
  pullDownToRefresh
  pullDownToRefreshThreshold={50}
  pullDownToRefreshContent={
    <h3 style={{ textAlign: 'center' }}>&#8595; Pull down to refresh</h3>
  }
  releaseToRefreshContent={
    <h3 style={{ textAlign: 'center' }}>&#8593; Release to refresh</h3>
  }
>
  {items}
</InfiniteScroll> */}
      {items?.map((item) => {
        return (
          <Card
            key={item.id}
            p="3"
            my="4"
            onClick={() => navigate(`/event-detail/${item.id}`)}
            boxShadow={"md"}
            justifyContent={"start"}
          >
            <Flex justifyContent={"start"} m="0">
              <Image
                src="https://via.placeholder.com/150"
                h={"50px"}
                m="0"
                borderRadius={"md"}
              />
              <Box mx="2">
                <Text>{item.name}</Text>
                <Text fontSize={"sm"}>{item.address}</Text>
              </Box>
            </Flex>
          </Card>
        );
      })}
    </chakra.div>
  );
};
