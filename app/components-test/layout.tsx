import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Components Test - Internal",
  description: "Internal component testing page.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ComponentsTestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}