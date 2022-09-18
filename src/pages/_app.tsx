import type { AppProps } from "next/app";
import "src/lib/tailwind.css";
import { MantineProvider } from "@mantine/core";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
  <>
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Component {...pageProps} />
    </MantineProvider>
  </>
  )
}
