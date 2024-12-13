import { extendTheme } from "@chakra-ui/react";
export const defaultTheme = extendTheme({
  colors: {},
  fonts: {
    bricolage: "'Bricolage Grotesque Variable', sans-serif",
    source: "''Source Sans 3 Variable', sans-serif'",
    nineties: "'Nineties Headliner', sans-serif",
  },
  styles: {
    global: () => ({
      "html, body": {
        height: "100%",
        minHeight: "100vh",
        minWidth: "100vw",
        overflowX: "hidden",
        overscrollBehavior: "none !important",
        background: "white",
        overflowY: "scroll",
        WebkitOverflowScrolling: "touch",
      },
      ".box-shadow": {
        boxShadow: "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
      },
      ".box-shadow-2": {
        boxShadow: "rgba(0, 0, 0, 0.01) 0px 1px 1px 0px, rgba(27, 31, 35, 0.05) 0px 0px 0px 1px",
      },
      ".swiper-pagination-bullet": {
        backgroundColor: "blackAlpha.500 !important",
        borderRadius: "0",
        ".swiper-pagination-bullet-active": {
          backgroundColor: "black !important",
          borderRadius: "0",
        },
      },
    }),
  },
});
