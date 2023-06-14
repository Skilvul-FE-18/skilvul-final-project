import Lapor from '../../assets/img/lapor.png'

function HomeFormLapor() {
  return (
    <>
    <section className="HomeFormLapor mt-5 mb-5">

    <div className="container">
    <div className="container">
        <div className="row text-center">
          <div className="heading">
            <span>Jangan Diam! Jangan Takut!</span>
            <p>
              Segera laporkan apabila sobat Buddy melihat <br /> ataupun menjadi korban bullying
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-6 text-center">
            <img src={Lapor} alt="image" style={{height:'320px'}} />
          </div>
          <div className="col-6">
            <div className="artikel-text">
              <br />
              <br />
              <span>Ayo Lapor</span>
              <p>
              Kami Menyediakan fitur pelaporan untuk membantu sobat buddy kalau tahu temanmu menjadi korban bullying, langsung laporkan disini.
              </p>
              <button href="#">Lihat Selengkapnya</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
    </>
  )
}

export default HomeFormLapor