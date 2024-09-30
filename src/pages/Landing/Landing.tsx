import { Fade, Flex, Image, Stack, Text } from "@chakra-ui/react";
import logo from "../../../public/images/logo.jpg";

const Landing = () => {
  return (
    <Stack alignItems={"center"} justifyContent={"center"} bg="black" minW="100vw" minH="100vh">
      <Fade in={true} transition={{ enter: { delay: 0.5, duration: 0.5 } }}>
        <Image boxSize="10rem" src={logo} />
      </Fade>
      <Fade in={true} transition={{ enter: { delay: 0.75, duration: 0.75 } }}>
        <Text color="white" fontFamily={"Helvetica"} fontWeight={"bold"}>
          AVALANCHE BOOKING
        </Text>
      </Fade>
      <Fade in={true} transition={{ enter: { delay: 1, duration: 1 } }}>
        <Flex justifyContent={"center"}>
          <Text
            maxW={{ base: "60%", lg: "70%" }}
            textAlign={"center"}
            color="whiteAlpha.600"
            fontSize={"xs"}
            fontFamily={"Helvetica"}
            fontWeight={"medium"}
          >
            Southern California based booking agency built to support artists of all sizes and backgrounds.
          </Text>
        </Flex>
      </Fade>

      <Fade in={true} transition={{ enter: { delay: 1.5, duration: 1.5 } }}>
        <a target="_blank" href="mailto:frank@avalanchebooking.com">
          <Flex
            cursor={"pointer"}
            role="button"
            bg="transparent"
            _hover={{ bg: "whiteAlpha.200" }}
            transition={"all 0.35s ease-in-out"}
            borderWidth="1px"
            borderColor="white"
            px={3}
            py={1}
            alignItems="baseline"
            rounded="sm"
            gap={2}
            mt={10}
          >
            <Text color="white" fontSize={"2xs"} as="i" className="fa-solid fa-envelope" />
            <Text fontSize={"xs"} fontWeight={"medium"} fontFamily={"Helvetica"} color="white">
              contact
            </Text>
          </Flex>
        </a>
      </Fade>
    </Stack>
  );
};

export default Landing;
