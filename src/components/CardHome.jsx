import imgCard from '../assets/img/img-card-1.png'

function CardHome({src,tittle}) {
  return (
    <>
      {/* <div className="card">
        <div className="card-image">
          <img src={src} alt="image" />
        </div>
        <p>{tittle}</p>
        <div className="card-button">
          <button>Baca Selengkapnya</button>
        </div>
      </div> */}
        <div className="card mb-3" style={{ width: "18rem" }}>
                  <img src={src} className="card-img-top" alt="..." />
                  <div className="card-body row justify-content-center">
                    <p className="card-text text-center">
                      {tittle}
                    </p>
                    <a href="#" className="btn btn-primary" style={{
                      width:'170px'
                    }}>
                      Baca Selengkapnya
                    </a>
                  </div>
                </div>
    </>
  );
}

export default CardHome;
