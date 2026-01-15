import assets from '@/assets.json';
import SectionWrapper from '@/layout/SectionWrapper';
import SectionTitlebar from '../ui/SectionTitlebar';
import ServiceCard from '../ui/ServiceCard';

export default function ServicesSection() {
  return (
    <SectionWrapper className="flex-col">
      <SectionTitlebar
        text="Services"
        description="At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:"
      />
      <div className="my-10 grid w-full grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {assets.services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </SectionWrapper>
  );
}
