import Footer from "@/components/organism/Footer";
import Header from "@/components/organism/Header";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
        <Header />
        {children}
        <Footer />
    </main>
  );
}
