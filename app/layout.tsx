import "./globals.css";
import Nav from "@/components/Nav";

export const metadata = {
  title: "Cathy Mu",
  description: "Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-zinc-900">
        <header>
          <div className="mx-auto max-w-4xl px-4 py-4">
            <Nav />
          </div>
        </header>
        <main className="mx-auto max-w-4xl px-4 py-8">{children}</main>
      </body>
    </html>
  );
}
