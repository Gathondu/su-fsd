import "./ui/globals.css";
import { inter } from "./lib/font";

export const metadata = {
  title: "FSD",
  description: "FSD sort",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
