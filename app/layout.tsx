import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'NekoPlay — Recargas de Juegos',
  description: 'Recargas de juegos online · Bolivia y Brasil · Free Fire, MLBB, PUBG y más',
};

export const viewport: Viewport = {
  themeColor: '#12081a',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
