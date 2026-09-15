import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'SCK Aviation — Attitude with Altitude', description: 'Discover OE-LSC. Exceptional aircraft design, selective private travel and cinematic productions.', robots: {index:false,follow:false} };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="en"><body>{children}</body></html>; }
