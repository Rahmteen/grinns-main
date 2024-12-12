import Navbar from "@/components/navs/Navbar/Navbar";
import { Dispatch, RootState } from "@/store";
import { Divider, Flex, Link, Stack, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Tour = () => {
  const dispatch = useDispatch<Dispatch>();
  const allShows = useSelector((state: RootState) => state.tourModel.shows);
  useEffect(() => {
    if (allShows?.length === 0) dispatch.tourModel.getShows();
  }, []);
  return (
    <Stack bg="white" minW="100vw" minH="100vh">
      <Stack pt={{ base: 4, lg: 20 }} alignItems={"center"}>
        <Text
          alignSelf={{ base: "start", lg: "center" }}
          display={{ base: "flex", lg: "flex" }}
          fontFamily={"source"}
          fontSize={{ base: "xl", lg: "sm" }}
          pb={2}
          pl={5}
          fontStyle={"italic"}
          fontWeight={700}
        >
          UPCOMING SHOWS
        </Text>
        <Divider mb={2} />
        {allShows?.map((show, id: number) => {
          return (
            <Flex
              key={show?.tickets + id}
              _hover={{ bg: "#ff6b6b", textDecoration: "none" }}
              transition={"0.3s all ease-in-out"}
              as={Link}
              href={show.tickets}
              target="_blank"
              alignItems={"center"}
              gap={{ base: 3.5, lg: 8 }}
              p={{ base: 2, lg: 3 }}
              minW={{ base: "92%", lg: "50%" }}
              bg="#e5e5e5"
            >
              <Stack py={{ base: 2, lg: 3 }} px={{ base: 4, lg: 6 }} gap={0} alignItems={"center"} bg="white">
                <Text
                  fontSize={"xs"}
                  textTransform={"uppercase"}
                  color="#fa877c"
                  fontWeight={500}
                  fontFamily={"bricolage"}
                >
                  {show.month}
                </Text>
                <Text fontWeight={900} fontFamily={"mono"}>
                  {show.day}
                </Text>
              </Stack>
              <Stack display={{ base: "none", lg: "flex" }} mr={16}>
                <Text
                  fontSize={{ base: "sm", lg: "md" }}
                  fontFamily={"bricolage"}
                  fontWeight={500}
                  textTransform={"uppercase"}
                >
                  {show.time}
                </Text>
              </Stack>
              <Stack gap={0}>
                <Text fontSize={{ base: "xs", lg: "xs" }} fontFamily={"bricolage"} fontWeight={600}>
                  {show.location}
                </Text>
                <Text fontSize={{ base: "sm", lg: "sm" }} fontFamily={"bricolage"} fontWeight={300}>
                  {show.venue}
                </Text>
              </Stack>
              <Stack pr={4} ml="auto">
                <Text fontSize={"sm"} as="i" className="fa-solid fa-ellipsis" />
              </Stack>
            </Flex>
          );
        })}
      </Stack>
    </Stack>
  );
};

export default Tour;
