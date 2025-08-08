import Hero from '@/components/public-website/Hero';
import Features from '@/components/public-website/Fetaures';
import HowItWorks from '@/components/public-website/HowItsWork';
import SoftwareInAction from '@/components/public-website/SoftwareInAction';
import Pricing from '@/components/public-website/Prising';
import WhyChooseUs from '@/components/public-website/WhyChooseUs';
import Testimonials from '@/components/public-website/Testimonials';


export default function Home() {
  return (<>
    <Hero />
    <Features />
    <HowItWorks />
    <SoftwareInAction />
    <WhyChooseUs />
    <Pricing />
    <Testimonials />
  </>
  );
}
