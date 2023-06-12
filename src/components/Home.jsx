import React, { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import banner1 from '../assets/img/Banner 1.png';
import banner2 from '../assets/img/Banner 2.png';
import banner3 from '../assets/img/Banner 3.png';
import orang from '../assets/img/orang.png';
import '../assets/css/Home.css';

function Home() {
    const slickRef = useRef(null);

    useEffect(() => {
        // Initialize Slick Carousel after component has loaded
        slickRef.current.slickNext();
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
    };

    const handlePrev = () => {
        slickRef.current.slickPrev();
    };

    const handleNext = () => {
        slickRef.current.slickNext();
    };

    return (
        <>
            <section id="home" style={{ backgroundColor: "#f4f7f9" }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6 text-dark mt-5">
                            <p>#LawanBullying</p>
                            <h1>Jangan Takut!</h1>
                            <h1>Ayo Laporkan Bullying</h1>
                            <p className="description">
                                Komisi Perlindungan Anak Indonesia (KPAI) menerima setidaknya 37.381 laporan perundungan dalam kurun waktu
                                2011 hingga 2019. Dari jumlah tersebut, 2.473 kasus diduga terjadi di dunia pendidikan.
                            </p>
                        </div>
                        <div className="col-md-6 mt-5">
                            <img src={orang} className="w-100 img-fluid" alt="Orang" />
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className='row'>
                        <div className="col-md-12">
                            <Slider ref={slickRef} {...settings}>

                                <div className="carousel-item active">
                                    <img className="d-block w-100 img-fluid" src={banner1} alt="First slide" />
                                </div>
                                <div>
                                    <img className="d-block w-100 img-fluid" src={banner2} alt="Second slide" />
                                </div>
                                <div>
                                    <img className="d-block w-100 img-fluid" src={banner3} alt="Third slide" />
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>


                <div className="carousel-controls">
                    <button className="carousel-control-prev" onClick={handlePrev}>
                        Previous
                    </button>
                    <button className="carousel-control-next" onClick={handleNext}>
                        Next
                    </button>
                </div>
            </section>
        </>
    );
}

export default Home;