import '../styles/globals.css'
import type { AppProps } from 'next/app'
import useBlobity from "blobity/lib/react/useBlobity";

export default function App({ Component, pageProps }: AppProps) {
  const blobity = useBlobity({
    licenseKey: "opensource",
    magnetic: false,
    color: "#ffffff",
    focusableElementsOffsetX: 4,
    focusableElementsOffsetY: 4,
    zIndex: -1,
    radius: 10,
  });
  return <Component {...pageProps} />
}
