import { Flex, Link, Stack, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex
      px={8}
      py={{ base: 4, lg: 10 }}
      alignItems={"center"}
      bg="white"
      minW="100vw"
      minH={{ base: "10vh", lg: "10vh" }}
    >
      <Stack>
        <Text fontStyle={"italic"} fontSize={"xs"} fontFamily={"bricolage"} fontWeight={300} color="blackAlpha.600">
          GRINNS 2025
        </Text>
        <Flex gap={2}>
          <Link href="https://open.spotify.com/artist/196MfFl5VIfyX1ZBmJeWHc" target="_blank">
            <Text
              cursor="pointer"
              pointerEvents={"auto"}
              fontSize={"sm"}
              as="i"
              className="fa-brands fa-spotify"
            ></Text>
          </Link>
          <Link href="https://music.apple.com/us/artist/the-grinns/1033694700" target="_blank">
            <Text cursor="pointer" pointerEvents={"auto"} fontSize={"sm"} as="i" className="fa-brands fa-apple"></Text>
          </Link>
        </Flex>
      </Stack>
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
