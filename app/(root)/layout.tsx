import { Footer } from "@/components/shared/Footer";
import { Navbar } from "@/components/shared/Navbar";

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex flex-col min-h-dvh w-full">
      <Navbar />
      <main className="flex-1 flex-grow">{children}</main>
      <Footer />
    </div>
  );
};
export default RootLayout;
