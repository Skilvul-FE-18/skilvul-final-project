
import '../assets/css/LandingPage.css'
import MainLayout from "./../layout/MainLayout";
import Hero from '../components/Hero';
import AboutBanner from '../components/AboutBanner';
import HomeArtikel from '../components/HomeArtikel';
import HomeListArtikel from '../components/HomeListArtikel';
import HomeFormLapor from '../components/HomeFormLapor';

function LandingPage() {
  return (
    <>
      
        <MainLayout>
          <Hero />
          <AboutBanner />
          <HomeArtikel />
          <HomeListArtikel />
          <HomeFormLapor />
        </MainLayout>
      
    </>
  );
}

export default LandingPage;
