import type { RootModel } from ".";
import { createModel } from "@rematch/core";
import Client, { Product } from "shopify-buy";

interface ProductModelState {
  product: Product | null;
  selectedVariant: number | null;
  selectedPhoto: number | null;
  allProducts: Product[] | null;
}

export const productModel = createModel<RootModel>()({
  state: {
    product: null,
    selectedVariant: null,
    selectedPhoto: 0,
    allProducts: null,
  } as ProductModelState,
  reducers: {
    setProduct: (state: ProductModelState, product: Product) => ({ ...state, product }),
    setSelectedVariant: (state: ProductModelState, selectedVariant: number) => ({ ...state, selectedVariant }),
    setSelectedPhoto: (state: ProductModelState, selectedPhoto: number) => ({ ...state, selectedPhoto }),
    setAllProducts: (state: ProductModelState, allProducts: Product[]) => ({ ...state, allProducts }),
    clearState: (state) => ({ product: null, allProducts: state.allProducts, selectedVariant: null, selectedPhoto: null }),
  },
  selectors: (slice) => ({
    selectAllProducts: () => slice((state): Product[] | null => state?.allProducts),
    selectProduct: () => slice((state) => state.product),
    selectVariant: () => slice((state) => state.selectedVariant),
    selectPhoto: () => slice((state) => state.selectedPhoto),
  }),
  effects: () => ({
    async getShopifyProductByHandle(id: string) {
      const client = Client.buildClient({
        apiVersion: "2024-01",
        domain: "grinns.myshopify.com",
        storefrontAccessToken: "04f016cee08c9f778bf73b60e089c0ec",
      });
      const product = await client.product.fetchByHandle(id).then((product) => product);
      this.setProduct(JSON.parse(JSON.stringify(product)));
      return;
    },
    async getShopifyProducts() {
      const client = Client.buildClient({
        apiVersion: "2024-01",
        domain: "grinns.myshopify.com",
        storefrontAccessToken: "04f016cee08c9f778bf73b60e089c0ec",
      });
      const products = (await client.product.fetchAll()).map((product) => product);
      this.setAllProducts(products);
      return;
    },
  }),
});
