import type { Metadata } from "next";


export const metadata:Metadata = {
  title: {
      default: "NextJs 15 | Rehan",
      template: "%s | Rehan"
  }
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        <header style={{background:'#f4f4f4', height:'50px'}}>logo</header>
        {children}
        <footer style={{background:'#f4f4f4', height:'30px', position:'relative', bottom:'0'}}>Footer goes here</footer>
      </body>
    </html>
  );
}
