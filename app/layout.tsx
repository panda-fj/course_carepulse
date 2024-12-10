import type { Metadata } from "next";
import "./globals.css";

import { Plus_Jakarta_Sans } from "next/font/google";

import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/theme-provider";

const fontSans = Plus_Jakarta_Sans({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
    variable: "--font-sans"
})


export const metadata: Metadata = {
    title: "CarePulse",
    description: "A healthcare management system",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${cn('min-h-screen bg-dark-300 font-sans antialiased', fontSans.variable)} antialiased`}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    disableTransitionOnChange
                >
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
