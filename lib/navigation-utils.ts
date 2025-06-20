"use client";

export function handleAnchorNavigation(href: string, currentPath: string) {
  // Check if it's an anchor link
  if (!href.startsWith('#')) {
    return href; // Return as-is for regular links
  }

  // If we're on homepage, return anchor as-is for smooth scrolling
  if (currentPath === '/') {
    return href;
  }

  // If we're on any other page, redirect to homepage with anchor
  return `/${href}`;
}

export function isAnchorLink(href: string): boolean {
  return href.startsWith('#');
}

export function isHomePage(path: string): boolean {
  return path === '/';
}