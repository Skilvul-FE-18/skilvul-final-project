import React from 'react';
import laptop from '../assets/img/laptop.png';
import '../assets/css/Home.css';
function Artikel() {
    return (
        <>
            <section id="artikel bg-primary py-2">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1>Bersama Buddy mari kita memerangi bullying!</h1>
                            <p className="secondary-heading">Ayo tingkatkan pengetahuan kamu mengenai dampak dan akibat dari bullying</p>
                        </div>
                    </div>
                </div>
            </section>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img src={laptop} className="wok-profile w-485 mb-3" alt="Laptop Image" />
                    </div>
                    <div className="col-md-6">
                        <h1>Artikel</h1>
                        <p className="description">Kami menyediakan informasi dan bacaan yang cocok untuk sobat Buddy meningkatkan pengetahuan mengenai dampak dan akibat dari bullying</p>
                        <a href="/comingsoon.html">
                            <button className="btn-lihat">Baca Selengkapnya</button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Artikel