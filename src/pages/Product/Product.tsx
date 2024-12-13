import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Dispatch, store } from "@/store";
import { GridItem, SimpleGrid, SlideFade, Stack } from "@chakra-ui/react";
import ProductDetails from "@/pages/Product/components/ProductDetails/ProductDetails";
import ProductGallery from "@/pages/Product/components/ProductGallery/ProductGallery";
import * as styles from "@/pages/Product/styles";

/**
 * @name Product
 * @description This component is responsible for rendering the product page.
 * @returns {JSX.Element} JSX.Element
 */

const Product = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch<Dispatch>();
  const product = useSelector(store.select.productModel.selectProduct);
  useEffect(() => {
    if (id) {
      dispatch.productModel.setSelectedPhoto(0);
      dispatch.productModel.getShopifyProductByHandle(id);
    }
    return () => {
      dispatch.productModel.clearState();
    };
  }, [id]);

  return (
    <Stack {...styles.$stackStyles}>
      <SlideFade unmountOnExit={false} in={true} transition={{ enter: { duration: 0.35, delay: 0.35 } }}>
        <SimpleGrid {...styles.$gridStyles}>
          <GridItem as={SimpleGrid} {...styles.$gridItemStyles}>
            {product?.images && <ProductGallery images={product?.images} />}
          </GridItem>
          <GridItem {...styles.$gridItemStyles2} as={Stack}>
            <ProductDetails />
          </GridItem>
        </SimpleGrid>
      </SlideFade>
    </Stack>
  );
};

export default Product;
