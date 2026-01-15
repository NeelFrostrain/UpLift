'use client';

import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

type Props = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

export default function SectionWrapper({ children, className, id }: Props) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={cn(
        'mt-10 mb-20 flex h-full w-full items-center justify-center px-2 py-10 md:px-10 md:py-0',
        className,
      )}
      id={id}
    >
      {children}
    </motion.section>
  );
}
