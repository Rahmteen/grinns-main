import { store } from "@/store";
import { Button, Flex, GridItem, Image, Link, SimpleGrid, Stack, Text, useBreakpointValue } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProductSpotlight = () => {
  const navigate = useNavigate();
  const mobileBreakpoint = useBreakpointValue({ base: 1, lg: 4 });
  const product = useSelector(store.select.spotlightModel.selectProduct);
  return (
    <Stack
      role="button"
      pointerEvents={"auto"}
      cursor={"pointer"}
      onClick={() => navigate(`/product/${product?.handle}`)}
      transition={"all 0.3s ease-in-out"}
      py={{ base: 8, lg: 6 }}
      px={{ base: 7, lg: 8 }}
      bg="white"
      minW="100vw"
    >
      <Stack pb={{ base: 1.5, lg: 3 }} gap={0}>
        <Text
          letterSpacing={"widest"}
          fontFamily={"bricolage"}
          fontSize={{ base: "xs", lg: "sm" }}
          fontWeight={500}
          color="blackAlpha.700"
          mb={"-2px"}
        >
          FROM THE STORE
        </Text>
        <Text
          fontStyle={"italic"}
          fontFamily={"source"}
          fontSize={{ base: "lg", lg: "3xl" }}
          fontWeight={700}
          color="black"
        >
          {product?.title}
        </Text>
      </Stack>
      <SimpleGrid gap={5} columns={mobileBreakpoint}>
        {product?.images.map((image, i: number) => {
          if (mobileBreakpoint && i + 1 <= mobileBreakpoint)
            return (
              <GridItem key={image.src} px={{ base: 0, lg: 0 }} colSpan={1}>
                <Image rounded="sm" className="box-shadow" objectFit={"cover"} aspectRatio={1} src={image?.src} />
              </GridItem>
            );
        })}
      </SimpleGrid>
      <Flex
        gap={2.5}
        pt={{ base: 6, lg: 8 }}
        pb={{ base: 2, lg: 4 }}
        pr={{ base: 1, lg: 1 }}
        justifyContent={"end"}
        alignItems={"center"}
      >
        <Text
          letterSpacing={"widest"}
          fontFamily={"source"}
          fontSize={{ base: "xs", lg: "sm" }}
          fontWeight={600}
          color="black"
        >
          SHOP
        </Text>

        <Text fontSize={{ base: "xs", lg: "md" }} as="i" color="black" className="fa-regular fa-chevrons-right" />
      </Flex>
    </Stack>
  );
};

export default ProductSpotlight;
