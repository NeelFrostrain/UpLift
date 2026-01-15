'use client';

import assets from '@/assets.json';
import SectionWrapper from '@/layout/SectionWrapper';
import { motion } from 'motion/react';
import SectionTitlebar from '../ui/SectionTitlebar';
import ServiceCard from '../ui/ServiceCard';

export default function ServicesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <SectionWrapper className="flex-col" id="services">
      <SectionTitlebar
        text="Services"
        description="At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:"
      />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="my-10 grid w-full grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
      >
        {assets.services.map((service, index) => (
          <motion.div key={index} variants={cardVariants}>
            <ServiceCard {...service} />
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
