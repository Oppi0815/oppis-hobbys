import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Oppis Hobbys",
  description: "Motorräder, Makro-Fotografie, Linux und Ehrenamt von Horst Oppermann.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="de"><body>{children}</body></html>;
}
