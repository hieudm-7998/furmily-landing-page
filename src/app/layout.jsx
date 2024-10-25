import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";

const SFProRegular = localFont({
  src: "./fonts/SFProText-Regular.otf",
  variable: "--font-sfpro-text",
  weight: "100 200 300 400 500 600 700 800 900",
});

export const metadata = {
  title: "Furmily | Pet Adopt",
  description: "Furmily | Pet Adopt",
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <body className={`${SFProRegular.variable} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
