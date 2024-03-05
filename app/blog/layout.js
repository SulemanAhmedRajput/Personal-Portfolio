import { Poppins } from "next/font/google";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ThemeProvider } from "@/components/custom/themeProvider";
import Background from "@/components/custom/Background";
import Navbar from "@/components/custom/Navbar";
import { Toaster } from "@/components/ui/toaster";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});
export const metadata = {
  title: "Blog",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ScrollArea className="h-screen w-full pr-2 ">
            <Background />
            <div className="max-w-5xl  w-full h-screen  mx-auto">
              <Navbar />
              <main>{children}</main>
            </div>
            <Toaster />
          </ScrollArea>
        </ThemeProvider>
      </body>
    </html>
  );
}
