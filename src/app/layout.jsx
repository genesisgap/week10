import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { SidebarProvider } from "./providers";

const inter = Inter({ subsets: ["latin"], weight: ['400'] });

export const metadata = {
  title: "Movie Pop",
  description: "A Movie Application",
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-black" >
      <body className={inter.className} >
        <SidebarProvider>

        <Navbar />
      <div className="min-h-screen">

        {children}
      </div>

      <Footer />
        </SidebarProvider>
       </body>
    </html>
  );
}
