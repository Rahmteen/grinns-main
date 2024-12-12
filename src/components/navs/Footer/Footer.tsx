import { Flex, Link, Stack, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex
      px={8}
      py={{ base: 10, lg: 10 }}
      pb={`calc(32px + env(safe-area-inset-bottom))`}
      alignItems={"center"}
      bg="white"
      minW="100dvw"
      minH={{ base: "10dvh", lg: "10vh" }}
    >
      <Flex alignItems={"center"} gap={2}>
        <Text fontStyle={"italic"} fontSize={"xs"} fontFamily={"bricolage"} fontWeight={300} color="blackAlpha.700">
          GRINNS 2025
        </Text>
        <Flex pl={1} mt={"-3px"} gap={2}>
          <Link href="https://open.spotify.com/artist/196MfFl5VIfyX1ZBmJeWHc" target="_blank">
            <Text
              cursor="pointer"
              pointerEvents={"auto"}
              fontSize={"11.5px"}
              as="i"
              color="blackAlpha.700"
              className="fa-brands fa-spotify"
            ></Text>
          </Link>
          <Link href="https://music.apple.com/us/artist/the-grinns/1033694700" target="_blank">
            <Text
              color="blackAlpha.700"
              cursor="pointer"
              pointerEvents={"auto"}
              fontSize={"xs"}
              as="i"
              className="fa-brands fa-apple"
            ></Text>
          </Link>
        </Flex>
      </Flex>
      <Flex ml="auto" gap={2}>
        <Text fontSize={"xs"} fontFamily={"bricolage"} fontWeight={200} color="blackAlpha.700">
          contact
        </Text>
        <Text fontSize={"xs"} fontFamily={"bricolage"} fontWeight={200} color="blackAlpha.500">
          /
        </Text>
        <Text fontSize={"xs"} fontFamily={"bricolage"} fontWeight={200} color="blackAlpha.700">
          booking
        </Text>
      </Flex>
    </Flex>
  );
};

export default Footer;
