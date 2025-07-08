import "./globals.css";

export const metadata = {
    icons: {
        icon: [],
    },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs" className="dark">
        <head>
            <title>Portfolio - Jakub Váňa</title>
        </head>
          <body className="bg-gray-950 text-white scroll-smooth font-sans">
            {children}
        </body>
    </html>
  );
}
