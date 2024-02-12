import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Male Fashion Store",
  description: "Providing You Unique-Products Ever!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'/>

      </head>
      <body>
        <>
          {" "}
          <Navbar />
        </>
        {children}
      </body>
    </html>
  );
}
