"use client";

import { useTheme } from "next-themes";
import { useEffect } from "react";

export function ThemeColorManager() {
  const { theme, resolvedTheme } = useTheme();

  useEffect(() => {
    // Determine the active theme
    const activeTheme = theme === "system" ? resolvedTheme : theme;
    
    // Define colors for light and dark themes
    const colors = {
      light: "#ffffff",
      dark: "#0a0a0a"
    };
    
    // Get the appropriate color
    const themeColor = colors[activeTheme as keyof typeof colors] || colors.light;
    
    // Update or create theme-color meta tag
    let metaThemeColor = document.querySelector('meta[name="theme-color"]');
    
    if (!metaThemeColor) {
      metaThemeColor = document.createElement('meta');
      metaThemeColor.setAttribute('name', 'theme-color');
      document.head.appendChild(metaThemeColor);
    }
    
    metaThemeColor.setAttribute('content', themeColor);
    
    // Also update apple-mobile-web-app-status-bar-style for iOS
    let appleStatusBar = document.querySelector('meta[name="apple-mobile-web-app-status-bar-style"]');
    
    if (!appleStatusBar) {
      appleStatusBar = document.createElement('meta');
      appleStatusBar.setAttribute('name', 'apple-mobile-web-app-status-bar-style');
      document.head.appendChild(appleStatusBar);
    }
    
    // Set status bar style based on theme
    const statusBarStyle = activeTheme === "dark" ? "black-translucent" : "default";
    appleStatusBar.setAttribute('content', statusBarStyle);
    
  }, [theme, resolvedTheme]);

  return null;
}