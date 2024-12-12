import { store } from "@/store";
import { formatPrice } from "@/utils/formatPrice";
import { Stack, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";

/**
 * @name ProductNameAndPrice
 * @description This component is responsible for rendering the product name and price.
 * @returns {JSX.Element} JSX.Element
 */

const ProductNameAndPrice = () => {
  const product = useSelector(store.select.productModel.selectProduct);
  const selectedVariant = useSelector(store.select.productModel.selectVariant);
  return (
    <Stack mb={4} mt={{lg:2}}>
      <Text
        textTransform={"uppercase"}
        fontFamily={"source"}
        fontWeight={700}
        letterSpacing={"wide"}
        color="blackAlpha.900"
        fontSize={{base: '2xl', lg:"3xl"}}
      >
        {product?.title}
      </Text>
      <Text
        dangerouslySetInnerHTML={{ __html: product?.descriptionHtml || "" }}
        mt={0}
        lineHeight={1.35}
        maxW={{ lg: "75%" }}
        fontFamily={"bricolage"}
        fontSize="sm"
        textColor={"blackAlpha.700"}
      />
      <Text fontFamily={"source"} fontWeight={700} fontSize={"sm"}>
        {formatPrice(
          selectedVariant === null
            ? product?.variants[0]?.price?.amount
            : product?.variants[selectedVariant]?.price?.amount
        )}
      </Text>
    </Stack>
  );
};

export default ProductNameAndPrice;
