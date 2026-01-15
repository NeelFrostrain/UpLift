'use client';

import Image from 'next/image';
import SectionWrapper from '@/layout/SectionWrapper';
import { Linkedin } from 'lucide-react'; // Using lucide-react for the icon

import { motion } from 'motion/react';
import SectionTitlebar from '../ui/SectionTitlebar';

interface MemberProps {
  name: string;
  role: string;
  experience: string;
  imageUrl: string;
}

const TeamMemberCard = ({ name, role, experience, imageUrl }: MemberProps) => {
  return (
    <div className="hover:bg-primary flex min-h-70 w-full flex-col justify-between rounded-[45px] border border-black bg-white p-8 shadow-[0_5px_0_0_rgba(0,0,0,1)] transition-all duration-150 ease-in hover:outline">
      {/* Top Section: Avatar, Name, and LinkedIn */}
      <div className="relative flex w-full items-center gap-4">
        <div className="bg-primary relative h-20 w-20 shrink-0 overflow-hidden rounded-full border border-black">
          <Image src={imageUrl} alt={name} fill className="object-cover" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold">{name}</h3>
          <p className="text-sm font-medium">{role}</p>
        </div>
      </div>

      {/* Divider */}
      <div className="my-6 h-px w-full bg-black" />

      {/* Description */}
      <div className="w-full text-sm leading-relaxed">{experience}</div>
    </div>
  );
};

export default function TeamSection() {
  const team = [
    {
      name: 'Jain Smith',
      role: 'CEO and Founder',
      imageUrl: 'https://i.pravatar.cc/150?u=1',
      experience:
        '10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy.',
    },
    {
      name: 'Jane Doe',
      role: 'Director of Operations',
      imageUrl: 'https://i.pravatar.cc/150?u=2',
      experience:
        '7+ years of experience in project management and team leadership. Optimized internal processes.',
    },
    {
      name: 'Michael Brown',
      role: 'Senior SEO Specialist',
      imageUrl: 'https://i.pravatar.cc/150?u=3',
      experience:
        '5+ years of experience in SEO and content marketing. Track record of improving organic rankings.',
    },
    {
      name: 'Sarah Williams',
      role: 'PPC Manager',
      imageUrl: 'https://i.pravatar.cc/150?u=4',
      experience:
        '3+ years of experience in paid search and social media advertising. Managed large scale ad budgets.',
    },
    {
      name: 'Brian Knight',
      role: 'Content Creator',
      imageUrl: 'https://i.pravatar.cc/150?u=5',
      experience:
        '4+ years of experience in writing and editing. Skilled in creating compelling copy and optimizing content for SEO.',
    },
    {
      name: 'Emily Johnson',
      role: 'Data Analyst',
      imageUrl: 'https://i.pravatar.cc/150?u=6',
      experience:
        '3+ years of experience in data analysis and visualization. Skilled in using Google Analytics and SQL.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <SectionWrapper className="flex-col" id="team">
      <SectionTitlebar
        text="Team"
        description="Meet the skilled and experienced team behind our successful digital marketing strategies"
        descriptionClassName="md:max-w-80"
      />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid h-fit w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {team.map((member, index) => (
          <motion.div key={index} variants={cardVariants}>
            <TeamMemberCard {...member} />
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
