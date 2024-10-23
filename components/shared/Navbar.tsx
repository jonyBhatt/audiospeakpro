import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

export const Navbar = () => {
  return (
    <nav className="container mx-auto py-4 sticky top-0">
      <div className="h-full w-full bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 px-4 py-2.5 rounded">
        {/** Desktop Navbar */}
        <div className="flex justify-between items-center">
          {/** Nav Links */}
          <div className="flex items-center justify-center gap-2">
            <Link
              href="/"
              className="font-montserrat font-semibold transition-colors duration-300 ease-in-out  py-2 px-4 rounded-lg hover:bg-accent hover:text-white"
            >
              Home
            </Link>
            <Link
              href="/"
              className="font-montserrat font-semibold transition-colors duration-300 ease-in-out  py-2 px-4 rounded-lg hover:bg-accent hover:text-white"
            >
              About
            </Link>
            <Link
              href="/"
              className="font-montserrat font-semibold transition-colors duration-300 ease-in-out  py-2 px-4 rounded-lg hover:bg-accent hover:text-white"
            >
              Contact
            </Link>
          </div>
          {/** Logo  */}
          <div>
            <Image
              src="/logo.png"
              alt="Logo"
              width={50}
              height={50}
              className="rounded-full"
            />
          </div>
          {/** Button */}
          <Button size="lg" className="rounded-lg text-base font-montserrat font-semibold">
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
};
