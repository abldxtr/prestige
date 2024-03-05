import "./globals.css";
import { Inter } from "next/font/google";
import Providers from "./component/redux/Providers";
import P_header from "./component/prestige/P_header";
import { Reactqueryprovider } from "./Provider-query";
import { DM_Sans } from "next/font/google";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
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
      <Reactqueryprovider>
        <body className={dm_sans.className}>
          <Providers>
            <div>
              <P_header />
              {children}
            </div>
          </Providers>
        </body>
        {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      </Reactqueryprovider>
    </html>
  );
}
