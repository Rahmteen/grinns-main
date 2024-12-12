import Footer from "@/components/navs/Footer/Footer";
import Navbar from "@/components/navs/Navbar/Navbar";
import { Stack } from "@chakra-ui/react";


const NavWrapper = ({ children }: { children: React.ReactNode }) => {

  return (
    <>
      <Navbar />
      <Stack gap={0} minH="90dvh">
        {children}
      </Stack>
      <Footer />
    </>
  );
};

export default NavWrapper;
