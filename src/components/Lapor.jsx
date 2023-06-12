import React from 'react';
import admin from '../assets/img/adm.png';

function Lapor() {
    return (
        <section id="lapor">
            <div className="container">
                <div className="row d-flex align-items-center">
                    <div className="col-md-12 mt-5">
                        <h1>Jangan Diam! Jangan Takut!</h1>
                        <p>Segera laporkan apabila sobat Buddy melihat atau menjadi korban Bullying</p>
                    </div>
                    <div className="col-6">
                        <img src={admin} className="wok-profile w-485" alt="Administrator" />
                    </div>
                    <div className="col-5">
                        <h1>Ayo lapor</h1>
                        <p>Kami menyediakan fitur pelaporan untuk membantu sobat buddy jika tahu temanmu menjadi korban bullying, langsung laporkan di sini.</p>
                        <a className="nav-link" href="#form">
                            <button className="btn-lihat">Buat Laporan</button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Lapor;