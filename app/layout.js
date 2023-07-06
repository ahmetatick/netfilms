import { Inter } from "next/font/google";

import "@/styles/reset.scss";
import "@/styles/global.scss";
import Header from "@/components/header";
import Footer from "@/components/footer";

const interFontFamily = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={interFontFamily.className}
    >
      <body className="container">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
