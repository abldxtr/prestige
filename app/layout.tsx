import "./globals.css";
// import { Inter } from "next/font/google";
import Provider from "./component/redux/provider";
import P_header from "./component/prestige/P_header";
import { DM_Sans } from "next/font/google";
import {} from "@tanstack/react-query";
const dm_sans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dmsans",
});

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Prestige",
  description: "my code is best baby",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Provider>
        <body className={dm_sans.className}>
          <div>
            {/* <P_header /> */}
            {children}
          </div>
        </body>
      </Provider>
    </html>
  );
}
