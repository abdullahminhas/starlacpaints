import { Header } from '../components/Header';
import Hero from '../components/Hero';
import BestSellingProducts from '../components/BestSellingProducts';
import AboutStarLac from '../components/AboutStarLac';
import Mission from '../components/Mission';
import CEOMessage from '../components/CeoMessage';
import DIYTutorials from '../components/DIYTutorials';
import GetInspired from '../components/GetInspired';
import PlayWithColors from '../components/PlayWithColors';
import ColorTrends from '../components/ColorTrends';
import Testimonials from '../components/Testimonials';
import Blog from '../components/Blog';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Hero />
      <BestSellingProducts />
      <AboutStarLac />
      <Mission />
      <CEOMessage />
      <DIYTutorials />
      <GetInspired />
      <PlayWithColors />
      <ColorTrends />
      <Testimonials />
      <Blog />
      <FAQ />
      <Footer />
    </div>
  );
}