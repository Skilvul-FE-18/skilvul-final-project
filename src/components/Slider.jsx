import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import gambar1 from '../assets/img/1 (2).png';
import gambar2 from '../assets/img/2 (2).png';
import gambar3 from '../assets/img/3.png';
import '../assets/css/Home.css';

function SliderComponent() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
    };

    return (
        <>
            <section id="slider">
                <div className="container">
                    <h1 className="text-center mb-5 mt-5" style={{ color: '#FEFEFE' }}>
                        Tips untuk Sobat Buddy
                    </h1>
                    <h5 className="text-center" style={{ color: '#FEFEFE' }}>
                        Berikut tips untuk mencegah terjadinya bullying yang bisa sobat buddy lakukan ya.
                    </h5>
                    <div className="row">
                        <div className="col-lg-12">
                            <Slider {...settings}>
                                <div>
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="card">
                                                <img src={gambar1} alt="" className="card-img-top" />
                                                <div className="card-body text-center">
                                                    <p className="card-text">Tingkatkan kepercayaan dan keberanian dirimu</p>
                                                    <a href="#" className="btn-lihat">
                                                        Baca Selengkapnya
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="card">
                                                <img src={gambar2} alt="" className="card-img-top" />
                                                <div className="card-body text-center">
                                                    <p className="card-text">Berbaur dengan teman yang memberikan pengaruh positif</p>
                                                    <a href="#" className="btn-lihat">
                                                        Baca Selengkapnya
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="card">
                                                <img src={gambar3} alt="" className="card-img-top" />
                                                <div className="card-body text-center">
                                                    <p className="card-text">Berani untuk berkata tidak saat kamu merasa tidak nyaman</p>
                                                    <a href="#" className="btn-lihat">
                                                        Baca Selengkapnya
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default SliderComponent;