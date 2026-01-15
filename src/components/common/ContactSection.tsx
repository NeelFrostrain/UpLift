'use client';

import Image from 'next/image';
import SectionWrapper from '@/layout/SectionWrapper';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import SectionTitlebar from '../ui/SectionTitlebar';
import { Textarea } from '../ui/textarea';

export default function ContactSection() {
  return (
    <SectionWrapper className="my-20 flex-col px-2 md:my-48">
      <SectionTitlebar
        text="Contact Us"
        description="Connect with Us: Let's Discuss Your Digital Marketing Needs"
        descriptionClassName="max-w-70"
      />
      <div className="relative mt-10 flex w-full items-stretch justify-between overflow-hidden rounded-2xl border bg-gray-100 p-5 text-black shadow-[0_5px_0_0_rgba(0,0,0,1)] lg:border-none lg:bg-transparent lg:px-0 lg:shadow-none">
        {/* Form Side */}
        <div className="flex w-full flex-col items-start justify-start gap-6 md:max-w-125">
          <div className="w-full space-y-2">
            <Label htmlFor="name" className="text-sm font-medium">
              Name
            </Label>
            <Input
              id="name"
              placeholder="Name"
              className="h-12 rounded-xl border-black bg-white"
            />
          </div>

          <div className="w-full space-y-2">
            <Label htmlFor="email" className="text-sm font-medium">
              Email*
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Email"
              className="h-12 rounded-xl border-black bg-white"
            />
          </div>

          <div className="w-full space-y-2">
            <Label htmlFor="message" className="text-sm font-medium">
              Message*
            </Label>
            <Textarea
              id="message"
              placeholder="Message"
              className="min-h-37.5 rounded-xl border-black bg-white"
            />
          </div>

          <button className="hover:bg-primary mt-3 w-full cursor-pointer rounded-[14px] bg-black px-6 py-3 text-sm font-medium text-white transition-all duration-150 ease-in hover:text-black hover:shadow-[0_5px_0_0_rgba(0,0,0,1)] hover:outline hover:outline-black md:mt-1">
            Send Message
          </button>
        </div>

        {/* Illustration Side */}
        <div className="absolute top-0 right-0 hidden h-full w-1/2 items-center justify-end lg:flex">
          <Image
            src="/ContactIllustration.png"
            alt="Contact Illustration"
            width={600}
            height={600}
            className="rotate-180 object-contain"
            priority
          />
        </div>
      </div>
    </SectionWrapper>
  );
}
