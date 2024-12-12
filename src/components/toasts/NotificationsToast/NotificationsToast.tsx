import { Flex, Stack, Text } from "@chakra-ui/react";

const NotificationsToast = () => {
  return (
    <Flex
      cursor={"pointer"}
      justifyContent={"space-between"}
      alignItems={"center"}
      px={{ base: 7, lg: 6 }}
      minH={{ base: "9vh", lg: "8vh" }}
      bg="black"
      _hover={{ color: "yellow.500", py: 6 }}
      transition={"all 0.3s ease-in-out"}
      color="white"
    >
      <Flex alignItems={"center"}>
        <Text
          mr={{ base: 5, lg: 6 }}
          fontSize={{ base: "20px", lg: "25px" }}
          as="i"
          className="fa-sharp fa-solid fa-bell"
        />
        <Stack mt={-1} gap={0.5} justifyContent={"center"}>
          <Text letterSpacing={"tight"} fontSize={{ base: "xs", lg: "sm" }} fontFamily={"source"} fontWeight={800}>
            GET NOTIFIED
          </Text>
          <Text
            opacity='80%'
            lineHeight={"11px"}
            maxW={{ base: "80%", lg: "100%" }}
            letterSpacing={"tighter"}
            fontFamily={"source"}
            fontWeight={400}
            fontSize={{ base: "2xs", lg: "xs" }}
          >
            Whenever we drop new merch, release music or announce shows, you'll get an email or text.
          </Text>
        </Stack>
      </Flex>
      <Stack justifyContent={"center"} alignItems={"center"}>
        <Text fontSize={{ base: "lg", lg: "xl" }} as="i" className="fa-sharp fa-chevrons-right" />
      </Stack>
    </Flex>
  );
};

export default NotificationsToast;
