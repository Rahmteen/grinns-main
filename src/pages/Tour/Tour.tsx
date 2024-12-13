import Navbar from "@/components/navs/Navbar/Navbar";
import { Dispatch, RootState } from "@/store";
import { Divider, Flex, Image, Link, SlideFade, Stack, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Tour = () => {
  const dispatch = useDispatch<Dispatch>();
  const allShows = useSelector((state: RootState) => state.tourModel.shows);
  useEffect(() => {
    if (allShows?.length === 0) dispatch.tourModel.getShows();
  }, []);
  return (
    <Stack py={5} minW="100vw" minH="100vh">
      <SlideFade unmountOnExit={false} in={true} transition={{ enter: { duration: 0.35, delay: 0.35 } }}>
        <Image
          mx="auto"
          objectFit={"cover"}
          maxH="20vh"
          src={
            "https://firebasestorage.googleapis.com/v0/b/grinns-66dfd.firebasestorage.app/o/content%2Fknife%20starss.PNG?alt=media&token=1a28d7bd-96c8-44af-8371-721935c22a2a"
          }
        />
      </SlideFade>
      <SlideFade unmountOnExit={false} in={true} transition={{ enter: { duration: 0.65, delay: 0.65 } }}>
        <Stack pt={{ base: 4, lg: 6 }} alignItems={"center"}>
          <Text
            ml={{ lg: 1 }}
            fontFamily={"source"}
            fontSize={{ base: "sm", lg: "lg" }}
            fontWeight={500}
            mt={{ base: 0, lg: 4 }}
            mb={6}
          >
            UPCOMING SHOWS
          </Text>
          {allShows?.map((show, id: number) => {
            return (
              <Flex
                className="box-shadow-2"
                key={show?.tickets + id}
                _hover={{ bg: "blackAlpha.100", textDecoration: "none" }}
                transition={"0.3s all ease-in-out"}
                as={Link}
                href={show.tickets}
                target="_blank"
                alignItems={"center"}
                gap={{ base: 3.5, lg: 9 }}
                p={{ base: 2, lg: 3 }}
                minW={{ base: "92%", lg: "70%" }}
                bg="blackAlpha.50"
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
                <Stack gap={0.5}>
                  <Text fontSize={{ base: "xs", lg: "xs" }} fontFamily={"bricolage"} fontWeight={600}>
                    {show.location}
                  </Text>
                  <Text fontSize={{ base: "xs", lg: "sm" }} fontFamily={"nineties"} fontWeight={300}>
                    {show.venue}
                  </Text>
                </Stack>
                <Stack pr={4} ml="auto">
                  <Text fontSize={"xs"} as="i" className="fa-solid fa-ellipsis" />
                </Stack>
              </Flex>
            );
          })}
        </Stack>
      </SlideFade>
    </Stack>
  );
};

export default Tour;
