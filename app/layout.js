import Background from "@/components/custom/Background";
import Navbar from "@/components/custom/Navbar";
import { ThemeProvider } from "@/components/custom/ThemeProvider";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Toaster } from "@/components/ui/toaster";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});
export const metadata = {
  title: "Suleman Ahmed | Software Engineer | Full-Stack Developer",
  description:
    "Full-stack developer from Sukkur, Pakistan, specializing in React, Node.js, and MongoDB. Passionate about building scalable web applications, open-source projects, and community collaboration.",
  keywords: [
    "Suleman Ahmed",
    "Full Stack Developer",
    "React Developer",
    "Node.js Developer",
    "JavaScript",
    "TypeScript",
    "MERN Stack",
    "Web Developer",
    "Software Engineer",
    "Portfolio",
  ],
  authors: [{ name: "Suleman Ahmed", url: "https://suleman-ahmed.vercel.app" }],
  creator: "Suleman Ahmed",
  publisher: "Suleman Ahmed",
  metadataBase: new URL("https://suleman-ahmed.vercel.app"),
  icons: {
    icon: "/27856136-cropped.svg",
  },
  openGraph: {
    title: "Suleman Ahmed | Full-Stack Developer",
    description:
      "Portfolio of Suleman Ahmed, a passionate full-stack developer specializing in modern JavaScript, React, Node.js, and MongoDB.",
    url: "https://personal-portfolio-4z53znypy-sas-projects-14955394.vercel.app",
    siteName: "Suleman Ahmed Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png", // Replace with your actual image (1200x630 recommended)
        width: 1200,
        height: 630,
        alt: "Suleman Ahmed Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Suleman Ahmed | Full-Stack Developer",
    description:
      "Full-stack developer from Sukkur, Pakistan — experienced in React, Node.js, and MongoDB. Explore my work and projects.",
    creator: "@suleman_ahmed", // replace with your real handle if you have one
    images: ["/og-image.png"], // same image as Open Graph
  },
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
