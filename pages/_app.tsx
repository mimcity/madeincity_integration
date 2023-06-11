import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import localFont from "@next/font/local";
import type { AppProps } from "next/app";

const albraFont = localFont({
  src: [
    {
      path: "../fonts/AlbraGrotesk-Black.otf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../fonts/AlbraGrotesk-BlackItalic.otf",
      weight: "900",
      style: "italic",
    },
    {
      path: "../fonts/AlbraGrotesk-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/AlbraGrotesk-BoldItalic.otf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../fonts/AlbraGrotesk-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/AlbraGrotesk-LightItalic.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../fonts/AlbraGrotesk-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/AlbraGrotesk-MediumItalic.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../fonts/AlbraGrotesk-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/AlbraGrotesk-RegularItalic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../fonts/AlbraGrotesk-Semi.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/AlbraGrotesk-SemiItalic.otf",
      weight: "600",
      style: "italic",
    },
  ],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main
      className={`flex min-h-screen flex-col bg-white ${albraFont.className}`}
    >
      <Navbar />
      <Component {...pageProps} />
    </main>
  );
}
