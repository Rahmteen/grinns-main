import { MenuButtonProps } from "@chakra-ui/react";

export const $menuStyles = {
  size: "xs",
};

export const $memuButtonStyles: any = {
  _hover: { bg: "black", color: "white" },
  _active: { bg: "black", color: "white" },
  border: "1px solid",
  size: "xs",
  rounded: "none",
  bg: "transparent",
  textTransform: "uppercase",
};

export const $iconStyles = {
  className: "fas fa-chevron-down",
};
export const $buttonStyles = (selectedVariant: number | null, currentVariant: number) => ({
  borderTop: "1px solid",
  borderX: "1px solid",
  borderBottom: "1px solid",
  borderColor: "blackAlpha.500",
  py: 0,
  px: 6,
  rounded: "none",
  _hover: {
    bg: selectedVariant === null ? "black" : selectedVariant === currentVariant ? "blackAlpha.800" : "black",
    color: selectedVariant === null ? "white" : selectedVariant === currentVariant ? "white" : "white",
  },
  color: selectedVariant === null || selectedVariant !== currentVariant ? "black" : "white",
  bg: selectedVariant === null || selectedVariant !== currentVariant ? "white" : "black",
});

export const $menuItem = {
  fontSize: "sm",
  py: 1,
  borderBottom: "1px solid",
  _focus: { bg: "black", color: "white" },
  _hover: { bg: "black", color: "white" },
};

export const $buttonStyles2 = {
  _hover: { bg: "black", color: "white" },
  _active: { bg: "black", color: "white" },
  border: "1px solid",
  rounded: "none",
  size: "sm",
  bg: "transparent",
};
