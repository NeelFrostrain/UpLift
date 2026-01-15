'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Linkedin, Twitter } from 'lucide-react';
import { Input } from '../ui/input';

export default function FooterSection() {
  const navLinks = [
    { name: 'About us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Use Cases', href: '#team' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Blog', href: '#blog' },
  ];

  return (
    <footer className="w-full px-5 md:px-10">
      <div className="flex w-full flex-col rounded-t-[45px] bg-[#191a23] px-6 py-12 text-white md:px-14 md:py-14">
        {/* Top Row: Logo, Nav, Socials */}
        <div className="flex w-full flex-col items-center justify-between gap-8 lg:flex-row lg:gap-0">
          <Link href={'/'} className="flex items-center gap-2">
            <Image
              src={'/Icon_White.svg'}
              alt="Logo"
              width={24}
              height={24}
              className="size-6 transition-all duration-150 group-hover:animate-spin"
            />
            <h1 className="text-2xl font-bold">UpLift</h1>
          </Link>

          <nav className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-sm underline-offset-4 hover:underline"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center justify-end gap-3 lg:flex">
            <SocialIcon Icon={Linkedin} />
            <SocialIcon Icon={Facebook} />
            <SocialIcon Icon={Twitter} />
          </div>
        </div>

        {/* Middle Section: Contact & Subscribe */}
        <div className="mt-12 flex flex-col items-center justify-between gap-10 lg:flex-row lg:items-stretch">
          {/* Contact Info */}
          <div className="flex flex-col items-center space-y-4 text-center lg:items-start lg:text-left">
            <span className="rounded-md bg-[#b9ff66] px-2 py-0.5 text-sm font-medium text-black">
              Contact us:
            </span>
            <div className="space-y-2 text-sm md:text-base">
              <p>Email: info@uplift.com</p>
              <p>Phone: +1 (555) 012-3456</p>
              <p className="max-w-62.5">
                42 Innovation Way, Suite 100, San Francisco, CA 94105
              </p>
            </div>
          </div>

          {/* Subscription Box */}
          <div className="flex w-full flex-col items-center gap-4 rounded-[14px] bg-[#292a32] p-6 md:flex-row md:p-10 lg:max-w-150">
            <Input
              placeholder="Email"
              className="h-12 border-white/20 bg-transparent text-white placeholder:text-gray-400 focus-visible:ring-[#b9ff66]"
            />
            <button className="h-12 w-full rounded-xl bg-[#b9ff66] px-8 font-medium whitespace-nowrap text-black transition-colors hover:bg-white md:w-auto">
              Subscribe to news
            </button>
          </div>
        </div>

        {/* Mobile Socials (Only visible on mobile) */}
        <div className="mt-10 flex items-center justify-center gap-4 lg:hidden">
          <SocialIcon Icon={Linkedin} />
          <SocialIcon Icon={Facebook} />
          <SocialIcon Icon={Twitter} />
        </div>

        {/* Bottom Line & Copyright */}
        <div className="mt-12 flex flex-col items-center gap-4 border-t border-white/20 pt-8 text-xs md:flex-row md:text-sm">
          <p>© 2023 UpLift. All Rights Reserved.</p>
          <Link href="/privacy" className="underline underline-offset-2">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ Icon }: { Icon: any }) {
  return (
    <div className="flex size-8 cursor-pointer items-center justify-center rounded-full bg-white transition-transform hover:scale-110">
      <Icon className="text-black" size={18} />
    </div>
  );
}
