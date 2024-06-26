import "./globals.css";
import { lato } from "./ui/fonts";
import { AuthProvider } from "./providers/Providers";
import { ReviewFormProvider } from "./providers/ReviewControl";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${lato.className} antialiased`}>
        <AuthProvider>
          <ReviewFormProvider>{children}</ReviewFormProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
