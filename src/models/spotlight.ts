import { Album } from "@/types";
import type { RootModel } from ".";
import { createModel } from "@rematch/core";
import { doc, getDoc } from "firebase/firestore";
import Client, { Product } from "shopify-buy";

interface SpotlightModelState {
  product: Product | null;
  album: Album | null;
}

export const spotlightModel = createModel<RootModel>()({
  state: {
    product: null,
    album: null,
  } as SpotlightModelState,
  reducers: {
    setProduct: (state: SpotlightModelState, product: Product) => ({ ...state, product }),
    setAlbum: (state: SpotlightModelState, album: Album) => ({ ...state, album }),
    clearState: () => ({ product: null, album: null }),
  },
  selectors: (slice) => ({
    selectProduct: () => slice((state) => state.product),
    selectAlbum: () => slice((state) => state.album),
  }),
  effects: () => ({
    async getSpotlightProduct() {
      const { db } = await import("@/firebase");
      const docRef = doc(db, "spotlight", "product");
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const id = docSnap.data()?.id;
        const client = Client.buildClient({
          apiVersion: "2024-01",
          domain: "grinns.myshopify.com",
          storefrontAccessToken: "04f016cee08c9f778bf73b60e089c0ec",
        });
        const product = await client.product.fetchByHandle(id).then((product) => product);
        console.log(product);
        this.setProduct(product);
        return;
      }
    },
    async getSpotlightAlbum() {
      const { db } = await import("@/firebase");
      const docRef = doc(db, "spotlight", "album");
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const id = docSnap.data()?.id;
        console.log(id);
        const albumRef = doc(db, "albums", id);
        const albumDoc = await getDoc(albumRef);
        if (albumDoc.exists()) {
          this.setAlbum(albumDoc.data());
        }
      }
    },
  }),
});
