import HeroSection from '@/components/common/HeroSection';
import Navbar from '@/components/common/Navbar';
import ReviewsSection from '@/components/common/ReviewsSection';
import ServicesSection from '@/components/common/ServicesSection';
import TeamSection from '@/components/common/TeamSection';
import TrustedSection from '@/components/common/TrustedSection';
import WorkingProcessSection from '@/components/common/WorkingProcessSection';

export default function App() {
  return (
    <div className="px-0 select-none xl:px-10 xl:pt-2">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <WorkingProcessSection />
      <TeamSection />
      <TrustedSection />
      <ReviewsSection />
    </div>
  );
}
