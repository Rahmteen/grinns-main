export const formatPrice = (price?: number): string => {
  if (!price) return "";

  if (price.toString()?.split(".")[1]?.length === 2) return `$${price}`;
  else return `$${price}0`;
};
