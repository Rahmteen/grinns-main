import { Image, SlideFade, Stack } from "@chakra-ui/react";
import ProductSpotlight from "@/components/spotlights/ProductSpotlight/ProductSpotlight";
import ShowReminderToast from "@/components/toasts/ShowReminderToast/ShowReminderToast";

const Home = () => {
  return (
    <Stack gap={0}>
      <SlideFade unmountOnExit={false} in={true} transition={{ enter: { duration: 0.35, delay: 0.35 } }}>
        <ShowReminderToast />
      </SlideFade>
      <SlideFade unmountOnExit={false} in={true} transition={{ enter: { duration: 0.2, delay: 0.2 } }}>
        <Image
          objectFit={"contain"}
          mx="auto"
          maxH={{ base: "20vh", lg: "40vh" }}
          src={
            "https://firebasestorage.googleapis.com/v0/b/grinns-66dfd.firebasestorage.app/o/content%2F1140x800%20banner.PNG?alt=media&token=0a5f14fa-abf8-470b-8636-629fbfe6714d"
          }
        />
      </SlideFade>
      <SlideFade unmountOnExit={false} in={true} transition={{ enter: { duration: 0.7, delay: 0.7 } }}>
        <ProductSpotlight />
      </SlideFade>
    </Stack>
  );
};

export default Home;
