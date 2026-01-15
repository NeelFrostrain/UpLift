import HeroSection from '@/components/common/HeroSection';
import Navbar from '@/components/common/Navbar';
import ServicesSection from '@/components/common/ServicesSection';
import TrustedSection from '@/components/common/TrustedSection';

export default function App() {
  return (
    <div className="px-0 select-none xl:px-10 xl:pt-2">
      <Navbar />
      <HeroSection />
      {/* <TrustedSection /> */}
      <ServicesSection />
    </div>
  );
}
