import SteamVideoProvider from "@/providers/SteamClientProvider";
import { Metadata } from "next";
import React, { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Yoom",
  description: "Video Calling App",
  icons:{
    icon: '/icons/logo.svg'
  }
};


const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <SteamVideoProvider>{children}</SteamVideoProvider>
    </main>
  );
};

export default RootLayout;
