import { store } from "@/store";
import { GridItem, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";

const Music = () => {
  const spotifyAlbums = useSelector(store.select.spotifyModel.selectArtistAlbums)
  return <SimpleGrid columns={8}>
    {spotifyAlbums?.map((album) => {
      return (
        <GridItem colSpan={1}>
          <Image src={album.images?.[0]?.url} />
          <Text>{album?.name}</Text>
        </GridItem>
      )
    })}

  </SimpleGrid>;
};

export default Music;
