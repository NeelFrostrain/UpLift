import Image from 'next/image';
import Link from 'next/link';

const navLinks = [
  { name: 'About Us' },
  { name: 'Services' },
  { name: 'Out Team' },
  { name: 'Reviews' },
  { name: 'Pricing' },
];

export default function Navbar() {
  return (
    <div className="flex h-20 w-full items-center justify-between px-10 xl:mb-20">
      <Link href={'/'} className="group flex items-center justify-start gap-2">
        <Image
          src={'/icon.svg'}
          alt=""
          width={1000}
          height={1000}
          className="size-6 cursor-pointer transition-all duration-150 ease-in group-hover:animate-spin"
        />
        <h1 className="cursor-pointer text-xl font-semibold">UpLift</h1>
      </Link>
      <div className="space-x-2.5 xl:space-x-3.5">
        {navLinks.map((link, index) => (
          <Link
            key={index}
            href={''}
            className="hover:text-destructive text-sm tracking-wide transition-all duration-150 ease-in hover:underline"
          >
            {link.name}
          </Link>
        ))}

        <button className="bg-primary hover:bg-background card-neo h-11 w-40 cursor-pointer rounded-[14px] border border-black text-sm transition-all duration-150 ease-in hover:text-black sm:ml-4">
          Contact Us
        </button>
      </div>
    </div>
  );
}
