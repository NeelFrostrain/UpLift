import Image from 'next/image';
import assets from '@/assets.json';
import SectionWrapper from '@/layout/SectionWrapper';
import SectionTitlebar from '../ui/SectionTitlebar';

export default function TrustedSection() {
  return (
    <SectionWrapper className="mt-10 w-full flex-col pt-0 md:mt-0">
      <SectionTitlebar text="Trusted By Professionals" />
      <div className="flex w-full flex-wrap items-center justify-center md:justify-between">
        {assets.Company_logos.map((logo, index) => (
          <Image
            key={index}
            src={logo.url}
            alt={`Company Logo ${index + 1}`}
            width={1000}
            height={1000}
            className="max-w-28 scale-75 md:scale-75 xl:max-w-32"
          />
        ))}
      </div>
    </SectionWrapper>
  );
}
