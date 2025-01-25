import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { Separator } from "../ui/separator";

export function Footer() {
  return (
    <footer className="bg-madmon-main text-background py-8 sm:py-12 relative z-40">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8 sm:gap-4 items-stretch justify-center mx-auto">
          {/* Logo */}
          <div className="text-center md:text-left">
            <Image
              src="/assets/images/logo-white.png"
              alt="Madmon Logo"
              width={150}
              height={60}
              className="w-36 sm:w-44"
            />
          </div>

          <Separator orientation="horizontal" className="md:hidden w-full" />
          <Separator orientation="vertical" className="hidden md:block h-44" />

          {/* Contact Info */}
          <div className="space-y-4 sm:space-y-5 text-left">
            <h3 className="text-lg font-semibold mb-1 text-madmon-info">
              Contact Us
            </h3>
            <div className="space-y-3 sm:space-y-5">
              <div className="flex flex-row items-center sm:items-start gap-2 sm:gap-3">
                <MapPin className="h-5 w-5" />
                <span>42 Fareek Awai Ali Amer</span>
              </div>
              <div className="flex  flex-row items-center sm:items-start gap-2 sm:gap-3">
                <Phone className="h-5 w-5" />
                <span>01234568910</span>
              </div>
              <div className="flex flex-row items-center sm:items-start gap-2 sm:gap-3">
                <Mail className="h-5 w-5" />
                <span>hr@Madmon.ai</span>
              </div>
            </div>
          </div>

          <Separator orientation="horizontal" className="md:hidden w-full" />
          <Separator orientation="vertical" className="hidden md:block h-44" />

          {/* Useful Links */}
          <div className="space-y-2 flex flex-col justify-between text-left">
            <h3 className="text-lg font-semibold mb-1 text-madmon-info">
              Useful Links
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="https://www.madmon.ai/" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="https://www.madmon.ai/privacy_policy"
                  className="hover:underline"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Support
                </a>
              </li>
              <li>
                <a
                  href="https://www.madmon.ai/terms_and_conditions"
                  className="hover:underline"
                >
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          <Separator orientation="horizontal" className="md:hidden w-full" />
          <Separator orientation="vertical" className="hidden md:block h-44" />

          {/* Social Icons */}
          <div className="flex justify-center items-center h-auto gap-4 sm:flex-row">
            <Link
              href="#"
              className="border p-2 rounded-md hover:bg-white/20 transition-colors"
            >
              <FaLinkedinIn className="h-5 w-5" />
            </Link>
            <Link
              href="#"
              className="border p-2 rounded-md hover:bg-white/20 transition-colors"
            >
              <FaInstagram className="h-5 w-5" />
            </Link>
            <Link
              href="#"
              className="border p-2 rounded-md hover:bg-white/20 transition-colors"
            >
              <FaFacebookF className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
