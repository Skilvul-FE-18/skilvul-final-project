import Slider from '../components/Slider';
import Home from '../components/Home';
import MainLayout from '../layout/MainLayout';
import Artikel from '../components/Artikel';
import About from '../components/About';
import FormPelaporan from '../components/Lapor';
MainLayout

function LandingPage() {
    return (
        <div>
            <MainLayout>

                <Home />
                <About />
                <Artikel />
                <Slider />
                <FormPelaporan />
            </MainLayout>

        </div>
    );
}

export default LandingPage;