import { Dispatch, store } from "@/store";
import { Button, Flex, Link, Stack, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const ShowReminderToast = () => {
  const dispatch = useDispatch<Dispatch>();
  const show = useSelector(store.select.tourModel.selectShows)?.[0];

  useEffect(() => {
    if (!show) dispatch.tourModel.getShows();
  }, []);
  
  if (show)
    return (
      <Flex
        border="1px solid"
        borderColor="blackAlpha.200"
        borderX={"0px solid"}
        cursor={"pointer"}
        alignItems={"center"}
        as={Link}
        href={show?.tickets || ""}
        target="_blank"
        textDecoration={"none"}
        _hover={{ textDecoration: "none", bg: "blackAlpha.100" }}
        bg="white"
        justifyContent={"start"}
        px={{ base: 4, lg: 7 }}
        py={{ base: 6, lg: 12 }}
        mb={{ base: 5, lg: 5 }}
        maxH={{ base: "9vh", lg: "7vh" }}
        color="whiteAlpha.800"
      >
        <Flex alignItems={"center"}>
          <Stack gap={0.5} justifyContent={"center"}>
            <Stack
              lineHeight={{ base: "16px", lg: "17px" }}
              py={{ base: 2, lg: 1 }}
              px={{ base: 3, lg: 2.5 }}
              gap={0}
              alignItems={"center"}
              bg="blackAlpha.900"
            >
              <Text
                fontSize={"xs"}
                textTransform={"uppercase"}
                color="red.500"
                fontWeight={700}
                fontFamily={"bricolage"}
              >
                {show?.month}
              </Text>
              <Text fontWeight={600} fontSize={"xs"} color="white" fontFamily={"source"}>
                {show?.day}
              </Text>
            </Stack>
          </Stack>
        </Flex>
        <Stack lineHeight={"6px"} px={{ base: 4, lg: 3.5 }} gap={3}>
          <Text fontSize={{ base: "sm", lg: "sm" }} color="blackAlpha.900" fontFamily={"source"} fontWeight={600}>
            {show?.venue}
          </Text>
          <Text fontSize={{ base: "xs", lg: "xs" }} color="blackAlpha.700" fontFamily={"source"} fontWeight={300}>
            {show?.location}
          </Text>
        </Stack>
        <Stack pr={{ lg: 2 }} ml={"auto"} justifyContent={"center"} alignItems={"center"}>
          <Button
            mr={1.5}
            alignItems={"center"}
            gap={1.5}
            rounded="none"
            size={{ base: "xs", lg: "xs" }}
            bg="transparent"
            _hover={{ bg: "transparent" }}
            as={Flex}
          >
            <Text
              fontFamily={"source"}
              color="black"
              letterSpacing={"wider"}
              fontSize={{ base: "2xs", lg: "xs" }}
              fontWeight={700}
            >
              TICKETS
            </Text>
            <Text color="black" fontSize={{ base: "2xs", lg: "2xs" }} as="i" className="fa-solid fa-chevrons-right" />
          </Button>
        </Stack>
      </Flex>
    );
};

export default ShowReminderToast;
