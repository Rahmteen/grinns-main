import { Flex, Link, Stack, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex
      px={{ base: 16, lg: 8 }}
      py={{ base: 16, lg: 10 }}
      pb={{ base: 32, lg: 10 }}
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
        <Text as={'a'} href="mailto:thegrinns@gmail.com" fontSize={"xs"} fontFamily={"bricolage"} fontWeight={200} color="blackAlpha.700">
          contact
        </Text>
        <Text fontSize={"xs"} fontFamily={"bricolage"} fontWeight={200} color="blackAlpha.500">
          /
        </Text>
        <Text as={'a'} href="mailto:thegrinns@gmail.com" fontSize={"xs"} fontFamily={"bricolage"} fontWeight={200} color="blackAlpha.700">
          booking
        </Text>
      </Flex>
    </Flex>
  );
};

export default Footer;
