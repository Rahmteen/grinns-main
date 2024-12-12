import { Models } from "@rematch/core";
import { albumsModel } from "./albums";
import { tourModel } from "./tour";
import { productModel } from "./product";
import { cartModel } from "./cart";
import { spotlightModel } from "./spotlight";
import { spotifyModel } from "./spotify";

export interface RootModel extends Models<RootModel> {
  albumsModel: typeof albumsModel;
  tourModel: typeof tourModel;
  productModel: typeof productModel;
  cartModel: typeof cartModel;
  spotlightModel: typeof spotlightModel;
  spotifyModel: typeof spotifyModel;
}

export const models: RootModel = {
  albumsModel,
  tourModel,
  productModel,
  cartModel,
  spotlightModel,
  spotifyModel,
};
