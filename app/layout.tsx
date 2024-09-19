import type { Metadata } from "next";
import { Public_Sans } from "next/font/google";
import "@/styles/globals.css";
import { Providers } from "@/redux/provider";
import ScrollTopButton from "@/components/Layout-components/Scroll/ScrollTop";
import ThemeWrapper from "@/components/Layout-components/ThemeWrapper";
import ThemeInitializer from "@/components/Layout-components/ThemeInitializer";

const public_sans = Public_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(`https://alinka-portfolio.vercel.app/`),
  title: {
    default: "My Personal Blog",
    template: "%s - My Personal Blog",
  },
  description: "Come and read my awesome articles",
  twitter: {
    card: "summary_large_image",
  },
  alternates: {
    canonical: "./",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={public_sans.className}>
        <Providers>
          <ThemeInitializer />
          <ThemeWrapper>
            {children}
            <ScrollTopButton />
          </ThemeWrapper>
        </Providers>
      </body>
    </html>
  );
}
