function CardHome({ src, tittle }) {
  return (
    <>
      <div className="card mb-3" style={{ width: "18rem" }}>
        <img src={src} className="card-img-top" alt="..."
        style={{height: "170px"}}
        />
        <div className="card-body row justify-content-center">
          <p className="card-text text-center">{tittle}</p>
          <a
            href="#"
            className="btn btn-primary"
            style={{
              width: "190px",
            }}
          >
            Baca Selengkapnya
          </a>
        </div>
      </div>
    </>
  );
}

export default CardHome;
