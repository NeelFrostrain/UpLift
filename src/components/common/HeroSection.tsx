'use client';

import Image from 'next/image';
import SectionWrapper from '@/layout/SectionWrapper';
import { motion } from 'motion/react';

export default function HeroSection() {
  return (
    <SectionWrapper className="mt-50 mb-30 h-128 flex-col items-center gap-2 px-2 md:mt-0 md:h-180 md:flex-row md:justify-between md:gap-0 xl:pt-10">
      <div className="flex h-full flex-1 items-center justify-center md:hidden md:justify-end">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <Image
            src={'/Hero_Illustration.png'}
            alt=""
            width={1000}
            height={1000}
            className="w-full max-w-xl"
            priority
          />
        </motion.div>
      </div>
      <div className="flex h-full flex-1 flex-col items-center justify-center gap-2 md:gap-5">
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center text-4xl font-semibold md:text-start md:text-5xl xl:text-8xl"
        >
          Navigating the digital landscape for success
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="text-center text-sm font-light md:text-start"
        >
          Our digital marketing agency helps businesses grow and succeed online
          through a range of services including SEO, PPC, social media
          marketing, and content creation.
        </motion.p>
        <div className="flex h-fit w-full items-center justify-center md:justify-start">
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4, ease: 'easeOut' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hover:bg-primary mt-3 cursor-pointer rounded-[14px] bg-black px-6 py-3 text-sm text-white transition-all duration-150 ease-in hover:text-black hover:shadow-[0_5px_0_0_rgba(0,0,0,1)] hover:outline hover:outline-black md:mt-1"
          >
            Book a consultation
          </motion.button>
        </div>
      </div>
      <div className="hidden h-full flex-1 items-center justify-center md:flex md:justify-end">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        >
          <Image
            src={'/Hero_Illustration.png'}
            alt=""
            width={1000}
            height={1000}
            className="w-full max-w-xl"
            priority
          />
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
