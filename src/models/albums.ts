import { createModel } from "@rematch/core";
import { collection, doc, DocumentData, getDocs } from "firebase/firestore";
import type { RootModel } from ".";
import { Album } from "@/types";

export const albumsModel = createModel<RootModel>()({
  state: {
    albums: [] as Album[],
  },
  reducers: {
    setAlbums: (state, albums) => ({ ...state, albums }),
  },
  effects: () => ({
    async getAlbums() {
      const allAlbums: DocumentData[] = [];
      const { db } = await import("@/firebase");
      const querySnapshot = await getDocs(collection(db, "albums"));
      querySnapshot.forEach((doc) => {
        allAlbums.push(doc.data());
      });

      if (allAlbums?.length) {
        allAlbums.sort((a, b) => {
          const dateA = new Date(a.releaseDate);
          const dateB = new Date(b.releaseDate);
          return dateB.getTime() - dateA.getTime();
        });
        this.setAlbums(allAlbums);
      }
    },
  }),
});
