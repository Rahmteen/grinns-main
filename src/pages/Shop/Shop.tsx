import Navbar from "@/components/navs/Navbar/Navbar";
import { Dispatch, store } from "@/store";
import { GridItem, Image, SimpleGrid, SlideFade, Stack, Text, useBreakpointValue } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Shop = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<Dispatch>();
  const allProducts = useSelector(store.select.productModel.selectAllProducts);
  const minGridItems = useBreakpointValue({ base: 1, lg: 4 });
  useEffect(() => {
    if (!allProducts) dispatch.productModel.getShopifyProducts();
  }, []);
  return (
    <Stack
      px={{ base: 5, lg: 10 }}
      bg="white"
      minH="90vh"
      mx={{ lg: "auto" }}
      alignItems={{ base: "center", lg: "center" }}
    >
      <SlideFade unmountOnExit={false} in={true} transition={{ enter: { duration: 0.25, delay: 0.25 } }}>
        <Image
          pr={{ base: 5, lg: 4 }}
          minW={{ lg: "100vw" }}
          mx="auto"
          objectFit={"contain"}
          maxH="25vh"
          src={
            "https://firebasestorage.googleapis.com/v0/b/grinns-66dfd.firebasestorage.app/o/content%2Fbanner.PNG?alt=media&token=76acb444-4dfe-40f8-8894-86eb863975ae"
          }
        />
      </SlideFade>
      <SlideFade unmountOnExit={false} in={true} transition={{ enter: { duration: 0.45, delay: 0.45 } }}>
        <Text
          ml={{ base: -2, lg: 'unset' }}
          fontFamily={"source"}
          fontSize={{ base: "sm", lg: "lg" }}
          fontWeight={500}
          mt={{ base: 0, lg: 4 }}
          mb={4}
        >
          SHOP ALL
        </Text>
      </SlideFade>
      <SlideFade unmountOnExit={false} in={true} transition={{ enter: { duration: 0.65, delay: 0.65 } }}>
        <SimpleGrid gap={4} alignItems={"start"} mt={{ base: 4, lg: 2 }} maxW="90vw" columns={{ base: 1, lg: 4 }}>
          {allProducts?.map((product) => {
            return (
              <GridItem
       
                key={product.id}
                aspectRatio={1}
                onClick={() => navigate(`/product/${product?.handle}`)}
                cursor={"pointer"}
                colSpan={1}
                border="0px"
                _hover={{ opacity: 0.9 }}
                transition={"0.2s all ease-in-out"}
                borderColor="blackAlpha.500"
                p={0}
                bg="white"
              >
                <Image shadow='md' src={product?.images?.[0]?.src} objectFit={"cover"} aspectRatio={1} />
                <Text
                  textAlign={{ base: "center", lg: "start" }}
                  mt={4}
                  fontFamily={"source"}
                  fontWeight={400}
                  fontSize={"xs"}
                  letterSpacing={"widest"}
                  color="black"
                >
                  {product.title}
                </Text>
              </GridItem>
            );
          })}
          {allProducts?.length && minGridItems && allProducts?.length < minGridItems ? (
            new Array(minGridItems - allProducts?.length).fill(null).map((empty, i) => {
              return <GridItem bg="blackAlpha.50" minH="91%" w="auto" key={i} colSpan={1}></GridItem>;
            })
          ) : (
            <></>
          )}
        </SimpleGrid>
      </SlideFade>
    </Stack>
  );
};

export default Shop;
