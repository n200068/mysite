import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Advantages from '@/components/Advantages';
import SocialProof from '@/components/SocialProof';
import Portfolio from '@/components/Portfolio';
import Guarantees from '@/components/Guarantees';
import Reviews from '@/components/Reviews';
import FAQ from '@/components/FAQ';
import Contacts from '@/components/Contacts';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <Advantages />
        <SocialProof />
        <Portfolio />
        <Guarantees />
        <Reviews />
        <FAQ />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
}