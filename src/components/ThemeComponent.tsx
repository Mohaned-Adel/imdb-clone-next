"use client";

import { ThemeProvider } from "next-themes";

export default function ThemeComponent({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="min-h-screen bg-white text-gray-700 transition-colors duration-300 dark:bg-gray-900 dark:text-gray-200">
        {children}
      </div>
    </ThemeProvider>
  );
}
