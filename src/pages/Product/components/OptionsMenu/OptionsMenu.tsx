import { Dispatch, store } from "@/store";
import { useDispatch, useSelector } from "react-redux";
import { Menu, MenuButton, MenuItem, MenuList, Text, Button, Stack, Flex } from "@chakra-ui/react";
import * as styles from "@/pages/Product/components/OptionsMenu/styles";
import * as constants from "@/pages/Product/components/OptionsMenu/constants";

import useOutsideClick from "@/hooks/useOutsideClick";
import { useRef } from "react";

/**
 * @name OptionsMenu
 * @description This component is responsible for rendering the options menu.
 * @returns {JSX.Element} JSX.Element
 */

const OptionsMenu = () => {
  const wrapperRef = useRef(null);
  const dispatch = useDispatch<Dispatch>();
  const checkout = useSelector(store.select.cartModel.selectCheckout);
  const product = useSelector(store.select.productModel.selectProduct);
  const selectedVariant = useSelector(store.select.productModel.selectVariant);

  useOutsideClick(wrapperRef, () => dispatch.productModel.clearSelectedVariant());

  return (
    <Stack>
      <Flex gap={2}>
        {product?.variants?.map((variant, index) => (
          <Button
            ref={wrapperRef}
            // @ts-ignore
            isDisabled={!variant?.available}
            key={index + variant.id}
            onClick={() => dispatch.productModel.setSelectedVariant(index)}
            {...styles.$buttonStyles(selectedVariant, index)}
          >
            {variant?.title}
          </Button>
        ))}
      </Flex>
      <Button 
      mt={4}
        ref={wrapperRef}
        onClick={() => {
          if (selectedVariant !== null && checkout && product?.variants?.[selectedVariant]?.id) {
            dispatch.cartModel.addLineItemToCart([
              checkout.id,
              [{ variantId: product?.variants?.[selectedVariant]?.id, quantity: 1 }],
            ]);
            dispatch.productModel.clearSelectedVariant();
          }
        }}
        isDisabled={selectedVariant === null}
        {...styles.$buttonStyles2}
      >
        {"ADD TO CART"}
      </Button>
    </Stack>
  );
};

export default OptionsMenu;
