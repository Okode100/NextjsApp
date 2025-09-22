import '@/app/ui/global.css';
import { inter } from '@/app/ui/font';
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}