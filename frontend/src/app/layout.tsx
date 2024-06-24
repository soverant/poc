import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { Box, Container } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/app/ui/theme";
import Header from "@/app/ui/Header";
import { ReactNode } from "react";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="h-screen overflow-hidden">
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <Header></Header>
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
