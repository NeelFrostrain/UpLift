import Image from 'next/image';
import SectionWrapper from '@/layout/SectionWrapper';

export default function HeroSection() {
  return (
    <SectionWrapper className="mt-20 h-128 flex-col items-center gap-2 px-2 md:h-180 md:flex-row md:justify-between md:gap-0 xl:pt-10">
      <div className="flex h-full flex-1 items-center justify-center md:hidden md:justify-end">
        <Image
          src={'/Hero_Illustration.png'}
          alt=""
          width={1000}
          height={1000}
          className="w-full max-w-xl"
        />
      </div>
      <div className="flex h-full flex-1 flex-col items-center justify-center gap-2 md:gap-5">
        <h1 className="text-center text-4xl font-semibold md:text-start md:text-5xl xl:text-8xl">
          Navigating the digital landscape for success
        </h1>
        <p className="text-center text-sm font-light md:text-start">
          Our digital marketing agency helps businesses grow and succeed online
          through a range of services including SEO, PPC, social media
          marketing, and content creation.
        </p>
        <div className="flex h-fit w-full items-center justify-center md:justify-start">
          <button className="hover:bg-primary mt-3 cursor-pointer rounded-[14px] bg-black px-6 py-3 text-sm text-white transition-all duration-150 ease-in hover:text-black hover:shadow-[0_5px_0_0_rgba(0,0,0,1)] hover:outline hover:outline-black md:mt-1">
            Book a consultation
          </button>
        </div>
      </div>
      <div className="hidden h-full flex-1 items-center justify-center md:flex md:justify-end">
        <Image
          src={'/Hero_Illustration.png'}
          alt=""
          width={1000}
          height={1000}
          className="w-full max-w-xl"
        />
      </div>
    </SectionWrapper>
  );
}
