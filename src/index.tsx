import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { defaultTheme } from "@/theme/index";
import App from "@/App";

import "@fontsource-variable/bricolage-grotesque";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <BrowserRouter>
    <ChakraProvider theme={defaultTheme}>
      <App />
    </ChakraProvider>
  </BrowserRouter>
);
