import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import iconDev from "../../public/images/icon_dev.png";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfólio | Kathellyn Caroline",
  description: "Portfólio de Kathellyn Caroline, desenvolvedora de software e cientista de dados.",
  icons: iconDev.src,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
