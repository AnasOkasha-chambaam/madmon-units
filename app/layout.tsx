import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import { TopNav } from "@/components/nav/top-nav";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AppSideNav } from "@/components/side-nav/side-nav";
import { Footer } from "@/components/footer/Footer";
import { Toaster } from "@/components/ui/sonner";

const poppins = Poppins({
  // variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Madmon | Units",
  description: "Madmon is a real estate platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <Providers>
          <>
            <TopNav />

            <SidebarProvider className="pr-9">
              <AppSideNav />
              <SidebarInset>
                <div>{children}</div>
              </SidebarInset>
            </SidebarProvider>
            <Footer />
            <Toaster richColors theme="light" />
          </>
        </Providers>
      </body>
    </html>
  );
}
