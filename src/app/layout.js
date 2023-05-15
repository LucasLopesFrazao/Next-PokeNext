import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

import Layout from "@/components/Layout";

export const metadata = {
  title: "PokeNext",
  icons: {
    icon: {
      url: "/pokebola.png",
      type: "image/png",
    },
    shortcut: { url: "/pokebola.png", type: "image/png" },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
