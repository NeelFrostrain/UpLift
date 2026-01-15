'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Our Team', href: '#team' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Pricing', href: '#pricing' },
  ];

  const navItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="fixed top-0 z-50 flex h-20 w-full items-center justify-between bg-white px-6 md:relative md:bg-transparent md:px-10 xl:mb-20"
    >
      {/* Logo */}
      <Link href={'/'} className="group flex items-center justify-start gap-2">
        <Image
          src={'/Icon.svg'}
          alt="Logo"
          width={24}
          height={24}
          className="size-6 cursor-pointer transition-all duration-150 ease-in group-hover:animate-spin"
        />
        <h1 className="cursor-pointer text-xl font-semibold">UpLift</h1>
      </Link>

      {/* Desktop Links */}
      <div className="hidden items-center space-x-4 md:flex xl:space-x-8">
        {navLinks.map((link, index) => (
          <motion.div
            key={index}
            variants={navItemVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: index * 0.1 + 0.5, duration: 0.5 }}
          >
            <Link
              href={link.href}
              className="hover:text-destructive text-sm tracking-wide transition-all duration-150 ease-in hover:underline"
            >
              {link.name}
            </Link>
          </motion.div>
        ))}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="bg-primary hover:bg-background card-neo h-11 w-40 cursor-pointer rounded-[14px] border border-black text-sm transition-all duration-150 ease-in hover:text-black"
        >
          Request a quote
        </motion.button>
      </div>

      {/* Mobile Menu Toggle */}
      <button
        className="p-2 md:hidden"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 top-20 z-40 flex h-screen flex-col bg-white p-8 transition-transform duration-300 md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col space-y-6">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="hover:text-destructive text-2xl font-medium transition-all"
            >
              {link.name}
            </Link>
          ))}
          <button className="bg-primary h-14 w-full rounded-[14px] border border-black text-lg font-semibold transition-all active:scale-95">
            Request a quote
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
