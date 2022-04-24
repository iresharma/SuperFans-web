import "../styles/globals.css";
import { useState } from "react";
import {
  MantineProvider,
  ColorSchemeProvider,
  Loader,
  ColorScheme,
} from "@mantine/core";
import { UserProvider } from "@auth0/nextjs-auth0";
import { PageTransition } from "next-page-transitions";

const TIMEOUT = 400;

function MyApp({ Component, pageProps }) {
  const [colorScheme, setColorScheme] = useState("dark");
  const toggleColorScheme = (value) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <UserProvider user={pageProps.user}>
      <PageTransition
        timeout={TIMEOUT}
        classNames="page-transition"
        loadingComponent={<Loader color="black" size="xl" variant="bars" />}
        loadingTimeout={{
          enter: TIMEOUT,
          exit: 0,
        }}
        loadingClassNames="loading-indicator"
      >
        <ColorSchemeProvider
          colorScheme={colorScheme}
          toggleColorScheme={toggleColorScheme}
        >
          <MantineProvider
            theme={{
              colorScheme,
              colors: {
                brand: [
                  "#F8F0FC",
                  "#F3D9FA",
                  "#EEBEFA",
                  "#E599F7",
                  "#A56CC1",
                  "#845EF7",
                  "#7950F2",
                  "#7048E8",
                  "#6741D9",
                  "#5F3DC4",
                ],
              },
              primaryColor: "brand",
            }}
            withGlobalStyles
          >
            {getLayout(<Component {...pageProps} />)}
          </MantineProvider>
        </ColorSchemeProvider>
      </PageTransition>
      <style jsx global>{`
        .page-transition-enter {
          opacity: 0;
          transform: translate3d(0, 20px, 0);
        }
        .page-transition-enter-active {
          opacity: 1;
          transform: translate3d(0, 0, 0);
          transition: opacity ${TIMEOUT}ms, transform ${TIMEOUT}ms;
        }
        .page-transition-exit {
          opacity: 1;
        }
        .page-transition-exit-active {
          opacity: 0;
          transition: opacity ${TIMEOUT}ms;
        }
        .loading-indicator-appear,
        .loading-indicator-enter {
          opacity: 0;
        }
        .loading-indicator-appear-active,
        .loading-indicator-enter-active {
          opacity: 1;
          transition: opacity ${TIMEOUT}ms;
        }
      `}</style>
    </UserProvider>
  );
}

export default MyApp;
