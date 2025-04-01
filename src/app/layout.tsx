import type { Metadata } from 'next';
import '../styles/globals.css';
import Navbar from '../components/Navbar';

export const metadata: Metadata = {
  title: 'Movie & Book Recommendation App',
  description: 'Browse, search, and save your favorite movies and books!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
