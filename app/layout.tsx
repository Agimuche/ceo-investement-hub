import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CEO Hub Investment Member App — 39 Complete Pages",
  description: "CEO Hub Investment Hub Masterclasses member app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  );
}
