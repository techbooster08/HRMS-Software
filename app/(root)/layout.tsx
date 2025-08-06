import "../globals.css";
import Header from '@/components/public-website/Header'
import Footer from "@/components/public-website/Footer";



export default function PublicSiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
