'use client';

import { useState } from 'react';
import SectionWrapper from '@/layout/SectionWrapper';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../ui/carousel';
import SectionTitlebar from '../ui/SectionTitlebar';

const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    position: 'Marketing Manager',
    quote:
      'This service has been incredible for our business growth. Highly recommended!',
  },
  {
    id: 2,
    name: 'Jane Smith',
    position: 'CEO at TechCorp',
    quote:
      'A game changer for our daily operations. The team is fantastic to work with.',
  },
  {
    id: 3,
    name: 'Alice Johnson',
    position: 'Freelancer',
    quote: 'I love how easy it is to use. It saved me so much time and effort.',
  },
];

export default function ReviewsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };
  return (
    <div className="mx-auto max-w-6xl rounded-[45px] bg-[#191a23] p-10 font-sans text-white">
      <div className="relative mb-10 overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${activeIndex * 50}%)` }} // Adjust based on visible cards
        >
          {testimonials.map((item) => (
            <div key={item.id} className="min-w-full px-4 md:min-w-[50%]">
              {/* Speech Bubble Card */}
              <div className="relative mb-8 rounded-[40px] border border-[#b9ff66] p-8 md:p-12">
                <p className="text-lg leading-relaxed">"{item.quote}"</p>
                {/* Speech Bubble Arrow */}
                <div className="absolute -bottom-[21px] left-12 h-10 w-10 rotate-45 transform border-r border-b border-[#b9ff66] bg-[#191a23]"></div>
              </div>

              {/* Author Info */}
              <div className="ml-16">
                <h4 className="text-lg font-bold text-[#b9ff66]">
                  {item.name}
                </h4>
                <p className="text-sm">{item.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="mx-auto mt-12 flex max-w-sm items-center justify-between">
        <button
          onClick={prevSlide}
          className="transition-colors hover:text-[#b9ff66]"
        >
          <ChevronLeft size={32} />
        </button>

        {/* Pagination Dots (Star shaped as per image) */}
        <div className="flex gap-4">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`transition-colors ${activeIndex === idx ? 'text-[#b9ff66]' : 'text-white'}`}
            >
              <Star
                size={16}
                fill={activeIndex === idx ? 'currentColor' : 'none'}
              />
            </button>
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="transition-colors hover:text-[#b9ff66]"
        >
          <ChevronRight size={32} />
        </button>
      </div>
    </div>
  );
}
