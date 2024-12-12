import { Dispatch, store } from "@/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const DataWrapper = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useDispatch<Dispatch>();
  const spotlightProduct = useSelector(store.select.spotlightModel.selectProduct);
  const spotlightAlbum = useSelector(store.select.spotlightModel.selectAlbum);
  const shows = useSelector(store.select.tourModel.selectShows);
  const accessToken = useSelector(store.select.spotifyModel.selectAccessToken);
  const artistAlbums = useSelector(store.select.spotifyModel.selectArtistAlbums);
  useEffect(() => {
    if (!spotlightAlbum) dispatch.spotlightModel.getSpotlightAlbum();
    if (!spotlightProduct) dispatch.spotlightModel.getSpotlightProduct();
    if (!shows) dispatch.tourModel.getShows();
    if (!accessToken) dispatch.spotifyModel.getAccessToken();
    if (artistAlbums?.length === 0 && accessToken) dispatch.spotifyModel.getArtistAlbums(accessToken);
  }, []);

  return <>{children}</>;
};

export default DataWrapper;
