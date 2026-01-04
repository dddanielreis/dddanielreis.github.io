import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Meu Blog",
  description: "Um blog minimalista",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <header className="header">
          <nav className="nav">
            <Link href="/" style={{ fontSize: '1.25rem', fontWeight: 600 }}>
              Meu Blog
            </Link>
            <ul>
              <li><Link href="/">Início</Link></li>
              <li><Link href="/posts">Posts</Link></li>
              <li><Link href="/sobre">Sobre</Link></li>
            </ul>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="footer">
          <p>&copy; {new Date().getFullYear()} Meu Blog. Feito com Next.js.</p>
        </footer>
      </body>
    </html>
  );
}
