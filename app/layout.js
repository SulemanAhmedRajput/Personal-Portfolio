import { Poppins } from "next/font/google";
import "./globals.css";
import { ScrollArea } from "@/components/ui/scroll-area";
import Background from "@/components/custom/Background";
import Navbar from "@/components/custom/Navbar";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/custom/ThemeProvider";
import PageTransitionWrapper from "@/components/custom/PageTransitionWrapper";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});
export const metadata = {
  title: "Suleman Ahmed",
  description: "Full-stack developer from Sukkur, Pakistan, specializing in React, Node.js, and MongoDB. Passionate about open-source contributions and community collaboration.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
      <ThemeProvider defaultTheme="violet-light" storageKey="vite-ui-theme">
          <ScrollArea className="h-screen w-full pr-2 ">
            <Background />
            <div className="max-w-5xl  w-full h-screen  mx-auto">
              <Navbar />
      {/* <PageTransitionWrapper> */}
              <main>{children}</main>
        {/* </PageTransitionWrapper> */}

            </div>
            <Toaster />
          </ScrollArea>
        </ThemeProvider>
      </body>
    </html>
  );
}
