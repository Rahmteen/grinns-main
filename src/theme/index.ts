import { extendTheme } from "@chakra-ui/react";
export const defaultTheme = extendTheme({
  colors: {
    rrv: {
      nuBlack: "black",
      white50: "#ffffff",
      white100: "#f0f0f0",
      white200: "#e1e1e1",
      yellow: "#f3cf6e",
      blue: "#209fd5",
      green: "#1ec258",
      red: "#d03e25",
      100: "#f5f4f5",
      200: "#cac4ce",
      300: "#aaa1ad",
      400: "#8a7d8c",
      500: "#675a68",
      600: "#433743",
      700: "#161214",
      800: "#0B0A0A",
      900: "#000000",
    },
    p1: {
      100: "#ffffff",
      200: "#f2f2f2",
      300: "#ececec",
      400: "#e5e5e5",
      500: "#f1c47b",
      600: "#f7b446",
      700: "#fca311",
      800: "#14213d",
      900: "#0a111f",
      1000: "#000000",
    },
  },
  fonts: {
    // space: "'Space Mono', sans-serif",
    // inter: "'Inter', sans-serif",
    // karla: "'Karla', sans-serif",
    // poppins: "'Poppins', sans-serif",
    // open: "'Open Sans Variable', sans-serif",
    // lora: "'Lora Variable', serif",
    // domine: "'Domine Variable', sans-serif",
    bricolage: "'Bricolage Grotesque Variable', sans-serif",
  },
  styles: {
    global: (props: any) => ({
      "html, body": {
        height: "100%",
        minHeight: "100vh",
        minWidth: "100vw",
        overflowX: "hidden",
        overscrollBehavior: "none !important",
        // backgroundImage: 'linear-gradient(to right bottom, #ffffff, #ffeeff, #ffd8de, #ffd789, #fff236)'
      },
      '.chakra-input[type="search"]::-webkit-search-cancel-button': {
        display: "none",
      },
      ".bs-1": {
        boxShadow:
          "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px",
      },
    }),
  },
});
