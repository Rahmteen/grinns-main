import Navbar from "@/components/navs/Navbar/Navbar";
import { Dispatch, store } from "@/store";
import { GridItem, Image, SimpleGrid, Stack, Text, useBreakpointValue } from "@chakra-ui/react";
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
      alignItems={{ base: "center", lg: "start" }}
    >
      <Image
        mx="auto"
        objectFit={"cover"}
        maxH="20vh"
        src={
          "https://firebasestorage.googleapis.com/v0/b/grinns-66dfd.firebasestorage.app/o/content%2Fbanner.PNG?alt=media&token=76acb444-4dfe-40f8-8894-86eb863975ae"
        }
      />
      <Text
        ml={{ lg: 1 }}
        fontFamily={"source"}
        fontSize={{ base: "sm", lg: "lg" }}
        fontWeight={500}
        mt={{ base: 0, lg: 4 }}
      >
        SHOP ALL
      </Text>
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
              <Image src={product?.images?.[0]?.src} objectFit={"cover"} aspectRatio={1} />
              <Text
                textAlign={{ base: "center", lg: "start" }}
                mt={4}
                fontFamily={"source"}
                fontWeight={400}
                fontSize={"sm"}
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
    </Stack>
  );
};

export default Shop;
