import Image from 'next/image';
import assets from '@/assets.json';
import SectionWrapper from '@/layout/SectionWrapper';

export default function TrustedSection() {
  return (
    <SectionWrapper className="mt-20 flex-wrap items-center justify-center space-x-5">
      {assets.Company_logos.map((logo, index) => (
        <Image
          key={index}
          src={logo.url}
          alt={`Company Logo ${index + 1}`}
          width={1000}
          height={1000}
          className="max-w-28 scale-75 md:scale-75"
        />
      ))}
    </SectionWrapper>
  );
}
