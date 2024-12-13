import CartDrawer from "@/components/shopping/CartDrawer/CartDrawer";
import { Dispatch, store } from "@/store";
import { Fade, Flex, Image, SlideFade, Stack, Text, useBreakpointValue } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

const navbarLinks = [
  { pathname: "/", label: "HOME" },
  { pathname: "/shop", label: "SHOP" },
  { pathname: "/tour", label: "TOUR" },
];

const Navbar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const navRef = useRef<HTMLDivElement>(null);
  const isMobile = useBreakpointValue({ base: true, lg: false });
  const dispatch = useDispatch<Dispatch>();
  const isDrawerOpen = useSelector(store.select.cartModel.selectIsDrawerOpen);
  const checkout = useSelector(store.select.cartModel.selectCheckout);

  useEffect(() => {
    if (!checkout) dispatch.cartModel.createCheckout();
  }, []);

  useEffect(() => {
    if (navRef?.current) {
      navRef?.current?.scrollIntoView();
    }
  }, [pathname, checkout?.lineItems]);

  return (
    <Flex ref={navRef} bg="white" px={5} py={4} justifyContent={"space-between"} alignItems={"center"}>
      <Text
        pl={1}
        cursor={"pointer"}
        onClick={() => navigate("/")}
        fontSize={{ base: "md", lg: "xl" }}
        fontFamily={"nineties"}
        fontWeight={600}
        color={isMobile && pathname === "/" ? "black" : isMobile && pathname !== "/" ? "blackAlpha.500" : "black"}
      >
        THE GRINNS
      </Text>
      <Flex alignItems={"center"} gap={3.5}>
        {navbarLinks.map((navItem) => {
          if (isMobile && navItem.label === "HOME") return;
          const isCurrent = pathname === navItem.pathname;
          return (
            <Text
              fontSize={"sm"}
              key={navItem.pathname}
              onClick={() => navigate(navItem.pathname)}
              _hover={{ color: "black" }}
              transition={"0.3s all ease-in-out"}
              fontFamily={"bricolage"}
              fontWeight={600}
              cursor={isCurrent ? "pointer" : "pointer"}
              color={isCurrent ? "black" : "blackAlpha.500"}
            >
              {navItem.label}
            </Text>
          );
        })}
        <Flex
          cursor={"pointer"}
          onClick={() => dispatch.cartModel.setIsDrawerOpen(!isDrawerOpen)}
          alignItems={"center"}
          ml={{ base: 1, lg: 1.5 }}
          mr={{ base: -1, lg: 0 }}
          px={{ base: 0, lg: 1 }}
          mt={{ lg: "-2px" }}
          gap={0.5}
        >
          <Text fontSize={{ base: "sm", lg: "md" }} as="i" className="fa-sharp fa-cart-shopping" />
          <Stack pl={{ base: 0.5, lg: 1 }} mr={{ lg: -1 }}>
            <SlideFade unmountOnExit={false} in={checkout?.lineItems?.length ? true : false}>
              <Text
                px={checkout?.lineItems?.length ? 1 : 0}
                textAlign={"center"}
                fontSize={"sm"}
                fontWeight={700}
                fontFamily={"bricolage"}
              >
                {checkout?.lineItems?.length}
              </Text>
            </SlideFade>
          </Stack>
        </Flex>
      </Flex>
      <CartDrawer />
    </Flex>
  );
};

export default Navbar;
