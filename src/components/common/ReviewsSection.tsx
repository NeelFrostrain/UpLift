'use client';

import { useEffect, useState } from 'react';
import SectionWrapper from '@/layout/SectionWrapper';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import SectionTitlebar from '../ui/SectionTitlebar';

// Ensure this path matches your project structure

type Testimonial = {
  id: number;
  name: string;
  position: string;
  quote: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Michael Brown',
    position: 'Director of Operations',
    quote:
      'Efficient, reliable, and simply the best solution we have ever used.',
  },
  {
    id: 2,
    name: 'Emily Davis',
    position: 'Product Designer',
    quote:
      'The attention to detail and user experience is unmatched. Truly outstanding work.',
  },
  {
    id: 3,
    name: 'John Smith',
    position: 'Marketing Director at XYZ Corp',
    quote:
      'We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads.',
  },
  {
    id: 4,
    name: 'Jane Doe',
    position: 'CEO at Techflow',
    quote:
      'The team is professional, responsive, and truly cares about the success of our business.',
  },
  {
    id: 5,
    name: 'Robert Wilson',
    position: 'Founder of StartUp',
    quote:
      'Highly recommend their services to any company looking to grow their online presence significantly.',
  },
];

export default function ReviewsSection() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <SectionWrapper className="w-full flex-col px-4 py-12" id="reviews">
      {/* <SectionTitlebar
        text="Reviews"
        description="What our clients say about us "
      /> */}
      {/* Dark Container */}
      <div className="mx-auto my-20 w-full max-w-7xl rounded-[45px] bg-[#191a23] py-16 text-white md:py-24">
        <Carousel
          setApi={setApi}
          opts={{
            align: 'center', // Centers the active card
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4 md:-ml-10">
            {testimonials.map((item, index) => (
              <CarouselItem
                key={item.id}
                // basis-[80%] on mobile, basis-[60%] on desktop to show sides
                className="pl-4 transition-opacity duration-500 md:basis-[60%] md:pl-10 lg:basis-[50%]"
                style={{ opacity: current === index ? 1 : 0.4 }}
              >
                <div className="flex h-full flex-col">
                  {/* Speech Bubble */}
                  <div className="relative mx-5 mb-10 rounded-[40px] border border-[#b9ff66] p-8 sm:mx-0 md:p-12">
                    <p className="text-lg leading-relaxed text-slate-100">
                      "{item.quote}"
                    </p>
                    {/* Speech Bubble Arrow */}
                    <div className="absolute -bottom-[21px] left-12 h-10 w-10 rotate-45 transform border-r border-b border-[#b9ff66] bg-[#191a23]"></div>
                  </div>

                  {/* Author Info */}
                  <div className="ml-16">
                    <h4 className="text-lg font-bold text-[#b9ff66]">
                      {item.name}
                    </h4>
                    <p className="text-sm text-slate-300">{item.position}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation Controls */}
          <div className="mt-16 flex items-center justify-center gap-6 md:gap-24">
            {/* Custom Previous Button */}
            <CarouselPrevious
              variant="ghost"
              className="static h-10 w-10 translate-y-0 border-0 text-white hover:bg-transparent hover:text-[#b9ff66] [&_svg]:h-8 [&_svg]:w-8"
            />

            {/* Pagination Stars */}
            <div className="flex gap-2 md:gap-4">
              {Array.from({ length: count }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => api?.scrollTo(idx)}
                  className={`transition-all duration-300 ${
                    current === idx ? 'text-[#b9ff66]' : 'text-white'
                  }`}
                >
                  <Star
                    size={24}
                    fill={current === idx ? 'currentColor' : 'none'}
                    className={
                      current === idx ? 'scale-110' : 'scale-90 opacity-40'
                    }
                  />
                </button>
              ))}
            </div>

            {/* Custom Next Button */}
            <CarouselNext
              variant="ghost"
              className="static h-10 w-10 translate-y-0 border-0 text-white hover:bg-transparent hover:text-[#b9ff66] [&_svg]:h-8 [&_svg]:w-8"
            />
          </div>
        </Carousel>
      </div>
    </SectionWrapper>
  );
}
