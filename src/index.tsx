import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { defaultTheme } from "@/theme/index";
import App from "@/App";
import { Provider } from "react-redux";
import { store } from "@/store";
import DataWrapper from "@/components/wrappers/DataWrapper/DataWrapper";
import NavWrapper from "@/components/wrappers/NavWrapper/NavWrapper";
import "@fontsource-variable/bricolage-grotesque";
import "@fontsource-variable/source-sans-3";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <ChakraProvider theme={defaultTheme}>
        <DataWrapper>
          <NavWrapper>
            <App />
          </NavWrapper>
        </DataWrapper>
      </ChakraProvider>
    </BrowserRouter>
  </Provider>
);
