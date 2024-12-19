import { Dispatch, store } from "@/store";
import { Button, Flex, Image, Link, Stack, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const LatestReleaseToast = () => {
  const dispatch = useDispatch<Dispatch>();
  const latestRelease = useSelector(store.select.spotlightModel.selectLatestRelease);

  useEffect(() => {
    if (!latestRelease) dispatch.spotlightModel.getLatestRelease();
  }, []);

  if (latestRelease)
    return (
      <Flex
        border="1px solid"
        borderColor="blackAlpha.200"
        borderX={"0px solid"}
        cursor={"pointer"}
        alignItems={"center"}
        textDecoration={"none"}
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
            <Image aspectRatio={1} src={latestRelease?.cover} maxH={{ base: "70px", lg: "70px" }} />
          </Stack>
        </Flex>
        <Stack lineHeight={"6px"} px={{ base: 4, lg: 3.5 }} gap={3}>
          <Text fontSize={{ base: "xs", lg: "sm" }} color="blackAlpha.900" fontFamily={"source"} fontWeight={300}>
            {latestRelease?.songName}
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

export default LatestReleaseToast;
